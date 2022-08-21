const count__number = document.getElementById('count');
const count__kate = document.getElementById('count__kate');
const birthday__date = new Date(`November 04 1996 04:00:00`);
const birthday__kate = new Date(`December 14 2000 11:00:00`);

function getAge(name, birthday__date) {
    const current__date = Date.now();
    const left__date = current__date - birthday__date.getTime();
    const age__date = new Date(left__date);
    const age = Math.abs(age__date.getUTCFullYear() - 1970);
    const milisec = age__date.getTime() / 31556952000;
    const number__age = Math.floor(milisec, 0);

    if(name === 'Sergey'){
        count__number.innerHTML = `<span class="age">${age}<sup>.${Math.floor((milisec - number__age)*1000000000)}</sup></span>`
    }

    if(name === 'Kate'){
        count__kate.innerHTML = `<span class="age">${age}<sup>.${Math.floor((milisec - number__age)*1000000000)}</sup></span>`
    }
}

setInterval(() => {
        getAge('Sergey', birthday__date);
        getAge('Kate', birthday__kate);
}, 100);