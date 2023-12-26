import Link from "next/link";
// import Meals from "<app>/app/features/meals/meals";
import { getMeals } from "<app>/app/services/mealsApi";
import Meals from "<app>/app/features/meals/meals";
import { Suspense } from "react";
import Spinner from "<app>/app/ui/Spinner";
async function Meal ()
{
  const meals = await getMeals();  
 return  <Meals meals={meals} />;
} 
 
 export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};
 function MealsPage ()
{
 
    
  return (
    <>
      <header className="text-left mt-[5rem] ml-[6.5rem] text-orange-100 ">
        <h1 className="text-5xl font-bold">
          Delicious meals, created <span className="text-gradient">by you</span>
        </h1>
        <p className="text-orange-100 mt-4  capitalize">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="mt-4">
          <Link
            href="/pages/meals/share"
            className="bg-gradient-to-r from-orange-700 to-yellow-700 hover:from-orange-500 hover:to-yellow-500 text-orange-200 font-bold py-2 px-4 rounded-lg"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="container mx-auto mt-16">
        <Suspense fallback={<Spinner/>} >
      <Meal/>
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
