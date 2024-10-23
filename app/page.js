import { getAllUsers } from "@/actions/fetchData";
import CreateForm from "@/components/CreateForm";

async function HomePage() {
    // const { data: users, getData: refetchUsers } = useGet("/users");
    // const { data: posts, getData: refetchPosts } = useGet("/posts", { include: { user: true } });

    // const createPost = async () => {
    //     const post = { title: infos.title, userId: infos.userId };
    //     postData("/posts", post, () => {
    //         refetchPosts();
    //         setInfos({ ...infos, title: "", userId: "" });
    //         console.log("Post created!");
    //     });
    // };

    const users = await getAllUsers();

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="flex flex-col col-span-1">
                    <CreateForm title="Create user" />

                    {/* <div className="even:bg-fuchsia-50 odd:bg-zinc-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold">Create post</h1>
                        <input value={infos.title} type="text" onChange={(e) => setInfos({ ...infos, title: e.target.value })} className="input" placeholder="Title" />
                        <input value={infos.userId} type="text" onChange={(e) => setInfos({ ...infos, userId: e.target.value })} className="input" placeholder="User Id" />

                        <button type="button" className="btn" onClick={createPost} disabled={loading}>
                            Create
                        </button>
                    </div> */}
                </div>

                <div className="grid grid-cols-2 gap-4 col-span-2">
                    <div className="even:bg-yellow-50 odd:bg-red-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Users</h1>
                        {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
                    </div>

                    {/* <div className="even:bg-yellow-50 odd:bg-red-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Posts</h1>

                        {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
