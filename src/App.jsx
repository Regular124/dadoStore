import React from "react";
import './App.css'
import { useState } from "react";

const cardData = [
  {
    title: "LEGO Star Wars 75354 Боевой корабль Корусантской гвардии",
    description: "there should be text here",
    price: "18.000 рублей",
    Stock: "3",
    imageUrl: ["/pics/75354.webp", "/pics/75354-2.webp", "/pics/75354-3.webp"],
    MoreInfo: "",
    id: 1,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75378 Побег на БАРК гравицикле ",
    description: "there should be text here",
    price: "2.500 рублей",
    Stock: "2",
    imageUrl: ["/pics/75378.webp", "/pics/75378-2.webp", "/pics/75378-3.webp",],
    MoreInfo: "",
    id: 2,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75190 Звездный разрушитель Первого ордена",
    description: "there should be text here",
    price: "40.000 рублей",
    Stock: "4",
    imageUrl: ["/pics/75190.webp", "/pics/75190-2.webp", "/pics/75190-3.webp"],
    MoreInfo: "",
    id: 3,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75336 Транспортная Коса Инквизиторов",
    description: "there should be text here",
    price: "20.000 рублей",
    Stock: "1",
    imageUrl: ["/pics/75336.webp", "/pics/75336-2.webp", "/pics/75336-3.webp"],
    MoreInfo: "",
    id: 4,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75374 Ониксовый пепел",
    description: "there should be text here",
    price: "15.000 рублей",
    Stock: "4",
    imageUrl: ["/pics/75374.webp", "/pics/75374-2.webp", "/pics/75374-3.webp"],
    MoreInfo: "",
    id: 5,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75323 Космический корабль Оправдатель",
    description: "there should be text here",
    price: "18.000 рублей",
    Stock: "8",
    imageUrl: ["/pics/75323.webp", "/pics/75323-2.webp", "/pics/75323-3.webp"],
    MoreInfo: "",
    id: 6,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75355 Звёздный истребитель X-Wing Коллекционный",
    description: "there should be text here",
    price: "25.000 рублей",
    Stock: "3",
    imageUrl: ["/pics/75355.webp", "/pics/75355-2.webp", "/pics/75355-3.webp"],
    MoreInfo: "",
    id: 7,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75393 Смешанные истребители",
    description: "there should be text here",
    price: "13.000 рублей",
    Stock: "6",
    imageUrl: ["/pics/75393.webp", "/pics/75393-2.webp", "/pics/75393-3.webp"],
    MoreInfo: "",
    id: 8,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Marvel 76156 Rise of the Domo",
    description: "there should be text here",
    price: "15.000 рублей",
    Stock: "3",
    imageUrl: ["/pics/76156.webp", "/pics/76156-2.webp", "/pics/76156-3.webp"],
    MoreInfo: "",
    id: 9,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75315 Легкий имперский крейсер",
    description: "Имеет повреждения коробки.",
    price: "30.000 рублей",
    Stock: "1",
    imageUrl: ["/pics/75315.webp", "/pics/75315-2.webp", "/pics/75315-3.webp"],
    MoreInfo: "",
    id: 10,
    MorePics: "",
    tags: ["#star_wars"],
    archived: false,
  },
  {
    title: "LEGO Star Wars 75394 Имперский Звездный Разрушитель",
    description: "Имеет повреждения коробки.",
    price: "20.000 рублей",
    Stock: "1",
    imageUrl: ["/pics/75394.webp", "/pics/75394-2.webp", "/pics/75394-3.webp"],
    MoreInfo: "",
    id: 11,
    MorePics: "",
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
      {/* <Series1 /> */}
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
        <div className="">
          <div className="DadoImage">
            <img src="/pics/Kraft_Dado.webp" height={100} width={100} className="DadoImage2"></img>
            <h1>Дадовый капиталистический магазин Lego</h1></div>
          <div className="info">(Документов на товар не предоставляем)</div>
        </div>
        <nav >
          <ul className="menu" >
            <button onClick={() => setregular124(1)}>Ассортимент </button>
            <button onClick={() => setregular124(2)}>Серии </button>
            <button onClick={() => setregular124(3)}>О магазине </button>
            <button onClick={() => setregular124(4)}>Интересные Факты </button>
            <button onClick={() => setregular124(5)}>Иные услуги</button>
            <input type="text" name="searchstring" id="searchstring" className="header__search-input" placeholder="Бэкенда нет"></input>
          </ul>
        </nav>
      </header >
    );
  }


  function Reklama() {
    return (
      <div className="reklama">
        <img src="/pics/Pirat.webp" width={200} height={200} href="https://pp-international.net"></img>
        <a href="https://pp-international.net">
          <p>Сайт междунарожного пиратского интернационала</p></a>
        <p>Вступай в наши ряды! борись с корпоративным рабством!</p>
        <p>Вступай в национальную пиратскую партию!</p>
        <a href="https://pirate-party.ru">
          <p>Пиратская партия России</p></a>
        <div><img src="/pics/PPR.webp" width={200} height={100} ></img></div>
        <div><img src="/pics/rutor.webp" width={200} height={200} ></img></div>

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
              <Card cardObj={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>) : ''
  }



  function Card({ cardObj }) {
    const [apple, setapple] = useState(0);
    function changepic() { apple == 2 ? setapple(0) : setapple((prev) => (prev) + 1) }
    return (
      <div className="card" >
        <a>
          <img className="card-image" src={cardObj.imageUrl[apple]} alt={cardObj.title} onClick={() => changepic()} />
        </a>
        <div className="card-content">
          <h2 className="card-title">{cardObj.title}</h2>
          <h1 className="card-title">{cardObj.price}</h1>
          <p className="card-description">{cardObj.description}</p>
          <p className="card-Stock">В наличии: {cardObj.Stock} ед.</p>
          <button className="Buy">Buy</button>
        </div>
      </div>
    )
  }

  // function Series1() {
  //   return regular124 == 2 ? (
  //     <div className="Table">
  //       <div className="card-container">
  //         {SeriesData.map((item) => (
  //           <CardcardObj={item} />
  //         ))}
  //       </div>
  //     </div>) : ''
  // }

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