import { Todo } from "@/app/lib/types";
import { NextResponse } from "next/server";

const DATA_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;
    const res = await fetch(`${DATA_API_URL}/${id}`);
    const todo: Todo = await res.json();
    return NextResponse.json(todo)
}