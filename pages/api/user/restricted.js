import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { getToken } from "next-auth/jwt"


export default async (req, res) => {
    const session = await getToken({ req })

    if (session) {
        res.json({
            "user": session
        })
    }

    res.json({
        "user": null
    })
}