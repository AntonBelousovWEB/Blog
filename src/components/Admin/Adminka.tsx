import React from "react";
import PostAdmin from "./Commands/Post";
import UpdateAdmin from "./Commands/Update";
import DeleteAdmin from "./Commands/Delete";

export default function Adminka() {
    return (
        <div className="wrap_admin">
            <PostAdmin />
            <UpdateAdmin />
            <DeleteAdmin />
        </div>
    )
}