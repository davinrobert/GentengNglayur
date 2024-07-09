import port1 from "../assets/port1"
import port2 from "../assets/port2"
import port3 from "../assets/port3"
import port4 from "../assets/port4"
import port5 from "../assets/port5"
import port6 from "../assets/port6"
import port7 from "../assets/port7"
import port8 from "../assets/port8"

function Portfolio(){
    return(
        <section className="container pb-[198px]" id="portofolio">
            <div>
                <h1 className="text-[64px] font-semibold pt-[191px] pb-[77px]">Impression With Nglayur Roof Tiles.</h1>
            </div>
            <div className="flex gap-[29px]">
                <div className="ps-[216px]">
                    <img className="w-[250px] h-[250px] " src={port1} alt="" />
                    <img className="w-[250px] h-[250px] mt-[25px] " src={port2} alt="" />
                </div>
                <div >
                    <img className="w-[250px] h-[320px] " src={port3} alt="" />
                    <img className="w-[250px] h-[180px] mt-[25px]" src={port4} alt="" />
                </div>
                <div>
                    <img className="w-[250px] h-[180px] " src={port5} alt="" />
                    <img className="w-[250px] h-[320px] mt-[25px]" src={port6} alt="" />
                </div>
                <div>
                    <img className="w-[250px] h-[250px] " src={port7} alt="" />
                    <img className="w-[250px] h-[250px] mt-[25px]" src={port8} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;