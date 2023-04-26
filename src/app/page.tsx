import { Fragment } from "react";
import Image from "next/image";

import { showcaseItems } from "./showcaseData";

export default function HomePage() {
  return (
    <div className="scrollbar-hide flex h-full flex-col items-end overflow-y-auto overflow-x-hidden pt-60 sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden">
      {showcaseItems.map((item, index) => {
        return (
          <Fragment key={item.alt}>
            <Image
              key={item.srcUrlIpad}
              src={item.srcUrlIpad}
              alt={item.alt}
              width={700}
              height={700 / 1.348}
              className="hidden sm:inline-block"
              // priority={index < 2}
              priority
            />
            <Image
              key={item.srcUrlIphone}
              src={item.srcUrlIphone}
              alt={item.alt}
              width={200}
              height={200 * 1.868}
              className="sm:mb-3"
              // priority={index < 1}
              priority
            />
          </Fragment>
        );
      })}
    </div>
  );
}
