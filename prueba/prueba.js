const imgDt = document.querySelector("#imgDt");

function bother(){
    let random = parseInt((Math.random() * 5));
    console.log(random);
    switch(random){
        case 1:
            imgDt.setAttribute(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQFX9120H_AtLWN4NE7jd9st2nfOkcpMYvw&usqp=CAU");
            break;
        case 2:
            imgDt.setAttribute(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDtkRTamLtQPXYOepjXSrXuMywjYIW3adwg&usqp=CAU");
            break;
        case 3:
            imgDt.setAttribute(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1X3_KSPDdVMHl8hJvi7IxW1FE1bPMjS6sQ&usqp=CAU");
            break;
        case 4:
            imgDt.setAttribute(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNh6DPIB5s9tT3M1veTYgVkdXshtOTTANSw&usqp=CAU");
            break;
            case 5:
                imgDt.setAttribute(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNbs8aUXL7WDiuwhpaKLJB3tZnWscsUIYew&usqp=CAU");
    }
    
}