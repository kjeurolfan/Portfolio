'use client';

import { useState, useEffect } from 'react';

export default function AIPrompt() {
  const text1 = 'Specializing in Front-End & QA';
  const text2 = 'Software Developer Intern';
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText1(text1.slice(0, i));
      i++;
      if (i > text1.length) {
        clearInterval(intervalId);
        let j = 0;
        const intervalId2 = setInterval(() => {
          setDisplayedText2(text2.slice(0, j));
          j++;
          if (j > text2.length) {
            clearInterval(intervalId2);
          }
        }, 40);
      }
    }, 40);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="ai-prompt-box">
      <div className="code-line">
        <span className="text-line">{displayedText1}</span>
      </div>
      <div className="code-line secondary-line">
        <span className="text-line">{displayedText2}</span>
        {showCursor && <span className="cursor">|</span>}
      </div>
      <style jsx>{`
        .ai-prompt-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 30px;
          border-radius: 16px;
          font-family: var(--font-sans);
          margin-bottom: 40px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }
        .code-line {
          min-height: 1.5em;
          line-height: 1.5;
          font-size: 1.1rem;
          font-weight: 500;
          color: #f5f5f7;
          letter-spacing: -0.02em;
        }
        .secondary-line {
          font-size: 0.95rem;
          font-weight: 400;
          color: #a1a1a6;
          margin-top: 4px;
        }
        .cursor {
          color: #ffffff;
          animation: blink 1s step-end infinite;
          margin-left: 2px;
          font-weight: 300;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
