import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div id="service" className="container mt-5">
      <h2 className="text-center mt-5 pt-5 mb-5">Travel Service</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
