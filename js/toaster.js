// toaster Elements
const toaster = document.getElementById('toaster');
const toasterTitle = document.getElementById('toaster-title');
const toasterText = document.getElementById('toaster-text');
const toasterCross = document.getElementById('toaster-cross');
const timerline = document.getElementById('timerline')

const autoHide = () => {
    let widthSize = 100; // Start at 100%

    // Set the width initially, ensuring it uses the transition
    timerline.style.width = widthSize + '%';

    // Calculate width change per interval
    const decrement = 500 / 3000 * 100;

    const interval = setInterval(() => {
        widthSize -= decrement; // Reduce width size
        timerline.style.width = widthSize + '%'; // Apply the updated width

        // console.log(widthSize);
    }, 500); // Adjust every 500ms

    // After 3 seconds, hide toaster and clear interval
    setTimeout(() => {
        toaster.classList.add('hide');
        clearInterval(interval);
    }, 3500);
}

// toaster 
const toasterContent = {
    success: {
        title: "Success !",
        text: "Your details is submitted successfully",
        color: "#2c9d45",
        backgroundColor: "#ebfbee",
        crossIcon: "images/cross-tost-success.svg",
    },

    warning1: {
        title: "Warning",
        text: "Please provide first name",
        color: "#f18a02",
        backgroundColor: "#fff9dc",
        crossIcon: "images/cross-tost-warning.svg",
    },

    warning2: {
        title: "Warning",
        text: "Please provide an email",
        color: "#f18a02",
        backgroundColor: "#fff9dc",
        crossIcon: "images/cross-tost-warning.svg",
    },

    error: {
        title: "Error",
        text: "Please provide first name & email",
        color: "#d32f2f",
        backgroundColor: "#ffebee",
        crossIcon: "images/cross-tost-error.svg",
    }

};

// toaster show on submit 

const form = document.querySelector("form");
const firstNameInput = document.getElementById('first-name');
const emailInput = document.getElementById('email-address');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const email = emailInput.value.trim();

    if (firstName && email) {
        localStorage.setItem("submittedName", firstName);
        localStorage.setItem("submittedEmail", email);
        updateToaster('success');
    } else if (email) {
        updateToaster('warning1');
    } else if (firstName) {
        updateToaster('warning2');
    } else {
        updateToaster('error');
    }

    autoHide();

    emailInput.value = '';
    firstNameInput.value = '';
})

// Function to update toaster dynamically
const updateToaster = (type) => {

    toaster.classList.remove('hide')
    // Toaster Value
    toasterTitle.innerText = toasterContent[type].title;
    toasterText.innerText = toasterContent[type].text;
    toasterCross.children[0].src = toasterContent[type].crossIcon;
    toaster.style.backgroundColor = toasterContent[type].backgroundColor
    toaster.style.color = toasterContent[type].color
    timerline.style.backgroundColor = toasterContent[type].color
}

// close toaster
toasterCross.addEventListener('click', () => {
    toaster.classList.add('hide');
})

// clear localStorage on Reload
window.onload = function () {
    localStorage.clear();
};