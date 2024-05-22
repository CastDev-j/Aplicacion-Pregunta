document.addEventListener('DOMContentLoaded', function () {
    console.log('https://raw.githubusercontent.com/cAndresDev/Humberto/master/WhatsApp%20Image%202024-05-21%20at%2010.59.12%20PM.jpeg');
    const question = document.getElementById('question');
    const buttons = document.getElementById('buttons');
    const showQuestionBtn = document.getElementById('showQuestionBtn');
    const content = document.getElementById('content');

    // Mostrar la pregunta con un efecto de aparición
    setTimeout(function () {
        question.classList.add('appear');

        // Desvanecer la pregunta después de 2 segundos
        setTimeout(function () {
            question.classList.remove('appear');
            question.classList.add('fade-out');

            setTimeout(function () {
                question.classList.add('hidden');
                content.style.display = 'block';
                buttons.classList.remove('hidden');

                setTimeout(function () {
                    content.classList.add('appear');
                }, 100);

                content.classList.remove('appear');


            }, 2000); // Espera a que la transición de opacidad termine
        }, 2000); // 2 segundos antes de desvanecer la pregunta
    }, 100); // Comienza casi inmediatamente

    showQuestionBtn.addEventListener('click', function () {
        question.classList.remove('hidden');
        question.classList.remove('fade-out');
        content.style.display = 'none';
        buttons.classList.add('hidden');

        setTimeout(function () {
            question.classList.add('appear');

            setTimeout(function () {
                question.classList.remove('appear');
                question.classList.add('fade-out');

                setTimeout(function () {
                    question.classList.add('hidden');
                    content.style.display = 'block';
                    buttons.classList.remove('hidden');

                    setTimeout(function () {
                        content.classList.add('appear');
                    }, 100);

                    content.classList.remove('appear');


                }, 2000); // Espera a que la transición de opacidad termine

            }, 2000); // 2 segundos antes de desvanecer la pregunta nuevamente
        }, 100); // Comienza casi inmediatamente
    });



    let buttonYes = document.getElementById('yesBtn');
    let response = document.getElementById('response');

    buttonYes.addEventListener('click', function () {
        content.classList.add('fade-out');
    
        setTimeout(function () {
            content.style.display = 'none';
            content.classList.remove('fade-out');
    
            response.classList.remove('hidden');
            response.style.opacity = 0;
    
            setTimeout(function () {
                response.style.opacity = 1;
            }, 100); // Comienza casi inmediatamente
        }, 1000); // Espera a que la transición de opacidad termine
    });
    


});


// se va a ir haciendo mas pequeño el boton no al clickearlo mientras que el si se va a ir haciendo mas grande, solo al click no


const buttonYes = document.getElementById('yesBtn');
const buttonNo = document.getElementById('noBtn');

let noWidth = 50;
let yesWidth = 50;

buttonNo.addEventListener('click', function () {

    numero = Math.floor(Math.random() * 15 + 10);

    noWidth -= numero;
    yesWidth += numero;

    buttonNo.style.width = `${noWidth}%`;
    buttonYes.style.width = `${yesWidth}%`;

    //transition with

    buttonNo.style.transition = 'width 0.5s ease';
    buttonYes.style.transition = 'width 0.5s ease';

    if (noWidth <= 8) {
        buttonNo.style.display = 'none'; // Ocultar el botón "No" cuando su ancho llegue a 0
    }

    if (yesWidth > 100) {
        buttonYes.style.width = `100%`;
    }
});


