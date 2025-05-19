const Line = ({ line }: any) => {
  console.log(line);
  let h = "0";
  let w = "0";
  let top = "0";
  let left = "0";
  let rotate = "0";
  [h, w, top, left, rotate] = line;

  return (
    <div className={`absolute bg-yellow-400 z-50 h-${h} w-${w} top-${top} left-${left} rotate-${rotate}`}></div>
  );
};
export default Line;
