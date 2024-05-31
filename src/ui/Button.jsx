function Button({ children, onClick, type = "primary", bgColor = "#1c7ed6" }) {
  const str = bgColor.toString();
  console.log(str);
  console.log(typeof str);
  return (
    <>
      {type === "primary" && (
        <button
          onClick={onClick}
          className={
            " text-stone-50 px-4 py-[2px] rounded-sm font-semibold tracking-wider hover:bg-[#1864ab] " +
            ` bg-[${str}]`
          }
        >
          {children}
        </button>
      )}
      {type === "small" && (
        <button
          onClick={onClick}
          className="bg-[#1c7ed6] text-stone-50 px-[7px] text-1xl py-[1px] rounded-sm font-bold hover:bg-[#1864ab]"
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
