import Content from '../Components/Content/Content';
import Editor from '../Components/Editor/Editor';
import Login from '../Components/Login/Login';
import Navbar from '../Components/Navbar/Navbar';
import NotFound from '../Components/not-found/not-found';
import Signup from '../Components/Signup/Signup';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
	{ path: '/', element: <Navbar /> },
	{ path: '/login', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{ path: '/content/:id', element: <Content /> },
	{ path: '*', element: <NotFound /> },
	{ path: '/editor/:id', element: <Editor /> },
]);
