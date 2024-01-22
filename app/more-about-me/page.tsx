export const metadata = {
  title: "Mathew Bushuru | Info",
};

export default function MoreAboutMePage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        More about me
      </h1>

      <div className="mb-4 lg:mb-6">
        <h3 className="text-lg font-semibold sm:text-2xl ">Education</h3>
        <p className="leading-7">University of British Columbia</p>
        <p className="text-muted-foreground leading-7">Bachelor of Applied Science, Electrical Engineering</p>
        <p className="text-muted-foreground leading-7 text-sm">Vancouver, British Columbia</p>
        <p className="text-muted-foreground leading-7 text-sm">May 2023</p>
      </div>

    </div>
  );
}
