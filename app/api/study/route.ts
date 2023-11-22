import { connectDb } from "@/Connect/mongodb"
import study from "@/modals/StudyModal"
import { NextResponse } from "next/server"



connectDb()

export const POST = async (request: Request) => {

    const studyData = await request.json()
    try {
        const response = await study.create(studyData)
        return NextResponse.json(response, { status: 201 })

    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}


export const GET = async () => {
    try {
        const response = await study.find()
        return NextResponse.json(response, { status: 200 })

    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}