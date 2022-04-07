const baseURL = "https://jsonplaceholder.typicode.com"
const fetch = require('node-fetch')

module.exports={
    getPosts:function(){
        console.log('get posts method')
        fetch(`${baseURL}/posts`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },
    getSinglePost:function(id){
        console.log('get single',id)
    },
    addPost:function(post){
        console.log('this is add post method',post)
    },
    deletePost:function(id){
        console.log('delete method',id)
    },
    updatePost:function(id){
        console.log('update method',id)
    }
}