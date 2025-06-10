import React from "react";
import './App.css'
import { useState } from "react";

const cardData = [
  {
    title: "LEGO Star Wars 75354 Боевой корабль Корусантской гвардии",
    description: "there should be text here",
    price: "18.000 рублей",
    Stock: "3",
    imageUrl: "/pics/75354.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75378 Побег на БАРК гравицикле ",
    description: "there should be text here",
    price: "2.500 рублей",
    Stock: "2",
    imageUrl: "/pics/75378.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75190 Звездный разрушитель Первого ордена",
    description: "there should be text here",
    price: "40.000 рублей",
    Stock: "4",
    imageUrl: "/pics/75190.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75336 Транспортная Коса Инквизиторов",
    description: "there should be text here",
    price: "20.000 рублей",
    Stock: "1",
    imageUrl: "/pics/75336.jpg",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75374 Ониксовый пепел",
    description: "there should be text here",
    price: "15.000 рублей",
    Stock: "4",
    imageUrl: "/pics/75374.jpg",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75323 Космический корабль Оправдатель",
    description: "there should be text here",
    price: "18.000 рублей",
    Stock: "8",
    imageUrl: "/pics/75323.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75355 Звёздный истребитель X-Wing Коллекционный",
    description: "there should be text here",
    price: "25.000 рублей",
    Stock: "3",
    imageUrl: "/pics/75355.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75393 Смешанные истребители",
    description: "there should be text here",
    price: "13.000 рублей",
    Stock: "6",
    imageUrl: "/pics/75393.jpg",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Marvel 76156 Rise of the Domo",
    description: "there should be text here",
    price: "15.000 рублей",
    Stock: "3",
    imageUrl: "/pics/76156.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75315 Легкий имперский крейсер",
    description: "Имеет повреждения коробки.",
    price: "30.000 рублей",
    Stock: "1",
    imageUrl: "/pics/75315.webp",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75394 Имперский Звездный Разрушитель",
    description: "Имеет повреждения коробки.",
    price: "20.000 рублей",
    Stock: "1",
    imageUrl: "/pics/75394.webp",
    tags: ["#star_wars"],
    archived: false,
  },
];

const SeriesData = [
  {
    title: "STAR WARS",
    description: "there should be text here",
    imageUrl: "/pics/75354.webp",
    archived: false,
  },
  {
    title: "LORD OF THE RINGS",
    description: "there should be text here",
    imageUrl: "/pics/75354.webp",
    archived: false,
  },
  {
    title: "PRINCESS",
    description: "there should be text here",
    imageUrl: "/pics/75354.webp",
    archived: false,
  },
  {
    title: "BIONICLE",
    description: "there should be text here",
    imageUrl: "/pics/75354.webp",
    archived: false,
  },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [regular124, setregular124] = useState(1);

  return (
    <div className="app">
      <Header />
      <Assortiment1 />
      <Series1 />
      <AboutMag1 />
      <InterestingAsf1 />
      <AnotherBusiness1 />
      <Footer />
      <Text />
    </div >
  )



  function Header() {
    return (
      <header className="header">
        <div class="">
          <div className="DadoImage">
            <img src="/pics/Kraft_Dado.jpg" height={100} width={100} className="DadoImage2"></img>
            <h1>Дадовый капиталистический магазин Lego</h1></div>
          <div className="info">(Документов на товар не предоставляем)</div>
        </div>
        <nav >
          <ul className="menu" >
            <button className={`tab-button ${regular124 == 1 ? "active" : " "}`} onClick={() => setregular124(1)}>Ассортимент </button>
            <button className={`tab-button ${regular124 == 2 ? "active" : " "}`} onClick={() => setregular124(2)}>Серии </button>
            <button className={`tab-button ${regular124 == 3 ? "active" : " "}`} onClick={() => setregular124(3)}>О магазине </button>
            <button className={`tab-button ${regular124 == 4 ? "active" : " "}`} onClick={() => setregular124(4)}>Интересные Факты </button>
            <button className={`tab-button ${regular124 == 5 ? "active" : " "}`} onClick={() => setregular124(5)}>Иные услуги</button>
            <input type="text" name="searchstring" id="searchstring" class="header__search-input" placeholder="Бэкенда нет" autocomplete="off"></input>
          </ul>
        </nav>
      </header >
    );
  }

  function Card({ cardObj }) {
    return (
      <div className="card">
        <a href={cardObj.imageUrl} >
          <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
        </a>
        <div className="card-content">
          <h2 className="card-title">{cardObj.title}</h2>
          <h1 className="card-title">{cardObj.price}</h1>
          <p className="card-description">{cardObj.description}</p>
          <p className="card-Stock">В наличии: {cardObj.Stock} ед.</p>
          <button className="Buy"> Buy</button>
        </div>
      </div>
    )
  }
  // regular124
  function Assortiment1() {
    return regular124 == 1 ? (
      <div className="assortiment">
        <Reklama />
        <div className="Table">
          <h2>В наличии прямо сейчас:</h2>
          <div className="card-container">
            {cardData.map((item) => (
              <Card cardObj={item} />
            ))}
          </div>
        </div>
      </div>) : ''

  }

  function Reklama() {
    return (
      <div className="reklama">
        <img src="/pics/Pirat.png" width={200} height={200} href="https://pp-international.net"></img>
        <a href="https://pp-international.net">
          <p>Сайт междунарожного пиратского интернационала</p></a>
        <p>Вступай в наши ряды! борись с корпоративным рабством!</p>
        <p>Вступай в национальную пиратскую партию!</p>
        <a href="https://pirate-party.ru">
          <p>Пиратская партия России</p></a>
        <div><img src="/pics/PPR.png" width={200} height={100} ></img></div>
        <div><img src="/pics/rutor.jpg" width={200} height={200} ></img></div>

      </div>
    )
  }

  function Series1() {
    return regular124 == 2 ? (
      <div className="Table">
        <div className="card-container">
          {SeriesData.map((item) => (
            <Card cardObj={item} />
          ))}
        </div>
      </div>) : ''
  }
  function AboutMag1() {
    return regular124 == 3 ? (
      <>
        <div className="Table">
          Великолепный Магазин Дадо Лего основан в 1999 году, когда известный парафармацефт Дадо решил расширять бизнес и обратил внимание на конструкторы Лего.
          <p>Магазин Дадо Лего находится в секретном месте-складе-судебном департаменте после того как Джеф Безас при поддержке Яндыкс послал своих диверсантов для разрушения замечательный бизнес Дадо-супермаркет</p>
          <p>ПОсылки отправляются любыми службами доствки. Оплата принимается любыми способами оплаты в том числе в рублях, йенах, долларах, криптовалютой</p>
          <p>Дадо магазин Лего находится в тестовой версии альфа.02 и будет дополняться как только будет обнаружен способ залить его на хостинг.</p>
          <p>Весь товар не подлежит обязательной сертификации и не имеет документов происхождения. <span className="info">подавать в суд бесполезно. Дадо не юридическое лицо и не ИП</span></p>
          <p>Дадо не несет ответственности за повреждения товара в ходе транспортировки. При упаковке используется пупырка и упаковочная крафт бумага.(коробка и наполнитель от компании-перевозчика)</p>
          <p>магазин Лего дадо временно не работает в связи с занятостью.</p>
        </div>
      </>) : ''
  }
  // regular124
  function InterestingAsf1() {
    return regular124 == 4 ? (
      <div className="Table">
        <img src="" ></img>
      </div>) : ''
  }
  function AnotherBusiness1() {
    return regular124 == 5 ? (
      <div className="Table">
        <dev className="Table">
          Дадо оказывает бесплатную высококачественную юридическую помощь через интернет
          <p className="info">Гарантий нет.</p>
        </dev>
      </div>) : ''
  }
  // регулар124
  function Text() {
    return isOpen ? (<div className="HiddenText">Разумеется можно было сделать красивый и яркий сайт по продаже лего, но мне не захотелось делать его детским.
      <span>В конце концов много взрослых людей покупают лего для себя, поэтому сайт иллюстрирует эдакий склад, без ярких бумажек. Все чётко и по делу.</span>
      <span>Плюс, визуальное загрязнение утомляет посетителя и отвлекает от целей визита.</span>
    </div>) : ''
  }

  function Footer() {
    return (
      <footer className="footer">
        <strong>Минимализм. Практичность. Гут.</strong>
        <div className="info">А вы посмотрите как у них!(у других магазинов Lego), это ведь ужас!
          <button onClick={() => setIsOpen(prev => !prev)}>Инфо</button>
        </div>
        версия Альфа.Тест.02
      </footer>
    )
  }
};