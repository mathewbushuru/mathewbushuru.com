### My Personal Website

`Live` : [mathewbushuru.com](https://mathewbushuru.com/)

`Dev` : [mathewbushuru.vercel.app](https://mathewbushuru.vercel.app/)

This is a redesign of my personal website to replace my old portfolio  (`mathewbushuru.me`).

##### Technologies Used

- [`NextJS` ](https://nextjs.org/) : Front-end Framework
- [`TypeScript`](https://www.typescriptlang.org/) : Language
- [`TailwindCSS`](https://tailwindcss.com/) : Styling

I am using NextJS' Static Site Generation for this. At build time, Next takes all my React components and generates a HTML file per route which avoids loading unnecessary Javascript on the client side. As a result, the bundle size is  reduced significantly and the page loads faster.

One issue that comes up when using Static Site Generation with Next is `next/image` no longer optimizes images. This is because instead of optimizing images at build time, NextJS optimizes images on demand as users request them. The reasoning given for this is to prevent long build times if the project has many images. However image optimization is necessary for this project because the design uses a lot of images. To solve this, I compressed and optimized all the images that I am using myself.

The reason I chose SSG for this project was due to the content of the site being static and to avoid vendor lock-in. I have tested that the site works on GitHub pages (the deploy script for this is at `./github/workflows/ghpages_deploy.yml`).