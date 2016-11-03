setup();
nameTranslate();
Init();


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
function Init() {
        generateText("People tell me I`m a hard worker");
        var objPartTwo = SetupPartTwo();

        window.onscroll = function(){
          ScrollPartOne();
          ScrollPartTwo(objPartTwo);
      }
}


function generateText(string){
  var text = t("#appearOne");
  var arr = string.split("");

  for(i=0; i<arr.length; i++){
    text.innerHTML += "<h2 class="+ " letter " +">"+arr[i]+"</h2>";
  }
}
function ScrollPartOne(){
  var text = t("#rotateOne");
  var textContent = text.innerText;

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
}


function SetupPartTwo(){
  var objPartTwo = {
    arrLet : document.querySelectorAll(".letter"),
    arrVert : []
  }

  for(i=0;i<objPartTwo.arrLet.length; i++){
    objPartTwo.arrLet[i].style = " left:"+ (i*15+innerWidth/2)+"px;"
  }

  for(i=0;i<objPartTwo.arrLet.length; i++){
      var value = 1;
      if(Math.random()>.5) value = -1;
      objPartTwo.arrVert.push({x:Math.random()*10*value , y:Math.random()*10*value})
  }
  return objPartTwo;
}


function ScrollPartTwo(objPartTwo){
  if(scrollY>620 && scrollY<800){
      for(i=0; i<objPartTwo.arrLet.length;i++){
        console.log((scrollY-580)/130)
        objPartTwo.arrLet[i].style = "opacity:"+ (1-(scrollY-580)/130) +"; left:"+ (i*15+innerWidth/2)+"px; transform:translate("+ ((scrollY-620)/objPartTwo.arrVert[i].x) +"px,"+((scrollY-620)/objPartTwo.arrVert[i].y)+"px)";
      }
    }
    if(scrollY<620){
      for(i=0;i<objPartTwo.arrLet.length; i++){
        objPartTwo.arrLet[i].style = " left:"+ (i*15+innerWidth/2)+"px;"
      }
    }
}
