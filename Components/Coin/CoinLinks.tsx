import React from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

type Props = {
  coin: COIN;
};

const CoinLinks = ({ coin }: Props) => {
  return (
    <section className="p-2 space-y-2 bg-muted  rounded-md shadow-md">
      <h3 className="font-semibold text-sm">Official links</h3>
      <div className="flex items-center gap-2 flex-wrap ">
        {coin?.links?.slice(0, 3).map((link) => (
          <Link
            className="px-2 py-1 rounded-3xl text-xs bg-background text-primary flex items-center gap-1"
            href={link?.url}
          >
            <Globe size={15} /> Website
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoinLinks;
