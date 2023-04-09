import { useAuth0 } from '@auth0/auth0-react';
import { ImSpinner } from 'react-icons/im';

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <ImSpinner />
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
}

export default Profile;
