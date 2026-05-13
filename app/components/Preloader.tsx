'use client';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "INITIALIZING SYSTEM...",
    "LOADING MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Cycle through text every 400ms
    const textInterval = setInterval(() => {
      setTextIndex((prev) => Math.min(prev + 1, loadingTexts.length - 1));
    }, 500);

    // Start fading out after 2.5 seconds
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 2500);

    // Call onComplete after fade out animation finishes
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`preloader ${fading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="loader-visual">
          <div className="core-cube"></div>
          <div className="orbit-ring"></div>
        </div>
        <div className="loader-terminal">
          <span className="prompt">{'>'}</span> 
          <span className="typing-text">{loadingTexts[textIndex]}</span>
          <span className="cursor">_</span>
        </div>
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
      </div>
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.7s cubic-bezier(0.8, 0, 0.2, 1), transform 0.7s cubic-bezier(0.8, 0, 0.2, 1);
        }
        
        .preloader.fade-out {
          opacity: 0;
          transform: translateY(-40px);
          pointer-events: none;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          width: 100%;
          max-width: 400px;
          padding: 0 20px;
        }

        .loader-visual {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .core-cube {
          width: 30px;
          height: 30px;
          background: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          animation: pulse 1.5s ease-in-out infinite alternate;
        }

        .orbit-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 1px dashed rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: spin 3s linear infinite;
        }

        .orbit-ring::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 10px #ffffff;
        }

        .loader-terminal {
          font-family: var(--font-outfit), sans-serif;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          justify-content: center;
        }

        .prompt {
          color: #a1a1a6;
        }

        .typing-text {
          min-width: 250px;
          text-align: left;
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        .progress-container {
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          width: 0%;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: loadProgress 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes loadProgress {
          0% { width: 0%; }
          30% { width: 40%; }
          60% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
