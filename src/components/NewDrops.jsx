import React from 'react'
import { Link } from 'react-router-dom';

const NewDrops = () => {

    const items = [
        {
          id: 1,
          title: "Carmine Mauve Plain Shirt",
          price: "1,199",
          image:
            "https://www.snitch.co.in/cdn/shop/files/45027dc085672051ce62d28b736e7089_e400701c-c77a-4eb6-8f59-a9a0885d3c6f.webp?v=1722349171",
        },
        {
          id: 2,
          title: "Carmine Black Plain Shirt",
          price: "1,999",
          image:
            "//www.snitch.co.in/cdn/shop/files/97342684574e4956c66bacd5c08e44cd.webp?v=1722349145",
        },
        {
          id: 3,
          title: "Elementary Cream Plain Pure Linen Shirt",
          price: "1,599",
          image:
            "//www.snitch.co.in/cdn/shop/files/47128974a076587ec0f133fc340f377a.webp?v=1722348012",
        },
        {
          id: 4,
          title: "Double Cuff Black Shirt",
          price: "2,199",
          image:
            "https://www.snitch.co.in/cdn/shop/products/4MSS1813-10-M2737_85b2534e-7886-4fcb-8da4-4d105eccf6a5_250x.jpg?v=1682191059",
        },
        {
          id: 5,
          title: "Armor Light Blue Checks Shirt",
          price: "1,399",
          image:
            "https://www.snitch.co.in/cdn/shop/files/f4967b59e3407b4237526a312630c2d5_250x.webp?v=1721855296",
        },
      ];
    

  return (
    <>
     <div className="w-auto h-auto my-10 ">
      <div className="mt-14 text-center ">
        <h1 className="text-4xl font-normal">NEW DROPS</h1>
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

      <div className="w-full mt-[5rem] text-center h-auto">
        <Link to='/' className="px-4 py-3 border-[1px] border-gray-500 text-[0.7rem] font-light hover:bg-black hover:text-white hover:font-normal transition-all ease-linear " >
        VIEW MORE
        </Link>
      </div>
    </div>


    </>
  )
}

export default NewDrops