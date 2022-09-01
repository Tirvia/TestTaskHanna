var button = document.getElementsByClassName('collapsible__button')[0];
var buttonon = button.getElementsByClassName('collapsible__action collapsible__action')[0];
var buttonoff = button.getElementsByClassName('collapsible__action collapsible__action')[1];
var content = document.getElementsByClassName('collapsible__content')[0];
buttonon.hidden = true;
content.hidden = true;
button.style.cssText=`color: white ;
    background-color: MidnightBlue;
    marginLeft: 500px;
    font-size: 36px;
    border-radius:18px;
    padding:20px;
    margin-left:100px;
    margin-top:20px;
` 
content.style.cssText=`font-size: 36px;
margin-left:100px;
margin-top:280px;
`
button.addEventListener('click',function(){
    if(buttonon.hidden == false){
        content.hidden = true;
    } else {
        content.hidden = false;
    }
    if(buttonon.hidden == true){
        buttonon.hidden = false
    } else { buttonon.hidden = true;
    }
    if(buttonoff.hidden == true){
        buttonoff.hidden = false
    } else { buttonoff.hidden = true;
    }
});
let contentRotating = [
    {transform: 'rotate(0deg)', color: 'indigo'},
    {transform: 'rotate(10deg)', color: 'Violet'},
    {transform: 'rotate(0deg)', color: 'indigo'},
    {transform: 'rotate(-10deg)', color: 'Violet'},
    {transform: 'rotate(0deg)', color: 'indigo'},    
];
let contentTiming = {
    duration: 7000,
    iterations: Infinity
};
content.animate(
    contentRotating,
    contentTiming
);
document.content.onclick = () => content.playbackRate *= 0.6;