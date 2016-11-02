setup();
nameTranslate();
partDesigner();

function setup(){
  var block = t(".backBlock");
  block.style.left = "-"+(innerWidth/2)+"px";
}
function t(dom) {
  return document.getElementById(dom) || document.querySelector(dom)
}
function nameTranslate() {
      var block = t(".backBlock");
      var partName = t("#partName");
          partName.onmousemove = function() {
              window.mouseX = window.event.clientX;
              window.mouseY = window.event.clientY;
              var a;
            if(mouseX>innerWidth/2){a = mouseX-innerWidth/2;}
              else{a = innerWidth/2-mouseX;}
            if(mouseX>innerWidth/2){
              block.style.left = "-"+(innerWidth/2-a/4)+"px"}
            if(mouseX<innerWidth/2){
              block.style.left = "-"+(innerWidth/2+a/4.9)+"px";
            }
          }
}
function partDesigner() {

    text = t("#rotateOne");
    var textContent = text.innerText;


        window.onscroll = ()=>{
          var value;

          if(scrollY<509 && scrollY>400){
            value = (scrollY-400)*150/180;
            text.style = "transform:rotateY(" + value + "deg)";
          }
          if(scrollY>509 && scrollY<618){
            value = (scrollY-400)*150/180-90;
            text.style = "transform:rotateY(" + (90-value) + "deg)";
          }
          if(scrollY > 508){
            text.innerText = "easily bored"
          } else {text.innerText = "multidisciplinary"}
          console.log(scrollY + "   " + value )
      }

}
