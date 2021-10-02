$(document).ready(function(){
    $(".two span").click(function(){

        if($(".two input").prop("checked")==true)
        {
            $(".two input").prop("checked",false);
        }
        else
        {
            $(".two input").prop("checked",true);
        }
        
    });
})