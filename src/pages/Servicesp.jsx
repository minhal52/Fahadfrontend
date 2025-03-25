import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    image: "/equipmentrental.jpg",
    name: "Equipment Rentals",
    route: "/equipment-rental",
  },
  {
    id: 2,
    image: "/transportation.jpg",
    name: "Transportation",
    route: "/transportation",
  },
  {
    id: 3,
    image: "/materialsupply.jpg",
    name: "Material Supply",
    route: "/material-supply",
  },
  {
    id: 4,
    image: "/machinariesimg.jpg",
    name: "Machineries",
    route: "/machineries",
  },
];

const ServicePage = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* Banner Section */}
      <div className="service-banner">
        <h1>Our Services</h1>
        {/* <p>Delivering Excellence Across Various Industries</p> */}
      </div>

      {/* Small Heading and Paragraph Below Banner */}
      <div className="service-intro">
        {/* <h3 className="small-heading">Our Services</h3> */}
        <p className="service-description">
          {/* We provide reliable and high-quality services across multiple industries,  */}
          {/* ensuring that our clients get the best solutions tailored to their needs. */}
        </p>
      </div>

      {/* Service Heading */}
      {/* <section className="our-services">
        <h2 className="services-heading">Transforming Industries with Our Expert Services</h2> */}
        
        {/* Content Section */}
        {/* <p className="service-content">
          We provide a diverse range of services to meet the evolving needs of our clients.
          Our team ensures top-quality solutions, from equipment rentals to transportation
          and material supply.
        </p> */}

        {/* Services List */}
        <div className="services-container">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.name} className="service-img" />
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <button className="read-more-btn" onClick={() => navigate(service.route)}>
                Read More
              </button>
            </div>
          ))}
        </div>
      {/* </section> */}
    </div>
  );
};

export default ServicePage;
