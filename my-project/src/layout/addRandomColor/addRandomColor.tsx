export const AddRandomColor = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 my-10">
      <div>
        <button className="border border-black px-10 py-2 rounded-md bg-white">
          add color
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border border-black px-10 py-2 rounded-md">
          add color
        </div>
        <div className="border border-black px-10 py-2 rounded-md">
          add color
        </div>
      </div>
    </div>
  );
};
