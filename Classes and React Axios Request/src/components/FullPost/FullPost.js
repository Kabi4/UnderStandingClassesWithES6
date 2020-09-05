import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        post: null
    }

    shouldComponentUpdate(nextProps,nextState){
        
        if(this.state.post===null){
            return true;
        }
        return nextProps.id!==this.state.post.id;
    }

    componentDidUpdate(){
        if(this.props.id){axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
        .then(Response=>{
            this.setState({post: Response.data})
        })}
    }
    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id)post=<p style={{textAlign:"center"}}>Loading.....!</p>
        if(this.state.post)post=(
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        return post;
    }
}

export default FullPost;

// post = 