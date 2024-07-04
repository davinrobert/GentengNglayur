import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="container pt-[32px] pb-[39px] text-[#0073FF]">
      <div className="flex justify-between items-center content-between">
        <div className="text-left">
          <div className="flex text-2xl">
            <p className="font-semibold"> Genteng</p>
            <p className="font-normal"> Nglayur</p>
          </div>
          <div className="flex text-[20px]">
            <p className="font-semibold">Genteng</p>
            <p>Nglayur © 2024 | Visit us at gentengnglayur.com </p>
          </div>
        </div>
        <div className="text-[24px] font-bold">
          <Link to={"help"}>Help</Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
