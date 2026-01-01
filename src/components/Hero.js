import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);
  const particlesRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mouse move parallax
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = ["JavaScript", "React", "Next.js", "Tailwind", "GSAP", "Git"];

  return (
    <section className="hero">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:60px_60px]"
        style={{ opacity: Math.max(0.3, 1 - scrollY / 500) }}
      />

      {/* New Parallax Background Orbs */}
      <div 
        className="absolute w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-purple-500/30 rounded-full blur-3xl top-8 sm:top-12 md:top-16 lg:top-24 left-4 sm:left-8 md:left-12 lg:left-16 pointer-events-none"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute w-36 sm:w-52 md:w-64 lg:w-72 h-36 sm:h-52 md:h-64 lg:h-72 bg-cyan-500/25 rounded-full blur-3xl bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 right-4 sm:right-8 md:right-12 lg:right-16 pointer-events-none"
        style={{ 
          transform: `translateY(${scrollY * -0.3}px)`,
          animation: 'pulse 5s ease-in-out infinite'
        }}
      />

      {/* Animated Particles - Enhanced */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle-enhanced"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <div ref={orb1Ref} className="orb orb1" />
      <div ref={orb2Ref} className="orb orb2" />

      {/* Geometric Shapes */}
      <div ref={shape1Ref} className="shape shape1" />
      <div ref={shape2Ref} className="shape shape2" />
      <div ref={shape3Ref} className="shape shape3" />

      {/* Main Content */}
      <div className="content">
        
        {/* Badge */}
        <div className="badge">
          <span className="badge-dot" />
          <span className="badge-text">✨ Open to opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="heading">
          <div className="heading-wrapper">
            <span className="heading-line1">
              <span className="char">H</span>
              <span className="char">e</span>
              <span className="char">y</span>
              <span className="char">,</span>
              <span className="char"> </span>
              <span className="char">I</span>
              <span className="char">&apos;</span>
              <span className="char">m</span>
              <span className="char"> </span>
            </span>
            <span className="heading-line2">CodewithLord</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="subtitle">Front-End Developer & Creative Technologist</p>

        {/* Bio Card */}
        <div className="bio-card">
          <p className="bio-text">
            I&apos;m a passionate 2nd year IT student who transforms ideas into{" "}
            <span className="highlight highlight-purple">stunning digital experiences</span>. 
            Specializing in building modern web apps with smooth{" "}
            <span className="highlight highlight-pink">micro-interactions</span> and{" "}
            <span className="highlight highlight-cyan">seamless UX flows</span>
            {" "}that users love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Lightning Fast</div>
            <div className="feature-desc">Optimized performance for blazing load times</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <div className="feature-title">Modern Design</div>
            <div className="feature-desc">Clean aesthetics with attention to detail</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <div className="feature-title">Fully Responsive</div>
            <div className="feature-desc">Perfect experience on every device</div>
          </div>
          {/* <div className="feature-card">
            <div className="feature-icon">✨</div>
            <div className="feature-title">Smooth Animations</div>
            <div className="feature-desc">Delightful interactions that engage users</div>
          </div> */}
        </div>

        {/* CTA Buttons */}
        <div className="cta-container">
          <a href="#contact" className="btn btn-primary">
            <span className="btn-fill" />
            <span className="btn-glow" />
            <span className="btn-content">
              Let&apos;s Connect
              <span className="btn-arrow">→</span>
            </span>
          </a>

          <a href="#projects" className="btn btn-secondary">
            <span className="btn-fill" />
            <span className="btn-content">View Projects</span>
          </a>
        </div>

        {/* Skills */}
        {/* <div className="skills">
          {skills.map((skill) => (
            <div key={skill} className="skill">
              <span className="skill-bg" />
              <span className="skill-text">{skill}</span>
            </div>
          ))}
        </div> */}
      </div>

      

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%);
        }

        /* Animated Grid - REMOVED */
        /* .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.4;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        } */

        /* Gradient Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          animation: float 8s ease-in-out infinite;
        }

        .orb1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4));
          top: 20%;
          right: 10%;
          animation: float1 8s ease-in-out infinite;
        }

        .orb2 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.4));
          bottom: 10%;
          left: 10%;
          animation: float2 10s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(50px, -30px) scale(1.2); opacity: 0.3; }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
          50% { transform: translate(-30px, 20px) scale(1.3); opacity: 0.25; }
        }

        /* Particles */
        .particle-enhanced {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.6);
          border-radius: 50%;
          bottom: -10px;
          pointer-events: none;
          animation: particleRiseEnhanced 6s ease-out infinite;
        }

        @keyframes particleRiseEnhanced {
          0% { 
            transform: translateY(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.6; 
          }
          90% { 
            opacity: 0.4; 
          }
          100% { 
            transform: translateY(-400px); 
            opacity: 0; 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1); 
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.05); 
          }
        }

        /* Geometric Shapes */
        .shape {
          position: absolute;
          border: 2px solid rgba(139, 92, 246, 0.2);
          backdrop-filter: blur(4px);
          pointer-events: none;
        }

        .shape1 {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          right: 12%;
          top: 15%;
          animation: rotate360 20s linear infinite;
        }

        .shape2 {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border-color: rgba(34, 211, 238, 0.2);
          left: 8%;
          bottom: 20%;
          animation: rotateReverse 15s linear infinite;
        }

        .shape3 {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          border-color: rgba(236, 72, 153, 0.2);
          right: 25%;
          bottom: 15%;
          animation: floatUpDown 12s ease-in-out infinite;
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1); }
        }

        @keyframes rotateReverse {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-180deg) scale(1.3); }
          to { transform: rotate(-360deg) scale(1); }
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        /* Content */
        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          max-width: 1200px;
          margin-top: 120px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          backdrop-filter: blur(10px);
          margin-bottom: 40px;
          cursor: pointer;
          animation: fadeInScale 0.6s ease-out 0.2s backwards;
        }

        .badge:hover {
          transform: scale(1.05);
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .badge-text {
          font-size: 14px;
          color: rgba(196, 181, 253, 1);
          font-weight: 500;
        }

        /* Heading */
        .heading {
          font-size: clamp(2rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .heading-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.3em;
        }

        .heading-line1 {
          color: rgba(255, 255, 255, 0.9);
          display: inline-flex;
        }

        .char {
          display: inline-block;
          animation: charFadeIn 0.5s ease-out backwards;
        }

        .char:nth-child(1) { animation-delay: 0.4s; }
        .char:nth-child(2) { animation-delay: 0.45s; }
        .char:nth-child(3) { animation-delay: 0.5s; }
        .char:nth-child(4) { animation-delay: 0.55s; }
        .char:nth-child(5) { animation-delay: 0.6s; }
        .char:nth-child(6) { animation-delay: 0.65s; }
        .char:nth-child(7) { animation-delay: 0.7s; }
        .char:nth-child(8) { animation-delay: 0.75s; }

        @keyframes charFadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .heading-line2 {
          background: linear-gradient(90deg, #c084fc, #ec4899, #22d3ee, #c084fc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 5s linear infinite, nameFadeIn 0.8s ease-out 0.8s backwards;
          display: inline-block;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes nameFadeIn {
          from { opacity: 0; transform: scale(0.8) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Subtitle */
        .subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 40px;
          animation: fadeInUp 0.6s ease-out 1.2s backwards;
          letter-spacing: 0.02em;
        }

        /* Bio Card */
        .bio-card {
          max-width: 750px;
          margin: 0 auto 48px;
          padding: 28px 36px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: fadeInUp 0.7s ease-out 1.4s backwards;
        }

        .bio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px -15px rgba(139, 92, 246, 0.4);
        }

        .bio-text {
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto 56px;
          animation: fadeInUp 0.8s ease-out 1.6s backwards;
        }

        .feature-card {
          position: relative;
          padding: 28px 24px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.3);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .feature-desc {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }

        .highlight {
          font-weight: 600;
          cursor: pointer;
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .highlight:hover {
          transform: scale(1.1);
        }

        .highlight-purple { color: #c084fc; }
        .highlight-pink { color: #ec4899; }
        .highlight-cyan { color: #22d3ee; }

        /* CTA Buttons */
        .cta-container {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          margin-bottom: 64px;
        }

        .btn {
          position: relative;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .btn:nth-child(1) { animation-delay: 2s; }
        .btn:nth-child(2) { animation-delay: 2.15s; }

        .btn:active {
          transform: scale(0.95);
        }

        .btn-primary {
          border: 2px solid rgba(139, 92, 246, 0.4);
          color: white;
        }

        .btn-primary .btn-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #22d3ee);
          transform: translateX(-110%) skewX(-15deg);
          transform-origin: left;
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 0;
        }

        .btn-primary:hover .btn-fill {
          transform: translateX(0) skewX(0deg);
        }

        .btn-primary .btn-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #c084fc, #ec4899);
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.4s;
          z-index: -1;
        }

        .btn-primary:hover .btn-glow {
          opacity: 0.6;
        }

        .btn-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-arrow {
          display: inline-block;
          animation: arrowMove 1.5s infinite;
        }

        @keyframes arrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        .btn-secondary {
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
        }

        .btn-secondary .btn-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(139, 92, 246, 0.2));
          transform: translateY(110%);
          transform-origin: bottom;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 0;
        }

        .btn-secondary:hover .btn-fill {
          transform: translateY(0);
        }

        .btn-secondary:hover {
          color: white;
        }

        /* Skills */
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .skill {
          position: relative;
          padding: 10px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          animation: skillFadeIn 0.5s ease-out backwards;
        }

        .skill:nth-child(1) { animation-delay: 2.2s; }
        .skill:nth-child(2) { animation-delay: 2.28s; }
        .skill:nth-child(3) { animation-delay: 2.36s; }
        .skill:nth-child(4) { animation-delay: 2.44s; }
        .skill:nth-child(5) { animation-delay: 2.52s; }
        .skill:nth-child(6) { animation-delay: 2.6s; }

        @keyframes skillFadeIn {
          from { opacity: 0; transform: scale(0.8) rotate(-20deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .skill-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          transform: translateX(-100%);
          transition: transform 0.3s;
        }

        .skill:hover .skill-bg {
          transform: translateX(0);
        }

        .skill:hover {
          transform: translateY(-10px) rotate(-3deg) scale(1.1);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .skill-text {
          position: relative;
          z-index: 1;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s;
        }

        .skill:hover .skill-text {
          color: white;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          animation: fadeInUp 0.5s ease-out 2.8s backwards;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 8px;
          transition: border-color 0.3s;
        }

        .scroll-indicator:hover .scroll-mouse {
          border-color: rgba(139, 92, 246, 0.5);
        }

        .scroll-wheel {
          width: 6px;
          height: 6px;
          background: linear-gradient(180deg, #c084fc, #ec4899);
          border-radius: 50%;
          animation: scrollWheel 2s infinite;
        }

        @keyframes scrollWheel {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(16px); opacity: 1; }
        }

        .scroll-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          transition: opacity 0.3s;
        }

        .scroll-indicator:hover .scroll-text {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .heading { font-size: 2rem; }
          .heading-wrapper { flex-direction: column; gap: 0; }
          .subtitle { font-size: 1.125rem; }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .cta-container { 
            flex-direction: column; 
            align-items: center;
            width: 100%;
          }
          .btn { 
            width: 100%; 
            max-width: 300px; 
            justify-content: center; 
          }
        }
      `}</style>
    </section>
  );
}