function myFunction () {
    const button = document.querySelector('button');

    //change the title
    let title = document.querySelector('.title');
    title.innerText = 'LearnCodeOnline';

    //add list items
    let ul = document.querySelector('.list-group');

    const myCoursesArray = [
        'Complete Javascript course<span class="float-right">$2.1</span>',
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
    
    //Button click event listener
    button.addEventListener('click', e => {
        //Sort the array and set it to a new array
        let myNewPriceArray = myCoursesArray.sort((course1, course2) => (course1.slice(-10,-7) < course2.slice(-10,-7) ? 1 : (course1.slice(-10,-7) > course2.slice(-10,-7) ? -1 : 0)));
        //put all li on page into an array
        let myLi = document.querySelectorAll('li');
        
       //populate the new li array with new sorted array of items
        for(let x = 0; x < myLi.length; x++) {
            myLi[x].innerHTML = myNewPriceArray[x];
        }
    })
}