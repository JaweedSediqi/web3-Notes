const notes_containner=document.querySelector('.notes_containner');
const creatBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input_box');

function show(){
    notes_containner.innerHTML=localStorage.getItem('notes');
}
show();

function sava(){
    localStorage.setItem('notes',notes_containner.innerHTML);
}

creatBtn.addEventListener('click',()=>{
    let inputBox=document.createElement('p');
    let img=document.createElement('img');
    inputBox.className='input_box';
    inputBox.setAttribute('contenteditable','true');
    img.src="klvdfvdfs.png";
    notes_containner.appendChild(inputBox).appendChild(img);

});
notes_containner.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        sava();
    }
    else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.input_box');
        notes.forEach(element => {
            element.onkeyup = function(){
                sava();
            }
        });
    }
})

