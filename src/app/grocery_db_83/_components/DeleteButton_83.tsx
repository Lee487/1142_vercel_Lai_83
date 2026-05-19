'use client';
import { removeGrocery } from "@/action/grocery.action_83";

const DeleteButton_83 = ({ id }: { id: string }) => {
    // 使用 bind 預傳 id 參數給 removeGrocery
    const removeGroceryWithId = removeGrocery.bind(null, id);

    return (
        <form action={removeGroceryWithId}>
            <button 
                type="submit" 
<<<<<<< HEAD
                className="btn btn-danger"
            >
                Delete
=======
                className="btn remove-btn"
            >
                delete
>>>>>>> 50d49ef (1234)
            </button>
        </form>
    );
};

export default DeleteButton_83;