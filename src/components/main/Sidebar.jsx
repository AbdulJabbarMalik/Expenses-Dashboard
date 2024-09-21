import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const routes = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Expenses",
      path: "/expenses",
    },
    {
      name: "Wallets",
      path: "/wallets",
    },
    {
      name: "Summary",
      path: "/summary",
    },
    {
      name: "Accounts",
      path: "/accounts",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];
  return (
    <>
      <nav className="flex flex-col justify-center  items-center w-full h-full bg-black">
        <div>
          <img src="/profile.svg" className="mb-14 rounded-xl" />
          <h2 className="text-white font-semibold text-2xl">Samantha</h2>
          <p className="text-white opacity-60">
            <a href="mailto:samantha@email.com">samantha@email.com</a>
          </p>
        </div>
        <div className="w-1/2 h-2/4 mr-9">
          <ul className=" flex flex-col gap-5 mt-16 h-full  border-black">
            {routes.map(({ name, path }) => {
              return (
                <li key={name} className={name == "Expenses" ? "text-white" : "text-white opacity-60"}>
                  <Link className=" text-xl font-semibold " href={path}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
