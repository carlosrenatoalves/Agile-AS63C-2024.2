    const iconePerfil = document.getElementById('icone_perfil');
    const menuDropdown = document.getElementById('menu_dropdown');


    iconePerfil.addEventListener('click', (event) => {
        event.stopPropagation(); 
        menuDropdown.style.display = 
            menuDropdown.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', (event) => {
        if (!menuDropdown.contains(event.target) && !iconePerfil.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });