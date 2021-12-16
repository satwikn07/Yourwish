unique_names = ['gayatri','niki','Gayatri','Niki','Nicky','nicky']
function set_message(){
    var name = document.getElementById('textbox').value;
    let got = false;
    for(let i=0;i<unique_names.length;i++){
            if(name==unique_names[i]){
                got = true;
                if(localStorage.getItem('mark')==undefined){
                    localStorage.setItem('mark',1)
                    localStorage.setItem('Message',"Hey Niks! I miss you, let's meet soon. (I love you)X3000.");
                }else{
                    localStorage.setItem('Message',"Beybee!! Do I need to repeat???");
                }
            }
    }
    if(!got){
        localStorage.setItem('Message',`Hello! ${name}, I wish the best for you. Have a good time.`)
    }
    window.location.href = './message.html';
}
