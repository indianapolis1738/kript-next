'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaWallet } from 'react-icons/fa';
import { RiSwap2Fill } from 'react-icons/ri';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Function to check if a route is active
  const isActive = (route: string) => pathname === route;

  return (
    <motion.header
      className="max-w-7xl mx-auto px-4 py-4 z-50 bg-transparent"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="flex justify-between items-center z-50">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex justify-center items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li className="relative group">
            <span className="flex justify-center items-center gap-2 cursor-pointer px-3 py-2 rounded hover:bg-[#DFEFFE]">
              Services
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            <motion.ul
              className="left-0 right-0 hidden mt-0 w-screen bg-white text-black group-hover:block fixed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                  <Link
                    href="/swap"
                    className={`block items-center justify-center px-10 py-10 rounded-2xl gap-[40px] hover:bg-[#DFEFFE] ${
                      isActive('/swap') ? 'bg-[#003399] text-white' : 'text-[#003399]'
                    }`}
                  >
                    <RiSwap2Fill size={39} /> <br />
                    <p className="text-[20px] font-bold">Instant Swap</p>
                    <p className="text-[16px] font-normal">
                      Swap your crypto assets instantly with Kript Africa.
                    </p>
                  </Link>
                  <Link
                    href="/wallets"
                    className={`block items-center justify-center px-10 py-10 rounded-2xl gap-[40px] hover:bg-[#DFEFFE] ${
                      isActive('/wallets') ? 'bg-[#003399] text-white' : 'text-[#003399]'
                    }`}
                  >
                    <FaWallet size={35} /> <br />
                    <p className="text-[20px] font-bold">Wallets</p>
                    <p className="text-[16px] font-normal">
                      Securely store and manage your crypto assets with Kript Africa.
                    </p>
                  </Link>
                  <Link
                    href="/bill"
                    className={`block items-center justify-center px-10 py-10 rounded-2xl gap-6 hover:bg-[#DFEFFE] ${
                      isActive('/bill') ? 'bg-[#003399] text-white' : 'text-[#003399]'
                    }`}
                  >
                    <FaMoneyBillTransfer size={39} /> <br />
                    <p className="text-[20px] font-bold">Bill Payment</p>
                    <p>Pay your bills effortlessly using cryptocurrency with Kript Africa.</p>
                  </Link>
                  <Link
                    href="/recurring"
                    className={`block items-center justify-center px-10 py-10 rounded-2xl gap-6 hover:bg-[#DFEFFE] ${
                      isActive('/recurring') ? 'bg-[#003399] text-white' : 'text-[#003399]'
                    }`}
                  >
                    <BiPurchaseTagAlt size={39} /> <br />
                    <p className="text-[20px] font-bold">Recurring Purchase</p>
                    <p>Set up recurring purchases of your favorite cryptocurrencies with Kript Africa.</p>
                  </Link>
                </div>
              </div>
            </motion.ul>
          </li>

          {/* Other links */}
          {['/about', '/support', '/markets', '/ambassador'].map((route) => (
            <li key={route}>
              <Link
                href={route}
                className={`px-3 py-2 rounded hover:bg-[#DFEFFE] ${
                  isActive(route) ? 'bg-[#003399] text-white' : ''
                }`}
              >
                {route === '/about' ? 'About' : route === '/support' ? 'Support' : route === '/markets' ? 'Markets' : 'Alphas'}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="https://blog.kript.africa"
              target="_blank"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              Blog
            </Link>
          </li>
        </motion.ul>

        {/* Download button */}
        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="https://onelink.to/ff9jys"
            className="bg-[#003399] text-white hover:bg-white hover:text-[#003399] hover:border-[.5px] px-4 py-2 rounded"
          >
            Download
          </Link>
        </motion.div>

        {/* Hamburger Icon (Mobile View) */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative w-8 h-8">
            <span
              className={`absolute top-1/2 left-0 w-full h-[2px] bg-black transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-[6px]'
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-0 w-full h-[2px] bg-black transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`absolute top-1/2 left-0 w-full h-[2px] bg-black transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-[6px]'
              }`}
            ></span>
          </div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-[72px] left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 mt-2">
          <ul className="space-y-4 p-4 bg-[#DFEFFE] text-black rounded shadow-lg">
            <li className="relative">
              <div
                className="flex items-center justify-between px-3 py-2 hover:bg-[#DFEFFE] cursor-pointer"
                onClick={toggleServices}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <motion.ul
                className={`space-y-2 pl-6 overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isServicesOpen ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              >
                {['/swap', '/wallets', '/bill', '/recurring'].map((route) => (
                  <li key={route}>
                    <Link
                      href={route}
                      onClick={closeMenu}
                      className={`block px-4 py-2 hover:bg-[#DFEFFE] ${
                        isActive(route) ? 'bg-[#003399] text-white' : ''
                      }`}
                    >
                      {route === '/swap'
                        ? 'Instant Swap'
                        : route === '/wallets'
                        ? 'Wallets'
                        : route === '/bill'
                        ? 'Bill Payment'
                        : 'Recurring Purchase'}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </li>

            {['/about', '/support', '/markets', '/ambassador'].map((route) => (
              <li key={route}>
                <Link
                  href={route}
                  onClick={closeMenu}
                  className={`block px-3 py-2 hover:bg-[#DFEFFE] ${
                    isActive(route) ? 'bg-[#003399] text-white' : ''
                  }`}
                >
                  {route === '/about'
                    ? 'About'
                    : route === '/support'
                    ? 'Support'
                    : route === '/markets'
                    ? 'Markets'
                    : 'Alphas'}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="https://blog.kript.africa"
                target="_blank"
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-[#DFEFFE]"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;