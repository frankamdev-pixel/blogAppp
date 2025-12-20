import { Link, usePage } from '@inertiajs/react';
export default function Navbar() {
  const { auth } = usePage().props as any;
  return (
    <>
      <nav className="border-b bg-white py-2 shadow-md">
        <div className="mx-auto flex max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link
                prefetch
                href="/"
                className="font-bold text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Frankam_Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {auth.user ? (
              <Link
                prefetch
                href="/dashboard"
                // href={route('login')}
                className="inline-flex items-center rounded-sm border bg-cyan-700 px-4 py-2 font-medium text-gray-100 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Controle
              </Link>
            ) : (
              <>
                <Link
                  prefetch
                  href="/login"
                  // href={route('login')}
                  className="inline-flex items-center rounded-sm border bg-cyan-700 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:p-2 hover:text-gray-700"
                >
                  Connexion
                </Link>

                <Link
                  prefetch
                  href="/register"
                  // href={route('register')}
                  className="inline-flex items-center rounded-sm border bg-cyan-700 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:p-2 hover:text-gray-700"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
