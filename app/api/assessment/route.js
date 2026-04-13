import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Handle FormData instead of JSON
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const experience = formData.get('experience');
    const degree = formData.get('degree');
    const resumeFile = formData.get('resume');

    const headers = request.headers;
    const referer = headers.get("referer") || "Direct visit";

    // Prepare resume attachment if file exists
    let resumeAttachment = null;
    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      resumeAttachment = {
        filename: resumeFile.name,
        content: buffer,
      };
    }

    // FIXED: Proper Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Must be App Password, not regular password
      },
    });

    // 1) EMAIL TO YOU (Admin)
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // FIXED: Use the authenticated email
      to: process.env.EMAIL_USER,
      subject: `🎯 NEW Germany Lead - ${name}`,
      html: `
        <h2 style="color: #f97316;">New Germany Assessment Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> <strong>${phone}</strong></p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Education:</strong> ${degree}</p>
        <p><strong>Resume:</strong> ${resumeFile ? '✅ Attached' : '❌ Not provided'}</p>
        <p><strong>Landing Page:</strong> <a href="${referer}">${referer}</a></p>
        <div style="background: #fef3c7; padding: 15px; border-left: 5px solid #f59e0b; margin: 20px 0;">
          <p><strong>📞 Call Immediately: +91 91604 49000</strong></p>
        </div>
        <hr><p style="font-size: 12px; color: #666;">VJC Overseas - Bangalore</p>
      `,
      ...(resumeAttachment && { attachments: [resumeAttachment] }),
    });

    // 2) THANK YOU AUTO-REPLY TO USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // FIXED: Use the authenticated email
      to: email,
      subject: `✅ Thank You ${name} - Germany Assessment Received`,
      html: `
        <h2 style="color: #f97316;">Thank You ${name}!</h2>
        <p>We've received your Germany Opportunity Card assessment request.</p>
        <p>One of our immigration experts will contact you within <strong>24 hours</strong>.</p>
        
        <div style="background: #dbeafe; padding: 20px; border-left: 5px solid #3b82f6; margin: 20px 0;">
          <p><strong>📞 Urgent? Call Now:</strong></p>
          <p style="font-size: 24px; margin: 10px 0; color: #1e40af;"><strong>+91 91604 49000</strong></p>
        </div>
        
        <p style="font-size: 14px; color: #666;">
          Best regards,<br>
          VJC Overseas Team<br>
          <a href="https://vjcoverseas.com">vjcoverseas.com</a> | Hyderabad | Bangalore | USA
        </p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}