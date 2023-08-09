"use client";
import React from "react";

interface Proptype {
  setTimePeriod: (e: string) => any;
}
const PickTp = ({ setTimePeriod }: Proptype) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimePeriod(e.target.value);
  };
  return (
    <div>
      <select
        className="w-fit outline-none rounded-md p-1 bg-muted"
        onChange={handleChange}
      >
        <option value="24h">24h</option>
        <option value="7d">7 days</option>
        <option value="30d">30 days</option>
        <option value="3m">3 months</option>
        <option value="1y">1 year</option>
        <option value="3y">3 years</option>
        <option value="5y">5 years</option>
      </select>
    </div>
  );
};

export default PickTp;
