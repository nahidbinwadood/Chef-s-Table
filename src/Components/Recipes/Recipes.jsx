
import { useState } from "react";
import Cart from "../Cart/Cart";
import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";

const Recipes = () => {
    const[recipes,setRecipes]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('data.json');
            const data=await response.json();
            setRecipes(data);
        }
        fetchData();
    },[])
    return (
        <div className="mt-20 mx-4 lg:mx-0">
            <div className="text-center space-y-6">
                <h2 className="text-[#150B2B] font-semibold text-5xl">Our Recipes</h2>
                <p className="w-2/3 mx-auto text-[#150B2B99]">We are providing best of best recipes of every items.You can try out our recipes from our website and share this recipes to your friends and family members.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-96 gap-5 mt-10">
                <div className="lg:col-span-7 ">
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                    {
                        recipes.map((recipe)=> <Recipe key={recipe.id} recipe={recipe} ></Recipe>)
                    }
                </div>
                </div>
                <div className="lg:col-span-5 bg-slate-600">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Recipes;