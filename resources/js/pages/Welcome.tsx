import Navbar from '@/components/Navbar';
import { Post } from '@/types/post';
import { Head, Link } from '@inertiajs/react';


const welcome = ({ auth, posts, canRegister }): PageProps<{ posts: Post[], canRegister: boolean }> => {
  return (
    <>
      <Head title='Bienvenue' />
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6lg:px-8">
          <div className="text-center">
            <h1 className='text-4xl font-black text-gray-800'>
              <span className="block">Bienvenue sur</span>
              <span className='black text-cyan'>Notre Blog communautaire</span>
            </h1>
            <p className="mt-3 max-w-m mx-auto text-cyan-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint veritatis ea minima neque beatae, tempora reprehenderit quisquam repudiandae rem.
            </p>
            {!auth.user && canRegister && (
              <div className="mt-5 max-w-m mx-auto sm:flex sm:justify-center m:mt-8">
                <div className="rounded:sm shadow-md">
                  <Link
                    prefetch
                    className='font-bold p-4 bg-cyan-300 text-2xl rounded-2xl text-gray-800  transition duration-150 ease-in-out hover:text-gray-700'
                    href='/login'>Commencer ici</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default welcome
