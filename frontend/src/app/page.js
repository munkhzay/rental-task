'use client';
import { Header } from '@/components/header';
import { UserInfo } from '@/components/userProfile/userProfile';
import { useEffect, useState } from 'react';
import { RentalTable } from '@/components/userRental/rentalTable';
import { Footer } from '@/components/footer';
import { useAuthContext } from '@/providers/authProvider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showRent, setShowRent] = useState(false);
  const { currentUser, loading } = useAuthContext();
  const [category, setCategory] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!currentUser && loading) {
      router.push('/auth/signin');
    }
  }, [currentUser, loading]);
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-between gap-15 p-20">
        <UserInfo
          category={category}
          setCategory={setCategory}
          onClick={() => setShowRent(!showRent)}
        />
        {category && showRent && <RentalTable />}
      </div>
      <Footer />
    </div>
  );
}
