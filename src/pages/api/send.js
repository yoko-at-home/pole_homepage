// DEPRECATED: このファイルは非推奨です。代わりに /api/send-resend.ts を使用してください。
// SendGridからResend.comに移行しました。

const handler = (req, res) => {
  res.status(410).json({
    message: "This endpoint is deprecated. Please use /api/send-resend instead.",
    migration: "SendGrid to Resend.com",
  });
};

export default handler;
