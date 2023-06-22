import React from "react";
import Image from "next/image";
import Image1 from "../../../public/image1.jpg"
import Image2 from "../../../public/image2.jpg"
import Image3 from "../../../public/image3.jpg"
import Image4 from "../../../public/image4.jpg"
import Image5 from "../../../public/image5.jpg"
import Image6 from "../../../public/image6.jpg"
import Image7 from "../../../public/image7.jpg"
import Image8 from "../../../public/image8.jpg"
import Image9 from "../../../public/image9.jpg"
import Image10 from "../../../public/image10.jpg"
import Image11 from "../../../public/image11.jpg"
import Image12 from "../../../public/image12.jpg"
import Image13 from "../../../public/image13.jpg"
import Image14 from "../../../public/image14.jpg"
import Image15 from "../../../public/image15.jpg"
import Image16 from "../../../public/image16.jpg"
import Image17 from "../../../public/image17.jpg"
import Image18 from "../../../public/image18.jpg"
import Image19 from "../../../public/image19.jpg"
import Image20 from "../../../public/image20.jpg"
import Image21 from "../../../public/image21.jpg"

const page = () => {
  return (
    <header>
      <h1 className="text-white font-semibold text-center pb-12 uppercase">Inspiration</h1>
      <section className="flex flex-col gap-3 justify-center items-center pb-12">
        <h1 className="text-white font-semibold text-[10px] uppercase">
          !! NO BLACK TIE !!​​​​​​​
        </h1>
        <h1 className="text-[#999] font-semibold text-[10px] uppercase">
          - Be that person you've always wanted to be
        </h1>
        <h1 className="text-[#999] font-semibold text-[10px] uppercase">
          - Upcylcing is welcome
        </h1>
        <h1 className="text-[#999] font-semibold text-[10px] uppercase">
          - Be You, be creative, be Alternative, be-rlin
        </h1>
      </section>
      <section className="grid grid-cols-3 gap-1.5">
        <Image src={Image1} height={170} width={200} alt="image" style={{objectFit: "fill", height: "200px", width: "100"}}/>
        <Image src={Image2} height={170} width={200} alt="image" style={{objectFit: "fill", height: "200px", width: "100"}}/>
        <Image src={Image3} height={170} width={100} alt="image" style={{objectFit: "fill", height: "200px", width: "100%"}} />
      </section>
    </header>
  );
};

export default page;
