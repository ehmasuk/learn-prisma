"use client";

import { revalidateData } from "@/actions/fetchData";
import usePost from "@/hooks/usePost";
import { useState } from "react";

function CreateForm({ title }) {
    const [infos, setInfos] = useState({ name: "", title: "", userId: "" });
    const { postData, loading } = usePost();

    const createUser = async () => {
        const user = { name: infos.name };

        postData("/users", user, () => {
            revalidateData("/");
            setInfos({ ...infos, name: "" });
            console.log("User created!");
        });
    };

    return (
        <div className="even:bg-fuchsia-50 odd:bg-zinc-50 p-10">
            <h1 className="text-xl mb-3 font-semibold ">{title}</h1>
            <input value={infos.name} type="text" onChange={(e) => setInfos({ ...infos, name: e.target.value })} className="input" placeholder="Name" />

            <button type="button" className="btn" onClick={createUser} disabled={loading}>
                Create
            </button>
        </div>
    );
}

export default CreateForm;
