import Todocon from './class.js';
import icon from '../assets/icons8-remove-64.png';

const Listtodo = document.getElementById('listtodo');
const clean = document.getElementById('Clean');

export default class Todoc {
  constructor() {
    this.collection = [];
  }

  add = (title, complete, id = this.collection.length + 1) => {
    const struction = new Todocon(title, complete, id);
    this.collection.push(struction);
    this.addto(struction);
  }

  addto = (struction) => {
    const main = document.createElement('li');
    main.classList.add('projectli');
    main.id = struction.id;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.completed = struction.complete;
    const maintext = document.createElement('input');
    maintext.value = struction.title;
    maintext.setAttribute('readOnly', 'readOnly');
    maintext.classList.add('text-area');
    const icondelete = document.createElement('img');
    icondelete.alt = 'Delete';
    icondelete.src = icon;
    icondelete.classList.add('delete');
    //    For edit the text area
    maintext.addEventListener('click', () => {
      maintext.removeAttribute('readOnly');
      maintext.classList.add('border');
      maintext.focus();
    });
    maintext.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const title = e.target.value;
        const { id } = e.target.parentElement;
        maintext.classList.remove('border');
        // tergetting on the index;
        maintext.setAttribute('readOnly', 'readOnly');
        this.collection[(Number(id)) - 1].title = title;
      }
    });
    checkbox.addEventListener('change', (e) => {
      if (checkbox.checked === true) {
        maintext.classList.add('text');
        const { id } = e.target.parentElement;
        this.collection[id - 1].complete = checkbox.checked;
      } else {
        maintext.classList.remove('text');
        const { id } = e.target.parentElement;
        this.collection[id - 1].complete = checkbox.checked;
      }
    });
    main.append(
      checkbox,
      maintext,
      icondelete,
    );
    Listtodo.appendChild(main);
    //    For the remove
    icondelete.addEventListener('click', () => {
      Listtodo.removeChild(main);
      this.remove(struction.id);
    });
    //   For checkin the complete is true or not
    for (let i = 0; i < this.collection.length; i += 1) {
      if (this.collection[i].complete === true) {
        maintext.classList.add('text');
        checkbox.checked = true;
      } else {
        maintext.classList.remove('text');
        checkbox.checked = false;
      }
    }
    // For remove all
    clean.addEventListener('click', () => {
      Listtodo.innerHTML = '';
      this.collection = [];
    });
  }

  remove = (id) => {
    this.collection = this.collection.filter((task) => task.id !== this.collection[id - 1].id);
    this.updateid();
  }

  updateid = () => {
    for (let i = 0; i < this.collection.length; i += 1) {
      this.collection[i].id = i + 1;
    }
  }
}