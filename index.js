// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ
// ეს ღილაკი ანუ რომ დავკლიკავ ღილაკზე გაქრეს  გამოიყენეთ ეს მეთოდი
//  remove()  https://developer.mozilla.org/en-US/docs/Web/API/Element/remove


// ///////////////////////// დავალება 1 /////////////////
// const body = document.body
// const button = document.getElementById("del-button")

// button.addEventListener("click",function(){
//     button.remove()
// })
//////////////////////////////////////////////




// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src
//  ად მივანიჭებთ ამ: https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg სურათის
//  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ისე როგორც ლექციაზე გავაკეთეთ).
// გამოიყენეთ ეს მეთოდი setAttribute() https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute


// დავალება 2 ////////////////////////////////////////////////////

// const image = document.createElement("img")
// image.setAttribute("src","https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg")
// body.appendChild(image)


//////////////////////////


// 3. დაამატეთ ერთი ინფუთი და ღილაკი , რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში,
//  ღილაკზე დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა .
// გამოიყენეთ ეს მეთოდი https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event


// დავალება 3 ////////////////////////



// const inpButton = document.createElement("button")
// inpButton.setAttribute("id","inp-button")
// inpButton.textContent = "Add"

// const inpPara = document.createElement("p")
// inpPara.setAttribute("id","inp-paragraph")

// const inpTxt = document.createElement("input")
// inpTxt.setAttribute("id","inp-field")

// body.appendChild(inpTxt)
// body.appendChild(inpButton);
// body.appendChild(inpPara)

// inpButton.addEventListener("click",function(){
//     inpPara.textContent = inpTxt.value;
//     inpTxt.value = "";
// })


/////////////////////////////
// 4.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს.

// ფუნქციას არგუმენტად გადაეცით  მასივი - productData და დათვალეთ გადაცემული მასივში amount ის ჯამი

//  const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }]
// დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში
// const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }]




// function summ(arr){
//     let result = 0;

//     arr.map(product => result += product.amount)

//     return result
// }

// const sumPara = document.createElement("p")
// sumPara.innerText = `Sum is: ${summ(productData)}`
// body.appendChild(sumPara)

// 5. რთული დამატებითი დავალება
// html შექმენით <div id="user-list"></div> გამოიყენეთ 4 ელემენტიანი გრიდ სისტემა,



// დავალება 5

const userList = document.getElementById("user-list");
let users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    image:
      "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    image:
      "https://plus.unsplash.com/premium_photo-1702910931506-c2c942c6612d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    image:
      "https://images.unsplash.com/photo-1706125356181-9bff2577579f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    image:
      "https://images.unsplash.com/photo-1706606991536-e39841f5f598?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    image:
      "https://images.unsplash.com/photo-1706550037547-ead67be5816e?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    image:
      "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

for (let i = 0; i < 4; i++) {
  const cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("id", users[i].id);
  cardWrapper.classList.add("card-wrapper");
  const image = document.createElement("img");
  image.setAttribute("src", users[i].image);
  const heading2 = document.createElement("h2");
  heading2.textContent = `${users[i].first_name} ${users[i].last_name}`;
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("buttons-wrapper");

  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.classList.add("del-button");
  const infoButton = document.createElement("button");
  infoButton.textContent = "info";
  infoButton.classList.add("info-button");

  const infoPar = document.createElement("p")
  infoPar.classList.add("info-parr")
  infoPar.textContent = users[i].email;
  cardWrapper.appendChild(infoPar)
  cardWrapper.appendChild(image);
  cardWrapper.appendChild(heading2);
  cardWrapper.appendChild(buttonsWrapper);
  buttonsWrapper.appendChild(infoButton);
  buttonsWrapper.appendChild(delButton);
  userList.appendChild(cardWrapper);

 
}
function checker(e, itemId) {
  const dataVal = itemId.getAttribute("data");
 
  console.log(dataVal);
}
const delButtons = document.querySelectorAll(".del-button");
const infoButtons = document.querySelectorAll(".info-button")

delButtons.forEach((delbutton, index) =>
  delbutton.addEventListener("click", () => removeCard(index+7))
);
infoButtons.forEach(button => button.addEventListener("click",function(e){
        const hiddenEmail = button.closest(".card-wrapper").querySelector(".info-parr")
        if (hiddenEmail.className.includes("display-block")){
            hiddenEmail.classList.remove("display-block");

        }else{
            hiddenEmail.classList.add("display-block")
        }   
}))

function removeCard(index) {
  const cardWrapper = document.querySelector(
    `.card-wrapper[id="${index}"]`
  );
  if (cardWrapper) {
    cardWrapper.remove();
  }
}
