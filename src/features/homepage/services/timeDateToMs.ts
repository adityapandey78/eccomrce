function timeDateToMs(dateStr: string): number | null {
  //Please Enter in this Format: "DD/MM/YYYY-HH:MM"
  const [datePart, timePart] = dateStr.split('-');
  if (!datePart || !timePart) return null;

  const [dd, mm, yyyy] = datePart.split('/').map(Number);
  const [hh, min] = timePart.split(':').map(Number);

  if (
    [dd, mm, yyyy, hh, min].some((v) => Number.isNaN(v)) ||
    dd < 1 || dd > 31 ||
    mm < 1 || mm > 12 ||
    hh < 0 || hh > 23 ||
    min < 0 || min > 59
  ) {
    return null;
  }

  const date = new Date(yyyy, mm - 1, dd, hh, min);
  const ms = date.getTime();

  return isNaN(ms) ? null : ms;
}

export default timeDateToMs;
