import React from "react";
import Link from "next/link"
import { FaInstagram, FaLinkedinIn, FaTelegram, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
  return (
    <div className="w-full bg-[#DFEFFE] lg:h-fit">
      <div className="lg:flex block justify-between items-start w-full md:w-[90%] px-2 pt-[5%] pb-[2%] lg:w-[80%] mx-auto max-w-7xl">
        <div className="lg:w-2/6 w-[90%] p-[5%] lg:p-0 flex flex-col gap-[2rem] items-start">
          <Link href="/">
            <img src={"logo.png"} alt="Logo" className="h-8 md:h-10" />
          </Link>
          <p>
            Kript Africa was designed to make cryptocurrency transactions
            faster,easier and safer for both newcomers and experts.
          </p>
          <div className="flex w-full gap-4">
            <Link href="https://x.com/kriptafrica">
              <BsTwitterX size={30} />
            </Link>
            <Link href="https://www.tiktok.com/@kriptafrica">
              <FaTiktok size={30} />
            </Link>
            <Link href="https://www.instagram.com/kript.africa/">
              <FaInstagram size={30} />
            </Link>
            <Link href="https://t.me/kript_africa">
              <FaTelegram size={30} />
            </Link>
            <Link href="https://www.linkedin.com/company/kript-africa">
              <FaLinkedinIn size={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-row lg:gap-x-25 mt-8 md:mt-0">
          <div className="lg:w-2/6 md:w-1/2 w-[50%] pl-[5%] flex flex-col gap-6 pb-[2rem] items-start">
            <h2 className="lg:text-[22px] text-[18px] font-semibold">COMPANY</h2>
            <div className="flex flex-col gap-4">
              <Link href='https://onelink.to/ff9jys'>Buy</Link>
              <Link href='https://onelink.to/ff9jys'>Sell</Link>
              <Link href='https://onelink.to/ff9jys'>Swap</Link>
              <Link href="/markets">Market</Link>
              <Link href="/about">About Us</Link>
            </div>
          </div>
          <div className="lg:w-2/6 w-fit pl-[5%] flex flex-col gap-6 pb-[2rem] items-start">
            <h2 className="lg:text-[22px] text-[18px] font-semibold">LEARN</h2>
            <div className="flex flex-col gap-4">
              <Link href="/buy-usdt">Buy USDT</Link>
              <Link href="/buy-crypto">Buy Crypto</Link>

            </div>
          </div>
        </div>
        <div className="flex flex-row mt-8 lg:ml-8 gap-10 md:mt-0">
          <div className="lg:w-3/6 w-full pl-[5%] flex flex-col gap-6 pb-[2rem] items-start">
            <h2 className="lg:text-[22px] text-[18px] font-semibold">LEGAL</h2>
            <div className="flex flex-col gap-4">
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of Use</Link>

            </div>
          </div>
          <div className="lg:w-1/6 w-full flex flex-col gap-6 items-start">
            <h2 className="lg:text-[22px] text-[18px] font-semibold">SUPPORT</h2>
            <div className="flex flex-col gap-4">
              <a href="mailto:support@kript.africa">support@kript.africa</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="w-[90%] md:w-[90%] px-2 mt-6 mx-auto max-w-7xl lg:w-[80%] lg:pl-0">
        Kript 2025. ALL RIGHTS RESERVED
      </p>
      <p className="w-[90%] md:w-[90%] px-2 mt-6 pb-8 mx-auto max-w-7xl lg:pl-0 gap-2 text-[13px] lg:w-[80%] ">
        The information available on our website is intended solely for educational, informational, and reference purposes regarding the various products and services offered by Kript. While we strive to provide accurate and up-to-date details, this content should not be considered as financial advice, nor should it be solely relied upon for making financial or investment decisions. <br /><br />
        All our products and services can be accessed through the Kript App; however, availability is subject to regional restrictions, regulatory requirements, and operational limitations. Certain jurisdictions may impose legal constraints that affect access to specific features or services, and it is the responsibility of users to ensure they comply with the relevant laws and regulations in their country or region. <br /><br />
        We are committed to maintaining the reliability and accuracy of the information presented on our platform. However, we strongly encourage users to conduct their own independent research, evaluate their financial goals, and assess their level of expertise and risk tolerance before engaging in any cryptocurrency-related transactions. The crypto market is highly volatile, and users should be aware of the risks associated with trading or utilizing digital assets.

        Kript does not provide investment, tax, or financial advice, and we recommend consulting with a qualified professional before making any significant financial decisions.
      </p>
    </div>
  );
};

export default Footer;
