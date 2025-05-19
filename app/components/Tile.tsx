function Tile({value, click}:any) {
    return ( 
    <div onClick={click} className="w-full h-full flex justify-center items-center">
        <p className="text-4xl">{value}</p>
    </div> );
}

export default Tile;