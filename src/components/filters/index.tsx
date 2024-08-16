"use client";

import { SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { QueryStrings } from "@/shared/constants";
import { DownloadCSV, Select } from "@/components";

import * as S from "./styles";
import { OPTIONS } from "./utils";

export function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultValueFilterBy = searchParams.get(QueryStrings.filterBy) || "";

  function handleSelectFilter(value: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete(QueryStrings.filterBy);
    } else {
      current.set(QueryStrings.filterBy, value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`);
  }

  function handleClearFilter() {
    handleSelectFilter("");
  }

  return (
    <S.Wrapper>
      <Select
        options={OPTIONS}
        label="Filtrar por"
        onClearFilter={handleClearFilter}
        onChangeValue={handleSelectFilter}
        defaultValue={defaultValueFilterBy}
        icon={<SlidersHorizontal size={16} />}
      />

      <DownloadCSV
        title="Botão para baixar todo histórico de transações"
        label="Baixar histórico"
        onClick={() => console.log("Download CSV...")}
      />
    </S.Wrapper>
  );
}
