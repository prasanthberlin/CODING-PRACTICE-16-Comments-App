import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentArr: [],
    name: '',
    comment: '',
  }

  addUserName = event => {
    this.setState({name: event.target.value})
  }

  addComments = event => {
    this.setState({comment: event.target.value})
  }

  addUserComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const bgClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      commentId: uuidv4(),
      name,
      comment,
      date: new Date(),
      bgClassName,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentArr: [...prevState.commentArr, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = commentId => {
    const {commentArr} = this.state
    const newArr = commentArr.filter(
      eachComment => commentId !== eachComment.commentId,
    )

    this.setState({commentArr: newArr})
  }

  changeLikeIconButton = commentId => {
    this.setState(prevState => ({
      commentArr: prevState.commentArr.map(eachComment => {
        if (eachComment.commentId === commentId) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentArr, name, comment} = this.state

    return (
      <div className="app-container">
        <div>
          <div>
            <h1 className="main-heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="sm-device-comment"
            />
            <p className="comment-description">
              Say something about 4.0 Technologies
            </p>
            <form onSubmit={this.addUserComment}>
              <input
                type="text"
                placeholder="Your Name"
                className="name-user-input"
                onChange={this.addUserName}
                value={name}
              />
              <textarea
                rows="6"
                cols="10"
                type="text"
                placeholder="Your Comment"
                className="comment-user-input"
                value={comment}
                onChange={this.addComments}
              />
              <br />
              <button type="submit" className="add-comment">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="md-device-comment"
          />
          <hr className="line-after-button" />
        </div>
        <div>
          <p className="comments-title-text">
            <span className="comment-increase-count">{commentArr.length}</span>
            Comments
          </p>
          <ul className="comment-list-container">
            {commentArr.map(eachComment => (
              <CommentItem
                key={eachComment.commentId}
                addComment={eachComment}
                deleteComment={this.deleteComment}
                changeLikeIconButton={this.changeLikeIconButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
