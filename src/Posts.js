import React from 'react';
import posts from './content/content';

export default class Posts extends React.Component {
    constructor(props){
        super(props)
        this.state= {posts: [], isLoaded: false}
    }
    componentDidMount(){
        const postList= []
        posts.map(post => {
            const postView= <div className= "post" key= {post.title}>
                <header className= "title">
                    {post.title}
                </header>
                <p className= "description">
                    {post.description}
                </p>
            </div>
            postList.push(postView);
        })
        this.setState({posts: postList, isLoaded: true})

    }
    render(){
        if(this.state.isLoaded)
            return (
                <div>
                    {this.state.posts}
                </div>
                
            );
        else
            return (<div> I am currently loading... </div>);
    }
}