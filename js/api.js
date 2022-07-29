export const getWeatherData = async (city) => {
  try {
    // d4ca7b13602aa807403d0ca2c7f303da
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4ca7b13602aa807403d0ca2c7f303da&lang=ru&units=metric`
    );
    return await response.json();
  } catch (error) {
    console.error();
  }
};
