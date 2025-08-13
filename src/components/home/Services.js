import { services } from "@/data/Data";
import ServiceCard from "../shared/ServiceCard";
import { PrimaryDarkBtn } from "../shared/Button";

const Services = () => {
  return (
    <section className="section mb-10">
        <div className="mb-11 text-center">
            <p className="section-subtitle">What We Do</p>
            <h2 className="section-title">Our Services</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
       {
        services.map((service,index) => <ServiceCard key={index} service={service}/>)
       }
      </div>
      <div className="mt-[68px] flex justify-center">
        <PrimaryDarkBtn text={"View All Services"}/>
      </div>
    </section>
  );
};

export default Services;
