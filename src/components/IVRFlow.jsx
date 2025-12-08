import React, { useEffect, useState, useRef } from "react";

export default function IVRFlow() {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [speed, setSpeed] = useState(1200);
  const timerRef = useRef(null);

  const maxStep = 5;

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setStep((s) => Math.min(maxStep, s + 1));
      }, speed);
    }
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  useEffect(() => {
    if (step >= maxStep) setPlaying(false);
  }, [step]);

  const reset = () => {
    setStep(0);
    setPlaying(false);
  };

  const playPause = () => setPlaying((p) => !p);
  const next = () => setStep((s) => Math.min(maxStep, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const show = (minStep) => (step >= minStep ? "visible" : "hidden");
  const glowOn = (s) => (step === s ? "glow" : "");

  return (
    <section id="ivr">
      <h2>Sample IVR Flow – Utility Industry (sample Step-by-step)</h2>

      <div className="ivr-controls">
        <button onClick={reset}>Reset</button>
        <button onClick={prev} disabled={step === 0}>
          Prev
        </button>
        <button onClick={playPause}>{playing ? "Pause" : "Play"}</button>
        <button onClick={next} disabled={step === maxStep}>
          Next
        </button>

        <label style={{ marginLeft: 12 }}>Speed:</label>
        <input
          type="range"
          min="400"
          max="2400"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div className="ivr-canvas">
        <svg viewBox="0 0 900 420" className="ivr-svg">
          {/* Start */}
          <g className={`pulse ${show(0)}`}>
            <rect
              x="380"
              y="10"
              width="140"
              height="45"
              rx="8"
              className="node start"
            />
            <text x="450" y="38" textAnchor="middle" className="node-text">
              Start Call
            </text>
          </g>

          {/* Welcome */}
          <g className={`${show(1)} fade-in`}>
            <rect
              x="320"
              y="80"
              width="260"
              height="50"
              rx="8"
              className="node"
            />
            <text x="450" y="110" textAnchor="middle" className="node-text">
              Welcome to Demo Utility system
            </text>
          </g>

          {/* Outage */}
          <g className={`${show(2)} slide-left`}>
            <rect
              x="80"
              y="190"
              width="220"
              height="45"
              rx="8"
              className="node"
            />
            <text x="190" y="218" textAnchor="middle" className="node-text">
              Report PowerOutage (1)
            </text>
          </g>

          {/* Billing */}
          <g className={`${show(3)} slide-up`}>
            <rect
              x="340"
              y="190"
              width="220"
              height="45"
              rx="8"
              className="node"
            />
            <text x="450" y="218" textAnchor="middle" className="node-text">
              Billing & Payments (2)
            </text>
          </g>

          {/* Support */}
          <g className={`${show(4)} slide-right`}>
            <rect
              x="600"
              y="190"
              width="220"
              height="45"
              rx="8"
              className="node"
            />
            <text x="710" y="218" textAnchor="middle" className="node-text">
              Technical Support (3)
            </text>
          </g>

          {/* Agent */}
          <g className={`${show(5)} pulse`}>
            <rect
              x="380"
              y="300"
              width="140"
              height="45"
              rx="8"
              className="node end"
            />
            <text x="450" y="328" textAnchor="middle" className="node-text">
              Agent
            </text>
          </g>

          {/* Connectors */}
          <line
            x1="450"
            y1="55"
            x2="450"
            y2="80"
            className={`conn ${glowOn(1)}`}
          />

          <line
            x1="450"
            y1="130"
            x2="190"
            y2="190"
            className={`conn ${glowOn(2)}`}
          />
          <line
            x1="450"
            y1="130"
            x2="450"
            y2="190"
            className={`conn ${glowOn(3)}`}
          />
          <line
            x1="450"
            y1="130"
            x2="710"
            y2="190"
            className={`conn ${glowOn(4)}`}
          />

          <line
            x1="190"
            y1="235"
            x2="450"
            y2="300"
            className={`conn ${glowOn(2) || glowOn(5) ? "glow" : ""}`}
          />
          <line
            x1="450"
            y1="235"
            x2="450"
            y2="300"
            className={`conn ${glowOn(3) || glowOn(5) ? "glow" : ""}`}
          />
          <line
            x1="710"
            y1="235"
            x2="450"
            y2="300"
            className={`conn ${glowOn(4) || glowOn(5) ? "glow" : ""}`}
          />
        </svg>
      </div>

      <p className="ivr-note">Step: {step} — Animated IVR Flow</p>
    </section>
  );
}
