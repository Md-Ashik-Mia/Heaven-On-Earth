import Image from "next/image";

const Relax = () => {
  return (
    <section
      className="w-full h-screen flex items-center"
      style={{ background: "var(--color-relax-bg)" }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between w-full gap-10 py-24">
        {/* Left: text */}
        <div className="flex flex-col gap-[10px] max-w-[576px]">
          <p className="text-kicker">Helping you make better</p>
          <h2 className="relax-title mt-2">Relax. Enjoy.</h2>
          <div className="flex flex-col gap-3 mt-4">
            <p className="relax-body">
              This is where your brand story comes to life. What makes your
              approach unique? Why should future clients choose to join your
              wellness journey?
            </p>
            <p className="relax-body">
              A warm, stylish environment where you can relax, enjoy and connect
            </p>
            <p className="relax-body">
              From healthy lunches and artisanal ice cream to luxurious wellness
              and inspiring gatherings, hece you step out of the crowds and
              recharge, inside and out.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative flex-shrink-0 w-[824px] h-[632px]">
          <Image
            src="/images/home/relax/relax.png"
            alt="Relax and enjoy"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Relax;
