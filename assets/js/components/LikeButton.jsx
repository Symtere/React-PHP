import React from 'react';


export default class LikeButton extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         likes: props.likes || 0,
    //         isLiked: props.isLiked || false
    //     };

    // }

    state = {
        likes: this.props.likes || 0,
        isLiked: this.props.isLiked || false
    };

    handleClick = () => {
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? -1 : 1);

        this.setState({ likes, isLiked: !isLiked });
    };

    render() {
        return <button className="btn btn-link" onClick={this.handleClick} >
            {this.state.likes} <i className={this.state.isLiked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"} /> {this.state.isLiked ? "Je n'aime plus" : "J'aime"}
        </button>

        // return React.createElement(
        //     "button",
        //     { className: "btn btn-link", onClick: this.handleClick },
        //     this.state.likes,
        //     " ",
        //     React.createElement('i', { className: this.state.isLiked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up" }),
        //     " ",
        //     this.state.isLiked ? "Je n'aime plus" : "J'aime"
        // );
    }
}