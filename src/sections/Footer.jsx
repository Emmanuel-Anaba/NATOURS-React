import Logo from "../assets/img/logo-green.png";

const Footer = () => {
  const links = ["COMPANY", "CONTACT US", "CAREERS", "PRIVACY POLICY", "TERMS"];

  return (
    <footer className="bg-[#333] text-white py-8 text-sm">
      <div className="myContainer grid md:grid-cols-2 gap-8">
        <img className="md:col-span-2 mx-auto" src={Logo} alt="Natours Logo" />
        <div className="border-t-[1px] pt-8 md:pt-4">
          <ul className="flex flex-col md:flex-row gap-2 md:justify-between text-center">
            {links.map((item) => (
              <li className="md:inline-block" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-[1px] pt-8 md:pt-4">
          <p>
            Built by{" "}
            <a
              href="https://www.emmanuel-anaba.vercel.app"
              className="text-[#55c57a] hover:underline">
              Emmanuel Anaba
            </a>{" "}
            as a practice for advancing his styling skills. Design Credit to{" "}
            <a
              href="https://www.jonas-schmedtmann.io"
              className="text-[#55c57a] hover:underline">
              Jonas Schmedtmann
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
