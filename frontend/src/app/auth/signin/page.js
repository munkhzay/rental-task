'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthContext } from '@/providers/authProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

const FormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .length(5, { message: 'Must be exactly 5 characters long' }),
});

export default function SignIn() {
  const router = useRouter();
  const { signin, currentUser, loading } = useAuthContext();
  useEffect(() => {
    if (currentUser && !loading) {
      router.push('/');
    }
  }, [loading]);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data) {
    axios
      .post('http://localhost:8800/signin', {
        password: data.password,
        email: data.email,
      })
      .then(function (response) {
        if (response.data === null)
          toast.warning('Таны оруулсан мэдээлэл буруу байна');
        else {
          signin(response?.data?.token, response?.data?.user[0]),
            toast.success('Амжилттай нэвтэрлээ');
          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      })
      .catch(function (error) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
      });
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="py-15 px-8 rounded-lg border ">
        <div className="text-black font-extrabold text-2xl text-center pb-10">
          Нэвтрэх
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[350px] space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center flex flex-col gap-5">
              <Button
                className={'p-5 w-full bg-blue-500 hover:bg-blue-600'}
                type="submit"
              >
                Нэвтрэх
              </Button>{' '}
              <div>Эсвэл</div>
              <Link href={'/auth/signup'}>
                <Button
                  className={
                    'p-5 w-full bg-white text-black border border-blue-400 hover:bg-blue-500'
                  }
                >
                  Бүртгүүлэх
                </Button>
              </Link>
            </div>
          </form>
          <ToastContainer />
        </Form>
      </div>{' '}
    </div>
  );
}
