import Image from "next/image";

const services = [
  {
    title: "The Lunchroom",
    description:
      "Seasonal, refined dining in a calm and elegant setting where you can truly savor each moment.",
    image: "/images/home/service/service1.png",
  },
  {
    title: "Saunas & Wellness",
    description:
      "A sanctuary of warmth and stillness, designed for deep relaxation and inner balance.",
    image: "/images/home/service/service2.png",
  },
  {
    title: "Multifunctional Space",
    description:
      "A serene space for gatherings, movement, and meaningful moments in thoughtful design.",
    image: "/images/home/service/service3.png",
  },
];

const Service = () => {
  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-center py-20 container mx-auto">
      <div className="w-full  mx-auto px-6">
        <div className="text-center">
          <p className="text-kicker text-center">Discover Our</p>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="mt-14 flex  justify-between ">
          {services.map((service) => (
            <article key={service.title} className="text-center">
              <div className="mx-auto w-[360px] h-[360px] rounded-full bg-[#E9DED1] p-4">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="service-card-title mt-[48px]">{service.title}</h3>
              <p className="service-card-desc mt-3 px-3">
                {service.description}
              </p>
              <button className="service-card-link mt-4">LEARN MORE</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
