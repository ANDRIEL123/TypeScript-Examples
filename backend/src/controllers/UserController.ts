import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const user = [
    { name: 'Andriel', email: 'andrielmfriedrich@gmail.com' }
]

export default {
    async getUser(req: Request, res: Response) {
        return res.json(user)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail(
            { name: 'Andriel Friedrich', email: 'andrielmfriedrich@gmail.com' },
            { body: 'Vai fundo', subject: 'olha ai' }
        )
    }
};