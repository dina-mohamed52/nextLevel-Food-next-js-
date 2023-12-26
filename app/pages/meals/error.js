'use client'
function Error ( { error } )
{
    return (
      <main>
        <h1 className="mt-16 uppercase text-gradient text-[4rem] text-center ">an error occurred !</h1>
        <p className="text-xl text-orange-200 text-center " >faied to fetch meal data,please try again later</p>
      </main>
    );
}

export default Error
