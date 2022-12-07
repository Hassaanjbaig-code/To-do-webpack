import './style/main.css';

// const form = document.getElementById('Form');
// const [gettext, listtodo, Clean] = form.elements;

const dataarr = [
  {
    id: 0,
    title: 'wash the dishes',
    completed: true,
  },
  {
    id: '1',
    title: 'Complete the tod List',
    completed: false,
  },
  {
    id: '1',
    title: 'Complete the tod List',
    completed: false,
  },
];

const projectht = () => {
  dataarr.forEach((project) => {
    //   for (const project of dataarr) {
    const Listtodo = document.getElementById('listtodo');
    const main = document.createElement('li');
    main.classList.add('projectli');
    main.id = project.id;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.completed = project.completed;
    const maintext = document.createElement('h3');
    maintext.innerText = project.title;
    main.append(
      checkbox,
      maintext,
    );
    Listtodo.append(main);
  });
};
// };

window.addEventListener('load', () => {
  projectht();
});
