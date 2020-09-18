interface MailTo {
    name: string;
    email: string;
}

interface MailMessage {
    subject: string,
    body: string,
    attachment?: string[]
}

class EmailService {
    sendMail(to: MailTo, message: MailMessage) {
        console.log(`Email enviado para ${to.name}: ${message.body}`)
    }
}

export default EmailService