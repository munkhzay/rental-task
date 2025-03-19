'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const CustomerData = ({ onClick, setCategory, category }) => {
  return (
    <div className="border rounded-lg">
      <div className="p-2">
        <div
          className="flex justify-between"
          onClick={() => setCategory(!category)}
        >
          <div className="">Customer data</div>
          {!category ? <ChevronRight /> : <ChevronDown />}
        </div>
        {category && (
          <div className="flex flex-col p-2 gap-2">
            <div>Country</div>
            <div onClick={onClick}>Rental</div>
          </div>
        )}
      </div>
    </div>
  );
};
