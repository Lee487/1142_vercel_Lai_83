import { removeUser } from "@/action/userAction_83";



const DeleteButton_83 = ({ id }: { id: number }) => {
    const removeUserWithId = removeUser.bind(null,id);
    return (
        <form action={removeUserWithId}>
            <input type="hidden" name='name' value='random' />
            <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Delete
                </button>
        </form>
    );
};

export default DeleteButton_83;
