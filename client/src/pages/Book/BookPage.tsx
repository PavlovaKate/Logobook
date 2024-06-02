import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import { useSelector } from 'react-redux';
import Error from '../ErrorPage/Error';
import NavBar from '../Navbar/NavBar';
// import type { RootState } from '../../../App/store/store';

function BookPage(): JSX.Element {
  // const places = useSelector((store: RootState) => store.places.places);
  const books = [
    {
      id: 1,
      title: 'Code. Носители',
      description:
        'ПРОДОЛЖЕНИЕ БЕСТСЕЛЛЕРА «THE ONE. ЕДИНСТВЕННЫЙ»Триллер в духе «Черного зеркала» от лауреата премии International Thriller Writers Award 2021Лучший фантастический триллер-2021 по версии Wall Street Journal«Если хочешь сохранить секрет, надо скрывать его и от себя». – Джордж Оруэлл, «1984»В XXI веке информация – бог. Но как ее защитить? Любое хранилище можно взломать, кроме...Несколько обычных людей выбраны правительством для участия в уникальной программе защиты данных. После новейших биоинженерных операций они становятся ходячими тайниками, Носителями. Отныне их мозг содержит сверхсекретные сведения, зашифрованные в генетическом коде. Взамен они получили шанс решить все свои проблемы и начать жизнь с чистого листа.Вместе Носители знают все грязные тайны, всю правду, скрывающуюся за каждой государственной ложью, за каждой теорией заговора. Но можно ли им доверять? Ведь у них тоже есть секреты, и они сделают все, чтобы их защитить...––«Роман прямо напрашивается: ""NETFLIX, экранизируй меня!""» – My Chestnut Reading Tree«С этой книгой я, словно кролик, выхваченный из тьмы фарами, зачарованно смотрел на источник света – и был безжалостно сбит тем, что оказалось за ним». – Books from Dusk till Dawn«Завораживающе и в то же время невероятно пугающе». – Totally Booked«Увлекательный и крайне правдоподобный триллер Маррса поднимает интересные вопросы о нашем будущем, где наука станет играть первую скрипку». – Booklist«Чрезвычайно мощная комбинация умного сюжета, проблем технофобии, конспирологического триллера и шокирующих личных историй». – SFX Magazine«Маррс поистине блестящ в лихих поворотах сюжета и адреналиновой гонке повествования». – Питер Джеймс«Шок на каждой следующей странице». – Wall Street Journal',
      pageCount: 388,
      imageSmall:
        'http://books.google.com/books/content?id=u0ZkEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      image:
        'http://books.google.com/books/content?id=u0ZkEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      saleability: false,
      quantity: 650,
      amount: 498.75,
      authorId: 315,
      categoryId: 1,
      publisherId: 23,
    },
    {
      id: 2,
      title: 'Вся кремлевская рать: Краткая история современной России',
      description:
        'Эта книга рассказывает об истории России на всем протяжении правления Владимира Путина, с 2000 по 2015 год. В основу книги легли документы, открытые источники и десятки уникальных личных интервью, которые автор взял у действующих лиц из ближайшего окружения Владимира Путина. Собранные воедино, факты, события, интриги и мнения героев составляют полную картину жизни Кремля, из которой впервые становится понятна логика метаморфозы Владимира Путина: как и почему из либерального прозападного президента начала 2000-х он превратился в авторитарного правителя и одного из самых ярых противников Запада.',
      pageCount: 453,
      imageSmall:
        'http://books.google.com/books/content?id=OisACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      image:
        'http://books.google.com/books/content?id=OisACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      saleability: true,
      quantity: 525,
      amount: 549,
      authorId: 435,
      categoryId: 2,
      publisherId: 14,
    },
  ];
  const navigate = useNavigate();

  const { id } = useParams();

  if (id) {
    const book = books.find((bk) => bk.id === +id);

    if (book) {
      return (
        <>
          <NavBar />
          <div className="BookPage">
            <img src={book?.image} alt={book?.title} />
            <h3>{book?.title}</h3>
            <h4>автор</h4>
            <p>рейтинг</p>
            <p>издательство</p>
            <p>Количество страниц: {book?.pageCount}</p>
            <p>{book.amount}</p>
            <button type="button">добавить в корзину</button>
            <p>Описание</p>
            <p>{book?.description}</p>
            <p>Другие книги от автора</p>
            <div>книги этого автора</div>
            <p>С этой книгой покупают</p>
            <div>книги этого жанра</div>
            <button type="button" onClick={() => navigate(-1)}>
              назад
            </button>
          </div>
        </>
      );
    }
  }

  return <Error />;
}

export default BookPage;
