'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { sendContactForm } from "../lib/api";
import { useState } from "react";
import Socials from "./Socials";

const emailSchema = z.object({
    email: z.string().email("Email is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
});

type TEmailForm = z.infer<typeof emailSchema>;

function EmailForm(): React.ReactNode {
    const { register, handleSubmit, formState: { errors } } = useForm<TEmailForm>({
        resolver: zodResolver(emailSchema),
    });

    const [isLoading, setLoading] = useState<boolean>(false);
    const [notSubmitted, setSubmitted] = useState<boolean>(true);
    const [status, setStatus] = useState(false);

    const onSubmit: SubmitHandler<TEmailForm> = async ({ email, message, subject }) => {
        setLoading(true)
        try {
            const body = {
                email,
                message,
                subject
            }

            const res = await sendContactForm(body);
            if (res.ok) {
                setLoading(false);
                setSubmitted(false);
                setStatus(true)
            }
            console.log("Form submitted successfully!");
        } catch (error) {
            console.error("Error sending form:", error);
        }
    };

    return (
        <div className="flex justify-center bg-black items-center rounded-lg max-h-svh p-8 max-w-full">
            <div className="flex flex-row">
                <Socials />
            </div>
            <div className=" bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                                font-extrabold text-transparent">
                <h1 className="text-4xl font-medium m-5 p-5">Lets Connect.!</h1>
            </div>
            {notSubmitted
                &&
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-base font-medium text-slate-700 mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="input input-bordered w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.email?.message && (
                            <span className="text-red-500 text-sm font-bold">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-base font-medium text-slate-700 mb-1">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            {...register("subject")}
                            className="input input-bordered w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.subject?.message && (
                            <span className="text-red-500 text-sm font-bold">{errors.subject.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-base font-medium text-slate-700 mb-1">Message:</label>
                        <textarea
                            id="message"
                            {...register("message")}
                            className="textarea textarea-bordered w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.message?.message && (
                            <span className="text-red-500 text-sm font-bold">{errors.message.message}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn rounded-r-badge bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 
                                text-lg font-extrabold text-transparent hover:bg-black"
                        disabled={isLoading}
                    >
                        Submit
                    </button>
                </form>
            }
            {
                status &&
                <div className="success-message">
                    Thank you for contacting....!
                    See you soon.
                </div>
            }
        </div >
    );
}

export default EmailForm;