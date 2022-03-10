import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://raw.githubusercontent.com/fivethirtyeight/data/master/college-majors/recent-grads.csv'
export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      //d.Major = +d.Major;
      //d.Major_category = +d.Major_category;
      d.Median = +d.Median;
      d.Share_women = +d.Share_women;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};