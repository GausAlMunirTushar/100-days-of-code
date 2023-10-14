const button = document.querySelector('.birds')

const fetchData = async () => {
    try {
        const uri = 'https://api.slingacademy.com/v1/sample-data/photos'
        const response = await fetch(uri)
        const data = await response.json()
        clearData()
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

const clearData = () => {
    // Remove all child elements from the root element
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}

const displayData = (data) => {
    let root = document.getElementById('root');

    data.photos.forEach(photo => {
        const photoUrl = photo.url;
        const photoTitle = photo.title; 
        const photoDescription = photo.description
        
        // create new div 
        const div = document.createElement('div')
        div.style.width = '400px'
        div.style.height = '320px'
        div.style.border = '1px solid grey'
        div.style.padding = '20px'
        div.style.borderRadius = '10px'
        div.style.marginTop = '10px'
        // Create an img element
        const img = document.createElement('img');
        img.src = photoUrl
        img.style.width = '340px'
        img.style.height = '150px'
    
        // Create an h2 element for the title
        const h2 = document.createElement('h2');
        h2.textContent = photoTitle; 
        h2.style.color = 'black'

        const p = document.createElement('p')
        p.textContent = photoDescription
        p.style.color = 'gray'

        // Append img , h2 and p
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p)
        root.appendChild(div)
    });
    
};

button.addEventListener('click', () => {
    fetchData();
})