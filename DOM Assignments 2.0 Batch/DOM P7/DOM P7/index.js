let courselist = document.querySelectorAll('a')

for (let i = 0; i < courselist.length; i++) {
    let list = courselist[i].innerHTML
    const listarr = list.includes('2.0')
    if (listarr == true) {
        courselist[i].style.display = "none"
    }
}
let inputtag = document.querySelector('.main__form-input')

inputtag.disabled=false
let button = document.querySelector('.main__form-btn')

button.disabled=false
let form=document.querySelector('form')
  form.addEventListener('submit',function(e){
    
    const input=document.querySelector('.main__form-input').value
     let newdata=JSON.parse(localStorage.getItem('input'))||[]
    newdata.push(input)
    localStorage.setItem('input',JSON.stringify(newdata))

    })
    
    let maindiv=document.querySelector('body')
    let newdata=JSON.parse(localStorage.getItem('input'))||[]
    newdata.forEach(el=>{
        let div=document.createElement('div')
        div.style.margin='auto'
        div.style.backgroundColor="red"
        div.style.width="400px"
        div.style.marginRight="340px"
        div.style.color='white'
        div.style.marginTop="10px"
        let p=document.createElement('p')
        p.innerText=el
        p.style.marginLeft='20px'
        div.append(p)
    
        maindiv.append(div)
    })


