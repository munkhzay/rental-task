'use client';
import { Search } from 'lucide-react';
import { AddNew } from '../userRental/newRental';
import { Input } from '../ui/input';

export const TableHead = ({ refetch, setSearch }) => {
  return (
    <div className="bg-blue-600 h-25 w-full rounded-sm flex justify-between items-center">
      <AddNew refetch={refetch} />
      <div className="flex items-center ">
        <div className="flex flex-row  bg-white mr-10 px-2 rounded-lg items-center">
          <Input
            onChange={(event) => setSearch(event.target.value)}
            placeholder={'Search'}
            className={'border-none hover:border-0 '}
          />
          <Search onClick={refetch} />
        </div>
      </div>
    </div>
  );
};
