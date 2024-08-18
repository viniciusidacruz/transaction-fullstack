"use client";

import { usePathname } from "next/navigation";

import { RedirectProps } from "./types";
import { LinkNavigation } from "./styles";

/**
 * Componente para redirecionamento de navegação com destaque para a rota ativa.
 *
 * @param label - O texto exibido dentro do link de navegação.
 * @param path - O caminho para o qual o link deve redirecionar.
 * @param title - O título a ser exibido como tooltip ao passar o mouse sobre o link.
 */
export function Redirect({ label, path, title }: RedirectProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <LinkNavigation href={path} title={title} isActive={isActive}>
      <span>{label}</span>
    </LinkNavigation>
  );
}
