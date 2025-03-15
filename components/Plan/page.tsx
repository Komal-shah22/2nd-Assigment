import React from "react";

const details: string[] = [
  "Sync unlimited devices",
  "10 GB monthly uploads",
  "200 MB max. note size",
  "Customize Home dashboard and access extra widgets",
  "Connect primary Google Calendar account",
  "Add due dates, reminders, and notifications to your tasks",
];

const cardInfo = [
  {
    heading: "free",
    price: "$0",
    paragrapgh: "Capture ideas and find them quickly",
  },
  {
    heading: "personal",
    price: "$11.99",
    paragrapgh: "Keep home and family on track",
  },
  {
    heading: "organization",
    price: "$49.99",
    paragrapgh: "Capture ideas and find them quickly",
  },
];

const Plan = () => {
  return (
    <div className="w-full flex items-center justify-between py-10 flex-col gap-5">
      {/* Heading Section */}
      <section className="flex items-center justify-center flex-col sm:w-3/5 w-full gap-5 px-4">
        <h1 className="sm:text-5xl text-4xl font-bold text-center">
          Choose Your Plan
        </h1>
        <p className="text-center sm:text-[16px] text-sm">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full flex flex-wrap items-center justify-center gap-6 px-4">
        {cardInfo.map((val, index) => (
          <div
            key={index}
            className={`sm:w-[30%] xs:w-[70%] w-[90%] ${
              index !== 1
                ? "py-4 px-6 gap-4 border-[#FFE492] text-black border-[1px] hidden sm:flex"
                : "bg-[#043873] py-6 px-6 gap-6 flex"
            } rounded-lg flex-col items-center sm:items-start text-center sm:text-left`}
          >
            {/* Plan Heading */}
            <h2 className="text-lg font-semibold capitalize">{val.heading}</h2>
            {/* Plan Price */}
            <h3
              className={`text-2xl font-bold ${index === 1 && "text-[#FFE492]"}`}
            >
              {val.price}
            </h3>
            <p>{val.paragrapgh}</p>

            {/* Features List */}
            <ul className="flex flex-col gap-3 mt-3">
              {details.map((item, ind) => (
                <li key={ind} className="relative flex items-center">
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-5 bg-contain ${
                      index === 1
                        ? "bg-[url('/icon.png')]"
                        : "bg-[url('/icon1.png')]"
                    }`}
                  ></span>
                  <h4 className="ml-8">{item}</h4>
                </li>
              ))}
            </ul>

            {/* Get Started Button */}
            <button className="mt-6 bg-[#4F9CF9] rounded-md px-6 py-3 text-white text-sm flex items-center justify-center w-full sm:w-auto">
              Get Started
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Plan;
