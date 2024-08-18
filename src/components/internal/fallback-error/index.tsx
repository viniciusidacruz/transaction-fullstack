"use client";

import Image from "next/image";
import { FallbackProps } from "react-error-boundary";

import { Button } from "@/components";

import { Title, Wrapper } from "./styles";

export function FallbackError(props: FallbackProps) {
  return (
    <Wrapper>
      <Image
        src="/assets/svg/error.svg"
        alt="Uma pessoa ao lado de um card"
        width={380}
        height={380}
        priority
      />

      <Title>Oops, algo deu errado!</Title>
      <p>Tente novamente mais tarde.</p>

      <Button
        onClick={props.resetErrorBoundary}
        className="!bg-[#6EDA2A] !text-black"
      >
        Tentar novamente
      </Button>
    </Wrapper>
  );
}
