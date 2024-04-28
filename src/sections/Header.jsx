const Header = () => {
  //   <style>
  //
  //   </style>

  return (
    <header className="h-[85svh] bg-cover bg-top relative text-white">
      <div className="grid gap-8 absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-[60%]">
        <div className="text-center font-medium">
          <p className="font-bold md:font-medium pb-8 text-2xl md:text-[4rem] ls-md md:ls-lg">OUTDOORS</p>
          <p className="font-medium text-base ls-sm">IS WHERE LIFE HAPPENS</p>
        </div>
        <button className="bg-white text-gray-500 rounded-full px-8 py-[10px] m-auto hover:scale-110">
          DISCOVER OUR TOURS
        </button>
      </div>
      {/* Backgroung Clip is gonna be wavy */}
    </header>
  );
};

export default Header;
