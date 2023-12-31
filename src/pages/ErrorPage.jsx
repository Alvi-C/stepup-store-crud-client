import { Link} from "react-router-dom";

const ErrorPage = () => {

    return (
			<div className='grid h-screen px-4 bg-white place-content-center'>
				<div className='text-center'>
                <h1 className='font-black text-gray-200 text-9xl'>ERROR!!</h1>

					<p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Oh-no!
					</p>

					<p className='mt-4 text-gray-500'>We cannot find that page.</p>

					<Link
                        to='/'
						className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-black rounded hover:bg-gray-700 focus:outline-none focus:ring'
					>
						Go Back Home
					</Link>
				</div>
			</div>
		)
};

export default ErrorPage;