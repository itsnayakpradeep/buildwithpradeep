import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, projectType } = await req.json();

    if (!name || !email || !message || !projectType) {
      return Response.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional but useful for debugging
    await transporter.verify();

    await transporter.sendMail({
      from: `"BuildWithPradeep" <hello@buildwithpradeep.dev>`,
      to: "hello@buildwithpradeep.dev",
      replyTo: email,
      subject: `🚀 New Client Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>🚀 New Client Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Project Type:</b> ${projectType}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
      // ensures you always get a copy even if "Sent" isn't stored
      bcc: "hello@buildwithpradeep.dev",
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email failed:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}