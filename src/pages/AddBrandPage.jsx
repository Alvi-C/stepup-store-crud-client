

const AddBrandPage = () => {

    const handleAddBrand = (e) => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.name.value;
        const brandImage = form.brandImage.value;
        // console.log(brandName, brandImage);

        fetch('https://brandshop-server-jet.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ brandName, brandImage })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Brand added successfully');
                    form.reset();
                }
            })
    }

    return (
			<div className='w-[70%] mx-auto mt-5 mb-10'>
				<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<form onSubmit={handleAddBrand}>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-5 text-gray-700'
							>
								Brand Name
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<input
									name='name'
									placeholder='Brand Name'
									type='text'
									required
									className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
								/>
							</div>
						</div>

						<div className='mt-6'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-5 text-gray-700'
							>
								Brand Image
							</label>
							<div className='mt-1 rounded-md shadow-sm'>
								<input
									name='brandImage'
									placeholder='Brand Image'
									type='text'
									required
									className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
								/>
							</div>
						</div>

						<div className='mt-6'>
							<span className='block w-full rounded-md shadow-sm'>
								<button
									type='submit'
									className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
								>
									Add Brand
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		)
};

export default AddBrandPage;