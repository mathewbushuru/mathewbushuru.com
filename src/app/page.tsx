import Image from "next/image";

export default function Home() {
  return (
    <div className="scrollbar-hide flex h-full items-end overflow-x-auto">
      <img
        src="/mockups/ipad/soma_org_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className=""
      />
      <img
        src="/mockups/iphone/soma_org_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
      />
      <img
        src="/mockups/ipad/google_results_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className=""
      />
      <img
        src="/mockups/iphone/google_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
      />
      <img
        src="/mockups/ipad/google_results_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className=""
      />
      <img
        src="/mockups/iphone/google_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
      />
    </div>
  );
}
