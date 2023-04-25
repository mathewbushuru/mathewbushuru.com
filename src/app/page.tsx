import { Fragment } from "react";
import Image from "next/image";

const showcaseItems = [
  {
    srcUrlIpad: "/mockups/ipad/soma_org_ipad.png",
    srcUrlIphone: "/mockups/iphone/soma_org_iphone.png",
    alt: "somaoffline.org",
  },
  {
    srcUrlIpad: "/mockups/ipad/google_results_ipad.png",
    srcUrlIphone: "/mockups/iphone/google_iphone.png",
    alt: "googly-lovat.vercel.app",
  },
  {
    srcUrlIpad: "/mockups/ipad/component_library_ipad.png",
    srcUrlIphone: "/mockups/iphone/component_library_iphone.png",
    alt: "matt-components.vercel.app",
  },
  {
    srcUrlIpad: "/mockups/ipad/prosearchx_ipad.png",
    srcUrlIphone: "/mockups/iphone/prosearchx_iphone.png",
    alt: "pro-search-x.vercel.app/",
  },
  {
    srcUrlIpad: "/mockups/ipad/somaoriginal_ipad.png",
    srcUrlIphone: "/mockups/iphone/somaoriginal_iphone.png",
    alt: "somaoffline.com",
  },
  {
    srcUrlIpad: "/mockups/ipad/unbeatable_tictactoe_ipad.png",
    srcUrlIphone: "/mockups/iphone/unbeatable_tictactoe_iphone.png",
    alt: "mathewbushuru.github.io/unbeatable-tictactoe/",
  }
];

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
              priority={index < 2}
            />
            <Image
              key={item.srcUrlIphone}
              src={item.srcUrlIphone}
              alt={item.alt}
              width={200}
              height={200 * 1.868}
              className="sm:mb-3"
              priority={index < 1}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
