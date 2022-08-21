import React from "react";
import ReactDOM from "react-dom/client";

import LikeButton from './components/LikeButton';


document.querySelectorAll('span.react-like').forEach(function (span) {
    const root = ReactDOM.createRoot(span);

    const likes = +span.dataset.likes;
    const isLiked = +span.dataset.isLiked === 1; // data-is-liked = dataset.isLiked
    root.render(<LikeButton likes={likes} isLiked={isLiked} />);
});