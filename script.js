function myFunction () {
    const button = document.querySelector('button');
    let price = [];

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


       price[i] = myCoursesArray[i].slice(-10,-7);
       //price[i] = price[i].slice(1,4);
       
    }
    
    button.addEventListener('click', e => {
        //console.log('You click the sort button');
        let myNewPriceArray = myCoursesArray.sort((course1, course2) => (course1.slice(-10,-7) < course2.slice(-10,-7) ? 1 : (course1.slice(-10,-7) > course2.slice(-10,-7) ? -1 : 0)));
        let myLi = document.querySelectorAll('li');
        
       
        for(let x = 0; x < myLi.length; x++) {
            myLi[x].innerHTML = myNewPriceArray[x];
        }
    })
}