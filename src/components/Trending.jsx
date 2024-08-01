import React from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  const items = [
    {
      id: 1,
      title: "KNITTED SHIRTS",
      price: "1,199",
      image:
        "https://www.snitch.co.in/cdn/shop/files/4MSS2719-01-M25.jpg?v=1711519165&width=1080",
    },
    {
      id: 2,
      title: "ALL BLACK",
      price: "1,999",
      image:
        "https://www.snitch.co.in/cdn/shop/files/4MSS2654-12-M43.jpg?v=1708512880&width=1080",
    },
    {
      id: 3,
      title: "OVERSIZED TEES",
      price: "1,599",
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/00151e947accbb4c1b90727c63d56b31_a6d1e5c1-0287-498b-a775-86c15dec9160.webp?v=1719209641&width=800",
    },
    {
      id: 4,
      title: "POLOS",
      price: "2,199",
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/caddff648338558e8a1d7da0d59d187c.webp?v=1720001269&width=800",
    },
    // {
    //   id: 5,
    //   title: "Armor Light Blue Checks Shirt",
    //   price: "1,399",
    //   image:
    //     "https://www.snitch.co.in/cdn/shop/files/f4967b59e3407b4237526a312630c2d5_250x.webp?v=1721855296",
    // },
  ];

  return (
    <>
      <div className="w-auto h-auto my-10 ">
        <div className="mt-20 text-center ">
          <h1 className="text-4xl font-normal py-4 ">TRENDING NOW</h1>
        </div>

        <div className=" px-6 mt-8">
          <div className="grid grid-cols-4 h-auto gap-6">
            {items.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden relative hover:scale-105 transition-all ease-linear "
                  >
                    <Link to="/" className="w-auto">
                      <div className=" w-full h-[60vh]  overflow-hidden relative  ">
                        <img
                          src={item.image}
                          alt=""
                          className=" w-[100%] h-full  object-cover z-10  "
                        />
                        <h2 className="mt-4 text-[1.5rem] absolute z-20 bottom-0 text-white p-2  ">
                          {item.title} 
                        </h2>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        
      </div>

      <div className="w-full my-16 py-10 " >
        <img src="https://www.snitch.co.in/cdn/shop/files/Offer_Banner_1400x.jpg?v=1721124824" alt="ad" className="object-cover w-full" />
      </div>
    </>
  );
};

export default Trending;
