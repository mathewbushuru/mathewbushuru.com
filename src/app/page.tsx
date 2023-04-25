import Image from "next/image";

export default function Home() {
  return (
    <div className="scrollbar-hide flex h-full items-end overflow-x-auto">
      <Image
        src="/mockups/ipad/soma_org_ipad.png"
        alt="somaoffline.org"
        width={700}
        height={700 / 1.348}
        className=""
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
        className=""
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
        className=""
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
