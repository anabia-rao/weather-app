//await se interpreter waite karega jab tak api se response nahi aata; 
// console.log("getweather function called");
//queryselecter se city input ka value le lo;
//axios se api call karo aur response lo;
//
async function getweather(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    
  let response = await axios(
    `https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906&q=${city}`,
  );
  console.log("response : ",response);
  console.log("temp: ", response.data.current.temp_c);

  let temperature = response.data.current.temp_c;
  let description = response.data.current.condition.text;

  document.querySelector("#temperature").innerHTML = `Temperature: ${temperature}°C`;
  document.querySelector("#description").innerHTML = `Description: ${description}`;
}
