import img1 from "../assets/img/nat-1.jpg";
import img2 from "../assets/img/nat-2.jpg";
import img3 from "../assets/img/nat-3.jpg";

const About = () => {
  const imgs = [
    {
      image: img1,
      position: "lg:top-0 lg:left-0",
    },
    {
      image: img2,
      position:
        "-right-4 md:top-1/2 md:-translate-y-1/2 lg:top-3/4 lg:right-1/4 z-10",
    },
    {
      image: img3,
      position: "-bottom-8 lg:top-8 lg:right-0",
    },
  ];

  const text = [
    {
      h: "YOU'RE GOING TO FALL IN LOVE WITH NATURE",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    },
    {
      h: "LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam",
    },
  ];

  return (
    <section id="about" className="py-8 lg:py-20 bg-[#f7f7f7]">
      <p className="section-heading pb-8">
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </p>
      <div className="myContainer grid md:grid-cols-5 gap-8">
        <div className="grid gap-8 text-[#777] col-span-2">
          {text.map(({ h, p }) => (
            <div key={h}>
              <p className="text-lg font-medium pb-2">{h}</p>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <div className="col-span-3 grid gap-8 relative">
          {imgs.map((item) => (
            <img
              key={imgs.indexOf(item)}
              className={`mx-auto w-full md:w-fit rounded-lg md:absolute lg:hover:scale-110 lg:outline-offset-8 shadow-2xl lg:hover:outline lg:hover:outline-4 md:hover:outline-[#55c57a] md:hover:z-50 ${item.position}`}
              src={item.image}
              alt={`Photo ${imgs.indexOf(item) + 1}`}
            />
          ))}
        </div>
        <a className="line-link mr-auto my-auto" href="#">
          Learn More &rarr;
        </a>
      </div>
      {/* Background Clip  */}
    </section>
  );
};

export default About;
