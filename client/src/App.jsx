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
import ScrollToTop from './components/ScrollToTop'
import { UserContext } from './contexts/UserContext'

function App() {
  const [authData, setAuthData] = useState('');

  return (
    <UserContext.Provider value={{ ...authData, setAuthData }}>
      <div id='content'>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main id='main-content'>
          <ScrollToTop />

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/listings' element={<ListingsCatalog />} />

            <Route path='/listings/create' element={<CreateListingForm />} />

            <Route path='/search' element={<SearchListingForm />} />

            <Route path='/listings/:listingId/edit' element={<EditListingForm />} />

            <Route path='/listings/:listingId/details' element={<ListingsDetails />} />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </UserContext.Provider>
  )
}

export default App
