import Image from "next/image";

export default function Home() {
  return (
    <div className="scrollbar-hide flex h-full flex-col items-end overflow-y-auto overflow-x-hidden sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden pt-60">
      <Image
        src="/mockups/ipad/soma_org_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className="hidden sm:inline-block"
        priority
      />
      <Image
        src="/mockups/iphone/soma_org_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
        priority
      />
      <Image
        src="/mockups/ipad/google_results_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className="hidden sm:inline-block"
        priority
      />
      <Image
        src="/mockups/iphone/google_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
      />
      <Image
        src="/mockups/ipad/google_results_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className="hidden sm:inline-block"
      />
      <Image
        src="/mockups/iphone/google_iphone.png"
        alt="somaoffline.org"
        width={200}
        height={200 * 1.868}
        className="sm:mb-3"
      />
    </div>
  );
}
