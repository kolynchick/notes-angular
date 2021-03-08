import { getRangeDate } from './date.common';

describe('DateCommon', () => {
  describe('getRangeDate', () => {
    it('date1 = 0, date2 = null', () => {
      const expectedFirstDate: Date = new Date(0);
      expectedFirstDate.setHours(0, 0, 0, 0);

      const expectedSecondDate: Date = new Date();
      expectedSecondDate.setHours(23, 59, 59, 999);

      const rangeDate: [Date, Date] = getRangeDate(0);

      expect(rangeDate).toEqual([expectedFirstDate, expectedSecondDate]);
    });

    it('date1 = string, date2 = string', () => {
      expect(() => getRangeDate('23/12/45//', '0')).toThrowError(
        `getRangeDate: one of arguments is incorrect: 23/12/45//, 0`
      );
    });
  });
});
