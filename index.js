let questions=document.querySelectorAll('.question')
let answer=document.querySelectorAll('.answer')


for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',()=>{

        if(answer[i].classList.contains('openanswer')){
            answer[i].classList.remove('openanswer')
        
    
           }

        else if(answer[i].classList.contains('openanswer')===false){
        for(let j=0;j<answer.length;j++){
            if(answer[j].classList.contains('openanswer')){
                answer[j].classList.remove('openanswer')
               
            }
            
            answer[i].classList.add('openanswer') 
        }
        }
       
       
       
       
        
    
        
    })
}
function emailvalidate(no){
   const email=document.querySelectorAll('.email')
   const alert=document.querySelectorAll('#alert')
    console.log(email[no].value.length)
    
    
    if(email[no].value.length==0){
        console.log("ayam")
       alert[no].innerText="Email is Required"
    }
    else{
        alert[no].innerText=""
    }

}




