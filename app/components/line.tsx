const Line = ({ line }:{line:string[]}) => {
  console.log(line);
  let h = "0";
  let w = "0";
  let top = "0";
  let left = "0";
  let rotate = "0";
  [h, w, top, left, rotate] = line;

    // <div className="absolute top-2/12 w-full h-1 bg-yellow-400 z-50"></div>
    // <div className="absolute top-6/12 w-full h-1 bg-yellow-400 z-50"></div>
    // <div className="absolute top-10/12 w-full h-1 bg-yellow-400 z-50"></div>

    // <div className="absolute left-2/12 w-1 h-full bg-yellow-400 z-50"></div>
    // <div className="absolute left-6/12 w-1 h-full bg-yellow-400 z-50"></div>
    // <div className="absolute left-10/12 w-1 h-full bg-yellow-400 z-50"></div>

    // <div className="absolute left-[-70px] top-[190px] rotate-45 w-[525px] h-1 bg-yellow-400 z-50"></div>
    // <div className="absolute left-[-70px] top-[190px] rotate-135 w-[525px] h-1 bg-yellow-400 z-50"></div>




  return (
    <>
     {/* <div className="absolute top-2/12 w-full h-1 bg-yellow-400 z-50"></div>
     <div className="absolute top-6/12 w-full h-1 bg-yellow-400 z-50"></div>
     <div className="absolute top-10/12 w-full h-1 bg-yellow-400 z-50"></div>

     <div className="absolute left-2/12 w-1 h-full bg-yellow-400 z-50"></div>
     <div className="absolute left-6/12 w-1 h-full bg-yellow-400 z-50"></div>
     <div className="absolute left-10/12 w-1 h-full bg-yellow-400 z-50"></div>

     <div className="absolute left-[-70px] top-[190px] rotate-45 w-[525px] h-1 bg-yellow-400 z-50"></div>
     <div className="absolute left-[-70px] top-[190px] rotate-135 w-[525px] h-1 bg-yellow-400 z-50"></div> */}
      <div className={`absolute bg-yellow-400 z-50 h-${h} w-${w} top-${top} left-${left} rotate-${rotate}`}></div>
    </>
  );
};
export default Line;
