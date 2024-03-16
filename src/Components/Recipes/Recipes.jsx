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
    const preparedFood = (p) => {
        const notAvailable = data.filter((item) => item.recipe_name !== p.recipe_name);
        setData(notAvailable);
        setPrepare([...prepare, p]);
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

                <div className="lg:col-span-5 ">
                    <div className="border border-gray-900 rounded-xl p-5">
                        <div className="text-center space-y-6">
                            <h2 className="text-2xl font-semibold text-black">Want to Cook: {data.length} </h2>
                            <div className='border border-[#30325E33] w-2/3 mx-auto'></div>
                        </div>
                        <div className="mt-5">
                            <table className="mx-auto">
                                <thead>
                                    <tr className="text-[#878787]">
                                        <td className="lg:px-6" >Serial</td>
                                        <td className="lg:px-6" >Name</td>
                                        <td className="lg:px-6" >Time</td>
                                        <td className="lg:px-6">Calories</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((data, idx) => (
                                            <tr key={idx} className="text-[#282828]">
                                                <td className="text-center">{idx + 1} </td>
                                                <td className="lg:px-6" >{data.recipe_name} </td>
                                                <td className="lg:px-6" >{data.preparing_time} </td>
                                                <td className="lg:pl-6">{data.calories}</td>
                                                <td><button onClick={() => preparedFood(data)} className='font-bold text-[#150B2B] px-4 py-3 lg:px-6 lg:py-3 rounded-full bg-[#0BE58A]'>Preparing</button></td>

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
                                <thead>
                                    <tr className="text-[#878787]">
                                        <td className="lg:px-6" >Serial</td>
                                        <td className="lg:px-6" >Name</td>
                                        <td className="lg:px-6" >Time</td>
                                        <td className="lg:px-6">Calories</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        prepare.map((prepare, idx) => (
                                            <tr key={idx} className="text-[#282828]">
                                                <td className="text-center">{idx + 1} </td>
                                                <td className="lg:px-6" >{prepare.recipe_name} </td>
                                                <td className="lg:px-6" >{prepare.preparing_time} </td>
                                                <td className="lg:pl-6">{prepare.calories}</td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                                <tfoot>
                                    <tr className="text-[#282828]">
                                        <td></td>
                                        <td></td>
                                        <td className="lg:px-6">Total Time ={totalTime}</td>
                                        <td className="lg:px-2">Total Calories={totalCalories}</td>
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