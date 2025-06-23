import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton.jsx';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,cca3')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-300 uppercase">Descubra os Países</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country) => (
      <div
        key={country.cca3}
        className="border border-blue-700 bg-gray-800 rounded-lg overflow-hidden shadow hover:bg-blue-800 transition duration-300"
      >
        <Link to={`/detalhes/${country.cca3}`}>
          <div className="w-full h-40 overflow-hidden flex items-center justify-center bg-gray-900">
            <img
              src={country.flags.png}
              alt={`Bandeira de ${country.name.common}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl text-blue-200 font-semibold mb-1">{country.name.common}</h2>
            <p className="text-sm text-gray-300">
              Capital: {country.capital ? country.capital[0] : 'Não informada'}
            </p>
          </div>
        </Link>
        <div className="p-4 bg-gray-700 border-t border-blue-600">
          <FavoriteButton item={{ id: country.cca3, nome: country.name.common, ...country }} />
        </div>
      </div>

        ))}
      </section>
    </div>
  );
};

export default Home;
