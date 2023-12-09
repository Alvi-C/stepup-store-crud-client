import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'


const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const { user, logOutUser } = useContext(AuthContext)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	const handleLogout = () => {
		logOutUser()
			.then(result => {
				console.log(result)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<>
			<nav
				className='flex items-center justify-between p-6 lg:px-8'
				aria-label='Global'
			>
				{/* left menu */}
				<div className='flex lg:justify-center'>
					<NavLink to='/' className='-m-1.5 p-1.5'>
						<div className=''>
							<img
								className='h-16 md:16 w-auto'
								src='https://i.ibb.co/rsm7hnb/light-logo.png'
								alt='stepup-logo'
							/>
						</div>
					</NavLink>
				</div>

				{/* center menu */}
				<div className='hidden lg:flex lg:gap-x-12 lg:justify-start font-Poppins'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? ' text-sm font-semibold leading-6 text-white bg-red-600 rounded-sm px-2'
								: 'text-sm font-semibold leading-6 text-gray-900'
						}
					>
						Home
					</NavLink>
					<NavLink
						to='/addproduct'
						className={({ isActive }) =>
							isActive
								? 'text-sm font-semibold leading-6 text-white bg-red-600 rounded-sm px-2'
								: 'text-sm font-semibold leading-6 text-gray-900'
						}
					>
						Add Product
					</NavLink>
					<NavLink
						to='/mycart'
						className={({ isActive }) =>
							isActive
								? 'text-sm font-semibold leading-6 text-white bg-red-600 rounded-sm px-2'
								: 'text-sm font-semibold leading-6 text-gray-900'
						}
					>
						Cart
					</NavLink>

					<NavLink
						to='/about'
						className={({ isActive }) =>
							isActive
								? 'text-sm font-semibold leading-6 text-white bg-red-600 rounded-sm px-2'
								: 'text-sm font-semibold leading-6 text-gray-900'
						}
					>
						About us
					</NavLink>
				</div>

				{/* right menu */}
				<div className='hidden lg:flex lg:gap-x-12 lg:justify-end font-Poppins'>
					{user ? (
						<div className='flex items-center gap-2'>
							<div className='flex items-center gap-2'>
								{user.photoURL === null ? (
									<img
										className='h-6 md:16 w-auto rounded-full'
										src='https://i.ibb.co/ZJ1WC7Q/user-avatar.png'
										alt='user'
									/>
								) : (
									<img
										className='h-6 md:16 w-auto rounded-full'
										src={user.photoURL}
										alt='user-pic'
									/>
								)}
								{user.displayName === null ? (
									<p className='text-sm font-semibold leading-6 text-gray-900'>
										{'Hi'}
									</p>
								) : (
									<p className='text-sm font-semibold leading-6 text-gray-900'>
										{user.displayName}
									</p>
								)}
							</div>
							<button
								onClick={handleLogout}
								className='text-sm font-semibold leading-6 text-yellow-400 bg-black px-2'
							>
								Logout
							</button>

						</div>
					) : (
						<NavLink
							to='/login'
							className={({ isActive }) =>
								isActive
									? 'text-sm font-semibold leading-6 text-white bg-red-500 px-2'
									: 'text-sm font-semibold leading-6 text-gray-900'
							}
						>
							Login
						</NavLink>
					)}
				</div>
				{/* mobile menu to open */}
				<div className='lg:hidden'>
					<button
						onClick={toggleMobileMenu}
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</button>
				</div>
			</nav>
			{/* Mobile menu, show/hide based on menu open state. */}
			{mobileMenuOpen && (
				<div className='lg:hidden' role='dialog' aria-modal='true'>
					<div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
						<div className='flex items-center justify-between'>
							<NavLink to='/' className='-m-1.5 p-1.5'>
								<div className=''>
									<img
										className='h-12 md:16 w-auto'
										src='https://i.ibb.co/rsm7hnb/light-logo.png'
										alt='spotlight-logo'
									/>
								</div>
							</NavLink>
							{/* mobile menu to close */}
							<button
								onClick={toggleMobileMenu}
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-700'
							>
								<span className='sr-only'>Close menu</span>
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/10'>
								<div className='space-y-2 py-6 font-Poppins'>
									<NavLink
										to='/'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										Home
									</NavLink>
									<NavLink
										to='/addproduct'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										Add Product
									</NavLink>
									<NavLink
										to='/mycart'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										cart
									</NavLink>
									<NavLink
										to='/about'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										About us
									</NavLink>
									<NavLink
										to='/contact'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									>
										Contact us
									</NavLink>
								</div>
								<div className='py-6'>
									{user ? (
										<div className='flex items-center gap-2'>
											<div className='flex items-center gap-2'>
												{user.photoURL === null ? (
													<img
														className='h-6 md:16 w-auto rounded-full'
														src='https://i.ibb.co/ZJ1WC7Q/user-avatar.png'
														alt='user'
													/>
												) : (
													<img
														className='h-6 md:16 w-auto rounded-full'
														src={user.photoURL}
														alt='spotlight-logo'
													/>
												)}
												{user.displayName === null ? (
													<p className='text-sm font-semibold leading-6 text-gray-900'>
														{'Hi'}
													</p>
												) : (
													<p className='text-sm font-semibold leading-6 text-gray-900'>
														{user.displayName}
													</p>
												)}
											</div>
											<button
												onClick={''}
												className='text-sm font-semibold leading-6 text-yellow-400 bg-black px-2'
											>
												Logout
											</button>
										</div>
									) : (
										<Link
											to='/login'
											className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-600 hover:bg-blue-900'
										>
											Login
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Navbar
