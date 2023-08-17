window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY;
    console.log('Scroll value:', scrollValue);
    if(scrollValue > 450){
        document.getElementById('mynav').style.backgroundColor="#09225a"
    }
    else{
        document.getElementById('mynav').style.backgroundColor="transparent"

    }
  });

