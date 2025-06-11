import Image from "next/image";

const cards = [
  {
    title: "Phones Repair",
    img: "/repair.png", // Place your image in public/meta-quest.png
    link: "#",
  },
  {
    title: "Sales",
    img: "/sales.png", // Place your image in public/quest-accessory.png
    link: "#",
  },
  {
    title: "Website Development",
    img: "/webdev.png", // Place your image in public/quest-apps.png
    link: "#",
  },
  {
    title: "tech Training",
    img: "/training.png", // Place your image in public/rayban-meta.png
    link: "#",
  },
];

export default function SmallCards() {
  return (
    <section className="w-full py-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-gray-800">
        Shop devices, accessories and more from the Meta Store
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-3xl flex flex-col items-center px-8 py-8 w-[300px] min-h-[320px] shadow-sm"
          >
            <div className="mb-4">
              <Image
                src={card.img}
                alt={card.title}
                width={120}
                height={80}
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-4 text-center leading-tight">
              {card.title}
            </div>
            <a
              href={card.link}
              className="text-blue-600 font-medium mt-auto hover:underline text-lg"
            >
              Shop now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}