import React from "react";

const Menu = () => {
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
        <div className="menu">
           <h1>Other posts you may like: </h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;
