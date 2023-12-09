import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { Toaster, toast } from 'sonner'

const LoginPage = () => {
	const [loginError, setLoginError] = useState('')

	const { logInUser, signInWithGoogle } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()

	// user login with google account
	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then(result => {
				const user = result.user
				console.log(user)

				// check user is already registered or not
				fetch('https://brandshop-server-jet.vercel.app/users')
					.then(res => res.json())
					.then(data => {
						// find is there any user registered with this email
						const isUserRegistered = data.find(
							existingUser => existingUser.email === user.email
						)

						if (isUserRegistered) {
							navigate(location?.state ? location.state : '/')
						} else {
							// add user to database
							fetch('https://brandshop-server-jet.vercel.app/users', {
								method: 'POST',
								headers: {
									'content-type': 'application/json',
								},
								body: JSON.stringify({ email: user.email }),
							})
								.then(res => res.json())
								.then(data => {
									if (data.insertedId) {
										toast.success('Account created, now you are logged in')
									}
								})
							navigate(location?.state ? location.state : '/')
						}
					})
			})
			.catch(error => {
				console.log(error)
			})
	}

	// user login with email and password
	const handleLogin = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value

		setLoginError('')

		if (!email || !password) {
			setLoginError('Please fill all the fields')
			return
		}

		logInUser(email, password)
			.then(result => {
				const user = result.user
				console.log(user.email)
				navigate(location?.state ? location.state : '/')
				toast.success('Logged in successfully')
			})
			.catch(error => {
				if (error.code === 'auth/wrong-password') {
					setLoginError("Password doesn't match")
				} else if (error.code === 'auth/user-not-found') {
					setLoginError("Email doesn't match")
				} else {
					console.error(error)
					setLoginError('An error occurred. Please try again later.')
				}
			})
	}

	return (
		<section className='flex items-center justify-center mt-10 mb-10'>
			<div className='bg-slate-50 p-5 flex rounded-2xl shadow-lg max-w-3xl'>
				<div className='md:w-1/2 px-5'>
					<h2 className='text-2xl font-bold text-black'>Login</h2>
					<p className='text-sm mt-4 text-[#002D74]'>
						If you have an account, please login
					</p>
					{loginError && (
						<p className='mt-2 text-sm text-red-600'>{loginError}</p>
					)}
					<form
						onSubmit={handleLogin}
						className='mt-6'
						action='#'
						method='POST'
					>
						<div>
							<label className='block text-gray-700'>Email Address</label>
							<input
								type='email'
								name='email'
								placeholder='Enter Email Address'
								className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
								autoFocus
							/>
						</div>

						<div className='mt-4'>
							<label className='block text-gray-700'>Password</label>
							<input
								type='password'
								name='password'
								placeholder='Enter Password'
								className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
							/>
						</div>

						<div className='text-right mt-2'>
							<a
								href='#'
								className='text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700'
							>
								Forgot Password?
							</a>
						</div>

						<input
							type='submit'
							value={'Log in'}
							className='w-full block bg-black focus:bg-slate-800 text-white font-semibold rounded-lg px-4 py-3 mt-6'
						/>
					</form>

					<div className='mt-7 grid grid-cols-3 items-center text-gray-500'>
						<hr className='border-gray-500' />
						<p className='text-center text-sm'>OR</p>
						<hr className='border-gray-500' />
					</div>

					<button
						onClick={handleGoogleLogin}
						className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 '
					>
						<img
							className='w-6 h-6'
							src='https://www.svgrepo.com/show/475656/google-color.svg'
							loading='lazy'
							alt='google logo'
						/>
						<span className='ml-4'>Login with Google</span>
					</button>

					<div className='text-sm flex justify-between items-center mt-6'>
						<p>If you don&apos;t have an account...</p>
						<Link to='/signup'>
							<button className='py-2 px-5 ml-3 bg-black text-white border rounded-lg hover:scale-105 duration-300  '>
								Register
							</button>
						</Link>
					</div>
				</div>

				<div className='w-1/2 md:block hidden '>
					<img
						src='https://i.ibb.co/kxzczpM/login-img.jpg'
						className='rounded-2xl'
						alt='page img'
					/>
				</div>
			</div>
			<Toaster position='top-right' richColors />
		</section>
	)
}

export default LoginPage
