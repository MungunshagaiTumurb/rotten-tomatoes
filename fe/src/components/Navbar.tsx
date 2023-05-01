import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-red flex justify-between flex-grow font-bold items-center">
      <div className="basis-1/4 p-8">
        <Link href={"/"}>
          <img src="/rotten-tomatoes.svg" className="w-full" />
        </Link>
      </div>

      <input
        type="text"
        className=" min-[781px]:basis-1/3 max-[780px]:basis-10/12  rounded pl-2 py-1 bg-lightdark text-white-2 border border-white focus:outline-none w-fit placeholder:text-white font-normal"
        placeholder="Search movies, TV, actors, more ..."
      />

      <div className="flex flex-col justify-between basis-1/2 max-[780px]:n">
        <div className="justify-end">
          <ul className="flex list-none text-white text-xs">
            <li className="p-4">
              <a className="text-decoration-none">What's the Tomatometer®?</a>
            </li>
            <li className="p-4">
              <a>Critics</a>
            </li>
            <li className="p-4">
              <a>LOGIN/SIGNUP</a>
            </li>
          </ul>
        </div>
        <div className="max-[680px]:hidden">
          <button className="bg-transparent text-white p-4">MOVIES</button>
          <button className="bg-transparent text-white p-4">TV SHOWS</button>
          <button className="bg-transparent text-white p-4">
            MOVIE TRIVIA
          </button>
          <button className="bg-transparent text-white p-4">NEWS</button>
          <button className="bg-transparent text-white p-4">SOMETIMES</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
