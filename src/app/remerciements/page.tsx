import React from "react";

const page = () => {
  return (
    <section>
      <header className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white font-bold">REMERCIEMENTS</h1>
      </header>
      <form className="flex flex-col gap-5 p-6">
        <div className="flex flex-col">
          <label className="uppercase text-white text-[8px] font-bold pb-[7px]">
            Email address
            <sup>*</sup>
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="YOUR EMAIL ADDRESS..."
            style={{
              backgroundColor: "#373737",
              height: "31px",
              fontSize: "8px",
              padding: "0px 10px",
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-white text-[8px] font-bold pb-[7px]">
            Message<sup>*</sup>
          </label>
          <textarea
            name="nom"
            id="nom"
            placeholder="YOUR MESSAGE HERE..."
            style={{
              backgroundColor: "#373737",
              //   height: "31px",
              fontSize: "8px",
              padding: "10px 10px",
              height: "104px",
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "5px",
            }}
          />
        </div>
        <button className="bg-white text-xs font-bold w-[110px] text-center px-[25px] py-[10px] rounded-full">
          ENVOYER
        </button>
      </form>
    </section>
  );
};

export default page;
