import { Route, Routes } from 'react-router'

// import bikeLogo from '/bikeIcon.png'

import UserProvider from './providers/UserProvider'

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
import AuthGuard from './guards/AuthGuard'
import NoAuthGuard from './guards/NoAuthGuard'
import UserProfile from './components/pofile/UserProfile'

function App() {
  return (
    <UserProvider>
      <div id='content'>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main id='main-content'>
          <ScrollToTop />

          <Routes>

            <Route element={<NoAuthGuard />}>
              <Route path='/login' element={<Login />} />

              <Route path='/register' element={<Register />} />
            </Route>

            <Route path='/listings' element={<ListingsCatalog />} />

            <Route element={<AuthGuard />}>
              <Route path='/listings/create' element={<CreateListingForm />} />

              <Route path='/listings/:listingId/edit' element={<EditListingForm />} />

              <Route path='/profile' element={<UserProfile /> } />

              <Route path='/logout' element={<Logout />} />
            </Route>

            <Route path='/' element={<Home />} />

            <Route path='/search' element={<SearchListingForm />} />

            <Route path='/listings/:listingId/details' element={<ListingsDetails />} />

          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </UserProvider>
  )
}

export default App
