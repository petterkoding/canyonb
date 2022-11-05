import React, {useState} from 'react'
import ScreenContainer from '@/ui/ScreenContainer'
import NavIcons from './NavIcons'
import { siteLinks } from '../../src/routes/Routes'
import { motion } from 'framer-motion'
import VariableHeading from '../typography/VariableHeading'
import WithLabel from '../typography/WithLabel'

const HeadingWithLabel = WithLabel(VariableHeading)


const Nav = () => {

  const [links, setLinks] = useState(siteLinks)
  const [subMenu, setSubMenu] = useState([])
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState("")

  function handleOpenState(e){
    const target = e.target.innerText.toLowerCase()    
    siteLinks?.map((link)=> {
      link.isOpen = false
      if(target === link.name?.toLowerCase()){
          setSubMenu(link.routes)
          link.isOpen = true
        }
      }

    
     
    )
  }
  

  function handleHideMenu(){
    setTimeout(()=>{
      setSubMenu([])
    }, 50)
  }

  function showSubSubMenu(){
    setShow(true)
  }

  function hideSubSubMenu(e){
    setShow(false)
    const target = e.target.innerText.toLowerCase()
    siteLinks?.map((link)=> {
      link.isOpen = false
      if(target === link.name?.toLowerCase()){
        
        link.isOpen = false
        
      }
    })
    
  }

  function handleRemoveOpenTab(e){
    const target = e.target.innerText.toLowerCase()
    siteLinks?.map((link)=> {
      link.isOpen = false
      if(target === link.name?.toLowerCase()){
        
        link.isOpen = false
        
      }
    })
  }


  return (
    <header className="bg-[#F4F4F4] h-auto">
      <nav onMouseLeave={hideSubSubMenu} className="flex flex-col justify-between h-full z-[99999] relative px-6 2xl:px-0">
      <div className="w-full h-[1px] absolute top-1/2 left-0 bg-gray-200 rounded-full"/>
        
        <ScreenContainer>
          <div onMouseEnter={handleRemoveOpenTab} className="flex flex-row items-center justify-between h-full relative pb-2 py-3">

            <div className="font-bold h-8 pt-1 text-4xl uppercase skew-x-[35deg] tracking-widest overflow-y-hidden overflow-hidden">canyon</div>

              <div className="flex items-center space-x-8">
                <ul className="flex text-[13px] text-gray-600 space-x-8 tracking-wider cursor-pointer">
                  <li className="hover:text-gray-500">Kommer snart</li>
                  <li className="hover:text-gray-500">Servicesenter</li>
                  <li className="hover:text-gray-500">Sykler på lager</li>
                  <li className="hover:text-gray-500">Finn reservedeler</li>
                  <li className="hidden hover:text-gray-500 lg:block">Jobb hos Canyon</li>
                </ul>

                <NavIcons/>

              </div>

          </div>

          <div className="h-full" onMouseLeave={handleHideMenu}>
          

            <ul
              onMouseEnter={hideSubSubMenu} 
              
              className="flex justify-center uppercase text-sm text-gray-900 h-full cursor-pointer">
              {siteLinks?.map((link, index) =>(
                <li
                  key={index}
                  onMouseEnter={handleOpenState}
                  className={`${link.isOpen ? "bg-white" : ""} py-4 px-8 hover:text-orange-600 transition-all duration-500 ease-in-out whitespace-nowrap`} >
                    {link.name}
                </li>
              ))
              }
            </ul>

            {
              subMenu.length > 0 &&
              <div
                
                className="absolute w-full left-0 flex justify-center uppercase text-sm text-gray-900 cursor-pointer bg-white z-[-100]">
                {subMenu.map((link, index) => 
                  <span
                    onMouseOver={showSubSubMenu}
                    key={index}
                    className="whitespace-nowrap py-3 px-8 hover:text-orange-600 relative after:absolute after:rounded-full after:h-[2px] after:w-full
                     after:bg-black after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 transition-all after:transition after:duration-500 ease-in-out">
                    {link}
                  </span>)}
              </div>


            }

            {
              show &&
              <motion.div
                initial={{opacity: 0, y: -3}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, ease: "easeInOut"}}
                className="absolute w-full h-[500px] left-0 bottom-[-544px] flex flex-col justify-between items-center uppercase text-sm text-gray-900 cursor-pointer bg-white">
                
                <div className="flex flex-row justify-center gap-24 w-full mt-12">
                  <div>
                    <HeadingWithLabel
                      title="allsidig 27.5 tommer"
                      as="h5"
                      styles="font-bold text-2xl inline">
                      ny
                    </HeadingWithLabel>
                    <p className="text-gray-800 my-4">Allsidig 140mm demper for aggresiv kjøring</p>
                    <ul className="mb-4 leading-8">
                      <li className="tracking-wider">neuron:on</li>
                      <li className="tracking-wider">spectral:on</li>
                      <li className="tracking-wider">torque:on</li>
                    </ul>
                    <button className="text-white bg-black rounded-lg py-4 px-12 mt-4 mr-8">Sykler på lager</button>
                    <button className="text-white bg-black rounded-lg py-4 px-12 mt-4">Outlet varer</button>
                  </div>

                  <motion.div
                    initial={{opacity: 0, x: 10}}
                    whileInView={{opacity: 1.2, x: 0, transition: { duration: 0.8, ease: "easeInOut"}}}
                    viewport={{once: true}}
                    >
                    <img src={"/spectral.jpg"} alt="canyon spectral bike" className="bg-black h-full"/>
                  </motion.div>
                </div>

                <div className="w-full bg-[#F4F4F4] h-[40px] mt-12 flex items-center justify-center space-x-14">
                  <span>Outlet sykler</span>
                  <span>Utstyr og deler</span>
                  <span>Guide til kjøp av terrengsykler</span>
                  <span>Kjøp etter modell</span>
                  <span>Kjøp etter spesifikasjon</span>
                </div>
              </motion.div>
            }
          
            
          </div>

        </ScreenContainer>
      </nav>

    </header>
  )
}

export default Nav
