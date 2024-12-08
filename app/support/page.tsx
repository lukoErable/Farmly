const SupportPage = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Assistance Farmly
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Si vous avez des questions ou des problèmes, voici comment nous
          contacter :
        </p>
        <ul className="space-y-6">
          <li className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Email :</span>
            <a
              href="mailto:support@farmly.com"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
            >
              farmly.contact@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Téléphone :</span>
            <a
              href="tel:+33612345678"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
            >
              +33 6 62 13 55 22
            </a>
          </li>
          {/* <li className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">FAQ :</span>
            <a
              href="https://www.farmly.com/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
            >
              Consultez notre FAQ
            </a>
          </li> */}
        </ul>
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
