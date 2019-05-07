(function(){
    //These selectors with custom attributes are more comfortable.
    //Because if another developer are gonna change class names. These selectors are gonna work;
    //And every developer will know that some script uses these attributes to select.
    const searchSection = document.querySelector('[data-js=nav_search-section]');
    const searchSlide = document.querySelector('[data-js=nav_search-slide]');
    
    //default way
    const searchButton = document.querySelector('.search-button');
    const searchOptions = document.querySelector('.main-header_nav_search-options');
    const searchInput = searchSection.querySelector('input');
    const mainHeaderNav = document.querySelector('.main-header_nav');
    const checkboxes = [...document.querySelectorAll('.main-header_nav_search-options .checkbox')];
    const burgerButton = document.getElementById('burger-button');
    const navbarItems = mainHeaderNav.querySelector('ul');
    const cleanOutInputBtn = searchInput.nextElementSibling;

    //its first way to solve this task. Change classes

    //stop bubbling
    mainHeaderNav.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    //show searchSection
    searchButton.addEventListener('click', (e) => {
        mainHeaderNav.classList.remove('search-section_unactive');
        mainHeaderNav.classList.add('search-section_active');

        e.stopPropagation();
    });

    //handle input`s changes 
    searchInput.addEventListener('input', function(e) {
        if(this.value.length > 0) {
            mainHeaderNav.classList.add('inputed');
        } else {
            mainHeaderNav.classList.remove('inputed');
        }
    });
    
    //show search-options
    searchInput.addEventListener('focus', () => {
        searchOptions.classList.add('main-header_nav_search-options-show');
    });

    //cleanout input and hide search-options
    cleanOutInputBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        mainHeaderNav.classList.remove('inputed');
    });

    //hide searchSection
    document.addEventListener('click', (e) => {
        mainHeaderNav.classList.remove('search-section_active');
        mainHeaderNav.classList.remove('inputed');
        mainHeaderNav.classList.add('search-section_unactive');
        navbarItems.classList.remove('main-header_nav_items-open');
        searchOptions.classList.remove('main-header_nav_search-options-show');
    });

    //hande checkboxes
    function changeCheckBox(e) {
        const target = e.currentTarget;
        const checked = target.querySelector('input').checked;

        target.querySelector('label').style.border = checked ? 'none' : '1px solid #d3d3d3'
        target.querySelector('svg').style.display = checked ? 'block' : 'none';
    }
    
    checkboxes.forEach((item) => {
        item.addEventListener('click', changeCheckBox, true);
    });


    burgerButton.addEventListener('click', (e) => {
        navbarItems.classList.toggle('main-header_nav_items-open');
        e.stopPropagation();
    });

})();
