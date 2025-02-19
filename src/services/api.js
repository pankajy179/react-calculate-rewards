import { useState, useEffect } from 'react';

const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require('../data.js')); 
    }, 1000); 
  });
};

export default fetchData;