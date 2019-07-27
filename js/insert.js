$("#sub").click( function() {
	 $.post( $("#myForm").attr("action"),
     $("#myForm :input").serializeArray(),
         function(info){
          $("#error").html(info);
            $('#error').delay(6000).show().fadeOut('slow');
   });
 clearInput();
});
$("#sub1").click( function() {
	 $.post( $("#myForm1").attr("action"),
     $("#myForm1 :input").serializeArray(),
         function(info){
          $("#error1").html(info);
            $('#error1').delay(6000).show().fadeOut('slow');
   });
 clearInput();
});
$("#myForm1").submit( function() {
  return false;
});
function clearInput() {
    $("#myForm1 :input").each( function() {
       $(this).val('');
    });
}
$("#myForm").submit( function() {
  return false;
});
function clearInput() {
    $("#myForm :input").each( function() {
       $(this).val('');
    });
}
