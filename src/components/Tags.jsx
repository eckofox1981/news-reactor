import "../styles/tags.css";

export function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
    </div>
  );
}
