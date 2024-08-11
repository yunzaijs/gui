"use client"
import { Provider } from 'react-redux';
import store from '@/app/store';
import Main from '@/app/pages/home/Main'
import Footer from '@/app/pages/home/Footer'
import Alert from '@/app/pages/home/Alert'
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Alert></Alert>
        <Main></Main>
        <Footer></Footer>
      </Provider>
    </>
  )
}
