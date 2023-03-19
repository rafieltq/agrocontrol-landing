import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Conecta con nosotros"
        description="Obten más información sobre nuestros servicios y productos."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
