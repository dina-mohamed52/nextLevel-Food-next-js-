// import MealsItem from "./MealsItem";

import MealsItem from "./mealsItem";

function Meals({ meals }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {meals.map((meal) => (
        <li key={meal.id} className="mb-8">
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default Meals;
