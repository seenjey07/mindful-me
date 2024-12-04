const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-3 fixed bottom-0 left-0 right-0">
        <p className="text-white font-semibold justify-self-center text-xs">
          MindfulMe © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
