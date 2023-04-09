import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Route {...rest}>
            {isAuthenticated ? children : <Redirect to="/" />}
        </Route>
    );
}

export default PrivateRoute;
