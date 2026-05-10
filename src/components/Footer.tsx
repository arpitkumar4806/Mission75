const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>
        &copy; Copyright {currentYear} | <span>Mission75</span>
      </span>
    </footer>
  );
};

export default Footer;
