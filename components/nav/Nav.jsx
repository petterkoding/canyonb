import React from 'react'
import ScreenContainer from '@/ui/ScreenContainer'

const Nav = () => {
  return (
    <header className="bg-gray-200 h-28">
      <nav className="flex flex-col justify-between h-full">
        <ScreenContainer>
          <div className="flex flex-row items-center justify-between h-full">

            <div className="font-bold text-2xl">Logo</div>

              <ul className="flex text-xs text-gray-600 space-x-8">
                <li>Kommer snart</li>
                <li>Servicesenter</li>
                <li>Sykler på lager</li>
                <li>Finn reservedeler</li>
                <li>Jobb hos Canyonr</li>
              </ul>

          </div>

          <div className="h-full">

            <ul className="flex">
              <li>road bikes</li>
              <li>gravel bikes</li>
              <li>mountain bikes</li>
              <li>elsykkel</li>
              <li>hybrid</li>
              <li>tilbehør</li>
              <li>outlet</li>
              <li>service</li>
            </ul>


          </div>

        </ScreenContainer>
      </nav>

    </header>
  )
}

export default Nav