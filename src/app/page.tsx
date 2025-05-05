import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-7xl bg-[url(/waves.png)] md:mt-20 p-4 md:w-[80%] mx-auto">
        <h1 className="flex flex-col justify-center items-center text-black text-center font-poppins font-semibold text-[30px] md:text-[48px] lg:text-[64px] leading-[48px] md:leading-[100px] bg-[url(/rocket.png)] bg-no-repeat bg-size-[10%] bg-right-top">
          Simplify Your Transactions
          <p className="flex items-center gap-4">with
            <Image src='/logo.png' alt="Logo"
              width={100}
              height={50}
              className="md:h-15 h-10 w-auto bg-[#DFEFFE] rounded-4xl p-2 px-6" />
          </p>
        </h1>
        <p className="bg-transparent flex flex-col justify-center items-center text-center text-[16px] md:text-[20px]">
          Open a free account in minutes right from your phone and make your money go further.
        </p>
        {/* Call to Action Button */}
        <div className="w-[70%] mx-auto flex flex-col md:flex-row justify-center gap-4 mt-10">
          <Link href={'https://onelink.to/ff9jys'}>
            <Image src="/app.png" alt="App Store" width={150} height={50} className="w-auto h-[70px] mx-auto md:w-auto md:h-[87px]" />
          </Link>
          <Link href={'https://onelink.to/ff9jys'}>
            <Image src="/play.png" alt="Google Play" width={150} height={50} className="w-auto h-[70px] mx-auto md:w-auto md:h-[87px]" />
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#DFEFFE] from-70% via-transparent to-transparent">
        <div className="">
          <Image src="/phoneup1.png" alt="Phone" width={500} height={500} className="hidden lg:block max-w-6xl w-full mx-auto h-auto" />
          <Image src="/phone-small.png" alt="Phone" width={500} height={500} className="lg:hidden max-w-6xl w-full mx-auto h-auto" />
        </div>
        <div className="w-11/12 m-auto md:w-[70%] mx-auto px-2 z-0">
        <Marquee
            speed={25}
            className="flex flex-row gap-[20rem] justify-between mt-[-5%] pb-[2%] lg:max-w-[80%]"
          >
            <img src='/btc.png' alt="Bitcoin" className="mr-[5rem]" />
            <img src='usdt.png' alt="USDT" className="mr-[5rem]" />
            <img src='/bnb.png' alt="Binance coin" className="mr-[5rem]" />
            <img src='litecoin.png' alt="Litecoin" />
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10 max-w-7xl mx-auto">
        <div className="flex flex-col w-[90%] lg:w-[40%] mx-auto px-2 gap-8">
          <p className="text-[35px] md:text-[50px] font-bold break-words text-wrap">
            <span className="text-[#003399]">Kript Africa</span> has all you need
          </p>
          <p className="text-[16px] md:text-[20px] break-words text-wrap">
            Kript Africa was designed to make cryptocurrency transactions faster, easier and safer for both newcomers and experts. Make easy transfers and withdrawals on Kript Africa, and keep track of all of your crypto transactions in one place.
          </p>
          <Link href="/about" className="text-[16px] md:text-[20px] bg-[#003399] p-4 w-fit rounded-lg text-white">
            Learn more
          </Link>
        </div>
        <div className="w-[90%] lg:w-1/2 mx-auto px-2">
          <Image
            src={"/pframe.png"}
            alt="Phone"
            width={100}
            height={10}
            sizes="max-width: 100% max-width: 100%"
            className="mt-8 md:mt-0 w-full md:w-[90%] mx-auto h-[90%] md:p-15"
          />
        </div>
      </div>
      <div className="h-auto bg-[#003399] bg-cover bg-no-repeat bg-center bg-[url('/waves.png')] mt-20">
        <h1 className="text-center lg:w-4/6 m-auto p-8 pt-12 text-white text-[28px] md:text-[38px] lg:text-[40px] lg:max-w-7xl">
          Your fully trusted platform to buy, trade and invest in crypto
        </h1>
        <div className="lg:flex block justify-between items-center md:w-[90%] px-2 mt-6 mx-auto max-w-7xl">
          <div className="lg:flex lg:flex-row w-[95%] md:w-[90%] mx-auto gap-2 mb-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:w-2/3 m-2 lg:max-h-[25rem]">
              <div className="pb-6 pl-6 md:w-[70%] md:mx-auto lg:w-1/2 bg-white w-full h-[20rem] lg:h-[20rem] flex flex-col justify-end pt-20 lg:pl-5 lg:rounded-s-xl lg:rounded-none rounded-xl mb-4">
                <img src={'/card.png'} alt="Card" className="w-14" /> <br />
                <h1 className="text:[20px] font-semibold md:text-[30px] lg:text-[20px]">
                  Flexible transactions
                </h1>
                <p className="text:[14px] break">
                  Get paid by Kript Africa in any currency, or combination of
                  currencies you want and buy in any currency you want.
                </p>
              </div>
              <div className="md:w-[70%] md:mx-auto overflow-hidden mb-[2%] md:mb-0 flex flex-row h-[20rem] lg:h-[20rem] w-full bg-white lg:w-1/2 lg:rounded-e-xl rounded-xl lg:rounded-none">
                <img
                  src={"/iphoneh.png"}
                  alt="Swap"
                  className="mt-[10%] mx-auto lg:p-[10%] lg:pb-0"
                />
              </div>
            </div>
            <div className="md:w-[70%] md:mx-auto md:justify-end m-2 h-[20rem] lg:w-1/2 bg-white pb-6 pl-6 lg:h-[20rem] flex flex-col justify-end lg:justify-center pt-20 lg:pl-5 rounded-xl">
              <img src={'/lock.png'} alt="Card" className="w-14" /> <br />
              <h1 className="text:[20px] md:text-[30px] font-semibold lg:text-[22px]">
                Privacy
              </h1>
              <p className="text:[14px] break">
                Your accounts privacy and security is our utmost priority so
                your personal details will only be shared with your permission.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-4 block justify-between items-center w-[90%] md:w-[80%] px-2 mt-6 mx-auto max-w-6xl pb-[5%]">
          <div className="h-[20rem] flex flex-col justify-end pb-6 pl-6 rounded-xl mb-4 bg-white w-full md:w-[70%] md:mx-auto lg:w-1/3">
            <img src={'/security.png'} alt="Secure" className="w-14" /> <br />
            <h1 className="text:[20px] md:text-[30px] font-semibold lg:text-[22px]">
              Secure Transactions
            </h1>
            <p className="text:[14px] break">
              Kript Africa is a secure and reliable platform that ensure safe
              transactions for users.
            </p>
          </div>
          <div className="h-[20rem] flex flex-col justify-end pb-6 pl-6 rounded-xl mb-4 bg-white w-full md:w-[70%] md:mx-auto lg:w-1/3">
            <img src={"/naira.png"} alt="Currency Swap" className="w-14" /> <br />
            <h1 className="text:[20px] md:text-[30px] font-semibold lg:text-[22px]">
              Fiat Deposits
            </h1>
            <p className="text:[14px] break">
              We accept deposits of major fiat currencies including USDT, NGN.
            </p>
          </div>
          <div className="h-[20rem] flex flex-col justify-end pb-6 pl-6 rounded-xl mb-4 bg-white w-full md:w-[70%] md:mx-auto lg:w-1/3">
            <img src={"support.png"} alt="24/7 Support" className="w-14" /> <br />
            <h1 className="text:[20px] md:text-[30px] font-semibold lg:text-[22px]">
              24/ 7 Support
            </h1>
            <p className="text:[14px] break">
              Having an issue with trading. Our support team is readily at your
              service.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row justify-center gap-4 items-center mt-10">
        <div className="w-full lg:w-1/2 mx-auto px-2">
          <Image
            src={"/signup.png"}
            alt="Phone"
            width={100}
            height={10}
            sizes="max-width: 100% max-width: 100%"
            className="mt-8 md:mt-0 w-full md:w-[90%] mx-auto h-[90%] p-4 md:p-15 lg:p-0"
          />
        </div>
        <div className="w-full lg:w-1/2 mx-auto p-2 md:p-20">
          <p className="text-[35px] md:text-[45px] font-bold break-words text-wrap">
            How to trade with <span className="text-[#003399]">confidence</span>
          </p>
          <p className="text-[16px] md:text-[20px] break-words text-wrap">
            Begin your trading journey with these easy steps
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center items-center gap-2 mt-2 border-[#E3E3E3]  border-[1px] rounded-lg p-4">
              <div className="w-[20%]">
                <Image src="/step1.png" alt="Step 1" width={50} height={50} className="w-auto h-auto" />
              </div>
              <div className="w-[80%]">
                <p className="text-[16px] md:text-[20px] font-bold break-words text-wrap">
                  Create an account
                </p>
                <p className="text-[14px] md:text-[16px] break-words text-wrap">
                  Sign up for a free account and verify your identity.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-2 justify-center items-center border-[#E3E3E3]  border-[1px] rounded-lg p-4">
              <div className="w-[20%]">
                <Image src="/step2.png" alt="Step 2" width={50} height={50} className="w-auto h-auto" />
              </div>
              <div className="w-[80%]">
                <p className="text-[16px] md:text-[20px] font-bold break-words text-wrap">
                  Fund your account
                </p>
                <p className="text-[14px] md:text-[16px] break-words text-wrap">
                  Deposit funds into your account using your preferred payment method.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-2 justify-center items-center border-[#E3E3E3]  border-[1px] rounded-lg p-4">
              <div className="w-[20%]">
                <Image src="/step3.png" alt="Step 3" width={50} height={50} className="w-auto h-auto" />
              </div>
              <div className="w-[80%]">
                <p className="text-[16px] md:text-[20px] font-bold break-words text-wrap">
                  Start trading
                </p>
                <p className="text-[14px] md:text-[16px] break-words text-wrap">
                  Buy, sell, and trade cryptocurrencies with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-waves2 `lg:h-[25rem] w-full bg-[#003399] bg-center mt-[10%]">
        <div className="flex flex-col lg:h-[25rem] mx-auto max-w-7xl lg:flex lg:flex-row gap-6 justify-between w-[90%] md:w-[80%] px-2 mt-[8%]">
          <div className="lg:w-1/2 md:w-[88%] p-[5%] px-[0] flex flex-col gap-4">
            <p className="text-[25px] text-white md:text-[35px] font-bold">
              Try the crypto wallet <br />
              of the future, today
            </p>
            <p className="text-white lg:text-[18px] md:text-[20px]">
              Add funds to your crypto account through bank transfer and start
              trading crypto whenever you choose to. Conduct speedy crypto
              transactions using the Kript platform today.
            </p>
            <Link href="https://onelink.to/ff9jys">
              <button className="bg-white mt-[5%] h-[3rem] rounded-lg p-3">
                Try out Kript Wallet
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 w-[100%] flex flex-col-reverse lg:flex-none justify-start bg-thumb bg-no-repeat bg-left-top">
            <img
              src={"image.png"}
              alt="About Crypto"
              className=" mx-auto max-h-[40rem] lg:max-h-[35rem]"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:flex-row flex-col flex justify-center items-center bg-white h-[10rem] mt-10 z-0 gap-[0.5rem]">
        <div className="bg-[#DFEFFE] pl-3 pr-3 h-13 md:h-20 flex items-center rounded-full">
          <img src={"logo.png"} alt="kript" className="h-6 md:h-10" />
        </div>
        <h1 className="text-[18px] md:text-[30px] font-semibold">
          The trading platform you can trust
        </h1>
      </div>

    </div>
  );
}
