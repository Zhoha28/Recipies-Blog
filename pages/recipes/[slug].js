import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";

// Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "recipie" });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true, // fallback when the page is not generated at build time
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipie",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      recipe: items[0],
    },
    revalidate: 1
  };
}

export default function RecipeDetails({ recipe }) {

  if (!recipe) return <Skeleton />; // Show skeleton while loading
  const { title, cookingTime, ingredients, method, featuredImage } = recipe.fields;

  return (
    <div className="recipe-detail">
      <h2>{title}</h2>

      {featuredImage?.fields?.file?.url && (
        <Image className="featured-benner"
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt={title}
        />
      )}

      <p>Takes about {cookingTime} mins to cook</p>

      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>

      <h4>Method</h4>
      <div className="method">{documentToReactComponents(method)}</div>
    </div>
  );
}