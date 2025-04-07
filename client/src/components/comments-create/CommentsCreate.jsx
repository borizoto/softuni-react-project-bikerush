import { useParams } from "react-router";
import { create } from "../../services/commentsService.js";

export default function CommentsCreate({
    email,
    setComments
}) {
    const { listingId } = useParams();

    const createCommentAction = async (formData) => {
        const { comment } = Object.fromEntries(formData);
        const newComment = await create(comment, listingId, email);

        setComments(comments => [...comments, newComment]);
    }
    
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={createCommentAction}>
                <textarea
                    name="comment"
                    placeholder="Leave a comment..."
                    defaultValue={""}
                />
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    );
}