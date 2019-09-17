import React, {Component} from 'react';
import { DESTRUCTION } from 'dns';
class EditPosts extends Component{
    constructor(){
        super();
        this.state = {
            userId:'',
            title:'',
            description:'',
            posts:[]
        }
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
        const {userId, title, description } = this.state;
        var id = this.props.match.params.id
        const newItem = {userId,title,description};
        const posts = [...this.state.posts];
        id = id-1;
        posts[id].userId = userId;
        posts[id].title = title;
        posts[id].description = description;
        localStorage.setItem("posts", JSON.stringify(posts));

    }
    componentDidMount(){
        const posts = JSON.parse(localStorage.getItem("posts"));
        const id = this.props.match.params.id;
        const userId = posts[id-1].userId;
        const title =  posts[id-1].title;
        const description = posts[id-1].description;
        this.setState({userId, title, description,posts})
        }
    render(){
        const {userId, title, description} = this.state;
        return(
            <div>
                <h3>Post Id: {this.props.match.params.id}</h3>
                <input type="text" value={userId} placeholder="enter user id" onChange={this.handleUserIdChange}/>
                <input  type="text" value={title}placeholder="enter title" onChange={this.handleTitleChange}/>
                <input  type="text" value={description}placeholder="enter description" onChange={this.handleDescriptionChange}/>
                <button onClick={this.handleClick}>submit</button>
            </div>
        )
    }
}
export default EditPosts;