// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/prisma/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await get()

        res.status(200).send(data)
    }

    if (req.method === "POST") {
        const data = await post(req)

        res.redirect("/dashboard/portfolio")
    }
}

async function get() {
    const data = await prisma.portfolio.findMany()

    return data;
}

async function post(req: NextApiRequest) {
    const data = await prisma.portfolio.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            link: req.body.link,
            expand: req.body.expand ? true : false,
            type: req.body.type
        }
    })

    return data;
}
