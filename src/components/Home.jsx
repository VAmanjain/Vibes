import Drops from "./Drops";
import Hero from "./Hero";
import NewDrops from "./NewDrops";
import Trending from "./Trending";

const Home = () => {

  const shirts = [
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
    <div className="pt-[15vh]">
      <Hero />
      <NewDrops/>
      <Trending />
      <Drops/>
    </div>
  );
};

export default Home;
