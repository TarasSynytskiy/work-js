const post_id = new URL(location).searchParams.get('post');


let userCommentBtn =document.createElement('button');
userCommentBtn.style.backgroundColor = 'green';
userCommentBtn.innerText = 'info';

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then((json) => json.json())
    .then((post) => {

     let postTitle = document.createElement('h1');
     let postBody = document.createElement('p')
        postTitle.innerText = post.title + post.id;
        postBody.innerText = post.body + post.userId;


        document.body.append(postTitle,postBody,userCommentBtn)
    })

userCommentBtn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
        .then((json) => json.json())
        .then((comment) => {
            console.log(comment);
            for (const comments of comment) {

                let userComment = document.createElement('div');
                userComment.innerText = `${comments.body}`;
                userComment.style.backgroundColor = '#980fd0';




                document.body.append(userComment);
            }

})

}



