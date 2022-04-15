import style from "./ColorButton.module.css";

interface Color {
  name: string;
}

const ColorButton: React.FC<{ color: Color }> = (props) => {
  return (
    <div
      className={style.colorSquare}
      style={{ backgroundColor: `#${props.color.name}` }}
    >
      <div></div>
    </div>
  );
};

export default ColorButton;
