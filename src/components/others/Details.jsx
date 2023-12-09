const Details = () => {
	return (
		<div className='bg-gray-100 py-8'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						<div className='h-[460px] rounded-lg bg-gray-300 mb-4'>
							<img
								className='w-full h-full object-cover'
								src='https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'
								alt='Product Image'
							/>
						</div>
						<div className='flex -mx-2 mb-4'>
							<div className='w-1/2 px-2'>
								<button className='w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 '>
									Add to Cart
								</button>
							</div>
							<div className='w-1/2 px-2'>
								<button className='w-full bg-gray-400  text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 '>
									Add to Wishlist
								</button>
							</div>
						</div>
					</div>
					<div className='md:flex-1 px-4'>
						<h2 className='text-2xl font-bold text-gray-800 mb-2'>
							Product Name
						</h2>
						<p className='text-gray-600  text-sm mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
							ante justo. Integer euismod libero id mauris malesuada tincidunt.
						</p>
						<div className='flex mb-4'>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 '>Price:</span>
								<span className='text-gray-600 '>$29.99</span>
							</div>
							<div>
								<span className='font-bold text-gray-700 '>Brand:</span>
								<span className='text-gray-600 '>Nike</span>
							</div>
						</div>

						<div>
							<span className='font-bold text-gray-700 '>
								Product Description:
							</span>
							<p className='text-gray-600 text-sm mt-2'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
								ante justo. Integer euismod libero id mauris malesuada
								tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
								dapibus augue vel ipsum pretium, et venenatis sem blandit.
								Quisque ut erat vitae nisi ultrices placerat non eget velit.
								Integer ornare mi sed ipsum lacinia, non sagittis mauris
								blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt
								mi consectetur.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details
