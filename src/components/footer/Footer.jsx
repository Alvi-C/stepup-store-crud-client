import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div>
			<footer className='mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8'>
				<div className='border-t border-slate-900/5 py-10'>
					<div className='flex items-center justify-center'>
						<img
							className='w-48'
							src='https://i.ibb.co/rsm7hnb/light-logo.png'
							alt=''
						/>
					</div>
					<p className='mt-5 text-center text-sm leading-6 text-slate-500'>
						© 2023 Step Up Style. All rights reserved. Concept by
						alvic5050@gmail.com
					</p>
					<div className='mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700'>
						<Link to='/about'>About us</Link>
						<div className='h-4 w-px bg-slate-500/20'></div>
						<Link to='/contact'>Contact us</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
