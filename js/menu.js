let spdElements = document.querySelectorAll('.listbutton_click');
spdElements.forEach(listElement => 
{
    listElement.addEventListener('click', ()=>
    {        
        listElement.classList.toggle('flecha');
        let height=0;
        let menu=listElement.nextElementSibling;
        if(menu.clientHeight=="0")
        {
            height=menu.scrollHeight;
        }
        menu.style.height=`${height}px`;
    })
});