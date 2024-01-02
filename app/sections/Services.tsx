import ServiceCard from "../Components/ServiceCard";
import { services } from "../Constants";

const Services = () => {
  return (
    <section className="max-w-[1440px] my-0 mx-auto flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
