// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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