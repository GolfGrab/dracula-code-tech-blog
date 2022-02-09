import Head from 'next/head'
import CustomNav from '../components/CustomNav.component'
import SVGComponent from '../components/svg'

export default function Welcome() {
  return (
    <div>
      <Head>
        <title>Dracula Code 🧛‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=" h-screen "
        style={{
          backgroundColor: '#3f3f3f',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <CustomNav />
        <div className="container mx-auto">
          <div className="grid  grid-cols-4  md:grid-cols-9 ">
            <div className="z-10 col-span-3 mt-20 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center md:col-span-6">
              <div className="text-2xl text-gray-300">Hello, I'm</div>
              <div className="text-7xl text-white">Surapus</div>
              <div className="mt-4 text-2xl text-gray-300">
                A Newbie Developer
              </div>
              <div className=" text-4xl text-rose-200">Welcome to my</div>
              <div className=" text-4xl text-rose-500">Tech Blog</div>

              <button className="mt-10 rounded-lg bg-rose-800 p-2 text-2xl text-white hover:bg-rose-900 ">
                Read Some Content ?
              </button>
              <div className=" my-2 text-xl text-gray-300">OR</div>
              <button className=" rounded-lg bg-rose-800 p-2 text-2xl text-white hover:bg-rose-900">
                See My Portfolio !!
              </button>
            </div>
            <div className=" box mt-20  min-h-[calc(100vh-5rem)]  overflow-hidden md:col-span-3 ">
              <SVGComponent height="30rem" className="mx-auto mt-[20vh]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
