'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuthContext } from '@/providers/authProvider';
import axios from 'axios';

export function SelectIcon({ onValueChange }) {
  const [category, setCategory] = React.useState();
  const { currentUser } = useAuthContext();

  const getCategory = async () => {
    try {
      const category = await axios.get(
        `http://localhost:8800/category/${currentUser?.user?.id}`
      );
      setCategory(category?.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCategory();
  }, []);
  return (
    <Select onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {category?.map((icon) => {
            return (
              <SelectItem
                value={icon.id}
                className="flex flex-row justify-between px-3 py-1"
                key={icon.id}
              >
                {icon.category_name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
