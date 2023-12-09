/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const BrandsBanner = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const slideImages = images

useEffect(() => {
	const interval = setInterval(() => {
		try {
			setActiveIndex(prevIndex => (prevIndex + 1) % slideImages.length)
		} catch (error) {
			console.error('An error occurred:', error)
		}
	}, 2000)

	return () => clearInterval(interval)
}, [slideImages.length])



	return (
		<div className='relative h-36 md:h-64 lg:h-96 overflow-hidden'>
			<div className='w-full h-full transition-transform duration-1000 transform'>
				<div className=' bg-gray-50 flex items-center mb-10'>
					<div className='w-full bg-cover bg-center'>
						<img
							src={slideImages[activeIndex]}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BrandsBanner

