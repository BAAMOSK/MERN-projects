import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Name from '../src/components/Main';

//Link for static routes --- Router for dynamic routes

class Main extends Component {
    render() {
        return(
            <div>
                <Name />
                <Link href="portfolio" prefetch><a>Portfolio</a></Link>
                <Link href="social" ><a>Social</a></Link>
                <Link href="contact" ><a>Contact</a></Link>
            </div>    
        );
    }
}

export default Main;
