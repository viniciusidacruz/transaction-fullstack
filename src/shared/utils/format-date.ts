import { format, parseISO } from "date-fns";

/**
 * Formata uma data para o formato "dd/MM/yyyy".
 *
 * @param date - A data a ser formatada, que pode ser um objeto Date, uma string representando uma data, `null`, ou `undefined`.
 * @returns Uma string com a data formatada no padrão "dd/MM/yyyy". Retorna uma string vazia se a data for `null` ou `undefined`.
 */
export function formatDate(date: Date | string | null | undefined): string {
  if (date === null || date === undefined) return "";

  const parsedDate = typeof date === "string" ? parseISO(date) : new Date(date);

  const formattedDate = format(parsedDate, "dd/MM/yyyy");

  return formattedDate;
}
