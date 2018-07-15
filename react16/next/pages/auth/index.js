import React from 'react';
import Link from 'next/link';
import User from '../../components/User';

//PREFETCH PRODUCTION ONLY
const authIndexPage = (props) => (
    <div>
        <Link href="/" prefetch>
            <a><h1>AUTH INDEX PAGE</h1></a>
        </Link>
        <p>{props.appName}</p>
        <User name="Tee" age={38} />
        <style jsx>
            {`
                div {
                    border: 1px solid black;
                    box-shadow: 0 2px 2px #ccc;
                    padding: 20px;
                    text-align: center;
                }            
                a {
                    text-decoration: none;
                    color: black;
                }
            `}
        </style>
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'AUTH APP' });
        }, 2000);
    });
    return promise;
}

export default authIndexPage;
