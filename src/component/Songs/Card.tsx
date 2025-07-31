import type { FC } from "react";
import { memo } from "react";

export type CardProps = {
  imageFileName?: string;
  imageFileNameDetail?: string;
  header?: string;
  subheader?: string;
  content?: string;
  extraInfo?: string;
  extraInfo2?: string;
  key?: string;
};

export const Card: FC<CardProps> = memo((props) => {
  return (
    <div
      className="group mb-10 w-full items-center bg-slate-400/10 p-2 shadow-lg shadow-slate-200 hover:bg-primary/10"
      key={props.header}
    >
      <div>{props.subheader}</div>
      <h4 className="text-2xl font-bold shadow-sm">{props.header}</h4>
      <div className="flex py-5">
        <div
          className=" relative h-48 w-full bg-cover bg-top"
          style={{ backgroundImage: `url('${props.imageFileName}')` }}
        >
          &nbsp;
        </div>
      </div>
      <div className="flex justify-center">
        <p className="whitespace-pre-wrap text-left text-lg font-black">{props.content}</p>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export const CardModal: FC<CardProps> = memo((props) => {
  return (
    <div className="h-4/5 p-4" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col border-2 border-gray-200 p-3  text-left md:flex-row">
        <img
          alt={props.header}
          src={props.imageFileNameDetail}
          className="object-cover object-center"
          width={272}
          height={300}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-lg font-bold leading-8 tracking-tight text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.header}
          </h2>
          <p className="whitespace-pre-wrap text-sm font-bold leading-loose sm:mt-10 sm:mb-3 sm:text-lg">
            {props.content}
          </p>
          <p className="prose text-sm font-bold leading-loose sm:mt-10 sm:mb-3 sm:text-lg">{props.extraInfo}</p>
          <p className="prose text-sm font-bold leading-loose sm:mt-10 sm:mb-3 sm:text-lg">{props.extraInfo2}</p>
        </div>
      </div>
    </div>
  );
});

CardModal.displayName = "CardModal";
