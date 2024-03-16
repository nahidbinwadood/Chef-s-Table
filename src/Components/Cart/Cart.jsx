
const Cart = () => {
    return (
        <div className="border border-gray-900 rounded-xl p-5">
            <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold text-black">Want to Cook: </h2>
                <div className='border border-[#30325E33] w-2/3 mx-auto'></div>
            </div>
            <div>
                <table className="mx-auto">
                    <thead>
                        <tr className="text-[#878787]">
                            <td className="lg:px-12" >Name</td>
                            <td className="lg:px-12" >Time</td>
                            <td className="lg:px-12">Calories</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Cart;