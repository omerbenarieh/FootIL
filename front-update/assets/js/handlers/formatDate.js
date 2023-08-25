function formatDate(date) {
  const isoDate = new Date(date);
  const formattedDate = `${(isoDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${isoDate
    .getDate()
    .toString()
    .padStart(2, '0')}/${isoDate.getFullYear().toString().slice(-2)}`;
  const formattedTime = `${isoDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${isoDate.getMinutes().toString().padStart(2, '0')}`;

  return {
    formattedDate,
    formattedTime,
  };
}

export { formatDate };
