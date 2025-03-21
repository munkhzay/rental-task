import { useAuthContext } from '@/providers/authProvider';
import axios from 'axios';
import * as React from 'react';

export function SelectStatus({ setStatus, rentalStatus}) {
  // console.log(status)
  // const {currentUser}=useAuthContext()
  // const rentalStatus=async()=>{
  //   try {
  //       const data= await axios.get(`http://localhost:8800/rental/status/${currentUser?.user?.id}/${status}`, {
  //     mood:status
  //   })
  //   console.log(data)
  //   setRentals(data?.data)
  //   if(status==="all"){
  //     setRentals(all)
  //   }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // React.useEffect(()=>{
  //   rentalStatus()
  // }, [])
  

  return (
    <div className="flex items-center">
      <select
        className="text-white"
        onClick={(event) => {setStatus(event.target.value), rentalStatus()}}
        id="rentalProduct"
      >
        <option value="">status</option>
        <option value="all">All</option>
        <option value="ACTIVE">Active</option>
        <option value="INACTIVE">Inactive</option>
      </select>
    </div>
  );
}
