import ContactCard from "./contact-card";

const Contact: React.FC = () => {
  return (
    <section className="py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold text-start mb-8">Contact</h1>
      <ContactCard />
    </section>
  );
};

export default Contact;
