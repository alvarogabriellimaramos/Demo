let time;

function debounce(callback) {
    clearTimeout(time);
    time = setTimeout(callback, 500);
};

(() => {
    const div__images = document.querySelectorAll('.image');
    const next_div = document.querySelectorAll('.next-div');

    const nexts = document.querySelectorAll("#next");
    const returns = document.querySelectorAll("#return");

    const imgs1 = [
        '../imgs/img-sinuca-1.jpeg',
        '../imgs/img-sinuca-2.jpeg',
        '../imgs/img-sinuca-3.jpeg'
    ];
    const imgs2 = [
        '../imgs/img-sinuca-pu-1.jpeg',
        '../imgs/img-sinuca-pu-2.jpeg',
        '../imgs/img-sinuca-pu-3.jpeg'
    ];

    let contador = 0;
    function GetNextDiv(next) {
        const spans = next.querySelectorAll('span');
        return spans
    };

    function Next(imgs, div, nextDiv) {
        const SpansNext = GetNextDiv(next_div[nextDiv]);
        return function () {
            debounce(function () {
                contador++;
                if (contador >= imgs.length) {
                    contador = 0;
                    SpansNext.forEach(span => span.style.background = 'white');
                };
                SpansNext[contador].style.background = '#ffcd36';
                div.style.backgroundImage = `url('${imgs[contador]}')`;
            });
        };
    };
    function Return(imgs, div, nextDiv) {
        const SpansNext = GetNextDiv(next_div[nextDiv]);
        return function () {
            debounce(function () {
                contador--;
                if (contador < 0) {
                    const ultimo = imgs.indexOf(imgs[imgs.length - 1]);
                    contador = ultimo;
                    SpansNext.forEach(span => span.style.background = 'white');
                };
                SpansNext[contador].style.background = '#ffcd36';
                div.style.backgroundImage = `url('${imgs[contador]}')`;
            });
        };
    };
    const nextFunction_1 = Next(imgs1, div__images[0], 0);
    const returnFunction_1 = Return(imgs1, div__images[0], 0);

    const nextFunction_2 = Next(imgs2, div__images[1], 1);
    const returnFunction_2 = Return(imgs2, div__images[1], 1);

    nexts[0].addEventListener('click', nextFunction_1);
    returns[0].addEventListener("click", returnFunction_1);

    nexts[1].addEventListener('click', nextFunction_2);
    returns[1].addEventListener('click', returnFunction_2);

})();

(() => {
    const items = document.querySelectorAll('.item');

    items.forEach(function(item,index) {
        const icons = item.querySelector('span');
        const p = item.querySelector('p');
        const h2 = item.querySelector('h2');
        function StyleItem() {
            item.style.background = '#000015';
            item.style.outline = 'none';
            h2.style.color = 'white';
            p.style.color = 'white';
            icons.style.color = '#0082ff';
        };
        
        item.addEventListener('mousemove',function() {
            item.style.background = 'white';
            item.style.outline = '1px solid #000015';
            h2.style.color = 'black';
            p.style.color = 'black';
            icons.style.color = '#ffb10a';
        });
        item.addEventListener('mouseout',StyleItem);
    });
})();


(() => {

    const form__feedback = document.querySelector('.form__main__feedback');
    const inputs__feedback = form__feedback.querySelectorAll('input');
    const textarea = form__feedback.querySelector('textarea');

    const text__response = document.querySelector('.text-response-feedback');

    async function Submit(event) {
        event.preventDefault();
        debounce(async function() {
            try {
                event.preventDefault();
                text__response.textContent = '';
                const data = await fetch('/feedback',{
                    headers: {'Content-Type':"application/json"},
                    method: 'POST',
                    body: JSON.stringify({
                        name: inputs__feedback[0].value,
                        email: inputs__feedback[1].value,
                        message:textarea.value
                    })
                });
                const Json = await data.json();
                text__response.textContent = Json.messagem;
            }
            catch (e) {
                console.log(e);
                text__response.textContent = 'Erro no servidor,tente novamente mais tarde.';
            };
        });
    };
    form__feedback.addEventListener('submit',Submit);
})();

(() => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
            let content = item.querySelector('.content');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    })
})();