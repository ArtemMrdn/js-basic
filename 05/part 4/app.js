let div = document.querySelector("div");
// так как стили вычислялись браузером на основе CSS правил, а не задавались через атрибут style
// получить значения высоты и ширины элемента не получится через свойство style
console.log(`height=${div.style.height} width = ${div.style.width}`);

// получение вычисленных стилей для элемента div
let computedStyles = getComputedStyle(div, null);  //не интересуют никакие псевдоэлементы, поэтому второй параметр null
console.log(`height=${computedStyles.height} width = ${computedStyles.width}`); //после обьявления можем обращаться также как и к обьекту style

// получение вычисленных стилей для псевдоэлемента div::selection
let computedStylesSelection = getComputedStyle(div, ":selection");
console.log(
  `background-color on hover=${computedStylesSelection.backgroundColor}`
);
