/* eslint-disable react/prop-types */
const AnnouncementBanner = ({ availabilityMsg, length, param }) => {
	return (
		<div className='max-w-[85rem] mx-auto'>
			<div className='bg-blue-600 bg-gradient-to-tr from-gray-900 to-slate-700 bg-no-repeat bg-cover bg-center p-4 text-center'>
				<p className='mr-2 inline-block text-white'>
					{length > 0
						? `${param.name} has ${length} available product`
						: param.name + ' ' + availabilityMsg}
				</p>
			</div>
		</div>
	)
}

export default AnnouncementBanner
