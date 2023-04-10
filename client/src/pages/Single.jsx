import React from "react";
import Delete from "../img/delete.png"
import Edit from "../img/edit.png"
import { Link } from "react-router-dom";
import Menu from "../componenets/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png" alt="" />
                <div className="user">
                    <img src="https://images3.pixlis.com/background-image-organic-plasma-seamless-tileable-blue-spring-green-22523r.png" alt="" />
                    <div className="info">
                        <span>Jon Doe</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to='/write?edit=2'>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>title</h1>
                <p>body</p>
            </div>
            <Menu />
        </div>
    );
}

export default Single;
