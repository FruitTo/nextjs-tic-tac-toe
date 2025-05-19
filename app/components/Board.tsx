import Tile from "./Tile";
import Line from "./line";

function Board({tiles, click, line}:{tiles:string[],click:(index:number)=>void,line:string[]}) {
  return (
    <div className="relative">
      <Line line={line}/>
      <div className="grid grid-cols-3 grid-rows-3">
        <div className="flex justify-center items-center aspect-square">
          <Tile click={() => click(0)} value={tiles[0]} />
        </div>
        <div className="flex justify-center items-center border-l-4 border-r-4">
          <Tile click={() => click(1)} value={tiles[1]} />
        </div>
        <div className="flex justify-center items-center">
          <Tile click={() => click(2)} value={tiles[2]} />
        </div>

        <div className="flex justify-center items-center border-t-4 border-b-4">
          <Tile click={() => click(3)} value={tiles[3]} />
        </div>
        <div className="flex justify-center items-center border-4">
          <Tile click={() => click(4)} value={tiles[4]} />
        </div>
        <div className="flex justify-center items-center border-t-4 border-b-4">
          <Tile click={() => click(5)} value={tiles[5]} />
        </div>

        <div className="flex justify-center items-center">
          <Tile click={() => click(6)} value={tiles[6]} />
        </div>
        <div className="flex justify-center items-center border-l-4 border-r-4">
          <Tile click={() => click(7)} value={tiles[7]} />
        </div>
        <div className="flex justify-center items-center">
          <Tile click={() => click(8)} value={tiles[8]} />
        </div>
      </div>
    </div>
  );
}

export default Board;
