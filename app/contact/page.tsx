import nodemailer from "nodemailer"

type TEmailBody = {
    email: string;
    subject: string;
    message: string;
};


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "gopakumarg893@gmail.com",
        pass: "rayq stcm nzlk avds",
    },
});

export default async function POST(req: any) {
    const data: TEmailBody = await req.searchParams;
    const info = await transporter.sendMail({
        from: data.email, // sender address
        to: "gopakumarg893@gmail.com", // list of receivers
        subject: data.subject, // Subject line
        html: `<b>${data.message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
}