const Header = () => {
  return (
    <header className="h-[85svh] bg-cover bg-top relative">
      <div className="grid gap-8 absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-[60%]">
        <div className="text-center font-medium text-white">
          <p className="font-bold md:font-medium pb-8 text-2xl md:text-[4rem] ls-sm md:ls-lg">OUTDOORS</p>
          <p className="font-medium text-base ls-xs md:ls-sm">IS WHERE LIFE HAPPENS</p>
        </div>
        <a href="#tours" className="bg-white btn mx-auto">
          DISCOVER OUR TOURS
        </a>
      </div>
    </header>
  );
};

export default Header;
