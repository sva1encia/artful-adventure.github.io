/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

const artworks = [
    {
        title: "Owl",
        artist: "Vincent van Gogh",
        medium: "Oil on Canvas",
        image: "img/owl.jpg"
    },
    {
        title: "Flowers",
        artist: "Vincent van Gogh",
        medium: "Oil on Canvas",
        image: "img/flowers.jpg"
    },
    {
        title: "Tower",
        artist: "Leonardo da Vinci",
        medium: "Oil on Panel",
        image: "img/tower.jpg"
    },
    {
        title: "Art", 
        artist: "Micheal Duo", 
        medium: "oil paint", 
        image: "img/art.jpg"
     
    }
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    console.log("cardContainer:", cardContainer);
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    console.log("templateCard:", templateCard);
    
    for (let i = 0; i < artworks.length; i++) {
        const artwork = artworks[i];
        const nextCard = templateCard.cloneNode(true);
        nextCard.style.display = "block";
        const cardContent = nextCard.querySelector(".card-content");
        console.log("cardContent:", cardContent);

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        
        const cardTitle = cardContent.querySelector("h2");
        console.log("cardTitle:", cardTitle);
        cardTitle.textContent = artwork.title; 

        const cardImage = cardContent.querySelector("img");
        console.log("cardImage:", cardImage);
        cardImage.src = artwork.image;
        cardImage.alt = artwork.title + " by " + artwork.artist;

        const cardList = cardContent.querySelector("ul");
        console.log("cardList:", cardList);
        const artistListItem = cardList.querySelector(".artist");
        console.log("artistListItem:", artistListItem);
        artistListItem.textContent = "Artist: " + artwork.artist;
        const mediumListItem = cardList.querySelector(".medium");
        console.log("mediumListItem:", mediumListItem);
        mediumListItem.textContent = "Medium: " + artwork.medium;

        cardContainer.appendChild(nextCard);
    }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function addPicture() {
    const newArtwork1 = {
        title: "Art", 
        artist: "Micheal Duo", 
        medium: "oil paint", 
        image: "img/art.jpg"
    
    };
    artworks.push(newArtwork1);
    
    const newArtwork2 = {
        title: "Abstract", 
        artist: "Michelangelo", 
        medium: "Watercolor", 
        image: "img/abstrac.jpg"
    };
    artworks.push(newArtwork2);
    const newArtwork3 = {
        title: "City", 
        artist: "Michelangelo", 
        medium: "oil on canvas", 
        image: "img/city.jpg"
    };
    artworks.push(newArtwork3);
    const newArtwork4 = {
        title: "Nature", 
        artist: "Rembrandt", 
        medium: "oil on canvas", 
        image: "img/nature.jpg"
    };
    artworks.push(newArtwork4);
    const newArtwork5 = {
        title: "Rocks ", 
        artist: "Salvador Dali", 
        medium: "oil on panel", 
        image: "img/rocks.jpg"
    };
    artworks.push(newArtwork5);
    const newArtwork6 = {
        title: "Snow", 
        artist: "Claude Monet", 
        medium: "oil on canvas", 
        image: "img/snow.jpg"
    };
    artworks.push(newArtwork6);
    const newArtwork7 = {
        title: "Waterfall", 
        artist: "Claude Monet", 
        medium: "oil on panel", 
        image: "img/water.jpg"
    };
    artworks.push(newArtwork7);
    showCards();

}

function removePicture() {
    artworks.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
