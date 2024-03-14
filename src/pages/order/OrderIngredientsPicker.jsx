import { formatNumber } from "../utils";



export default function OrderIngredientsPicker({
  allIngredients = [],
  manageIngredients,
  isIngredientsMax
}) {

  const disabledStyle = `bg-gray-400`;
  return (
    <section className="container mx-auto">
      {isIngredientsMax && <p className="text-center">You reach the maximal quantity of ingredients</p>}
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item?.id}
            className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${isIngredientsMax && disabledStyle}`}
            onClick={() => isIngredientsMax ? null : manageIngredients(item?.id)}
          >
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{formatNumber(item?.price)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
