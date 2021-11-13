let countList = 0;
document.getElementById('navBurger').addEventListener('click', function () {
    document.getElementsByClassName('nav__child--list')[0].classList.toggle('nav__child--listShow');
    console.log(countList);
    if (countList > 0){
        document.getElementsByClassName('nav__child--list')[0].classList.toggle('nav__child--listNoShow');
    }
    countList ++;
})