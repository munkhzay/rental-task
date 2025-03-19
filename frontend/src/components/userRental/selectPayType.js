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

export function SelectDemo({ onValueChange }) {
  return (
    <Select onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger className="">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="PAYMENT">PAYMENT</SelectItem>
          <SelectItem value="NONPAY">NONPAYMENT</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
