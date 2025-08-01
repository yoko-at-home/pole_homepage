import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { siteMetadata } from "src/data/siteMetaData";

export const FormContact = () => {
  const router = useRouter();

  const handleRegisterUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      // Resendでメール送信
      const emailRes = await fetch("/api/send-resend", {
        body: JSON.stringify({
          fullname: form.fullname.value,
          email: form.email.value,
          message: form.message.value,
          to: siteMetadata.email,
          subject: "お問い合わせありがとうございます",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!emailRes.ok) {
        throw new Error("メール送信に失敗しました");
      }

      // 成功時に/successページに遷移
      router.push({
        pathname: "/success",
        query: {
          subject: "お問い合わせありがとうございます",
          text: `折り返しご連絡いたします 💖

お名前: ${form.fullname.value} 様
メールアドレス: ${form.email.value}
お問い合わせ内容:
${form.message.value}`,
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("送信に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <div>
      <div>
        <div className="container sm:mt-0 sm:p-6 lg:px-20">
          <form onSubmit={handleRegisterUser}>
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
                className="w-full rounded-md bg-gradient-to-r  from-slate-300 to-[#8aba28] p-2 font-black text-slate-50 shadow-md focus:from-purple-700 focus:to-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
