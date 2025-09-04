import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import Head from "next/head";

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
    fallback: true,
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
    revalidate: 1,
  };
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;

  const { title, cookingTime, ingredients, method, featuredImage } =
    recipe.fields;

  return (
    <>
      <Head>
        <title>{title} | The Recipe Journal</title>
        <meta
          name="description"
          content={`Learn how to cook ${title} step by step.`}
        />
        <meta property="og:title" content={`${title} | The Recipe Journal`} />
        <meta
          property="og:description"
          content={"A tasty recipe from The Recipe Journal."}
        />
        {featuredImage?.fields?.file?.url && (
          <meta
            property="og:image"
            content={`https:${featuredImage.fields.file.url}`}
          />
        )}
      </Head>

      <div className="recipe-detail">
        <h2>{title}</h2>

{featuredImage?.fields?.file?.url && (
  <div className="recipe-banner">
    <Image
      src={`https:${featuredImage.fields.file.url}`}
      alt={title || "Recipe image"}
      fill
      priority
      sizes="(max-width: 1200px) 100vw, 1200px" 
    />
  </div>
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

      <style jsx>{`
        .recipe-banner {
          position: relative;
          width: 100%;
          height: 400px; /* max height */
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
        }

        .recipe-banner :global(img) {
          object-fit: cover;
        }
      `}</style>
    </>
  );
}