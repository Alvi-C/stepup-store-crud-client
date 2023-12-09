import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from '../pages/HomePage';
import BrandsProductPage from '../pages/BrandsProductPage';
import AddBrandPage from '../pages/AddBrandPage';
import ContactPage from '../pages/ContactPage';
import AddProductPage from '../pages/AddProductPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import MyCartPage from '../pages/MyCartPage';
import LoginPage from '../pages/LoginPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import UpdateProductPage from "../pages/UpdateProductPage";
import AboutUs from '../pages/AboutUs';
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";



const myAppRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
				loader: async () => await fetch('https://brandshop-server-jet.vercel.app/brands'),
			},
			{
				path: '/addbrands',
				element: <AddBrandPage />,
			},
			{
				path: '/brands/:name',
				element: <BrandsProductPage />,
				loader: async ({ params }) => {
					return await fetch(`https://brandshop-server-jet.vercel.app/brands/${params.name}`)
				},
			},
			{
				path: '/details/:id',
				element: (
					<PrivateRoute>
						<ProductDetailsPage />
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					return await fetch(`https://brandshop-server-jet.vercel.app/products/${params.id}`)
				},
			},
			{
				path: '/addproduct',
				element: (
					<PrivateRoute>
						<AddProductPage />
					</PrivateRoute>
				),
			},
			{
				path: '/updateProduct/:id',
				element: (
					<PrivateRoute>
						<UpdateProductPage />
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					return await fetch(`https://brandshop-server-jet.vercel.app/products/${params.id}`)
				},
			},
			{
				path: '/mycart',
				element: (
					<PrivateRoute>
						<MyCartPage />
					</PrivateRoute>
				),
				loader: async () => {
					return await fetch('https://brandshop-server-jet.vercel.app/carts')
				}
			},
			{
				path: '/about',
				element: <AboutUs />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/signup',
				element: <CreateAccountPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
		],
	},
])

export default myAppRouter;