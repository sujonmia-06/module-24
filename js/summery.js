console.log('i am from the summery js');

const blogs = document.getElementsByTagName('p');
for (const blog of blogs){
    blog.style.backgroundColor = 'midnightblue';
    blog.style.color = 'white';
}

const officia = document.getElementById('special-blog');
// officia.innerText = 'new officia';
officia.innerHTML = `
<h4>special inner html</h4>
<div>
    <ul>
        <li>It is inner html list</li>
        <li>It is inner html list</li>
        <li>It is inner html list</li>
    </ul>
</div>
`

const friends = document.getElementById('friends');
console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);

friends.removeChild(fifth);

// create element
const friend = document.createElement('li');
friend.innerText = 'friend-11';
friends.appendChild(friend);