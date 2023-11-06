;

offset = 0;
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const sliderLine = document.querySelector('#sliderLine');

const mediaDesktop = window.matchMedia('(min-width: 800px)');
const mediaTablets = window.matchMedia('(min-width: 480px) and (max-width: 799px)');
const mediaPhones = window.matchMedia('(max-width: 479px)');

nextBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(mediaDesktop.matches){

        offset += 603; // offset = offset + 603;

        if(offset > 1206) {
            offset = 0;
        }

        console.log('clickDesktop');
    }

    if(mediaTablets.matches) {

        offset += 400; // offset = offset + 400;

        if(offset > 800) {
            offset = 0;
        }

        console.log('clickTablets');   
    }

    if(mediaPhones.matches) {

        offset += 300; // offset = offset + 300;

        if(offset > 600) {
            offset = 0;
        }

        console.log('clickPhones');   
    }

    sliderLine.style.right = offset + 'px';
});

prevBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(mediaDesktop.matches) {

        offset -= 603;

        if(offset < 0) {
            offset = 1206;
        }

        console.log('clickDesktop');    
    }

    if(mediaTablets.matches) {

        offset -= 400;

        if(offset < 0) {
            offset = 800;
        }
        
        console.log('clickTablets');   
    }

    if(mediaPhones.matches) {

        offset -= 300;

        if(offset < 0) {
            offset = 600;
        }
        
        console.log('clickPhones');   
    }

    sliderLine.style.right = offset + 'px';
});