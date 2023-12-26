function Spinner() {  
    return (
      <div className="flex flex-col items-center justify-center h-[8rem] ">
      <div className="  border-t-4 border-orange-500 border-solid h-12 w-12 rounded-full animate-spin">
          
    </div>
    <h2 className="text-orange-200 capitalize text-sm  " >fetching data....</h2>
      </div>
  );
};



export default Spinner
