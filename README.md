This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Project Documentation

# Build Tech
1. React
2. TypeScript - makes the project robust
3. NextJS 13.2 
    1. Improved static site generation (SSG) performance: Next.js 13 beta introduced a new feature called Incremental Static Regeneration (ISR), which allows pages to be statically generated and then updated in the background when new data becomes available. This can result in faster SSG performance and improved user experience.
    2. <Image /> - Built-in support for image optimization: Next.js 13 beta includes built-in support for image optimization, which can help improve the performance of image-heavy websites.
    3. Improved developer experience: Next.js 13 beta includes several improvements to the developer experience, such as improved error messages and better integration with popular IDEs.
4. DallE-2 - Powering image functionality
5. ChatGPT - to generate suggestions
6. Microsoft Azure - Azure functions and storage
7. TailwindCSS - to create beautiful styles and make the website responsive: using mobile first styling

# About Project

This project builds an application with OpenAI's ChatGPT-3 and DALL-E 2 models. The app is built with Next.js, Tailwind CSS, and Azure Functions. The video covers the entire development process from setting up the development environment to deploying the app.

The video starts with an overview of the completed app and the free code available for download. Then, the video covers the technologies used to build the app, including Next.js, Tailwind CSS, and Azure Functions.

The video then dives into the development process, starting with setting up the development environment and building the layout of the app. The video covers building the header component, left and right sides of the header, and the prompt input component.

The video then covers setting up the OpenAI API keys and creating an API endpoint to communicate with the OpenAI models. The video also covers implementing useSWR and Microsoft Azure Functions, live debugging, and implementing Microsoft Azure Blob Storage.

The video then covers implementing the chat GPT prompt suggestion functionality, setting up the rest of the API endpoints, and implementing the DALL-E 2 generate image functionality. The video covers setting up a SAS token with Microsoft Azure, implementing the generate image functionality, and building the images component.

The video then covers building the prompt input component, creating the client provider component, and implementing the React Hot Toast library for notifications. The video then covers deploying the Azure Functions and deploying the app to Vercel.

The video concludes with a final demo of the app and a summary of the build process.





