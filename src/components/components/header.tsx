// components/header.tsx
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="w-full h-16 flex items-center bg-gray-100 px-4 sticky top-0 z-50 mb-4 shadow-md">
            <Image
                src="/logo.png"
                alt="App Logo"
                width={80}
                height={80}
            />
            <h2>ELYSIUM BEATS</h2>
        </div>
    );
};

export default Header;
