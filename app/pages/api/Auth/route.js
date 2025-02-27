import { Pool } from "pg";
import { client } from "../dbConnection/db";
import { NextResponse } from "next/server";


export async function POST(req) {
    const {type ,  Data } = await req.json();
    if(type == 'Signup')
    {
        const existed = await (await client).query(`
            SELECT * FROM public."Authentication"
            WHERE "phoneNumber" = '${Data.phoneNumber}'
            `)
            const Duplicate = existed.rows.find((item) => item.phoneNumber === Data.phoneNumber)
            if (Duplicate) {
                return NextResponse.json({ Success: false, Message: "User is already existed" })
            }
            else {
                (await client).query(`
                    INSERT INTO public."Authentication"(username ,email ,  password , "firstName" , "lastName"  ,   "phoneNumber" )
                    VALUES ('${Data.username}' ,'${Data.email}' , '${Data.password}', '${Data.firstName}' , '${Data.lastName}' ,   '${Data.phoneNumber}')
                    `)
                const Result = (await client).query(`
                    SELECT * FROM public."Authentication"
                    `)
                return NextResponse.json({ success: true, Data: Result.fields })
            }
    }



    else if(type == 'login')
    {
        return NextResponse.json({message : "this is login type"})
    }



    else
    {
        return NextResponse.json({Message : "unknown type of the request"})
    }
    

}