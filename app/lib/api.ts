type TEmailBody = {
    email: string;
    subject: string;
    message: string;
};

export const sendContactForm = async (data: TEmailBody): Promise<Response> => {
    const url = new URL("/contact", window.location.href);

    Object.entries(data).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    try {
        const response = await fetch(url.toString(), options);
        if (!response.ok) {
            throw new Error(`Failed to send contact form: ${response.statusText}`);
        }
        return response;
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error;
    }
};