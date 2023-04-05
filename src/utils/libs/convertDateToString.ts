import { format } from "date-fns"

export const convertDateToString = (date: Date): string => {
  return format(date, "yyyy/MM/dd")
}
