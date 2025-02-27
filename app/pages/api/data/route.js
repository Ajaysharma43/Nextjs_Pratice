"use server";
import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
const client = await pool.connect();

export async function GET() {
    try {
        const result = await client.query("SELECT * FROM todo");
        return NextResponse.json({ data: result.rows });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

export async function POST(req) {
    try {
        const Data = await req.json();
        await client.query(
            `INSERT INTO todo (name, todo) VALUES ($1, $2)`,
            [Data.Data.todoname, Data.Data.todo]
        );

        const result = await client.query("SELECT * FROM todo");
        return NextResponse.json({ Data: result.rows });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

export async function DELETE(req) {
    try {
        const  {id}  = await req.json();
        console.log(id);
        
        await client.query(`DELETE FROM todo WHERE id = ${id}`);

        const result = await client.query("SELECT * FROM todo");
        return NextResponse.json({ Data: result.rows });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}

export async function PUT(req) {
    try {
        const { data } = await req.json();
        console.log(data);

        await client.query(
            `UPDATE todo 
        SET name = '${data.name}',todo = '${data.todo}'
          WHERE id = ${data.id}`
        );

        const result = await client.query("SELECT * FROM todo");
        return NextResponse.json({ Data: result.rows });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}