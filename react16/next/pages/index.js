import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

//PREFETCH PRODUCTION ONLY
class IndexPage extends Component {
    static async getInitialProps(context) {
        const promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'NEXT SSR' });
            }, 1500);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>USING NEXT JS on {this.props.appName}</h1>
                <p>Go To
                    <Link href="/auth" prefetch>            
                        <a>AUTH</a>
                    </Link>
                </p>
                <button onClick={() => Router.push('/auth')}>GO TO AUTH</button>
            </div>    
        );
    }
}

export default IndexPage;
