import axios from "axios";

const url = "https://covidnigeria.herokuapp.com/api";

const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
var options = {
  method: "GET",
  url: "https://nigeria-covid-19.p.rapidapi.com/api/states",
  headers: {
    "x-rapidapi-host": "nigeria-covid-19.p.rapidapi.com",
    "x-rapidapi-key": "f85c717c89msh81e164ce39c19bbp16ab9djsn2d93aca78adf",
  },
};
const fetchDailyData = async () => {
  try {
    const res = await axios.request(options);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export { fetchData, fetchDailyData };
