import Recipe from "../Recipe/Recipe";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [data, setData] = useState([]);
    const [prepare, setPrepare] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('data.json');
            const data = await response.json();
            setRecipes(data);
        }
        fetchData();
    }, [])

    const wantToCook = (p) => {
        const isExist = data.find((item) => item.recipe_name === p.recipe_name)
        if (!isExist) {
            setData([...data, p]);
        } else {
            toast("Already Added !")
        }
    }
    const preparedFood = (p,time,calories) => {
        const notAvailable = data.filter((item) => item.recipe_name !== p.recipe_name);
        setData(notAvailable);
        setPrepare([...prepare, p]);

        let sum=parseInt(time.slice(0,2));
        let calSum=parseInt(calories.slice(0,3))

        setTotalTime([parseInt(totalTime)+sum]);
        setTotalCalories([ parseInt(totalCalories)+calSum]);
    }




    return (
        <div className="my-20  mx-4 lg:mx-0">
            <div className="text-center space-y-6">
                <h2 className="text-[#150B2B] font-semibold text-5xl">Our Recipes</h2>
                <p className="w-2/3 mx-auto text-[#150B2B99]">We are providing best of best recipes of every items.You can try out our recipes from our website and share this recipes to your friends and family members.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-96 gap-5 mt-10">
                <div className="lg:col-span-7 ">
                    <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                        {
                            recipes.map((recipe) => <Recipe key={recipe.id}
                                wantToCook={wantToCook}
                                recipe={recipe} ></Recipe>)

                        }
                    </div>
                </div>

                {/* Cart Section */}

                <div className=" h-full g:h-[70vh] lg:col-span-5 ">
                    <div className="border border-gray-400 rounded-xl p-5">
                        <div className="text-center space-y-6">
                            <h2 className="text-2xl font-semibold text-black">Want to Cook: {data.length} </h2>
                            <div className='border border-[#30325E33] w-2/3 mx-auto'></div>
                        </div>
                        <div className="mt-5">
                            <table className="mx-auto">
                                <thead className="h-20">
                                    <tr className="text-[#878787]">
                                        <td className="lg:fl lg:px-6" >Serial</td>
                                        <td className="lg:px-6" >Name</td>
                                        <td className="lg:px-10" >Time</td>
                                        <td className="lg:px-6">Calories</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((data, idx) => (
                                            <tr key={idx} className="text-[#282828] bg-gray-400 h-20">
                                                <td className="text-center">{idx + 1} </td>
                                                <td className="lg:mx-6" >{data.recipe_name} </td>
                                                <td className="lg:mx-6 text-center" >{data.preparing_time} </td>
                                                <td className="lg:ml-6 text-center">{data.calories}</td>
                                                <td className="lg:mx-6"><button onClick={() => preparedFood(data,data.preparing_time,data.calories)} className='font-bold text-[#150B2B] px-2 py-3 lg:px-6 lg:py-3 rounded-full bg-[#0BE58A]'>Preparing</button></td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center space-y-6 mt-10">
                            <h2 className="text-2xl font-semibold text-black">Currently cooking: {prepare.length} </h2>
                            <div className='border border-[#30325E33] w-2/3 mx-auto'></div>
                        </div>
                        <div className="mt-5">
                            <table className="mx-auto">
                                <thead className="h-20">
                                    <tr className="text-[#878787]">
                                        <td className="lg:px-6" >Serial</td>
                                        <td className="lg:px-6 text-center" >Name</td>
                                        <td className="lg:px-6 text-center" >Time</td>
                                        <td className="lg:px-6 text-center" >Calories</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        prepare.map((prepare, idx) => (
                                            <tr key={idx} className="text-[#282828] bg-gray-400 h-20 text-center">
                                                <td>{idx + 1} </td>
                                                <td className="lg:mx-6" >{prepare.recipe_name} </td>
                                                <td className="lg:mx-6" >{prepare.preparing_time} </td>
                                                <td className="lg:ml-6">{prepare.calories}</td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                                <tfoot>
                                    <tr className="text-[#282828] text-center">
                                        <td></td>
                                        <td></td>
                                        <td className="px-4">Total Time ={totalTime} Minutes</td>
                                        <td className="lg:mx-2">Total Calories={totalCalories} kcal </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipes;