function Home() {
  return (
    <section className="container grid grid-cols-2 justify-center items-center h-[100vh]" id="home">
      <div className="flex flex-col justify-center items-start">
        <div className="text-start space-y-[64px]">
          <h1 className="text-8xl font-semibold">Best Roffing</h1>
          <h1 className="text-8xl font-semibold">Solution</h1>
          <div className="text-4xl font-medium pt-[34px]">
            <p>With proven quality natural</p>
            <p className="pt-[12px]">aesthetic and exceptional durability.</p>
          </div>
        </div>
        <div className="w-full mt-[94px] flex justify-start">
          <button className="flex justify-center items-center gap-5 text-4xl font-bold text-[#0073FF]">
            CONTACT NOW
            <img src="src\assets\arrow.svg" />
          </button>
        </div>
      </div>
      <div className="pt-[336px]">
        <img src="src\assets\banner-img.png"/>
      </div>
    </section>
  );
}

export default Home;
