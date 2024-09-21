import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Savemoney = () => {
  return (
    <>
      <div className=" w-[70%] h-full p-4 bg-[#EDF0F6] rounded-3xl flex flex-col justify-between relative ">
        <div className="img-box flex flex-row justify-between absolute top-[-50px]   w-[80%]">
            <Image
            src="/box.svg"
            width={80}
            height={50}
            />
            <Image
            src="/plant.svg"
            width={50}
            height={50}
            />
        </div>
        <div className="mt-[40px]">
          <h2 className="text-[16px] font-semibold">Save more money</h2>
          <p className="text-[12px] font-normal">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <Button>View Tips</Button>
      </div>
    </>
  );
};

export default Savemoney;
