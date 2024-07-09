import { Link } from "react-router-dom";
import build from "../assets/build.png"

const Help = () => {
  return (
    <section className="container">
      <div className="flex text-[36px] text-[#0073FF] pt-[121px]">
        <p className="font-bold">Genteng</p>
        <p>Nglayur</p>
      </div>
      <div className="flex justify-between pt-[13px]">
        <div className="text-left">
          <div >
            <p className="text-[24px] pt-[83px]">The FAQs</p>
            <h1 className="text-[64px] font-semibold">Help Center</h1>
            <p className="text-[24px]">Everithing you need to now about the product</p>
          </div>
          <div className="text-[32px] font-medium">
            <p className="pt-[156px]">How can i get the product?</p>
            <p className="pt-[30px]">What about the delivery security guarantee? </p>
            <p className="pt-[30px]">What payment methods are supported?</p>
          </div>
        </div>
        <div>
          <img src={build} alt="" />
        </div>
      </div>
      <div className="text-left text-[32px] font-bold text-[#0073FF] pb-[96px]">
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    </section>
  );
};

export default Help;
