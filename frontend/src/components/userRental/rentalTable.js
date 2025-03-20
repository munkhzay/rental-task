'use client';
import { TablePagination } from './Pagination';
import { TableDemo } from './rentalHistory';
import { useEffect, useState } from 'react';
import { TableHead } from './tableHead';
import axios from 'axios';
import { useAuthContext } from '@/providers/authProvider';

export const RentalTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentUser } = useAuthContext();
  const [rentals, setRentals] = useState();
  const [search, setSearch] = useState('');

  const allDta = async () => {
    try {
      const rental = await axios.get(
        `http://localhost:8800/rental/${currentUser?.user?.id}`,
        {}
      );
      setRentals(rental?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allDta();
  }, []);
  const allRental = async () => {
    try {
      const rental = await axios.post(`http://localhost:8800/rental/search`, {
        id: currentUser?.user?.id,
        value: search,
      });
      console.log(rental?.data);
      setRentals(rental?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(rentals?.length / itemsPerPage);
  const currentRentals = rentals?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="w-full">
      <TableHead refetch={allRental} setSearch={setSearch} />
      <TableDemo refetch={allRental} currentRentals={currentRentals} />
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
