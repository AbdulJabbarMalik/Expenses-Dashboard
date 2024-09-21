import React from "react";

// React Icons
import { FaShoppingCart } from "react-icons/fa";
import { FaBusSimple } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { TbDots } from "react-icons/tb";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Expenselist } from "./expenselist";

const Expensecomponent = ({ className, ...props }) => {
  const data = [
    {
      day: "Today",
      items: [
        {
          img: <FaShoppingCart />,
          type: "Grocery",
          colour: "bg-[#32A7E2]",
          date: new Date().toLocaleTimeString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          descrip: "• Belanja di pasar",
          amount: "-326.800",
        },
        {
          img: <FaBusSimple />,
          type: "Transportation",
          colour: "bg-[#B548C6]",
          date: new Date().toLocaleTimeString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          descrip: "• Naik bus umum",
          amount: "-15.000",
        },
        {
          img: <FaHouseChimney />,
          type: "Housing",
          colour: "bg-[#FF8700]",
          date: new Date().toLocaleTimeString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          descrip: "• Bayar Listrik",
          amount: "-185.750",
        },
      ],
    },
    {
      day: "Monday, 23 March 2020",
      items: [
        {
          img: <MdFoodBank />,
          type: "Food and Drink",
          colour: "bg-[#DC3434]",
          date: new Date().toLocaleTimeString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          descrip: "• Makan Steak",
          amount: "-156.000",
        },
        {
          img: <IoMdPlayCircle />,
          type: "Entertainment",
          colour: "bg-[#4BA83D]",
          date: new Date().toLocaleTimeString("en-Us", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          descrip: "• Nonton Bioskop",
          amount: "-35.200",
        },
      ],
    },
  ];
  return (
    <>
      <Card className={cn("w-[100%]", className)} {...props}>
        {data?.map((datagroup, groupindex) => {
          return (
            <>
              <div key={groupindex}>
                <CardHeader>
                  <CardTitle>
                    <h1>{datagroup.day}</h1>
                  </CardTitle>
                  <TbDots
                    color="#D8D8D8"
                    size={25}
                    cursor={"pointer"}

                   
                  />
                </CardHeader>
                <div className="datalist">
                  {datagroup?.items.map((item, itemindex) => (
                    <Expenselist
                      key={itemindex}
                      icon={item.img}
                      type={item.type}
                      date={item.date}
                      discription={item.descrip}
                      colour={item.colour}
                      amount={item.amount}
                    />
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </Card>
    </>
  );
};

export default Expensecomponent;
