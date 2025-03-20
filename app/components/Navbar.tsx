import Link from 'next/link'
function Navbar(){
    return (
        <>
          <header>
            <nav>
              <div className="">
                <div className="flex justify-between h-16 px-10 shadow items-center">
                  <div className="flex items-center space-x-8">
                    <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Taskly</h1>
                      <div className="hidden md:flex justify-around space-x-4">
                        <Link href="#" className="hover:text-indigo-600 text-gray-700">Home</Link>
                        <Link href="getstarted" className="hover:text-indigo-600 text-gray-700">Get Started</Link>
                        <Link href="#" className="hover:text-indigo-600 text-gray-700">My Tasks</Link>
                      </div>
                    </div>
                  <div className="flex space-x-4 items-center">
                    <Link href="login" className="text-gray-800 text-sm">Log In</Link>
                    <Link href="signup" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">Sign Up</Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          
        </>
      );
}
export default Navbar