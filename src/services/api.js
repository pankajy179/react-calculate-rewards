import { useState, useEffect } from 'react';

const fetchData = async () => {
  return new Promise(async (resolve, reject) => {

    const response = await fetch('../transactions.json');
    if (!response.ok) {
      reject("Failed to fetch transactions.")
    }
    const data = await response.json()
    resolve(data)
  });
};

export default fetchData;