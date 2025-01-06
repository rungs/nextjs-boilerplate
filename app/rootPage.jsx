'use client'
import MainLayout from '../src/component/layout/MainLayout'

const RootPage = ({ children }) => {

  return (
    <>
     <MainLayout>{children}</MainLayout>
    </>
  )
}

export default RootPage
