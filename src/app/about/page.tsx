'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <motion.div
        className="bg-[url(/waves.png)]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 py-10 md:bg-[url(/rocket.png)] bg-no-repeat bg-top-right bg-size-contain">
          <motion.h1
            className="text-[20px] md:text-[25px] text-[#003399] font-bold text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-2 text-[35px] md:text-[40px] font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Embracing Simplicity and Accessibility
          </motion.p>
          <motion.p
            className="flex justify-center items-center text-center mt-4 text-[16px] md:text-[20px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            At the heart of Kript Africa&apos;s mission lies a dedication to making cryptocurrency accessible to all. Recognising the diverse needs and backgrounds of our users, we have developed a user-friendly platform that empowers individuals, regardless of their level of expertise, to participate in the digital economy with confidence.
          </motion.p>
        </div>
        <motion.div
          className="max-w-6xl mx-auto mb-30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Image
            src="/fast.png"
            alt="About Us"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Vision and Mission Section */}
      <motion.div
        className="max-w-6xl mx-auto p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[25px] md:text-[40px] font-bold text-center mt-10">
          Our Vision and Mission at a glance
        </h2>
        <div className="flex justify-center items-center flex-col md:flex-row mt-30 gap-10 p-2">
          <motion.div
            className="w-98% md:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/ceci.png"
              alt="Vision"
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
              loading='lazy'
            />
          </motion.div>
          <motion.div
            className="w-98% md:w-1/2 p-2 md:p-0 f"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <p className="text-[25px] md:text-[35px] font-bold text-[#003399]">
            FREEDOM TO USE YOUR MONEY WHENEVER YoU WANT. 
            </p> */}
            <p className="mt-4 text-[16px] md:text-[20px]">
              <span className="text-[25px] md:text-[35px] font-bold text-[#003399]">Our mission</span> is to give 
              people the freedom to use their money whenever they want, without unnecessary
              restrictions or delays. We envision a world where financial control is fully in your
              hands—where you can access, spend, and move your money freely, at any time, and for any purpose.
              At the same time, we aim to give you the freedom of crypto without borders, empowering you to explore,
              transact, and interact with digital assets globally. We want to remove barriers, simplify access, and
              ensure that everyone can experience the true potential of decentralized finance, enabling a future where
              your money works for you, anytime, anywhere, and without limits.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center items-center flex-col md:flex-row-reverse mt-10 md:mt-30 mb-30 gap-10">
          <motion.div
            className="w-98% md:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/solution.png"
              alt="Vision"
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
              loading='lazy'
            />
          </motion.div>
          <motion.div
            className="w-98% md:w-1/2 p-2 md:p-0 flex flex-col justify-start items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <p className="text-[25px] md:text-[35px] font-bold text-[#003399]">
              Seamless Crypto Trading Experience
            </p> */}
            <p className="mt-4 text-[16px] md:text-[20px]">
              <span className="text-[25px] md:text-[35px] font-bold text-[#003399]">Our vision</span> is to make 
              crypto simple, reliable, and accessible for everyone, regardless of experience or background.
              We aim to build a seamless, fully automated platform that removes complexity, eliminates unnecessary barriers, and
              empowers users to confidently manage their finances and digital assets. By bridging the gap between traditional finance
              and the evolving world of crypto, we strive to provide tools and solutions that make digital currencies practical,
              secure, and usable in everyday life. Our goal is to enable individuals to explore new financial opportunities, transact globally
              without friction, and embrace the freedom and potential that a borderless financial system offers.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
