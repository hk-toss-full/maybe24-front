import React, { useState, useEffect } from 'react';

interface Review {
  createdAt: string;
}

const FormattingDate: React.FC<Review> = ({ createdAt }) => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const formatDate = (dateString: string) => {
      if (!dateString) {
        console.warn('날짜 형식 오류: 유효하지 않은 값입니다.');
        return '날짜 형식 오류';
      }

      if (typeof dateString !== 'string') {
        console.warn('날짜 형식 오류:', dateString);
        return '날짜 형식 오류';
      }

      const fixedDateString = dateString.replace(/\.(\d{3})\d*/, '.$1');
      const date = new Date(fixedDateString);

      if (isNaN(date.getTime())) {
        console.warn('유효하지 않은 날짜 형식:', dateString);
        return '날짜 형식 오류';
      }

      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    };

    const result = formatDate(createdAt);
    setFormattedDate(result); 
  }, [createdAt]);

  return (
    <p>{formattedDate}</p>
  );
};

export default FormattingDate;
