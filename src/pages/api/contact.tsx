// DEPRECATED: このファイルは非推奨です。Resend.comに移行したため、microCMSへの保存は不要になりました。
// 代わりに /api/send-resend.ts を使用してください。

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({
    message: "This endpoint is deprecated. Please use /api/send-resend instead.",
    migration: "microCMS to Resend.com",
  });
}
