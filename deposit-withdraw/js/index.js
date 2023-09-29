
// login into dashboard
function login() {
    let loginBtn = document.querySelector('#login')

    loginBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    // check form email and password
    if(email == 'gausalmunirtushar@gmail.com' && password == '1234'){
        window.location.href = 'dashboard.html'
    }
    else{
        alert('Your Email or Password is invalid')
    }
})
} login()


// deposit 