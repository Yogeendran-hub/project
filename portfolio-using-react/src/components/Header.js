import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to track the scroll position
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex justify-between px-5 py-2 bg-primary fixed top-0 w-full z-50 ${isScrolled ? 'shadow-lg' : ''}`}
        >
            <a className="font-bold text-white headingmyportfolio" href="#">
                My Portfolio
            </a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#resume">Resume</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="flex flex-col text-white mobile-nav"
                    >
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
                <Bars3Icon className="text-white h-5" />
            </button>
        </header>
    );
}
