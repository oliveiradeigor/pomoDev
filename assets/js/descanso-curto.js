


//btnPararPomodoro.style.display = 'none';

//console.log(minutos);



btnPararDescansoCurto.style.display = 'none'



abaDescansoCurto.addEventListener('click', function () {

    console.log(sessionStorage.length);


    if (sessionStorage.length == 1) {

        let logComResposta = window.confirm("Deseja realmente interromper o processo?");

        if (logComResposta == true) {
            console.log("ir aba descanso curto");
            mostrarPomodoro()
            sessionStorage.removeItem('pomodoro');
        }
    } else {
        mostrarPomodoro()
    }








    function mostrarPomodoro() {
        abaPomodoro.classList.remove('aplicarBoldFont');
        abaDescansoCurto.classList.add('aplicarBoldFont');
        caixaDescansoCurto.classList.remove('ocultar');

        caixaPomodoro.classList.add('ocultar');

        containerPomodoro.classList.add('modal__borda--tema-branco');

        telaMinutosPomodoro.classList.add('modal__cronometro--minuto-branco');
    }


    //containerPomodoro.classList.add('modal__borda--tema-branco');
    //containerPomodoro.classList.add('modal__principal--semBackground');
    //telaMinutosPomodoro.classList.remove('modal__cronometro--minuto-vermelho');





})

iniciarCronometroDescansoCurto();


function iniciarCronometroDescansoCurto() {


    let segundosDescansoCurto = 60;
    let minutosDescansoCurto = 5;

    var intervalDescansoCurto;

    function descansoCurto() {

        segundosDescansoCurto--;
        mostraMinutosTela();

        if (segundosDescansoCurto == 0) {
            minutosDescansoCurto--;
            mostraMinutosTela();
            segundosDescansoCurto = 59;
        }


        if (segundosDescansoCurto > 9) {
            mostraSegundosTela()

        } else {
            mostraSegundosTelaComZero();
        }


        //minutos
        if (minutosDescansoCurto < 10)
            mostraMinutosTelaComZero();


        //Fim do pomodoro    
        if (minutosDescansoCurto == 0 && segundosDescansoCurto == 1) {
            //finalizarPomodoro();
            console.log("gg");
            clearInterval(intervalDescansoCurto);
        }

    }





    btnIniciarDescansoCurto.addEventListener('click', () => {

        //elementoMinuto.classList.add('modal__cronometro--minuto-vermelho');
        //containerPomodoro.classList.add('modal__borda--tema-vermlho');

        telaMinutosDescansoCurto.classList.add('modal__cronometro--minuto-azul');
        containerPomodoro.classList.add('modal__borda--tema-azul');
        console.log("Iniciar descanso curto");

        intervalDescansoCurto = setInterval(function () {
            descansoCurto();
        }, 100);


        btnPararDescansoCurto.style.display = "inline";
        btnIniciarDescansoCurto.style.display = "none";

    })

    btnPararDescansoCurto.addEventListener('click', () => {

        console.log("Parar");
        clearInterval(intervalDescansoCurto);

        btnIniciarDescansoCurto.style.display = "inline";
        btnPararDescansoCurto.style.display = "none"
    })





    function mostraMinutosTela() {
        telaMinutosDescansoCurto.innerHTML = minutosDescansoCurto
    }

    function mostraSegundosTela() {
        telaSegundosDescansoCurto.innerHTML = segundosDescansoCurto
    }

    function mostraMinutosTelaComZero() {
        telaMinutosDescansoCurto.innerHTML = "0" + minutosDescansoCurto

    }

    function mostraSegundosTelaComZero() {
        telaSegundosDescansoCurto.innerHTML = "0" + segundosDescansoCurto
    }

    function finalizarPomodoro() {
        console.log("finaliza pomo");
        abaPomodoro.classList.remove('aplicarBoldFont');
        caixaPomodoro.classList.add('ocultar');

        abaDescansoCurto.classList.add('aplicarBoldFont');
        caixaDescansoCurto.classList.remove('ocultar');
    }




}






