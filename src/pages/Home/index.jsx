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
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Lista de Países</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map(country => (
          <div key={country.cca3} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <Link to={`/detalhes/${country.cca3}`}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-32 object-contain mb-4 mx-auto"
              />
              <h2 className="text-xl font-semibold">{country.name.common}</h2>
            </Link>
            <FavoriteButton item={{ id: country.cca3, nome: country.name.common, ...country }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
