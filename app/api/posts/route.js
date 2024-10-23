import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

// get all posts
export const GET = async (req) => {

    const queryParam = req.headers.get('query');

    const query = JSON.parse(queryParam);


    const posts = await prisma.posts.findMany(query);
    return NextResponse.json(posts, { status: 200 });
};

// create new post
export const POST = async (req) => {
    const { title, userId } = await req.json();
    try {
        await prisma.posts.create({
            data: {
                title,
                userId,
            },
        });
        return NextResponse.json({ message: "Post created!" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
};
