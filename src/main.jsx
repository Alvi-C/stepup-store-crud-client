import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myAppRouter from './router/myAppRouter'
import AuthProvider from './context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={myAppRouter} />
		</AuthProvider>
	</React.StrictMode>
)
