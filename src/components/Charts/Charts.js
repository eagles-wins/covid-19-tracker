import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchDaily = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchDaily();
  }, []);

  return <div>Charts</div>;
};

export default Charts;
