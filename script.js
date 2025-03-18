
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];


function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.id = ramen.id;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}


function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    
    const stars = ramen.rating ? '★'.repeat(ramen.rating) + '☆'.repeat(5 - ramen.rating) : 'No rating yet';
    
    ramenDetail.innerHTML = `
        <div class="detail-content">
            <h3>${ramen.name}</h3>
            <p><strong>Restaurant:</strong> ${ramen.restaurant}</p>
            <p><strong>Rating:</strong> <span class="rating">${stars}</span> ${ramen.rating ? `(${ramen.rating}/5)` : ''}</p>
            <p><strong>Comment:</strong> ${ramen.comment || 'No comment yet'}</p>
            <img src="${ramen.image}" alt="${ramen.name}" style="max-width: 100%; border-radius: 8px;">
        </div>
    `;
}


function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment').value;
        
        
        const newRamen = {
            id: ramens.length + 1,
            name,
            restaurant,
            image,
            rating,
            comment
        };
        
        
        ramens.push(newRamen);
        
        
        const ramenMenu = document.getElementById('ramen-menu');
        const img = document.createElement('img');
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.dataset.id = newRamen.id;
        img.addEventListener('click', () => handleClick(newRamen));
        ramenMenu.appendChild(img);
        
        
        form.reset();
        
        
        handleClick(newRamen);
    });
}


function main() {
    displayRamens();
    addSubmitListener();
}


document.addEventListener('DOMContentLoaded', main);