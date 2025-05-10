import React from 'react';

const Wallets = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-12">
            <div className="bg-white rounded-xl max-w-6xl w-full p-2 ">
                <h1 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold  mb-6 text-center ">
                    The Best & Most <br />Secure Wallet
                </h1>
                <p className="text-[16px] md:text[20px] text-black text-center mb-6 break-normal max-w-3xl mx-auto">
                    Store and manage over <strong>20+ digital assets</strong> with confidence.
                    The Kript wallet is designed with top-notch security and user-friendly features to ensure your assets are safe and accessible anytime, anywhere on a centralized platform.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    <div className="flex flex-col items-center border shadow-2 rounded-2xl p-8 border-[#DFEFFE]">
                        <img src="/security.png" alt="Security" className="h-14 mb-2" />
                        <h3 className="font-semibold text-black mb-1">Advanced Security</h3>
                        <p className="text-black text-center text-sm">
                            Your assets are protected with industry-leading encryption and multi-factor authentication.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border shadow-2 rounded-2xl p-8 border-[#DFEFFE]">
                        <img src="/step2.png" alt="Easy to Use" className="h-14 mb-2" />
                        <h3 className="font-semibold text-black mb-1">User-Friendly</h3>
                        <p className="text-black text-center text-sm">
                            Effortlessly send, receive, and manage your crypto with Kript&apos;s intuitive interface.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border shadow-2 rounded-2xl p-8 border-[#DFEFFE]">
                        <img src="/yuan.png" alt="Multi-Asset" className="h-14 mb-2" />
                        <h3 className="font-semibold text-black mb-1">Multi-Asset Support</h3>
                        <p className="text-black text-center text-sm">
                            Manage Bitcoin, Ethereum, stablecoins, and 20+ other assets in one secure Kript wallet.
                        </p>
                    </div>
                    <div className="flex flex-col items-center border shadow-2 rounded-2xl p-8 border-[#DFEFFE]">
                        <img src="/support1.png" alt="24/7 Support" className="h-14 mb-2" />
                        <h3 className="font-semibold text-black mb-1">24/7 Support</h3>
                        <p className="text-black text-center text-sm">
                            The Kript team is always available to help you with any wallet-related questions or issues.
                        </p>
                    </div>
                </div>

                {/* More Content Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#DFEFFE] rounded-lg p-6 border border-[#003399] flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-black mb-2">Instant Transactions</h2>
                        <p className="text-black text-sm mb-2">
                            Send and receive crypto instantly, anytime, anywhere. No waiting, no hassle.
                        </p>
                        <ul className="list-disc list-inside text-black text-sm">
                            <li>Lightning-fast transfers</li>
                            <li>Low transaction fees</li>
                            <li>Real-time balance updates</li>
                        </ul>
                    </div>
                    <div className="bg-[#DFEFFE] rounded-lg p-6 border border-[#003399] flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-black mb-2">All-in-One Access</h2>
                        <p className="text-black text-sm mb-2">
                            Manage your money the modern way—buy, spend, send, or withdraw crypto instantly, all in one place with Kript.
                        </p>
                        <ul className="list-disc list-inside text-black text-sm">
                            <li>Use crypto for bills, airtime, and daily payments</li>
                            <li>No need for a bank account</li>
                            <li>Fast and secure transactions</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-black mb-2">Why Choose Kript Wallet?</h2>
                    <p className="text-black text-center max-w-2xl mb-4">
                        Kript wallet is built for everyone—from beginners to pros. Enjoy peace of mind with robust security, manage all your assets in one place, and get help whenever you need it. Experience the future of digital asset management on a secure, centralized platform.
                    </p>
                    <a
                        href="https://onelink.to/ff9jys"
                        className="bg-[#003399] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#002266] transition"
                    >
                        Get the Kript Wallet App
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Wallets;
