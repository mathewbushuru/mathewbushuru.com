export const allProjectItems = [
  {
    title: "Design System",
    ipadPhotoLink: "/mockups/ipad/component_library_ipad.png",
    iphonePhotoLink: "/mockups/iphone/component_library_iphone.png",
    descriptionSectionsArr: [
      "This is my personal design system based on Atomic Design by Brad Frost. This includes my theme and colour palette (used on this website), component primitives built on top of React Aria and RadixUI, and component composites which combine multiple primitives.",
      "I then use these component primitives and composites to build websites for fictional companies. An example is LearnCo which is inspired by Coursera.",
    ],
    techStackArr: ["TypeScript", "ReactJS", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/mathewbushuru/design-system",
    liveLinkArr: [
      {
        linkDesc: "current version",
        link: "https://design.mathewbushuru.com/",
      },
      {
        linkDesc: "initial version",
        link: "https://matt-components.vercel.app/",
      },
    ],
  },
  {
    title: "Todoist Monorepo",
    ipadPhotoLink: "/mockups/ipad/todoist_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "For this project, I aim to create a complete working template of a production-ready full-stack application. I chose a Todo app because it is easily modifiable to cover the majority of CRUD operations of other applications. To prioritize functionality of the app, I am replicating Todoist's user interface instead of creating my own custom design.",
      "It is hosted in monorepo that contains a static landing page/marketing site, a web app with authentication implemented, an iOS and Android app, and an backend API that communicates to a relational database.",
    ],
    techStackArr: [
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Vite",
      "React Native",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "TailwindCSS",
      "Redux",
      "RTK Query",
      "Vitest",
      "Supertest",
      "Turborepo",
    ],
    githubLink: "https://github.com/mathewbushuru/todoist-monorepo",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://todoist.mathewbushuru.com/",
      },
    ],
  },
  {
    title: "ProSearchX",
    ipadPhotoLink: "/mockups/ipad/prosearchx_ipad.png",
    iphonePhotoLink: "/mockups/iphone/prosearchx_iphone.png",
    descriptionSectionsArr: [
      "A wrapper around Google Search with additional features to make it more effective and powerful. It is for power users and professionals who require an easier and faster way to unlock Google Search capabilities.",
      "My motivation for this project is I usually end up modifying my Google searches for a second search, for example, adding StackOverflow to a  programming question, or searching for an error in a version of a library from last month but getting results from years ago. This  project attempts to solve this.",
    ],
    techStackArr: ["JavaScript", "ReactJS", "Vanilla CSS"],
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
    liveLinkArr: [{ linkDesc: null, link: "https://pro-search-x.vercel.app/" }],
  },
  {
    title: "Soma Landing Page Redesign",
    ipadPhotoLink: "/mockups/ipad/somaoffline_org_ipad.png",
    iphonePhotoLink: "/mockups/iphone/soma_org_iphone.png",
    descriptionSectionsArr: [
      "A redesign for Soma's landing page was well overdue.",
    ],
    techStackArr: ["TypeScript", "ReactJS", "Vite", "TailwindCSS", "Vitest"],
    githubLink: null,
    liveLinkArr: [
      { linkDesc: "new", link: "https://www.somaoffline.org/" },
      {
        linkDesc: "Launch version",
        link: "https://main--determined-roentgen-1de5f2.netlify.app/",
      },
      {
        linkDesc: "Entrepreneurship@UBC prototype",
        link: "https://somaprototype3.netlify.app/",
      },
      {
        linkDesc: "Hackathon prototype",
        link: "https://somaprototype2.netlify.app/",
      },
    ],
  },
  {
    title: "Google Search Clone",
    ipadPhotoLink: "/mockups/ipad/google_results_ipad.png",
    iphonePhotoLink: "/mockups/iphone/google_iphone.png",
    descriptionSectionsArr: [
      "A clone of Google Search with real time search results using Custom Search Engine (CSE). My motivation for this project was to create a scalable architecture of a React project that utilizes Bulletproof React.",
    ],
    techStackArr: ["JavaScript", "ReactJS", "Vanilla CSS"],
    githubLink: "https://github.com/mathewbushuru/googly",
    liveLinkArr: [{ linkDesc: null, link: "https://googly-lovat.vercel.app/" }],
  },
  {
    title: "Snake Xenzia Python game",
    ipadPhotoLink: "/mockups/ipad/snake_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "This was the final project of my system software engineering course at UBC. The first part of the project implements a graphical Snake game that utilizes Python's multithreading module to improve performance, and queue module to ensure safe multithreading.",
      "The second part of the project is a communication client and server that uses the User Datagram Protocol(UDP). The Pinger application simulates the variability of normal Round-Trip time by having the server randomly wait for some time between 5 to 50ms before responding. It also simulates packet loss by making the server randomly ignore a message or request with a probability of 10%.",
    ],
    techStackArr: ["Python", "Tkinter"],
    githubLink: "https://github.com/mathewbushuru/cpen333_mp",
    liveLinkArr: [],
  },
  {
    title: "Unbeatable TicTacToe",
    ipadPhotoLink: "/mockups/ipad/unbeatable_tictactoe_ipad.png",
    iphonePhotoLink: "/mockups/iphone/unbeatable_tictactoe_iphone.png",
    descriptionSectionsArr: [
      "A vanilla JavaScript project that allows a human to play against an unbeatable computer. The app is implemented to be a Single Page Application like a React/Vue app by dynamically manipulating the DOM using vanilla JavaScript methods. It uses the module pattern which allows us to use and create encapsulation in our code as if we were using a language like Java.",
      "To implement the unbeatable computer player, we use the minmax algorithm that always selects the move with the greatest payoff - minimize user's payoff and maximize bot's payoff in the next move.",
    ],
    techStackArr: ["Vanilla JavaScript", "Vanilla CSS"],
    githubLink: "https://github.com/mathewbushuru/unbeatable-tictactoe",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://mathewbushuru.github.io/unbeatable-tictactoe/",
      },
    ],
  },
  {
    title: "Custom Webpack Single Page Application",
    ipadPhotoLink: "/mockups/ipad/coruscant_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "This is a Single Page Application that uses vanilla JS to dynamically render the HTML and manipulate the DOM. It uses a custom webpack configuration to bundle all the JavaScript,CSS and image source files and inject it into a div in the starting HTML (The same way a framework like React works)",
      "It is a website of a fictional cafe in the Star Wars universe called The Coruscant Cafe. The main motivation for this project was to practise DOM manipulation and get a deeper understanding of how SPA frameworks like Vue or React work under the hood.",
    ],
    techStackArr: ["Vanilla JavaScript", "Vanilla CSS", "Webpack", "HTML"],
    githubLink: "https://github.com/mathewbushuru/webpack-restaurant-SPA",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://mathewbushuru.github.io/webpack-restaurant-SPA/",
      },
    ],
  },
  {
    title: "Metal Detector (PIC 32-bit MicroController)",
    ipadPhotoLink: "/mockups/ipad/magneticcoil_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A metal detector using inductance changes in a magnetic coil to detect nearby metals. The inductance changes are converted to frequency variations using a Colpitts oscillator implemented using NOT gates from discrete MOSFETs. The PIC32 MicroController board is programmed in C to give audible feedback on the kind of metal detected (video demo on GitHub).",
    ],
    techStackArr: ["C", "MicroControllers"],
    githubLink:
      "https://github.com/mathewbushuru/frequency-meter-metal-detector",
    liveLinkArr: [],
  },
  {
    title: "Drag and Drop Demo app",
    ipadPhotoLink: "/mockups/ipad/drag_drop_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A kanban-style drag and drop app built in preparation for implementating a similar feature in the Lab Management System (LMS) web app that I was working on at the time.",
    ],
    techStackArr: ["JavaScript", "ReactJS", "Styled Components"],
    githubLink: "https://github.com/mathewbushuru/drag-and-drop-task-app",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://drag-and-drop-app.mathewbushuru.vercel.app/",
      },
    ],
  },
  {
    title: "Sketch Application",
    ipadPhotoLink: "/mockups/ipad/etchsketch_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "An online sketchpad built to improve my understanding of JavaScript DOM manipulation methods. The app has 'change colour' and 'erase drawn sketches' functionality.",
    ],
    techStackArr: ["JavaScript", "Vanilla CSS", "HTML"],
    githubLink: "https://github.com/mathewbushuru/etch-a-sketch",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://mathewbushuru.github.io/etch-a-sketch/",
      },
    ],
  },
  {
    title:
      "Liquid Level Detector (EFM 8-bit  MicroController)",
    ipadPhotoLink: "/mockups/ipad/waterlevel_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A liquid/water level detector to aid visually impaired people to serve drinks. It provides audible output of how full the cup is in 10% increments and says 'cup is full' when it reaches 100%. The  liquid level is also displayed on a 72 MHz LCD display and the board is programmed in 8051 Assembly (see video demo and indepth explanation on GitHub).",
    ],
    techStackArr: ["Assembly", "MicroControllers"],
    githubLink:
      "https://github.com/mathewbushuru/capacitive-water-level-detector",
    liveLinkArr: [],
  },
  {
    title: "Blue Horizon Weather App",
    ipadPhotoLink: "/mockups/ipad/bluehorizon_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A weather forecast app that shows Vancouver's realtime weather forecast by default but also allows users to search the weather of specific cities. The main motivation for this project was to improve my understanding of asycnronous JavaScript and working with APIs.",
    ],
    techStackArr: ["Vanilla JavaScript", "Vanilla CSS", "HTML"],
    githubLink: "https://github.com/mathewbushuru/blue-horizon",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://mathewbushuru.github.io/blue-horizon/",
      },
    ],
  },
  {
    title: "Admin Dashboard",
    ipadPhotoLink: "/mockups/ipad/dashboardgrid_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A simple admin dashboard built with CSS Grid for layout. My motivation for this project was to learn more about CSS Grid. ",
    ],
    techStackArr: ["Vanilla CSS", "HTML"],
    githubLink: "https://github.com/mathewbushuru/cssgrid-dashboard",
    liveLinkArr: [
      {
        linkDesc: null,
        link: "https://mathewbushuru.github.io/etch-a-sketch/",
      },
    ],
  },
  {
    title: "Signup Form",
    ipadPhotoLink: "/mockups/ipad/seawall_ipad.png",
    iphonePhotoLink: null,
    descriptionSectionsArr: [
      "A simple sign up form built in order to understand how HTML forms and validation.",
    ],
    techStackArr: ["Vanilla JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/mathewbushuru/sign-up-form",
    liveLinkArr: [
      {
        linkDesc: "advanced",
        link: "https://mathewbushuru.github.io/form-constraint-validation-api/",
      },
      {
        linkDesc: "simple",
        link: "https://mathewbushuru.github.io/sign-up-form/",
      },
    ],
  },
];


export const awardItems = [
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
  {
    title: "MasterCard Foundation Full Tuition Scholarship",
    issuer: "University of British Columbia, MasterCard Foundation",
    awardUrl: "https://mcfscholars.ubc.ca/",
    desc: "For academic achievement, leadership skills, and involvement in  community service.",
  },
];

export const favoriteProjects = [
  {
    name: "Design System",
    description: "My personal design system",
    websiteLink: "https://design.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/design-system",
  },
  {
    name: "Todoist Monorepo",
    description:
      "A production ready application template built with React, React Native, TypeScript, Express and MySQL in a monorepo powered by Turborepo (Todoist clone).",
    websiteLink: "https://todoist.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/todoist-monorepo",
  },
  {
    name: "Algorithms",
    description:
      "Repository of computer science algorithms and data structures implemented in JavaScript, Java, C++, Python, TypeScript and C.",
    websiteLink: null,
    githubLink: "https://github.com/mathewbushuru/algorithms",
  },
  {
    name: "Soma Offline",
    description:
      "An EdTech company providing access to educational resources to communities with limited or no internet access",
    websiteLink: "https://www.somaoffline.com/",
    githubLink: "https://github.com/soma-offline",
  },
  {
    name: "ProSearchX",
    description:
      "A wrapper around Google Search with additional features to make it more effective and powerful.",
    websiteLink: "https://pro-search-x.vercel.app/",
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
  },
];

export const galleryPagePhotos = [
  {
    imageName: "ikb-night.jpg",
    size: 16,
  },
  {
    imageName: "moon.jpg",
    size: 80,
  },
  {
    imageName: "ubc-nest-lights.jpg",
    size: 140,
  },
  {
    imageName: "flower.jpg",
    size: 122,
  },
  {
    imageName: "ponderosa.JPG",
    size: 134,
  },
  {
    imageName: "east-van.jpg",
    size: 135,
  },
  {
    imageName: "winter-lamp.jpg",
    size: 172,
  },
  {
    imageName: "orchard-stairs.jpg",
    size: 186,
  },
  {
    imageName: "radisson-kigali.jpg",
    size: 188,
  },
  {
    imageName: "lion-gate-flower.jpg",
    size: 199,
  },
  {
    imageName: "jet.jpg",
    size: 205,
  },
  {
    imageName: "nairobi-westlands.JPG",
    size: 210,
  },
  {
    imageName: "ubc-alumni.JPG",
    size: 213,
  },
  {
    imageName: "clock-tv-room.JPG",
    size: 219,
  },
  {
    imageName: "street-lamp.jpg",
    size: 225,
  },
  {
    imageName: "celebration-of-light.JPG",
    size: 236,
  },
  {
    imageName: "vgh-window.JPG",
    size: 258,
  },
  {
    imageName: "ubc-beach.JPG",
    size: 263,
  },
  {
    imageName: "lion-gate.jpg",
    size: 120,
  },
  {
    imageName: "vpl.JPG",
    size: 271,
  },
  {
    imageName: "gastown.JPG",
    size: 284,
  },
  {
    imageName: "kigali.JPG",
    size: 293,
  },
  {
    imageName: "kits-beach.jpg",
    size: 291,
  },
  {
    imageName: "siwash-rock.JPG",
    size: 304,
  },
  {
    imageName: "basketball.JPG",
    size: 324,
  },
  {
    imageName: "ship-steering.JPG",
    size: 330,
  },
  {
    imageName: "downtown-van.JPG",
    size: 346,
  },
  {
    imageName: "ubc-chem.JPG",
    size: 354,
  },
  {
    imageName: "downtown-van2.jpg",
    size: 215,
  },
  {
    imageName: "ubc-macmillan.JPG",
    size: 361,
  },
  {
    imageName: "winter-tree.JPG",
    size: 387,
  },
  {
    imageName: "vancouver-letters-art.JPG",
    size: 388,
  },
  {
    imageName: "ocean-trees.JPG",
    size: 429,
  },
  {
    imageName: "home-trees.JPG",
    size: 444,
  },
  {
    imageName: "kicc.JPG",
    size: 479,
  },
  {
    imageName: "purple-flowers.jpg",
    size: 532,
  },
  {
    imageName: "africa-painting.JPG",
    size: 597,
  },
  {
    imageName: "flowers.JPG",
    size: 629,
  },
  {
    imageName: "ubc-residence.jpg",
    size: 678,
  },
  {
    imageName: "snowy-trees.JPG",
    size: 726,
  },
  {
    imageName: "home-farm.JPG",
    size: 730,
  },
  {
    imageName: "ikb.jpg",
    size: 794,
  },
  {
    imageName: "ubc-allard.jpg",
    size: 831,
  },
  {
    imageName: "bluey-ocean.JPG",
    size: 905,
  },
  {
    imageName: "bird-ocean.jpg",
    size: 942,
  },
  {
    imageName: "mountains.JPG",
    size: 943,
  },
  {
    imageName: "snow-trees.jpg",
    size: 1100,
  },
  {
    imageName: "nairobi-national-park.JPG",
    size: 110,
  },
  {
    imageName: "rehani.jpg",
    size: 240,
  },
];

export const galleryPagePhotoUrls = galleryPagePhotos.map(
  (photo) => `/shooting/${photo.imageName}`,
);

export const keysUsedInNavigation = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "KeyG",
  "KeyE",
  "KeyL",
  "KeyD",
  "KeyT",
];

export const readBooks = [
  {
    name: "C++20 For Programmers, An Objects Natural Approach",
    authors: "Paul Deitel and Harvey Deitel",
    finishDate: "Jan 2024",
    link: "https://deitel.com/c-plus-plus-20-for-programmers/",
  },
  {
    name: "Java Foundations: Introduction to Program Design and Data Structures, 5th Edition",
    authors: "John Lewis",
    finishDate: "Dec 2023",
    link: "https://www.pearson.com/en-us/subject-catalog/p/java-foundations-introduction-to-program-design-and-data-structures/P200000003413/9780137518401",
  },
  {
    name: "Java How To Program, Early Objects 11th edition",
    authors: "Paul Deitel and Harvey Deitel",
    finishDate: "Oct 2023",
    link: "https://deitel.com/java-how-to-program-11-e-early-objects-version/",
  },
  {
    name: "Python for Programmers with Introductory AI Case Studies",
    authors: "Paul Deitel and Harvey Deitel",
    finishDate: "Sep 2023",
    link: "https://deitel.com/python-for-programmers-book/",
  },
  {
    name: "Head First Java, 3rd Edition",
    authors: "Kathy Sierra, Bert Bates, and Trisha Gee",
    finishDate: "Sep 2023",
    link: "https://www.oreilly.com/library/view/head-first-java/9781492091646/",
  },
  {
    name: "How Not To Be Wrong - The Power Of Mathematical Thinking",
    authors: "Jordan Ellenberg",
    finishDate: "Jul 2023",
    link: "https://www.jordanellenberg.com/book/how-not-to-be-wrong/",
  },
  {
    name: "A Doll's House",
    authors: "Henrik Ibsen",
    finishDate: "Jul 2023",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House",
  },
  {
    name: "The Pearl",
    authors: "John Steinbeck",
    finishDate: "Jun 2023",
    link: "https://en.wikipedia.org/wiki/The_Pearl_(novella)",
  },
  {
    name: "The Caucasian Chalk Circle",
    authors: " Bertolt Brecht",
    finishDate: "Jun 2023",
    link: "https://en.wikipedia.org/wiki/The_Caucasian_Chalk_Circle",
  },
  {
    name: "React Key Concepts",
    authors: "Maximilian Schwarzmüller",
    finishDate: "Mar 2023",
    link: "https://www.packtpub.com/en-gb/product/react-key-concepts-9781803234502?=type=ebook#toc",
  },
  {
    name: "Web Development with Node and Express, 2nd Edition",
    authors: "Ethan Brown",
    finishDate: "Mar 2023",
    link: "https://www.oreilly.com/library/view/web-development-with/9781492053507/",
  },
  {
    name: "Learning React, 2nd Edition",
    authors: "Alex Banks, and Eve Porcello",
    finishDate: "Feb 2023",
    link: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/",
  },
  {
    name: "Frankenstein: The 1818 Text",
    authors: "Mary Shelley",
    finishDate: "Aug 2022",
    link: "https://www.penguinrandomhouse.com/books/557081/frankenstein-the-1818-text-by-mary-shelley-introduction-by-charlotte-gordon-editorial-apparatus-by-charles-e-robinson/",
  },
  {
    name: "Things Fall Apart",
    authors: "Chinua Achebe",
    finishDate: "Jul 2022",
    link: "https://www.penguinrandomhouse.ca/books/565351/things-fall-apart-by-chinua-achebe/9780385667838",
  },
  {
    name: "The Secret Agent",
    authors: "Joseph Conrad",
    finishDate: "Jun 2022",
    link: "https://en.wikipedia.org/wiki/The_Secret_Agent",
  },
  {
    name: "The Lean Startup",
    authors: "Eric Ries",
    finishDate: "Apr 2022",
    link: "https://theleanstartup.com/book",
  },
  {
    name: "A Fine Balance",
    authors: "Rohinton Mistry",
    finishDate: "Jan 2022",
    link: "https://www.penguinrandomhouse.ca/books/115368/a-fine-balance-by-rohinton-mistry/9780771060540",
  },
];
