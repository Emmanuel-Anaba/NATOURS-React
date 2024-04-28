import Card from "../components/Card";

const Tours = () => {
  const cards = [
    {
      img: "",
      h: "THE SEA EXPLORER",
      p: [
        "3 day tours",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in Cozy Hotels",
        "Dificulty: Easy",
      ],
      price: "297",
    },
    {
      img: "",
      h: "THE SEA EXPLORER",
      p: [
        "3 day tours",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in Cozy Hotels",
        "Dificulty: Easy",
      ],
      price: "297",
    },
    {
      img: "",
      h: "THE SEA EXPLORER",
      p: [
        "3 day tours",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in Cozy Hotels",
        "Dificulty: Easy",
      ],
      price: "297",
    },
  ];
  return (
    <section id="tours" className="py-20">
      <p className="text-center font-semibold text-gradient text-xl md:text-2xl lg:text-3xl pb-8 ls-vsm">
        MOST POPULAR TOURS
      </p>
      <div className="myContainer grid md:grid-cols-3 gap-8">
        {cards.map(({ h, p, price }) => (
          <Card key={h} className={`text-center shadow-lg`}>
            {h}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Tours;
