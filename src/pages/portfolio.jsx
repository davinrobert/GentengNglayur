function Portfolio(){
    return(
        <section className="container pb-[198px]" id="portofolio">
            <div>
                <h1 className="text-[64px] font-semibold pt-[191px] pb-[77px]">Impression With Nglayur Roof Tiles.</h1>
            </div>
            <div className="flex gap-[29px]">
                <div className="ps-[216px]">
                    <img className="w-[250px] h-[250px] " src="src\assets\port1.png" alt="" />
                    <img className="w-[250px] h-[250px] mt-[25px] " src="src\assets\port2.png" alt="" />
                </div>
                <div >
                    <img className="w-[250px] h-[320px] " src="src\assets\port3.png" alt="" />
                    <img className="w-[250px] h-[180px] mt-[25px]" src="src\assets\port4.png" alt="" />
                </div>
                <div>
                    <img className="w-[250px] h-[180px] " src="src\assets\port5.png" alt="" />
                    <img className="w-[250px] h-[320px] mt-[25px]" src="src\assets\port6.png" alt="" />
                </div>
                <div>
                    <img className="w-[250px] h-[250px] " src="src\assets\port7.png" alt="" />
                    <img className="w-[250px] h-[250px] mt-[25px]" src="src\assets\port8.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;