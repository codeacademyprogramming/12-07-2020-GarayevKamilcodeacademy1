let index =0;
[...document.querySelectorAll(".arrow")].forEach(arr=>{
    arr.onclick= function(){
        if(this.classList.contains("arrow-right"))
        {
            index++;
            if(index>4){
                index=0;
            }
            
            Slide();
        }
        else{
            index--;
            if(index<0){
                index=4;
            }
            
            Slide();
        }

        function Slide(){
            document.querySelector(".slide_list").style.left= -index*800 + "px";
        }
    }
})