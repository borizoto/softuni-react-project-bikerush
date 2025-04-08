import { useState } from 'react'
import { Route, Routes } from 'react-router'

import bikeLogo from '/bikeIcon.png'

import { UserContext } from './contexts/UserContext'

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
import Logout from './components/logout/Logout'

function App() {
  const [authData, setAuthData] = useState(null);

  const userLoginHandler = (authData) => {
    setAuthData(authData);
  }

  const userLogoutHandler = () => {
    setAuthData(null);
  }

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
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

            <Route path='/logout' element={<Logout />} />
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
