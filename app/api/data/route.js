"use server"
import { NextResponse } from "next/server"
import { Pool } from "pg"

const pool  = new Pool({
    connectionString : process.env.DATABASE_URL
})
const client = await pool.connect()

export async function GET() {
    
    try
    {
        const result  = await client.query('SELECT * FROM todo')
        
        return NextResponse.json({data : result.rows})
    }
    catch(error)
    {
        return NextResponse.json({error : error})
    }
    
}

export async function POST(req) {
    const Data = await req.json();
    const AddData = await client.query(`
        INSERT INTO todo (name , todo)
        VALUES ('${Data.Data.todoname}' , '${Data.Data.todo}')
        `)

        const result  = await client.query('SELECT * FROM todo')
        NextResponse.json({Data : result.rows})
}