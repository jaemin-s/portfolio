// import { Github, Mail } from "lucide-react";
// import { Button } from "./ui/button";

import { useEffect, useState } from "react";

interface HeaderProps {
  title?: string;
  onClickGithub?: () => void;
  onClickMail?: () => void;
}

export function Header({
  title = "Portfolio",
  // onClickGithub,
  // onClickMail,
}: HeaderProps) {

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            </div>
            <span className="text-white text-xl">{title}</span>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
          </div>
        </div>
      </div>
    </header>
  );
}
