import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLoaderData } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

const MyCartPage = () => {
	const { user } = useContext(AuthContext)
	const cartData = useLoaderData()
	const usersCart = cartData.filter(cart => cart.userEmail === user.email)

	const [cartProducts, setCartProducts] = useState(usersCart)
	const total = cartProducts.reduce(
		(acc, cartItem) => acc + parseInt(cartItem.price),
		0
	)

	const handleDeleteItem = id => {
		// console.log(id)
		fetch(`https://brandshop-server-jet.vercel.app/carts/${id}`, {
			method: 'DELETE',
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Item removed from the cart')
					const remainingCartItem = cartProducts.filter(item => item._id !== id)
					setCartProducts(remainingCartItem)
				}
			})
	}

	return (
		<div className='max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-100 mb-10'>
			<div className='flex items-center justify-between px-4 py-2 border-b border-gray-200'>
				<h2 className='font-semibold text-gray-800'>Shopping Cart</h2>
				<h2 className='font-semibold text-gray-800'>
					Cart Item: {cartProducts.length}
				</h2>
			</div>
			<div className='flex flex-col divide-y divide-gray-200'>
				{cartProducts.map(cartItem => (
					<div key={cartItem._id} className='flex items-center py-4 px-6'>
						<img
							className='w-16 h-16 object-cover rounded'
							src={cartItem.image}
							alt='Product Image'
						/>
						<div className='ml-3'>
							<h3 className='text-gray-900 font-semibold'>{cartItem.name}</h3>
							<p className='text-gray-700 mt-1'>{cartItem.brand}</p>
							<p className='text-gray-700 mt-1'>${cartItem.price}</p>
						</div>
						<button
							onClick={() => handleDeleteItem(cartItem._id)}
							className='ml-auto py-1 px-2 bg-red-600 hover:bg-red-500 text-white text-xs rounded-lg'
						>
							X
						</button>
					</div>
				))}
			</div>
			<div className='flex items-center justify-between px-6 py-3 bg-gray-100'>
				<h3 className='text-gray-900 font-semibold'>Total: ${total}</h3>
				<button onClick={()=> toast.success('Checkout functionality coming soon')} className='py-2 px-4 bg-black hover:bg-gray-800 text-white rounded-md'>
					Checkout
				</button>
			</div>
			<Toaster position='top-right' richColors />
		</div>
	)
}

export default MyCartPage
