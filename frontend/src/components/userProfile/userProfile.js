'use client';

import axios from 'axios';
import { Business } from './business';
import { CustomerData } from './customerData';
import { DialogDemo } from './newCategory';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/providers/authProvider';
import { toast } from 'react-toastify';

export const UserInfo = ({ onClick, setShowCategory, showCategory }) => {
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const { currentUser } = useAuthContext();
  const [category, setCategory] = useState();

  const getCategory = async () => {
    try {
      const category = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/category/${currentUser?.user?.id}`
      );
      setCategory(category?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory;
  }, []);

  const createCategory = async () => {
    await axios
      .post('http://localhost:8800/category/create', {
        category_name: name,
        icon_id: icon,
        owner_id: currentUser?.user?.id,
      })
      .then(function (response) {
        console.log(response);
        toast.success('Successful');
        setIcon();
        setName();
        getCategory();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-[300px] h-fit p-8 border flex flex-col rounded-lg gap-8">
        <div className="bg-blue-600 rounded-lg py-7">
          <div></div>
        </div>
        <CustomerData
          onClick={onClick}
          setShowCategory={setShowCategory}
          showCategory={showCategory}
        />
        <Business category={category} getCategory={getCategory} />
        <DialogDemo
          name={name}
          icon={icon}
          setIcon={setIcon}
          setName={setName}
          createCategory={createCategory}
        />
      </div>
    </div>
  );
};
