// pages/privacy.tsx
import { FC } from 'react';

const PrivacyPage: FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-500 mb-4 text-center">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-200 text-lg mb-6">
          Cette politique de confidentialité décrit comment Farmly collecte,
          utilise et protège vos données personnelles.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-500">
            Collecte de données
          </h2>
          <p className="text-gray-200">
            Farmly collecte des informations personnelles lors de votre
            inscription, de vos réservations et de vos interactions avec notre
            application. Ces données incluent des informations comme votre nom,
            adresse email, numéro de téléphone, et historique des commandes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500">
            Utilisation des données
          </h2>
          <p className="text-gray-200">
            Les données collectées sont utilisées pour améliorer l'expérience
            utilisateur, gérer les réservations, et vous fournir un service de
            support efficace.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500">
            Partage des données
          </h2>
          <p className="text-gray-200">
            Farmly ne partage pas vos données avec des tiers sans votre
            consentement, sauf dans les cas nécessaires pour le traitement des
            paiements ou en cas de demande légale.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500">
            Sécurité des données
          </h2>
          <p className="text-gray-200">
            Nous prenons des mesures de sécurité appropriées pour protéger vos
            données contre tout accès non autorisé, toute altération ou toute
            divulgation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-500">
            Modifications de la politique de confidentialité
          </h2>
          <p className="text-gray-200">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications seront publiées sur
            cette page avec une mise à jour de la date.
          </p>

          <div className="mt-6 text-center">
            <p className="text-gray-200">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
