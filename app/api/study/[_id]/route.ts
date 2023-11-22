import { connectDb } from "@/Connect/mongodb";
import study from "@/modals/StudyModal";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

connectDb()


export const GET = async (req: Request, res: any) => {


    const { params } = res;
    try {
        const response = await study.findById(params._id)
        return NextResponse.json(response, { status: 200 })

    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}