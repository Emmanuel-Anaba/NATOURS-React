import Logo from "../assets/img/logo-green.png";

const Footer = () => {
  const links = ["COMPANY", "CONTACT US", "CAREERS", "PRIVACY POLICY", "TERMS"];

  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="myContainer grid place-items-center gap-8">
        <img src={Logo} alt="Natours Logo" />
        <div className="w-full border-t-[1px] flex justify-between pt-4">
          {links.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
