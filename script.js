
const panels = document.querySelectorAll('.panel')
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=67ec89d8820b9c5dbf889a6772086224&page=1'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=67ec89d8820b9c5dbf889a6772086224'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


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
        const div = document.createElement("div")
        div.className = "panel";
        div.style.backgroundImage = `url(${IMG_PATH + movies[i].poster_path})`

        const containerEl = document.getElementsByClassName('container')
        containerEl[0].appendChild(div)

        const h3Element = document.createElement("h3")
        const textNode = document.createTextNode(movies[i].overview)
        h3Element.appendChild(textNode)
        div.appendChild(h3Element)

        h3Element.style.backgroundColor = "rgba(0,0,0, 0.6)"
        h3Element.style.borderRadius = "10px"

        //Event listener for click
        div.addEventListener("click", function () {
            // Remove the "active" class from all divs
            const allPanels = document.querySelectorAll(".panel")
            allPanels.forEach(panel => panel.classList.remove("active"))

            // Add the "active" class to the clicked div
            this.classList.add("active")
            h3Element.style.opacity = 1

            //Event listeners for hover i.e mouseenter, mouseleave
            div.addEventListener("mouseenter", function () {
                console.log("mouseenter")

                if (div.classList.contains('active')) {
                    h3Element.style.opacity = 1
                }

            })

            div.addEventListener("mouseleave", function () {
                console.log("mouseleave")
                h3Element.style.opacity = 0
                // setTimeout(() => {
                //     h3Element.style.display = "none"
                // }, 300)

            })
        })


    }

}

