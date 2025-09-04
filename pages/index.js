import { createClient } from "contentful";
import RecipieCard from "../components/RecipieCard";
import Head from "next/head";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipie" });

  return {
    props: {
      recipies: res.items,
    },
      revalidate: 1
  };
  
}


export default function Recipes({ recipies }) {
  return (
    <>
     <Head>
        <title>The Recipe Journal 🍴</title>
        <meta name="description" content="A modern recipes blog built with Next.js and Contentful. Browse delicious recipes with ingredients and cooking methods." />
        <meta name="keywords" content="recipes, cooking, food blog, next.js, contentful" />
        <meta property="og:title" content="The Recipe Journal 🍴" />
        <meta property="og:description" content="Discover new recipes, ingredients, and cooking inspiration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://recipies-blog.vercel.app/" />
        <meta property="og:image" content="/preview.jpg" />
      </Head>

    <div className="recipe-list">

      {recipies.map((recipe, i) => {
        const { title, slug, cookingTime, thumbnail } = recipe.fields;

        return (
          <div key={recipe.sys.id} className="recipe-card">

          <RecipieCard key={recipe.sys.id} recipe={recipe} priority={i === 0}/>
          </div>
        );
      })}
    </div>
    </>
  );
}