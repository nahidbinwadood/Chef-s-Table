import Vector from './Frame 5.png'
const Header = () => {
  return (
    <header className='mt-12 px-8 lg:px-0 overflow-hidden'>
      <div className='flex justify-between gap-10 lg:gap-0 items-center'>
        <div>
          <h2 className='text-[#150B2B] font-bold text-2xl lg:text-4xl'>Recipe Calories</h2>
        </div>
        <div className='hidden lg:flex justify-around gap-6 items-center text-[#150B2BB3] cursor-pointer'>
          <h2>Home</h2>
          <h2>Recipes</h2>
          <h2>About</h2>
          <h2>Search</h2>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='lg:w-full'>
            <label className="w-2/3 lg:w-full input input-bordered rounded-3xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
          <div className='hidden lg:flex'>
            <img src={Vector} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;