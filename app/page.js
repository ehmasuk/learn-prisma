"use client";
import useGet from "@/hooks/useGet";
import usePost from "@/hooks/usePost";
import { useState } from "react";

function HomePage() {
    const [infos, setInfos] = useState({ name: "", title: "", userId: "" });

    const { data: users, getData: refetchUsers } = useGet("/users");
    const { data: posts, getData: refetchPosts } = useGet("/posts", { include: { user: true } });

    const { postData, loading } = usePost();

    const createUser = async () => {
        const user = { name: infos.name };

        postData("/users", user, () => {
            refetchUsers();
            setInfos({ ...infos, name: "" });
            console.log("User created!");
        });
    };

    const createPost = async () => {
        const post = { title: infos.title, userId: infos.userId };
        postData("/posts", post, () => {
            refetchPosts();
            setInfos({ ...infos, title: "", userId: "" });
            console.log("Post created!");
        });
    };

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="flex flex-col col-span-1">
                    <div className="even:bg-fuchsia-50 odd:bg-zinc-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Create post</h1>
                        <input value={infos.name} type="text" onChange={(e) => setInfos({ ...infos, name: e.target.value })} className="input" placeholder="Name" />

                        <button type="button" className="btn" onClick={createUser} disabled={loading}>
                            Create
                        </button>
                    </div>

                    <div className="even:bg-fuchsia-50 odd:bg-zinc-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold">Create post</h1>
                        <input value={infos.title} type="text" onChange={(e) => setInfos({ ...infos, title: e.target.value })} className="input" placeholder="Title" />
                        <input value={infos.userId} type="text" onChange={(e) => setInfos({ ...infos, userId: e.target.value })} className="input" placeholder="User Id" />

                        <button type="button" className="btn" onClick={createPost} disabled={loading}>
                            Create
                        </button>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 col-span-2">
                    <div className="even:bg-yellow-50 odd:bg-red-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Users</h1>
                        {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
                        {/* <Table th={["name", "id"]} data={users} /> */}
                    </div>

                    <div className="even:bg-yellow-50 odd:bg-red-50 p-10">
                        <h1 className="text-xl mb-3 font-semibold ">Posts</h1>

                        {/* <Table th={["title", "userId"]} data={posts} /> */}
                        {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
