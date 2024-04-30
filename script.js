
const panels = document.querySelectorAll('.panel')
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67ec89d8820b9c5dbf889a6772086224&page=1'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=67ec89d8820b9c5dbf889a6772086224'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
    console.log(data.results)

    // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=67ec89d8820b9c5dbf889a6772086224')
    // .then(response => response.json())
    // .then(data => showMovies(data.results))
    // .catch(err => console.error(err));
}

function showMovies(movies) {

    for (let i = 0; i < movies.length; i++) {
        const div = document.createElement("div");
        div.className = "panel";
        div.style.backgroundImage = `url(${IMG_PATH + movies[i].poster_path})`
        const containerEl = document.getElementsByClassName('container')
        containerEl[0].appendChild(div)
      
        // Add a click listener to each div
        div.addEventListener("click", function() {
          // Remove the "active" class from all divs
          const allPanels = document.querySelectorAll(".panel");
          allPanels.forEach(panel => panel.classList.remove("active"));
      
          // Add the "active" class to the clicked div
          this.classList.add("active");
        });
      }

    // for(let i = 0; i <= 4; i++) {
    //     panels[i].style.backgroundImage = `url(${IMG_PATH + movies[i].poster_path})`
    // }
}

console.log("panel.length " + panels.length)
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        // getImage()
        // getMovies(API_URL)
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

function getImage() {
    let api = 'https://api.unsplash.com/photos/random?client_id=Gg8QPuj_8FJrQXUnW7A8Qw6H9wiBCYUyYY1Vv41vLRc'
    fetch(api, { mode: 'no-cors' }).then(res => {
        return res
        console.log("res")
    }).then(data => {
        display_image_divBackground('https://images.pexels.com/photos/1266741/pexels-photo-1266741.jpeg')
        console.log(data)
    }).catch(e => console.log("error"))
}

function display_image_divBackground(image) {
    active = document.querySelector('.active')
    active.style.backgroundImage = `url(${image})`;
}