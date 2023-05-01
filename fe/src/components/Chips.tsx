import Image from "next/image";
import Link from "next/link";

const Chips = ({ datas }: any) => {
  return (
    <div className="container mx-auto  flex flex-row flex-wrap">
      {datas.map((data: any, idx: any) => {
        return (
          <div
            className="flex justify-center items-center m-1 px-2 py-2 rounded  bg-white border border-[#bcbdbe]  text-base text-gray font-medium"
            key={idx}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default Chips;
