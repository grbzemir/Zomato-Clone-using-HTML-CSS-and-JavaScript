// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     // 'Share App Link' butonunu seçin
//     const button = document.querySelector('.email button');

//     if (button) {
//         button.addEventListener('click', () => {
//             alert('App link has been shared!');
//         });
//     }
// });

// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('header h3');

//     if (heading) {
//         heading.textContent = 'Welcome to Zomato - Discover the best in Istanbul';
//     }
// });


// // script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.querySelector('.search input');

//     if (searchInput) {
//         searchInput.addEventListener('input', (event) => {
//             const query = event.target.value;
//             console.log('Searching for:', query);
//             // Burada gerçek arama işlevselliğini uygulayabilirsiniz
//         });
//     }
// });


const input = document.querySelector('input');
const email = document.querySelector('.place');
input.addEventListener('click', function () {
    email.classList.add('small');
    email.classList.remove('place');
    console.log('clicked');

});

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email-input');
    const emailLabel = document.querySelector('.email .place');

    emailInput.addEventListener('focus', function () {
        emailLabel.style.display = 'none';
    });

    emailInput.addEventListener('blur', function () {
        if (emailInput.value === '') {
            emailLabel.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.querySelector('.email button');

    shareButton.addEventListener('click', function () {
        const email = document.getElementById('email-input').value;
        if (email) {
            alert(`App link has been sent to ${email}`);
            // Burada email gönderme işlemini gerçekleştirebilirsiniz
        } else {
            alert('Please enter your email address.');
        }
    });
});

