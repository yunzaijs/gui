"use client"
import { Provider } from 'react-redux';
import store from '@/app/store';
import Main from '@/app/pages/Main'
import Footer from '@/app/pages/Footer'
import Alert from '@/app/pages/Alert'
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
