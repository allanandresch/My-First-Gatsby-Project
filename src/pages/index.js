import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Home</h1>
        <p>Esto es super rapido!</p>
        <Link to="/about/">Learn about me &rarr;</Link>
    </Layout>
);
