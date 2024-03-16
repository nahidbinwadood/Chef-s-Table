import PropTypes from 'prop-types'; 
import img2 from './img/fire.png'
import img3 from './img/Frame.png'
const Recipe = ({recipe}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories}=recipe;
    console.log(ingredients.map((item)=> item));
    return (
        <div className='space-y-6 p-6 border border-gray-400 rounded-2xl'>
            <div className='object-center'>
                <img className='w-96 h-60 rounded-xl ' src={recipe_image} alt="" />
            </div>
            <h2 className='text-xl font-semibold'>{recipe_name}</h2>
            <p className='text-[#878787]'>{short_description} </p>
            <div className='border border-[#30325E33]'></div>
            <h2 className='text-[#282828] font-semibold text-lg'>Ingredients: {ingredients.length} </h2>
            <ul className='text-[#878787]'>
                <li>500g ground beef</li>
                <li>1 onion,chopped</li>
                <li>2 cloves garlic,minced</li>
            </ul>
            <div className='border border-[#30325E33]'></div>
            <div className='flex gap-12 text-[#878787]'>
                <div className='flex items-center justify-center gap-2'>
                    <img className='size-6' src={img3} alt="" />
                    <h3>{preparing_time} </h3>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <img className='h-5 w-4' src={img2} alt="" />
                    <h3>{calories} </h3>
                </div>
            </div>
            <button className='font-bold text-[#150B2B] px-4 py-3 lg:px-6 lg:py-3 rounded-full bg-[#0BE58A]'>Want to Cook</button>
        </div>
    );
};


Recipe.propTypes={
    recipe:PropTypes.object.isRequired
}
export default Recipe;