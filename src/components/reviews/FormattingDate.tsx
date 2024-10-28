import React, { useState, useEffect } from 'react';

interface Review {
  createdAt: string;
}

const FormattingDate: React.FC<Review> = ({ createdAt }) => {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.warn('날짜 형식 오류:', dateString);
        return "날짜 형식 오류";
      }
      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
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
