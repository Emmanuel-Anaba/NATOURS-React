import Card from "../components/Card";
import img1 from "../assets/img/nat-5.jpg";
import img2 from "../assets/img/nat-6.jpg";
import img3 from "../assets/img/nat-7.jpg";

const Tours = () => {
  const cards = [
    {
      bg: `linear-gradient(to right bottom, #ffbb00, #ff7730)`,
      bgImg: img1,
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
      bg: `linear-gradient(to right bottom, #7ed56f, #28b485)`,
      bgImg: img2,
      h: "THE FOREST HIKER",
      p: [
        "7 day tours",
        "Up to 40 people",
        "6 tour guides",
        "Sleep in provided tents",
        "Dificulty: Medium",
      ],
      price: "497",
    },
    {
      bg: `linear-gradient(to right bottom, #2998ff, #5643fa)`,
      bgImg: img3,
      h: "THE SNOW ADVENTURER",
      p: [
        "5 day tours",
        "Up to 15 people",
        "3 tour guides",
        "Sleep in provided tents",
        "Dificulty: Hard",
      ],
      price: "897",
    },
  ];

  return (
    <section id="tours" className="py-20 grid gap-16">
      <p className="section-heading">
        MOST POPULAR TOURS
      </p>
      <div className="myContainer grid md:grid-cols-3 gap-12 md:gap-20 text-[#777]">
        {cards.map(({ h, p, price, bg, bgImg }) => (
          <Card
            key={h}
            className={`text-center shadow-2xl overflow-hidden rounded-lg md:hover:scale-105`}>
            <div
              className="h-48 bg-center bg-cover bg-blend-screen text-white relative"
              style={{
                backgroundImage: `${bg}, url(${bgImg})`,
              }}>
              <p
                className="text-2xl p-2 absolute bottom-0 right-0 rounded-tl-lg"
                style={{
                  backgroundImage: bg,
                }}>
                {h}
              </p>
            </div>
            {/* How do I do the lines here */}
            <ul className="w-[60%] mx-auto py-8">
              {p.map((item) => (
                <li key={item} className="border-b-[1px] p-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="py-8 grid gap-4" style={{ background: bg }}>
              <p className="text-white">
                ONLY <br />
                <span className="text-4xl font-medium">${price}</span>
              </p>
              <button className="bg-white btn">BOOK NOW</button>
            </div>
          </Card>
        ))}
      </div>
      <a href="#" className="btn bg-[#55c57a] text-white shadow-lg">DISCOVER ALL TOURS</a>
    </section>
  );
};

export default Tours;
