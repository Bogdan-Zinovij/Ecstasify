import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Subs from '../components/Subs';
import Tracks from '../components/Tracks';
import Users from '../components/Users';
import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';
import Sub from '../pages/Sub';
import Track from '../pages/Track';
import User from '../pages/User';

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/lab-1" element={<Lab1 />} />
      <Route path="/lab-2" element={<Lab2 />}>
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<User />} />
        <Route path="tracks" element={<Tracks />} />
        <Route path="tracks/:id" element={<Track />} />
        <Route path="subs" element={<Subs />} />
        <Route path="subs/:id" element={<Sub />} />
      </Route>
    </Routes>
  );
};

export default Router;
