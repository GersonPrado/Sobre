jQuery.readyException = function( error ) {
    console.error( 'Imagem não carregada' );
  };
  window.onerror = function(message,filename,linenumber){
    alert('JS error: '+this.message);
  }

 function validarDados() {
  var dadosPessoa = {
    email: document.getElementsByClassName('email')[0].value,
    senha : document.getElementsByClassName('password')[0].value,
    aceitaNovidades : document.getElementsByClassName('novidades')[0].value,
  }
  console.log(dadosPessoa);
};
/*$(function() {
    $('img').attr('src',"img/error.png");    
});*/
