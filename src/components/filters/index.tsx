"use client";

import { SlidersHorizontal } from "lucide-react";

import { Select } from "@/components";

import * as S from "./styles";
import { OPTIONS } from "./utils";

export function Filters() {
  return (
    <S.Wrapper>
      <Select
        options={OPTIONS}
        label="Filtrar por"
        onChangeValue={(value) => console.log(value)}
        icon={<SlidersHorizontal className="text-white" />}
      />
    </S.Wrapper>
  );
}
