
let accordiandiv=document.createElement('div')
accordiandiv.classList.add('accordian')
let h3=document.createElement('h3')
h3.textContent="Skills"
let p=document.createElement('p')
p.textContent="I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the github"
accordiandiv.append(h3,p)
let appenddata=document.querySelector('.accordian-wrapper')
appenddata.append(accordiandiv)

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.style.backgroundColor="#d2c2fd"
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



