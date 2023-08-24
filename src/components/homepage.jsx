import React from 'react'
import Header from './common/hearder'
import Footer from './common/footer'
import "./homepage.css"
import ActionAreaCard from './card'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <main>
        <h1>hello</h1>
        <img src="https://cdn.pixabay.com/photo/2017/09/15/08/53/photography-2751464_1280.jpg" alt="hello" />
        <ActionAreaCard/>
        </main>
        <Footer/>
    </div>
  )
}

export default HomePage