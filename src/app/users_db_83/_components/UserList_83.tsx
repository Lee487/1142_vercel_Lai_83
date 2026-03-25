import { fetchUsers } from "@/action/userAction_83";


const UserList_83 = async () => {
    const users = await fetchUsers();
    console.log('users',users);
  return (
    <>
    {users.map((user)=>{
        return <h3 key={user.id}>{user.email}</h3>;
     })}
    </>
  );
};

export default UserList_83;
    

