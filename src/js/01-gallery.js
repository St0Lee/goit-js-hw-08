
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", createMarkUp(galleryItems));

function createMarkUp (arr) {
    return arr
   .map (({preview, original, description}) =>`
    <li class = "gallery-item">
     <a class="gallery-link" href="${original}">
        <img 
            class="gallery-image" 
            src ="${preview}" 
            data-source="${original}" 
            alt ="${description}"
            width = "360"
        />
     </a>
    </li>
   `).join("")
};

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
