/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext)

	const location = useLocation()

	if (loading) {
		return (
			<div
				id='loading-overlay'
				className='fixed inset-0 z-50 flex items-center justify-center'
			>
				<svg
					className='animate-spin h-8 w-8 text-black mr-3'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
				>
					<circle
						className='opacity-25'
						cx='12'
						cy='12'
						r='10'
						stroke='currentColor'
						strokeWidth='4'
					></circle>
					<path
						className='opacity-75'
						fill='currentColor'
						d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
					></path>
				</svg>

				<span className='text-white text-3xl font-bold'>Loading...</span>
			</div>
		)
	}

	if (user) {
		return children
    }

    return <Navigate state={location.pathname} to='/login' />
}

export default PrivateRoute
