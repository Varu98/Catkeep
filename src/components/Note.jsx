import "../styles.css";
import text from "../text";
const Note = () => {
  return (
    <div>
      {text.map((notes) => {
        return (
          <div className="note flex-container" key={notes.key}>
            <div className="flex-item">
              <div className="note_h ">
                <h2>{notes.title}</h2>
              </div>
              <div className="note_p ">{notes.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Note;
