export const metadata = {
  title: "Mathew Bushuru | Info",
};

export default function MoreAboutMePage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        More about me
      </h1>

      <div className="mb-4 lg:mb-6 max-w-2xl">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Education</h3>
        <p className="font-semibold leading-7">
          University of British Columbia
        </p>
        <p className="leading-7 text-muted-foreground">
          Bachelor of Applied Science, Electrical Engineering
        </p>
        <p className="text-sm leading-7 text-muted-foreground">
          Vancouver, Canada
        </p>
        <p className="text-sm leading-7 text-muted-foreground">May 2023</p>
      </div>

      <div className="mb-4 lg:mb-6 max-w-2xl">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Awards</h3>
        {awardItems.map((award, index) => (
          <div className="mb-3" key={index}>
            <p className="font-semibold leading-6">{award.title}</p>
            <p className="leading-6 text-muted-foreground">{award.issuer}</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {award.desc}
            </p>
            <a
              href={award.awardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm hover:underline hover:underline-offset-4"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>

      <div className="mb-4 lg:mb-6">
        <h3 className="mb-2 text-lg font-semibold sm:text-2xl">Features</h3>
        <ul className="space-y-1">
          <li>
            <a
              href="https://mastercardfdn.org/next-generation-african-leaders-announced-as-winners-of-the-resolution-social-venture-challenge-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Next-Generation African Leaders Announced as Winners of the
              Resolution Social Venture Challenge
            </a>
          </li>
          <hr className="-mx-2 sm:hidden" />
          <li>
            <a
              href="https://apsc.ubc.ca/news/2020/ubc-engineering-students-win-local-worlds-challenge-challenge-competition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              UBC Engineering students win local World's Challenge Challenge
              competition
            </a>
          </li>
          <hr className="-mx-2 sm:hidden" />

          <li>
            <a
              href="https://students.ubc.ca/sites/students.ubc.ca/files/MURC%202019%20Program%20Guide%20Mar%2014_compressed%20%281%29.pdf#page=141"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Multidisciplinary Undergraduate Research Conference - Model
              predictive control system for autonomous sailboat in varying
              weather conditions (Page 141)
            </a>
          </li>
          <hr className="-mx-2 sm:hidden" />
          <li>
            <a
              href="https://bizwatchkenya.com/featured/providing-free-offline-educational-tools-to-high-school-students-in-kenya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Providing free offline educational tools to high school students
              in Kenya
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const awardItems = [
  {
    title: "MasterCard Foundation Full Tuition Scholarship",
    issuer: "University of British Columbia, MasterCard Foundation",
    awardUrl: "https://mcfscholars.ubc.ca/",
    desc: "For academic achievement, leadership skills, and involvement in  community service.",
  },
  {
    title: "2021 International World's Challenge Challenge, Finalist",
    issuer: "Western University",
    awardUrl: "https://international.uwo.ca/challenge/global_final/",
    desc: "This competition brings together students from a wide range of institutions, cultures and continents to form a strong international network and create even greater potential solutions to significant global issues.",
  },
  {
    title: "2021 Mastercard Foundation's  Social Entrepreneurship Fund ",
    issuer: "MasterCard Foundation",
    awardUrl:
      "https://mastercardfdn.org/mastercard-foundation-announces-new-fund-to-seed-young-african-leaders-social-ventures/",
    desc: "This fund enables young changemakers to seed and kick-start promising social ventures and community projects, creating economic opportunities for themselves and others.",
  },
  {
    title: "2020 UBC World's Challenge Challenge, 1st place ",
    issuer: "University of British Columbia",
    awardUrl:
      "https://apsc.ubc.ca/news/2020/ubc-engineering-students-win-local-worlds-challenge-challenge-competition",
    desc: "This competition seeks to engage UBC students on international issues and how they can play a part in sparking social change.",
  },
  {
    title: "2019 Global Social Venture Challenge, Winner",
    issuer: "The Resolution Fellowship",
    awardUrl: "https://resolutionproject.org/fellows/mathew-bushuru/",
    desc: "This multi-step competition held in Kigali inspired undergraduate students to propose impactful, socially-responsible projects addressing pressing social issues around the world.",
  },
];
