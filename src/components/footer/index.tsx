import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
      <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Stay in shape with our daily tips and workout programs. Join us to
            achieve your best form!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Explore our range of Membership Plans</p>
          <p className="my-5">42 Maple Avenue, Springfield, IL, 62701, USA</p>
          <p>Stay connected with us!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            For inquiries and assistance, feel free to reach us at:
          </p>
          <p>+1 (555) 867-5309</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
