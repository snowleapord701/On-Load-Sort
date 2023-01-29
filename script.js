function myFunction () {

    //change the title
    let title = document.querySelector('.title');
    title.innerText = 'LearnCodeOnline';

    //add list items
    let ul = document.querySelector('.list-group');

    const myCoursesArray = [
        'Complete ReactJS course<span class="float-right">$3.3</span>',
        'Complete Angular course<span class="float-right">$2.1</span>',
        'Complete Mern course<span class="float-right">$4.7</span>',
        'Complete C++ course<span class="float-right">$2.8</span>',
        'Complete Django course<span class="float-right">$7.4</span>',
    ];

    for (let i = 0; i < myCoursesArray.length; i++) {

        let li = document.createElement('li');
        li.innerHTML = myCoursesArray[i];
        li.classList.add('list-group-item');
        ul.appendChild(li);

    }
    

}