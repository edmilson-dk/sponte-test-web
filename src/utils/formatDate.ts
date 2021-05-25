import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string) {
  console.log(date)
  return format(parseISO(date), 'd MMM yy', { locale: ptBR });
}
