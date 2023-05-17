import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import WatchScreen from './screens/WatchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen/SearchScreen';
import SubscriptionsScreen from './screens/SubscriptionsScreen/SubscriptionsScreen';
import ChannelScreen from './screens/ChannelScreen/ChannelScreen';

export const Layout = ({children})=>{
  const [sidebar,toggleSidebar] = useState(false);

  const handleToggleSidebar = ()=>toggleSidebar(value=>!value)

  return(
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className="app__container">
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
      <Container fluid className="app_main">
        {children}
      </Container>
    </div>
    </>
  );
}

const App = () => {
  const {accessToken,loading} = useSelector(state=>state.auth)

  useEffect(()=>{
    if(!loading && !accessToken){
      
    }
  },[accessToken,loading])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Wetube' exact element={
          <>
          <Layout>
            <HomeScreen/>
          </Layout>
          </>
        }></Route>

        <Route path='/login' element={<LoginScreen/>}></Route>

        
        <Route path='/search/:query' element={
          <>
            <Layout>
              <SearchScreen/>
            </Layout>
          </>
        }> 
        </Route>

        <Route path='/feed/subscriptions' element={
          <>
            <Layout>
              <SubscriptionsScreen/>
            </Layout>
          </>
        }> 
        </Route>

        <Route path='/channel/:channelId' element={
          <>
            <Layout>
              <ChannelScreen/>
            </Layout>
          </>
        }> 
        </Route>

        <Route path='/watch/:id' element={
          <>
            <Layout>
              <WatchScreen/>
            </Layout>
          </>
        }> 
        </Route>

        <Route>

        </Route>
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
