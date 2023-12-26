import Image from "next/image";

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-16  text-orange-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold ">
          One shared passion: <span className="text-gradient">Food</span>
        </h1>
        <p className="text-gray-200 text-lg my-8 ">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main>
        <h2 className="text-2xl font-semibold py-8 ml-[33rem] my-8 ">
          Community Perks
        </h2>

        <ul className="flex flex-col items-center font-semibold">
          <li className="flex flex-col items-center mb-8">
            <Image
              src="/icons/meal.png"
              alt="A delicious meal"
              width={100}
              height={24}
              className="mb-4"
            />
            <p className="text-lg text-center">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center mb-8">
            <Image
              src="/icons/community.png"
              alt="A crowd of people, cooking"
              width={100}
              height={45}
              className="mb-4"
            />
            <p className="text-lg text-center">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center mb-8">
            <Image
              src="/icons/events.png"
              alt="A crowd of people at a cooking event"
              width={100}
              height={45}
              className="mb-4"
            />
            <p className="text-lg text-center">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}
