import { useState } from 'react'
import { Route, Routes } from 'react-router'

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
import SearchListingForm from './components/listings-search/SearchListingForm'

function App() {
  const [email, setEmail] = useState('');

  return (
    <div id='content'>
      {/* Header */}
      <Header />

      {/* Main content */}
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/listings' element={<ListingsCatalog />} />

          <Route path='/listings/create' element={<CreateListingForm />} />

          <Route path='/search' element={<SearchListingForm />} />

          <Route path='/listings/:listingId/edit' element={<EditListingForm />} />

          <Route path='/listings/:listingId/details' element={<ListingsDetails email={email} />} />

          <Route path='/login' element={<Login setEmail={setEmail} />} />

          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
