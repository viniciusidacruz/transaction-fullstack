"use client";

import { X } from "lucide-react";
import { useSpring } from "react-spring";
import { MouseEvent, useCallback, useEffect, useRef } from "react";

import * as S from "./styles";
import { ModalProps } from "./types";

/**
 * Componente de modal com animação e suporte para fechar ao clicar fora ou pressionar "Escape".
 *
 * @param isVisible - Define se o modal está visível na tela.
 * @param onClose - Função chamada ao fechar o modal, seja ao clicar fora dele ou pressionar a tecla "Escape".
 * @param children - O conteúdo a ser exibido dentro do modal.
 * @param className - Classe CSS opcional para estilização adicional do container do modal.
 */
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
