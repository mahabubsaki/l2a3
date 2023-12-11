import { differenceInDays, parseISO } from 'date-fns';
export default function dateToWeek(start: string, end: string): number {
    const startDate = parseISO(start);
    const endDate = parseISO(end);


    const daysDifference = Math.ceil(differenceInDays(endDate, startDate) / 7);
    return daysDifference;
}