import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../assets/arrow.svg"
import shipping from "../assets/shipping.png"

const Contactpage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendToWhatsApp = () => {
        if (!name) {
            alert("Nama harus diisi\n ⚠ Silahkan masukkan nama anda pada kolom nama.");
            return;
        }

        // Format pesan
        const formattedMessage = `Nama: ${name}%0A${message}`;

        // Nomor WhatsApp tujuan (ganti dengan nomor yang dituju)
        const phoneNumber = '62859175444954';

        // URL WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

        // Alihkan ke URL WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="container">
            <div className="flex text-[36px] text-[#0073FF] pt-[121px]">
                <p className="font-bold">Genteng</p>
                <p>Nglayur</p>
            </div>
            <div className="flex justify-between pt-[13px]">
                <div className="text-left w-[750px]">
                    <div>
                        <h1 className="text-[64px] font-semibold pt-[74px]">Contact us</h1>
                        <p className="text-[24px]">For all purchases start from here</p>
                    </div>
                    <div className="text-[32px]">
                        <div className="pt-[90px]">
                            <p className="text-[24px]">Name :</p>
                            <input 
                                type="text" 
                                className="w-[750px] h-[60px] pt-[6px] border border-solid border-gray-300 rounded-[10px] bg-white p-3 text-2xl" 
                                placeholder="Masukkan Nama Disini" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="pt-[35px]">
                            <p className="text-[24px]">Message :</p>
                            <input 
                                type="text" 
                                className="w-[750px] h-[60px] pt-[6px] border border-solid border-gray-300 rounded-[10px] bg-white p-3 text-2xl" 
                                placeholder="Masukkan Pesan Anda Disini" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="pt-[56px] flex justify-center items-center text-4xl font-bold text-[#0073FF]">
                            <button className="flex items-center gap-5" onClick={sendToWhatsApp}>
                                CONTACT NOW
                                <img src={arrow} alt="arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={shipping} alt=""/>
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

export default Contactpage;
