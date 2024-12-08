export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Bienvenue sur Farmly
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Réservez auprès de fermes locales pour récupérer des produits frais et
          bio.
        </p>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-gray-800">
            Pourquoi choisir Farmly ?
          </h2>
          <p className="text-gray-600 mt-2">
            Nous connectons les fermes locales aux consommateurs en vous offrant
            un accès direct à des produits de qualité.
          </p>
        </section>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          En savoir plus
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="/support" className="text-blue-500 hover:underline">
          Besoin d'aide ?
        </a>
      </footer>
    </div>
  );
}
