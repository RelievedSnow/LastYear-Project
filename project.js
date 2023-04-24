const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var element = document.align-self-start;
    element.classList.toggle("")
    
}

// Toaster
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Womens&Mens&kids

const items = document.querySelectorAll('.card');

document.querySelector('#WomensBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Womens') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#MensBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Mens') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#KidsBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'Kids') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

// document.querySelector('#allBtn').addEventListener('click', function() {
//     items.forEach(element => {
//         element.style.display = 'grid';
//     });
// })