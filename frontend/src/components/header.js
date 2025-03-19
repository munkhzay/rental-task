import { LogOut } from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useAuthContext } from '@/providers/authProvider';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

export const Header = () => {
  const { setCurrentUser, currentUser } = useAuthContext();
  const router = useRouter();
  const logout = () => {
    setCurrentUser('');
    localStorage.removeItem('token');
    const user = localStorage.getItem('token');
    if (user === null) toast.warning('Та гарлаа');
    router.push('/auth/signin');
  };
  return (
    <div className="bg-blue-500 text-center ">
      <div className="w-[1044px] text-black m-auto h-24 flex justify-between items-center">
        <div> Rental crud</div>
        <div className="flex gap-5 items-center">
          <div className="flex flex-col justify-center items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>{' '}
            <div className="font-bold">{currentUser?.user?.name}</div>
          </div>
          <div className="p-2 border bg-white rounded-lg">
            <LogOut onClick={logout} className="" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
