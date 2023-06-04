// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "GET") {
        const data = await get(req)

        res.send(data)
    }

    if (req.method === "DELETE") {
        await deletee(req)

        res.redirect("/dashboard/portfolio")
    }
}

async function deletee(req: NextApiRequest) {
    const data = await prisma.portfolio.delete({
        where: {
            id: req.query.id as string
        }
    })

    return data;
}

async function get(req: NextApiRequest) {
    const data = await prisma.portfolio.findFirst({
        where: {
            id: req.query.id as string
        }
    })

    return data;
}