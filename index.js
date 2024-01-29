// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ 
// ეს ღილაკი ანუ რომ დავკლიკავ ღილაკზე გაქრეს  გამოიყენეთ ეს მეთოდი
//  remove()  https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const body = document.body
const button = document.getElementById("del-button")

button.addEventListener("click",function(){
    button.remove()
})


// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src
//  ად მივანიჭებთ ამ: https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg სურათის 
//  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ისე როგორც ლექციაზე გავაკეთეთ).
// გამოიყენეთ ეს მეთოდი setAttribute() https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

const image = document.createElement("img")
image.setAttribute("src","https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg")
body.appendChild(image)

// 3. დაამატეთ ერთი ინფუთი და ღილაკი , რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში,
//  ღილაკზე დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა .
// გამოიყენეთ ეს მეთოდი https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event



const inpButton = document.createElement("button")
inpButton.setAttribute("id","inp-button")
inpButton.textContent = "Add"

const inpPara = document.createElement("p")
inpPara.setAttribute("id","inp-paragraph")

const inpTxt = document.createElement("input")
inpTxt.setAttribute("id","inp-field")

body.appendChild(inpTxt)
body.appendChild(inpButton);
body.appendChild(inpPara)


inpButton.addEventListener("click",function(){
    inpPara.textContent = inpTxt.value;
    inpTxt.value = "";
})


// 4.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს.

// ფუნქციას არგუმენტად გადაეცით  მასივი - productData და დათვალეთ გადაცემული მასივში amount ის ჯამი

//  const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] 
// დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში
const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] 

function summ(arr){
    let result = 0;
    
    arr.map(product => result += product.amount)

    return result
}

const sumPara = document.createElement("p")
sumPara.innerText = `Sum is: ${summ(productData)}`
body.appendChild(sumPara)