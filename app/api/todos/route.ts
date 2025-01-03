import { Todo } from "@/app/lib/types";
import { NextResponse } from "next/server";

const DATA_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const DATA_API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
    const origin = request.headers.get('origin');
    const res = await fetch(DATA_API_URL);
    const todos: Todo[] = await res.json();
    return new NextResponse(JSON.stringify(todos), {
        headers: {
            'Access-Control-Allow-Origin': origin || "*",
            'Content-Type': 'application/json',
        }
    });
}

export async function POST(request: Request) {
    const { userId, title }: Partial<Todo> = await request.json();
    if (!userId || !title) return NextResponse.json({ "message": "Missing required data" });

    const res = await fetch(DATA_API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "API_KEY": DATA_API_KEY,
        },
        body: JSON.stringify({ userId, title, completed: false })
    });

    const newTodo: Todo = await res.json();
    return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
    const { userId, id, title, completed }: Todo = await request.json();
    if (!userId || !title || typeof completed !== 'boolean') return NextResponse.json({ message: "Missing required data" });

    const res = await fetch(`${DATA_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API_KEY': DATA_API_KEY,
        },
        body: JSON.stringify({ userId, title, completed, id }),
    })
    const updatedTodo: Todo = await res.json();
    return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ message: 'Todo id is required' });
    await fetch(`${DATA_API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API_key': DATA_API_KEY
        },
    });
    return NextResponse.json({ message: `Todo id ${id} deleted.` })
}