import { Github, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  title?: string;
  onClickGithub?: () => void;
  onClickMail?: () => void;
}

export function Header({
  title = "Portfolio",
  onClickGithub,
  onClickMail,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            </div>
            <span className="text-white text-xl">{title}</span>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hidden sm:flex"
              onClick={onClickGithub}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hidden sm:flex"
              onClick={onClickMail}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>

            {/* 모바일용 아이콘 */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 sm:hidden w-8 h-8 p-0"
              onClick={onClickGithub}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 sm:hidden w-8 h-8 p-0"
              onClick={onClickMail}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
