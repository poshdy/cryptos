"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Proptype {
  setTimePeriod: (e: string) => any;
}
const PickTp = ({ setTimePeriod }: Proptype) => {
  const {} = usePathname();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimePeriod(e.target.value);
  };
  return (
    <div>
      <select
        className="w-fit outline-none rounded-md p-1 bg-muted"
        onChange={handleChange}
      >
        <option value="3h">3h</option>
        <option value="24h">24h</option>
        <option value="7d">7 days</option>
        <option value="30d">30 days</option>
        <option value="3m">3 months</option>
      </select>
    </div>
  );
};

export default PickTp;
