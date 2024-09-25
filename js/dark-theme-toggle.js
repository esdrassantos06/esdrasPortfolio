
        // Selecionando os elementos da página
        let trail = document.getElementById('trail');
        let light = document.getElementById('light');
        let body = document.querySelector('body');
        let h2 = document.querySelectorAll('h2'); // Seleciona todos os elementos h2
        let p = document.querySelectorAll('p'); // Seleciona todos os elementos p
        let planta = document.getElementById('planta');

        // Função para alternar entre modos escuro e claro
        function toggleDarkMode() {
            body.classList.toggle('dark');
            h2.forEach(element => element.classList.toggle('dark'));
            p.forEach(element => element.classList.toggle('dark')); 
            planta.classList.toggle('dark');
        }

        trail.addEventListener('click', toggleDarkMode);
        light.addEventListener('click', toggleDarkMode);


        // Função para abrir a aba selecionada
        function openTab(tabName) {
            let i;
            let tabs = document.getElementsByClassName("tab-content");
            let buttons = document.getElementsByClassName("tab-button");

            // Esconde todo o conteúdo das abas
            for (i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";

            for (i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }

            event.currentTarget.classList.add("active");
        }