import Button from "<app>/app/ui/Button";
import Image from "next/image";

function MealsItem({ image, title, creator, slug, summary }) {
  return (
    <div className="   rounded-lg border border-spacing-2 border-orange-500  overflow-hidden shadow-md mb-8">
      <div className="relative h-64 overflow-hidden ">
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      <div className="p-4  text-orange-100 ">
        <h2 className="text-xl font-semibold text-orange-100 ">{title}</h2>
        <p>by {creator}</p>
        <p className=" mt-4 ">{summary}</p>
        <div className="mt-4">
          <Button href={`/pages/meals/${slug}`}>View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default MealsItem;
