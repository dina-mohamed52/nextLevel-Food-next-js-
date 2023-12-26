'use client'
import { useFormStatus } from "react-dom";
 export default function SubmitButton ()
{
    const {pending}=useFormStatus()
    return (
      <button
        disabled={pending}
        type="submit"
        className="bg-gradient-to-r from-orange-700 to-yellow-700 hover:from-orange-500 hover:to-yellow-500 text-orange-200 font-bold py-2 px-4 rounded-lg"
      >
        {pending ? "submitting...." : "Share Meal"}
      </button>
    );
}


