"use client";

import { useState } from "react";

export default function NotificationButton() {
  const [status, setStatus] = useState("");

  const handleClick = async () => {
    if (typeof window === "undefined") return;

    if (!("Notification" in window)) {
      setStatus("Notifications not supported in this browser.");
      return;
    }

    let permission = Notification.permission;

    if (permission === "default") {
      permission = await Notification.requestPermission();
    }

    if (permission === "granted") {
      new Notification("BabyBliss Update", {
        body: "New baby products just arrived! 🎀",
        icon: "/icons/icon-192x192.png",
      });
      setStatus("Notification sent (demo).");
    } else {
      setStatus("Permission blocked. Please enable notifications.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <button className="btn btn-ghost" type="button" onClick={handleClick}>
        🔔 Send Notification
      </button>
      {status && <span className="text-sm text-muted">{status}</span>}
    </div>
  );
}
