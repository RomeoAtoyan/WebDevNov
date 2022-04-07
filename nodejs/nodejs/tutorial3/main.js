const {addPost,deletePost,getPosts,getSinglePost,updatePost}
= require('./actions/fetchActions');

getPosts()
getSinglePost(4)
addPost({id:2,title:'post title',body:'lorem ipsum'})
deletePost(2)
updatePost(6)

// npm i node-fetch@2 > Fetching data from url in nodejs app
// npm i nodemon -g > to reload app after any changes tool