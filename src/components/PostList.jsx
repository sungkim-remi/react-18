import {useState, useEffect} from 'react';

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err));
    }, []);  // no dependency, called only once when the component mounts
    
    return (
        <ul>
            {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    )
}