import React from 'react';

const Rating = ({ value }) => {
  // Ограничиваем значение от 1 до 5
  const ratingValue = Math.max(1, Math.min(5, value));

  // Создаем массив звезд в зависимости от значения рейтинга
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} style={{ color: index < ratingValue ? 'yellow' : 'gray' }}>
      &#9733;
    </span>
  ));

  return <div>{stars}</div>;
};

export default Rating;
