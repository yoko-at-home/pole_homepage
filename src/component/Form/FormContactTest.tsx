import { useRouter } from "next/router";
import type { FormEvent } from "react";

export const FormContactTest = () => {
  const router = useRouter();

  const handleTestSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      // テスト用のメール送信
      const emailRes = await fetch("/api/test-email", {
        body: JSON.stringify({
          fullname: form.fullname.value,
          email: form.email.value,
          message: form.message.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!emailRes.ok) {
        const errorData = await emailRes.json();
        throw new Error(errorData.message || "メール送信に失敗しました");
      }

      await emailRes.json();

      // 成功時に/successページに遷移
      router.push({
        pathname: "/success",
        query: {
          subject: "テストメール - お問い合わせありがとうございます",
          text: `テストメールが正常に送信されました！ 💖

お名前: ${form.fullname.value} 様
メールアドレス: ${form.email.value}
お問い合わせ内容:
${form.message.value}

※ このメールはテスト用です。実際のお問い合わせは本番フォームをご利用ください。`,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert(`送信に失敗しました: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  return (
    <div>
      <div className="mb-4 rounded-lg bg-yellow-100 p-4 text-yellow-800">
        <strong>開発環境用テストフォーム</strong>
        <br />
        このフォームは開発環境でのみ表示され、テストメールを送信します。
      </div>
      <div>
        <div className="container sm:mt-0 sm:p-6 lg:px-20">
          <form onSubmit={handleTestSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname">お名前</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8aba28] focus:ring-[#8aba28] sm:text-sm"
                placeholder="お名前"
                autoComplete="name"
                required
                minLength={3}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">メールアドレス</label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8aba28] focus:ring-[#8aba28] sm:text-sm"
                placeholder="送信可能な形式：name@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">問合せ内容</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8aba28] focus:ring-[#8aba28] sm:text-sm"
                rows={3}
                required
              />
            </div>
            <div className="py-3 px-4 text-right sm:px-6">
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 p-2 font-black text-slate-50 shadow-md focus:from-yellow-600 focus:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                テスト送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
