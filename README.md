### My Personal Website

`Live` : [mathewbushuru.com](https://mathewbushuru.com/)
`Dev` : [mathewbushuru.vercel.app](https://mathewbushuru.vercel.app/)

This is a redesign of my personal website to replace my old portfolio  (`mathewbushuru.me`).

##### Technologies Used

- [`NextJS` ](https://nextjs.org/) : Front-end Framework
- [`TypeScript`](https://www.typescriptlang.org/) : Language
- [`TailwindCSS`](https://tailwindcss.com/) : Styling

I am using NextJS' Static Site Generation for this. At build time, Next takes all my React components and generates a HTML file per route which avoids loading unnecessary Javascript on the client side. As a result, the bundle size is  reduced significantly and the page loads faster.

However, one disadvantage of using static site generation in NextJS is it does not support the built-in image  optimization that comes with `next/image`. To solve this I used the [`next-optimized-images`](https://github.com/cyrilwanner/next-optimized-images) NextJS plugin to do custom image optimization during build time. This is important because my new design uses a lot of images.

The reason I chose SSG for this project was due to the content of the site being static and to avoid vendor lock-in. I have tested that the site works on GitHub pages (the deploy script for this is at `./github/workflows/ghpages_deploy.yml`).