import React from "react";
import PostAdmin from "./Commands/Post/Posts";
import UpdateAdmin from "./Commands/Update";
import DeleteAdmin from "./Commands/Delete";
import PhotoAdmin from "./Commands/Post/Photos";

export default function Adminka() {
    return (
        <div className="wrap_admin">
            <PhotoAdmin />
            <PostAdmin />
            <UpdateAdmin />
            <DeleteAdmin />
        </div>
    )
}