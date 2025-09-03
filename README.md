# The Recipe Journal 🍴  

A modern **Recipe Blog** built with **Next.js** and **Contentful**.  
This project showcases how to integrate a headless CMS with a Next.js frontend, featuring dynamic recipe pages, optimized images, and a clean responsive UI.  

---

## 🚀 Getting Started  

### 1. Clone the repository
```bash
git clone https://github.com/Zhoha28/Recipies-Blog.git
cd Recipies-Blog
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env.local` file in the root and add your Contentful credentials:  

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_KEY=your_access_key
```

### 4. Run the development server
```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser 🚀  

---

## 🛠️ Tech Stack  

- [Next.js](https://nextjs.org/) – React framework with static & server rendering  
- [Contentful](https://www.contentful.com/) – Headless CMS for content management  
- [React](https://reactjs.org/) – Component-based UI library  
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) – Optimized recipe thumbnails & featured images  
- [Google Fonts](https://fonts.google.com/) – Playfair Display + Inter for typography  

---

## 📌 Features  

- 📖 **Recipe Listing Page** – fetches recipes dynamically from Contentful  
- 🖼 **Recipe Cards** – consistent grid layout with images, cooking time, and links  
- 🍳 **Dynamic Recipe Detail Pages** – generated via `[slug].js`, showing:  
  - Title & Featured Image  
  - Cooking Time  
  - Ingredients (list)  
  - Method (rendered from Contentful Rich Text)  
- 📱 **Responsive Design** – mobile-first layout with modern styling  
- ⚡ **Optimized Images** – Contentful images rendered through Next.js `<Image />`  
- 🎨 **Modern UI** – clean fonts, colors, and consistent card heights  

---

## 🚀 Deployment (Vercel)  

The easiest way to deploy this project is with [Vercel](https://vercel.com/):  

1. Push this repo to GitHub.  
2. Import it into Vercel and set up environment variables:  
   - `CONTENTFUL_SPACE_ID`  
   - `CONTENTFUL_ACCESS_KEY`  
3. Deploy 🚀  

Your blog will be live on a `vercel.app` domain (or a custom domain if you set one).  

---

## 📚 Resources  

- [Next.js Documentation](https://nextjs.org/docs)  
- [Contentful Docs](https://www.contentful.com/developers/docs/)  
- [Vercel Deployment Guide](https://vercel.com/docs)  

---
