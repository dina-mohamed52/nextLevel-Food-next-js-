

import Link from "next/link";
import "./globals.css"
import ImageSlideshow from "./ui/slideShow";

export default function Home ()
{
  
  return (
    <>
      <header className="flex gap-[10rem]">
        <div className="flex-shrink-0">
          <ImageSlideshow />
        </div>
        <div className="ml-8">
          <div className="mt-[4rem] text-3xl font-semibold text-orange-200 uppercase">
            <h1 className="text-gradient tracking-wide whitespace-pre-line">
              NextLevel Food for
              <br className="md:hidden lg:inline xl:inline" /> NextLevel Foodies
            </h1>
          </div>
          <div>
            <p className="text-xl text-orange-200 my-6">
              Taste & share food from all over the world.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/pages/community"
                className="capitalize text-xl text-orange-200 font-semibold hover:text-yellow-500"
              >
                Join the Community
              </Link>
              <Link
                href="/pages/meals"
                className="bg-gradient-to-r from-orange-700 to-yellow-700 hover:from-orange-500 hover:to-yellow-500 text-orange-200 font-bold py-2 px-4 rounded-lg"
              >
                Explore Meals
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-[18rem] py-[10rem] text-white">
        <section className=" mt-[-10rem] text-center">
          <div className="mb-4 content-center ">
            <h2 className="text-3xl font-bold mb-2">How it works</h2>
            <p className="text-lg w-[35rem] content-center my-8 ml-[23rem] ">
              NextLevel Food is a platform for foodies to share their favorite
              recipes with the world. It is a place to discover new dishes, and
              to connect with other food lovers.
            </p>
          </div>
          <div>
            <p className="text-lg  w-[35rem] content-center my-8 ml-[23rem]">
              NextLevel Food is a place to discover new dishes, and to connect
              with other food lovers.
            </p>
          </div>
        </section>

        <section className="text-center mt-[12rem] ">
          <h2 className="text-3xl font-bold mb-4">Why NextLevel Food?</h2>
          <p className="text-lg  w-[35rem] content-center my-8 ml-[23rem]">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It is a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-lg  w-[35rem] content-center my-8 ml-[23rem]">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
