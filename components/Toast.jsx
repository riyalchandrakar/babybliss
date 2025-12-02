"use client";

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "80px", 
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ec4899",
        color: "white",
        padding: "10px 16px",
        borderRadius: "8px",
        opacity: 0.95,
        zIndex: 999999,

        fontSize: "0.9rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      {message}
    </div>
  );
}
