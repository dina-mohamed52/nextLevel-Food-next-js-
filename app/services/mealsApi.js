import  sql  from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

const db = sql( 'meals.db' );
export async function getMeals ()
{
    await new Promise( ( resolve ) => setTimeout( resolve, 2000 ) )
   
    return db.prepare('SELECT * FROM MEALS').all()
}
export function getMeal ({slug})
{
    return db.prepare('SELECT * FROM MEALS WHERE slug= ?').get(slug)
}

export async function addMeal (meal)
{
    meal.slug = slugify( meal.title, { lower: true } ) //creating slud=id
    meal.instructions = xss( meal.instructions ); //protaction from xss varnability
    const extension = meal.image.name.split('.').pop()
    const fileName = `${ meal.slug }.${ extension }`

    //create sterem for local saving
    const stream = fs.createWriteStream( `public/images/${ fileName }` );
    //turn the image data to low level
  const bufferedImage = await meal.image.arrayBuffer(); 

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });
    meal.image = `/images/${ fileName }`;
    //upload on db
    db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);

}