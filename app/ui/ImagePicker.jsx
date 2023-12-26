"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [imagePicker, setImagePicker] = useState(null);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handlePickChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setImagePicker(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePicker(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="mb-8">
      <label htmlFor={name} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <div className="flex  items-center justify-between space-y-4">
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          className="hidden"
          onChange={handlePickChange}
          // required
        />
        <div className="w-48 h-48 border border-gray-300 rounded-md overflow-hidden relative">
          {!imagePicker && <p className="text-gray-500 ml-4 my-auto ">No image picked yet</p>}
          {imagePicker && (
            <Image
              src={imagePicker}
              fill
              alt="Selected Image"
            //   layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <button
          type="button"
          onClick={handlePickClick}
          className="bg-gray-800 border border-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
