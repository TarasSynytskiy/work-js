const user_id = new URL(location).searchParams.get('user');

let userInfoBtn =document.createElement('button');
userInfoBtn.innerText = 'Info';
userInfoBtn.style.display = 'block';
userInfoBtn.style.width = '90%';
userInfoBtn.style.margin = '10px auto';
userInfoBtn.style.backgroundColor = 'red';
document.body.append(userInfoBtn);

let posts=document.createElement('div');
posts.id="posts"
posts.style.display= 'grid';
posts.style.gap = '5px';
posts.style.textAlign = 'center';
posts.style.gridTemplateColumns = 'repeat(3, 1fr)';
document.body.append(posts);

let userPostBtn =document.createElement('button');
userPostBtn.innerText = 'post of current user';
userPostBtn.style.margin= '30px';
userPostBtn.style.backgroundColor = 'yellow';
userPostBtn.style.flexDirection='column';
userPostBtn.style.textAlign = 'center';
document.body.append(userPostBtn);


userInfoBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        .then((json) => json.json())
        .then((user) => {
           document.body.append(JSON.stringify(user));

        })
}

userPostBtn.onclick = function (el) {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
        .then((json) => json.json())
        .then((posts) => {
            let postDiv = document.getElementById("posts")
            postDiv.innerHTML=""
            for(let post of posts){
                let link =document.createElement('a');
                let br =document.createElement('br');
                link.href = `../templates/post-details.html?post=${post.id}`
                link.innerText = post.title
                postDiv.append(link, br)
            }
        })
}


