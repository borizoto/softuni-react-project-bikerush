import { useParams } from "react-router";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import { useCreateComment } from "../../api/commentsApi.js";

export default function CommentsCreate({
    setComments
}) {
    const { listingId } = useParams();
    const { username } = useContext(UserContext)

    const { create } = useCreateComment();

    //TODO: Migrate to useActionState.
    const createCommentAction = async (formData) => {
        const { comment } = Object.fromEntries(formData);
        const newComment = await create(comment, listingId, username);

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