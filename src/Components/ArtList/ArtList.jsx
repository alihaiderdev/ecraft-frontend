import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtListItem = ({ _id, coverPhoto, title, cost }) => {
  return (
    <div>
      <Link to={`/arts/${_id}`}>
        <img src={coverPhoto} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{title}</h2> ---- <h3>${cost}</h3>
      </div>
    </div>
  );
};

const ArtList = () => {
  var [arts, setArts] = useState([]);
  const fetchArts = async () => {
    try {
      var {
        data: {
          data: { arts },
        },
      } = await axios.get('/arts');

      setArts([...arts]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fn = async () => fetchArts();
    fn();
  }, []);

  console.log(arts);
  return (
    <div>
      <h1>Arts List</h1>
      {arts.map((art) => (
        <ArtListItem key={art._id} {...art} />
      ))}
    </div>
  );
};

export default ArtList;
