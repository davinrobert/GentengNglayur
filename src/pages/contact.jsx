import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg"
import about from "../assets/about.png"

function Contact(){
    return(
        <section className="" id="contact">
            <div className="font-semibold text-[84px] pt-[86px]">
                <h1>ONE DAY SHIPPING PROCESS</h1>
            </div>
            <div className="flex justify-center  text-4xl pt-[13px] font-bold text-[#0073FF]">
                <button>
                    <Link to={"contactpage"} className="flex items-center gap-5">
                    CONTACT NOW
                    <img src={arrow} />
                    </Link>
                </button>
            </div>

            <div className="pt-[86px]">
                <img src={about} alt="" />
            </div>           
        </section>
        
    )
}

export default Contact;