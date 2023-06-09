
const API_KEY = 'de4aef5ea3fe3dd046788dc2f85655e1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + 'search/movie?' + API_KEY;

// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(response);
//     // Process the retrieved data here
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//   });


// // fetch('https://www.themoviedb.org/')

console.log("Testing Console");

fetch(API_URL)
.then(res => {
    res.jason();
    if (res.ok){
        console.log('SUCESS');

    }
    else{
        console.log('NOTSUCESS');
    }
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
