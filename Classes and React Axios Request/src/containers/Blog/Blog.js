import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: null,
        fullPost: null
    }
    componentDidMount(){
        // const data = await axios('https://jsonplaceholder.typicode.com/posts');
        // console.log(data.data);
        const Rand = Math.round(Math.random()*96);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const allPosts = response.data;
            const requiredPost = allPosts.slice(Rand,Rand+3);
            this.setState({posts: requiredPost})
        })
        
        
    }
    clickHandler = (id)=>{
        const fullPosts = <FullPost id={id}/>
        this.setState({fullPost: fullPosts})
    }
    render () {
        let Posts;
        if(this.state.posts){Posts = this.state.posts.map(ele=>{
           return <Post key={ele.id} title={ele.title} author="Kushagra" click={this.clickHandler.bind(this,ele.id)}/>;
        })}else{
            Posts = null;
        }
        return (
            <div>
                <section className="Posts">
                    {Posts}
                </section>
                <section>
                    {this.state.fullPost?this.state.fullPost:<FullPost />}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;