
const snowFallAnimation = document.querySelector(".snowFallAnimation")

function snowFallAnimationFun(){
  setInterval( () => {
    const div = document.createElement("div")
    div.classList.add("star")
    div.innerHTML = "*"
    div.style.position = "absolute"
    div.style.left = `${Math.random() * 100}vw`
    div.style.top = `-20px`
    div.style.color = "#f0f"
    let size =`${Math.floor(Math.random() * 30 + 30)}px`
    div.style.width = size
    div.style.height = size
    div.style.fontSize = size
    div.style.borderRadius= "50%"
    div.style.animationDuration = `${Math.random() * 3 + 2}s`
    snowFallAnimation.appendChild(div)

  
    setTimeout( () => {
      span.removeChild()
    }, 5000)
  }, 25)

}

snowFallAnimationFun()