'use client'

import React from "react";

 const DeleteAcc = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-10">
        <h1 className="text-[30px] lg:text-[45px]">Account Deletion</h1>
        <p className="text-[14px] w-[80%] md:w-auto md:text-[16px] text-center">
          Please provide the following details to request the deletion of your
          account.
        </p>
      </div>
      <div className="flex flex-col w-[90%] md:w-1/2 items-start mt-8 mb-[10%] mx-auto lg:p-8 gap-4">
        <div className="w-[100%] md:w-[90%] flex flex-col gap-1">
          <label htmlFor="name-input">
            Name<span className="text-[red] font-semibold text-[20px]">*</span>
          </label>
          <input
            type="text"
            name="name-input"
            id="name-input"
            className="pl-[3.5px] border-[#003399] border-2 rounded-md h-[3rem]"
          />
        </div>
        <div className="w-[100%] md:w-[90%] flex flex-col gap-1">
          <label htmlFor="email-input">
            E-mail
            <span className="text-[red] font-semibold text-[20px]">*</span>
          </label>
          <input
            type="email"
            name="email-input"
            id="email-input"
            className="pl-[3.5px] border-[#003399] border-2 rounded-md h-[3rem]"
          />
        </div>
        <div className="w-[100%] md:w-[90%] flex flex-col gap-2">
          <label htmlFor="email-input">
            Reason for deletion
            <span className="text-[red] font-semibold text-[20px]">*</span>
          </label>
          <div className="gap-4 flex flex-col">
            <div className="flex align-middle gap-1">
              <input
                type="checkbox"
                name="one"
                className=" cursor-pointer"
                id="one"
              />{" "}
              <label htmlFor="one" className="text-[16px]  cursor-pointer">
                Slow services
              </label>
            </div>
            <div className="flex align-middle gap-1">
              <input
                type="checkbox"
                name="two"
                className=" cursor-pointer"
                id="two"
              />{" "}
              <label htmlFor="two" className="text-[16px]  cursor-pointer">
                I no longer need a crypto account.
              </label>
            </div>
            <div className="flex align-middle gap-1">
              <input
                type="checkbox"
                name="three"
                className=" cursor-pointer"
                id="three"
              />{" "}
              <label htmlFor="three" className="text-[16px]  cursor-pointer">
                The app is too complicated to use.
              </label>
            </div>
            <div className="flex  flex-col align-middle gap-3">
              <div className="">
                <input
                  type="checkbox"
                  name="others"
                  className=" cursor-pointer"
                  id="others"
                />{" "}
                <label htmlFor="others" className="text-[16px]  cursor-pointer">
                  Something else?
                </label>
              </div>
              <input
                type="text"
                name="others"
                id="others"
                placeholder="Please tell us here......."
                className="w-[100%] border-[1px] p-2 text-start border-solid border-[#039] h-[9rem] rounded-md"
              />
            </div>
          </div>
        </div>
        <input type="button" onClick={ ()=>alert('Request submitted Successfully 👋')} value="Submit" placeholder="Submit" className="p-4 rounded-md w-[100%] md:w-[90%] h=[3rem] bg-blue-k text-white-k" />
      </div>
    </>
  );
};

export default DeleteAcc