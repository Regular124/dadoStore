import React from "react";
import './App.css'
function App() {
  return (
    <>
      <Header />
      <FIRST_SECTION />
      <SECOND_SECTION />
      <THIRD_SECTION />
      <Footer />
    </>
  )
}


function Header() {
  return (
    <header className="header">
      <div class="">
        <h1>Дадовый капиталистический магазин Lego</h1>(Документов на товар не предоставляем)
      </div>
      <nav >
        <ul className="menu" >
          <li><a href="#React">Ассортимент</a></li>
          <li><a href="#Vite">Серии</a></li>
          <li><a href="#Why not Vue?">О магазине</a></li>
          <li><a href="#Why not Vue?">Интересные Факты</a></li>
          <input type="text" name="searchstring" id="searchstring" class="header__search-input" placeholder="Какой конструктор ищем?" autocomplete="off"></input>
        </ul>
      </nav>
    </header >
  );
}


function FIRST_SECTION() {
  return (
    <main className="ADV RSect">
      <h1>REACT</h1>
      <img src="./public/React.svg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis earum non, nobis natus accusantium delectus
        voluptatem molestiae eaque laboriosam, consequatur laborum
        officia, quae itaque. Officiis blanditiis ratione voluptates tenetur
        vero.</p>
    </main>
  );
}
function SECOND_SECTION() {
  return (
    <main className="ADV VSect">
      <h1>VITE</h1>
      <img src="./public/vite.svg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis earum non, nobis natus accusantium delectus
        voluptatem molestiae eaque laboriosam, consequatur laborum
        officia, quae itaque. Officiis blanditiis ratione voluptates tenetur
        vero.</p>
    </main>
  );
}
function THIRD_SECTION() {
  return (
    <main className="ADV WnVSect">
      <h1>Why not Vue?</h1>
      <img src="./public/vite.svg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officiis earum non, nobis natus accusantium delectus
        voluptatem molestiae eaque laboriosam, consequatur laborum
        officia, quae itaque. Officiis blanditiis ratione voluptates tenetur
        vero.</p>
    </main>
  );
}


function Footer() {
  return <footer className="footer">Footer</footer>
}

export default App;
