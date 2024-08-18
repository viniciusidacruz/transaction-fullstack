"use client";

import { X } from "lucide-react";
import { useSpring } from "react-spring";
import { MouseEvent, useCallback, useEffect, useRef } from "react";

import * as S from "./styles";
import { ModalProps } from "./types";

export function Modal({
  isVisible,
  onClose,
  children,
  className = "",
}: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keypress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        onClose();
      }
    },
    [onClose, isVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => {
      document.removeEventListener("keydown", keypress);
    };
  }, [keypress]);

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current === e.target) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <S.Wrapper ref={wrapperRef} onClick={handleClickOutside}>
      <S.ModalContainer style={animation} className={className}>
        <S.CloseIcon data-testid="close_modal" onClick={onClose}>
          <X width={16} height={16} color="#1E293B" />
        </S.CloseIcon>
        {children}
      </S.ModalContainer>
    </S.Wrapper>
  );
}
