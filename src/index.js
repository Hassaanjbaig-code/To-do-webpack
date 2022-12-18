import './style/main.css';
import Todocon from './modules/app.js';

const input = document.getElementById('gettext');

const todo = new Todocon();

input.addEventListener('change', (e) => {
  todo.add(input.value, false);
  e.preventDefault();
  input.value = '';
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('listBook', JSON.stringify(todo.collection));
});

if (window.localStorage.getItem('listBook') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach((collection) => {
    todo.add(collection.title, collection.complete);
  });
}