"use server";
import { revalidatePath } from "next/cache";

export const revalidateData = (path) => {
    revalidatePath(path);
};

export const getAllUsers = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_API + "/users");
    if (!res.ok) {
        throw new Error("Error fetching users");
    }
    return await res.json();
};
