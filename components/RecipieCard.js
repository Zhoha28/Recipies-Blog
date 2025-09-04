import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div className="card">
      <div className="featured">
        <Image src={"https:" + thumbnail.fields.file.url}  width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height}  alt={title || "Recipe image"} />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <Link href={`/recipes/${slug}`} className="btn">
          Cook this
        </Link>
      </div>
    </div>
  );
}
