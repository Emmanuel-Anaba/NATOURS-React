import Card from "../components/Card";

const Features = () => {
  const cards = [
    {
      icon: "",
      h: "EXPLORE THE WORLD",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "",
      h: "MEET NATURE",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "",
      h: "FIND YOUR WAY",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: "",
      h: "LIVE HEATHIER",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="myContainer grid md:grid-cols-4 gap-8 md:gap-12">
        {cards.map(({ icon, h, p }) => (
          <Card
            key={h}
            className="cursor-pointer text-[#777] text-center rounded p-4 bg-[rgba(255,255,255,0.8)] grid gap-4 lg:hover:-translate-y-5">
            {icon}
            <p className="font-semibold text-lg">{h}</p>
            <p>{p}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
