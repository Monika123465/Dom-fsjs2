# Dom-fsjs2
 0.4_DOM_Project
 ![Screenshot 2023-02-07 21 05 32](https://user-images.githubusercontent.com/105919665/217297374-f543da57-0fab-4c05-828e-31b959be7471.png)
  
  let orange=document.querySelector('.clash-card__unit-stats--barbarian')
    orange.style.backgroundColor="#bd7c2f"
    orange.style.color="white"
    let stat=document.querySelector('.no-border')
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
  
   const button=document.querySelector('.nav-center').lastElementChild
    console.log(button)
    button.style.display="flex"
    const btn=document.createElement('a')
    btn.textContent="Pro Subscription"
    btn.classList.add('btn')
    button.append(btn)


![Screenshot 2023-02-07 21 44 23](https://user-images.githubusercontent.com/105919665/217301237-3340b6e8-e086-4208-8202-c81ec258ab9a.png)

const recipe=document.querySelector('.recipe-gallery')
    const div1=document.createElement('div')
    div1.classList.add('card')
   div1.style.backgroundColor="#dddddd"
    const atag=document.createElement('a')
     atag.classList.add("recipe-text")
     const p=document.createElement('p')
    p.innerText="add 6th card here"
    atag.append(p)
    div1.append(atag)
    recipe.append(div1)

