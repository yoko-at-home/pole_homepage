import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { PageTitle } from "src/component/PageTitle";
import type { CardProps } from "src/component/Songs/Card";
import { Card, CardModal } from "src/component/Songs/Card";

import { archaivedData } from "./archaivedData";

const data = archaivedData;

export const Archive: NextPage<CardProps> = (props) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });
  const [selectedItem, setSelectedItem] = useState<CardProps>(props);

  const handleClick = useCallback(
    (d: CardProps) => {
      const result = data.find(({ header }) => {
        return header === d.header;
      });
      if (result) {
        setSelectedItem(result);
        open();
      }
    },
    [open],
  );

  const handleClose = useCallback(() => {
    close();
  }, [close]);

  return (
    <div id="archive">
      <PageTitle>ポレポーレが演奏した作品</PageTitle>
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {data.map((d) => {
          return (
            <button type="button" key={d.header} onClick={() => handleClick(d)}>
              <Card imageFileName={d.imageFileName} header={d.header} content={d.content} subheader={d.subheader} />
            </button>
          );
        })}
      </div>
      <Modal>
        <div className="rounded bg-white py-10 px-2 text-gray-500 sm:px-4 md:px-10">
          <CardModal
            imageFileNameDetail={selectedItem.imageFileNameDetail}
            header={selectedItem.header}
            subheader={selectedItem.subheader}
            content={selectedItem.content}
            extraInfo={selectedItem.extraInfo}
            extraInfo2={selectedItem.extraInfo2}
          />
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="mb-3 rounded bg-gradient-to-r from-gray-400 to-gray-500 p-1 text-center font-medium text-gray-300 opacity-80 hover:text-gray-100 focus:from-purple-600 focus:to-lime-400 sm:px-4 lg:mr-3 lg:py-2"
            >
              閉じる
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
