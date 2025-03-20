'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SheetDemo } from './editRental';
import { AlertDialogDemo } from './rentalDelete';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function TableDemo({ currentRentals, refetch }) {
  const [rentalId, setRentalId] = useState();
  const [email, setEmail] = useState('');
  const [rentalDay, setRentalDay] = useState('');
  const [rent, setRent] = useState();
  const [paymentType, setPaymentType] = useState('');
  const [icon, setIcon] = useState();
  const updateRental = async () => {
    await axios
      .post('http://localhost:8800/rental/update', {
        rental_date: rentalDay,
        customer_email: email,
        rent: rent,
        payment_status: paymentType,
        id: rentalId,
        category_id: icon,
      })
      .then(function (response) {
        console.log(response);
        refetch();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const deleteRental = async () => {
    try {
      await axios.delete(`http://localhost:8800/rental/delete/${rentalId}`);
      toast.success('Successful');
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Table className={'p-10'}>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Rental Date</TableHead>
          <TableHead className="text-right">Rent $</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Date</TableHead>
          <TableHead className="w-[100px] text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentRentals?.map((rental, index) => (
          <TableRow key={index}>
            <TableCell>{rental.owner_email}</TableCell>
            <TableCell>{rental.category_id}</TableCell>
            <TableCell>
              {rental.rental_date
                ? new Date(rental.rental_date).toISOString().split('T')[0]
                : ''}
            </TableCell>
            <TableCell className="text-right">{rental.rent}</TableCell>
            <TableCell className={'text-right'}>{rental.mood}</TableCell>
            <TableCell className="text-right">
              {rental.reg_date
                ? new Date(rental.reg_date).toISOString().split('T')[0]
                : ''}
            </TableCell>
            <TableCell
              onClick={() => setRentalId(rental.id)}
              className={'flex flex-row justify-evenly items-center'}
            >
              <SheetDemo
                setPaymentType={setPaymentType}
                setRent={setRent}
                setRentalDay={setRentalDay}
                setEmail={setEmail}
                updateRental={updateRental}
                setIcon={setIcon}
              />
              <AlertDialogDemo onClick={deleteRental} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
