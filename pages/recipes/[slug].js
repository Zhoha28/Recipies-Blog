import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "recipie" });
  const paths = res.items
    .filter(i => i.fields?.slug)
    .map(i => ({ params: { slug: i.fields.slug } }));

  return { paths, fallback: false }; // or 'blocking' if you add content post-build
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipie",
    "fields.slug": params.slug,
    limit: 1,
  });

  // No item? 404.
  if (!items || items.length === 0) {
    return { notFound: true };
  }

  return { props: { recipe: items[0] } };
}

export default function RecipeDetails({ recipe }) {
  const { title, cookingTime, ingredients = [], method, featuredImage } =
    recipe.fields;

  const imgUrl = featuredImage?.fields?.file?.url
    ? `https:${featuredImage.fields.file.url}`
    : null;
  const imgW = featuredImage?.fields?.file?.details?.image?.width || 1200;
  const imgH = featuredImage?.fields?.file?.details?.image?.height || 630;

  return (
    <article className="recipe-detail">
      <h1>{title}</h1>

      {imgUrl ? (
        <Image src={imgUrl} width={imgW} height={imgH} alt={title} />
      ) : (
        <div className="image-placeholder" aria-hidden="true" />
      )}

      <p>Takes about {cookingTime} mins</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>

      <h3>Method</h3>
      <div className="method">
        {method ? documentToReactComponents(method) : "Method coming soon."}
      </div>
    </article>
  );
}