import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Track = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const fetchData = async () => {
    const resp = await fetch(`https://dummyjson.com/todos${params.id}`);
    setUser(resp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Track
      <ul>
        {Object.entries(user).map(([key, value], i) => {
          if (key === 'id') return null;
          return (
            <li key={i}>
              {key}: {value.toString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Track;
