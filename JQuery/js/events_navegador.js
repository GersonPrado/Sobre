jQuery.readyException = function( error ) {
    console.error( 'Imagem não carregada' );
  };
  window.onerror = function(message,filename,linenumber){
    alert('JS error: '+this.message);
  }
/*$(function() {
    $('img').attr('src',"img/error.png");    
});*/
