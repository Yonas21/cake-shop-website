import Hero from './components/Hero'
import ItemList from './components/ItemList'
import Feature from './components/Feature'
import VisitableShop from './components/VisitableShop'
import Banner from './components/Banner'

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ItemList />
      <Feature />
      <VisitableShop />
      <Banner />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage