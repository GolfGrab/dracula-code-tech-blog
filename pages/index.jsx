import Head from 'next/head'
import CustomNav from '../components/CustomNav.component'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Golfzilla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=" h-screen "
        style={{
          backgroundColor: '#1a1a1d',
        }}
      >
        <CustomNav />
        <div className="container mx-auto">
          <div className="py-32 text-center text-4xl">
            <h2>navbar</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
