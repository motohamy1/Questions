const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const parent = e.currentTarget.parentElement.parentElement;
            btns.forEach(function (item){
                if(item !== btn){
                    item.parentElement.parentElement.classList.remove('show-text')
                }
            })
        parent.classList.toggle('show-text')
    });
});
