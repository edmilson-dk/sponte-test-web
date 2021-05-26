import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string) {
  return format(parseISO(date), 'd MMM yy', { locale: ptBR });
}

export function formatDateToCalendar(date: string) {
  return format(parseISO(date), 'd MM yy', { locale: ptBR });
}