import { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { Toaster, toast } from 'sonner'


const ProductDetailsPage = () => {
	const { user } = useContext(AuthContext)
	const userEmail = user?.email

	const productData = useLoaderData()
	const { name, brand, image, type, description, price, ratings } = productData
	const toastMessage = name + ' ' + 'added to cart'

	const navigate = useNavigate()

	const handleAddToCartBtn = () => {
		const cartItem = {
			userEmail: userEmail,
			image: image,
			name: name,
			brand: brand,
			price: price,
		}

		fetch('https://brandshop-server-jet.vercel.app/carts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(cartItem),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.insertedId) {
					toast.success(toastMessage)
				}
			})
	}

	const handleGoBackBtn = () => {
		navigate(-1)
	}

	const generateStarRating = rating => {
		const maxRating = 5 // Maximum rating
		const starIcons = []

		for (let i = 1; i <= maxRating; i++) {
			if (i <= rating) {
				// Add a full star
				starIcons.push(
					<span key={i} className='text-yellow-400'>
						&#9733;
					</span>
				)
			} else if (i === Math.ceil(rating) && rating % 1 !== 0) {
				// Add a half star
				starIcons.push(
					<span key={i} className='text-yellow-400'>
						&#9734;
					</span>
				)
			} else {
				// Add an empty star
				starIcons.push(
					<span key={i} className='text-gray-200'>
						&#9734;
					</span>
				)
			}
		}

		return <div className='flex'>{starIcons}</div>
	}


	return (
		<div className='py-8'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						<div className='h-[460px] rounded-lg bg-gray-300 mb-4'>
							<img
								className='w-full h-full object-cover'
								src={image}
								alt={name}
							/>
						</div>
						<div className='flex -mx-2 mb-4'>
							<div className='w-1/2 px-2'>
								<button
									onClick={handleAddToCartBtn}
									className='w-full bg-gray-900 text-white py-2 px-4 rounded-sm font-bold hover:bg-gray-800 '
								>
									Add to Cart
								</button>
							</div>
							<div onClick={handleGoBackBtn} className='w-1/2 px-2'>
								<button className='w-full bg-gray-900  text-white py-2 px-4 rounded-sm font-bold hover:bg-gray-800 '>
									Go Back
								</button>
							</div>
						</div>
					</div>
					<div className='md:flex-1 px-4'>
						<h2 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h2>
						<div className='flex mb-2'>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 '>Price: </span>
								<span className='text-gray-600 '>${price}</span>
							</div>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 '>Brand: </span>
								<span className='text-gray-600 '>{brand}</span>
							</div>
							<div>
								<span className='font-bold text-gray-700 '>Type: </span>
								<span className='text-gray-600 '>{type}</span>
							</div>
						</div>
						<div className='flex mb-4'>
							<span className='font-bold text-gray-700 mr-2'>Ratings: </span>
							<span>{generateStarRating(ratings)}</span>
						</div>
						<div>
							<span className='font-bold text-gray-700 '>
								Product Description:
							</span>
							<p className='text-gray-600 text-sm mt-2'>{description}</p>
						</div>
					</div>
				</div>
			</div>
			<Toaster position='top-right' richColors />
		</div>
	)
}

export default ProductDetailsPage

