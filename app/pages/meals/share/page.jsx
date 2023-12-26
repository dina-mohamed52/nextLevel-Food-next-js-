'use client'
import SubmitButton from "<app>/app/features/meals/submitButton";
import { SubmitAction } from "<app>/app/services/submitAction";
import ImagePicker from "<app>/app/ui/ImagePicker";
import Spinner from "<app>/app/ui/Spinner";
import { useFormStatus } from "react-dom";
import{useFormState} from 'react-dom'
import toast from "react-hot-toast";
function SharePage ()
{
  const [state,formAction]=useFormState(SubmitAction,{message:null}) //to show server errors
  const { pending } = useFormStatus()

  if (pending) return <Spinner/>
  return (
    <div className="flex items-center justify-between">
      <header className="text-white mb-[58rem] ml-[5rem] py-12 text-left">
        <div className="mt-8 absolute">
          <h1 className="text-5xl w-[38rem] font-bold capitalize">
            Share your <span className="text-gradient">favorite meal</span>
          </h1>
          <p className="text-lg ml-8 mt-8">
            Or any other meal you feel needs sharing!
          </p>
        </div>
      </header>
      <main className="container mx-auto ml-[35rem] my-8">
        <form
          action={formAction}
          className="max-w-xl mx-auto bg-gradient-to-r from-gray-800  to-orange-800 p-8 shadow-lg rounded-md text-orange-100"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="mb-4 w-[48%]">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 bg-gray-800 border-orange-500 p-3 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div className="w-[48%]">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mb-4 border-2 bg-gray-800 border-orange-500 p-3 rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full border-2 bg-gray-800 border-orange-500  p-3 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="summary"
              className="block text-sm font-semibold mb-2"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              className="w-full border-2 bg-gray-800 border-orange-500  p-3 rounded-md focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="instructions"
              className="block text-sm font-semibold mb-2"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="6"
              className="w-full border-2 bg-gray-800 border-orange-500  p-3 rounded-md focus:outline-none focus:border-orange-500"
              required
            ></textarea>
          </div>
          <ImagePicker name="image" label="your image" />
          {state.message && toast.error(state.message)}
          <div className="mb-6">
            {/* <button
              disabled={pending}
              type="submit"
              className="bg-gradient-to-r from-orange-700 to-yellow-700 hover:from-orange-500 hover:to-yellow-500 text-orange-200 font-bold py-2 px-4 rounded-lg"
            >
              {pending ? "submitting...." : "Share Meal"}
            </button> */}
            <SubmitButton/>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SharePage;
