


    const userWrap = document.getElementById('users');
    userWrap.style.display = 'grid';
    userWrap.style.gap = '20px';
    userWrap.style.gridTemplateColumns = '1fr 1fr';

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
    for (let user of value) {
    let userDiv = document.createElement('div');
    userDiv.style.backgroundColor = '#3b76e7'
    userDiv.style.textAlign = 'center';
    userDiv.style.padding = '10px';

    let users = document.createElement('p');
    users.style.fontSize = '20px';
    users.innerText = user.id + user.name;

    let btn = document.createElement('button');
    btn.innerText = 'user';
    btn.style.backgroundColor = 'yellow';

    btn.onclick = function () {
        console.log(window.location.href)
        window.location.href = `templates/user-details.html?user=${user.id}`;
}

    userDiv.append(users);
    userDiv.append(btn);
    userWrap.append(userDiv);
}
});
