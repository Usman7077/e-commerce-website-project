function Button({ children, onClick, type = "primary" }) {
  console.log(typeof type);
  return (
    <div className="inline-block">
      {type === "primary" && (
        <button
          onClick={onClick}
          className="bg-[#1c7ed6] text-stone-50 px-4 py-[2px] rounded-md font-semibold tracking-wider hover:bg-[#1864ab]"
        >
          {children}
        </button>
      )}
      {type === "small" && (
        <button
          onClick={onClick}
          className="bg-[#1c7ed6] text-stone-50 px-4 py-[2px] rounded-full font-semibold tracking-wider hover:bg-[#1864ab]"
        >
          {children}
        </button>
      )}
    </div>
  );
}

export default Button;
