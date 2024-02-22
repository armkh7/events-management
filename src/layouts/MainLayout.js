// components
import MainHeader from "../components/layout/MainHeader";

function MainLayout({ children }) {
  return (
    <div className='min-h-screen'>
      <MainHeader />
      <main className="container mx-auto pt-8">
        {children}
      </main>
    </div>
  )
}

export default MainLayout;
