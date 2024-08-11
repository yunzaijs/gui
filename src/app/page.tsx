"use client" // 客户端
import Main from './pages/Main'
import Footer from './pages/Footer'
import Alert from './pages/Alert'
import { Provider } from 'react-redux';
import store from './store';
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
