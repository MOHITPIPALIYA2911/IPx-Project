$(document).ready(function(){
    for(let i=1;i<=10;i++){
        let h = "#h"+i;
        let b  = "#b"+i;
        $(h).click(function(){
          $(b).toggle();
        });
    }
});
