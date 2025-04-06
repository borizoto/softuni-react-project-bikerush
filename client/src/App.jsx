import bikeLogo from '/bikeIcon.png'

import CreateListingForm from './components/listings-create/CreateListingForm'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import EditListingForm from './components/listings-edit/EditListingForm'
import ListingsDetails from './components/listings-details/ListingsDetails'
import ListingsCatalog from './components/listings-catalog/ListingsCatalog'

function App() {
  return (
    <div id='content'>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main id='main-content'>
        <Home />

        <ListingsCatalog />

        <CreateListingForm />

        <EditListingForm />

        <ListingsDetails />

        <Login />

        <Register />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
