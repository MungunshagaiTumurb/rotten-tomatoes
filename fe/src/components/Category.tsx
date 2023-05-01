import Image from "next/image";
import Link from "next/link";
const Category = ({ datas }: any) => {
  return (
    <div className="container mx-auto  flex flex-row flex-wrap">
      {datas.map((data: any, idx: any) => {
        return (
          <div
            className="flex justify-center items-center m-1 px-2 py-2 rounded-3 bg-gray-700 text-base text-white font-medium"
            key={idx}
          >
            <Link
              className="flex-initial leading-none text-m font-normal"
              href={`/category=${data}`}
            >
              {data}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
