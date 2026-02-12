"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ExecutionContent() {
  const [mounted, setMounted] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const executionMethods = [
    {
      title: 'Double Click Method',
      icon: '🖱️',
      steps: [
        'Locate your HTML file in File Explorer (Windows) or Finder (Mac)',
        'Double-click on the .html file',
        'File opens automatically in your default browser',
        'Your webpage is displayed!'
      ],
      difficulty: 'Easiest',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Right Click Method',
      icon: '📂',
      steps: [
        'Right-click on your HTML file',
        'Select "Open with"',
        'Choose your preferred browser (Chrome, Firefox, etc.)',
        'Webpage loads in selected browser'
      ],
      difficulty: 'Easy',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Drag & Drop Method',
      icon: '🎯',
      steps: [
        'Open your web browser',
        'Open your file location in another window',
        'Drag the HTML file into the browser window',
        'Release to open the file'
      ],
      difficulty: 'Easy',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Browser Address Bar',
      icon: '🔗',
      steps: [
        'Open your web browser',
        'Press Ctrl+O (Windows) or Cmd+O (Mac)',
        'Browse and select your HTML file',
        'Click "Open" to view the page'
      ],
      difficulty: 'Medium',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="w-full space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text ">
          ▶️ <span className="text-transparent">HTML Execution</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Learn different methods to run and view your HTML files in a web browser.
        </p>
      </motion.section>

      {/* What is Execution Section */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          What is HTML Execution? 🤔
        </h2>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            HTML execution means <span className="text-blue-400 font-semibold">opening and running your HTML file in a web browser</span>. 
            Unlike programming languages that need compilers, HTML files can be directly opened in any web browser.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-green-400 font-semibold">No Compilation</p>
              <p className="text-gray-400 text-sm mt-1">Direct execution</p>
            </div>
            <div className="bg-white/5 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌐</div>
              <p className="text-blue-400 font-semibold">Browser Required</p>
              <p className="text-gray-400 text-sm mt-1">Any modern browser</p>
            </div>
            <div className="bg-white/5 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-purple-400 font-semibold">Instant Preview</p>
              <p className="text-gray-400 text-sm mt-1">See changes live</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Execution Methods */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Methods to Execute HTML 🚀
        </h2>
        
        {/* Method Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {executionMethods.map((method, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedMethod(idx)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedMethod === idx
                  ? 'bg-gradient-to-br ' + method.color + ' border-white/30 shadow-lg scale-105'
                  : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-2">{method.icon}</div>
              <p className={`font-semibold text-sm ${selectedMethod === idx ? 'text-white' : 'text-gray-300'}`}>
                {method.title}
              </p>
              <p className={`text-xs mt-1 ${selectedMethod === idx ? 'text-white/80' : 'text-gray-500'}`}>
                {method.difficulty}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Selected Method Details */}
        <motion.div
          key={selectedMethod}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`text-5xl w-16 h-16 rounded-full bg-gradient-to-br ${executionMethods[selectedMethod].color} flex items-center justify-center shadow-lg`}>
              {executionMethods[selectedMethod].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{executionMethods[selectedMethod].title}</h3>
              <p className="text-gray-400">Difficulty: <span className="text-green-400">{executionMethods[selectedMethod].difficulty}</span></p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Step-by-Step Guide:</h4>
            {executionMethods[selectedMethod].steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${executionMethods[selectedMethod].color} flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                  {idx + 1}
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Live Reload Section */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Testing Your Changes 🔄
        </h2>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
          <p className="text-gray-300 leading-relaxed">
            After making changes to your HTML file, you need to refresh your browser to see the updates.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
              <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                🔵 Windows/Linux
              </h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">F5</kbd>
                  <span>Normal refresh</span>
                </p>
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Ctrl</kbd> + 
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">F5</kbd>
                  <span>Hard refresh</span>
                </p>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-5">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                🟣 Mac
              </h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Cmd</kbd> + 
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">R</kbd>
                  <span>Normal refresh</span>
                </p>
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Cmd</kbd> + 
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Shift</kbd> + 
                  <kbd className="px-2 py-1 bg-white/10 rounded text-sm">R</kbd>
                  <span>Hard refresh</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Common Issues */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Common Issues & Solutions 🔧
        </h2>
        <div className="space-y-4">
          {[
            {
              issue: 'File shows as plain text',
              solution: 'Make sure your file has .html extension, not .txt',
              icon: '📄'
            },
            {
              issue: 'Changes not appearing',
              solution: 'Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)',
              icon: '🔄'
            },
            {
              issue: 'File won\'t open',
              solution: 'Check if you have a web browser installed',
              icon: '🌐'
            },
            {
              issue: 'Broken layout/styles',
              solution: 'Check file paths for CSS and images - use relative paths',
              icon: '🎨'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-orange-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="text-red-400 font-semibold mb-1">❌ {item.issue}</h4>
                  <p className="text-green-400">✅ {item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Summary */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
      >
        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          ✅ Key Takeaways
        </h3>
        <ul className="list-disc ml-6 text-gray-300 space-y-2 leading-relaxed">
          <li>HTML files can be directly opened in any web browser</li>
          <li>No special software or compilation required</li>
          <li>Multiple methods available - choose what&apos;s easiest for you</li>
          <li>Always refresh browser to see changes</li>
          <li>Use hard refresh if changes don&apos;t appear immediately</li>
        </ul>
      </motion.section>
    </div>
  );
}