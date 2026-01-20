import { Link } from "react-router-dom";
import { Timer } from "lucide-react";
import { useState, useEffect } from "react";

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("promoTimer");
    const now = Date.now();

    if (savedTime) {
      const target = parseInt(savedTime, 10);
      if (target > now) {
        return Math.floor((target - now) / 1000);
      }
    }

    const newTarget = now + 4 * 60 * 60 * 1000;
    localStorage.setItem("promoTimer", newTarget.toString());
    return 4 * 60 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const savedTime = localStorage.getItem("promoTimer");
      if (savedTime) {
        const target = parseInt(savedTime, 10);
        const now = Date.now();
        const diff = Math.floor((target - now) / 1000);
        setTimeLeft(diff > 0 ? diff : 0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <Link to="/contact" className="block bg-[#2ea1bd] px-4 py-3 text-white transition-colors hover:brightness-95">
      <div className="container flex items-center justify-center gap-2 text-center text-sm font-medium">
        <Timer className="h-4 w-4" />
        <p>
          Special Offer: Get <span className="font-bold">10% OFF</span> when you book in the next <span className="font-mono font-bold">{formatTime(timeLeft)}</span>!
        </p>
      </div>
    </Link>
  );
}
