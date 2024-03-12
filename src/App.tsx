import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Navbar from '@/components/navbar'
import Home from '@/components/home'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="app bg-pink-20 bg-">
      <Navbar 
        isTopPage = {isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
    </div>);
}

export default App;
