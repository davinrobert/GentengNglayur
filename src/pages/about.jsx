function About(){
    return (
        <section className="container pt-[130px]" id="about">
            <div>
                <h1 className="text-[68px] font-semibold pt-[99px]">Nglayur roof tiles for everyone</h1>
                <h2 className="text-[32px] font-medium pt-[13px] text-[#787878]">High quality tiles for the strength and beauty of your roof.</h2>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-[130px] ps-[67px] pr-[67px] pb-[150px]" >
                <div>
                    <img src="src\assets\residence.png" alt="" className="w-full max-h-[540px] max-w-[440px]"/>
                </div>
                <div>
                    <img src="src\assets\school.png" alt="" className="w-full max-h-[540px] max-w-[440px]"/>
                </div>
                <div>
                    <img src="src\assets\workship.png" alt="" className="w-full max-h-[540px] max-w-[440px]"/>
                </div>
            </div>
            <div className="flex size-[560px 780px] ps-[67px] pt-[150px] pb-[155px]">
                <div>
                    <img src="src\assets\build.png" alt="" />
                </div>
                <div className="text-left pt-[190px] ps-[116px]">
                    <h1 className="text-[68px] font-semibold">Build your dream</h1>
                    <p className="text-[32px] pt-[51px] font-medium text-[#787878]">All aspects of the building including the </p>
                    <p className="text-[32px] pt-[4px] font-medium text-[#787878]" >beauty and durability of the building must be </p>
                    <p className="text-[32px] pt-[4px] font-medium text-[#787878]" >given serious attention.</p>
                    <p className="text-[32px] pt-[51px] font-semibold text-[#0073FF]" >STRONG ROOF AND BEAUTIFUL</p>
                </div>
            </div>
            <div className="flex justify-end size-[560px 780px] pr-[67px] pt-[145px] pb-[150px]">
            <   div className="text-right pt-[217px] pr-[116px]">
                    <h1 className="text-[68px] font-semibold">Everything is easy</h1>
                    <p className="text-[32px] pt-[51px] font-medium text-[#787878]">Online Consultation, Complete Payment</p>
                    <p className="text-[32px] pt-[4px] font-medium text-[#787878]" >and The Best Products Will Be Coming Soon.</p>
                    <p className="text-[32px] pt-[51px] font-semibold text-[#0073FF]" >ONE DAY SHIPPING PROCESS.</p>
                </div>
                <div>
                    <img src="src\assets\shipping.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default About;