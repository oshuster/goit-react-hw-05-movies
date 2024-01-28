function formatDate(dateString) {
  const date = new Date(dateString);

  // Отримуємо значення року, місяця, дня, години та хвилини
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Формуємо рядок у вигляді "рррр-мм-дд гг-хв"
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

  return formattedDate;
}

export default formatDate;
