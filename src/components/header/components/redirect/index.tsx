"use client";

import { RedirectProps } from "./types";
import { usePathname } from "next/navigation";
import { LinkNavigation } from "./styles";

export function Redirect({ label, path, title }: RedirectProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <LinkNavigation href={path} title={title} isActive={isActive}>
      <span>{label}</span>
    </LinkNavigation>
  );
}
