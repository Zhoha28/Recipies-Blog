import { createClient } from "contentful";
import RecipieCard from "../components/RecipieCard";

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
    <div className="recipe-list">

      {recipies.map((recipe) => {
        const { title, slug, cookingTime, thumbnail } = recipe.fields;

        return (
          <div key={recipe.sys.id} className="recipe-card">

          <RecipieCard key={recipe.sys.id} recipe={recipe}/>
          </div>
        );
      })}
    </div>
  );
}