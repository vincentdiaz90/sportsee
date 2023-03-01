import './ErrorPage.css'
import NavbarAPI from '../../Components/NavbarMockAPI/NavbarAPI/NavbarAPI'
import NavbarMock from '../../Components/NavbarMockAPI/NavbarMock/NavbarMock'


export default function ErrorPage() {

  return (
    <div className='error'>
      <h1>Une erreur est survenue</h1>
      <div className='error-nav'>
        {/* <NavbarAPI /> */}
        <NavbarMock />
      </div>
    </div>
  )
}
