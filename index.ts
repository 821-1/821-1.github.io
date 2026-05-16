const tabButtons =document.querySelectorAll<HTMLElement>('.tab-button');
const tabContents = document.querySelectorAll<HTMLElement>('.tab');

tabButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const targetTabId=button.getAttribute('data-tab');
        if(!targetTabId) return;

        tabButtons.forEach((btn)=>btn.classList.remove('active'));
        tabContents.forEach((content)=>content.classList.remove('active'));
        button.classList.add('active');
        const targetTab=document.getElementById(targetTabId);
        if(targetTab){
            targetTab.classList.add('active');
        }
    });
});
