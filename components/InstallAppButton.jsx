"use client";

import { useEffect, useState } from "react";

export default function InstallAppButton() {
  const [promptEvent, setPromptEvent] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setPromptEvent(e);
    });
  }, []);

  const handleInstall = () => {
    if (!promptEvent) return;

    promptEvent.prompt();
    setPromptEvent(null);
  };

  if (!promptEvent) return null;

  return (
    <button className="btn btn-ghost" onClick={handleInstall}>
      📲 Install BabyBliss App
    </button>
  );
}
