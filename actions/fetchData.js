"use server";
import { revalidatePath } from "next/cache";

export const revalidateData = (path) => {
    revalidatePath(path);
};

export const getAllUsers = async () => {
    if (!process.env.NEXT_PUBLIC_API) return [];

    const res = await fetch(process.env.NEXT_PUBLIC_API + "/users");
    if (!res.ok) {
        throw new Error("Error fetching users");
    }
    return await res.json();
};
