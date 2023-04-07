import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "asdf",
            desc: "asdf",
            img: "https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png"
        },
        {
            id: 2,
            title: "asdf",
            desc: "asdf",
            img: "https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png"
        },
        {
            id: 3,
            title: "asdf",
            desc: "asdf",
            img: "https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png"
        },
        {
            id: 4,
            title: "asdf",
            desc: "asdf",
            img: "https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png"
        }
    ];
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={'/post/' + post.id}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;