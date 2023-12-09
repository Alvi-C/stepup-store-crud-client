/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { _id, name, brand, image, type, price, ratings } = product

	// Function to generate star icons based on the ratings
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
		<div className='p-3 max-w-lg border border-indigo-50 rounded-lg hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center'>
			<img
				src={image}
				alt={name}
				className='rounded-lg overflow-hidden border border-slate-100'
			/>
			<div className='mt-8'>
				<div className='flex justify-between'>
					<p className='bg-black inline-block text-yellow-200 rounded-md px-2 mb-3'>{brand}</p>
					<p className='font-bold'>{type}</p>
				</div>
				<h4 className='font-bold text-xl'>{name}</h4>
				<p className='mt-2 text-gray-600 text-sm'>
					Create Exercises for any subject with the topics you and your students
					care about.
				</p>
				<div className='flex justify-between mt-4'>
					<span className='text-xl font-bold'>${price}</span>
					<span>{generateStarRating(ratings)}</span>
				</div>
				<div className='mt-5 flex justify-between'>
					<Link to={`/details/${_id}`}>
						<button
							type='button'
							className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900'
						>
							See Detais
						</button>
					</Link>
					<Link to={`/updateProduct/${_id}`}>
						<button
							type='button'
							className='inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900'
						>
							Update Product
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard

