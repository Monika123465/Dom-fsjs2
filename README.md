# Dom-fsjs2
 0.4_DOM_Project
 ![Screenshot 2023-02-07 21 05 32](https://user-images.githubusercontent.com/105919665/217297374-f543da57-0fab-4c05-828e-31b959be7471.png)
  
  let orange=document.querySelector('.clash-card__unit-stats--barbarian') <br>
    orange.style.backgroundColor="#bd7c2f"  <br>
    orange.style.color="white"  <br>
    let stat=document.querySelector('.no-border')<br>
    stat.style.color="white"

    let pink=document.querySelector('.clash-card__unit-stats--archer')
    pink.style.backgroundColor="#d04976"
    pink.style.color="white"
    let stat1=document.querySelector('.clash-card__unit-stats--archer .no-border')
    stat1.style.color="white"

    let darkorange=document.querySelector('.clash-card__unit-stats--giant')
    darkorange.style.backgroundColor="#de7b09"
    darkorange.style.color="white"
    let stat2=document.querySelector('.clash-card__unit-stats--giant .no-border')
    stat2.style.color="white"
      
    let green=document.querySelector('.clash-card__unit-stats--goblin')
    green.style.backgroundColor="#71a32a"
    green.style.color="white"
    let stat3=document.querySelector('.clash-card__unit-stats--goblin .no-border')
    stat3.style.color="white"

    let blue=document.querySelector('.clash-card__unit-stats--wizard')
    blue.style.backgroundColor="#309eff"
    blue.style.color="white"
    let stat4=document.querySelector('.clash-card__unit-stats--wizard .no-border')
    stat4.style.color="white"




        const elements = document.querySelectorAll('.one-third')

        for(let i = 0; i< elements.length; i++) {

            const elm = elements[i];
            elm.style.borderColor ='rgba(0, 0, 0, 0.25)'


        }
        
        
  05_DOM Projects
  ![Screenshot 2023-02-07 21 44 12](https://user-images.githubusercontent.com/105919665/217300640-6edffbae-9151-42ae-b8aa-773e6e518fcd.png)
  
   const button=document.querySelector('.nav-center').lastElementChild  <br>
    button.style.display="flex"  <br>
    const btn=document.createElement('a') <br>
    btn.textContent="Pro Subscription" <br>
    btn.classList.add('btn')  <br>
    button.append(btn)       


![Screenshot 2023-02-07 21 44 23](https://user-images.githubusercontent.com/105919665/217301237-3340b6e8-e086-4208-8202-c81ec258ab9a.png)

const recipe=document.querySelector('.recipe-gallery') <br>
    const div1=document.createElement('div')  <br>
    div1.classList.add('card')     <br>
   div1.style.backgroundColor="#dddddd"   <br>
    const atag=document.createElement('a')   <br>
     atag.classList.add("recipe-text")    <br>
     const p=document.createElement('p')   <br>
    p.innerText="add 6th card here"     <br>
    atag.append(p)  <br>
    div1.append(atag)  <br>
    recipe.append(div1)

06_DOM Projects
![Screenshot 2023-02-07 21 56 01](https://user-images.githubusercontent.com/105919665/217303774-bc1925f2-28c8-46fa-8034-f341838b8cae.png)

let imagediv=document.querySelector('.logo') <br>
   imagediv.src="./assets/ineuron-logo.png" 
   
![Screenshot 2023-02-07 21 56 08](https://user-images.githubusercontent.com/105919665/217304388-10a605d2-dc14-486b-8cdd-f9cdeaf37934.png)
let appprice=document.querySelector(".app_price span") <br>
   appprice.textContent="$10"
   
 07_DOM Project
 ![8eca2fcb-621a-45e2-89d4-f894b172d777](https://user-images.githubusercontent.com/105919665/217308913-1be30caa-4bfc-4c4c-bb66-5e283ed9cd4a.jpeg)
 let courselist = document.querySelectorAll('a')  <br>
for (let i = 0; i < courselist.length; i++) {  <br>
    let list = courselist[i].innerHTML  <br>
    const listarr = list.includes('2.0')  <br>
    if (listarr == true) {  <br> 
        courselist[i].style.display = "none"  <br>
    }
}
![f81041cf-b63c-40e6-9ba6-6b5d09caf792](https://user-images.githubusercontent.com/105919665/217309316-932a3760-db29-48f6-b7af-f7de79e89066.jpeg)
let inputtag = document.querySelector('.main__form-input') <br>
inputtag.disabled=false  <br>
let button = document.querySelector('.main__form-btn')  <br>
button.disabled=false  <br>
let form=document.querySelector('form')  <br>
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

08_Dom Project
![Screenshot 2023-02-07 22 24 01](https://user-images.githubusercontent.com/105919665/217852032-6f0225b4-5496-494e-9d9a-b52b567356c4.png)
let news=document.querySelector('aside') <br>
  news.style.overflow='hidden' <br>
  news.style.overflowY='scroll' 
  
  ![Screenshot 2023-02-07 22 24 26](https://user-images.githubusercontent.com/105919665/217853137-9eb9ab97-fed8-4c84-b366-4c9bd757741a.png)
  let body=document.body <br>
  body.style.backgroundImage='none'
  
  ![Screenshot 2023-02-09 20 47 20](https://user-images.githubusercontent.com/105919665/217853584-0713d0fc-72de-4f0d-b554-f964cc96a4ec.png)
  const navbartoggler = document.querySelector('.navbar-toggler') <br>
  navbartoggler.addEventListener('click', () => { <br>
    const elem = document.querySelector('#navbarTogglerDemo01') <br>
    elem.classList.toggle('show') <br>
    
  })
  
  09_DOM Project
  ![Screenshot 2023-02-09 20 54 13](https://user-images.githubusercontent.com/105919665/217855919-cc5288c8-2d76-4d98-9939-4cd084c1f505.png)
 let title=document.querySelector('h1') <br>
   title.style.color="#DC143C" <br>
 let button=document.querySelector('.add-to-cart') <br>
  button.style.backgroundColor="#DC143C" <br>

   
  
