let formData = {};
const form = document.querySelector('.form');
const btn = form.querySelector('button');

form.addEventListener('input', (e) => {
    
    formData[e.target.name] = e.target.value; // записываем в обьект name = value
    localStorage.setItem('data', JSON.stringify(formData));

});

if(localStorage.getItem('data')) {

    formData = JSON.parse(localStorage.getItem('data'));
    for (let key in formData){
        form.elements[key].value = formData[key];  
    };
};

btn.addEventListener('submit', (e) => {
    // form.reset();
});