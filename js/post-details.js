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





// const posts = document.getElementById('post');
//
//
//             const userPost = document.createElement('div');
//             userPost.style.backgroundColor = 'red';
//             userPost.style.padding = '20px';
//             userPost.style.margin = '10px';
//
// for (const post of userPost) {
//     userPost.innerText = `${post}, ${post[posts]};`
//
//     const postOfPosts = document.createElement('p');
//
//     userPost.append(postOfPosts);
//
// }
// posts.append(userPost);
//
//         fetch(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`)
//             .then((json) => json.json())
//             .then((posts) => {
//
//             })