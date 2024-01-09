
import React from 'react';

const Copyright = () => {
  const startYear = 2009;
  const currentYear = new Date().getFullYear();
  const yearsDisplay = startYear === currentYear ? `${currentYear}` : `${startYear}-${currentYear}`;

  return (
    <div className="flex h-10 flex-row items-center justify-center">
      <div className="text-White tablet:text-[17px] font-normal font-SR">
        &copy; {yearsDisplay} Gazda Renovarion. All Rights Reserved.
      </div>
    </div>
  );
};

export default Copyright;
