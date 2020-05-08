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

function mostraMapa(lat, long){
    L.mapquest.key = 'hcVeZObBJNqagu0hArnG1SbfbfiQd3c7';

        var map = L.mapquest.map('map', {
          center: [lat, -long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
    var onSuccess = function(position) {
      mostraMapa(position.cords.latitude, position.coords.longitude )
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});