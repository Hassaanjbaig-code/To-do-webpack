import Todocon from './class.js';
import icon from '../assets/icons8-remove-64.png';

export default class Todoc {
  constructor() {
    this.collection = [];
  }

  add(title, complete, id = this.collection.length + 1) {
    const struction = new Todocon(title, complete, id);
    this.collection.push(struction);
    this.addto(struction);
  }

  addto(struction) {
    const Listtodo = document.getElementById('listtodo');
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
        this.collection[(Number(id)) - 1].title = title;
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
  }

  remove(id) {
    this.collection = this.collection.filter((task) => task.id !== this.collection[id - 1].id);
    this.updateid();
  }

  updateid() {
    for (let i = 0; i < this.collection.length; i += 1) {
      this.collection[i].id = i + 1;
    }
  }
}