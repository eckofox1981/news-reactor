import { useMovedTagStore } from "../store/store";
import "../styles/tags.css";

export function Tags({ tags = [] }) {
  const setMovedTag = useMovedTagStore((store) => store.setMovedTag);

  return (
    <div className="tags">
      {tags.map((tag) => (
        <div
          key={tags.indexOf(tag) + Math.random()}
          className="tag"
          draggable
          onDragStart={() => {
            setMovedTag(tag);
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
