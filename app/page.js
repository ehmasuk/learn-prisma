import { getAllUsers } from "@/actions/fetchData";
import CreateForm from "@/components/CreateForm";

async function HomePage() {


    const users = await getAllUsers();

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="flex flex-col col-span-1">
                    <CreateForm title="Create user" />

                </div>

                <div className="grid grid-cols-2 gap-4 col-span-2">
                    <div className="even:bg-yellow-50 odd:bg-red-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Users</h1>
                        {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
