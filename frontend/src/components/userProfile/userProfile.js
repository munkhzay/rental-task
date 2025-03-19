import { Business } from './business';
import { CustomerData } from './customerData';
import { DialogDemo } from './newCategory';

export const UserInfo = ({ onClick, category, setCategory }) => {
  return (
    <div>
      <div className="w-[300px] h-fit p-8 border flex flex-col rounded-lg gap-8">
        <div className="bg-blue-600 rounded-lg py-7">
          <div>user</div>
        </div>
        <CustomerData onClick={onClick} setCategory={setCategory} category={category}/>
        <Business
          profileData={'Business'}
          ProfileCategory2={'country'}
          ProfileCategory={'rental'}
        />
        <DialogDemo />
      </div>
    </div>
  );
};
