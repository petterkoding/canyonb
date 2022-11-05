import React, {useState} from 'react'
import ScreenContainer from '@/ui/ScreenContainer'
import NavIcons from './NavIcons'
import { siteLinks } from '../../src/routes/Routes'
import { motion } from 'framer-motion'


const Nav = () => {

  const [links, setLinks] = useState(siteLinks)
  const [subMenu, setSubMenu] = useState([])
  const [show, setShow] = useState(false)



  function handleOpenState(e){
    const target = e.target.innerText.toLowerCase()
    links?.map((link)=> {
        if(target === link.name?.toLowerCase()){
          setSubMenu(link.routes)
          link.isOpen = true
        }
      }
    
     
    )
  }

  function handleCloseState(e){
    const target = e.target.innerText.toLowerCase()
    links?.map((link)=> {
      if(target === link.name?.toLowerCase()){
        setTimeout(()=>{
          link.isOpen = false
        }, 50)
      }
    })
  }

  function handleHideMenu(){
    setTimeout(()=>{
      setSubMenu([])
    }, 50)
  }

  function showSubSubMenu(){
    setShow(true)
  }
  function hideSubSubMenu(){
    setShow(false)
  }

  return (
    <header className="bg-[#F4F4F4] h-auto">
      <nav onMouseLeave={hideSubSubMenu}  className="flex flex-col justify-between h-full relative z-[99999]">
        <ScreenContainer>
          <div className="flex flex-row items-center justify-between h-full relative pb-2 py-3">

            <div className="font-bold h-8 pt-1 text-4xl uppercase skew-x-[35deg] tracking-widest overflow-y-hidden">canyon</div>

              <div className="flex items-center space-x-8">
                <ul className="flex text-sm text-gray-700 space-x-8 tracking-wider cursor-pointer">
                  <li className="hover:text-gray-500">Kommer snart</li>
                  <li className="hover:text-gray-500">Servicesenter</li>
                  <li className="hover:text-gray-500">Sykler på lager</li>
                  <li className="hover:text-gray-500">Finn reservedeler</li>
                  <li className="hover:text-gray-500">Jobb hos Canyon</li>
                </ul>

                <NavIcons/>

              </div>

          </div>

          <div className="h-full" onMouseLeave={handleHideMenu}>

            <ul className="flex justify-center uppercase text-sm text-gray-900 h-full cursor-pointer">
              {siteLinks?.map((link, index) =>(
                <li
                  key={index}
                  onMouseEnter={handleOpenState}
                  onMouseLeave={handleCloseState}
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
                    className="py-3 px-8 hover:text-orange-600 relative after:absolute after:rounded-full after:h-[2px] after:w-full
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
                className="absolute w-full h-[500px] left-0 bottom-[-544px] flex flex-row justify-evenly items-center uppercase text-sm text-gray-900 cursor-pointer bg-white">
                
                <div>
                  <h4>Prøv vår nyeste sykkel</h4>
                  <p>Akkurat blitt bedre!</p>
                </div>

                <motion.div
                  initial={{opacity: 0, x: 10}}
                  whileInView={{opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut"}}}
                  viewport={{once: true}}
                >
                  <div className="aspect-video bg-black w-[340px]"/>
                </motion.div>
              </motion.div>
            }
          
            
          </div>

        </ScreenContainer>
      </nav>

    </header>
  )
}

export default Nav
