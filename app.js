const inputDiv = document.querySelectorAll('.input-div')
const submitBtn = document.getElementById('submit-btn')

const checkValidate = () => {
    const inputFname = document.getElementById('fname')
    const inputLname = document.getElementById('lname')
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')

    const fnameValue = inputFname.value.trim()
    const lnameValue = inputLname.value.trim()
    const emailValue = inputEmail.value.trim()
    const passwordValue = inputPassword.value.trim()

    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (fnameValue === "") {
        inputDiv[0].classList.add('error')
    } else {
        inputDiv[0].classList.remove('error')
    }

    if (lnameValue === "") {
        inputDiv[1].classList.add('error')
    } else {
        inputDiv[1].classList.remove('error')
    }

    if (emailValue.match(checkEmail)) {
        inputDiv[2].classList.remove('error')
    } else {
        inputDiv[2].classList.add('error')
    }

    if (passwordValue === "") {
        inputDiv[3].classList.add('error')
    } else {
        inputDiv[3].classList.remove('error')
    }
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkValidate() 
});

