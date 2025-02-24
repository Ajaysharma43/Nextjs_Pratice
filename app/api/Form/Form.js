import { NextResponse } from "next/server";

export async function POST(req) {
    const Data = await req.json();
    console.log(Data);
} 