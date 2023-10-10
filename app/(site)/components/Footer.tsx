const today = new Date();
const yyyy = today.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="text-xs text-center">&copy; Slower Motions {yyyy}</p>
    </footer>
  );
};

export default Footer;
