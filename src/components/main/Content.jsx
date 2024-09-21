"use client";
import Image from "next/image";
import { Chartcomponent } from "../chartcomponent";
import Expensecomponent from "../expensecomponent";
import Moneytrack from "../moneytrack";
import Savemoney from "../savemoney";

import { IoIosAddCircleOutline } from "react-icons/io";

const Content = () => {
  const profilePic = ["/p1.svg", "/p2.svg", "/p3.svg"];
  return (
    <>
      <div className="grid grid-cols-[900px_1fr] h-full">
        <div className="flex flex-col justify-start items-center">
          <div className="w-[90%]">
            <div className="w-[100%]  relative pt-4">
              <div className="flex flex-row absolute right-8 p-1">
              {profilePic.map((pic , picindex) => {
                return (
                  <>
                    <div key={picindex} className="rounded-[50%] overflow-hidden profile_pic ">
                      <Image
                        src={pic}
                        width={25}
                        height={25}
                        alt="profile pic"
                        style={{objectFit:"cover" , borderRadius:"50%"}}
                      />
                    </div>
                  </>
                );
              })}
              <IoIosAddCircleOutline size={30} color="gray" className="ml-2"/>

              </div>

              <Chartcomponent />
            </div>
          </div>
          <div className=" w-[90%] ">
            <Expensecomponent />
          </div>
        </div>
        <div className="bg-[#F9FAFC] flex flex-col justify-around items-center h-[100%] ">
          <div className="moneyTracking w-full p-6  flex flex-col justify-center items-center ">
            <h2 className="text-center font-semibold tracking-[0.33px] text-[20px]">
              Where your money go?
            </h2>
            <Moneytrack />
          </div>
          <div className="saveMoney w-full h-[40%] p-4 flex justify-center items-center">
            <Savemoney />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
