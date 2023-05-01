const StarRate = ({ rate }: { rate: any }) => {
  return (
    <div className="text-yellow-400 flex items-center">
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
      </svg>
      <span className="text-sm font-bold sm-2">{rate}</span>
    </div>
  );
};

export default StarRate;
