import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { siteMetadata } from "src/data/siteMetaData";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 開発環境でのみ動作
  if (process.env.NODE_ENV !== "development") {
    return res.status(404).json({ message: "Not found in production" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, fullname, message } = req.body;

    if (!email) {
      return res.status(400).json({ message: "メールアドレスを入力してください" });
    }

    // 開発環境でのログ
    console.info("API Key available:", !!process.env.RESEND_API_KEY);
    console.info("Request body:", req.body);

    // テスト用のメール送信
    // Resendの無料プランでは、APIキーを作成したメールアドレスにのみ送信可能
    const { error } = await resend.emails.send({
      from: `${siteMetadata.title} <onboarding@resend.dev>`, // Resendのテスト用ドメイン
      to: [email], // Resendアカウントで検証済みのメールアドレスを使用
      subject: "テストメール - お問い合わせ",
      text: `テストメールです 💖
お名前: ${fullname || "テストユーザー"} 様
メールアドレス: ${email || "test@example.com"}
お問い合わせ内容:
${message || "これはテストメッセージです。"}

※ このメールはテスト用です。実際のお問い合わせは ${siteMetadata.email} に送信されます。`,
      replyTo: email || "test@example.com",
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        message: "Failed to send email",
        error: error.message,
        details: error,
        apiKeySet: !!process.env.RESEND_API_KEY,
      });
    }

    res.status(200).json("OK");
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
