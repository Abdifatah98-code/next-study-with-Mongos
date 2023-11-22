import study from "@/modals/StudyModal"
import { NextRequest, NextResponse } from "next/server"

import mongoose from "mongoose"



export const POST = async (request: NextRequest, res: NextResponse) => {
    const MONGOS_URI = process.env.NEXT_MONGOS_URI!;
    let client;
    try {
        client = await mongoose.connect(MONGOS_URI)
        console.log("connected successfully !")
    } catch (error) {
        console.log(error);

    }
}
