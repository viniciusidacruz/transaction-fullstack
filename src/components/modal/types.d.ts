import { ReactNode } from "react";

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}
