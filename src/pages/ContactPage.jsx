

const ContactPage = () => {
    return (
			<div className='flex flex-col items-center justify-center mt-32 mb-20'>
				<h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
					I am Jahedul Huda Chowdhury
				</h2>
				<h2 className='text-2xl font-extrabold text-gray-700 sm:text-3xl'>
					People knows me as{' '}
					<span className='underline underline-offset-4 text-black'>Alvi</span>
				</h2>
				<h3 className='text-lg font-bold text-green-500 my-2'>
					If you want to talk to me
				</h3>
				<h3 className='text-lg font-bold text-gray-700'>
					Send a buzz at{' '}
					<span className='underline underline-offset-4 text-blue-500'>
						alvic5050@gmail.com
					</span>
				</h3>
			</div>
		)
};

export default ContactPage;