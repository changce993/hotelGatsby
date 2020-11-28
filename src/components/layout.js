import React from 'react';
import Helmet from 'react-helmet';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

import useSeo from '../hooks/useSeo';


AOS.init({duration: 800});

const Layout = ({ children, left, right }) => {
    const seo = useSeo();
    const { fallbackSeo: {description, title}} = seo;

    return (
        <>
            <GlobalStyles/>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header left={left} right={right} />
            { children }
        </>
    )
}

export default Layout
