function Reset({reset}:any) {
  return (
    <div className="flex justify-center items-center">
      <button onClick={reset} className="border-3 rounded-md mt-7 p-2 bg-[#ECEFCA] drop-shadow-2xl">
        <h1 className="text-3xl text-[#213448]">Reset</h1>
      </button>
    </div>
  );
}

export default Reset;
