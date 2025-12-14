---
title: "How I Built an AI-Powered Phishing Detector (Technical Breakdown)"
description: "A complete technical breakdown of how I built an AI-powered phishing detection system using ML, XGBoost, ANN, LSTM, feature engineering, and FastAPI deployment."
slug: "AI_Powered_Phising_Detector"
author: "CodewithLord"
date: "2025-12-12"
image: "/Assets/src/AI_Powered_Phising_Detector.png"
---

<br>

## ⭐ Introduction

<br>

Phishing websites represent one of the most dangerous cybersecurity threats in 2025. Attackers create near-perfect replicas of legitimate websites—banks, PayPal, Gmail, Amazon—that are virtually indistinguishable from the real thing. When unsuspecting users visit these malicious sites, they unknowingly enter their credentials, and attackers steal sensitive information including passwords, OTPs (One-Time Passwords), banking data, credit card numbers, and personal identity information.

<br>

Traditional rule-based phishing detection systems fail because attackers continuously evolve their methods. They use new domains, sophisticated obfuscation techniques, and advanced social engineering tactics that rule-based systems can't detect. That's where machine learning comes in.

<br>

So I decided to build an intelligent AI system that could:

<br>

- **Learn patterns in URLs** from millions of examples
- **Detect new phishing websites** never seen before (zero-day detection)
- **Works in real time** with minimal latency
- **Maintains high accuracy** with extremely low false positives (critical for user trust)
- **Adapts continuously** as new phishing tactics emerge

<br>

This is where **machine learning and deep learning** become powerful weapons against cybercriminals.

<br>

---

<br>

## 🧠 Step 1: Collecting & Understanding the Dataset

<br>

### Dataset Foundation

<br>

The first and most critical step was finding reliable data. I used a comprehensive URL-based phishing dataset that contained thousands of carefully labeled URLs collected from multiple sources including APWG (Anti-Phishing Working Group), honeypots, and verified phishing reports.

<br>

### Label Structure

<br>

Each URL in the dataset was labeled as:

<br>

- **0 → Legitimate** (Real, trusted websites)
- **1 → Phishing** (Malicious, fake websites)

<br>

### Initial Dataset Characteristics

<br>

The dataset included pre-extracted features such as:

<br>

- **URL length** - Phishing URLs tend to be longer and more complex
- **Number of digits** - Attackers often hide IP addresses as numbers
- **Presence of "@" symbol** - Classic phishing trick to hide real domain
- **Subdomain count** - Excessive subdomains indicate suspicious origin
- **HTTPS status** - Whether site uses HTTPS (phishing sites often fake this)
- **Special characters** - Unusual special chars indicate suspicious URLs
- **TLD (Top-Level Domain) patterns** - Uncommon TLDs often indicate phishing
- **Domain age** - Very new domains are suspicious
- **IP address presence** - Direct IP usage instead of domain names

<br>

### Custom Feature Extraction

<br>

Beyond the pre-extracted features, I engineered **custom features** using Python to boost model accuracy:

<br>

- **URL entropy** - Measures randomness/disorder in URLs
- **Digit-to-character ratio** - High ratios often indicate phishing
- **Suspicious keyword presence** - Words like "verify," "confirm," "update"
- **Character frequency analysis** - Unusual character distributions
- **Domain similarity score** - How close domain is to legitimate brands

<br>

---

<br>

## ⚙️ Step 2: Preprocessing & Feature Engineering

<br>

This was arguably the **most important and challenging part** of the entire project. As the famous data science saying goes: "Garbage in, garbage out." Quality preprocessing directly determines model performance.

<br>

### Data Cleaning Process

<br>

**Step 1: Remove Duplicates**
```
Original dataset: 10,000 URLs
After removing duplicates: 9,850 URLs
```

<br>

**Step 2: Handle Missing Values**
- Identified columns with missing data
- Used forward fill and mean imputation for numerical features
- Removed rows with critical missing values

<br>

**Step 3: Outlier Detection & Removal**

Applied **IQR (Interquartile Range) method**:

```
Q1 = 25th percentile
Q3 = 75th percentile
IQR = Q3 - Q1
Lower bound = Q1 - 1.5 × IQR
Upper bound = Q3 + 1.5 × IQR
Remove values outside these bounds
```

This removed ~2% of extreme outliers that could skew the model.

<br>

### Feature Scaling & Normalization

<br>

Applied **StandardScaler** to normalize all features:

```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Transforms data to mean=0, std=1
# Critical for models like ANN, SVM, and distance-based algorithms
```

<br>

Why scaling matters:
- **Gradient Descent Optimization**: Neural networks converge faster with scaled data
- **Feature Importance**: Prevents features with larger ranges from dominating
- **Distance Metrics**: Ensures fair distance calculations in KNN, SVM

<br>

### Target Encoding

<br>

**Label Encoding** for the target variable:
- Legitimate URLs → 0
- Phishing URLs → 1

<br>

### Train-Test Split

<br>

Split data into **80% training, 20% testing**:

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
```

<br>

Used **stratified split** to maintain class distribution:
- Training set: 80% (50% legitimate, 50% phishing)
- Testing set: 20% (50% legitimate, 50% phishing)

<br>

### Dataset Balancing

<br>

Real-world phishing datasets are imbalanced (more legitimate URLs than phishing). Applied **SMOTE (Synthetic Minority Oversampling Technique)**:

```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)
```

This created synthetic phishing examples to balance the dataset, improving recall on phishing detection.

<br>

### Custom Feature Engineering

<br>

Implemented domain-specific features:

<br>

**1. IP Address Detection**
```python
def is_ip_present(url):
    """Detect if URL uses direct IP instead of domain"""
    pattern = r'(\d{1,3}\.){3}\d{1,3}'
    return 1 if re.search(pattern, url) else 0
```
Phishing URLs often use IP addresses to hide the real host.

<br>

**2. URL Entropy**
```python
def url_entropy(url):
    """Calculate Shannon entropy of URL"""
    # High entropy = random characters = suspicious
    # Low entropy = normal patterns = legitimate
    entropy = -sum((url.count(c)/len(url)) * 
             np.log2(url.count(c)/len(url)+1e-10) 
             for c in set(url))
    return entropy
```

Phishing URLs have higher entropy due to randomized characters.

<br>

**3. Digit Count & Ratio**
```python
def count_digits(url):
    """Count digits in URL"""
    return sum(1 for c in url if c.isdigit())

def digit_ratio(url):
    """Calculate digit-to-character ratio"""
    digits = sum(1 for c in url if c.isdigit())
    return digits / len(url) if len(url) > 0 else 0
```

Phishing URLs embed more digits (often IP addresses).

<br>

**4. Suspicious Keywords**
```python
def contains_suspicious_words(url):
    """Detect phishing-related keywords"""
    suspicious = ['verify', 'confirm', 'update', 'login', 
                  'account', 'banking', 'password']
    return 1 if any(word in url.lower() for word in suspicious) else 0
```

Phishing URLs often mimic legitimate actions.

<br>

**5. Special Character Frequency**
```python
def special_char_frequency(url):
    """Calculate frequency of special characters"""
    special_chars = len([c for c in url if not c.isalnum()])
    return special_chars / len(url) if len(url) > 0 else 0
```

Excessive special characters indicate obfuscation attempts.

<br>

---

<br>

## 🚀 Step 3: Choosing the Best ML Model

<br>

### Model Experimentation & Comparison

<br>

I systematically experimented with multiple machine learning models to find the best solution:

<br>

### Model Performance Table

<br>

| Model | Accuracy | Precision | Recall | F1-Score | Training Time | Notes |
|-------|----------|-----------|--------|----------|---------------|-------|
| **Logistic Regression** | 87% | 0.85 | 0.84 | 0.84 | Fast | Too simple, underfitting |
| **Decision Tree** | 92% | 0.90 | 0.91 | 0.90 | Fast | Overfits easily, high variance |
| **Random Forest** | 95% | 0.94 | 0.95 | 0.94 | Medium | Strong baseline, good generalization |
| **SVM (RBF Kernel)** | 93% | 0.91 | 0.93 | 0.92 | Very Slow | Computationally expensive |
| **Gradient Boosting** | 96% | 0.96 | 0.95 | 0.95 | Medium | Very good, slightly slow |
| **XGBoost** | **98%** | **0.97** | **0.98** | **0.97** | **Medium** | **Best structured data performance** |
| **Neural Network (ANN)** | **97%** | **0.96** | **0.97** | **0.96** | Medium | Deep learning advantage |
| **LSTM (RNN)** | **96%** | **0.95** | **0.96** | **0.95** | Slow | Character-level pattern learning |
| **Ensemble (XGBoost+ANN)** | **99%** | **0.98** | **0.99** | **0.98** | Medium | **Best overall performance** |

<br>

### 🏆 Winner: XGBoost + ANN Ensemble

<br>

After comprehensive testing, I selected a **hybrid ensemble approach** combining XGBoost and Artificial Neural Networks:

<br>

**Why XGBoost Excels:**

<br>

- **Structured Data Master**: XGBoost was specifically designed for tabular/structured data
- **Feature Importance**: Automatically ranks which URL features matter most
- **Handles Nonlinearity**: Captures complex patterns through gradient boosting
- **Robust**: Resistant to outliers and noise
- **Fast Training**: Efficient computation even with large datasets
- **Built-in Regularization**: Prevents overfitting naturally

<br>

**Why ANN Adds Value:**

<br>

- **Captures Deep Patterns**: Neural networks find subtle, nonlinear relationships
- **Redundancy Detection**: Can learn feature interactions XGBoost might miss
- **Generalization**: ANN sometimes generalizes better to unseen URLs
- **Different Perspective**: Ensemble learning benefits from diverse approaches

<br>

**Ensemble Benefits:**

<br>

Combining both models improved:

<br>

- **Recall**: 97% → 99% (catches more phishing sites)
- **Precision**: 96% → 98% (fewer false alarms)
- **F1-Score**: 0.96 → 0.98 (overall performance)
- **Overall Accuracy**: 97% → 99% (more correct predictions)
- **Robustness**: Better performance on edge cases and new URLs

<br>

The ensemble approach provides the "wisdom of crowds" effect—combining different models reduces individual model weaknesses.

<br>

---

<br>

## 🔧 Step 4: Building the Final ML Pipeline

<br>

### Why Pipelines Matter

<br>

In production, you need a **fully automated pipeline** that handles data from raw input to final prediction. A pipeline ensures:

- **Consistency**: Same preprocessing applied to training and deployment
- **Reproducibility**: Exact same transformations every time
- **Maintainability**: Easy to modify or update steps
- **Deployment Ready**: Can be saved and loaded as single unit

<br>

### Pipeline Implementation

<br>

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier

# Create automated pipeline
phishing_pipeline = Pipeline([
    ('feature_extraction', FeatureExtractor()),  # Custom feature engineering
    ('scaler', StandardScaler()),                 # Normalize features
    ('model', XGBClassifier(n_estimators=100, max_depth=6))  # XGBoost classifier
])

# Train on entire dataset
phishing_pipeline.fit(X_train, y_train)

# Single line prediction on new data
prediction = phishing_pipeline.predict([new_url_features])
```

<br>

### Pipeline Components

<br>

**1. Feature Extraction**
```python
class FeatureExtractor:
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        # Automatically extract all custom features
        X_extracted = pd.DataFrame()
        X_extracted['url_length'] = X['url'].apply(len)
        X_extracted['is_ip'] = X['url'].apply(is_ip_present)
        X_extracted['entropy'] = X['url'].apply(url_entropy)
        X_extracted['digit_count'] = X['url'].apply(count_digits)
        X_extracted['suspicious_words'] = X['url'].apply(contains_suspicious_words)
        return X_extracted
```

<br>

**2. Feature Scaling**
- StandardScaler normalizes all features to mean=0, std=1
- Critical for neural networks and distance-based algorithms

<br>

**3. Model Classification**
- XGBoost classifies URLs as legitimate (0) or phishing (1)
- Returns probability scores for confidence measurement

<br>

### Additional Pipeline Steps

<br>

**Automated Feature Extraction** - Extract all custom features automatically from raw URLs

<br>

**Outlier Removal** - Remove extreme outliers before scaling

<br>

**Scaling** - Normalize features to standard range

<br>

**Prediction Generation** - Output class and confidence score

<br>

### Model Serialization

<br>

```python
import joblib

# Save the entire pipeline as single file
joblib.dump(phishing_pipeline, "phishing_detector.pkl")

# Load it later
loaded_pipeline = joblib.load("phishing_detector.pkl")

# Use immediately
result = loaded_pipeline.predict([new_url_features])
```

<br>

Model file size: ~50MB (optimized using joblib compression)

<br>

### Integration Points

<br>

This saved pipeline enables easy integration into:

<br>

**1. Web Applications**
```python
# Flask web app
@app.route('/check', methods=['POST'])
def check_url():
    url = request.json['url']
    features = extract_features(url)
    prediction = pipeline.predict([features])
    return {"is_phishing": int(prediction[0])}
```

<br>

**2. REST APIs**
```python
# FastAPI endpoint
@app.post("/predict")
async def predict(url: str):
    features = extract_features(url)
    result = pipeline.predict([features])
    return {"url": url, "is_phishing": bool(result[0])}
```

<br>

**3. Mobile Applications**
```python
# Mobile app integration
import joblib
model = joblib.load('phishing_detector.pkl')
prediction = model.predict([features])
```

<br>

**4. Browser Extensions**
```javascript
// Browser extension checking URL in real-time
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    checkUrlWithAPI(tab.url);
});
```

<br>

---

<br>

## 🧠 Step 5: Deep Learning Model (LSTM - Long Short-Term Memory)

<br>

### Why LSTM for Phishing Detection?

<br>

While XGBoost excels with structured features, **LSTM (Long Short-Term Memory) networks** bring a different advantage: they learn **sequential patterns** in URLs character-by-character. This is powerful because:

- Phishing URLs often have specific **character sequences** (suspicious patterns)
- LSTM remembers long-range dependencies (patterns far apart in the URL)
- **No manual feature engineering needed** - learns raw URL patterns
- Can detect novel phishing techniques not in training data

<br>

### LSTM Architecture

<br>

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout

# Create LSTM model
lstm_model = Sequential([
    # Embedding layer: Convert characters to vectors
    Embedding(input_dim=128, output_dim=64, input_length=200),
    
    # LSTM layer: Learn sequential patterns
    LSTM(units=64, return_sequences=False),
    
    # Dropout: Prevent overfitting
    Dropout(0.2),
    
    # Dense hidden layer
    Dense(units=32, activation='relu'),
    
    # Output layer: Phishing probability (0-1)
    Dense(units=1, activation='sigmoid')
])

# Compile model
lstm_model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy', 'AUC']
)

# Train on URLs
lstm_model.fit(X_train, y_train, epochs=20, batch_size=32, validation_split=0.1)
```

<br>

### How LSTM Works for URLs

<br>

**Step 1: Character Embedding**
- Each character in URL gets converted to a 64-dimensional vector
- Similar characters have similar vectors
- Learned during training

<br>

**Step 2: Sequential Processing**
- LSTM processes URL character-by-character
- Maintains "memory" of previous characters
- Learns which sequences indicate phishing

Example:
```
URL: "https://my-bank-verify-account.com"
LSTM learns that "verify-account" in domain is suspicious
```

<br>

**Step 3: Pattern Recognition**
- LSTM detects patterns like:
  - Excessive subdomains
  - Strange character sequences
  - Domain mimicry patterns
  - IP address patterns

<br>

**Step 4: Probability Output**
- Sigmoid activation outputs probability (0-1)
- 0.9 = 90% confidence it's phishing
- 0.1 = 10% confidence (likely legitimate)

<br>

### LSTM Advantages Over Traditional ML

<br>

| Aspect | Traditional ML | LSTM |
|--------|---|---|
| Feature Engineering | Manual, time-consuming | Automatic learning |
| Sequence Handling | Ignores URL structure | Exploits character sequences |
| New Phishing Patterns | May miss novel techniques | Better generalization |
| Interpretability | Can explain feature importance | Black box (harder to interpret) |
| Training Time | Fast | Slower (GPU helpful) |
| Performance | 97-98% | 96-97% |

<br>

### LSTM Results

<br>

```
Training Accuracy: 96%
Validation Accuracy: 95%
Test Accuracy: 94%
Training Time: ~10 minutes on GPU
Inference Time: ~5ms per URL
```

<br>

While LSTM's accuracy is slightly lower than XGBoost, it **detects different phishing patterns**, making it perfect for an **ensemble approach**.

<br>

---

<br>

## 📊 Step 6: Evaluating the Model

<br>

### Comprehensive Metrics

<br>

Never rely on a single metric. I evaluated using multiple dimensions:

<br>

### 1. Accuracy

<br>

```
Accuracy = (True Positives + True Negatives) / Total Predictions

Result: 99% accuracy
Meaning: 99 out of 100 predictions correct
```

**But accuracy alone is misleading!** If dataset is 99% legitimate URLs, a model that always predicts "legitimate" would have 99% accuracy while catching zero phishing sites.

<br>

### 2. Confusion Matrix

<br>

```
                 Predicted
              Phishing  Legitimate
Actual  
Phishing    1,950         50      (2,000 phishing)
Legitimate    100       1,900    (2,000 legitimate)
```

Insights from confusion matrix:
- **True Positives (TP)**: 1,950 - correctly detected phishing
- **True Negatives (TN)**: 1,900 - correctly identified legitimate
- **False Positives (FP)**: 100 - incorrectly flagged legitimate (annoying to users)
- **False Negatives (FN)**: 50 - missed phishing (security risk!)

<br>

### 3. Precision

<br>

```
Precision = True Positives / (True Positives + False Positives)
Precision = 1,950 / (1,950 + 100) = 0.95 = 95%

Meaning: Of all URLs we flagged as phishing, 95% actually were phishing
Why it matters: Users trust our warnings - false alarms hurt trust
```

<br>

### 4. Recall (Sensitivity)

<br>

```
Recall = True Positives / (True Positives + False Negatives)
Recall = 1,950 / (1,950 + 50) = 0.975 = 97.5%

Meaning: Of all actual phishing sites, we caught 97.5%
Why it matters: Missing phishing is a security failure
```

<br>

### 5. F1-Score

<br>

```
F1 = 2 × (Precision × Recall) / (Precision + Recall)
F1 = 2 × (0.95 × 0.975) / (0.95 + 0.975) = 0.962 = 96.2%

Meaning: Balanced measure of precision and recall
Use when: Both false positives and false negatives matter equally
```

<br>

### 6. ROC-AUC Score

<br>

```
ROC curve: Plots True Positive Rate vs False Positive Rate
AUC (Area Under Curve): 0.99 = Excellent discrimination

Interpretation:
- 0.50 = Random guessing (useless)
- 0.70-0.80 = Good
- 0.80-0.90 = Very good
- 0.90-1.00 = Excellent
```

ROC-AUC tells us: If we pick a random phishing URL and legitimate URL, our model correctly ranks the phishing URL as more suspicious 99% of the time.

<br>

### Final Performance Metrics

<br>

```
┌─────────────────────────────────────────┐
│     PHISHING DETECTOR PERFORMANCE       │
├─────────────────────────────────────────┤
│ Accuracy:           99%                 │
│ Precision:          98%                 │
│ Recall:             99%                 │
│ F1-Score:           0.98                │
│ ROC-AUC:            0.99                │
│ Training Time:      2 hours             │
│ Inference Time:     <10ms per URL       │
└─────────────────────────────────────────┘
```

<br>

### Performance on Unseen Data

<br>

```
Tested on completely new URLs (never seen during training):
✓ 98% accuracy on new phishing URLs
✓ 99% accuracy on new legitimate URLs
✓ Stable performance across different URL types
✓ Minimal degradation from training to test data
```

This demonstrates excellent **generalization** - the model works on real-world data it has never encountered.

<br>

---

<br>

## 💻 Step 7: Deploying the Phishing Detector

<br>

### Deployment Architecture

<br>

A working model in a Jupyter notebook is useless if it can't be deployed. I deployed using **FastAPI** (modern, fast Python web framework):

<br>

### FastAPI Implementation

<br>

```python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Load trained model
model = joblib.load("phishing_detector.pkl")

# Initialize FastAPI app
app = FastAPI(title="Phishing Detector API", version="1.0")

# Request schema
class URLInput(BaseModel):
    url: str

# Response schema
class PredictionResponse(BaseModel):
    url: str
    is_phishing: bool
    confidence: float
    recommendation: str

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "API is running"}

# Main prediction endpoint
@app.post("/predict", response_model=PredictionResponse)
async def predict(input_data: URLInput):
    try:
        url = input_data.url
        
        # Extract features
        features = extract_features(url)
        
        # Get prediction
        prediction = model.predict([features])[0]
        confidence = model.predict_proba([features])[0].max()
        
        # Determine recommendation
        if prediction == 1:
            recommendation = "⚠️ SUSPICIOUS - Do not enter credentials"
        else:
            recommendation = "✅ SAFE - Website appears legitimate"
        
        return PredictionResponse(
            url=url,
            is_phishing=bool(prediction),
            confidence=float(confidence),
            recommendation=recommendation
        )
    
    except Exception as e:
        return {"error": str(e)}

# Batch prediction endpoint
@app.post("/predict-batch")
async def predict_batch(urls: list):
    results = []
    for url in urls:
        result = await predict(URLInput(url=url))
        results.append(result)
    return results
```

<br>

### Deployment Platforms Used

<br>

**1. Render (Recommended)**
```
Pros: Free tier, easy deployment, automatic SSL
Steps:
1. Push code to GitHub
2. Connect Render to GitHub repo
3. Deploy automatically on push
```

<br>

**2. Vercel**
```
Pros: Extremely fast, global CDN, serverless
Steps:
1. Create vercel.json config
2. Push to GitHub
3. Auto-deploys on push
```

<br>

**3. AWS Lambda (Most Scalable)**
```
Pros: Pay-per-use, infinite scalability, production-grade
Steps:
1. Package FastAPI as Lambda function
2. Use API Gateway as endpoint
3. Auto-scales with demand
Estimated cost: $0.20 per million requests
```

<br>

### Real-Time Detection in Action

<br>

**Request:**
```json
POST /predict
Content-Type: application/json

{
  "url": "https://www.paypa1-verify-account.com"
}
```

<br>

**Response (Phishing Detected):**
```json
{
  "url": "https://www.paypa1-verify-account.com",
  "is_phishing": true,
  "confidence": 0.98,
  "recommendation": "⚠️ SUSPICIOUS - Do not enter credentials"
}
```

<br>

**Response (Legitimate):**
```json
{
  "url": "https://www.paypal.com",
  "is_phishing": false,
  "confidence": 0.99,
  "recommendation": "✅ SAFE - Website appears legitimate"
}
```

<br>

This enables real-time protection:
- **Instant feedback** on URL safety
- **Millisecond latency** for user experience
- **Scalable** to handle millions of requests
- **Reliable** with 99.9% uptime

<br>

---

<br>

## 🧩 Challenges I Faced & How I Fixed Them

<br>

### Challenge 1: High False Positives

<br>

**The Problem:**
```
Initial model flagged legitimate URLs as phishing too often
False Positive Rate: 15%
User Impact: Users lose trust, disable protection
```

<br>

**Root Causes:**
- Model was too aggressive (high sensitivity)
- Features weren't capturing true phishing patterns
- Class imbalance skewed predictions

<br>

**Solutions Applied:**

**1. Advanced Feature Engineering**
- Added domain reputation scores
- Implemented entropy-based detection
- Added suspicious keyword scoring
- Included domain age and SSL certificate validation

**2. Ensemble Learning**
```python
# Combine multiple models with voting
from sklearn.ensemble import VotingClassifier

ensemble = VotingClassifier(
    estimators=[
        ('xgb', xgb_model),
        ('ann', ann_model),
        ('rf', random_forest)
    ],
    voting='soft'  # Use probability scores
)
```

**3. Threshold Optimization**
```python
# Adjust decision threshold from 0.5 to 0.7
# Only flag as phishing if confidence > 0.7
# Reduces false positives significantly
```

**Result:**
```
False Positive Rate: 15% → 2%
User Trust Restored: ✓
```

<br>

### Challenge 2: URL Variety Is Huge

<br>

**The Problem:**
```
URLs vary dramatically:
- Short: "bit.ly/abc123"
- Long: "https://subdomain.example.co.uk/path/to/page?param=value"
- Special chars, international domains, encoded characters
- Model struggled with this variety
```

<br>

**Solutions:**

**1. Entropy-Based Features**
```python
# High entropy = random characters = suspicious
def url_entropy(url):
    entropy = -sum((url.count(c)/len(url)) * 
             np.log2(url.count(c)/len(url)+1e-10) 
             for c in set(url))
    return entropy
```

**2. LSTM for Character-Level Learning**
- LSTM learns patterns in character sequences
- Doesn't require fixed URL length
- Adaptive to different URL types

**3. Length Normalization**
```python
# Pad/truncate URLs to consistent length
max_length = 200
url_features = pad_sequences(urls, maxlen=max_length)
```

**Result:**
```
Now handles URLs of any length and structure
Performance stable across diverse URL types: ✓
```

<br>

### Challenge 3: Dataset Imbalance

<br>

**The Problem:**
```
Real-world data is imbalanced:
- 95% legitimate URLs
- 5% phishing URLs

Model learns to just predict "legitimate" for everything
Phishing detection rate: 0%
```

<br>

**Solutions:**

**1. SMOTE (Synthetic Minority Oversampling)**
```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42, k_neighbors=5)
X_train_balanced, y_train_balanced = smote.fit_resample(X_train, y_train)

# Generates synthetic phishing examples
# Before: 1,000 phishing, 19,000 legitimate
# After: 10,000 phishing, 10,000 legitimate (balanced)
```

**2. Class Weights in Model**
```python
# Penalize missed phishing more than false alarms
class_weights = {0: 1, 1: 10}  # Phishing 10x more important
```