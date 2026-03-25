import { fetchUsers } from "@/action/userAction_83";

const UserList_83 = async () => {
    const users = await  fetchUsers();
    console.log('users', users);
    return(<>
    {users.map((user) =>{
    <h3>{user.name}</h3>;
})}
    </>
    );
};

export default UserList_83;
