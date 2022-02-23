import React, { useEffect, useState } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const data = async () => {
      const res = await fetchData();
      setData(res);
    };
    data();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Charts />
    </div>
  );
};

export default App;
