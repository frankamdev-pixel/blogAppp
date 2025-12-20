import { usePage } from '@inertiajs/react';

export default function Create() {
  const { auth } = usePage().props;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-100">
          Create a new post
          <h1>{auth.user.name},</h1>
        </h2>
      </div>
    </div>
  );
}
