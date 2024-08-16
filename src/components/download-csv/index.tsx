"use client";

import { Download } from "lucide-react";
import { Fragment, MouseEvent, useState } from "react";

import { Wrapper } from "./styles";
import { DownloadCSVProps } from "./types";

export function DownloadCSV({ label, onClick, ...props }: DownloadCSVProps) {
  const [isMountCSVToDownload, setIsMOuntCSVToDownload] = useState(false);

  const hasLabel = !!label.length;

  function onMountCSV(event: MouseEvent<HTMLButtonElement>) {
    if (!onClick) return;

    setIsMOuntCSVToDownload(true);

    onClick(event);

    setTimeout(() => {
      setIsMOuntCSVToDownload(false);
    }, 3000);
  }

  return (
    <Wrapper type="button" onClick={onMountCSV} {...props}>
      {isMountCSVToDownload ? (
        "Carregando..."
      ) : (
        <Fragment>
          {hasLabel ? label : "Desonhecido"}

          <Download size={16} />
        </Fragment>
      )}
    </Wrapper>
  );
}
