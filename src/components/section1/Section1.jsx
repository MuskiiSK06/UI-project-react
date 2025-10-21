import React from 'react'
import Navbar from './Navbar'
import PageContent1 from './PageContent1'

function Section1(props) {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <PageContent1 users={props.users}/>
    </div>
  )
}

export default Section1