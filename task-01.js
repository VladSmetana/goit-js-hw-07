// Отримуємо елемент ul#categories
const categoriesList = document.getElementById('#categories');

//всі елементи li.item у списку ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log(`Кількість категорій: ${categoryItems.length}`);

// Проходимося по кожному елементу li.item у списку ul#categories
categoryItems.forEach(category => {
  // Отримуємо текст заголовка (тегу <h2>) для кожної категорії
  const categoryName = category.querySelector('h2').textContent;

  // Отримуємо всі елементи <li> в поточній категорії
  const categoryElements = category.querySelectorAll('ul > li');

  // Виводимо інформацію про категорію в консоль
  console.log(`Number of categories: ${categoryName.length}`)
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
