export default function CommentsDetails({
    comments
}) {

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.length > 0 
                    ? comments.map(comment => <li key={comment._id} className="comment"><p><strong>{comment.email}</strong>: {comment.comment}</p></li>)
                    : <p className="no-comment">No comments.</p>
                }
            </ul>
        </div>
    );
}