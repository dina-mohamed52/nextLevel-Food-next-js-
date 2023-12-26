import { getMeal } from "<app>/app/services/mealsApi";
import Image from "next/image";
import { notFound } from "next/navigation";
 
export async function generateMetadata ( { params } )

{ const slug = params.mealsSlug;
  const meal = getMeal( { slug } );
  
   if (!meal) {
     notFound();
   }
     return{
    title:meal.title,
    description: meal.summary,
  };
}


function deteilesMealPage({ params }) {
  const slug = params.mealsSlug;
  const meal = getMeal({ slug });
  if ( !meal )
  {
    notFound()
  }
  meal.instructions = meal.instructions.replace( /\n/g, "<br/>" );

  return (
    <>
      <header className="flex items-center justify-center gap-8 p-8">
        <div className="mr-8">
          <Image
            src={meal.image}
            width={430}
            height={170}
            className="rounded-xl ml-[10rem]"
          />
        </div>
        <div className="mb-[11rem]" >
          <h1 className="text-[2.5rem] text-orange-100 uppercase font-bold">
            {meal.title}
          </h1>
          <p>
            <a
              className="text-orange-100  capitalize"
              href={`mailto:${"EMAIL"}`}
            >
              by <span className="text-gradient hover:text-orange-400 ">{meal.creator}</span>
            </a>
          </p>
          <p className="text-gray-300 mt-4 text-lg">{meal.summary}</p>
        </div>
      </header>
      <main className="max-w-3xl text-orange-100 mb-8 pt-2 mx-auto rounded-xl p-8 bg">
        <p
          
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default deteilesMealPage;
