let products = document.querySelector('.products')
let root = document.getElementById('root');
let fetchProduct = async () => {
    try {
        const uri = 'https://api.slingacademy.com/v1/sample-data/products'
        const response = await fetch(uri)
        const data = await response.json()
        clearRoot()
        displayProduct(data)
    } catch (error) {
        console.log(error)
    }
}
const clearRoot = () => {
    // Remove all child elements from the root element
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}
const displayProduct = (data) => {
    let root = document.getElementById('root');

    data.products.forEach(product => {
        const productPhotoUrl = product.photo_url;
        const productName = product.name; 
        const productDescription = product.description
        
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
        img.src = productPhotoUrl
        img.style.width = '340px'
        img.style.height = '150px'
    
        // Create an h2 element for the title
        const h2 = document.createElement('h2');
        h2.textContent = productName; 
        h2.style.color = 'black'

        const p = document.createElement('p')
        p.textContent = productDescription
        p.style.color = 'gray'

        // Append img , h2 and p
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p)
        root.appendChild(div)
    });
    
};

products.addEventListener('click', () => {
    fetchProduct()
})