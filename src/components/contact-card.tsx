const ContactCard: React.FC = () => {
  return (
    <div className="bg-white shadow-sm border rounded-lg p-4 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <h2 className="text-2xl font-semibold flex items-center justify-center space-x-2">
        <span
          role="img"
          aria-label="waving hand"
          className="text-yellow-500 text-3xl"
        >
          👋
        </span>
      </h2>
      <p className="text-gray-900 text-lg">
        I’m open to new projects and collaborations. Feel free to reach out if
        you have an idea or project in mind.
        <br/>
        <a href="mailto:dannytsega@outlook.com" className="ml-2 text-blue-500">
          {" "}
          📩 dannytsega@outlook.com
        </a>
        <a href="mailto:dannytsega16@gmail.com" className="ml-2 text-blue-500">
          {" "}
          📩 dannytsega16@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactCard;
