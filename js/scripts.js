$ (document).ready(function(){

$("form#input").submit(function(event){
  event.preventDefault();
  var num=parseInt($("#numberInput").val());
  var origin=[];
  var result=[];
  for (var i = 2; i <= num; i++) {
    origin.push(i);}

    origin.forEach(function(originNum){
      var isNumber=0;
      for(j=(originNum-1);j>1;j--){
      if(originNum%j===0){ isNumber=1;}
    };
      if(isNumber===0){
        result.push(originNum);
      }
      });
      console.log( result);
});

});
