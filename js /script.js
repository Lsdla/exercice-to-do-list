
let input = document.getElementById('titre');
let button = document.querySelector('.add');
let contenaire = document.querySelector('.content');
let deleteAll = document.querySelector('.deleteAll');

button.addEventListener('click', function(){
    let para = document.createElement('p');
    let btn = document.createElement('button');

    if(input.value ===''){
        alert('Veuillez saisir une tâche');
    }else{
        para.innerHTML = input.value;

        contenaire.appendChild(para);
        contenaire.appendChild(btn);

        para.classList.add('modif');
        input.value = ''; 
    }

    btn.addEventListener('click', function(){
        btn.remove(para);
        para.remove(btn);
    })

    btn.innerHTML = 'supprimer'

    deleteAll.addEventListener('click', function(){
        contenaire.removeChild(para);
        contenaire.removeChild(btn);
    })
});




































// let todos = [];
// let cpt = 1;
// let button = document.querySelector('.add');
// function add() {
//     let obj = {
//         id: '',
//         title: '',
//         isActive: false
//     };

//     let titre = document.getElementById("titre");
//     obj.id = cpt++;
//     obj.title = titre.value;
//     todos.push(obj);

//     createHtml(todos);
// }
// titre.value = "";

// function createHtml(todos) {

//     let html = '<ul>';

//     for (let index = 0; index < todos.length; index++) {
//         html += `<li>${todos[index].title} <span id=${todos[index].id} class='delete'>X</span></li>`;

//     }
//     html += '</ul>';
//     document.querySelector('.content').innerHTML = html;
//     addEventButtonDelete();
// }


// function addEventButtonDelete() {
//     let list = document.querySelectorAll('ul li');

//     for (let index = 0; index < list.length; index++) {
//         list[index].addEventListener('click', remove);
//     }
// }

// function remove(event) {
//     let id = event.target.getAttribute('id');
//     let index = todos.findIndex(todo => todo.id == id);
//     todos.splice(index, 1);
//     createHtml(todos);

// }

// button.addEventListener("click", add);




