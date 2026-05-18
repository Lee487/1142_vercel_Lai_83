import { fetchUsers } from "@/action/user.action_83";
import DeleteButton_83 from './DeleteButton_83';

const UserList_83 = async () => {
    const users = await fetchUsers();
    console.log('users',users);
  return (
   <div className='mt-4'>
      {users.length ? (
<div className='max-w-lg'>
          {users.map((user) => {
            return (
<div
    key={user.id}
                className='text-lg flex justify-between items-center mb-2'> 
<div>{user.name}</div>
<div>{user.email}</div>
<DeleteButton_83 id={user.id} />
</div>
            );
          })}
</div>
      ) : (
<p>No users found...</p>
      )}
</div>
  );
};
export default UserList_83;