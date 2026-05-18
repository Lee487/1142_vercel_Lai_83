'use client';
import { removeGrocery } from "@/action/grocery.action_83";

const DeleteButton_83 = ({ id }: { id: string }) => {
    // 使用 bind 預傳 id 參數給 removeGrocery
    const removeGroceryWithId = removeGrocery.bind(null, id);

    return (
        <form action={removeGroceryWithId}>
            <button 
                type="submit" 
                className="btn btn-danger"
            >
                Delete
            </button>
        </form>
    );
};

export default DeleteButton_83;