import { useEffect, useState } from "react";
import OrderBurgerDisplay from "./OrderBurgerDisplay";
import OrderingIngredientsPicker from "./OrderIngredientsPicker";
import Orderheader from "./Orderheader";
import Button from "../../components/button";
import { Link, useLocation } from "react-router-dom";




const allIngredients = [
  {
    id: "cheese",
    name: "Cheese",
    price: 5000,
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 1000,
  },
  {
    id: "tomato",
    name: "Tomato",
    price: 2500,
  },
  {
    id: "pickles",
    name: "Pickles",
    price: 2000,
  },
  {
    id: "meat",
    name: "Meat",
    price: 14000,
  },
  {
    id: "mayo",
    name: "Mayo",
    price: 4000,
  },
  {
    id: "sauce",
    name: "Sauce",
    price: 4000,
  },
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [isIngredientsMax, setisIngredientsMax] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [isemptyOrder, setIsemptyOrder] = useState(null);
  const {search} = useLocation()


  function manageIngredients(type, id, idx) {
    if (type === "add") {
      selectedIngredientsSet((prev) => [...prev, id]);
    }
    if (type === "remove") {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }

  useEffect(() => {
    if (selectedIngredients.length >=10){
        setisIngredientsMax(true);
    }
    else {
        setisIngredientsMax(false);
    }
  },[selectedIngredients]);

  useEffect(() =>{
    if (new URLSearchParams(search).get("done") === "true"){
        setOrderDone(true);
    }
  },[search]);

  useEffect(() =>{
    if (selectedIngredients.length===null || selectedIngredients.length===""){
        
    }
  },(isemptyOrder))

 if (orderDone){
    return(
        <div className="flex flex-col justify-center items-center gap-4 mx-auto py-10">
            <h1 className="text-2xl font-bold text-black">Order Berhasil</h1>
            <Link to="/"><Button variant="primary">Kembali</Button></Link>
        </div>
    );
 }

  console.log(selectedIngredients);
  return (
    <section>
      <Orderheader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={() => selectedIngredientsSet([])}
      />
      <OrderBurgerDisplay
        selectedIngredients={selectedIngredients}
        removeIngredient={(idx) => manageIngredients("remove", undefined, idx)}
      />
      <OrderingIngredientsPicker
        allIngredients={allIngredients}
        manageIngredients={(id) => manageIngredients("add", id)}
        isIngredientsMax={isIngredientsMax}
      />
    </section>
  );
}