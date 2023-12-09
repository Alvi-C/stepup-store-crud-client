

const Banner = () => {
    return (
			<div className=' bg-gray-50 flex items-center mb-10'>
				<div
					className='w-full bg-cover bg-center py-40'
					style={{
						backgroundImage:
							"url('https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-hoka-overcast-1up.jpg')",
					}}
				>
					<div className='container mx-auto text-center text-white'>
						<h1 className='text-5xl font-medium mb-6'></h1>
						<p className='text-xl mb-12'></p>
						<a
							href='#'
							className='bg-black text-white py-3 px-10 rounded-sm hover:bg-gray-600 relative top-10 '
						>
							Shop
						</a>
					</div>
				</div>
			</div>
		)
};

export default Banner;