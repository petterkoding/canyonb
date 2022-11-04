import React from 'react'
import ScreenContainer from '@/ui/ScreenContainer'

const Nav = () => {
  return (
    <header className="bg-gray-200 h-auto">
      <nav className="flex flex-col justify-between h-full">
        <ScreenContainer>
          <div className="flex flex-row items-center justify-between h-full relative pb-2">

            <div className="font-bold text-2xl">Logo</div>

              <ul className="flex text-xs text-gray-700 space-x-8">
                <li>Kommer snart</li>
                <li>Servicesenter</li>
                <li>Sykler på lager</li>
                <li>Finn reservedeler</li>
                <li>Jobb hos Canyon</li>
              </ul>

          </div>

          <div className="h-full">

            <ul className="flex justify-center uppercase text-sm text-gray-800 h-full cursor-pointer">
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">road bikes</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">gravel bikes</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">mountain bikes</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">elsykkel</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">hybrid</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">tilbehør</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600">outlet</li>
              <li className="hover:bg-white py-2 px-8 hover:text-orange-600 font-bold">service</li>
            </ul>


          </div>

        </ScreenContainer>
      </nav>

    </header>
  )
}

export default Nav