"use client"
import React, { useState, useRef, useEffect } from 'react';
import { REVIEWS } from "@/constants";

const TestimonialCard = ({ name, date, rating, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Проверяем, есть ли переполнение текста в элементе p
    const textElement = textRef.current;
    setShowExpandButton(textElement.scrollHeight > textElement.clientHeight);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="mx-auto mb-10 flex items-center justify-center flex-col bg-Yl p-4 shadow relative max-w-[670px]" style={{ height: isExpanded ? 'auto' : '450px' }}>
      <div className="flex items-center justify-center flex-col bg-Yl p-10 shadow border-2 border-DG w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-DG text-xl tablet:text-3xl text-SB italic uppercase">{name}</h3>
          <p className="text-DG text-base tablet:text-xl opacity-60">{date}</p>
          <div className="flex text-DG text-2xl">
            {renderStars(rating)}
          </div>
        </div>
        <div className="m-4 text-start overflow-hidden">
          <p ref={textRef} className={`text-DG text-sm tablet:text-lg font-SR ${!isExpanded ? 'line-clamp-3' : ''}`} onClick={showExpandButton ? toggleExpand : undefined}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsList = () => {
  return (
    <div className="">
      {REVIEWS.map((review, index) => (
        <div key={index} className="">
          <TestimonialCard {...review} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialsList;



