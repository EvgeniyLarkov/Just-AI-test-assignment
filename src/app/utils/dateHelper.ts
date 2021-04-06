import { CustomDate } from 'app/redux/ducks/types';

export const getDateObj = (rawdate: string): CustomDate => {
  const [year, month, day] = rawdate.slice(0, 10).split('-');
  return { year, month, day };
};

export const compareDate = (a: CustomDate, b: CustomDate): number => +`${a.year}${a.month}${a.day}` - +`${b.year}${b.month}${b.day}`;

export const getStringFromDate = ({
  year,
  month,
  day,
}: CustomDate): string => `${day}.${month}.${year}`;
