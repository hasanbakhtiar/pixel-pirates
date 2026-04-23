import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Shop page',
  keywords: ['Shop', 'Shopping'],

}

const Home = () => {
  return (
    <div>
      <img width={300} src="images/lion-head.webp" alt="" />
    </div>
  )
}

export default Home