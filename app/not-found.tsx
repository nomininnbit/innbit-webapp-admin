import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Error 404',
};

const NotFound = () => {
    return (
        <div className="relative">
            <p className="mt-5 text-base dark:text-white">The page you requested was not found!</p>
        </div>
    );
};

export default NotFound;
