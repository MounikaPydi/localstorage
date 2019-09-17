import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class AddPosts extends Component {
    constructor(){
        super();
        this.state = {
            userId:'',
            title:'',
            description:'',
            posts:JSON.parse(localStorage.getItem("posts")) || []
        }
    }
    handleIdChange = (e) => {
        const id = e.target.value;
        this.setState({id})
    }

    handleUserIdChange = (e) => {
        const userId = e.target.value;
        this.setState({userId})
    }

    handleTitleChange = (e) => {
        const title = e.target.value;
        this.setState({title})
    }

    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description})
    }

    handleClick = () => {
        const { userId, title, description, posts } = this.state;
        const length = posts && posts.length;
        const id1 = Number(posts[length-1].id)
        const id = id1+1;
        const newItem = {
            id,
            userId,
            title,
            description
        }
        const list = [...posts,newItem];
        localStorage.setItem("posts", JSON.stringify(list));
        const item = localStorage.getItem("posts")
        console.log("from local storage before parsing "+ item)
        const parsedItem = JSON.parse(item);
        console.log(parsedItem);
        this.setState({posts:list})     
    }

    handleDeleteClick = (id) => {
        const {posts} = this.state
        const modifiedPosts = posts.filter(post => {return post.id !== id})
        localStorage.setItem("posts",JSON.stringify(modifiedPosts))
        this.setState({posts:modifiedPosts})

    }

    render(){
        const {posts} = this.state;
        return(
            <div>
                <input type="text" placeholder="enter user id" onChange={this.handleUserIdChange}/>
                <input  type="text" placeholder="enter title" onChange={this.handleTitleChange}/>
                <input  type="text" placeholder="enter description" onChange={this.handleDescriptionChange}/>
                <button onClick={this.handleClick}>ADD</button>
                
                {
                    
                posts && posts.length > 0 && posts.map(post => {
                        const { id, userId, description, title } = post;
                        return(<ul key={id}>
                            <li>
                                id:{post.id}<br/>
                                userId:{post.userId}<br/>
                                title:{post.title}<br/>
                                description:{post.description}
                                    <Link to = {`/${post.id}`}><button>Edit</button></Link>
                                    <button onClick={() => this.handleDeleteClick(id)}>Delete</button>
                                    <br/>
                            </li>
                        </ul>)
                    })
                }
            </div>
        )
    }
}
export default AddPosts;