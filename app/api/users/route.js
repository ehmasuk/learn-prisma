import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

// get all users
export const GET = async () => {
    const users = await prisma.users.findMany();
    return NextResponse.json(users, { status: 200 });
};

// create new user
export const POST = async (req) => {
    const { name } = await req.json();
    try {
        await prisma.users.create({
            data: {
                name,
            },
        });
        return NextResponse.json({ message: "User created!" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
};
