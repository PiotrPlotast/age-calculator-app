import { useState } from "react";

export default function AgeCalculator() {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  function handleform(e) {
    e.preventDefault();

    const isValidDate = (d, m, y) => {
      const date = new Date(y, m - 1, d);
      const today = new Date();
      return (
        date.getFullYear() === parseInt(y) &&
        date.getMonth() === m - 1 &&
        date.getDate() === parseInt(d) &&
        date <= today
      );
    };

    if (!isValidDate(birthDay, birthMonth, birthYear)) {
      alert("Please enter a valid date.");
      return;
    }
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setYear(ageYears);
    setMonth(ageMonths);
    setDay(ageDays);
    setIsCalculated(true);
  }
  return (
    <div className="bg-White mx-4 pt-12 pb-16 px-4 rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] sm:rounded-br-[10rem] max-w-3xl sm:px-12">
      <form
        onSubmit={handleform}
        className="flex flex-col items-center gap-12 sm:items-start sm:gap-8"
      >
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="day"
              className="uppercase font-poppinsBold text-xs text-SmokeyGrey tracking-[0.2rem] -translate-y-1 -translate-x-1"
            >
              day
            </label>
            <input
              type="number"
              id="day"
              name="day"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              className="max-w-24 h-14 border rounded-md pl-4 text-2xl font-poppinsBold sm:max-w-36 sm:h-16"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="month"
              className="uppercase font-poppinsBold text-xs text-SmokeyGrey tracking-[0.2rem] -translate-y-1 -translate-x-1"
            >
              month
            </label>
            <input
              type="number"
              id="month"
              name="month"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              className="max-w-24 h-14 border rounded-md pl-4 text-2xl font-poppinsBold sm:max-w-36 sm:h-16"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="uppercase font-poppinsBold text-xs text-SmokeyGrey tracking-[0.2rem] -translate-y-1 -translate-x-1"
            >
              year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="max-w-24 h-14 border rounded-md pl-4 text-2xl font-poppinsBold sm:max-w-36 sm:h-16"
            />
          </div>
        </div>
        <button className="bg-purple rounded-full p-4 z-10 sm:self-end  sm:p-6">
          <img
            src="/images/icon-arrow.svg"
            alt="calculate age"
            className="w-6 sm:w-10"
          />
        </button>
      </form>
      <hr className="-translate-y-7 z-0 sm:-translate-y-10" />
      <div className="mt-8">
        <h1 className="text-5xl font-poppinsExtraBoldItalic sm:text-7xl md:text-8xl">
          <span className="text-purple">{isCalculated ? year : "--"}</span>{" "}
          years
        </h1>
        <h1 className="text-5xl font-poppinsExtraBoldItalic sm:text-7xl md:text-8xl">
          <span className="text-purple">{isCalculated ? month : "--"}</span>{" "}
          months
        </h1>
        <h1 className="text-5xl font-poppinsExtraBoldItalic sm:text-7xl md:text-8xl">
          <span className="text-purple">{isCalculated ? day : "--"}</span> days
        </h1>
      </div>
    </div>
  );
}
