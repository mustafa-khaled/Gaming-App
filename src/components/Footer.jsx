import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const menuData = [
  {
    title: "Web Site",
    items: ["Home", "About Us", "Contact"],
  },
  {
    title: "Categories",
    items: ["Fortnite", "Valorant", "Minecraft", "Apex Legend"],
  },
  {
    title: "Links",
    items: ["GitHub", "LinkedIn"],
  },
];

function Footer() {
  return (
    <div className="mt-[30px] bg-pri  text-textColor">
      <div
        className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px] px-[10px]
         py-[30px] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
      >
        <div>
          <img src={logo} alt="Logo" />
          <p className="mt-[10px] w-full text-sm md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            dignissimos eius voluptates consectetur in molestias est aut nostrum
            cumque repellendus aliquid adipisci. Distinctio, debitis eos?
            Dignissimos nisi enim tempore tempora.
          </p>
        </div>

        {menuData.map((menu, index) => (
          <ul key={index}>
            <li className="text-purple">{menu.title}</li>
            {menu.items.map((item, subIndex) => (
              <li className="text-sm">{item}</li>
            ))}
          </ul>
        ))}
      </div>
      <p className="bg-purple py-[20px] text-center">
        All Copyright Reserved{" "}
        <Link
          to={"https://www.linkedin.com/in/the-mustafa-khaled/"}
          target="_blank"
          className="underline hover:text-gray-400"
        >
          Mustafa Khaled
        </Link>
      </p>
    </div>
  );
}

export default Footer;
