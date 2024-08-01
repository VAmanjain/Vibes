import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Drops = () => {

    const shirts = [
        {
          id: 1,
          title: "Carmine Mauve Plain Shirt",
          price: "1,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/4MSS1216-06-M31_ce27f520-cffa-4742-9b9a-cf37b42df283.jpg?v=1688194678",
        },
        {
          id: 2,
          title: "Carmine Black Plain Shirt",
          price: "1,999",
          image:
            "https://www.snitch.co.in/cdn/shop/files/a78135878a61dbc7a5d29ee7f9ee88ab.webp?v=1721855264&width=1080",
        },
        {
          id: 3,
          title: "Elementary Cream Plain Pure Linen Shirt",
          price: "1,599",
          image:
            "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2708-02-M40.jpg?v=1704451302&width=800",
        },
        {
          id: 4,
          title: "Double Cuff Black Shirt",
          price: "2,199",
          image:
            "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/2c592c306c7124f1caee5032f87b4c73.webp?v=1719982396&width=800",
        },
        {
          id: 5,
          title: "Armor Light Blue Checks Shirt",
          price: "1,399",
          image:
            "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2846-05-M30.jpg?v=1707829222&width=600",
        },
      ];


    const coOrds = [
        {
          id: 1,
          title: "KNITTED SHIRTS",
          price: "1,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/240146317e12f6c2fcf3ba6972dc40da.webp?v=1719905786&width=720",
        },
        {
          id: 2,
          title: "ALL BLACK",
          price: "1,999",
          image:
            "https://www.snitch.co.in/cdn/shop/files/881233d3ebce39c687d427d6995781c9.webp?v=1722425972&width=1080",
        },
        {
          id: 3,
          title: "OVERSIZED TEES",
          price: "1,599",
          image:
            "https://www.snitch.co.in/cdn/shop/files/63960f4b5e6ea64baa1cd79c07802386.webp?v=1719904960&width=1080",
        },
        {
          id: 4,
          title: "POLOS",
          price: "2,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/4adc24e28ab3c55a655ab54d17e62545.webp?v=1719913472",
        },
        {
          id: 5,
          title: "Armor Light Blue Checks Shirt",
          price: "1,399",
          image:
            "https://www.snitch.co.in/cdn/shop/files/14f0ed0512e5c198ba1aef3610318f74.webp?v=1719913851",
        },
      ];
    const jeans = [
        {
          id: 1,
          title: "KNITTED SHIRTS",
          price: "1,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/4MSD3749-02-3258.jpg?v=1721901731&width=1080",
        },
        {
          id: 2,
          title: "ALL BLACK",
          price: "1,999",
          image:
            "https://www.snitch.co.in/cdn/shop/files/5667783b7bd653cd7052689ccecaf9c9.webp?v=1721883990&width=1080",
        },
        {
          id: 3,
          title: "OVERSIZED TEES",
          price: "1,599",
          image:
            "https://www.snitch.co.in/cdn/shop/products/01_6fce8444-9c53-44c6-b340-fb9abf2e0ccb.jpg?v=1660722754&width=1080",
        },
        {
          id: 4,
          title: "POLOS",
          price: "2,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/1e8719317c8ea8277b7464fcc5a98e77.webp?v=1721048015&width=1080",
        },
        {
          id: 5,
          title: "Armor Light Blue Checks Shirt",
          price: "1,399",
          image:
            "https://www.snitch.co.in/cdn/shop/files/4MSD3654-03-3235.jpg?v=1710398492&width=1080",
        },
      ];


      const [items, setItems] = useState(shirts)
      console.log(items);

      const handleDrops = (choice) =>{
        console.log(choice);
        if(choice === 'jeans'){
            setItems(jeans)
            console.log('jeans');
        }else if (choice === 'coOrds'){
            setItems(coOrds)
            console.log('coOrds');
        }
        else{
        setItems(shirts)
        console.log('shirts');}
      }

  return (
    <>
           <div className="w-auto h-auto my-10 ">
      <div className="mt-14 text-center flex justify-center gap-4 ">
        <h1 className="text-lg font-normal border-[1px] border-black cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-white hover:font-normal transition-all ease-linear  " onClick={()=>{handleDrops('shirts')}} >SHIRTS</h1>
        <h1 className="text-xl font-normal border-[1px] border-black cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-white hover:font-normal transition-all ease-linear " onClick={()=>{handleDrops('jeans')}} >JEANS</h1>
        <h1 className="text-xl font-normal border-[1px] border-black cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-white hover:font-normal transition-all ease-linear " onClick={()=>{handleDrops('coOrds')}} >CO-ORDS</h1>
      </div>

      <div className=" px-6 mt-8">
        <div className="grid grid-cols-5 h-auto gap-6">
          {items.map((item, index) => {
            return (
              <>
                <div key={index }  >
                  <Link to="/" className="w-auto">
                    <div className=" w-full h-[45vh]  overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className=" w-[100%] h-[50vh]  object-cover"
                      />
                    </div>
                  </Link>
                  <Link>
                  <h2 className="mt-4 text-[0.9rem] ">{item.title}</h2>
                  </Link>
                  <span className="text-[0.8rem] text-gray-800 ">
                    INR {item.price}
                  </span>

                  <ul className="grid grid-cols-5 w-fit gap-2 text-[0.7rem] text-gray-500 ">
                    <li>
                      <Link>S</Link>
                    </li>
                    <li>
                      <Link>M</Link>
                    </li>
                    <li>
                      <Link>L</Link>
                    </li>
                    <li>
                      <Link>XL</Link>
                    </li>
                    <li>
                      <Link>XXL</Link>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>

 
    </div>
    </>
  )
}

export default Drops