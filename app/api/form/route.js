import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ success: false, error: error.message });
    }
}