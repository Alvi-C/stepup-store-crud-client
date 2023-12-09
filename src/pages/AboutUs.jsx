const AboutUs = () => {
	return (
		<div className='container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
				<div className='max-w-lg'>
					<h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
						About Us
					</h2>
					<p className='mt-4 text-gray-700 text-lg'>
						At Step Up Style, we are not just in the business of selling shoes.
						We are in the business of helping you put your best foot forward. As
						a family-owned and operated footwear brand, we understand that shoes
						are more than just a necessity; they are a statement, a reflection of
						your personal style, and an essential part of your everyday journey.
						That is why we have dedicated ourselves to providing the latest trends
						and timeless classics for men, women, and children, all under one
						fashionable roof.
					</p>
				</div>
				<div className='mt-12 md:mt-0'>
					<img
						src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/september/230912-fl-hp-category-6up-update-clothing.jpg'
						alt='About Us Image'
						className='object-cover rounded-lg shadow-md'
					/>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
