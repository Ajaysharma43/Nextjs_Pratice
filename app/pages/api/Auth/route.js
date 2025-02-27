import { Pool } from "pg";
import { client } from "../dbConnection/db";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const { type, Data } = await req.json();

        if (type == 'Signup') {
            try {
                const existed = await (await client).query(`
                SELECT * FROM public."Authentication"
                WHERE "phoneNumber" = '${Data.phoneNumber}'
                `)
                const Duplicate = existed.rows.find((item) => item.email === Data.email)
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
                    return NextResponse.json({ Success: true, Data: Result.rows })
                }
            }
            catch (error) {
                return NextResponse.json({ error: error })
            }

        }



        else if (type == 'Login') {
            try {
                const findUser = await (await client).query(`
                SELECT * FROM public."Authentication"
                WHERE "email" = '${Data.email}'`)
                const Existed = findUser.rows.find((item) => item.email == Data.email)
                if (Existed) {
                    return NextResponse.json({ message: "this is login type", Existed: Existed, Success: true })
                }
                else {
                    return NextResponse.json({ message: "Unauthorized", Success: false })
                }
            }
            catch (error) {
                return NextResponse.json({ error: error })
            }

        }



        else {
            return NextResponse.json({ Message: "unknown type of the request" })
        }
    }
    catch (error) {
        return NextResponse.json({ error: error })
    }
}