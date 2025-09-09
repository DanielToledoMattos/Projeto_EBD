const perfil = document.querySelector('.perfil');
const menu = document.querySelector('.menu');
const dropdown = document.querySelectorAll('.dropdown');


perfil.onclick = () => {
    menu.classList.toggle('ativo')
}

dropdown.onclick = () => {
    menu.classList.toggle('ativo')
}