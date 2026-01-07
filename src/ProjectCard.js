function ProjectCard({ title, description, image, author }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="author">
        <span>{author}</span>
      </div>

      <button className="star">☆</button>
      <button className="like">♡</button>
    </div>
  );
}
export default ProjectCard;