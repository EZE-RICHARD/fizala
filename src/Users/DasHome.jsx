import React from "react";
import OverviewBoard from "../components/OverviewBoard";
import "./styles/dashHome.scss";
import logo from "/src/assets/FizalaLogo.png";
import { NavLink } from "react-router-dom";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaBookmark } from "react-icons/fa";

const listing = [
  {
    image: logo,
    title: "Toyota Sienna 2011",
    description:
      "Tokunbo and follow come rims for toyota sienna. 16 inches rim. Excellent condition. Get value for...",
    price: "₦ 3,950,000",
    location: "Abuja, Wuse 2",
    icon:{
      location:<LiaMapMarkedAltSolid className="icon" />,
      bookmark:<FaBookmark className="icon"/>
    }
  },
  {
    image: logo,
    title: "Sumec Firman Generator SPG1800",
    description:
      "High-performance generator suitable for home and office use. Low noise and fuel-efficient....",
    price: "₦ 45,000",
    location: "Lagos, Ikeja",
    icon:{
      location:<LiaMapMarkedAltSolid className="icon" />,
      bookmark:<FaBookmark className="icon"/>
    }
  },
  {
    image: logo,
    title: "Philips Blender HR2056/90",
    description:
      "Compact and powerful blender, perfect for smoothies, soups, and more. Easy to clean....",
    price: "₦ 12,500",
    location: "Port Harcourt, Rumuomasi",
    icon:{
      location:<LiaMapMarkedAltSolid className="icon" />,
      bookmark:<FaBookmark className="icon"/>
    }
  },
  {
    image: logo,
    title: "LG Refrigerator 190L",
    description:
      "Spacious refrigerator with multi-air flow cooling and energy-saving features...",
    price: "₦ 3,950,000",
    location: "Kano, Tarauni",
    icon:{
      location:<LiaMapMarkedAltSolid className="icon" />,
      bookmark:<FaBookmark className="icon"/>
    }
  },
];

const DasHome = () => {
  return (
    <div className="content-body">
      <p>Welcome back, Michael 👋</p>
      <OverviewBoard />

      <section className="listings mt-5">
        <ul className="list-unstyled">
          {listing.map((item) => (
            <li key={item} >
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <article className="p-3">
                <h5>{item.title}</h5>
                <p className="description">{item.description}</p>
                <p className="text-warning fw-bold">{item.price}</p>

                <span className="d-flex justify-content-between actions align-items-center">
                  <p>{item.icon.location}{item.location}</p>
                  <p className="bookmark d-flex align-items-center justify-content-center shadow">{item.icon.bookmark}</p>
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DasHome;
