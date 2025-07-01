import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { siteMetadata } from "src/data/siteMetaData";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, fullname, message, subject, text, to } = req.body;

    // 環境ログ（開発・本番両方）
    console.info("Environment:", process.env.NODE_ENV);
    console.info("Resend API Key:", process.env.RESEND_API_KEY ? "Set" : "Not set");
    console.info("Request body:", req.body);

    // 送信者情報の検証
    if (!email || !fullname || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // メール送信
    const emailData = {
      from: process.env.RESEND_FROM_EMAIL || `${siteMetadata.title} <onboarding@resend.dev>`, // 環境変数で制御可能
      to: [to || siteMetadata.email],
      subject: subject || "お問い合わせありがとうございます",
      text:
        text ||
        `折り返しご連絡いたします 💖
お名前: ${fullname} 様
メールアドレス: ${email}
お問い合わせ内容:
${message}`,
      replyTo: email, // 返信先を設定
    };

    console.info("Sending email with data:", emailData);

    const { error } = await resend.emails.send(emailData);

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        message: "Failed to send email",
        error: error.message,
        details: error,
        environment: process.env.NODE_ENV,
        fromAddress: emailData.from,
      });
    }

    res.status(200).json("OK");
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
