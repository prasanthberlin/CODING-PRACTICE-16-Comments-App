// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {addComment, deleteComment, changeLikeIconButton} = props
  const {name, comment, commentId, isLiked, date, bgClassName} = addComment
  const initialLetter = name.slice(0, 1)
  const timing = formatDistanceToNow(date)

  const deleteButton = () => {
    deleteComment(commentId)
  }

  const changeLikeIcon = () => {
    changeLikeIconButton(commentId)
  }

  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLiked ? 'blue-color' : ''
  const likeText = isLiked ? 'liked' : 'like'

  return (
    <li className="comment-list-item">
      <div>
        <div className="name-time-container">
          <div className={`initial-letter ${bgClassName}`}>
            <p>{initialLetter}</p>
          </div>
          <p className="user-name">{name}</p>
          <p className="comment-timing">{timing}</p>
        </div>
        <p className="comment-text">{comment}</p>
        <div className="like-delete-container">
          <div className="like-con-text-container">
            <button type="button" className={`like-text ${likeColor}`}>
              <img
                src={imgUrl}
                alt={likeText}
                className="like-icon"
                onClick={changeLikeIcon}
              />
              Like
            </button>
          </div>
          <button
            type="button"
            onClick={deleteButton}
            data-testid="delete"
            className="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr className="line-after-button" />
    </li>
  )
}

export default CommentItem
