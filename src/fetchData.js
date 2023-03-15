import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.request('https://api.exchangerate.host/latest?base=USD')
    // console.log(response.data.rates)
    return response.data.rates
  } catch (error) {
    console.error(error)
  }
}