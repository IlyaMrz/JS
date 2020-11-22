import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pr3 pointer mt0 mb0'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pr3 pointer mt0 mb0'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pr3 pointer mt0 mb0'>Register</p>
            </nav>
        );
    }
}

export default Navigation;