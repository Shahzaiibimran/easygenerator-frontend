import React from 'react';
import { Route, Routes as RouterRoutes, Navigate } from 'react-router-dom';
import SignIn from './components/sign_in';
import SignUp from './components/sign_up';
import Welcome from './components/welcome';
import { useAuth } from './context/auth';

const Routes: React.FC = () => {
	const { isAuthenticated } = useAuth();

	return (
		<RouterRoutes>
			<Route path="/sign-in" element={isAuthenticated ? <Navigate to="/welcome" /> : <SignIn />} />
			<Route path="/sign-up" element={isAuthenticated ? <Navigate to="/welcome" /> : <SignUp />} />
			<Route path="/welcome" element={isAuthenticated ? <Welcome /> : <Navigate to="/sign-in" />} />
			<Route path="*" element={<Navigate to="/sign-in" />} />
		</RouterRoutes>
	);
};

export default Routes;