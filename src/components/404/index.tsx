import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="container">
            <div className="error_block">
                <h1 className="title_error">Error 404</h1> 
                <Link className="button_error" to={"/"}>Homepage</Link>
            </div>
        </div>
    )
}