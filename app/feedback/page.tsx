"use client"; // Required for client-side interactivity
import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Your Google Script URL here
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBl3Txmqt0R2MucMCvYXXGHd4XwzrK4y6YJMU7EBYjdCs27mGFXOXcMJCO0aTmNwgCYw/exec";

  const handleSubmit = async () => {
    if (!name || !feedback || !selectedEmoji) {
      alert("Please fill all fields and select an emoji!");
      return;
    }

    const data = { name, feedback, emoji: selectedEmoji };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      launchConfetti();
      setName("");
      setFeedback("");
      setSelectedEmoji(null);

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Failed to submit feedback.");
    }
  };

  // Confetti
  const launchConfetti = () => {
    for (let i = 0; i < 50; i++) {
      const c = document.createElement("div");
      c.style.position = "fixed";
      c.style.width = c.style.height = Math.random() * 8 + 4 + "px";
      c.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
      c.style.left = Math.random() * 100 + "vw";
      c.style.top = "0";
      c.style.zIndex = "1000";
      c.style.pointerEvents = "none";
      c.style.opacity = "0.8";
      c.style.transform = "rotate(0deg)";
      c.style.animation = "confetti-fall 3s linear forwards";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  };

  // Particle effect (once)
  if (typeof window !== "undefined" && !document.querySelector(".particle-initialized")) {
    for (let i = 0; i < 35; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.width = p.style.height = Math.random() * 10 + 5 + "px";
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = 3 + Math.random() * 5 + "s";
      document.body.appendChild(p);
    }
    const marker = document.createElement("div");
    marker.className = "particle-initialized";
    document.body.appendChild(marker);
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#0f0f13",
      position: "relative",
      color: "#fff",
      overflow: "hidden"
    }}>
      <style>{`
        .feedback-container {
          position: relative;
          z-index: 1;
          background: #1a1a23;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(124,92,255,0.7);
          width: 360px;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 25px;
          background: linear-gradient(90deg, #7c5cff, #5fdde5);
          -webkit-background-clip: text;
          color: transparent;
        }
        input, textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: none;
          background: #2a2a3a;
          color: #fff;
          font-size: 1rem;
        }
        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 10px #7c5cff;
        }
        .emojis { display: flex; justify-content: center; gap: 15px; margin-bottom: 20px; }
        .emojis button { font-size: 2rem; background: none; border: none; cursor: pointer; transition: transform 0.2s, filter 0.2s; }
        .emojis button:hover { transform: scale(1.4); filter: drop-shadow(0 0 5px #7c5cff); }
        .emojis .selected { transform: scale(1.6); filter: drop-shadow(0 0 15px #7c5cff); }
        button.submit {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #7c5cff, #5fdde5);
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        button.submit:hover { transform: scale(1.05); box-shadow: 0 0 15px rgba(124,92,255,0.8); }
        .success {
          font-size: 1.4rem;
          margin-top: 15px;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .success.show { opacity: 1; animation: pop 0.6s ease forwards; }
        @keyframes pop { 0% { transform: scale(0); } 70% { transform: scale(1.2); } 100% { transform: scale(1); } }
        .particle { position: absolute; border-radius: 50%; background: rgba(124, 92, 255, 0.5); animation: float 6s linear infinite; }
        @keyframes float { 0% { transform: translateY(100vh) scale(0.5); } 100% { transform: translateY(-10vh) scale(1); } }
        @keyframes confetti-fall { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
      `}</style>

      <div className="feedback-container">
        <h1>OblivionX Feedback</h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
        <div className="emojis">
          {["😃","😐","😞"].map(e => (
            <button
              key={e}
              className={selectedEmoji === e ? "selected" : ""}
              onClick={() => setSelectedEmoji(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <button className="submit" onClick={handleSubmit}>Submit Feedback</button>
        <div className={`success ${success ? "show" : ""}`}>🎉 Thank you for your feedback!</div>
      </div>
    </div>
  );
}
