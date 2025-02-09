import PropTypes from 'prop-types';
import img2 from './img/fire.png'
import img3 from './img/Frame.png'
const Recipe = ({ recipe,wantToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className='space-y-6 p-6 border border-gray-400 rounded-2xl'>
            <div className='object-center'>
                <img className='w-96 h-60 rounded-xl ' src={recipe_image} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold'>{recipe_name}</h2>
                <p className='text-[#878787]'>{short_description} </p>
            </div>

            <div className='border border-[#30325E33]'></div>
            <div className='lg:h-56'>
                <h2 className='text-[#282828] font-semibold text-lg'>Ingredients: {ingredients.length} </h2>
                <ul className="list-disc list-inside">
                    {
                        ingredients.map((item, idx) => (
                            <li key={idx}>{item} </li>
                        )
                        )
                    }
                </ul>
            </div>

            <div className='border border-[#30325E33]'></div>
            <div className='flex justify-between px-2 text-[#878787]'>
                <div className='flex items-center justify-center gap-2'>
                    <img className='size-6' src={img3} alt="" />
                    <h3>{preparing_time} </h3>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <img className='h-5 w-4' src={img2} alt="" />
                    <h3>{calories} </h3>
                </div>
            </div>
            <button onClick={()=>wantToCook(recipe)} className='font-bold text-[#150B2B] px-4 py-3 lg:px-6 lg:py-3 rounded-full bg-[#0BE58A]'>Want to Cook</button>
        </div>
    );
};


Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    wantToCook:PropTypes.func.isRequired
}
export default Recipe;