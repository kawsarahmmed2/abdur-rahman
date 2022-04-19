import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const services = [
    {
      id: 1,
      name: "Mountains Tours",
      price: "300",
      description:
        "Is mountaineering in your blood? Get a tour to Andes or Himalayas.",
      img: "https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/service-1.jpg",
      detail:
        "The Rocky Mountains (The Rockies) are a mountain range that extends more than 4,830 km (3,000 miles) from northwestern British Columbia in Canada to New Mexico in the southwestern USA. The Rockies were formed from 80 million to 55 million years ago when Pacific plates started to slide under the North American plate forming a ridge of mountains along western North America. Millions of years of erosion and glacial activity have left behind a dramatic and beautiful landscape. The highest point in the Rockies is Mount Elbert in Colorado at 4,400m (14,440 ft). The highest mountain in the Canadian Rockies is Mt. Robson in British Columbia approx. 1 hour west of Jasper. Mt. Robson is 3,954 m (12,972 ft) high. The Rockies range from 110 km (70 miles) to 480 km (300 miles) wide. The Continental Divide runs through the Rockies. Snow melt on the west side of the Divide flows to the Pacific while snow melt on the east side flows, eventually, to the Atlantic. There are areas where the snow melt also flows north to the Arctic Ocean.The Rockies are home to a number of animals including grizzly bears, black bears, wolves, coyotes, cougars, elk, bighorn sheep, deer, moose, and mountain goats. Keep your eyes peeled for wildlife sightings while touring through the mountains! Some of the indigenous peoples include the Apache, Arapaho, Blackfoot, Cheyenne, Crow Nation, Flathead, Shoshone, Sioux, & Ute.European exploration began in 1540 with the Spanish explorer Francisco Vazquez de Coronado in the southern Rockies. Sir Alexander MacKenzie was the first European to cross the Rockies in 1793. The Lewis & Clark Expedition (1804 – 1806) was the first scientific exploration of the Rockies. The fur trade, followed by mining, provided the early economic activity in the Rockies however, tourism is now the major economic force. Both the US and Canada have set aside huge areas as National Parks or otherwise protected areas.",
    },
    {
      id: 2,
      name: "Euro Tours",
      price: "800",
      description:
        "Are you a gourmet? Then you should definitely check out one of our food roots.",
      img: "https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/service-6.jpg ",
      detail:
        "Each of the 18,000 pieces used to build the tower was calculated specifically for the project and prepared in Eiffel's factory on the outskirts of Paris. The wrought-iron structure is composed of four immense arched legs, set on masonry piers that curve inward until joining in a single, tapered tower.Building the tower required 2.5 million thermally assembled rivets and 7,300 tons of iron. To protect the tower from the elements, workers painted every inch of the structure, a feat that required 60 tons of paint. The tower has since been repainted 18 times.",
    },
    {
      id: 3,
      name: "Sea tours",
      price: "1000",
      description:
        "Bath in any ocean thanks to the line of special exotic water tours.",
      img: "https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/service-3.jpg",
      detail:
        "An easy 30-minute drive from Honolulu, Kailua Beach Park offers a great, natural Hawaiian beach experience. There are three miles of wide, white, soft-sand beach with warm, aqua-blue water. The surf is gentle and good for swimming and wading.The beach area is part of a 35-acre park, which has volleyball, basketball courts, hiking, and other recreational activities. The beach has lifeguards and several areas of facilities (restrooms and outdoor showers). Kailua Beach has good access for kayakers and SUPs (stand-up paddleboards). The little town of Kailua has some cool, local places to eat and shop.",
    },
  ];
  const { serviceId } = useParams();
  const id = serviceId;
  let travel = services.find((service) => service.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img className="serviceDetail-img" src={travel.img} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5 serviceDetail">
          <p>{travel.detail}</p>
          <h5>Price: ${travel.price}</h5>

          <button className="btn serviceDetail-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
