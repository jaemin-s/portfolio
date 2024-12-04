import { DialogProps } from "@/data/types/common.entity";
import { useEffect } from "react";

const CommonDialog = ({
  children,
  isOpen,
  onClose,
  maxWidth = "max-w-3xl",
}: DialogProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed bg-black bg-opacity-50 flex items-center justify-center z-50 inset-0"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg w-full ${maxWidth} mx-4 max-h-[90vh] overflow-hidden`}
      >
        <div className="overflow-y-auto max-h-[90vh]">{children}</div>
      </div>
    </div>
  );
};

export default CommonDialog;
