import BookNow from "@/components/shared/BookNow";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <Navbar></Navbar>
      <section className="flex justify-between items-center mt-20 pt-20">
        <div className="left">
          <h4 className="text-kicker">
            A Different Approach to Health and Wellness
          </h4>
          <h2 className="text-hero max-w-2xl text-7xl my-6">
            Heaven is place <br /> on earth. Lunch. <br /> Relax. Celebrate.
          </h2>
          <h6 className="text-subtitle font-cambria text-lg leading-6 mb-11">
            Where wellness, dining, and meaningful moments come <br /> together in
            perfect harmony.
          </h6>
          <BookNow href="/booking" className="mt-10"></BookNow>
        </div>
        <div className="right max-h-[690px]">
          <img
            src="/images/home/homepageimage1.png"
            alt="Header Image"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
