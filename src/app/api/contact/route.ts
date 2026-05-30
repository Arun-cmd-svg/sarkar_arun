import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("MAIL_PASS LENGTH:", process.env.MAIL_PASS?.length);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

    await transporter.sendMail({
      from: `"Sarkar Arun" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Project Inquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr style="margin: 20px 0;" />

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}