import { IonIcon } from "@ionic/react";
import { compassOutline, globeOutline, heartOutline, mapOutline } from "ionicons/icons";
import Card from "../components/Card";

const Features = () => {
  const cards = [
    {
      icon: globeOutline, // I'll ion-icon or react-icon or any svg here
      h: "EXPLORE THE WORLD",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: compassOutline,
      h: "MEET NATURE",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: mapOutline,
      h: "FIND YOUR WAY",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
    {
      icon: heartOutline,
      h: "LIVE HEATHIER",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-center bg-cover">
      <div className="myContainer grid md:grid-cols-4 gap-8 lg:gap-12">
        {cards.map(({ icon, h, p }) => (
          <Card
            key={h}
            className="cursor-pointer text-[#777] text-center rounded p-4 bg-[rgba(255,255,255,0.8)] grid gap-4 lg:hover:-translate-y-5">
            <IonIcon className="w-16 h-16 mx-auto" icon={icon} />
            <p className="font-semibold text-lg">{h}</p>
            <p>{p}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
