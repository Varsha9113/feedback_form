"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const email = searchParams.get("email");
  const age = searchParams.get("age");
  const comment = searchParams.get("comment");

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Submitted Details</h1>
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Gender:</span> {gender}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Age:</span> {age}</p>
          <p><span className="font-semibold">Comment:</span> {comment}</p>
        </div>
      </div>
    </main>
  );
}
