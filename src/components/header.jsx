function Header (){
    return (
        <section className="flex justify-between container py-12 fixed top-0 z-10 bg-white">
            <div className="text-4xl text-[#0073FF]">
                <span className="font-bold">Genteng</span>
                <span className="font-normal">Nglayur</span>
            </div>
            <div className="flex gap-[60px] text-[30px] ">
                <div className="font-mediun text-[#787878]">
                    <a href="#home">Home</a>
                </div>
                <div className="font-medium text-[#787878]">
                    <a href="#about">About</a>
                </div>
                <div className="font-medium text-[#787878]">
                    <a href="#portofolio">Portofolio</a>
                </div>
                <div className="font-medium text-[#787878]">
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </section>
    )
}

export default Header