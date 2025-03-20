import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CirclePlus } from 'lucide-react';
import { SelectDemo } from './selectPayType';
import axios from 'axios';
import { useAuthContext } from '@/providers/authProvider';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export function AddNew({ refetch }) {
  const [email, setEmail] = useState('');
  const [rentalDay, setRentalDay] = useState('');
  const [rent, setRent] = useState();
  const [paymentType, setPaymentType] = useState('');
  const { currentUser } = useAuthContext();

  const createCustomer = async () => {
    await axios
      .post('http://localhost:8800/rental/post', {
        user_id: currentUser?.user?.id,
        customer_email: email,
        rental_date: rentalDay,
        rent: rent,
        payment_type: paymentType,
      })
      .then(function (response) {
        toast.success('Zahialga amjilttai nemegdelee');
        setEmail('');
        setRentalDay('');
        setRent();
        setPaymentType('NONPEY');
        refetch();
      })
      .catch(function (error) {
        toast.error(error);
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={
            'bg-blue-600 p-2 ml-4 rounded-sm border-none hover:bg-white hover:text-black text-white'
          }
          variant="outline"
        >
          <div className="flex flex-row gap-2 px-5">
            <CirclePlus />
            <div>Add new</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New rental</DialogTitle>
          <p id="dialog-description" className="text-sm text-gray-500">
            Та түрээсийн мэдээллээ оруулна уу.
          </p>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Customer email
            </Label>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              id="name"
              placeholder="example@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Rental date
            </Label>
            <Input
              onChange={(event) => setRentalDay(event.target.value)}
              id="username"
              placeholder={'2020-02-02'}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Rent$
            </Label>
            <Input
              onChange={(event) => setRent(event.target.value)}
              id="username"
              type={'number'}
              placeholder={'00.0$'}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Paid
            </Label>
            <SelectDemo onValueChange={setPaymentType} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            {' '}
            <Button
              className={'bg-blue-600 hover:bg-green-500'}
              disabled={!email || !rentalDay || !rent || !paymentType}
              onClick={createCustomer}
            >
              Save{' '}
            </Button>{' '}
          </DialogClose>{' '}
        </DialogFooter>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}
