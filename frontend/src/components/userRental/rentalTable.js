'use client';
import { TablePagination } from '../ownerComponents/Pagination';
import { use, useEffect, useState } from 'react';
import { TableHead } from '../ownerComponents/tableHead';
import axios from 'axios';
import { useAuthContext } from '@/providers/authProvider';
import { TableDemo } from './rentalTableRow';

export const RentalTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentUser } = useAuthContext();
  const [rentals, setRentals] = useState();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [all, setAll]=useState()
  // const [activeRental, setActiveRental]=useState()
 

  const allDta = async () => {
    try {
      const rental = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/rental/${currentUser?.user?.id}`,
        {}
      );
      setRentals(rental?.data);
      setAll(rentals?.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allDta();
  }, []);

  const allRental = async () => {
    try {
      const rental = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rental/search`, {
        id: currentUser?.user?.id,
        value: search,
      });
      setRentals(rental?.data);
    } catch (error) {
      console.log(error);
    }
  }; 
  
  const rentalStatus=async()=>{
    try {
        const data= await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rental/status/${currentUser?.user?.id}/${status}`, {
      mood:status
    })
    console.log(data)
    setRentals(data?.data)
    if(status==="all"){
      setRentals(all)
    }
    setStatus('')
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
    rentalStatus()
  }, [])
  // useEffect(() => {
  //   allRental();
  // }, []);
  // const getCategory = async () => {
  //   try {
  //     const category = await axios.get(
  //       `http://localhost:8800/category/${currentUser?.user?.id}`
  //     );
  //     setCategory(category?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const itemsPerPage = 5;
  const totalPages = Math.ceil(rentals?.length / itemsPerPage);
  const currentRentals = rentals?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="w-full">
      <TableHead
      status={status}
      rentalStatus={ rentalStatus}
      all={all}
        setStatus={setStatus}
        refetch={allRental}
        setSearch={setSearch}
      />
      <TableDemo refetch={allRental} currentRentals={currentRentals} />
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
