import PropTypes from "prop-types";

const PLACEHOLDER_AVATAR = "/placeholder-avatar.svg";

export default function ThreadItem({ thread }) {
  const authorName = thread.author?.name ?? "Unknown";
  const avatarUrl = thread.author?.avatarUrl ?? PLACEHOLDER_AVATAR;
  const replyCount = thread._count?.comments ?? 0;

  return (
    <li className="thread">
      <div className="thread-top">
        <img className="avatar" src={avatarUrl} alt={`${authorName} avatar`} />

        <div className="thread-main">
          <h3>{thread.title}</h3>
          <p className="meta">by {authorName}</p>
        </div>

        <span className="badge">{replyCount} replies</span>
      </div>

      <p>{thread.body}</p>
    </li>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorId: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
    _count: PropTypes.shape({
      comments: PropTypes.number,
    }),
  }).isRequired,
};
