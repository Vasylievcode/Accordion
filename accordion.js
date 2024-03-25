// 1. Використовуй шаблон акордеон меню з та напиши наступний функціонал:
//  при кліку на елемент меню, розкривай блок з текстом. 
//  При повторному кліку по елементу, розкритий текст приховується. 
//  Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.

// const listRef = document.querySelector('.js-accordion-list');

// function handleBtnClick(event) {}

// listRef.addEventListener('click', handleBtnClick);

const listRef = document.querySelector('.js-accordion-list');

function handleBtnClick(event) {
    
    console.log("currentTarget",event.currentTarget)
    console.log("target",event.target)
    console.log("closest", event.currentTarget.closest(".panel"))
    console.log("closest", event.currentTarget.closest("ul>div"))
    
    
   
}

listRef.addEventListener('click', handleBtnClick);








