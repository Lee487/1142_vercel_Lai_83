import { fetchUsers } from "@/action/user.action_83";

export const dynamic = 'force-dynamic';

const UserList_83 = async () => {
    let users: { id: number; name: string | null; email: string }[] = [];
    try {
        users = await fetchUsers();
        console.log('Fetched users:', users);
    } catch (error) {
        console.error("UserList Render Error:", error);
        return <p className="text-red-500">資料庫連線失敗，請檢查網路或設定。</p>;
    }

    if (!users || users.length === 0) {
        return <p>目前沒有使用者資料</p>;
    }

    return (
        <div className="flex flex-col gap-2">
            {users.map((user: { id: number; name: string | null; email: string }) => (
                <h3 key={user.id} className="border-b pb-1">
                    {user.name}
                </h3>
            ))}
        </div>
    );
};

export default UserList_83;
