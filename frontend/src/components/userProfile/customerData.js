'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const CustomerData = ({ onClick, showCategory, setShowCategory }) => {
  return (
    <div className="border rounded-lg">
      <div className="p-2">
        <div
          className="flex justify-between"
          onClick={() => setShowCategory(!showCategory)}
        >
          <div className="">Owner Data</div>
          {!showCategory ? <ChevronRight /> : <ChevronDown />}
        </div>
        {showCategory && (
          <div className="flex flex-col p-2 gap-2">
            <div className="text-neutral-600 " onClick={onClick}>
              Rentals
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
