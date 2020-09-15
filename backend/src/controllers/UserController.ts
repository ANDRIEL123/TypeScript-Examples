import { Request, Response } from 'express'

const user = [
    { name: 'Andriel', email: 'andrielmfriedrich@gmail.com' }
]

export default {
    async getUser(req: Request, res: Response) {
        return res.json(user)
    }
};