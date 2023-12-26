"use server";

import { redirect } from "next/navigation";
import { addMeal } from "./mealsApi";
import { revalidatePath } from "next/cache";
export async function SubmitAction ( prevState,formData )
{
  
  function isValidText (text)
  { //trim remove white space
    return !text || text.trim() === '';
  }
 
    // Extract form data and create a meal object
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
//server side validation
    if ( isValidText( meal.title ) || isValidText( meal.summary ) ||
      isValidText( meal.instructions ) ||
      isValidText( meal.creator ) || isValidText( meal.creator_email )
      || !meal.creator_email.includes( '@' ) || !meal.image || meal.image.size === 0
    )
      return {message:'Invalid input'}
    // Call the addMeal function asynchronously
    await addMeal(meal);
     revalidatePath('/pages/meals')
    // Redirect after successful submission
    redirect("/pages/meals");
  
}
