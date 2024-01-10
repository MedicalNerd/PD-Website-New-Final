
const worksInfo = {
    "movie-website": {
        "title": "Movie Website GA",
        "desc": "A random GA project",
        "images": ["images/movie.png"],
        "icons":["icons/illustrator.png","icons/illustrator.png"],
    }, 

    "digital-book-service": {
        "title": "Book Service",
        "desc": "My company's homepage and concept combine a passion for music and reading, modeled after Amazon Audible. With a nod to yin and yang and a blue color scheme for contrast, the logo, which features headphones and a book face, represents the harmony between reading and music. The green bar gives a contemporary touch and is evocative of Leo 2.0. The portfolio page features transparent pieces centered around a central shape, emulating the design of Scrom parcels. The CV, which draws inspiration from Scrom, emphasizes your advantages to draw in possible backers. To establish your reputation, your about me section features a professional photo along with mentions of your collaborations with well-known authors and performers. The design of the home page, which includes a search bar and a free trial button, is similar to Audible",
        "images": ["images/T252GA.png"],
        "icons":["icons/illustrator.png"]
    },
    "Name-card":{
        "title": "Name Card",
        "desc": "I designed this Namecard using illustrator by using some references from the internet about using lines in Typography to create a Y and a L since it is a nickname people I know call me by with the circle around it to add more content to the name card and to have people's attention be focused onto the YL",
        "images": ["images/Asset 1.png"],
        "icons":["icons/illustrator.png","icons/html.png"],
    },
}

document.addEventListener("DOMContentLoaded", () => {
    let id = sessionStorage.getItem("id");
    if (worksInfo[id]) {
        document.querySelector(".card-text").innerText = worksInfo[id].desc;
        document.querySelector(".card-title").innerText = worksInfo[id].title;
        worksInfo[id].images.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card");
            
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("card-img-top");

            card.appendChild(image);
            document.getElementById("yessir").appendChild(card);
        })
        worksInfo[id].icons.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card-skills");
    
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("card-img");

            card.appendChild(image);
            document.getElementById("icon-container").appendChild(card);
        })
        worksInfo[id].icons.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card-skills");
    
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("card-img");

            card.appendChild(image);
            document.getElementById("gallery").appendChild(card);
        })
        
    } else {
        console.log("does not exists")
    }
})