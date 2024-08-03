const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-3 absolute bottom-0">
        <p className="text-white font-semibold justify-self-center text-xs">
          MindfulMe © {new Date().getFullYear()} - All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
