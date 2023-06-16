import React from 'react'

function ValutaChange() {

const myHeaders = new Headers();
myHeaders.append("apikey", "F9Fbsi1XWgTO27plz6BfRSlzxtmUGbsO");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=HUF&from=EUR&amount=5", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <div>success</div>
  )
}

export default ValutaChange