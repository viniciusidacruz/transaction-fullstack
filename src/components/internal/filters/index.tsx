"use client";

import { Transaction } from "@prisma/client";
import { SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { formatDate } from "@/shared/utils";
import { QueryStrings } from "@/shared/constants";
import { DownloadCSV, FieldSearch, Select } from "@/components";

import * as S from "./styles";
import { OPTIONS } from "./utils";

/**
 * Componente de filtros para listar e pesquisar transações.
 *
 * @param transactions - Array de transações do tipo `Transaction` que será usado para download em CSV.
 */
export function Filters({ transactions }: { transactions: Transaction[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentDate = formatDate(new Date());

  const defaultValueFilterBy = searchParams.get(QueryStrings.filterBy) || "";
  const defaultValueSearchParam =
    searchParams.get(QueryStrings.searchParam) || "";

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

  function handleSearchParam(param: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!param) {
      current.delete(QueryStrings.searchParam);
    } else {
      current.set(QueryStrings.searchParam, param);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}`);
  }

  function handleClearFilter() {
    handleSelectFilter("");
  }

  const titleFilters: Record<string, string> = {
    name: "Nome",
    createdAt: "Data",
    amount: "Valor",
    status: "Status",
  };

  return (
    <S.Wrapper>
      <FieldSearch
        type="text"
        placeholder="Pesquisar..."
        onSearch={handleSearchParam}
        defaultValue={defaultValueSearchParam}
      />

      <S.Date>{currentDate}</S.Date>

      <S.ActionsFilters>
        <Select
          options={OPTIONS}
          label="Filtrar por"
          onClearFilter={handleClearFilter}
          onChangeValue={handleSelectFilter}
          defaultValue={titleFilters[defaultValueFilterBy]}
          icon={<SlidersHorizontal size={16} />}
        />

        <DownloadCSV label="Baixar histórico" transactions={transactions} />
      </S.ActionsFilters>
    </S.Wrapper>
  );
}
