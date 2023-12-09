import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard'
import Shimmer from '../components/others/Shimmer'
import AnnouncementBanner from '../components/others/AnnouncementBanner'
import BrandsBanner from '../components/header/BrandsBanner'

const BrandsProductPage = () => {
	const [brandProduct, setBrandProduct] = useState([])
	const [availabilityMsg, setAvailabilityMsg] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const param = useParams()

	useEffect(() => {
		fetch('https://brandshop-server-jet.vercel.app/products')
			.then(res => res.json())
			.then(data => {
				const selectedBrand = data.filter(
					product => product.brand === param.name
				)

				if (selectedBrand.length > 0) {
					setBrandProduct(selectedBrand)
					setIsLoading(false)
				} else {
					setIsLoading(false)
					setAvailabilityMsg('has no product right now 😞 !!')
				}
			})
	}, [param.name])

	const images = [
		'https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-hoka-overcast-1up.jpg',
		'https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-nb-heritage-running-1up.jpg',
		'https://xostudios.com.au/wp-content/uploads/2021/12/Footwear-product-photography-1536x743.jpg',
	]

	return (
		<div>
			<BrandsBanner images={images} />
			<AnnouncementBanner
				availabilityMsg={availabilityMsg}
				length={brandProduct.length}
				param={param}
			/>
			{isLoading ? (
				<Shimmer />
			) : (
				<>
					<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-20'>
						{brandProduct.map(product => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default BrandsProductPage
