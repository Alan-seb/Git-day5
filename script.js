let count=0
const btn=document.getElementById("btn")
const display=document.getElementById("count")

btn.onclick=function(){
count++
display.textContent=count
  //added this to test the fetch
}
