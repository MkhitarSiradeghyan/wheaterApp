export const fetchWheaterData = (city) => {
    return axios.get(`/data/2.5/wheater?q=${city}&appid=806801d0f27985f95c058f4d955f3b74`)
}