import { ReactNode } from "react";

export interface BaseProps {
  children: ReactNode;
  className?: string;
}

export interface DialogProps {
  isOpen: boolean;
  children: ReactNode;
  maxWidth?: string;
  onClose: () => void;
}
