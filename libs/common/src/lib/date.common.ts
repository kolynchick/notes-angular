export function getRangeDate(
  date1: Date | number | string,
  date2: Date | number | string = Date.now()
): [Date, Date] {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  if (isNaN(+startDate) || isNaN(+endDate)) {
    throw new Error(
      `getRangeDate: one of arguments is incorrect: ${date1}, ${date2}`
    );
  }

  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  return [startDate, endDate];
}
