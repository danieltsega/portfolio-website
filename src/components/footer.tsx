const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Daniel Tsega. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
