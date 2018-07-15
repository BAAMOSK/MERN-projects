import React from 'react';

//function that returns a functional component
const withclass = (WrappedComponent, className) => {
    return props => (
        <div className={className} />
            <WrappedComponent {...props} />
        </div>
    );
}

export default withclass;
