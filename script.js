var song=document.querySelector('audio')
var play=document.querySelector('#play')
var pause=document.querySelector('#pause')
play.addEventListener('click',function(){
    
    song.play()
})
pause.addEventListener('click',function(){
    console.log('a')
    song.pause()
    
})