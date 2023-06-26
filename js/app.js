document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');



const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log('it works');
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);
  // const resultTitle = document.querySelector('#title-result');
  // const resultAuthor = document.querySelector('#author-result');
  // const resultCategory = document.querySelector('#category-result');

  const newTitle = document.createElement('li');  
  const newAuthor = document.createElement('li');  
  const newCategory = document.createElement('li');  


  newTitle.textContent = `Title: ${event.target.title.value}`;
  const list = document.querySelector('#reading-list');
  list.appendChild(newTitle);

  newAuthor.textContent = `Author: ${event.target.author.value}`;
 
  list.appendChild(newAuthor);

  newCategory.textContent = `Category: ${event.target.category.value}`;


  list.appendChild(newCategory);



  form.reset();

}



const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);










})
