import { recipe } from "../public/assets/recipe";
import { Card, CardContent, CardHeader } from "./components/ui/card";

export default function App() {
  const fontRecipe = "font-['Outfit'] font-[300] text-sm";
  const titleRecipe = "font-['Young_Serif'] my-3 text-2xl text-orange-800";
  return (
    <main className="mx-auto container mt-12 mb-12">
      <Card className="max-w-lg mx-auto bg-white border-none shadow-none">
        <CardHeader>
          <img
            src="https://zhqpheunskiuodymniyz.supabase.co/storage/v1/object/public/profiles/admin/image-omelette.jpeg"
            className="rounded-xl mb-3"
          />
          <h1
            className={`font-['Young_Serif'] my-3 text-2xl  text-3xl my-8 text-black`}
          >
            {recipe.title}
          </h1>
          <p className={fontRecipe}>{recipe.description}</p>
        </CardHeader>

        <CardContent className="bg-pink-100 mx-6 flex flex-col item-center pt-5 justify-center rounded-xl ">
          <p className="text-base font-bold text-pink-800 ${fontRecipe}">
            Préparation time
          </p>
          <ul className={`space-y-2 list-disc ml-8 mt-2 d ${fontRecipe}`}>
            <li>
              <span className="font-bold">Total:</span>{" "}
              {recipe.preparation_time.total}
            </li>
            <li>
              <span className="font-bold">Preparation:</span>{" "}
              {recipe.preparation_time.preparation}
            </li>
            <li>
              <span className="font-bold ">Cooking:</span>{" "}
              {recipe.preparation_time.cooking}
            </li>
          </ul>
        </CardContent>
        <CardContent>
          <h2 className={`${titleRecipe} my-3 text-2xl`}>Ingredients</h2>
          <CardContent className={fontRecipe}>
            <ul className="space-y-2 list-disc -ml-2 mt-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </CardContent>
          <hr />
        </CardContent>
        <CardContent>
          <h2 className={`${titleRecipe} -mt-3 custom-list-color`}>
            Instructions
          </h2>
          <ul className={`${fontRecipe} list-decimal space-y-3`}>
            {recipe.instructions.map((instr: string, index) => (
              <li
                key={index}
                className="relative before:content-[counter(list-item)'.'] before:mr-2 before:text-orange-800 before:font-bold list-none"
              >
                <span className="font-bold">{instr.split(":")[0]}:</span>{" "}
                {instr.split(":").slice(1).join(":")}
              </li>
            ))}
          </ul>
        </CardContent>
        <hr className="mx-6" />
        <CardContent>
          <h3 className={`${titleRecipe} `}>Nutrition</h3>
          <p className={fontRecipe}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
        </CardContent>
        <CardContent>
          <table className={`${fontRecipe} table-auto w-full border-collapse`}>
            <tbody>
              {Object.entries(recipe.nutrition).map(([key, value], index) => (
                <tr
                  key={index}
                  className={
                    index === Object.entries(recipe.nutrition).length - 1
                      ? ""
                      : "border-b border-gray-300"
                  }
                >
                  <td className="px-4 py-2">{key}</td>
                  <td className="px-4 py-2 text-orange-800 font-bold">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </main>
  );
}
