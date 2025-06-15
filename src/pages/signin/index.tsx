import { useRouter } from "next/router";
import { useState } from "react";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

export default function SignIn() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      router.push("/audio");
    } else {
      router.push("/");
    }
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setPassword(e.target.value);
  };

  return (
    <FluidLayout>
      <PageSEO
        title={`Audio - ${siteMetadata.title}`}
        description="Enter Password"
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/signin`}
      />
      <div className="py-10">音源ページにアクセスするには、パスワードを入力してください。</div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input required type="password" name="password" placeholder="パスワード入力" onChange={handleOnChange} />
          <button
            type="submit"
            className="ml-5 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 p-6 font-bold leading-10 text-gray-100 sm:text-lg"
          >
            Enter
          </button>
        </form>
      </div>
    </FluidLayout>
  );
}
