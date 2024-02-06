import React from "react";
import { useParams } from 'react-router-dom';

export default function Post() {
    const { post } = useParams<{ post: string | undefined }>();

    return (
        <h1>{post}</h1>
    )
}