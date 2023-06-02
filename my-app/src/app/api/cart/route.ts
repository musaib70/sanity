import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../lib/drizzle";
import { Message } from "postcss";
import { v4 as uuid } from "uuid";
import {cookies} from "next/headers"



export async function GET (request: NextRequest) {
    
    try {
     const data = await db.select().from(cartTable)
     
     return NextResponse.json({data})
        
    } catch (error) {

        return NextResponse.json({message: "something went wrong"})

        console.log(error);
        
    }
}




export async function POST (request:NextRequest) {
    
const res = await request.json()

const uid = uuid()
const setCookies = cookies()

const user_id = cookies().get("user_id")

if (!user_id){ 
setCookies.set("user_id", uid)
}


    try {
        
        const data1 = await db.insert(cartTable).values({
            product_id: res.product_id ,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
         } ).returning();

        return NextResponse.json({data1})

    } catch (error) {
        return NextResponse.json({message: "something went wrong"})
        console.log(error);
        
    }
}