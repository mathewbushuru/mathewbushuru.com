export const projectsData = [
  {
    name: "Soma Rewrite V2 ",
    imgSrc: "/mockups/ipad/somaoffline_org_ipad.png",
    dates: "07 / 2023 - Present",
    desc: "Redesigning Soma's website using TypeScript. It also includes a new server page for downloading our offline content.",
    techList: ["TypeScript", "ReactJS", "TailwindCSS"],
    demoUrl: "https://somaoffline.org/",
    codeUrl: null,
    why: {
      what: "A replacement for Soma's old landing page which was built using HTML/CSS/VanillaJS and styled with Bootstrap. This involved creating a new design in Figma and developing it as a React application. The styling is done using Tailwind. ",
      why: "It had been a while since we made any changes to the landing page so this was necessary to accurately showcase our path going forward.",
      lesson: "",
    },
  },
  {
    name: "Todoist - React, Express, React Native ",
    imgSrc: "/mockups/ipad/todoist_ipad.png",
    dates: "06 / 2023 - Present",
    desc: "A Todoist clone with code implementation for the backend server, frontend web app and iOS/Android mobile apps",
    techList: ["ReactJS", "TailwindCSS", "Express", "React Native"],
    demoUrl: "https://todoist.mathewbushuru.com",
    codeUrl: "https://github.com/mathewbushuru/todoist-express-react",
    why: {
      what: "An end-to-end Todoist clone from the backend server using Express, the frontend web app using React/TypeScript and the iOS/Android mobile apps using react native. The mobile app code is in a different repo (todoist-react-native).",
      why: "I wanted to create a complete working example of a production-ready full-stack application. To prioritize the functionality over design work, I replicated Todoist's UI instead of creating my own custom design.",
      lesson: "",
    },
  },
  {
    name: "UI / Component library ",
    imgSrc: "/mockups/ipad/component_library_ipad.png",
    dates: "04 / 2023 - 05 / 2023",
    desc: "A collection of prebuilt UI elements that I usually need in new projects. For example navbars, footers, cards, etc.",
    techList: ["TypeScript", "NextJS", "TailwindCSS"],
    demoUrl: "https://matt-components.vercel.app/",
    codeUrl: "https://github.com/mathewbushuru/component-library",
    why: {
      what: "A collection of React components and UI elements that I use often. Most of them are styled using Tailwind but a few use ChakraUI. They include navbars, footers, layouts, forms, hero pages, toggle buttons, cards, etc.",
      why: "I started off this project as a way to practise styling using TailwindCSS and to improve my front-end skills. It has grown to be a collection of features that I bring to new projects so that I can get them done faster.",
      lesson:
        "This project enabled me to learn the CSS-in-JS paradigm, mobile-first design, designing for dark/light mode, and how to use TailwindCSS in different scenarios. ",
    },
  },
  {
    name: "React Starter Kit ",
    imgSrc: "/mockups/ipad/reactstarter_ipad.png",
    dates: "04 / 2023 - 05 / 23",
    desc: "My starting point for building scalable react applications ",
    techList: ["TypeScript", "ReactJS", "TailwindCSS", "Vite"],
    demoUrl: "https://react-starter-kit.onrender.com/",
    codeUrl: "https://github.com/mathewbushuru/react-starter-kit",
    why: {
      what: "This is a React app  template using Vite and TypeScript. It is a modified version of alan2207/bulletproof-react repo on GitHub that has been personalized for my specific needs. It uses TailwindCSS and unstyled headless component primitives from RadixUI. The included components in the repo are modified versions from the shadcn/ui repo on GitHub.",
      why: "For almost all my React projects, I usually end up setting up the same libraries and tools e.g. React Router. This project attempts to wire up these different tools and to define the code structure that will enable the project to scale effectively. ",
      lesson: "",
    },
  },
  {
    name: "Blue Horizon Weather App",
    imgSrc: "/mockups/ipad/bluehorizon_ipad.png",
    dates: "04 / 2023 - 05 / 23",
    desc: "A weather forecast app that shows Vancouver's realtime weather forecast by default but also allows users to search the weather of specific cities.",
    techList: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://mathewbushuru.github.io/blue-horizon/",
    codeUrl: "https://github.com/mathewbushuru/blue-horizon",
    why: null
  },
  {
    name: "Soma Rewrite V1 ",
    imgSrc: "/mockups/ipad/soma_org_ipad.png",
    dates: "04 / 2023",
    desc: "A complete redesign of Soma's landing page.",
    techList: ["JavaScript", "ReactJS", "CSS"],
    demoUrl: "https://somav1.vercel.app/",
    codeUrl: null,
    why: {
      what: "A replacement for Soma's old landing page (somaoffline.com) which was built using HTML/CSS/VanillaJS and styled with Bootstrap. This involved creating a new design in Figma and developing it as a React application. The styling is done using CSS Modules. ",
      why: "It had been a while since we made any changes to the landing page so this was necessary to accurately showcase our path going forward.",
      lesson:
        "I learnt how to use the various services on Amazon Web Services, in particular AWS Amplify. I also learnt how to design a website from scratch in Figma.",
    },
  },
  {
    name: "Chatnet ",
    imgSrc: "/mockups/ipad/chatnet_ipad.png",
    dates: "04 / 2023 ",
    desc: "A real time chat application built with Next 13's app directory /react server components",
    techList: ["TypeScript", "NextJS", "TailwindCSS", "Redis"],
    demoUrl: "https://chatnet.vercel.app/",
    codeUrl: "https://github.com/mathewbushuru/chatnet",
    why: {
      what: "This is an application to enable realtime chat among friends. It uses Redis so that  the sending and receiving messages is almost instant. It uses Firebase for authentication and is styled using Tailwind.",
      why: "Although NextJS 13's AppDir is still in beta, I decided to learn how to use it since it will eventually replace the pages directory. Creating a complete project using it seemed like a good way to understand it.",
      lesson:
        "I learnt how to use React Server Components and how to structure an application that uses them. It was also my first time using Redis as a database and integrating it into a React/Next application was a good learning experience.",
    },
  },
  {
    name: "Portfolio ",
    imgSrc: "/mockups/ipad/resume_ipad.png",
    dates: "04 / 2023 ",
    desc: "A redesign of my portfolio using NextJS for Static Site Generation (SSG).",
    techList: ["TypeScript", "NextJS", "TailwindCSS"],
    demoUrl: "https://mathewbushuru.com/",
    codeUrl: "https://github.com/mathewbushuru/mathewbushuru.com",
    why: null,
  },
  {
    name: "Custom Webpack SPA ",
    imgSrc: "/mockups/ipad/coruscant_ipad.png",
    dates: "04 / 2023",
    desc: "A React/Vue-like vanilla JS project using a custom webpack config and basic page/tab switching via a custom router",
    techList: ["JavaScript", "CSS", "Webpack"],
    demoUrl: "https://mathewbushuru.github.io/webpack-restaurant-SPA/",
    codeUrl: "https://github.com/mathewbushuru/webpack-restaurant-SPA",
    why: {
      what: "This is a Single Page Application (SPA) that uses vanilla JavaScript to dynamically render the HTML and manipulate the DOM. To achieve this, it uses a custom webpack configuration to bundle all the JS,CSS, and image source files and inject it into a div in the starting HTML. It also uses a basic custom router to enable  switching between different tabs/pages without a page reload. The site is not mobile responsive since styling was not in the scope of this project. However, I plan to implement that some time in the future.",
      why: "I created this in order to learn how an SPA framework like React or Vue works under the hood.",
      lesson:
        "I learnt how to set up my own webpack project from scratch and to use the different loaders for different files types.I also got to learn how to create a parallax scrolling effect using images which looks really good.",
    },
  },
  {
    name: "Constraint Validation API",
    imgSrc: "/mockups/ipad/constraintapi_ipad.png",
    dates: "04 / 2023",
    desc: "A signup form that uses JavaScript's form constraint validation API to inform the user of the validation status that is more informative than default HTML 5 validation messages.",
    techList: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://mathewbushuru.github.io/form-constraint-validation-api/",
    codeUrl: "https://github.com/mathewbushuru/form-constraint-validation-api",
    why: null,
  },
  {
    name: "ProSearchX",
    imgSrc: "/mockups/ipad/prosearchx_ipad.png",
    dates: "03 / 2023 ",
    desc: "A  wrapper around Google Search with additional features to make it more effective and powerful.",
    techList: ["JavaScript", "ReactJS", "CSS"],
    demoUrl: "https://pro-search-x.vercel.app/",
    codeUrl: "https://github.com/mathewbushuru/ProSearchX",
    why: {
      what: "This is an extension of my Google Search clone project but with additional features and enhancements to make Google Search more effective and powerful. It is for power users and professionals who require an easier and faster way to unlock Google Search capabilities.",
      why: "I always end up modifying my  Google searches for a second search which I think after a while adds up to a lot of wasted time (although probably not as much as the time I spent on this project ). For example, adding stackoverflow to a programming question, or searching for an error in a version of a library released last month but getting results from years ago. This project attempts to solve this.",
      lesson:
        "This project ended up replacing google.com as the homepage in my browser and it is the first time I created something that I use every single day. Despite not being as complex as some projects I have attempted, I really enjoyed working on it and learnt a lot from the many problems I had to solve that users would not notice when using the site, but would lead to an awful experience if missing. An example for this is selecting to search all websites should the user unselect each individual site to search, ability to open results in new tab to enable a way to edit the search query, etc. I plan to come back to this project some time in the future when I have time.  ",
    },
  },
  {
    name: "Unbeatable TicTacToe",
    imgSrc: "/mockups/ipad/unbeatable_tictactoe_ipad.png",
    dates: "03 / 2023 ",
    desc: "A vanilla JS project utilizing the module pattern and the minmax algorithm to create an unbeatable TicTacToe bot.",
    techList: ["JavaScript", "CSS"],
    demoUrl: "https://mathewbushuru.github.io/unbeatable-tictactoe/",
    codeUrl: "https://github.com/mathewbushuru/unbeatable-tictactoe",
    why: null,
  },
  {
    name: "Simple Dashboard",
    imgSrc: "/mockups/ipad/dashboardgrid_ipad.png",
    dates: "03 / 2023 ",
    desc: "A simple dashboard built with CSS Grid for layout.",
    techList: ["CSS", "HTML"],
    demoUrl: "https://mathewbushuru.github.io/cssgrid-dashboard/",
    codeUrl: "https://github.com/mathewbushuru/cssgrid-dashboard",
    why: null,
  },
  {
    name: "Google Search Clone",
    imgSrc: "/mockups/ipad/google_ipad.png",
    dates: "02 / 2023 ",
    desc: "A clone of Google Search with real time search results using Custom Search Engine (CSE).",
    techList: ["JavaScript", "ReactJS", "CSS"],
    demoUrl: "https://googly-lovat.vercel.app/",
    codeUrl: "https://github.com/mathewbushuru/googly",
    why: null,
  },
  {
    name: "Simple Sign Up Form",
    imgSrc: "/mockups/ipad/seawall_ipad.png",
    dates: "02 / 2023 ",
    desc: "A simple sign up form.",
    techList: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://mathewbushuru.github.io/sign-up-form/",
    codeUrl: "https://github.com/mathewbushuru/sign-up-form",
    why: null,
  },
  {
    name: "Etch a sketch",
    imgSrc: "/mockups/ipad/etchsketch_ipad.png",
    dates: "12 / 2022 ",
    desc: "Something between a sketchpad and an Etch-a-Sketch using Javascript to manipulate the DOM",
    techList: ["JavaScript", "CSS"],
    demoUrl: "https://mathewbushuru.github.io/etch-a-sketch/",
    codeUrl: "https://github.com/mathewbushuru/etch-a-sketch",
    why: null,
  },
  {
    name: "Calculator",
    imgSrc: "/mockups/ipad/calc_ipad.png",
    dates: "12 / 2022 ",
    desc: "A simple calculator",
    techList: ["JavaScript", "CSS"],
    demoUrl: "https://mathewbushuru.github.io/hp-prime-web/",
    codeUrl: null,
    why: null,
  },
  {
    name: "Regex Form Validator",
    imgSrc: "/mockups/ipad/validation_ipad.png",
    dates: "11 / 2022 ",
    desc: "An app that uses Regex to validate input from the client-side.",
    techList: ["JavaScript", "CSS"],
    demoUrl: "https://mathewbushuru.github.io/regex-form-validation/",
    codeUrl: null,
    why: null,
  },
  {
    name: "Kanban Task App",
    imgSrc: "/mockups/ipad/drag_drop_ipad.png",
    dates: "11 / 2022 ",
    desc: "A Kanban Style drag and drop app built in preparation for implementating a similar feature in Labby (UBC Launchpad)",
    techList: ["JavaScript", "ReactJS", "Styled components"],
    demoUrl: "https://drag-and-drop-app.mathewbushuru.vercel.app/",
    codeUrl: "https://github.com/mathewbushuru/drag-and-drop-task-app",
    why: null,
  },
  {
    name: "Rock Paper Scissors",
    imgSrc: "/mockups/ipad/rockpaperscissors_ipad.png",
    dates: "11 / 2022 ",
    desc: "A rock-paper-scissors game.",
    techList: ["JavaScript", "CSS"],
    demoUrl: "https://mathewbushuru.github.io/rock-paper-scissors/",
    codeUrl: null,
    why: null,
  },
  {
    name: "Snake Game",
    imgSrc: "/mockups/ipad/snake_ipad.png",
    dates: "03 / 2022 ",
    desc: "The final project for my Operating Systems course at UBC.",
    techList: ["Python", "Tkinter"],
    demoUrl: null,
    codeUrl: "https://github.com/mathewbushuru/cpen333_mp",
    why: null,
  },
  {
    name: "Previous Portfolio",
    imgSrc: "/mockups/ipad/oldportfolio_ipad.png",
    dates: "02 / 2022 ",
    desc: "My dark-themed portfolio with a feature to open live project demos from a lightbox / modal within the app.",
    techList: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    demoUrl: "https://mathewbushuru.github.io/myresume/",
    codeUrl: null,
    why: null,
  },
  {
    name: "Metal Detector",
    imgSrc: "/mockups/ipad/magneticcoil_ipad.png",
    dates: "03 / 2021 ",
    desc: "A metal detector using inductance changes in a magnetic coil to detect nearby metals.",
    techList: ["C", "32-bit Microcontrollers"],
    demoUrl: "https://youtu.be/pajMGd9RIf4",
    codeUrl: "https://github.com/mathewbushuru/frequency-meter-metal-detector",
    why: null,
  },
  {
    name: "Liquid-level Detector",
    imgSrc: "/mockups/ipad/waterlevel_ipad.png",
    dates: "02 / 2021 ",
    desc: "A liquid/water level detector to aid visually impaired people to serve drinks.",
    techList: ["Assembly", "8-bit Microcontrollers"],
    demoUrl: "https://www.youtube.com/watch?v=4QwDmZlB6OQ",
    codeUrl: "https://github.com/mathewbushuru/capacitive-water-level-detector",
    why: null,
  },
  {
    name: "Soma",
    imgSrc: "/mockups/ipad/somaoriginal_ipad.png",
    dates: "03 / 2020 ",
    desc: "Soma's landing page.",
    techList: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    demoUrl: "https://www.somaoffline.com/",
    codeUrl: null,
    why: null,
  },
];
