'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Pencil } from 'lucide-react';
import { SelectDemo } from './selectPayType';

export function SheetDemo(props) {
  const { setEmail, setRent, setRentalDay, setPaymentType, updateRental } =
    props;
  return (
    <Sheet className={'p-4'}>
      <SheetTrigger asChild>
        <div className={'p-2'} variant="outline">
          <Pencil className="w-5 h-5" />
        </div>
      </SheetTrigger>
      <SheetContent className={'p-5'}>
        <SheetHeader>
          <SheetTitle>Edit rental</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Customer email
            </Label>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Rental date
            </Label>
            <Input
              onChange={(event) => setRentalDay(event.target.value)}
              id="username"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Rent
            </Label>
            <Input
              onChange={(event) => setRent(event.target.value)}
              id="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Payment status
            </Label>
            <SelectDemo onValueChange={setPaymentType} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={updateRental} type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
