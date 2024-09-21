import React from "react";

const Moneytrack = () => {
  const moneydata = [
    {
      value: 0.5,
      type: "Food and Drink",
      amount: "872.400",
    },
    {
      value: 0.7,
      type: "Shopping",
      amount: "1.378.200",
    },
    {
      value: 0.5,
      type: "Housing",
      amount: "928.500",
    },
    {
      value: 0.3,
      type: "Transportation",
      amount: "420.700",
    },
    {
      value: 0.4,
      type: "Vehicle",
      amount: "520.000",
    },
  ];
  return (
    <>
      <div className="w-[95%]  p-4 flex flex-col gap-5  ">
        {moneydata?.map((moneydata, index) => {
          return (
            <>
              <div key={index}>
                <div className="flex flex-row justify-between tracking-[0.46px] text-[13px]">
                  <label
                    htmlFor="Food-and-Drink"
                  >
                    {moneydata.type}
                  </label>
                  <p>{moneydata.amount}</p>
                </div>
                <meter
                  className="w-full"
                  id="Food-and-Drink"
                  value={moneydata.value}
                  min="0"
                  max="1"
                  low="0.3"
                  high="0.8"
                  optimum="0.5"
                >
                  {moneydata.value * 100}%
                </meter>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Moneytrack;
