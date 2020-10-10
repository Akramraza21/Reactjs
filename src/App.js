import React from 'react';
import './App.css';
import Row from './Row/Row'
import request from './request'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title = "NETFLIX ORIGINALS" isLargeRow fetchUrl = {request.fetchNetflixOriginals} />
      <Row title = "Treanding Now"  fetchUrl = {request.fetchTrending} />
      <Row title = "Top Rated"  fetchUrl = {request.fetchTrending} />
      <Row title = "Action Movies"  fetchUrl = {request.fetchActionMovies} />
      <Row title = "Comedy Movies"  fetchUrl = {request.fetchComedyMovies} />
      <Row title = "Horror Movies"  fetchUrl = {request.fetchHorrorMovies} />
      <Row title = "Romance Movirs"  fetchUrl = {request.fetchRomanceMovies} />
      <Row title = "Documentaries"  fetchUrl = {request.fetchDocumentaries} />
    </div>
  );
}

export default App;
