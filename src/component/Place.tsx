/* eslint-disable @typescript-eslint/naming-convention */
import { PageTitle } from "src/component/PageTitle";

export const Place = () => {
  return (
    <div id="place">
      <PageTitle fontWeight="bold">活動時間・場所</PageTitle>
      <div className="flex flex-col items-start md:flex-row ">
        <div className="relative h-[70vh] w-[85vw] sm:w-96">
          <iframe
            className="m-3 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.8048721150285!2d139.39070757592012!3d35.484371372651374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ffbc61e0101f%3A0xca90f05458468de4!2z5bqn6ZaT5biC5YWs5rCR6aSo!5e0!3m2!1sja!2sjp!4v1732954614690!5m2!1sja!2sjp"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy=""
          ></iframe>
          <iframe
            className="m-3 mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.020202531208!2d139.4099730759199!3d35.4790439726532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff7a740de4b3%3A0xb2e66319a54be069!2z5bqn6ZaT5biCIOeri-mHjuWPsOOCs-ODn-ODpeODi-ODhuOCo-OCu-ODs-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1732954272133!5m2!1sja!2sjp"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy=""
          ></iframe>
        </div>

        <div className="mx-5 py-10 text-lg font-bold text-zinc-700 sm:p-10">
          日 時： 毎週 水曜日10：00～12：00
          <br />
          場所：座間市内 <br />
          立野台ｺﾐﾆﾃｨｰｾﾝﾀ-（１・３・５週）
          <br />
          座間公民館（２・４週）
        </div>
      </div>
    </div>
  );
};
