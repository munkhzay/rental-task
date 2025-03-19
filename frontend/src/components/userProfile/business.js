'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const Business = (props) => {
  const { ProfileCategory2, ProfileCategory } = props;
  const [category, setCategory] = useState(false);
  return (
    <div className="border rounded-lg">
      <div className="p-2">
        <div
          className="flex justify-between"
          onClick={() => setCategory(!category)}
        >
          <div>Business</div>
          {!category ? <ChevronRight /> : <ChevronDown />}
        </div>
        {category && (
          <div className="flex flex-col p-2 gap-2">
            <div>{ProfileCategory}</div>
            <div>{ProfileCategory2}</div>
          </div>
        )}
      </div>
    </div>
  );
};
