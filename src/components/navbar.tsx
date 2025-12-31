'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWallet } from 'react-icons/fa';
import { RiSwap2Fill } from 'react-icons/ri';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
                    className="block items-center justify-center px-10 py-10 rounded-2xl hover:bg-[#DFEFFE] gap-[40px]"
                  >
                    <RiSwap2Fill size={39} color="#003399" /> <br />
                    <p className="text-[20px] font-bold text-[#003399]">
                      Instant Swap
                    </p>
                    <p className="text-[16px] font-normal">
                      Swap your crypto assets instantly with Kript Africa.
                    </p>
                  </Link>
                  <Link
                    href="/wallets"
                    className="block items-center justify-center px-10 py-10 rounded-2xl hover:bg-[#DFEFFE] gap-[40px]"
                  >
                    <FaWallet size={35} color="#003399" /> <br />
                    <p className="text-[20px] font-bold text-[#003399]">
                      Wallets
                    </p>
                    <p className="text-[16px] font-normal">
                      Securely store and manage your crypto assets with Kript
                      Africa.
                    </p>
                  </Link>
                  <Link
                    href="/bill"
                    className="block items-center justify-center px-10 py-10 rounded-2xl hover:bg-[#DFEFFE] gap-6"
                  >
                    <FaMoneyBillTransfer size={39} color="#003399" /> <br />
                    <p className="text-[20px] font-bold text-[#003399]">
                      Bill Payment
                    </p>
                    <p>
                      Pay your bills effortlessly using cryptocurrency with
                      Kript Africa.
                    </p>
                  </Link>
                  <Link
                    href="/recurring"
                    className="block items-center justify-center px-10 py-10 rounded-2xl hover:bg-[#DFEFFE] gap-6"
                  >
                    <BiPurchaseTagAlt size={39} color="#003399" /> <br />
                    <p className="text-[20px] font-bold text-[#003399]">
                      Recurring Purchase
                    </p>
                    <p>
                      Set up recurring purchases of your favorite
                      cryptocurrencies with Kript Africa.
                    </p>
                  </Link>
                </div>
              </div>
            </motion.ul>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/markets"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              Markets
            </Link>
          </li>
          <li>
            <Link
              href="https://blog.kript.africa"
              target="_blank"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/ambassador"
              className="hover:bg-[#DFEFFE] px-3 py-2 rounded"
            >
              Alphas
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
                <li>
                  <Link
                    href="/swap"
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-[#DFEFFE]"
                  >
                    Instant Swap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wallets"
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-[#DFEFFE]"
                  >
                    Wallets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bill"
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-[#DFEFFE]"
                  >
                    Bill Payment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recurring"
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-[#DFEFFE]"
                  >
                    Recurring Purchase
                  </Link>
                </li>
              </motion.ul>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-[#DFEFFE]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-[#DFEFFE]"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/markets"
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-[#DFEFFE]"
              >
                Markets
              </Link>
            </li>
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
            <li>
              <Link
                href="/ambassador"
                onClick={closeMenu}
                className="block px-3 py-2 hover:bg-[#DFEFFE]"
              >
                Alphas
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
