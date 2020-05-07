// This is a JavaScript file

$(document).on("click","#alerta",function(){
    navigator.notification.alert("Minha mensagem","Aviso!","Aceito");
});

$(document).on("click","#confirmar",function(){
      function confirma(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Escolheu a Primeira opção");} 
          else{
            navigator.notification.alert("Escolheu a Segunda opção");
        }
      }
    navigator.notification.confirm("Escolha entre 1 ou 2",confirma,"Escolha: ", ['1','2']);
});

$(document).on("click","#beep",function(){
    navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
    navigator.vibrate(4000);
});