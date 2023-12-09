import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { Toaster, toast } from 'sonner'

const CreateAccountPage = () => {
	const [registerError, setRegisterError] = useState('')
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const { createUser } = useContext(AuthContext)

	const navigate = useNavigate()

	const handleCreateAccount = e => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value

		setRegisterError('')

		// validation
		if (password.length < 6) {
			setRegisterError('Password must be at least 6 characters long')
			return
		} else if (!/[A-Z]/.test(password)) {
			setRegisterError('Password must contain at least one uppercase letter')
			return
		} else if (!/[^a-zA-Z0-9]/.test(password)) {
			setRegisterError('Password must contain at least one special character')
			return
		}

		// create user account
		createUser(email, password)
			.then(result => {
				const user = result.user
				console.log(user.email)

				// add user to database
				fetch('https://brandshop-server-jet.vercel.app/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({ email: email }),
				})
					.then(res => res.json())
					.then(data => {
						if (data.insertedId) {
							toast.success('Account created, now you are logged in')
						}
					})

				navigate('/')
			})
			.catch(error => {
				console.log(error)
			})
	}

	// toggle password visibility function
	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	return (
		<section className='flex items-center justify-center mt-20'>
			<div className='bg-slate-50 p-5 flex rounded-2xl shadow-lg max-w-3xl'>
				<div className='md:w-1/2 px-5'>
					<h2 className='text-2xl font-bold text-black'>Create Account</h2>
					<p className='text-sm mt-4 text-[#002D74]'>
						If you have an account,{' '}
						<Link to='/login' className='text-black underline'>
							please login
						</Link>
					</p>
					<form
						onSubmit={handleCreateAccount}
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
								required
							/>
						</div>

						<div className='mt-4'>
							<label className='block text-gray-700'>Password</label>
							<input
								type={isPasswordVisible ? 'text' : 'password'}
								name='password'
								placeholder='Enter Password'
								className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
								required
							/>
						</div>

						{registerError && (
							<p className='mt-2 mb-3 text-sm text-red-600'>{registerError}</p>
						)}

						<div className='mt-3 flex items-center justify-between'>
							<div className='flex items-center text-gray-700'>
								<input
									name='showPassword'
									type='checkbox'
									checked={isPasswordVisible}
									onChange={togglePasswordVisibility}
									className='form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out'
								/>
								<label
									htmlFor='remember_me'
									className='ml-2 block text-sm leading-5 text-gray-900'
								>
									Show Password
								</label>
							</div>

							<div>
								<a
									href='#'
									className='text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700'
								>
									Forgot Password?
								</a>
							</div>
						</div>

						<input
							type='submit'
							value={'Create Account'}
							className='w-full block bg-black focus:bg-slate-800 text-white font-semibold rounded-lg px-4 py-3 mt-6'
						/>
					</form>
				</div>

				<div className='w-1/2 md:block hidden '>
					<img
						src='https://i.ibb.co/grXrSQS/wk38-101523-2-story-left-shay.gif'
						// src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2023/october/231016-fl-homepage-basketball-featuring-curry-3up.jpg'
						className='rounded-2xl'
						alt='pageimg'
					/>
				</div>
			</div>
			<Toaster position='top-right' richColors />
		</section>
	)
}

export default CreateAccountPage
