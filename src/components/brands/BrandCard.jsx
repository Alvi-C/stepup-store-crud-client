import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
	return (
		<>
			<Link
				to={`/brands/${brand.brandName}`}
				className='md:mb-10 lg:mb-20 hover:underline hover:underline-offset-8 px-5'
			>
				<div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-xl hover:shadow-indigo-50 items-center'>
					<div className='relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border p-5'>
						<img src={brand.brandImage} alt='ui/ux review check' />
					</div>
				</div>
				<div className='bg-gradient-to-l hover:bg-gradient-to-r'>
					<h4 className='mt-3 block text-lg md:text-xl lg:text-3xl text-center antialiased font-bold'>
						{brand.brandName}
					</h4>
				</div>
			</Link>
		</>
	)
}

export default BrandCard
