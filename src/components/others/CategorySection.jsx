

const CategorySection = () => {
    return (
			<div className='grid grid-col-1 md:grid-cols-2 gap-5 mb-20 px-3'>
				<div className="mb-10">
					<img
						src='https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/womens-tab/2023/fall/mega_nav_fal23_banner_wbootshop2.jpg'
						alt=''
					/>
					<h3 className='text-center mt-4'>
						<span className='text-2xl font-bold '>For Women</span>
						<br />
						<span className='underline underline-offset-4'>Shop Now</span>
					</h3>
				</div>
				<div>
					<img
						src='https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/mens-tab/2023/fall/mega_nav_fal23_banner_mens.jpg'
						alt=''
					/>
					<h3 className='text-center mt-4'>
						<span className='text-2xl font-bold '>For Men</span>
						<br />
						<span className='underline underline-offset-4'>Shop Now</span>
					</h3>
				</div>
			</div>
		)
};

export default CategorySection;