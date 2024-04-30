import Card from "../components/Card";
import img1 from "../assets/img/nat-8.jpg";
import img2 from "../assets/img/nat-9.jpg";
import vid1 from "../assets/img/video.mp4";
import vid2 from "../assets/img/video.webm";

const Stories = () => {
  const stories = [
    {
      img: img1,
      h: "I HAD THE BEST WEEK EVER WITH MY FAMILY",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
      name: "MARY SMITH",
    },
    {
      img: img2,
      h: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
      name: "JACK WILSON",
    },
  ];

  return (
    <section id="stories" className="relative">
      <video
        autoPlay
        muted
        loop
        className="absolute -z-10 w-full h-full object-cover opacity-10">
        <source src={vid1} type="video/mp4" />
        <source src={vid2} type="video/webm" />
      </video>
      <div className="myContainer grid gap-16 py-20">
        <p className="section-heading">WE MAKE PEOPLE GENUINELY HAPPY</p>
        {stories.map(({ h, p, img, name }) => (
          <Card
            key={h}
            className="bg-[rgba(255,255,255,0.6)] shadow-xl p-8 rounded-lg grid grid-flow-col gap-8 place-items-center w-4/6 mx-auto">
            <div className="w-32 h-32 rounded-full grid place-items-center overflow-hidden cursor-pointer relative">
              <img
                className="w-32 h-32 duration-700 scale-150 hover:scale-100 hover:blur-sm"
                src={img}
                alt={name}
              />
              {/* <p className="text-white font-medium absolute duration-700 opacity-0 hover:opacity-100">MARY SMITH</p> */}
            </div>
            <div>
              <p className="text-lg font-medium">{h}</p>
              <p>{p}</p>
            </div>
          </Card>
        ))}
        <a className="line-link m-auto" href="#">
          Learn More &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
