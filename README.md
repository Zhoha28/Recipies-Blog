# Recipes Blog 🍴  

A **Recipes Blog** built with **Next.js** and **Contentful**.  
This project is designed to showcase modern web development practices with a headless CMS, dynamic content, and a clean UI for browsing and reading recipes.  

---

## 🚀 Getting Started  

To create a new project using this starter, run the following in your terminal:  

```bash
npx create-next-app recipies-blog -e iamshaunjp/next-contentful
```

or with the full GitHub link:  

```bash
npx create-next-app recipies-blog --example "https://github.com/iamshaunjp/next-contentful/tree/lesson-1-starter-site"
```

---

## 🛠️ Tech Stack  

- [Next.js](https://nextjs.org/) – React framework for production  
- [Contentful](https://www.contentful.com/) – Headless CMS for managing recipes  
- [React](https://reactjs.org/) – Component-based UI library  
- [Tailwind CSS](https://tailwindcss.com/) (optional, for styling if added later)  

---

## 📌 Features  

- Recipe listings pulled from Contentful  
- Individual recipe detail pages (ingredients & instructions)  
- Responsive design for mobile & desktop  
- SEO-friendly blog structure  
- Optional search & filter by recipe type  

---

## 🔑 Setup Instructions  

1. Clone the repo or create with `create-next-app` (see above).  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Create a `.env.local` file in the root and add your Contentful credentials:  
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```  
4. Run the development server:  
   ```bash
   npm run dev
   ```  
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

---

## 🚀 Deployment (Vercel)  

The easiest way to deploy this project is with [Vercel](https://vercel.com/):  

1. Push your project to GitHub.  
2. Go to [Vercel](https://vercel.com/), import the repo, and follow the prompts.  
3. Add the following environment variables in your Vercel project settings:  
   - `CONTENTFUL_SPACE_ID`  
   - `CONTENTFUL_ACCESS_TOKEN`  
4. Deploy 🚀  

Your blog will be live on a `vercel.app` domain (or a custom domain if you set one).  

---

## 📚 Resources  

- [Next.js Documentation](https://nextjs.org/docs)  
- [Contentful Docs](https://www.contentful.com/developers/docs/)  
