import { useLoaderData } from 'react-router-dom'
import BrandCard from '../components/brands/BrandCard'
import Banner from '../components/header/Banner'
import PromotinalAd from '../components/others/PromotinalAd'
import CategorySection from '../components/others/CategorySection'
import { useEffect, useState } from 'react'

const HomePage = () => {
	const brandsData = useLoaderData()
	const [allBrands, setAllBrands] = useState([])

	useEffect(() => {
		setAllBrands(brandsData)
	}, [brandsData])

	console.log(allBrands);
	return (
		<div className=''>
			<Banner />
			<div>
				<h2 className='text-3xl font-bold text-center my-8'>Shop by Brand</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
					{
						Array.isArray(allBrands) ? allBrands.map(brand => (
						<BrandCard key={brand._id} brand={brand} />
					)) : null
					}
				</div>
			</div>
			<div>
				<PromotinalAd />
			</div>
			<div className='mt-32'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Shop by <br />
					<span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600'>
						Category
					</span>
				</h2>
				<CategorySection />
			</div>
		</div>
	)
}

export default HomePage
