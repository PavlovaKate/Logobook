'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Code. Носители',
          description:
            'ПРОДОЛЖЕНИЕ БЕСТСЕЛЛЕРА «THE ONE. ЕДИНСТВЕННЫЙ»Триллер в духе «Черного зеркала» от лауреата премии International Thriller Writers Award 2021Лучший фантастический триллер-2021 по версии Wall Street Journal«Если хочешь сохранить секрет, надо скрывать его и от себя». – Джордж Оруэлл, «1984»В XXI веке информация – бог. Но как ее защитить? Любое хранилище можно взломать, кроме...Несколько обычных людей выбраны правительством для участия в уникальной программе защиты данных. После новейших биоинженерных операций они становятся ходячими тайниками, Носителями. Отныне их мозг содержит сверхсекретные сведения, зашифрованные в генетическом коде. Взамен они получили шанс решить все свои проблемы и начать жизнь с чистого листа.Вместе Носители знают все грязные тайны, всю правду, скрывающуюся за каждой государственной ложью, за каждой теорией заговора. Но можно ли им доверять? Ведь у них тоже есть секреты, и они сделают все, чтобы их защитить...––«Роман прямо напрашивается: ""NETFLIX, экранизируй меня!""» – My Chestnut Reading Tree«С этой книгой я, словно кролик, выхваченный из тьмы фарами, зачарованно смотрел на источник света – и был безжалостно сбит тем, что оказалось за ним». – Books from Dusk till Dawn«Завораживающе и в то же время невероятно пугающе». – Totally Booked«Увлекательный и крайне правдоподобный триллер Маррса поднимает интересные вопросы о нашем будущем, где наука станет играть первую скрипку». – Booklist«Чрезвычайно мощная комбинация умного сюжета, проблем технофобии, конспирологического триллера и шокирующих личных историй». – SFX Magazine«Маррс поистине блестящ в лихих поворотах сюжета и адреналиновой гонке повествования». – Питер Джеймс«Шок на каждой следующей странице». – Wall Street Journal',
          pageCount: 388,
          imageSmall:
            'http://books.google.com/books/content?id=u0ZkEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=u0ZkEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 713,
          amount: 498.75,
          authorId: 1,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Вся кремлевская рать: Краткая история современной России',
          description:
            'Эта книга рассказывает об истории России на всем протяжении правления Владимира Путина, с 2000 по 2015 год. В основу книги легли документы, открытые источники и десятки уникальных личных интервью, которые автор взял у действующих лиц из ближайшего окружения Владимира Путина. Собранные воедино, факты, события, интриги и мнения героев составляют полную картину жизни Кремля, из которой впервые становится понятна логика метаморфозы Владимира Путина: как и почему из либерального прозападного президента начала 2000-х он превратился в авторитарного правителя и одного из самых ярых противников Запада.',
          pageCount: 453,
          imageSmall:
            'http://books.google.com/books/content?id=OisACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OisACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 773,
          amount: 549,
          authorId: 2,
          categoryId: 2,
          publisherId: 32,
        },
        {
          title: 'Японское искусство книги VII-XIX века',
          description:
            'Японскую книгу отличает неповторимое своеобразие, она являет собой сложный эстетический феномен полторы тысячи лет японская книга неизменно сохраняла свою художественную целостность и уникальность. Её отличие от европейской сразу же бросается в глаза. Японская книга, с нашей точки зрения, открывается с конца, текст читается справа налево не по горизонтали, а по вертикальным строчкам, он состоит из иероглифов, а не из букв. В японской книге создается особое, отличное от европейской, художественное пространство, своеобразна и структура книги в целом.',
          pageCount: 559,
          imageSmall:
            'http://books.google.com/books/content?id=UrP-AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UrP-AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 997,
          amount: 464,
          authorId: 3,
          categoryId: 3,
          publisherId: 20,
        },
        {
          title: 'Советы по созданию книги',
          description:
            'В этой книге вы найдёте практические советы по созданию книги. Вы узнаете каких ошибок нужно избегать с издательствами. Как не попасть в руки к мошенникам. Какие жанры книг лучше продаются и как писать детские книги. Ещё много интересного вас ждёт в этой электронной книге.',
          pageCount: 34,
          imageSmall:
            'http://books.google.com/books/content?id=XPEgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XPEgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 573,
          amount: 3857,
          authorId: 4,
          categoryId: 4,
          publisherId: 45,
        },
        {
          title: 'Новгородские Писцовые Книги',
          description:
            'Новгородские писцовые книги, изданные Археографическою комиссиею. Книги Бежецкой пятины. 1501 год, 1545 год, 1551 год, 1564 год.',
          pageCount: 402,
          imageSmall:
            'http://books.google.com/books/content?id=oqz7AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=oqz7AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 22,
          amount: 456,
          authorId: 5,
          categoryId: 5,
          publisherId: 17,
        },
        {
          title:
            'Толковая Библия или комментарий на все книги Священного Писания Ветхого и Нового Заветов. Книга Притчей Соломоновых',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 68,
          imageSmall:
            'http://books.google.com/books/content?id=x-93BAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=x-93BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 808,
          amount: 15,
          authorId: 6,
          categoryId: 118,
          publisherId: 30,
        },
        {
          title: 'Как читать книги',
          description:
            'Данная книга предназначена для тех, кто любит читать книги. Автор предлагает практические советы по улучшению качества чтения книг и процесса самообразования в целом. Книга написана с христианской позиции, поскольку автор придерживается христианской веры.',
          pageCount: 649,
          imageSmall:
            'http://books.google.com/books/content?id=EY-jDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EY-jDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 640,
          amount: 50,
          authorId: 7,
          categoryId: 6,
          publisherId: 39,
        },
        {
          title: 'Метод комфортного написания книги',
          description:
            'В этом пособии собран мой более чем пятнадцатилетний опыт в организации процесса работы над книгами. Если ты задумываешься, как написать свою книгу, не можешь завершить начатое или мучаешься выгораниями в процессе, то она поможет. Это пошаговое руководство мы используем на наших трехмесячных книжных марафонах в объединении авторов ЗапалЪ. Просто бери, действуй, и у тебя всё получится!',
          pageCount: 82,
          imageSmall:
            'http://books.google.com/books/content?id=dOzREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dOzREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 140,
          amount: 612.5,
          authorId: 8,
          categoryId: 7,
          publisherId: 24,
        },
        {
          title: 'История книги от ее появления до наших дней. История книги на Руси (сборник)',
          description:
            'Эта книга – о книге. Человечество всегда хотело поделиться с потомками своими мыслями, оставить след в истории. Французский писатель Эггер рассказывает о возникновении письменности и развитии способов фиксирования информации. Текст восстановлен по изданию Ф. Павленкова 1890 г.«История книги на Руси» – один из первых трудов общей истории книжного дела в России. Автор рассказывает о технике производства книги, о роли книг в различные периоды истории Отечества, акцентирует внимание на развитии книжного дела в нашей стране. Труд содержит множество данных о рукописных книгах, первых русских печатных изданиях, количестве библиотек и типографий и т. д. Текст восстановлен по изданию М. Хана 1882 г.Тексты приведены в соответствие с нормами современного русского языка, проведены корректорская, редакторская правки с максимальным сохранением авторского стиля.',
          pageCount: 605,
          imageSmall:
            'http://books.google.com/books/content?id=ecZhAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ecZhAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 529,
          amount: 1235,
          authorId: 9,
          categoryId: 1,
          publisherId: 14,
        },
        {
          title: '«Потаенные книги»: иудейская мистика в славянских апокрифах',
          description:
            'Сборник статей посвящен изучению ранних иудейских апокалиптических произведений, бытовавших в славянской традиции. Эти «потаенные книги», такие, как «Книга Еноха Праведного», «Откровение Авраама» и «Лествица Иакова», сохранившиеся только в славянских переводах, повествуют о событиях, предшествующих творению видимого мира и того, что произойдет с человечеством в конце времен, после Страшного суда. Именно они связывают апокалиптику Второго Храма и более поздние иудейские мистические течения – Небесных Чертогов (Хейхалот) и Божественной Колесницы (Меркава). Анализируя эти тексты, автор открывает их значение в формировании символики ранней иудейской мистики. В этих книгах рассказывается о вознесении праведника на небеса и его преображения в бессмертное небесное существо с помощью так называемой «росы воскрешения» – масла Божией благодати, истекающей с Древа Жизни. Апокрифические истории небесного вознесения и преображения таких библейских патриархов, как Енох, Иаков и Авраам играли важнейшую роль в переходе от апокалиптической символики к уникальной теофанической образности более поздней иудейской мистики.',
          pageCount: 317,
          imageSmall:
            'http://books.google.com/books/content?id=B5xSAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=B5xSAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 118,
          amount: 437.5,
          authorId: 11,
          categoryId: 8,
          publisherId: 42,
        },
        {
          title: 'Тайны Вечной Книги. Том 8',
          description:
            'Лайтман Михаэль Л18 Тайны Вечной Книги. Том 8 / Михаэль Лайтман – М.: НФ «Институт перспективных исследований», 2018. – 272 с.',
          pageCount: 272,
          imageSmall:
            'http://books.google.com/books/content?id=vauMDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vauMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 881,
          amount: 300,
          authorId: 12,
          categoryId: 9,
          publisherId: 10,
        },
        {
          title: '4 способа продавать свои книги в России',
          description:
            'Вы хотите научиться зарабатывать на продаже информации? Тогда узнайте, какие есть способы для этого! Добавьте к вашим источникам дохода еще один. Плюсом является тот момент, что вам нужно будет всего лишь создавать свои электронные книги и выставлять их на продажу.',
          pageCount: 6,
          imageSmall:
            'http://books.google.com/books/content?id=vE8VEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vE8VEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 187,
          amount: 87.37,
          authorId: 13,
          categoryId: 10,
          publisherId: 14,
        },
        {
          title: 'Все книги о монахе, который продал свой «феррари»',
          description:
            'Это издание – великолепный подарок для всех, кто мечтает найти истинную мудрость и неисчерпаемый источник вдохновения, успеха, процветания, духовного роста. Эти истории, увлекательные и необычные путешествия по глубинам собственного «я» к подлинной эффективности и счастью, – настоящая сокровищница мудрости, из которой может черпать любой желающий.',
          pageCount: 1832,
          imageSmall:
            'http://books.google.com/books/content?id=RSA_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RSA_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 338,
          amount: 811.25,
          authorId: 14,
          categoryId: 11,
          publisherId: 11,
        },
        {
          title:
            'Библия. Книги Священного Писания Ветхого и Нового Завета с иллюстрациями художников эпохи Возрождения',
          description:
            'С древнейших времен, как только начало распространяться христианство, появились и первые попытки представить в художественных образах важнейшие моменты из священной истории. Многие талантливейшие художники посвятили Великой Книге все свои силы и способности. Иллюстрациями к этому изданию Библии выступили картины художников эпохи Возрождения. Текст печатается с издания, выпущенного по благословению Святейшего Патриарха Московского и всея Руси Алексия II.С благодарностью Господу за возможность выпуска этой книги мы вручаем ее ищущим Бога и твердо верим, что она еще многим укажет путь истины и света.',
          pageCount: 945,
          imageSmall:
            'http://books.google.com/books/content?id=UtRvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UtRvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 967,
          amount: 25,
          authorId: 15,
          categoryId: 8,
          publisherId: 37,
        },
        {
          title: 'Библия: Книги Священного писания Ветхого и Нового завета канонические',
          description: 'В русском переводе с параллельными местами.',
          pageCount: 896,
          imageSmall:
            'http://books.google.com/books/content?id=mRm4CAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mRm4CAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 682,
          amount: 90,
          authorId: 288,
          categoryId: 81,
          publisherId: 29,
        },
        {
          title: 'Книги розрядныя, по оффициальным оных спискам',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 724,
          imageSmall:
            'http://books.google.com/books/content?id=plmvUYOWuQoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=plmvUYOWuQoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 910,
          amount: 1383,
          authorId: 321,
          categoryId: 118,
          publisherId: 6,
        },
        {
          title: 'Люди, годы, жизнь. Под колесами времени. Книги первая, вторая, третья',
          description:
            'Знаменитые воспоминания Ильи Эрснбурга «Люди, годы, жизнь» но праву считаются наиболее интересным и полным повествованием среди всего написанного русскими писателями XX века. Недаром несколько лет назад Министерство образования и науки РФ включило его мемуары в список «ста книг», рекомендованных к чтению.В настоящем томе Эренбург рассказывает о своей жизни, о городах и странах, где жил, о своих друзьях – великих поэтах, художниках, политиках, о трагических событиях Первой мировой и Гражданской войн, свидетелем и участником которых он стал. Среди героев автора П. Пикассо, А. Модильяни, Д. Ривера, Г. Аполлинер, М. Волошин, М. Цветаева, Б. Пастернак, В. Маяковский, С. Есенин, И. Бабель, В. Ленин, Л. Троцкий и многие другие.',
          pageCount: 1169,
          imageSmall:
            'http://books.google.com/books/content?id=pK9CDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=pK9CDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 870,
          amount: 498.75,
          authorId: 16,
          categoryId: 12,
          publisherId: 28,
        },
        {
          title: 'Саммари книги «Искусство быть счастливым»',
          description:
            'Как стать счастливым в мире, полном страдания, напряженности и насилия? Духовный лидер Тибета Далай-лама XIV и американский психотерапевт Говард Катлер записали многочасовые беседы о человечности, смысле жизни и благополучии. Краткое содержание удивительного диалога и основные способы обрести счастье и преодолеть тревожность с позиции буддизма и современной психологии – в саммари мирового бестселлера.Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 27,
          imageSmall:
            'http://books.google.com/books/content?id=8GTEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8GTEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 269,
          amount: 111.25,
          authorId: 5,
          categoryId: 13,
          publisherId: 29,
        },
        {
          title: 'Саммари книги «Не рычите на собаку! Книга о дрессировке людей, животных и самого себя»',
          description:
            'Проверенный временем бестселлер в формате CrossReads!Вместо криков, угроз и наказания – правильное поощрение и дружеское сотрудничество. Таким образом добиться результата можно и от мужа, разбрасывающего носки, и от собаки, рвущейся с поводка, и от вечно игнорирующих дедлайн сотрудников.Прайор Карен – американский биолог, специалист по поведенческой психологии, рассказывает об универсальном методе мягкой дрессировки, который поможет корректировать поведение бесконфликтно и позитивно. Читайте в саммари «Не рычите на собаку» о сути метода и главных принципах его применения.Знакомьтесь с ключевыми идеями бестселлеров, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 24,
          imageSmall:
            'http://books.google.com/books/content?id=bONSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bONSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 725,
          amount: 161.25,
          authorId: 17,
          categoryId: 13,
          publisherId: 23,
        },
        {
          title: 'Саммари книги «The Woj Way. Как воспитать успешного человека»',
          description:
            'Уникальная педагогическая система теперь в формате саммари!Успешные люди не пасуют перед трудностями, не боятся ошибок и идут к своей цели. Как вырастить эти качества в ребенке? Эстер Войджицки, американский педагог, консультант Google и королева-мать Кремниевой долины, воспитавшая трех суперуспешных дочерей, предлагает эффективную систему воспитания 5C. Узнайте ее основные принципы из саммари «The Woj Way».Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 20,
          imageSmall:
            'http://books.google.com/books/content?id=xZN1EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xZN1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 522,
          amount: 4460,
          authorId: 5,
          categoryId: 14,
          publisherId: 33,
        },
        {
          title: 'Саммари книги «Искусственный интеллект и будущее человечества»',
          description:
            'Искусственный интеллект – главный тренд в публикациях в последнее время. Выводы неутешительны: грядут колоссальные изменения во всех сферах жизни человека. Узнайте о реальных способностях разумных машин и о том, стоит ли их бояться. Отобрали основные идеи из серьезных экспертных статей, которые ранее публиковались в журнале New Scientist.Саммари книги «Искусственный интеллект и будущее человечества» подготовлено совместно с проектом MakeRight. Читайте ключевые идеи бестселлеров и выбирайте лучшее в мире книг!',
          pageCount: 33,
          imageSmall:
            'http://books.google.com/books/content?id=9tG_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9tG_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 535,
          amount: 123.75,
          authorId: 5,
          categoryId: 2,
          publisherId: 38,
        },
        {
          title: 'Саммари книги «Дарвин в городе: как эволюция продолжается в городских джунглях»',
          description:
            'Нидерландский биолог и постоянный автор The Science Менно Схилтхёйзен рассказывает, как город заставляет приспосабливаться и эволюционировать привычных голубей, комаров и рыбок в прудах. Узнайте из краткого содержания познавательной книги, что роднит мегаполисы с муравейниками и какие хищники предпочитают селиться в городах.Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 27,
          imageSmall:
            'http://books.google.com/books/content?id=zET2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zET2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 222,
          amount: 123.75,
          authorId: 5,
          categoryId: 11,
          publisherId: 23,
        },
        {
          title: 'Саммари книги «Палач любви и другие психотерапевтические истории»',
          description:
            'Самый провокационный психотерапевт современности Ирвин Ялом рассказывает истории своих пациентов. Обычных людей, столкнувшихся с отвергнутой любовью, ожирением, зацикленностью на сексе и с другими проблемами, ждет невероятный путь работы над собой, больше похожий на приключенческий триллер, чем на сеансы психотерапии. Выбрали главное из мегабестселлера, чтобы вы получили полное представление о книге и удивительной методике Ялома.Саммари книги «Палач любви» подготовлено совместно с проектом MakeRight. Читайте ключевые идеи бестселлеров и выбирайте лучшее в мире книг!',
          pageCount: 31,
          imageSmall:
            'http://books.google.com/books/content?id=-0P1EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-0P1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 752,
          amount: 123.75,
          authorId: 5,
          categoryId: 13,
          publisherId: 7,
        },
        {
          title:
            'Саммари книги Марины Мелия «Отстаньте от ребёнка! Простые правила мудрых родителей. Второе издание, дополненное»',
          description:
            'Бестселлер о воспитании – в формате CrossReads!Хочешь изменить мир – начни с себя. Этого же принципа психолог Марина Мелия рекомендует придерживаться в воспитании детей: вместо того, чтобы пытаться контролировать и корректировать поведение другого человека, сконцентрируйтесь на собственном.У родителей не всегда есть время, чтобы прочитать интересующие книги полностью. Новый формат позволит познакомиться с популярными изданиями и получить максимум разнообразной информации. Из саммари вы узнаете, как договариваться с ребенком, донести до него свою любовь, научиться правильно давать свободу и устанавливать границы.Знакомьтесь с ключевыми идеями бестселлеров, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 29,
          imageSmall:
            'http://books.google.com/books/content?id=SiltEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SiltEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 870,
          amount: 136.25,
          authorId: 5,
          categoryId: 14,
          publisherId: 43,
        },
        {
          title:
            'Саммари книги «Невидимая горилла. Эксперимент, который раскрыл, почему внимание мешает сосредоточиться, память подводит, а интуиция обманывает»',
          description:
            'Ученые-когнитивисты Крис Шабри и Дэн Саймонс легко и с юмором рассказывают о том, насколько иллюзорно наше восприятие и почему не стоит доверять интуиции. Каждый факт авторы подкрепляют забавными и иногда шокирующими психологическими экспериментами. Читайте главное из книги о ловушках сознания, которая заставляет по-новому взглянуть на привычное поведение.Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 22,
          imageSmall:
            'http://books.google.com/books/content?id=IC_0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IC_0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 764,
          amount: 123.75,
          authorId: 5,
          categoryId: 15,
          publisherId: 22,
        },
        {
          title: 'Библия. Избранные книги Ветхого Завета',
          description:
            'Издательство «Белый город» представляет своим читателям книгу «Книги Ветхого Завета». В иллюстративном оформлении этого издания использованы фрагменты фресок Микеланджело и Рафаэля.',
          pageCount: 561,
          imageSmall:
            'http://books.google.com/books/content?id=k-tZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=k-tZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 499,
          amount: 373.75,
          authorId: 18,
          categoryId: 8,
          publisherId: 9,
        },
        {
          title: 'Саммари книги «Счастливая жена. Как вернуть в брак близость, страсть и гармонию»',
          description:
            'Секреты крепкого брака – в саммари!Даже если вам кажется, что страсть в отношениях давно угасла и восстановить близость невозможно – не отчаивайтесь! Воспользуйтесь практическими советами Лоры Дойл, специально собранными в нашем саммари. Узнайте, почему контроль – ваш злейший враг, как научиться принимать помощь и проявлять уважение к себе и партнеру.Знакомьтесь с ключевыми идеями бестселлеров, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 20,
          imageSmall:
            'http://books.google.com/books/content?id=nK6bEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nK6bEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 937,
          amount: 161.25,
          authorId: 5,
          categoryId: 16,
          publisherId: 38,
        },
        {
          title:
            'Саммари книги «НИ СЫ. Будь уверен в своих силах и не позволяй сомнениям мешать тебе двигаться вперед»',
          description:
            'Бестселлер Джен Синсеро – в удобном формате CrossReads!Как перезагрузить свою жизнь и сделать ее такой, какой мечтали? Миллионам читателей по всему миру это уже удалось, ведь советы Джен Синсеро универсальны и эффективны. Читайте главные мысли издания в нашем обзоре и узнайте, подходят ли авторские методы вам.Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.В дополнение к тексту вы найдете инфографику, которая поможет лучше усвоить информацию. Скачать ее можно в виде ПДФ-файла на странице саммари на сайте после покупки.',
          pageCount: 26,
          imageSmall:
            'http://books.google.com/books/content?id=SHE_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SHE_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 230,
          amount: 148.75,
          authorId: 5,
          categoryId: 16,
          publisherId: 36,
        },
        {
          title: 'Саммари книги «Магическая уборка. Японское искусство наведения порядка дома и в жизни»',
          description:
            'Бестселлер «Магическая уборка» теперь в формате CrossReads!Генеральная уборка поможет похудеть и найти вторую половинку. Звучит фантастически, но это работает. Как? Ответом делится мировой гуру наведения порядка Мари Кондо.Откройте для себя простые схемы складывания вещей, а вместе с ними и новые принципы отношения к дому, окружению и жизни вместе с нашим саммари. И тогда заросший хламом балкон превратится в балкон Джульетты.В дополнение к тексту вы найдете инфографику, которая поможет лучше усвоить информацию. Скачать ее можно в виде ПДФ-файла на странице саммари на сайте после покупки.Знакомьтесь с ключевыми идеями популярных книг, экономьте время и выбирайте только лучшее с CrossReads.',
          pageCount: 22,
          imageSmall:
            'http://books.google.com/books/content?id=S7RJEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=S7RJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 423,
          amount: 111.25,
          authorId: 5,
          categoryId: 17,
          publisherId: 46,
        },
        {
          title: 'Повесть о жизни. Книги I–III',
          description:
            'Константин Паустовский — выдающийся русский писатель, чьи романы, повести, рассказы и очерки по праву считаются классикой отечественной литературы ХХ века и неоднократно переводились на многие языки мира, автор замечательной лирико-автобиографической прозы, исполненной любви к русской природе и русской культуре. Для советских читателей Паустовский — это олицетворение человеческого и писательского благородства, совесть эпохи. Он неоднократно номинировался на Нобелевскую премию в области литературы, и только по политическим причинам не получил эту почетную награду. Над «Повестью о жизни», одним из главных своих произведений, Паустовский работал 18 лет. По словам Константина Кедрова, «в первых главах „Повести о жизни“ Бунин угадал возрождение русской литературы». Перед нами проходит жизнь писателя — с детских лет и до того времени, когда он осознает свой литературный успех. Автобиографизм, интимно-личное соединяются здесь с историческим и общезначимым, размышления о прошлом — с днем сегодняшним. В настоящем издании публикуются первые три из шести книг «Повести о жизни».',
          pageCount: 548,
          imageSmall:
            'http://books.google.com/books/content?id=vxqpEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vxqpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 315,
          amount: 165,
          authorId: 19,
          categoryId: 12,
          publisherId: 7,
        },
        {
          title: 'Описаніе записных книг и бумаг старинных дворцовых приказов, 1584-1725',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 398,
          imageSmall:
            'http://books.google.com/books/content?id=41RBAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=41RBAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 598,
          amount: 4703,
          authorId: 20,
          categoryId: 18,
          publisherId: 34,
        },
        {
          title: 'Описание книг и актов литовской метрики',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 296,
          imageSmall:
            'http://books.google.com/books/content?id=vHxwBYkTAAUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vHxwBYkTAAUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 846,
          amount: 4349,
          authorId: 21,
          categoryId: 19,
          publisherId: 44,
        },
        {
          title: 'Книжный вор / The Book Thief',
          description:
            'Читателям предлагаются неадаптированный оригинальный текст и классический перевод знаменитого романа Маркуса Зусака «Книжный вор».Это история о жизни и смерти. О силе слова и цене молчания. О событиях исторического масштаба – и о том, как один человек меняет мир. Роман завораживает и ярким сюжетом, и манерой повествования, и неожиданным выбором рассказчика. Пронзительные трагические ноты переплетаются в нем с пьянящим ощущением полноты жизни, какое бывает только в детстве.1939 год. Маленькая Лизель приезжает в городок близ Мюнхена к приемным родителям. Ей предстоит найти не только новую семью, но и настоящую дружбу, множество приключений и всепоглощающую страсть – книги, которые она будет красть... читать... и даже писать.Чтение романа в оригинале позволит значительно усовершенствовать знание английского, а перевод на русский язык поможет разрешить возникающие по ходу чтения вопросы и трудности. Для углубления знаний английского и облегчения понимания текста в конце книги предлагаются упражнения.Книга будет интересна и полезна всем, кто знает и изучает английский язык с преподавателем или самостоятельно.',
          pageCount: 801,
          imageSmall:
            'http://books.google.com/books/content?id=3G5JDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3G5JDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 315,
          amount: 2697,
          authorId: 22,
          categoryId: 20,
          publisherId: 9,
        },
        {
          title: 'Как читать книги',
          description:
            'Чтобы настроиться на «волну» автора и понимать больше, требуется умение читать активно. Именно для этого написал свою книгу Мортимер Адлер, американский философ, редактор и преподаватель, всю свою жизнь посвятивший тому, чтобы научить людей любить и понимать книги.',
          pageCount: 340,
          imageSmall:
            'http://books.google.com/books/content?id=jpnGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=jpnGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 833,
          amount: 399,
          authorId: 25,
          categoryId: 43,
          publisherId: 27,
        },
        {
          title: 'Замѣчания на книгу поморских отвѣтов',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 568,
          imageSmall:
            'http://books.google.com/books/content?id=N8Yg02erKLkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=N8Yg02erKLkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 33,
          amount: 4808,
          authorId: 23,
          categoryId: 71,
          publisherId: 8,
        },
        {
          title: 'Ковен тысячи костей',
          description:
            '«Все кончено», – думала Одри. Казалось, она победила всех врагов и наконец-то стала истинной Верховной ведьмой. Больше она ничего не боится, ведь рядом с ней Ковен – ее семья.Теперь Одри придется узнать, каково это – нести бремя правления и защищать свою территорию. Ведь в Вермонте продолжают пропадать дети. И никто, кроме нее и Коула Гастингса, не в силах остановить таинственного убийцу.Новый Орлеан, ковен Санта Муэрте, мир мертвых – где еще им придется побывать ради этого?А между тем в Ордене охотников, что поколениями истребляет ведьм, ходит легенда, будто убьешь Эхоидун – уничтожишь магию.Завершающая долгожданная часть трилогии «Ковен озера Шамплейн». Ведьмовская атмосфера, приключения любимых героев, детективная линия – все это «Ковен тысячи костей».Трилогия оценена книжным сообществом:«Заключительная часть истории Одри Дефо и Коула Гастингса пощекочет вам нервишки! Путешествие в мир мёртвых, охотники на ведьм, мексиканский ковен, страшные и кровавые преступления... Вас ждёт встреча с истинным злом. Все ли выберутся из паутины смертоносного Паука?» – Саша @Alex_booklover',
          pageCount: 600,
          imageSmall:
            'http://books.google.com/books/content?id=i65jEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=i65jEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 918,
          amount: 336.25,
          authorId: 26,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title: 'Замѣчания на книгу извѣстную под именем "Вопросов Никодина."',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 198,
          imageSmall:
            'http://books.google.com/books/content?id=zL3ZugiFKcwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zL3ZugiFKcwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 671,
          amount: 2494,
          authorId: 23,
          categoryId: 132,
          publisherId: 16,
        },
        {
          title: 'Основы технологий баз данных',
          description:
            'Представлены основы теории баз данных, методы и алгоритмы, применяемые при реализации систем управления базами данных, а также особенности этих методов и алгоритмов, реализованные в СУБД PostgreSQL.Материал книги составляет основу для базового учебного курса и содержит краткий обзор требований и критериев оценки СУБД и баз данных, теоретическую реляционную модель данных, основные конструкции языка запросов SQL, организацию доступа к базе данных PostgreSQL, вопросы проектирования приложений и основные расширения, доступные в системе PostgreSQL.',
          pageCount: 238,
          imageSmall:
            'http://books.google.com/books/content?id=3YKzDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3YKzDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 162,
          amount: 1017,
          authorId: 57,
          categoryId: 24,
          publisherId: 2,
        },
        {
          title: 'Дэнс, Дэнс, Дэнс',
          description:
            '...И тут я наконец осознал: вокруг меня – кромешная тьма. Ни лучика света. Двери лифта все так же беззвучно затворились у меня за спиной, и эта тьма стала черной, как битумный лак. Я не различал даже собственных рук. Музыка тоже исчезла. В зябком воздухе едко пахло какой-то хиной.И в этой кромешной тьме я стоял, не дыша, совершенно один.«Дэнс, дэнс, дэнс» (1988) – заключительный роман культовой «Трилогии Крысы» классика современной японской литературы Харуки Мураками, начатой романами «Слушай песню ветра». «Пинбол 1973» и «Охота на овец».',
          pageCount: 580,
          imageSmall:
            'http://books.google.com/books/content?id=mDTn6yHfzx4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mDTn6yHfzx4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 721,
          amount: 423.75,
          authorId: 24,
          categoryId: 1,
          publisherId: 3,
        },
        {
          title: 'Li︠e︡topisʹ zani︠a︡tīĭ Arkheograficheskoĭ komissīi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1468,
          imageSmall:
            'http://books.google.com/books/content?id=ss9LAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ss9LAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 845,
          amount: 1630,
          authorId: 27,
          categoryId: 21,
          publisherId: 33,
        },
        {
          title: 'Дэнс, Дэнс, Дэнс',
          description:
            '...И тут я наконец осознал: вокруг меня – кромешная тьма. Ни лучика света. Двери лифта все так же беззвучно затворились у меня за спиной, и эта тьма стала черной, как битумный лак. Я не различал даже собственных рук. Музыка тоже исчезла. В зябком воздухе едко пахло какой-то хиной.И в этой кромешной тьме я стоял, не дыша, совершенно один.«Дэнс, дэнс, дэнс» (1988) – заключительный роман культовой «Трилогии Крысы» классика современной японской литературы Харуки Мураками, начатой романами «Слушай песню ветра». «Пинбол 1973» и «Охота на овец».',
          pageCount: 580,
          imageSmall:
            'http://books.google.com/books/content?id=mDTn6yHfzx4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mDTn6yHfzx4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 987,
          amount: 423.75,
          authorId: 24,
          categoryId: 1,
          publisherId: 40,
        },
        {
          title: 'Путешествие во времени с хомяком',
          description:
            'На двенадцатый день рождения Ал получает от покойного отца письмо: мальчик должен отправиться в прошлое и предотвратить его гибель. На необычной машине времени Ал вместе со своим хомяком путешествует в 1984 год. Сумеет ли он спасти отца, не вызвав при этом временной парадокс, который повернёт реальность в совершенно новое, неожиданное русло? Захватывающая и трогательная история от восходящей звезды детской фантастики, популярного британского автора Росса Уэлфорда.Для среднего школьного возраста',
          pageCount: 327,
          imageSmall:
            'http://books.google.com/books/content?id=QLMTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QLMTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 18,
          amount: 523.75,
          authorId: 66,
          categoryId: 28,
          publisherId: 6,
        },
        {
          title: 'Эмоциональный веб-дизайн',
          description:
            'Реальность, с которой все мы сталкиваемся, – это созданные словно по шаблону сайты компаний, интернет-магазины, информационные порталы... Однообразие не лучший инструмент для привлечения клиентов. Эмоции продают!Чтобы сайт притягивал клиентов, оказывается, достаточно сделать так, чтобы его вид вызывал положительные эмоции. Удовольствие, удивление в сочетании с неповторимым стилем – вот основы эмоционального дизайна.Освоить его азы и предлагает эта книга. На ее страницах вы найдете подробное описание новых механизмов взаимодействия с вашей аудиторией, а также практические рекомендации, как завоевать сердца клиентов.',
          pageCount: 165,
          imageSmall:
            'http://books.google.com/books/content?id=aXC4AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=aXC4AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 848,
          amount: 3693,
          authorId: 77,
          categoryId: 10,
          publisherId: 19,
        },
        {
          title: 'Čtenija v Imperatorskom Obščestvě Istorii i Drevnostej Rossijskich pri Moskovskom Universitetě',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 736,
          imageSmall:
            'http://books.google.com/books/content?id=sE9mAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sE9mAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 168,
          amount: 4662,
          authorId: 117,
          categoryId: 128,
          publisherId: 13,
        },
        {
          title: 'Отзывчивый веб-дизайн',
          description:
            'Интернет вышел за границы мира стационарных компьютеров, и сегодня можно с уверенностью сказать, что в течение нескольких лет лидирующей формой доступа в Сеть станут устройства с маленькими экранами.Перед вами первое и единственное практическое руководство, которое в пошаговой форме дает ответ на вопрос, как сделать сайт максимально удобным для всех его посетителей, независимо от того, на каком устройстве они будут его просматривать. Оно содержит рекомендации, как избежать наиболее распространенных ошибок и решить большинство проблем, с которыми сталкиваются современные интернет-пользователи. Кроме того, в нем вы найдете программные коды, которые позволят применить на практике все предложенные разработки.',
          pageCount: 187,
          imageSmall:
            'http://books.google.com/books/content?id=HWy4AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HWy4AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 97,
          amount: 1159,
          authorId: 78,
          categoryId: 10,
          publisherId: 22,
        },
        {
          title: 'Женщины и Ислам',
          description:
            'Эта книга о современных мусульманках, а также о тех женщинах, которые тем или иным образом соприкоснулись с мусульманской культурой',
          pageCount: 320,
          imageSmall:
            'http://books.google.com/books/content?id=T0W26iay_lgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=T0W26iay_lgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 133,
          amount: 3258,
          authorId: 63,
          categoryId: 8,
          publisherId: 13,
        },
        {
          title: 'Трое на четырех колесах. Книга для чтения на английском языке',
          description:
            'Джером Клапка Джером (1859–1927) – английский писатель, автор повестей, рассказов и одной пьесы. Герои этой книги, колесящие по горам Шварцвальда, без сомнения, хорошо знакомы всем: это над их необычными приключениями во время путешествия по Темзе добродушно смеялись целые поколения читателей. Неповторимый, ироничный юмор Джерома, а также подготовленные для удобства читателей словарик, комментарии, примечания и перевод особенно сложных для понимания фразеологизмов превратят чтение неадаптированного текста в удовольствие.',
          pageCount: 530,
          imageSmall:
            'http://books.google.com/books/content?id=FYGZCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FYGZCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 31,
          amount: 183.75,
          authorId: 53,
          categoryId: 20,
          publisherId: 26,
        },
        {
          title: 'Сказки. Книга для чтения на английском языке',
          description:
            'В книге представлены сказки известнейшего писателя О. Уайльда.Каждая сказка снабжена упражнениями на закрепление прочитанного материала, перевод и совершенствование произношения.Книга предназначена для старших классов школ с углубленным изучением английского языка, студентов и всех изучающих английский язык.',
          pageCount: 115,
          imageSmall:
            'http://books.google.com/books/content?id=J3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=J3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 405,
          amount: 342.5,
          authorId: 34,
          categoryId: 20,
          publisherId: 12,
        },
        {
          title: 'Рассказы об отце Брауне / Stories of Father Brown. Книга для чтения на английском языке',
          description:
            'Мир рассказов Гилберта Кита Честертона об отце Брауне – это воплощение Англии начала XX века. Места преступлений поджидают главного героя в загородных домах, сельских приходских церквях и садах, а также на туманных лондонских улицах и мрачных вокзалах. Отец Браун – добродушный священник, но он обладает удивительной проницательностью в отношении человеческой натуры, а за его спокойным сочувствием скрывается детективный ум, не уступающий Шерлоку Холмсу.Отец Браун использует свой опыт, чтобы вжиться в образ злоумышленника, разгадать каждую загадку и поймать преступника.Рассказы об отце Брауне, написанные в начале 1900-х годов британским критиком, новеллистом и философом Гилбертом Китом Честертоном, до сих пор остаются одними из лучших в жанре детектива.',
          pageCount: 321,
          imageSmall:
            'http://books.google.com/books/content?id=_rITCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_rITCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 529,
          amount: 457.5,
          authorId: 28,
          categoryId: 20,
          publisherId: 44,
        },
        {
          title: 'Игрок. Книга для чтения на английском языке',
          description:
            'Читателям предлагается переводное издание одного из самых противоречивых, наделенных удивительным психологизмом романов известнейшего русского писателя Ф. М. Достоевского. Центральными темами произведения стали «поэзия» азартной игры и актуальная для писателя проблема взаимоотношений между Россией и Европой. В основе сюжета лежат сложные романтические отношения между генеральской падчерицей и молодым учителем, желающим заслужить уважение возлюбленной с помощью денег, которые возможно достать единственным способом – выиграть в рулетку. Английский перевод с русского языка К. Д. Хогарта адаптирован, дополнен и снабжен постраничными комментариями. Книга адресована студентам языковых вузов, носителям языка и всем любителям русской классической литературы.',
          pageCount: 688,
          imageSmall:
            'http://books.google.com/books/content?id=NRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 373,
          amount: 327.5,
          authorId: 29,
          categoryId: 1,
          publisherId: 46,
        },
        {
          title:
            'Санкт-Петербург. Тексты, диалоги, упражнения. Книга III / Saint Petersburg. Texts & exercises. Book III',
          description:
            'Предлагаемая книга является практическим пособием для изучения достопримечательностей Санкт-Петербурга на английском языке.Каждый раздел книги состоит из статьи об одном из храмов города, словаря, диалога и разнообразных упражнений, предназначенных для лучшего усвоения предложенного материала.Книга рассчитана на учащихся средних и старших классов общеобразовательных и специализированных школ. Может быть использована как факультативный курс по теме «Санкт-Петербург».Данная книга – третья в серии книг под общим названием «Санкт-Петербург. Тексты, диалоги, упражнения».',
          pageCount: 497,
          imageSmall:
            'http://books.google.com/books/content?id=BxptDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BxptDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 765,
          amount: 416.25,
          authorId: 30,
          categoryId: 20,
          publisherId: 47,
        },
        {
          title: 'Остров сокровищ. Книга для чтения на английском языке',
          description:
            'Предлагаем вниманию читателей роман знаменитого английского писателя-романтика Р. Л. Стивенсона «Остров сокровищ».Неадаптированный текст романа снабжен комментариями и словарем. Книга предназначена для учащихся старших классов школ с углубленным изучением английского языка, студентов языковых вузов и всех любителей английской приключенческой литературы.',
          pageCount: 289,
          imageSmall:
            'http://books.google.com/books/content?id=08jRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=08jRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 909,
          amount: 151.8,
          authorId: 31,
          categoryId: 20,
          publisherId: 21,
        },
        {
          title: 'Любимые герои. Книга для чтения на английском языке',
          description:
            'В пособие вошли отрывки из классических англоязычных произведений: «Оливер Твист» Чарльза Диккенса, «Джейн Эйр» Шарлотты Бронте, «Остров сокровищ» Роберта Льюиса Стивенсона, «Загадка Торского моста» Артура Конан Дойля, «Всадник без головы» Томаса Майн Рида, «Янки из Коннектикута при дворе короля Артура» Марка Твена. Сборник также содержит фрагменты британского эпоса о короле Артуре и рыцарях Круглого стола и отрывки из английских народных баллад о Робин Гуде. Тексты адаптированы для учащихся средней школы и снабжены вопросами для проверки понимания содержания.',
          pageCount: 584,
          imageSmall:
            'http://books.google.com/books/content?id=H3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=H3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 572,
          amount: 237.5,
          authorId: 384,
          categoryId: 20,
          publisherId: 2,
        },
        {
          title: 'Заживо погребенный. Книга для чтения на английском языке',
          description:
            'Эдгар Аллан По (1809–1849) – классик американской литературы, поэт, прозаик, критик.В данный сборник вошли его лучшие рассказы – трагические, фантастические, юмористические и, конечно, «Золотой жук» и «Убийство на улице Морг» – первые шедевры детективной литературы.Оригинальный текст снабжен постраничными комментариями и словарем.',
          pageCount: 1009,
          imageSmall:
            'http://books.google.com/books/content?id=OpvTCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OpvTCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 127,
          amount: 372.5,
          authorId: 32,
          categoryId: 20,
          publisherId: 40,
        },
        {
          title: 'Питер Пэн. Книга для чтения на английском языке',
          description:
            'Книга содержит оригинальный текст известной детской повести о чудесном мальчике Питере Пэне шотландского писателя Джеймса Барри.Для облегчения понимания текста даны комментарии с объяснением сложных языковых конструкций и вопросы к тексту. В конце книги приведен словарь, состоящий из слов, встречающихся в рассказах.Предлагаемое учебное пособие предназначено для школьников средних и старших классов специализированной и общеобразовательной школы, студентов вузов, а также для всех интересующихся английской классической литературой. Может быть использовано в качестве пособия для домашнего и классного чтения.',
          pageCount: 1072,
          imageSmall:
            'http://books.google.com/books/content?id=C74UEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=C74UEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 545,
          amount: 322.5,
          authorId: 33,
          categoryId: 20,
          publisherId: 43,
        },
        {
          title: 'Идеальный муж. Книга для чтения на английском языке',
          description:
            'Оскар Уайльд (1854–1900) – английский писатель, досконально изучивший все подводные камни семейной жизни.В самой известной своей пьесе он предоставляет читателю право самому ответить на живо трепещущие вопросы: следует ли безоговорочно доверять своей второй половине? Надо ли идеализировать спутника жизни или лучше принимать его со всеми недостатками? Прощать за ошибки, совершенные в прошлом, или безжалостно осуждать, сокрушая то, что строилось годами?Красивый язык, парадоксальные, но и логичные высказывания, мягкий юмор, запутанность положений заставят читателя вновь и вновь обращаться к этой книге, а комментарии и словарик помогут ему в полной мере оценить прелесть и афористичность языка.В книге приводится неадаптированный текст на языке оригинала с комментариями и словарем.',
          pageCount: 145,
          imageSmall:
            'http://books.google.com/books/content?id=scnRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=scnRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 577,
          amount: 280,
          authorId: 34,
          categoryId: 20,
          publisherId: 8,
        },
        {
          title: 'Знак четырех. Книга для чтения на английском языке',
          description:
            '«Знак четырех» – один из четырех романов Артура Конан Дойла о знаменитом сыщике Шерлоке Холмсе и его друге и соратнике докторе Ватсоне.В книге приводится полный неадаптированный текст романа, снабженный комментариями и словарем. Для учащихся старших классов языковых школ, студентов младших классов языковых вузов и всех любителей детективного жанра.',
          pageCount: 225,
          imageSmall:
            'http://books.google.com/books/content?id=4s3RCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4s3RCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 28,
          amount: 337.5,
          authorId: 35,
          categoryId: 20,
          publisherId: 11,
        },
        {
          title: 'Джен Эйр. Книга для чтения на английском языке',
          description:
            'История страданий и обретения счастья бедной сиротки Джен Эйр, описанная замечательной английской писательницей Шарлоттой Бронте (1816–1855), известна всем. С невзгодами и лишениями героине романа помогли справиться сила духа, цельность характера, бескомпромиссность, смирение и бесконечное терпение. Добродетельность, чистая душа, верность и вера творят настоящие чудеса.В книге приводится неадаптированный текст на языке оригинала с незначительными сокращениями, снабженный комментариями и словарем.',
          pageCount: 192,
          imageSmall:
            'http://books.google.com/books/content?id=S8zRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=S8zRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 262,
          amount: 275,
          authorId: 36,
          categoryId: 20,
          publisherId: 39,
        },
        {
          title: 'Сердца трех. Книга для чтения на английском языке',
          description:
            '«Сердца трех» – последний роман знаменитого американского писателя Джека Лондона (1876–1916), вышедший в свет уже после смерти автора.В предлагаемой вниманию читателей книге представлен неадаптированный текст романа, снабженный комментариями и словарем.',
          pageCount: 449,
          imageSmall:
            'http://books.google.com/books/content?id=WnEgCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WnEgCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 652,
          amount: 456.25,
          authorId: 37,
          categoryId: 20,
          publisherId: 47,
        },
        {
          title: 'Теофил Норт: Книга для чтения на английском языке',
          description:
            'Торнтон Уайлдер – знаменитый американский писатель, автор таких романов, как «Мартовские Иды», «Мост короля Людовика Святого», «День восьмой», «Каббала».«Теофил Норт» – частично автобиографический роман о молодом человеке, окончившем Йельский университет, который пробует пробиться в мире, устраиваясь на случайные работы в Ньюпорте – городе, где он когда-то проходил военную службу. Постепенно он становится вовлеченным в жизнь каждого из своих работодателей и помогает каждому из них пережить какой-либо жизненный кризис.Неадаптированный текст романа снабжен подробным комментарием и словарем. Книга адресована студентам языковых вузов и всех любителей англоязычной литературы.',
          pageCount: 546,
          imageSmall:
            'http://books.google.com/books/content?id=XxV1CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XxV1CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 460,
          amount: 2086,
          authorId: 38,
          categoryId: 20,
          publisherId: 6,
        },
        {
          title: 'Русское общество друзей книги, 1820-1929',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 72,
          imageSmall:
            'http://books.google.com/books/content?id=nIEmAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nIEmAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 597,
          amount: 2086,
          authorId: 104,
          categoryId: 8,
          publisherId: 26,
        },
        {
          title: 'Остров доктора Моро. Книга для чтения на английском языке',
          description:
            'Предлагаем вниманию любителей научной фантастики знаменитый роман Г. Дж. Уэллса «Остров доктора Моро».Издание адресовано студентам языковых вузов, а также всем любителям англоязычной литературы и, в частности, фантастики.',
          pageCount: 389,
          imageSmall:
            'http://books.google.com/books/content?id=P8jRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=P8jRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 638,
          amount: 312.5,
          authorId: 39,
          categoryId: 20,
          publisherId: 8,
        },
        {
          title: 'Портрет Дориана Грея. Книга для чтения на английском языке',
          description:
            'Оскар Уайльд (1854–1900) – всемирно известный писатель, классик английской литературы.Философский роман «Портрет Дориана Грея» (1891) – единственное крупное прозаическое произведение Уайльда. Роман посвящен бессмертным темам морали и нравственности, любви и ненависти, физической и духовной красоты, поэтому и в наши дни он не теряет своей актуальности.Неадаптированный текст на языке оригинала снабжен комментариями и словарем.Книга предназначена для широкого круга читателей, владеющих английским языком, для старшеклассников, студентов вузов, слушателей курсов иностранных языков и тех, кто изучает английский язык самостоятельно.',
          pageCount: 720,
          imageSmall:
            'http://books.google.com/books/content?id=BLUTCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BLUTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 777,
          amount: 268.75,
          authorId: 34,
          categoryId: 20,
          publisherId: 27,
        },
        {
          title: 'Разум и чувства. Книга для чтения на английском языке',
          description:
            'Джейн Остин (1775–1817) – известная английская писательница, романы которой за две сотни лет пережили множество изданий, как на языке оригинала, так и в переводах, и несколько экранизаций.«Разум и чувства» (1811) – первый роман писательницы. Это книга о любви и предательстве, об искренности и притворстве, о верности и вероломстве, о страсти и привязанности, и, конечно же, о вечной борьбе разума и чувств.Неадаптированный текст на языке оригинала снабжен постраничными комментариями и словарем.',
          pageCount: 154,
          imageSmall:
            'http://books.google.com/books/content?id=ebcTCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ebcTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 341,
          amount: 476.25,
          authorId: 40,
          categoryId: 20,
          publisherId: 5,
        },
        {
          title: 'Короли и капуста. Книга для чтения на английском языке',
          description:
            'О. Генри (настоящее имя Уильям Сидни Портер, Porter) (1862—1910) – американский писатель-юморист, непревзойденный мастер короткого рассказа.«Короли и капуста» (1904) – сборник авантюрно-юмористических новелл, действие которых происходит в Латинской Америке. Книга отличается занимательным сюжетом и парадоксально неожиданной развязкой.Неадаптированный текст на языке оригинала снабжен комментариями и словарем.',
          pageCount: 551,
          imageSmall:
            'http://books.google.com/books/content?id=K3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=K3gTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 750,
          amount: 372.5,
          authorId: 41,
          categoryId: 20,
          publisherId: 42,
        },
        {
          title: 'Приключения Тома Сойера. Книга для чтения на английском языке',
          description:
            'Предлагаем вниманию читателей знаменитый роман Марка Твена об увлекательных приключениях американского мальчика Тома Сойера и его друзей.В книге представлен неадаптированный текст романа, снабженный подробным комментарием.',
          pageCount: 597,
          imageSmall:
            'http://books.google.com/books/content?id=gnIgCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gnIgCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 929,
          amount: 322.5,
          authorId: 42,
          categoryId: 20,
          publisherId: 42,
        },
        {
          title: 'Ася и другие рассказы. Книга для чтения на английском языке',
          description:
            'Вашему вниманию предлагается перевод двух известнейших лирических повестей знаменитого писателя И. С. Тургенева – «Ася» и «Первая любовь», объединенных темой воспоминаний о юношеской любви. Тургенев – непревзойденный мастер трагичных и поэтических историй о стремлении к счастью и невозможности его достижения. Английский перевод повестей, выполненный Констанс Гарнетт, снабжен постраничными, в большей степени культурологическими, комментариями. Книга адресована студентам языковых вузов, носителям языка и всем любителям русской классической литературы.',
          pageCount: 818,
          imageSmall:
            'http://books.google.com/books/content?id=QRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 358,
          amount: 167.5,
          authorId: 43,
          categoryId: 20,
          publisherId: 4,
        },
        {
          title: 'Сага о Форсайтах. Собственник. Книга для чтения на английском языке',
          description:
            'Вниманию читающей публики предлагается первая книга из трилогии Нобелевского лауреата Джона Голсуорси (1867–1933) «Сага о Форсайтах» – «Собственник». Жизнь высшего общества Лондона представляет немалый интерес для тех, кто хочет знать, как вести себя, не теряя лица, не выказывая открыто никаких эмоций, не унижая собственного достоинства, соблюдая приличия, при том что за фасадом чинности и благопристойности в большом семействе Форсайтов бушуют общечеловеческие страсти: любовь, предательство, измена, смерть, желание мести, – и где основополагающим чувством является чувство собственности.Некоторые исследователи творчества Голсуорси приравнивают его – по сложности языка и глубине мыслей – ко Льву Толстому, поэтому в книге приводится обширный словарь и дается масса комментариев, чтобы читатель смог оценить по достоинству это самое известное произведение о жизни «цвета нации» викторианской Англии.Неадаптированный текст на языке оригинала снабжен обширным словарем и подробными комментариями. Книга предназначена для студентов языковых вузов и всех любителей английской литературы.',
          pageCount: 609,
          imageSmall:
            'http://books.google.com/books/content?id=lbQTCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lbQTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 648,
          amount: 595,
          authorId: 44,
          categoryId: 20,
          publisherId: 43,
        },
        {
          title: 'Пигмалион. Цезарь и Клеопатра. Книга для чтения на английском языке',
          description:
            'Джордж Бернард Шоу (1856–1950) известный английский драматург, лауреат Нобелевской премии (1925).В издание вошли две пьесы автора. Одна из них – «Пигмалион» (1914) – повествует о простой цветочнице, ставшей настоящей леди. Другая – «Цезарь и Клеопатра» (1899), в которой юная девушка на глазах читателей превращается в настоящую царицу.В книге представлен неадаптированный текст на языке оригинала.',
          pageCount: 1142,
          imageSmall:
            'http://books.google.com/books/content?id=JszRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JszRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 853,
          amount: 186.25,
          authorId: 45,
          categoryId: 20,
          publisherId: 1,
        },
        {
          title: 'Человек-невидимка. Машина времени. Книга для чтения на английском языке',
          description:
            'В сборник вошли два фантастических произведения английского писателя Герберта Уэллса (1866–1946): «Человек-невидимка» (1897) и «Машина времени» (1895), в которых он пытается предсказать грядущие достижения науки.Несмотря на некоторую наивность, произведения читаются «на одном дыхании» и по сей день.В книге представлены неадаптированные тексты на языке оригинала.',
          pageCount: 322,
          imageSmall:
            'http://books.google.com/books/content?id=wxHDCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wxHDCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 381,
          amount: 412.5,
          authorId: 46,
          categoryId: 20,
          publisherId: 8,
        },
        {
          title: 'Как важно быть серьезным. Пьесы. Книга для чтения на английском языке',
          description:
            'Оскар Уайльд (1854–1900) – английский писатель, досконально изучивший все подводные камни семейной жизни.В двух самых известных своих пьесах («Веер леди Уиндермир» и «Как важно быть серьезным») он предоставляет читателю право самому ответить на животрепещущие вопросы: следует ли безоговорочно доверять своей второй половине? Надо ли идеализировать спутника жизни или лучше принимать его со всеми недостатками? Прощать за ошибки, совершенные в прошлом, или безжалостно осуждать, сокрушая то, что строилось годами?Красивый язык, парадоксальные, но и логичные высказывания, мягкий юмор, запутанность положений заставят читателя вновь и вновь обращаться к этой книге, а комментарии и словарик помогут ему в полной мере оценить прелесть и афористичность языка.В книге приводится неадаптированный текст на языке оригинала с комментариями и словарем.',
          pageCount: 193,
          imageSmall:
            'http://books.google.com/books/content?id=HcnRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HcnRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 966,
          amount: 267.5,
          authorId: 34,
          categoryId: 20,
          publisherId: 11,
        },
        {
          title: 'Сага о Форсайтах. Сдается внаем. Книга для чтения на английском языке',
          description:
            'Предлагаем вниманию читателей заключительную часть трилогии Дж. Голсуорси «Сага о Форсайтах» – «Сдается внаем». В центре повествования – судьбы Флер и Джона, представителей молодого поколения семьи Форсайтов.Неадаптированный текст романа снабжен комментариями и словарем. Книга адресована студентам языковых вузов и всем любителям английской литературы.',
          pageCount: 612,
          imageSmall:
            'http://books.google.com/books/content?id=tLITCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tLITCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 319,
          amount: 248.75,
          authorId: 44,
          categoryId: 20,
          publisherId: 21,
        },
        {
          title: 'Счастливый Принц и другие сказки. Книга для чтения на английском языке',
          description:
            'Сборник «Счастливый Принц и другие сказки» Оскара Уайльда, известного английского писателя XIX века, является классическим образцом английской прозы. За сказочностью мотивов и «декоративным» стилем повествования скрываются важнейшие нравственные проблемы.В сказках отразились эстетические взгляды Оскара Уайльда на искусство, задачу которого писатель видел в сотворении красоты, недоступной действительной жизни. Для изучающих английский язык «Сказки» являются ценным учебным пособием, которое не только знакомит с удивительным миром Оскара Уайльда, но и способствует развитию навыков устной и письменной речи.Представленное издание снабжено:– вступительной статьей о творческом методе Оскара Уайльда;– развернутым комментарием к тексту;– заданиями к каждой сказке для развития творческой активности;– словарем.Английский текст приводится в оригинальном виде.Рекомендуется для чтения в старших классах школ с углубленным изучением английского языка и студентам языковых вузов.',
          pageCount: 168,
          imageSmall:
            'http://books.google.com/books/content?id=urQTCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=urQTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 767,
          amount: 268.75,
          authorId: 34,
          categoryId: 20,
          publisherId: 13,
        },
        {
          title: 'Сага о Форсайтах. В петле. Книга для чтения на английском языке',
          description:
            'Предлагаем вниманию читателя второй роман из трилогии Дж. Голсуорси «Сага о Форсайтах» – «В петле».Неадаптированный текст на языке оригинала снабжен обширным словарем и подробными комментариями. Книга предназначена для студентов языковых вузов и всех любителей английской литературы.',
          pageCount: 360,
          imageSmall:
            'http://books.google.com/books/content?id=j7ITCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=j7ITCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 68,
          amount: 248.75,
          authorId: 44,
          categoryId: 20,
          publisherId: 15,
        },
        {
          title: 'Санкт-Петербург. Тексты и упражнения. Книга 1 / Saint Petersburg: Texts & Exercises',
          description:
            'Предлагаемая книга является практическим пособием для изучения достопримечательностей Санкт-Петербурга.Каждый раздел книги состоит из статьи об одной из достопримечательностей города, словаря и разнообразных упражнений, предназначенных для лучшего усвоения предложенного материала.Книга рассчитана на учащихся средних классов общеобразовательных и специальных школ. Может быть использована как факультативный курс по теме «Санкт-Петербург».Данная книга – первая в серии книг под общим названием «Санкт-Петербург. Тексты и упражнения».',
          pageCount: 958,
          imageSmall:
            'http://books.google.com/books/content?id=NSNxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NSNxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 86,
          amount: 416.25,
          authorId: 30,
          categoryId: 20,
          publisherId: 47,
        },
        {
          title: 'Бразильский кот. Английские новеллы XIX века. Книга для чтения на английском языке',
          description:
            'В книге представлены новеллы английских писателей второй половины XIX века – Ч. Диккенса, Р. Киплинга, Т. Харди, Г. Дж. Уэллса, А. Конан Дойла и др. Читатель сможет в полной мере оценить не только слог и стиль авторов, но и саму жизнь Викторианской эпохи.Приводится полный неадаптированный текст на языке оригинала. Для студентов языковых вузов и всех любителей англоязычной литературы.',
          pageCount: 478,
          imageSmall:
            'http://books.google.com/books/content?id=38zRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=38zRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 167,
          amount: 148.75,
          authorId: 47,
          categoryId: 20,
          publisherId: 43,
        },
        {
          title: 'Дама с собачкой и другие рассказы. Книга для чтения на английском языке',
          description:
            'Вниманию читателей представлен сборник рассказов и повестей известного русского писателя А. П. Чехова. В издание вошли одни из самых известных его произведений – «Дама с собачкой», «Попрыгунья», «Палата No6», «Дом с мезонином», «Человек в футляре», «Крыжовник», относящиеся к драматической прозе позднего периода творчества автора. Чуждый моральному учительству, Чехов не прописывает рецептов нравственного совершенствования, общественного переустройства или духовного преображения, но в судьбах своих героев, в их терзаниях от неудовлетворенности своим существованием автор видит доказательства принципиальной возможности для человека устроить свою жизнь правдиво, достойно и счастливо. Английский перевод повестей с русского языка Констанс Гарнетт снабжен постраничными комментариями. Книга адресована студентам языковых вузов, носителям языка и всем любителям русской классической литературы.',
          pageCount: 1136,
          imageSmall:
            'http://books.google.com/books/content?id=MRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MRsxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 448,
          amount: 372.5,
          authorId: 51,
          categoryId: 1,
          publisherId: 15,
        },
        {
          title: 'Сказки / Fairy Tales. Книга c параллельным текстом на английском и русском языках',
          description:
            'Сборник сказок А. С. Пушкина представляет собой билингву: оригинальный текст на русском языке дополнен параллельным переводом на английский. В книгу вошли пять произведений: «Сказка о попе и о работнике его Балде», «Сказка о царе Салтане», «Сказка о рыбаке и рыбке», «Сказка о мертвой царевне и о семи богатырях» и «Сказка о золотом петушке».Стихотворный перевод выполнен Оливером Элтоном, британским литературоведом, критиком и переводчиком с русского и исландского языков.Книга адресована школьникам, но будет интересна всем, кто изучает английский язык, хочет улучшить навыки чтения и расширить свой словарный запас, а также тем, кому чтение произведений А. С. Пушкина доставляет удовольствие и радость.',
          pageCount: 193,
          imageSmall:
            'http://books.google.com/books/content?id=tJzaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tJzaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 851,
          amount: 352.5,
          authorId: 52,
          categoryId: 20,
          publisherId: 5,
        },
        {
          title: 'Трое в лодке, не считая собаки. Книга для чтения на английском языке',
          description:
            'В книгу включены избранные главы из повести известного английского писателя-юмориста Джерома Клапки Джерома «Трое в лодке, не считая собаки». Неадаптированный текст снабжён комментариями и кратким словарём. Словарь содержит толкования некоторых слов, которые обычно не входят в активный словарный запас учащихся. Комментарии облегчают понимание лексико-грамматических трудностей, а также поясняют реалии исторического, культурно-бытового и отчасти географического характера. Вопросы направлены на проверку понимания прочитанного и развитие навыков устной речи. Книга предназначена для учащихся 9–11 классов школ с углублённым изучением английского языка и для студентов неязыковых вузов.',
          pageCount: 818,
          imageSmall:
            'http://books.google.com/books/content?id=D74UEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=D74UEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 862,
          amount: 201.25,
          authorId: 53,
          categoryId: 20,
          publisherId: 36,
        },
        {
          title: 'Алмаз величиной с отель «Ритц». Книга для чтения на английском языке',
          description:
            'Наряду с романами «Ночь нежна», «Великий Гэтсби», «Последний магнат» Ф. С. Фицджеральд (1896–1940) известен своими рассказами, которые вошли в золотой фонд американской новеллистики.Предлагаем вниманию читателей рассказы, созданные писателем в 1920-х годах. Неадаптированный текст снабжен комментариями и словарем. Книга адресована студентам языковых вузов и всем любителям американской литературы.',
          pageCount: 473,
          imageSmall:
            'http://books.google.com/books/content?id=ksvRCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ksvRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 481,
          amount: 165,
          authorId: 54,
          categoryId: 20,
          publisherId: 11,
        },
        {
          title: 'Алиса в Стране Чудес. Алиса в Зазеркалье. Книга для чтения на английском языке',
          description:
            'Льюис Кэрролл (настоящее имя Чарльз Латуидж Доджсон) (1832–1898) – английский писатель, математик и логик.Вниманию читателя предлагаются самые известные произведения Кэрролла – повести-сказки «Алиса в Стране Чудес» (1865) и «Алиса в Зазеркалье» (1871), в которых, иронизируя над шаблонами мышления, писатель дал насмешливое изображение нравов английского общества второй половины XIX века.Текст печатается в оригинале, снабжен подробным комментарием и словарем. В приложении приводятся пародируемые в сказках стихи в оригинале.',
          pageCount: 549,
          imageSmall:
            'http://books.google.com/books/content?id=c83RCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=c83RCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 624,
          amount: 173.65,
          authorId: 55,
          categoryId: 20,
          publisherId: 15,
        },
        {
          title: 'The Nick Adams stories / Рассказы Ника Адамса. Книга для чтения на английском языке',
          description:
            'Книга «Рассказы Ника Адамса» – это собранные под одной обложкой рассказы разных лет, объединенные главным героем. Неадаптированный текст снабжен подробными комментариями и словарем. Книга предназначена для студентов языковых вузов и всех любителей англоязычной литературы.',
          pageCount: 320,
          imageSmall:
            'http://books.google.com/books/content?id=WJmtDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WJmtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 712,
          amount: 192.5,
          authorId: 56,
          categoryId: 20,
          publisherId: 44,
        },
        {
          title: '«Сердце и крест» и другие рассказы. Книга для чтения на английском языке',
          description:
            'Сборник включает в себя десять рассказов одного из самых ярких американских писателей. Для облегчения понимания оригинального текста даны комментарии с объяснением сложных языковых конструкций и вопросы к тексту. В конце книги приведен словарь, состоящий из слов, встречающихся в рассказах.Предназначен для старшеклассников и студентов, изучающих английский язык, а также для широкого круга читателей.',
          pageCount: 472,
          imageSmall:
            'http://books.google.com/books/content?id=IZCpCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IZCpCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 578,
          amount: 208.75,
          authorId: 41,
          categoryId: 20,
          publisherId: 8,
        },
        {
          title: 'Чтенія въ Императорскомъ обществѣ исторіи и древностей россійскихъ при Московскомъ университетѣ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 722,
          imageSmall:
            'http://books.google.com/books/content?id=I7BAAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=I7BAAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 386,
          amount: 3211,
          authorId: 591,
          categoryId: 18,
          publisherId: 47,
        },
        {
          title: 'Люди, годы, жизнь: Книги 1-3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 648,
          imageSmall:
            'http://books.google.com/books/content?id=wcMGAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wcMGAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 773,
          amount: 4396,
          authorId: 16,
          categoryId: 22,
          publisherId: 1,
        },
        {
          title: 'Настольный энциклопедический словарь',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 704,
          imageSmall:
            'http://books.google.com/books/content?id=VWCT_E61YWYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VWCT_E61YWYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 52,
          amount: 2268,
          authorId: 564,
          categoryId: 23,
          publisherId: 36,
        },
        {
          title: 'Лицейские учителя Пушкина и их книги',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 204,
          imageSmall:
            'http://books.google.com/books/content?id=d1sYAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=d1sYAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 54,
          amount: 2155,
          authorId: 59,
          categoryId: 25,
          publisherId: 15,
        },
        {
          title: 'Номер 1',
          description:
            "Многие заявляют «Хочу стать номером 1 в своей сфере деятельности»,но мало кто действительно делает что-то для этого, тем более в оговоренный срок. Неудивительно: «сделать себя самому» непросто: требуется системный подход и внимание к деталям. Эта книга как раз и предлагает чек-лист, который легко модифицировать под вас лично. Послепрочтения и заполнения специальных таблиц (срез сильных и слабых качеств, определение приоритетов, пути развития ключевых навыков, изменение имиджа, методы самомаркетинга) вы получите пошаговый алгоритм продвижения к цели. Автор, Игорь Манн, сам стал номером 1 в российском маркетинге. Эта книга — его собственный опыт и опыт десятков других людей, которые упорно работали над собой, чтобы стать лучшими в своем деле. Вам это тоже удастся. Книга издательства 'Манн, Иванов и Фербер'.",
          pageCount: 240,
          imageSmall:
            'http://books.google.com/books/content?id=rlQ_AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=rlQ_AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 544,
          amount: 449,
          authorId: 359,
          categoryId: 13,
          publisherId: 14,
        },
        {
          title: 'Характер не приговор',
          description:
            'Изучая разные взгляды на проблему, автор пытается ответить на сложный философский и в то же время совершенно практический вопрос: возможно ли изменить свой характер или это данность, которая подчиняет человека, формируя его судьбу и жизненные установки вне зависимости от усилий самой личности.Издание посвящено рассмотрению разных аспектов работы над собой и своим нравом, исходя из указанного типа характера. Каждая линия повествования – от религиозного подхода к теме до научно-обоснованных практик – сопровождается авторскими комментариями и оценками. Книга рассчитана на широкий круг читателей.',
          pageCount: 412,
          imageSmall:
            'http://books.google.com/books/content?id=U4RDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=U4RDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 566,
          amount: 311.25,
          authorId: 510,
          categoryId: 16,
          publisherId: 46,
        },
        {
          title: 'Мы начинаем в конце',
          description:
            'ТОП-20 ЛУЧШИХ КНИГ AMAZON 2021 ГОДАЛУЧШИЙ ТРИЛЛЕР 2020 ГОДА ПО ВЕРСИИ GUARDIAN, DAILY EXPRESS И MIRRORПОБЕДИТЕЛЬ ПРЕМИИ GOLD DAGGER ЗА ЛУЧШИЙ КРИМИНАЛЬНЫЙ РОМАНБЕСТСЕЛЛЕР NEW YORK TIMESВошел в шорт-листы таких престижных литературных премий, как Steel Dagger Award и Theakston’s Crime Novel of the Year.Рейтинг «Амазона» более 7000 со средней оценкой 4,5; рейтинг «Гудридз» более 26 000 со средней оценкой 4,21. Высочайшие оценки от таких мастеров жанра, как А.Дж. Финн, Джон Харт, Луиза Пенни, Кристин Ханна.Это не просто триллер, а высокая литература, способная удовлетворить даже самого взыскательного читателя. И вместе с тем он однозначно понравится обычному читателю, любящему увлекательные, мастерски написанные остросюжетные истории.Как убежать от прошлого, если жизнь – это замкнутый круг?Тридцать лет назад Винсент Кинг стал убийцей. Отсидев весь срок, он возвращается в родной городок на побережье Калифорнии, где далеко не все рады видеть его снова. Например, Стар Рэдли – бывшая девушка Винсента и... родная сестра той, кого он убил.Тридцать лет назад шериф Уокер был лучшим другом Винсента Кинга. Он так и не смог избавиться от всепоглощающего чувства вины. Ведь именно из-за его показаний Винсент на несколько десятков лет угодил в тюрьму.Тридцать лет назад Дачесс Рэдли еще не родилась. Ей всего тринадцать, а она уже считает себя «вне закона». Правила придуманы для других – не для нее. Только она способна позаботиться о маленьком братике и беспутной матери, которую Дачесс, несмотря ни на что, яростно защищает.И теперь эта ярость запускает цепь событий, обернувшихся трагедией не только для ее семьи, но и для всего города...Роман, который все называют шедевром. Роман об убийстве и возмездии. О тайнах и лжи. О том, на что готовы пойти люди, защищая тех, кого любят. О нерушимой связи между друзьями, семьей и возлюбленными. О добре и зле, и о нас – проживающих всю свою жизнь где-то между...«Этот великолепный роман моментально стал классикой... После того, как вы перевернете его последнюю страницу, вам будет очень сложно – как было и мне – описать этот опыт... Роман отчетливо американский – и в то же самое время абсолютно общемировой». – А. Дж. Финн«Этот роман – тот самый прорыв, о котором мечтает каждый издатель. Богатый как в смысле сюжета, так и характеров, полный конфликтами и напряжением, юмором и трагедийностью, острым писательским чутьем... Добавьте сюда самый убедительный юный персонаж, ничего подобного которому не встречалось последние 10 лет, – и получите наполненную глубоким смыслом историю, наслаждение от первой страницы до последней. Великолепная работа, мистер Уитакер!» – Джон Харт«Мне очень понравилась эта книга – и захватывающий сюжет, и изящный стиль. Но самое главное в ней – это характеры, особенно молодая Дачесс. Свирепая, отважная и очень уязвимая, она спрыгивает к вам со страниц как живая. И Уок... Какое удачное имя! Инспектор полиции в своем собственном неумолимом путешествии... Это книга, которую нужно читать и перечитывать – и нахваливать автора». – Луиза Пенни«Законченная и очень трогательная история преступления, наказания, любви и искупления». – Guardian«Эпическая драма и безусловный шедевр. Вряд ли мы прочтем нечто подобное в ближайшее время». – MirrorКрис Уитакер – не новое имя в литературе. Два его предыдущих романа получили массу восторженных отзывов критиков, а книга «Высокие дубы» завоевала премию CWA John Creasey New Blood Dagger Award за лучший дебют.Представляемый вашему вниманию роман стал подлинным событием в мире литературы. Моментальный бестселлер New York Times, он также получил статус главного триллера 2020 года по версии ряда британских периодических изданий, а также взял престижнейшую литературную премию Gold Dagger Award.Крис живет в Англии вместе с женой и тремя детьми.Как найти свою книгу от издательства Inspiria? Читайте подробный гид по книгам импринта в ЛитРес: Журнале',
          pageCount: 476,
          imageSmall:
            'http://books.google.com/books/content?id=7QpMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=7QpMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 951,
          amount: 686.25,
          authorId: 64,
          categoryId: 1,
          publisherId: 37,
        },
        {
          title:
            'Репутация в сети. Как формировать репутацию в сети, создавать фанатов своего бренда и защищаться от информационных атак',
          description:
            'Сегодня все испортить можно в один клик. Мы живем в мире мнений, где каждый из нас – телеканал имени себя с собственной аудиторией. И может быть достаточно одного негативного репоста или дизлайка, чтобы испортить вашу репутацию. Как этого не допустить?Говорят, предупрежден – значит вооружен. Эта книга не только предупреждает, но и предлагает действенную методику по выстраиванию репутации от ведущих экспертов репутационного маркетинга.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 220,
          imageSmall:
            'http://books.google.com/books/content?id=XkgyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XkgyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 249,
          amount: 561.25,
          authorId: 124,
          categoryId: 10,
          publisherId: 17,
        },
        {
          title: 'Маленькая черная ложь',
          description:
            'От номинанта на премию «Золотой кинжал» за «лучший криминальный роман года».«Я спрашивала себя: способна ли я убить? Спрашивала – и, похоже, получила ответ. Мне не трудно убить. Более того, у меня неплохо получается...»Роковая беспечность, трагедия – и двое детей мертвы. Ваши. Вот уже почти три года как небрежность бывшей лучшей подруги оборвала их жизни. Теперь каждая случайная встреча с этой женщиной в маленькой общине Фолклендских островов – пытка. И единственное, что пока еще дает силы существовать дальше – месть. Но совсем скоро наступит годовщина их смерти, и тогда... Пришло время уравнять счет. Осуществить самые темные мечты.Вот только реальность вносит свои коррективы: бесследно пропадает маленький мальчик. И это уже третий ребенок, исчезнувший за последние несколько лет. Полиция настаивает на том, что все произошедшее – несчастный случай. Но что, если это не так? Что, если на самом деле среди горожан затаился монстр? И что, если всё указывает на то, что монстр этот – именно вы?Шэрон Болтон – автор десяти романов, получивших высочайшую оценку литературных критиков во всем мире, обладательница премий Мэри Хиггинс Кларк и CWA Dagger in the Library«Мрачный, преследующий тебя триллер. Он проникает под кожу и не отпускает». – Пола Хокинс, автор мирового бестселлера «Девушка в поезде»«Я в восторге! Я не ложилась спать и полностью игнорировала свою семью. Это идеальный триллер. Захватывающая картина, полная секретов и предательств. Друзья, любовники, соседи – каждому есть что скрывать...» – Лиза Гарднер«Хорошо продуманная колыбель лжи и предательства. Но что делает эту книгу особенной, так это яркое изображение самих Фолклендских островов, будь то дикая природа или клаустрофобная природа человеческого существования на маленьком острове». – The Guardian«Максимально мрачная и эмоциональная история, способная выбить почву из-под ваших ног. Напряжение будет нарастать с каждой главой, а финал сумеет несколько раз вас удивить и в итоге шокировать. Автору удалось мастерски раскрыть характеры всех персонажей и обнажить их самые темные стороны. Блестящий психологический триллер». – Книжный блогер Гарри @ultraviolence_g',
          pageCount: 384,
          imageSmall:
            'http://books.google.com/books/content?id=zpddEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zpddEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 491,
          amount: 461.25,
          authorId: 72,
          categoryId: 1,
          publisherId: 29,
        },
        {
          title: '25 граммов счастья. История маленького ежика, который изменил жизнь человека',
          description:
            'Эта жизнеутверждающая история о человеке и маленьком ежике докажет вам, что ни одна любовь не может быть слишком большой, и ни одно существо не может быть слишком маленьким. Итальянский ветеринар Массимо Ваккетта рассказывает о необычайной встрече, изменившей его жизнь. После болезненного развода он чувствовал себя разбитым и подавленным, пока в клинике не появился осиротевший ежонок, который весил всего 25 граммов. Борьба за его жизнь помогла ветеринару выйти из депрессии и обрести новый смысл в своей профессии. Спасая ежика Нинну, Массимо раскрывает свою яркую индивидуальность, и вскоре в его руках один за другим оказываются другие колючие малыши: люди начинают искать необычного ветеринара, чтобы исцелить и позаботиться о самых уязвимых и слабых существах, которых порой никто не замечает.В формате PDF A4 сохранен издательский макет.',
          pageCount: 183,
          imageSmall:
            'http://books.google.com/books/content?id=WF4UEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WF4UEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 658,
          amount: 323.75,
          authorId: 73,
          categoryId: 28,
          publisherId: 26,
        },
        {
          title: 'Drevnosti, trudy Moskovskago arkheologicheskago obshchestva. Tom 1-24. [with] Prilozh. k tomu 15',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 458,
          imageSmall:
            'http://books.google.com/books/content?id=AnUOAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=AnUOAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 514,
          amount: 1391,
          authorId: 60,
          categoryId: 37,
          publisherId: 39,
        },
        {
          title: 'Materīaly dli︠a︡ istorīi Imperatorskoĭ akademīi nauk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 786,
          imageSmall:
            'http://books.google.com/books/content?id=SwLRAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SwLRAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 669,
          amount: 4377,
          authorId: 216,
          categoryId: 20,
          publisherId: 22,
        },
        {
          title: 'Джинкс',
          description:
            'Герой этой истории, мальчик Джинкс, вырос в Урвальде – сверхъестественном, первобытном лесу, полном опасностей. Главное правило жителей леса – не сходить со знакомой тропы, чтобы не попасть в лапы голодных троллей, коварных оборотней, ведьм и чародеев. Герою предстоят волнующие испытания, в ходе которых он взрослеет, закаляет характер и открывает в себе необычные качества. Новые приключения ждут читателей в книгах «Магия Джинкса» и «Пламя Джинкса». Трилогия «Джинкс» получила множество международных наград. Издается в России впервые.',
          pageCount: 363,
          imageSmall:
            'http://books.google.com/books/content?id=oZ8wBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=oZ8wBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 721,
          amount: 1368,
          authorId: 110,
          categoryId: 28,
          publisherId: 22,
        },
        {
          title: 'Russkīĭ v︠i︡estnik',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 440,
          imageSmall:
            'http://books.google.com/books/content?id=raSi7RQIMWkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=raSi7RQIMWkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 263,
          amount: 2943,
          authorId: 290,
          categoryId: 94,
          publisherId: 7,
        },
        {
          title: 'Vi︠e︡stnik obshchestva drevne-russkogo iskusstva pri moskovskom publichnom muzcĭe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 710,
          imageSmall:
            'http://books.google.com/books/content?id=1a9JAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1a9JAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 608,
          amount: 3166,
          authorId: 62,
          categoryId: 26,
          publisherId: 35,
        },
        {
          title: 'Выбор. О свободе и внутренней силе человека',
          description:
            'Эдит Ева Эгер в юном возрасте была отправлена вместе со своей семьей в Аушвиц. Там ее родители погибли в газовой камере, а Эдит и ее сестра испытали на себе все ужасы отвратительных лагерей смерти. Через 35 лет после окончания войны, став известным психологом, Эдит вернулась в Аушвиц, чтобы избавиться от воспоминаний о прошлом и вины выжившего.Эта книга не просто мемуары пережившего холокост человека, это незабываемые хроники героизма и стойкости, милосердия и исцеления. Она показывает, что мы всегда можем выбирать, чему нас учит жизнь и как относиться к происходящему.Больше интересных фактов из жизни Эдит Эгер читайте в ЛитРес: Журнале',
          pageCount: 399,
          imageSmall:
            'http://books.google.com/books/content?id=1RPHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1RPHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 598,
          amount: 2850,
          authorId: 99,
          categoryId: 12,
          publisherId: 32,
        },
        {
          title: 'Ежегодник книги СССР',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 344,
          imageSmall:
            'http://books.google.com/books/content?id=nEdEAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nEdEAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 618,
          amount: 592,
          authorId: 560,
          categoryId: 27,
          publisherId: 5,
        },
        {
          title: 'Мужчина с татуировкой',
          description:
            'Она пыталась забыть тот день! Навсегда вычеркнуть кошмарные события из своей жизни! И у нее получилось. Сейчас, семь лет спустя Татьяна работала в хорошей фирме и любила самого лучшего мужчину в мире... И самое главное он отвечал взаимностью. Но кто мог подумать, что одна ночь с ним перечеркнет все семь лет, и она вновь почувствует острые когти страха...Содержит нецензурную брань.',
          pageCount: 108,
          imageSmall:
            'http://books.google.com/books/content?id=gy7nDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gy7nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 636,
          amount: 99.97,
          authorId: 65,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Волшаны. Пробуждение Земли',
          description:
            'Переезд с семьёй в столицу. Что может быть лучше! Я пройду инициацию и получу своего волшана под присмотром лучших магов страны.И найду друга детства, что уехал несколькими годами ранее.Всё как в мечтах! Огромный город, лучшая школа, новые друзья и встреча с НИМ. Но реальность вносит свои коррективы. Родители умолчали, что меня уже ждёт жених, с любимым мы во враждующих школах и даже инициация преподносит неожиданный сюрприз. А ещё старинная школа хранит свои тайны, куда я по неосторожности сунула нос и теперь бы остаться в живых.',
          pageCount: 335,
          imageSmall:
            'http://books.google.com/books/content?id=8GXDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8GXDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 628,
          amount: 348.75,
          authorId: 69,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Opisanie dokumentov i bumag, chranjaščichisja v Moskovskom archivě Ministerstva justicii',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 534,
          imageSmall:
            'http://books.google.com/books/content?id=9BZTAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9BZTAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 975,
          amount: 1228,
          authorId: 575,
          categoryId: 104,
          publisherId: 44,
        },
        {
          title: 'Разрядные дьяки XVI вѣка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 768,
          imageSmall:
            'http://books.google.com/books/content?id=w8dZAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=w8dZAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 689,
          amount: 1059,
          authorId: 67,
          categoryId: 29,
          publisherId: 10,
        },
        {
          title:
            'Записки, руководствующие к основательному разумению Книги Бытия, заключающие в себе и перевод сей книги на русское наречие',
          description: 'Религиозная литература XX века.',
          pageCount: 201,
          imageSmall:
            'http://books.google.com/books/content?id=wuL_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wuL_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 841,
          amount: 101,
          authorId: 68,
          categoryId: 8,
          publisherId: 40,
        },
        {
          title: 'Прогулки по неизвестному Петербургу',
          description:
            'Нестандартный авторский путеводитель по Северной столице для тех, кто хочет не только погулять по любимому городу, но и узнать истории зданий и их жителей, а также найти интересные локации.Владислав Пода – экскурсовод, гид-краевед, фотограф и блогер. Он живет в Петербурге и проводит экскурсии по крышам и парадным этого города. Владислав собрал в путеводителе 5 маршрутов, в рамках которых вы сможете погрузиться в историю и атмосферу Петербурга, узнать множество интересных фактов и заглянуть в прошлое культурной столицы. Вы пройдете по каналу Грибоедова, набережным Мойки и Фонтанки, Большой Морской и Малой Морской улицам, Лиговскому проспекту и Обводному каналу, сможете чуть лучше узнать Санкт-Петербург, а также истории, которые хранят его дома.',
          pageCount: 202,
          imageSmall:
            'http://books.google.com/books/content?id=t_g4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=t_g4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 747,
          amount: 523.75,
          authorId: 104,
          categoryId: 39,
          publisherId: 34,
        },
        {
          title: 'Может, Нуль не виноват?',
          description:
            'Веселая сказка Ирины Токмаковой «Может, Нуль не виноват?» познакомит маленьких читателей с увлекательным миром цифр и математики, научит основным правилам: сложения, вычитания, деления и умножения. Иллюстрации к книге нарисованы Львом Токмаковым.',
          pageCount: 60,
          imageSmall:
            'http://books.google.com/books/content?id=_HNHQNs8vYAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_HNHQNs8vYAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 914,
          amount: 33,
          authorId: 105,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Vi︠e︡ra i razum',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1750,
          imageSmall:
            'http://books.google.com/books/content?id=sa5HAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sa5HAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 956,
          amount: 3196,
          authorId: 279,
          categoryId: 2,
          publisherId: 15,
        },
        {
          title: 'Istorija russkoj slovesnosti',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 706,
          imageSmall:
            'http://books.google.com/books/content?id=Ldp68foyVXUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ldp68foyVXUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 684,
          amount: 2608,
          authorId: 71,
          categoryId: 57,
          publisherId: 20,
        },
        {
          title: 'Травматология',
          description:
            'Руководство рассчитано на травматологов, ортопедов, интернов, врачей смежных специальностей, преподавателей и студентов старших курсов медицинских вузов.',
          pageCount: 823,
          imageSmall:
            'http://books.google.com/books/content?id=DePed_V62sAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DePed_V62sAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 965,
          amount: 300,
          authorId: 107,
          categoryId: 30,
          publisherId: 32,
        },
        {
          title: 'Караваль',
          description:
            'Легендарное шоу, куда желает попасть каждый.Любовь, что окрыляет душу.Связь двух сестер, которую нельзя разорвать.Скарлетт никогда не покидала остров Трисду, где жила с сестрой и жестоким отцом. С детских лет она хранила в сердце заветную мечту: попасть на легендарный Караваль – шоу, которое лишь раз в год устраивает таинственный магистр Легендо. Когда девушка вдруг получает пригласительный билет, ее счастью нет предела.Но реальность обманчива. Сон превращается в кошмар.Скарлетт оказывается втянута в опасную игру, где нет места проигравшим. Теперь у девушки есть всего лишь пять ночей, чтобы спасти свою сестру Теллу, иначе та навсегда останется в плену Острова Грёз.Добро пожаловать в Караваль... Мир, где сбываются самые опасные желания!',
          pageCount: 381,
          imageSmall:
            'http://books.google.com/books/content?id=SrdREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SrdREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 710,
          amount: 473.75,
          authorId: 107,
          categoryId: 1,
          publisherId: 8,
        },
        {
          title: 'Хрупкое равновесие. Книга 1',
          description:
            'Диана Оливер работает парамедиком на «скорой». Днем она спасает людям жизни, а по вечерам ходит с друзьями по барам или стреляет в тире. Диана была уверена в своем счастливом и благополучном будущем, пока судьба не свела ее с главой итальянской мафии. Девушка еще не догадывается, но совсем скоро ей предстоит стать частью криминального мира, ведь ее талант попадать точно в цель не остался незамеченным.Стефано Висконти – глава клана «Morte Nera». Он привык все держать под контролем. Каждая его сделка – успешная, каждый враг – заклятый. Но для проведения крупных операций ему нужен снайпер, человек с идеальной меткостью, подчиняющийся любым его приказам, преданный ему. И на эту роль идеально подходит хрупкая девушка-парамедик, способная справиться не только с собственными чувствами, но и с любым оружием...',
          pageCount: 288,
          imageSmall:
            'http://books.google.com/books/content?id=KVEUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KVEUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 382,
          amount: 248.75,
          authorId: 76,
          categoryId: 1,
          publisherId: 2,
        },
        {
          title:
            'Sistematicheskīĭ ukazatelʹ literatury o evrei͡akh na russkom i͡azyki͡e so vremeni vvedenīi͡a grazhdanskago shrifta (1708 g.) po dekabrʹ 1889 g',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 590,
          imageSmall:
            'http://books.google.com/books/content?id=44sUAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=44sUAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 621,
          amount: 2976,
          authorId: 333,
          categoryId: 31,
          publisherId: 31,
        },
        {
          title: 'Практична граматика англійської мови. Книга 1',
          description:
            'Посібник містить основні теоретичні відомості з монографії англійської мови, систему вправ на закріплення вивчених граматичних структур та тести для навчання практичної граматики студентів I–IV курсів, напряму підготовки 6.020303. “Філологія”, спеціальності “Переклад” вищих навчальних закладів. Особливу увагу приділено нестандартним випадкам вживання окремих частин мови та часових форм дієслова. Посібник розрахований на філологів, перекладачів, учителів та учнів спеціалізованих мовних шкіл, ліцеїв, гімназій і на слухачів інтенсивних курсів вивчення інозеиних мов.',
          pageCount: 528,
          imageSmall:
            'http://books.google.com/books/content?id=n47VCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=n47VCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 714,
          amount: 822.77,
          authorId: 75,
          categoryId: 61,
          publisherId: 47,
        },
        {
          title: 'Программы домашняго чтенія на I, II, III, IV систематическаго курса',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 800,
          imageSmall:
            'http://books.google.com/books/content?id=sk9CjB-KyigC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sk9CjB-KyigC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 974,
          amount: 4888,
          authorId: 257,
          categoryId: 121,
          publisherId: 2,
        },
        {
          title: 'Что не стоит делать невидимке',
          description:
            'Этель Ледерхед двенадцать, и у нее, как и у многих в этом возрасте, на лице прыщи и почти нет друзей, кроме Бойди, самого непопулярного мальчика в классе. Кажется, что в ее жизни ыче идет наперекосяк, но на самом деле все становится еще хуже, когда она получает в подарок настоящий солярий. Потому что однажды, позагорав в нем, Этель вдруг становится невидимой!И только на первый взгляд кажется, что это круто, а на самом деле нет. На самом деле вначале страшно, а потом и вовсе опасно. Но главное – знать, чего точно не стоит делать, когда ты становишься невидимым!Невероятное приключение, полное загадок и исчезновений, в исполнении настоящей звезды детской фантастики Росса Уэлфорда!Для среднего школьного возраста.',
          pageCount: 342,
          imageSmall:
            'http://books.google.com/books/content?id=JT5cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JT5cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 413,
          amount: 523.75,
          authorId: 66,
          categoryId: 28,
          publisherId: 1,
        },
        {
          title: 'Rossijskaja Bibliografija',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1248,
          imageSmall:
            'http://books.google.com/books/content?id=aj9TQI25UZAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=aj9TQI25UZAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 880,
          amount: 3158,
          authorId: 80,
          categoryId: 27,
          publisherId: 9,
        },
        {
          title: 'Sbornik Otdělenija Russkago Jazyka i Slovesnosti Imperatorskoj Akademii Nauk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 574,
          imageSmall:
            'http://books.google.com/books/content?id=FRj9PToPx74C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FRj9PToPx74C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 823,
          amount: 1235,
          authorId: 285,
          categoryId: 93,
          publisherId: 29,
        },
        {
          title: 'Обличительное богословие',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 280,
          imageSmall:
            'http://books.google.com/books/content?id=kNHbrGndhaMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kNHbrGndhaMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 859,
          amount: 1618,
          authorId: 81,
          categoryId: 41,
          publisherId: 12,
        },
        {
          title: 'IN TRANSITION: Cultural Identities in the Age of Transnational and Transcultural Flux',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 150,
          imageSmall:
            'http://books.google.com/books/content?id=OhG1AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OhG1AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 935,
          amount: 3058,
          authorId: 82,
          categoryId: 3,
          publisherId: 21,
        },
        {
          title: 'Вѣстникъ Европы',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 930,
          imageSmall:
            'http://books.google.com/books/content?id=1gcFAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1gcFAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 852,
          amount: 4241,
          authorId: 460,
          categoryId: 35,
          publisherId: 20,
        },
        {
          title: 'Illi︠u︡strirovannai︠a︡ polnai︠a︡ populi︠a︡rnai︠a︡ bibleĭskai︠a︡ ėnt︠s︡iklopedīi︠a︡: A-M',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 506,
          imageSmall:
            'http://books.google.com/books/content?id=BRLkAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BRLkAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 450,
          amount: 3857,
          authorId: 100,
          categoryId: 36,
          publisherId: 39,
        },
        {
          title: 'Торговое право',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 290,
          imageSmall:
            'http://books.google.com/books/content?id=I6-UCQhh9oYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=I6-UCQhh9oYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 823,
          amount: 2152,
          authorId: 101,
          categoryId: 90,
          publisherId: 24,
        },
        {
          title: 'Рѣшенія Гражданского кассаціоннаго департамента Правительствующаго сената',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 362,
          imageSmall:
            'http://books.google.com/books/content?id=eFUwlbeTtiYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=eFUwlbeTtiYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 430,
          amount: 1668,
          authorId: 102,
          categoryId: 89,
          publisherId: 29,
        },
        {
          title: 'Отчет о пятнадцатом присуждении наград графа Уварова',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 404,
          imageSmall:
            'http://books.google.com/books/content?id=qnNgAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=qnNgAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 357,
          amount: 1343,
          authorId: 163,
          categoryId: 130,
          publisherId: 14,
        },
        {
          title: 'Судебные уставы 20 ноября 1864 года',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1050,
          imageSmall:
            'http://books.google.com/books/content?id=augDAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=augDAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 784,
          amount: 528,
          authorId: 103,
          categoryId: 38,
          publisherId: 35,
        },
        {
          title: 'Барокко как связь и разрыв',
          description:
            'Школьное знание возводит термин «барокко» к образу «жемчужины неправильной формы». Этот образ связан с общим эмоциональным фоном эпохи: чувством внутреннего напряжения «между пламенной страстью и жестким, холодным контролем», стремящимся прорваться наружу. Почему Шекспир и Джон Донн говорили о разрушении всех связей, а их младший современник Атаназиус Кирхер рисовал взрывоопасный земной шар, пронизанный токами внутреннего огня? Как это соотносится с формулой самоощущения ХХ века? Как барокко и присущие ему сбитый масштаб предметов, механистичность, соединение несоединимого, вторжение фантастики в реальность соотносятся с современной культурой? В своей книге Владислав Дегтярев рассматривает культуру барокко как параллель и альтернативу футуристическому XX веку и показывает, как самые разные барочные интуиции остаются пугающе современными. Владислав Дегтярев — преподаватель РХГА, автор книги «Прошлое как область творчества» (М.: НЛО, 2018).',
          pageCount: 539,
          imageSmall:
            'http://books.google.com/books/content?id=LTwxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=LTwxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 479,
          amount: 299,
          authorId: 108,
          categoryId: 3,
          publisherId: 45,
        },
        {
          title: 'Прогулки по неизвестному Петербургу',
          description:
            'Нестандартный авторский путеводитель по Северной столице для тех, кто хочет не только погулять по любимому городу, но и узнать истории зданий и их жителей, а также найти интересные локации.Владислав Пода – экскурсовод, гид-краевед, фотограф и блогер. Он живет в Петербурге и проводит экскурсии по крышам и парадным этого города. Владислав собрал в путеводителе 5 маршрутов, в рамках которых вы сможете погрузиться в историю и атмосферу Петербурга, узнать множество интересных фактов и заглянуть в прошлое культурной столицы. Вы пройдете по каналу Грибоедова, набережным Мойки и Фонтанки, Большой Морской и Малой Морской улицам, Лиговскому проспекту и Обводному каналу, сможете чуть лучше узнать Санкт-Петербург, а также истории, которые хранят его дома.',
          pageCount: 202,
          imageSmall:
            'http://books.google.com/books/content?id=t_g4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=t_g4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 616,
          amount: 523.75,
          authorId: 104,
          categoryId: 39,
          publisherId: 37,
        },
        {
          title: 'Джинкс',
          description:
            'Герой этой истории, мальчик Джинкс, вырос в Урвальде – сверхъестественном, первобытном лесу, полном опасностей. Главное правило жителей леса – не сходить со знакомой тропы, чтобы не попасть в лапы голодных троллей, коварных оборотней, ведьм и чародеев. Герою предстоят волнующие испытания, в ходе которых он взрослеет, закаляет характер и открывает в себе необычные качества. Новые приключения ждут читателей в книгах «Магия Джинкса» и «Пламя Джинкса». Трилогия «Джинкс» получила множество международных наград. Издается в России впервые.',
          pageCount: 363,
          imageSmall:
            'http://books.google.com/books/content?id=oZ8wBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=oZ8wBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 269,
          amount: 4984,
          authorId: 110,
          categoryId: 28,
          publisherId: 36,
        },
        {
          title: 'Может, Нуль не виноват?',
          description:
            'Веселая сказка Ирины Токмаковой «Может, Нуль не виноват?» познакомит маленьких читателей с увлекательным миром цифр и математики, научит основным правилам: сложения, вычитания, деления и умножения. Иллюстрации к книге нарисованы Львом Токмаковым.',
          pageCount: 60,
          imageSmall:
            'http://books.google.com/books/content?id=_HNHQNs8vYAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_HNHQNs8vYAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 225,
          amount: 33,
          authorId: 105,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Ėnt︠s︡iklopedicheskīĭ slovarʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 522,
          imageSmall:
            'http://books.google.com/books/content?id=k2EdAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=k2EdAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 419,
          amount: 1689,
          authorId: 108,
          categoryId: 23,
          publisherId: 43,
        },
        {
          title: 'Караваль',
          description:
            'Легендарное шоу, куда желает попасть каждый.Любовь, что окрыляет душу.Связь двух сестер, которую нельзя разорвать.Скарлетт никогда не покидала остров Трисду, где жила с сестрой и жестоким отцом. С детских лет она хранила в сердце заветную мечту: попасть на легендарный Караваль – шоу, которое лишь раз в год устраивает таинственный магистр Легендо. Когда девушка вдруг получает пригласительный билет, ее счастью нет предела.Но реальность обманчива. Сон превращается в кошмар.Скарлетт оказывается втянута в опасную игру, где нет места проигравшим. Теперь у девушки есть всего лишь пять ночей, чтобы спасти свою сестру Теллу, иначе та навсегда останется в плену Острова Грёз.Добро пожаловать в Караваль... Мир, где сбываются самые опасные желания!',
          pageCount: 381,
          imageSmall:
            'http://books.google.com/books/content?id=SrdREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SrdREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 827,
          amount: 473.75,
          authorId: 107,
          categoryId: 1,
          publisherId: 16,
        },
        {
          title: 'Русская зарубежная книга',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 336,
          imageSmall:
            'http://books.google.com/books/content?id=XMoix8AuRq4C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XMoix8AuRq4C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 645,
          amount: 3008,
          authorId: 109,
          categoryId: 27,
          publisherId: 47,
        },
        {
          title: 'Мужчина с татуировкой',
          description:
            'Она пыталась забыть тот день! Навсегда вычеркнуть кошмарные события из своей жизни! И у нее получилось. Сейчас, семь лет спустя Татьяна работала в хорошей фирме и любила самого лучшего мужчину в мире... И самое главное он отвечал взаимностью. Но кто мог подумать, что одна ночь с ним перечеркнет все семь лет, и она вновь почувствует острые когти страха...Содержит нецензурную брань.',
          pageCount: 108,
          imageSmall:
            'http://books.google.com/books/content?id=gy7nDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gy7nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 278,
          amount: 99.97,
          authorId: 65,
          categoryId: 1,
          publisherId: 39,
        },
        {
          title: 'Волшаны. Пробуждение Земли',
          description:
            'Переезд с семьёй в столицу. Что может быть лучше! Я пройду инициацию и получу своего волшана под присмотром лучших магов страны.И найду друга детства, что уехал несколькими годами ранее.Всё как в мечтах! Огромный город, лучшая школа, новые друзья и встреча с НИМ. Но реальность вносит свои коррективы. Родители умолчали, что меня уже ждёт жених, с любимым мы во враждующих школах и даже инициация преподносит неожиданный сюрприз. А ещё старинная школа хранит свои тайны, куда я по неосторожности сунула нос и теперь бы остаться в живых.',
          pageCount: 335,
          imageSmall:
            'http://books.google.com/books/content?id=8GXDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8GXDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 754,
          amount: 348.75,
          authorId: 69,
          categoryId: 1,
          publisherId: 30,
        },
        {
          title: 'В мире книг',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 638,
          imageSmall:
            'http://books.google.com/books/content?id=Ef03AAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ef03AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 741,
          amount: 3619,
          authorId: 470,
          categoryId: 41,
          publisherId: 5,
        },
        {
          title: 'Ревность и другие истории',
          description:
            'Ю Несбё, норвежский писатель и ведущий представитель северного нуара, не перестает удивлять. Ломая стереотипы, пренебрегая правилами жанра, он показывает человека так откровенно, как если бы мы сами смотрели в зеркало, боясь себе признаться: это я. «В моей голове нет и не будет никакой цензуры», — утверждает Несбё. Он никогда не раскрывает своих замыслов заранее, и до недавнего времени было известно лишь то, что писатель работает над двумя сборниками короткой прозы. В первый из них вошли семь криминальных историй, объединенных темой ревности: чувства древнего, сильного, болезненного, неподвластного воле, изменяющего человеческую природу. Двое знакомятся в самолете. Она рассказывает, что хотела умереть из-за измены мужа и подписала договор с компанией, инсценирующей самоубийства. Если бы женщина знала, кто сидит в соседнем кресле... На греческом острове пропал турист, и для расследования приглашен детектив, обладающий уникальной способностью распознавать ревность при допросе... Подозрение падает на брата пропавшего человека, и этот мотив Каина и Авеля перекликается с сюжетом последнего романа Несбё «Королевство». Ревность прикрывается жаждой справедливости, сводит с ума, отравляет жизнь и меняет ее к лучшему лишь в том случае, когда соперника удается в прямом и переносном смысле убрать. Среди героев Несбё есть и циники, и простаки, но они всегда поступают непредсказуемо — даже для самих себя, потому что перед зеленоглазым чудовищем человеческая логика бессильна. Впервые на русском!',
          pageCount: 161,
          imageSmall:
            'http://books.google.com/books/content?id=fElDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fElDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 558,
          amount: 505,
          authorId: 111,
          categoryId: 1,
          publisherId: 26,
        },
        {
          title: 'Хрупкое равновесие. Книга 1',
          description:
            'Диана Оливер работает парамедиком на «скорой». Днем она спасает людям жизни, а по вечерам ходит с друзьями по барам или стреляет в тире. Диана была уверена в своем счастливом и благополучном будущем, пока судьба не свела ее с главой итальянской мафии. Девушка еще не догадывается, но совсем скоро ей предстоит стать частью криминального мира, ведь ее талант попадать точно в цель не остался незамеченным.Стефано Висконти – глава клана «Morte Nera». Он привык все держать под контролем. Каждая его сделка – успешная, каждый враг – заклятый. Но для проведения крупных операций ему нужен снайпер, человек с идеальной меткостью, подчиняющийся любым его приказам, преданный ему. И на эту роль идеально подходит хрупкая девушка-парамедик, способная справиться не только с собственными чувствами, но и с любым оружием...',
          pageCount: 288,
          imageSmall:
            'http://books.google.com/books/content?id=KVEUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KVEUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 933,
          amount: 248.75,
          authorId: 76,
          categoryId: 1,
          publisherId: 36,
        },
        {
          title: 'Стальной узел',
          description:
            'Этому автору по силам любой жанр: жесткий боевик и военные приключения, захватывающий детектив и криминальная драма. Совокупный тираж книг С. Зверева составляет более 6 миллионов экземпляров. Его имя – неизменный знак качества каждой новой книги.После сражения на Курской дуге, чтобы помешать немцам наладить подвоз резервов к линии фронта, советское командование разработало операцию «Рельсовая война». Ежедневно сотни километров железнодорожных путей выводилось из строя. Однако фашисты упорно восстанавливали снабжение. Экипаж лейтенанта Алексея Соколова получил приказ провести разведку на станции, куда гитлеровцы согнали платформы с материалами для ремонта разрушенных путей. Танкисты успешно проводят рейд, но на обратном пути их танк выходит из строя. Едва сдерживая натиск преследующих фашистов, бойцы понимают: полученные разведданные ценнее, чем их собственные жизни...Совокупный тираж книг С. Зверева составляет более 6 миллионов экземпляров.',
          pageCount: 204,
          imageSmall:
            'http://books.google.com/books/content?id=1bFiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1bFiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 502,
          amount: 361.25,
          authorId: 112,
          categoryId: 1,
          publisherId: 3,
        },
        {
          title: 'Akty Moskovskago gosudarstva',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 823,
          imageSmall:
            'http://books.google.com/books/content?id=0wH4ReUeTsoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0wH4ReUeTsoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 206,
          amount: 3169,
          authorId: 120,
          categoryId: 37,
          publisherId: 18,
        },
        {
          title: 'Незримая жизнь Адди Ларю',
          description:
            'Франция, 1714 год. Чтобы избежать брака без любви, юная Аделин заключает сделку с тёмным богом. Тот дарует ей свободу и бессмертие, но подарок его с подвохом: отныне девушка проклята быть всеми забытой. Собственные родители не узнают её. Любой, с кем она познакомится, не вспомнит о ней, стоит Адди пропасть из вида на пару минут.Триста лет спустя, в наши дни, Адди всё ещё жива. Она видела, как сменяются эпохи. Её образ вдохновлял музыкантов и художников, пускай позже те и не могли ответить, что за таинственная незнакомка послужила им музой. Аделин смирилась: таков единственный способ оставить в мире хоть какую-то память о ней. Но однажды в книжном магазине она встречает юношу, который произносит три заветных слова: «Я тебя помню»...',
          pageCount: 576,
          imageSmall:
            'http://books.google.com/books/content?id=ycpDEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ycpDEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 16,
          amount: 323.75,
          authorId: 113,
          categoryId: 1,
          publisherId: 24,
        },
        {
          title: 'О "Золотой книге" Ш. Дамдина',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 172,
          imageSmall:
            'http://books.google.com/books/content?id=5qafAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5qafAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 426,
          amount: 937,
          authorId: 114,
          categoryId: 42,
          publisherId: 8,
        },
        {
          title: 'Указатель книг по исторіи и общественным вопросам',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 646,
          imageSmall:
            'http://books.google.com/books/content?id=s5xLAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=s5xLAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 654,
          amount: 3805,
          authorId: 116,
          categoryId: 35,
          publisherId: 8,
        },
        {
          title: 'Ukazatelʹ po dělam pečati za ... g',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 846,
          imageSmall:
            'http://books.google.com/books/content?id=ov0coUqURoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ov0coUqURoQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 813,
          amount: 1323,
          authorId: 117,
          categoryId: 13,
          publisherId: 28,
        },
        {
          title: 'Текст по полочкам: Краткое пособие по деловой переписке',
          description:
            'Деловая переписка — это всегда важно, но далеко не всегда просто. Ошибки в ней могут иметь серьезные последствия — от неправильного понимания ваших мыслей и идей до разрушения бизнеса. Краткое пособие Максима Ильяхова поможет вам сделать письменное общение с партнерами и клиентами максимально эффективным и безопасным. Здесь вы найдете самые полезные советы и инструменты из всех книг автора, а также его ответы на вопросы сотрудников и руководителей российских компаний на тренингах и мастер-классах. Вы узнаете, как избежать досадных ошибок в переписке, научитесь ставить задачи, критиковать и предъявлять претензии, отчитываться, грамотно использовать визуализацию для презентаций, составлять коммерческие предложения и т. д. Также в книге есть электронное приложение — методичка по деловой переписке, которую можно использовать как универсальный шаблон.',
          pageCount: 237,
          imageSmall:
            'http://books.google.com/books/content?id=EnRWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EnRWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 729,
          amount: 499,
          authorId: 119,
          categoryId: 13,
          publisherId: 37,
        },
        {
          title: 'Цензура иностранных книг в Российской Империи и Советском Союзе',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 118,
          imageSmall:
            'http://books.google.com/books/content?id=fGkVAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fGkVAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 554,
          amount: 4033,
          authorId: 355,
          categoryId: 41,
          publisherId: 24,
        },
        {
          title: 'Взрослая книга о детской иллюстрации',
          description:
            'Красивая и вдохновляющая книга рассказывает обо всех аспектах создания детской иллюстрированной книги с нуля — от идеи и разработки персонажей до сборки макета и обложки. Книга поможет читателям сделать первые шаги в профессии иллюстратора.',
          pageCount: 240,
          imageSmall:
            'http://books.google.com/books/content?id=AhHmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=AhHmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 522,
          amount: 449,
          authorId: 120,
          categoryId: 35,
          publisherId: 1,
        },
        {
          title:
            'Репутация в сети. Как формировать репутацию в сети, создавать фанатов своего бренда и защищаться от информационных атак',
          description:
            'Сегодня все испортить можно в один клик. Мы живем в мире мнений, где каждый из нас – телеканал имени себя с собственной аудиторией. И может быть достаточно одного негативного репоста или дизлайка, чтобы испортить вашу репутацию. Как этого не допустить?Говорят, предупрежден – значит вооружен. Эта книга не только предупреждает, но и предлагает действенную методику по выстраиванию репутации от ведущих экспертов репутационного маркетинга.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 220,
          imageSmall:
            'http://books.google.com/books/content?id=XkgyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XkgyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 101,
          amount: 561.25,
          authorId: 124,
          categoryId: 10,
          publisherId: 37,
        },
        {
          title: 'Что не стоит делать невидимке',
          description:
            'Этель Ледерхед двенадцать, и у нее, как и у многих в этом возрасте, на лице прыщи и почти нет друзей, кроме Бойди, самого непопулярного мальчика в классе. Кажется, что в ее жизни ыче идет наперекосяк, но на самом деле все становится еще хуже, когда она получает в подарок настоящий солярий. Потому что однажды, позагорав в нем, Этель вдруг становится невидимой!И только на первый взгляд кажется, что это круто, а на самом деле нет. На самом деле вначале страшно, а потом и вовсе опасно. Но главное – знать, чего точно не стоит делать, когда ты становишься невидимым!Невероятное приключение, полное загадок и исчезновений, в исполнении настоящей звезды детской фантастики Росса Уэлфорда!Для среднего школьного возраста.',
          pageCount: 342,
          imageSmall:
            'http://books.google.com/books/content?id=JT5cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JT5cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 553,
          amount: 523.75,
          authorId: 66,
          categoryId: 28,
          publisherId: 37,
        },
        {
          title: 'Грация королевы небес. Тайна Марко',
          description:
            'Адель Леруа никогда не летала на самолетах. Ее пугает даже мысль ступить на борт лайнера. Но ради заветного повышения ей необходимо выполнить важное задание – написать статью в местный журнал о пилоте, имя которого после авиакатастрофы прогремело на весь мир. Правда, есть проблема. Он часто находится в небе, а на земле неразговорчив.Марко дель Боско ненавидит репортеров, которые атакуют его с разных концов света. Он непубличная личность и не считает себя героем. Для всех он недоступен, закрыт и нелюдим. Но девушка по имени Адель не похожа на других журналистов. Что-то в ней не дает ему покоя. Он расскажет ей все.Вот только она должна заработать каждое его слово.Как? Полюбить небо так же, как он!',
          pageCount: 359,
          imageSmall:
            'http://books.google.com/books/content?id=Ysk6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ysk6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 586,
          amount: 373.75,
          authorId: 76,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Нетворкинг для разведчиков. Как извлечь пользу из любого знакомства',
          description:
            'Разведчики-нелегалы, много лет проработавшие под глубоким прикрытием, делятся уникальным личным опытом работы с людьми. Эта книга призвана помочь читателям стать дизайнерами их собственного человеческого окружения и успешно использовать связи для достижения целей в жизни и бизнесе.Не ставя своей задачей сделать из читателя разведчика (хотя возможно кого-то и вдохновит!), авторы книги помогут научиться разбираться в людях и создавать долгосрочные продуктивные отношения. Они расскажут, как управлять собственной человеческой «экосистемой», в том числе:– как стратегически строить сеть контактов;– как эффективно заводить и развивать связи;– как систематически поднимать статус в обществе;– как быстро укрепить свою позицию в новой организации;– как создать круг надежных друзей и, возможно, найти спутника или спутницу.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 219,
          imageSmall:
            'http://books.google.com/books/content?id=zKFQEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zKFQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 399,
          amount: 436.25,
          authorId: 122,
          categoryId: 16,
          publisherId: 22,
        },
        {
          title: 'На крыльях Павшего Луча',
          description:
            'Что случится, если удивительный мир, полный тайн, загадок и невероятных интриг, станет игровым полем могущественных королей, сектантов и других сил? Сможет ли обычный клерик предотвратить угрозу, нависшую над его друзьями? Сможет ли девочка Миа разгадать тайну Пламенного Цветка, появляющегося по желанию обаятельного бельчонка-чуули? А главное – как соединятся нити истории, объединяющей людей, карликов, могучих хромлов и остальных народов Павшего Луча?',
          pageCount: 372,
          imageSmall:
            'http://books.google.com/books/content?id=b5bjCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=b5bjCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 764,
          amount: 1095,
          authorId: 126,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Папа',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 222,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 440,
          amount: 4488,
          authorId: 132,
          categoryId: 45,
          publisherId: 20,
        },
        {
          title: 'Катя едет в Сочи. И другие истории о двойниках',
          description:
            'Новый сборник прозы Анны Матвеевой «Катя едет в Сочи» состоит из девяти очень разных историй, объединённых рифмой судьбы. Невольными и не всегда очевидными двойниками друг другу становятся здесь художник и галерист, сын и мать, незнакомые женщины и знакомые только по переписке девочки... Это книга о том, что даже антиподы могут услышать и понять друг друга просто оттого, что способны испытывать те же чувства и слышать в громогласном потоке жизни родной голосСодержит нецензурную брань!',
          pageCount: 259,
          imageSmall:
            'http://books.google.com/books/content?id=KLA2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KLA2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 941,
          amount: 436.25,
          authorId: 133,
          categoryId: 1,
          publisherId: 28,
        },
        {
          title: 'Sistema russkago graždanskago prava',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 690,
          imageSmall:
            'http://books.google.com/books/content?id=BhlyfV_ZSQcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BhlyfV_ZSQcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 630,
          amount: 502,
          authorId: 127,
          categoryId: 137,
          publisherId: 21,
        },
        {
          title: '"Степенная книга", какь литературный памятник',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 166,
          imageSmall:
            'http://books.google.com/books/content?id=NpYtAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NpYtAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 258,
          amount: 559,
          authorId: 128,
          categoryId: 44,
          publisherId: 10,
        },
        {
          title: 'Милый друг',
          description:
            '«100 шедевров о любви» – уникальная серия издательства Стрельбицкого, в которую вошли лучшие произведения всех времен и народов о самом прекрасном и возвышенном чувстве – любви. «Милый друг» - один из самых известных романов выдающегося французского писателя Ги де Мопассана (франц. Guy de Maupassant, 1850-1893). *** Красавец Жорж Дюруа едва сводит концы с концами в городе развлечений – Париже. Внезапно, однако, он замечает, что пользуется чрезвычайной популярностью у жен высокопоставленных чиновников. Не обладающий иными талантами, кроме искусства очаровывать сердца, Дюруа начинает восхождение по карьерной лестнице, обнаруживая удивительную беспринципность... Завершающие главы романа рисуют Жоржа Дюруа на ступенях церкви Магдалины, где он, наследник огромного состояния, созерцает расстилающийся внизу Париж. В число других произведений Ги де Мопассана входят романы «Жизнь», «Монт-Ориоль», «Пьер и Жан», «Наше сердце», «Огонь желания» и «Чуждая душа». Ги де Мопассан – король скрытого психологизма и безоценочного реализма. Его чистый, краткий и строгий стиль являет разительный контраст с творчеством Бальзака и Золя.',
          pageCount: 998,
          imageSmall:
            'http://books.google.com/books/content?id=JCRIDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JCRIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 992,
          amount: 7,
          authorId: 129,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Вырулим! Книга открытий предпринимателя',
          description:
            '«Кажется, что "Вырулим!"– это советы, как найти выход, когда все разладилось. Но эта книга о другом.Для себя я давно решил, что не хочу просто выруливать. Я нацелен жить так, чтобы мне нравилось, что со мной происходит."Вырулим!"– книга о том, как смотреть по-другому на то, что уже есть в твоей жизни. Как собирать выгодные комбинации во времена высокой турбулентности. Как сдвинуться дальше, когда застрял.Я наблюдаю за крупными предпринимателями, как они строят системы и отношения, организуют свою жизнь."Большие люди"умеют видеть новое не только в неизведанном, но и в простом. Поэтому мой соавтор – Игорь Рыбаков.Бери наши открытия и делай свои!» Антон Писчиков.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 193,
          imageSmall:
            'http://books.google.com/books/content?id=UBOIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UBOIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 654,
          amount: 623.75,
          authorId: 130,
          categoryId: 16,
          publisherId: 29,
        },
        {
          title: 'Сподвижники мои как звезды...',
          description:
            'Это собрание преданий о сподвижниках Пророка Мухаммада, проникнутых мудростью и преклонением перед Аллахом и Его Посланником',
          pageCount: 472,
          imageSmall:
            'http://books.google.com/books/content?id=yCcqAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yCcqAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 260,
          amount: 3626,
          authorId: 509,
          categoryId: 8,
          publisherId: 47,
        },
        {
          title: 'От одного Зайца',
          description:
            'Хороших девочек всегда тянет к плохим парням. Но Рита Ромашина была уверена, что это точно ей не грозит. Особенно если речь идет о звезде физфака Артеме Зайце.Ее бесит этот жизнерадостный спортсмен, который, кажется, перепутал физический факультет с физкультурным. И уж точно она не намерена готовить с ним совместный проект.А что, если сделать жизнь Артема невыносимой, чтобы он сам отказался с ней работать?Рита задумала коварный план, только этот парень не так-то прост и тоже что-то затеял.',
          pageCount: 218,
          imageSmall:
            'http://books.google.com/books/content?id=bvOGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bvOGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 302,
          amount: 361.25,
          authorId: 106,
          categoryId: 40,
          publisherId: 4,
        },
        {
          title: 'Пост',
          description:
            'После короткой и яростной войны, в которой было использовано секретное оружие, от прежней России осталась лишь небольшая часть, которая называет себя Московской империей. Восточные границы её проходят всего в нескольких сотнях километров от столицы, по Волге – отравленной и зараженной, превратившейся в непреодолимую преграду. С самого Распада никто не приходил в Московию с той стороны моста через Волгу. Никогда – до этого дня...',
          pageCount: 260,
          imageSmall:
            'http://books.google.com/books/content?id=sCJoEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sCJoEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 828,
          amount: 559,
          authorId: 134,
          categoryId: 1,
          publisherId: 23,
        },
        {
          title: 'Чумные ночи',
          description:
            'Орхан Памук – самый известный турецкий писатель, лауреат Нобелевской премии по литературе. Его новая книга «Чумные ночи» — это историко-детективный роман, пронизанный атмосферой восточной сказки; это роман, сочетающий в себе самые противоречивые темы: любовь и политику, религию и чуму, Восток и Запад. «Чумные ночи» не только погружают читателя в далекое прошлое, но и беспощадно освещают день сегодняшний. Место действия книги — небольшой средиземноморский остров, на котором проживают как греческое (православное), так и турецкое (исламское) население. Спокойная жизнь райского уголка нарушается с приходом страшной болезни – чумы. Для ее подавления, а также с иной, секретной миссией на остров прибывает врач-эпидемиолог со своей женой, племянницей султана Абдулл-Хамида Второго. Однако далеко не все на острове готовы следовать предписаниям врача и карантинным мерам: ведь на все воля Аллаха и противиться этой воле может быть смертельно опасно… Впервые на русском!',
          pageCount: 494,
          imageSmall:
            'http://books.google.com/books/content?id=foVbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=foVbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 621,
          amount: 413,
          authorId: 135,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Супрасльскій Глаговѣщенскій монастырь',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 660,
          imageSmall:
            'http://books.google.com/books/content?id=1TRGAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1TRGAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 937,
          amount: 1257,
          authorId: 137,
          categoryId: 39,
          publisherId: 3,
        },
        {
          title: 'Крысиный остров и другие истории',
          description:
            'Ю Несбё, норвежский писатель и ведущий представитель северного нуара, не перестает удивлять. Ломая стереотипы, пренебрегая правилами жанра, он показывает человека так откровенно, как если бы мы сами смотрели в зеркало, боясь себе признаться: это я. «В моей голове нет и не будет никакой цензуры», — утверждает Несбё. Он никогда не раскрывает своих замыслов заранее, и до недавнего времени было известно лишь то, что писатель работает над двумя сборниками короткой прозы. В первый из них вошли семь криминальных историй, объединенных темой ревности. Во втором — Несбё обращается к теме гибели человечества. Наша цивилизация гибнет медленно, но неотвратимо, рушатся устои общества, люди теряют человеческий облик — но это слишком общие фразы для такого непредсказуемого, неоднозначного, парадоксального автора. Несбё, как никто другой, умеет маневрировать между темами, менять ракурс, он то перевоплощается в своих героев, то изучает их отстраненно, и в их поступках на фоне обыденности или, напротив, в совершенно фантастической ситуации проявляются роковые противоречия современного мировоззрения, моральный релятивизм, заводящий человечество в тупик самоуничтожения. Человеку свойственно ошибаться, но, пока он мечется между черным и белым на краю пропасти, у него есть шанс на спасение... Впервые на русском!',
          pageCount: 218,
          imageSmall:
            'http://books.google.com/books/content?id=xPJUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xPJUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 408,
          amount: 505,
          authorId: 111,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Будет что будет',
          description:
            'Непросто молодой женщине жить одной в большом городе, где не только соблазны, которые не интересны Дусе, красавице и умнице. В большом городе много плохих людей, и удача, когда есть кто-то, кто способен защитить в трудный момент.Вторая книга про Дусю.',
          pageCount: 205,
          imageSmall:
            'http://books.google.com/books/content?id=BWedDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BWedDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 523,
          amount: 225,
          authorId: 138,
          categoryId: 1,
          publisherId: 40,
        },
        {
          title: 'Голландский дом',
          description:
            'Новый роман американской писательницы Энн Пэтчетт напоминает сказку братьев Гримм, разросшуюся до масштабов семейного эпоса. История главных героев, Дэнни Конроя и его сестры Мэйв, охватывает всю вторую половину XX века, а их судьбы оказываются роковым образом переплетены с Голландским домом – особняком на востоке Пенсильвании, когда-то принадлежавшим разорившейся династии нидерландских магнатов Ванхубейков. Сам по себе Голландский дом не населен призраками, но каждый, кто переступает его порог, в каком-то смысле становится призраком дома – куда бы он потом ни отправился, где бы впоследствии ни жил, повсюду носит с собой этот образ.У Дэнни и Мэйв только это и есть: безвременно ушедший из жизни отец, давным-давно превратившаяся в воспоминание мать, будто бы вышедшая из ночного кошмара мачеха и зловещий фамильный особняк. А также взрослая жизнь, которая все никак не начнется: проклятие детства, печать сиротства, невозможность разорвать однажды сформировавшиеся узы. «Голландский дом» – история о победе любви над злом. Победе, замешенной на потерях и во многом неочевидной, потому что в конечном счете читателю предстоит разобраться самому, на чьей он стороне и был ли здесь злодей. И если был – то кто?',
          pageCount: 326,
          imageSmall:
            'http://books.google.com/books/content?id=dIlJEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dIlJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 68,
          amount: 498.75,
          authorId: 141,
          categoryId: 1,
          publisherId: 30,
        },
        {
          title: 'Французская няня',
          description:
            'Париж, 1830-е годы. Девятилетняя Софи живёт в нищете с тяжело больной мамой. Кое-как они перебиваются шитьем белья на заказ. Однажды, чтобы помочь матери, Софи берется отнести сшитые сорочки в богатый район Парижа. Так она попадает в дом знаменитой балерины Селин Варанс. Став воспитанницей балерины, Софи знакомится с ее окружением: старым аристократом и революционером Гражданином Маркизом и мальчиком-рабом Туссеном, привезенным из колоний. А ещё Софи становится няней и ангелом-хранителем маленькой дочери Селин, героиней приключений, за которыми мы будем следить, затаив дыхание. «Французская няня» — роман знаменитой итальянской писательницы Бьянки Питцорно, изящно вплетенный в канву произведения «Джейн Эйр» и написанный в лучших традициях классического романа, полного оригинальных отсылок к произведениям культуры и искусства XIX века. История создания «Французской няни» Бьянка Питцорно задумала свой роман «Французская няня» как своего рода «ответ» Шарлотте Бронте и ее «Джейн Эйр». Но у писательницы не было цели посоперничать с Бронте, напротив, она очень любит ее творчество и глубоко уважает автора «Джейн Эйр». Также Бьянка Питцорно захотела вывести вперед женщин из разных социальных классов, но, чтобы все они, будь то маркизы, актрисы, балерины, гувернантки, были готовы бросить вызов миру и столкнуться с испытаниями, но при этом остаться собой, сознательно отстаивать свои права и открыто стремиться к эмансипации. При помощи многочисленных исторических и культурных отсылок вкупе с литературной стилизацией писательница создает реалистичный роман, в котором вымышленные персонажи ходят по одним и тем же улицам и сидят в одних и тех же гостиных, что и реальные личности вроде Виктора Гюго, Александра Дюма и Филиппо Тальони. Вот что говорит сама писательница о создании книги: «Первая и главная благодарность — всем произведениям Шарлотты Бронте, прежде всего романам «Джейн Эйр» и «Городок» (1853), в которых писательница высказывает осуждающее отношение к «фальшивому, легкомысленному и поверхностному» характеру француженок, а также к взрослым, которые чересчур умиляются детям. Питая слабость к детям и испытывая чувство восхищения характером и культурой французов, особенно XIX века, я попыталась ответить на это двойное осуждение».',
          pageCount: 620,
          imageSmall:
            'http://books.google.com/books/content?id=AW4jEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=AW4jEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 190,
          amount: 400,
          authorId: 139,
          categoryId: 14,
          publisherId: 38,
        },
        {
          title: 'Knizhnoe delo',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 426,
          imageSmall:
            'http://books.google.com/books/content?id=4o0gAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4o0gAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 925,
          amount: 614,
          authorId: 9,
          categoryId: 46,
          publisherId: 9,
        },
        {
          title: 'Инвестор за выходные: Руководство по созданию пассивного дохода',
          description:
            'Вокруг инвестиций много мифов. Одни говорят, что это слишком сложно и 90% инвесторов теряют деньги. Другие убеждают в обратном: инвестировать можно безопасно, никакие знания не нужны, а начать стоило еще вчера. Правда, как всегда, посередине: чтобы не прогореть в самом начале, стоит познакомиться с основными правилами в мире инвестиций. Но это действительно несложно — вы справитесь за несколько дней. Автор книги «Инвестор за выходные» Семён Кибало к 30 годам добился полной финансовой независимости благодаря пассивному инвестированию. С помощью понятных графиков и таблиц он объясняет, как инвестировать на российском рынке, какие существуют активы и рыночные инструменты, как грамотно собрать инвестпортфель и какие опасности подстерегают пассивного инвестора. Автор утверждает, что для первого шага достаточно 1000 рублей, и предлагает читателям убедиться в этом самостоятельно. Книга рассчитана на всех, кто задумывается о завтрашнем дне и хочет обеспечить себе в долгосрочной перспективе безбедное существование.',
          pageCount: 329,
          imageSmall:
            'http://books.google.com/books/content?id=Llo9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Llo9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 488,
          amount: 549,
          authorId: 110,
          categoryId: 10,
          publisherId: 16,
        },
        {
          title: 'Russīi͡a Knigi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 492,
          imageSmall:
            'http://books.google.com/books/content?id=pCbsAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=pCbsAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 657,
          amount: 4112,
          authorId: 140,
          categoryId: 27,
          publisherId: 1,
        },
        {
          title: 'Комната бабочек',
          description:
            'Поузи живет в старинном доме. Она провела там прекрасное детство. Но годы идут, и теперь ей предстоит принять мучительное решение – продать Адмирал-хаус и избавиться от всех связанных с ним воспоминаний.Но Адмирал-хаус – это история семьи длиною в целый век, история драматичной любви и ее печальных последствий, память о войне и ошибках нескольких поколений.Поузи колеблется, когда перед ней возникает самое желанное, но и опасное видение – Фредди, ее первая любовь, человек, который бросил ее с разбитым сердцем много лет назад. У него припасена для Поузи разрушительная тайна. Тайна, связанная с ее детством, которая изменит все.Люсинда Райли родилась в Ирландии. Она прославилась как актриса театра, но ее жизнь резко изменилась после публикации дебютного романа. Это стало настоящим событием в Великобритании. На сегодняшний день книги Люсинды Райли переведены более чем на 30 языков и изданы в 45 странах. Совокупный тираж превысил 30 млн экземпляров.Люсинда Райли живет с мужем и четырьмя детьми в Ирландии и Англии. Она вдохновляется окружающим миром – зелеными лугами, звездным небом и морскими просторами. Это мы видим в ее романах, где герои черпают силы из повседневного волшебства, что происходит вокруг нас.',
          pageCount: 614,
          imageSmall:
            'http://books.google.com/books/content?id=p0o_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=p0o_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 676,
          amount: 461.25,
          authorId: 143,
          categoryId: 1,
          publisherId: 35,
        },
        {
          title: 'Три дня Индиго',
          description:
            '«Три дня Индиго». Второй роман из цикла «Изменённые», продолжение романа «Семь дней до Мегиддо».Прошло всего две недели с того момента, как Максим Воронцов стал Призванным и защитил Гнездо Изменённых. Но события совершают новый и неожиданный поворот. На этот раз помощь Максима требуется могущественным и таинственным Продавцам... а наградой за эту помощь может стать то, чего он хочет больше всего на свете.И этот путь уведет его далеко за пределы Москвы...',
          pageCount: 380,
          imageSmall:
            'http://books.google.com/books/content?id=e3tSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=e3tSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 491,
          amount: 523.75,
          authorId: 144,
          categoryId: 1,
          publisherId: 18,
        },
        {
          title: 'Введение в литургическое богословие',
          description:
            'В 2021 году отмечается столетие со дня рождения о. Александра Шмемана (1921-1983), одного из тех церковных мыслителей, кому удалось своим трудом – и исследовательским, и публицистическим, и педагогическим – изменить лицо и характер православного богословия ушедшего столетия. Настоящая книга представляет собой фундамент мысли отца Александра, именно в ней он начал развивать свое богословие Литургии. Его главная богословская интуиция – увидеть и понять церковное богослужение, и прежде всего Божественную Литургию, как непосредственное явление Церкви, воплощение ее глубинной сущности. В своем труде отец Александр наглядно показывает уникальность православной богослужебной традиции, синтезирующей различные формы богопочитания и совершенно по-новому раскрывающей возможности подлинного Богообщения.В формате PDF A4 сохранен издательский макет.',
          pageCount: 332,
          imageSmall:
            'http://books.google.com/books/content?id=SWZOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SWZOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 69,
          amount: 450,
          authorId: 142,
          categoryId: 8,
          publisherId: 15,
        },
        {
          title: 'T͡Serkovnyĭ vi͡estnik',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1138,
          imageSmall:
            'http://books.google.com/books/content?id=2YY-AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2YY-AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 622,
          amount: 588,
          authorId: 61,
          categoryId: 18,
          publisherId: 27,
        },
        {
          title: 'Стекло старьёвщика',
          description:
            'Третьеклассница Настя со смешным прозвищем Тюха живет в доме, затерянном в старых московских переулках. Во дворе, за кирпичной стеной фабрики есть другие миры, где иначе идет время и пространство меняет свои свойства. Попасть туда может не всякий, но Тюхе достается волшебный дар переходить в соседние миры, и там ей рады: ведь она умеет дружить и приносит удачу. И все же главная битва с силами зла происходит как раз в старом московском дворике. Чтение этой увлекательной книги захватывает и не отпускает до последней страницы: динамичное повествование, яркая фантазия автора, невероятные приключения героев – все воспринимается на одном дыхании, как в замечательном кино. Хорошо, что в серии «Миры за стеной» будут и другие истории о Тюхе и ее друзьях.В формате PDF A4 сохранен издательский макет.',
          pageCount: 138,
          imageSmall:
            'http://books.google.com/books/content?id=GR1OEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=GR1OEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 362,
          amount: 420,
          authorId: 150,
          categoryId: 28,
          publisherId: 11,
        },
        {
          title: 'Синдром Дездемоны',
          description:
            'Даша всегда думала, что у ее сестры идеальный брак. Но вдруг она узнала, что Светин муж Никита завел любовницу...Валентина считала, что Никита обязан обеспечивать им с дочерью красивую жизнь, и ни в чем себе не отказывала. Она не подозревала, как ужасно все может закончиться...Полковник Земцов, начальник отдела по расследованию убийств, и автор детективов Масленников, бывший эксперт-криминалист, не в силах оставаться в стороне, если творится явная несправедливость...Когда внешне благополучная жизнь начинает рушиться и одна за другой валятся беды, важно понять, что все в мире взаимосвязано, и найти того, кто за этим стоит...',
          pageCount: 233,
          imageSmall:
            'http://books.google.com/books/content?id=JohFEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JohFEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 852,
          amount: 223.75,
          authorId: 185,
          categoryId: 1,
          publisherId: 28,
        },
        {
          title: 'Страшные истории для маленьких лисят',
          description:
            'Лес Оленьего Рога только на первый взгляд кажется идеальным местом для лисёнышей – они родились и живут здесь в своих норах вместе с братьями, сёстрами и мамой. Но однажды меняется всё.Мия и Юли – каждый из них теряет свои семьи, остаётся в одиночестве и обнаруживает вокруг мир, полный злобных чудовищ, опасностей и невероятных существ, хитрых и коварных.Устраивайтесь поудобнее и выключайте яркий свет. Старая лисица расскажет вам жуткие и завораживающие истории.Для младшего и среднего школьного возраста.В формате PDF A4 сохранен издательский макет.',
          pageCount: 299,
          imageSmall:
            'http://books.google.com/books/content?id=ax1GEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ax1GEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 517,
          amount: 561.25,
          authorId: 153,
          categoryId: 28,
          publisherId: 25,
        },
        {
          title: 'Обстоятельное библіографическое описаніе рѣдких и замѣчательных книг',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 334,
          imageSmall:
            'http://books.google.com/books/content?id=r0YxAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=r0YxAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 143,
          amount: 1692,
          authorId: 146,
          categoryId: 47,
          publisherId: 42,
        },
        {
          title: 'ЖД',
          description:
            '«ЖД» — загадка, начиная с названия и заканчивая ожиданием начала начала. «Это у вас говорят — конец, у нас нет такого слова. У нас говорят: начнется начало». Пророчества о рождении антихриста, сказочные птицы, восставшая земля, правота каждого героя... И — война, а «с войны не возвращаются. Выжженный человек приходит на выжженную землю, и все надо начинать с нуля». Ибо — все по кругу, «все у нас кольцо»... И — любовь: «любовь и есть это знание о последних вещах, и только те крепко любят друг друга, кто понимают эти вещи и понимают, что другой понимает»...',
          pageCount: 985,
          imageSmall:
            'http://books.google.com/books/content?id=9b73EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9b73EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 82,
          amount: 919,
          authorId: 148,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Мальчик. Роман в воспоминаниях, роман о любви, петербургский роман в шести каналах и реках',
          description:
            'Настоящее издание возвращает читателю пропущенный шедевр русской прозы XX века. Написанный в 1970–1980-е, изданный в начале 1990-х, роман «Мальчик» остался почти незамеченным в потоке возвращенной литературы тех лет. Через без малого тридцать лет он сам становится возвращенной литературой, чтобы занять принадлежащее ему по праву место среди лучших романов, написанных по-русски в прошлом столетии.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 648,
          imageSmall:
            'http://books.google.com/books/content?id=6KySEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=6KySEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 312,
          amount: 548.75,
          authorId: 147,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Trudy',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 400,
          imageSmall:
            'http://books.google.com/books/content?id=TzTuAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=TzTuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 291,
          amount: 2589,
          authorId: 149,
          categoryId: 48,
          publisherId: 44,
        },
        {
          title: 'Код: тайный язык информатики',
          description:
            'Книга «Код» представляет собой увлекательное путешествие в прошлое — мир электрических устройств и телеграфных машин. Знакомство с праобразами первых компьютеров позволит читателю узнать о том, как работают современные электронные устройства.',
          pageCount: 449,
          imageSmall:
            'http://books.google.com/books/content?id=fpnGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fpnGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 283,
          amount: 399,
          authorId: 155,
          categoryId: 30,
          publisherId: 18,
        },
        {
          title: 'Словарь-справочник "Слова о полку Игореве."',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 288,
          imageSmall:
            'http://books.google.com/books/content?id=nqIjAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nqIjAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 709,
          amount: 3979,
          authorId: 152,
          categoryId: 49,
          publisherId: 1,
        },
        {
          title: 'Личная эффективность',
          description:
            'О чем книга «Личная эффективность» Harvard Business Review — ведущий мировой деловой журнал с многолетней историей. В очередной книге серии «Harvard Business Review: 10 лучших статей» собраны самые востребованные и полезные работы по личной эффективности за всю историю журнала. Как определить свои сильные и слабые стороны? Как оптимизировать время и не перегореть на работе? В чем секрет эффективного взаимодействия с начальством и подчиненными? Как построить карьеру и не потерять себя по ходу продвижения по карьерной лестнице? Эти и другие вопросы, столь актуальные для повышения личной эффективности, подробно рассматриваются авторами сборника. Почему книга «Личная эффективность» достойна прочтения Для успешной работы в любой сфере экономики очень важно разбираться в своих сильных сторонах, четко планировать рабочий день, разграничивать свои и чужие обязанности, максимально органично сочетать личную и профессиональную жизнь. Благодаря советам экспертов в области развития карьеры, тайм-менеджмента и планирования вы начнете лучше разбираться в этой важной теме. Лучшие статьи о личной эффективности в одном месте — больше не надо собирать подборку Harvard Business Review и читать краткие содержания. Кто авторы Коллектив Harvard Business Review — уникальное собрание таких ярких умов современности, как Клэйтон Кристенсен, Дэниел Гоулман, Ричард Бояцис и др.',
          pageCount: 218,
          imageSmall:
            'http://books.google.com/books/content?id=3j6wDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3j6wDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 149,
          amount: 499,
          authorId: 156,
          categoryId: 10,
          publisherId: 18,
        },
        {
          title: 'В мире книг',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 514,
          imageSmall:
            'http://books.google.com/books/content?id=r-oiAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=r-oiAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 49,
          amount: 912,
          authorId: 240,
          categoryId: 41,
          publisherId: 29,
        },
        {
          title: 'Приближается Христос. Рождественские письма',
          description:
            'Новая книга архимандрита Саввы (Мажуко) – это сборник писем, написанных к читателю Рождественским постом. Самое темное время года, и снова ограничения, мучения и традиционные вопрошания: «чего нельзя православным»? А ведь постовая формула, как пишет отец Савва, проста: «пост = сдержанность + скромность», главное духовное упражнение этих недель – созерцание приближающегося к тебе Христа. Недаром задолго до Рождества в храме начинают петь: «Христос с небес – встречайте!»',
          pageCount: 155,
          imageSmall:
            'http://books.google.com/books/content?id=TGZOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=TGZOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 534,
          amount: 375,
          authorId: 162,
          categoryId: 8,
          publisherId: 4,
        },
        {
          title: 'Детективы-футболисты. Загадка спящих арбитров',
          description:
            'Сото Альто – не просто футбольная команда колледжа. Они заключили пакт: ничто и никто никогда их не разлучит. Они всегда будут играть вместе. Поэтому когда произошло то, что произошло, у них не было выбора, кроме как начать немедленно действовать.Роберто Сантьяго работал сценаристом на телевидении, редактором и продюсером.Серия про детективов-футболистов стала настоящим культурным феноменом, это одни из самых продаваемых книг в Испании, они переведены на разные языки мира, а в 2018 году даже были экранизированы.Для младшего школьного возраста.В формате PDF A4 сохранен издательский макет.',
          pageCount: 266,
          imageSmall:
            'http://books.google.com/books/content?id=fRQgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fRQgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 800,
          amount: 523.75,
          authorId: 161,
          categoryId: 28,
          publisherId: 38,
        },
        {
          title: 'Источники осознанной жизни. Преврати проблемы в ресурсы',
          description:
            'Эта книга – для тех, кто хотел бы научиться находить в кризисах потенциал, уметь превращать проблемы в задачи, видеть в самых разных ситуациях источники сил и ресурсов. Автор – ученица Виктора Франкла, психотерапевт с огромным опытом – предлагает черпать вдохновение и силы из нескольких замечательных источников. Смысл, тишина, юмор, вера, литература... И даже кризис может быть таким источником – если его «правильно приготовить». Каждая жизнь, убеждена автор, имеет в себе огромный потенциал. Каждую судьбу реально изменить. Замкнутый круг можно разорвать! Опыт Элизабет Лукас и истории людей, которые она рассказывает, свидетельствуют об этом.В формате a4.pdf сохранен издательский макет.',
          pageCount: 164,
          imageSmall:
            'http://books.google.com/books/content?id=41YUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=41YUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 10,
          amount: 361.25,
          authorId: 118,
          categoryId: 16,
          publisherId: 3,
        },
        {
          title: 'Будущее',
          description:
            'Utopisk roman. Velkommen til fremtiden, hvor alle er lykkelige. Allerede i vores levetid vil man gøre en opdagelse, der vil gøre det muligt for folk at forblive ung for evigt',
          pageCount: 482,
          imageSmall:
            'http://books.google.com/books/content?id=v1ogIh8l_PUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=v1ogIh8l_PUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 160,
          amount: 3187,
          authorId: 154,
          categoryId: 50,
          publisherId: 42,
        },
        {
          title: 'Черновик',
          description:
            'В твоей квартире живут чужие люди.Твое место на работе занято другим...Тебя не узнают ни друзья, ни любимая девушка...Тебя стирают из этого мира.Кто?',
          pageCount: 377,
          imageSmall:
            'http://books.google.com/books/content?id=xKuGJe27BCIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xKuGJe27BCIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 599,
          amount: 436.25,
          authorId: 144,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Сиртаки по-японски: о производственной системе Тойоты и не только',
          description:
            'Этот увлекательный бизнес-роман, написанный доступным языком, будет полезен как менеджерам, так и рядовым сотрудникам',
          pageCount: 194,
          imageSmall:
            'http://books.google.com/books/content?id=SGjKp6R2WaAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SGjKp6R2WaAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 222,
          amount: 1935,
          authorId: 166,
          categoryId: 53,
          publisherId: 38,
        },
        {
          title: 'Мисс Билли',
          description:
            'Сентиментальная трилогия американской писательницы Элинор Портер (1868—1920) рассказывает о чудесной девушке с добрым сердцем и открытым характером, готовой помогать всем на свете, не жалея времени и сил. Странным именем она обязана отцу – тот назвал девочку в честь своего лучшего друга Уильяма (уменьшительное – Билли). «Мужское» имя нередко ставит окружающих в тупик и становится причиной ряда нелепых ситуаций.В первой части («Мисс Билли») осиротевшая девочка отправляется из американской глубинки в Бостон – в поисках дома и новой семьи. Живая и непосредственная провинциалка нарушает размеренную жизнь братьев Хеншоу, старший из которых является тем самым тезкой Билли.Вторая часть («Мисс Билли принимает решение») повествует о жизни повзрослевшей девушки. Билли упорно ищет свое счастье, и оно находится – увы, не без курьезов.В последней части трилогии («Мисс Билли замужем»), как и следует из ее названия, речь идет о семейной жизни Билли – о первых трудностях и их преодолении, о счастье материнства и верной дружбе.Элинор Портер хорошо известна российским читателям по книгам о Поллианне.',
          pageCount: 636,
          imageSmall:
            'http://books.google.com/books/content?id=4O84EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4O84EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 918,
          amount: 2651,
          authorId: 536,
          categoryId: 1,
          publisherId: 46,
        },
        {
          title: 'Остроумие мира',
          description:
            'Эта книга — своего рода энциклопедия остроумных высказываний знаменитых людей, собрание исторических анекдотов, веселых былей и преданий. В книге представлены образцы остроумия древних греков и древних римлян, восточных мудрецов (Индии, Китая, Турции), западных мыслителей, поэтов и писателей (от раннего средневековья до двадцатого века), русских царей, шутов, государственных деятелей, актеров (от петровских времен до наших дней).',
          pageCount: 304,
          imageSmall:
            'http://books.google.com/books/content?id=Vg5dXeGlonYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Vg5dXeGlonYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 447,
          amount: 181.82,
          authorId: 171,
          categoryId: 40,
          publisherId: 44,
        },
        {
          title: 'Дни одиночества',
          description:
            '“Дни одиночества” – это тонкая и психологически выверенная проза, итальянский роман о женщине, которую бросил муж, оставив ее с двумя детьми и собакой. Ольга, главная героиня, она же и рассказчица, проходит через тяжелейшее испытание, едва не скатывается от горя и унижения в безумие, но удерживается на краю пропасти и продолжает жить – и любить. Создавший образ этой женщины автор, Элена Ферранте, – личность загадочная, предпочитающая оставаться в тени своих книг. Неизвестно даже, пользуется ли она псевдонимом или пишет под собственным именем. Ее романы переведены на 40 языков, и в 2016 году она вошла в список 100 самых влиятельных людей мира по версии еженедельника Time.',
          pageCount: 202,
          imageSmall:
            'http://books.google.com/books/content?id=_lHGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_lHGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 378,
          amount: 4624,
          authorId: 579,
          categoryId: 1,
          publisherId: 34,
        },
        {
          title: 'Сороки-убийцы',
          description:
            'Редактор Сьюзен Райленд читает рукопись детективного романа, который с нетерпением ожидают поклонники популярной серии, и обнаруживает, что там недостает самого интересного — развязки. Сьюзен начинает поиски пропавших страниц и попутно фантазирует, пытаясь отгадать, кто же является убийцей в романе, составляет список подозреваемых… Известие о смерти Алана Конвея, автора того самого детектива, застает ее врасплох. Он покончил с собой? Стал жертвой несчастного случая? Но Сьюзен не зря двадцать лет редактировала книги криминального жанра, дедуктивный метод знаком ей не понаслышке. Сопоставив некоторые факты, она приходит к выводу, что произошло замаскированное убийство, и с риском для жизни начинает распутывать этот детективный клубок... Роман в романе, литературная игра, полная загадок и мистификаций. Впервые на русском!',
          pageCount: 333,
          imageSmall:
            'http://books.google.com/books/content?id=2nJJEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2nJJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 165,
          amount: 413,
          authorId: 163,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Война Калибана',
          description:
            'Спустя полтора года после событий на Эросе Солнечная система все еще находится в опасности. Благодаря детективу Миллеру и экипажу Холдена инопланетная протомолекула вместо Земли рухнула на Венеру, но это не покончило с нею. Чужой программный вирус продолжает действовать под густой облачной оболочкой планеты и строит из нее нечто непонятное и по всей видимости очень жуткое и опасное. Вдобавок к этому появилась новая проблема. На спутнике Юпитера Ганимеде некое существо с легкостью уничтожило целый отряд марсианских солдат. Марс винит в случившемся Землю, Земля винит Марс – хрупкий мир снова даёт трещину...А из детского сада похищена дочь ученого-ботаника Праксидика Менга. Безутешный отец обращается за помощью в поисках пропавшего ребенка к Джиму Холдену – капитану ракетоносца «Росинант», занятого от имени Альянса Внешних Планет, благородным делом по борьбе с космическими пиратами. Во время поисков украденной девочки экипаж корабля неожиданно обнаруживает, что в очередной раз судьба всего человечества оказывается в их руках.',
          pageCount: 710,
          imageSmall:
            'http://books.google.com/books/content?id=osk6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=osk6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 247,
          amount: 398.75,
          authorId: 160,
          categoryId: 1,
          publisherId: 31,
        },
        {
          title: 'Врата Абаддона',
          description:
            'Мирное будущее Солнечной системы снова в опасности. Виной всему инопланетная протомолекула, которая уже уничтожила население Венеры и продолжает быстро развиваться, образовав на орбите Урана гигантское Кольцо – зловещий портал, ведущий в беззвездную тьму. Ракетоносец «Росинант», под командованием Джима Холдена, в составе обширной флотилии научных и военных судов, направляются к Кольцу, чтобы исследовать таинственный объект. И в то время, как посланники человечества пытаются понять, открывает ли Кольцо новые возможности, или таит в себе скрытую угрозу, Холдену предстоит встретиться с куда более серьезной опасностью... Не пропустите третий роман из цикла «Пространство» /The Expanse» – вершины современной космической фантастики.',
          pageCount: 655,
          imageSmall:
            'http://books.google.com/books/content?id=Ccs8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ccs8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 929,
          amount: 398.75,
          authorId: 160,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title: 'Пробуждение Левиафана',
          description:
            'В недалеком будущем, когда сбылась многовековая мечта человечества и Солнечная система была успешно колонизирована, космический корабль «Кентербери», доставляющий лед от колец Сатурна к Поясу Астероида, получает сигнал бедствия с корабля «Скопули». Старший помощник капитана Джим Холден и члены его экипажа незамедлительно отправляются на помощь, но не обнаруживают на борту «Скопули» ни одной живой души. Более того, теперь и им самим грозит смертельная опасность и благородная миссия по спасению превращается в самую настоящую гонку на выживание.В 2015 году на канале Syfy вышел фантастический телесериал «Пространство» (The Expanse), который сразу же стал мегапопулярным среди зрителей и оправдал самые смелые ожидания его создателей. Львиной долей успеха телесериал обязан одноименному книжному циклу, который лёг в его основу. «Пробуждение Левиафана» – это первая книга книжного цикла, которая по мнению критиков во многом даже превосходит своего «экранного» собрата.',
          pageCount: 721,
          imageSmall:
            'http://books.google.com/books/content?id=QG04EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QG04EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 355,
          amount: 398.75,
          authorId: 160,
          categoryId: 1,
          publisherId: 9,
        },
        {
          title: 'Пожар Сиболы',
          description:
            'Межзвездный портал в тысячу новых миров открыт. Человечество, воодушевленное новыми невиданными возможностями, рвется к звездам и заселяет чужие миры. В разгар кровопролитных космических сражений за ресурсы новых планет, поселенцы сталкиваются с остатками древней могущественной цивилизации на далекой планете Илос. Именно на ней разгорается настоящая война, грозящая распространиться до самой Земли. Для капитана Джеймса Холдена и его команды, которым поручено отправиться на планету и остановить кровопролитие, наступают непростые времена. Ведь то, что уничтожило некогда великую цивилизацию, обитавшую на Илосе, всё еще находится там...«Пожар Сиболы» – это четвертый роман из цикла «Пространство» / The Expanse – вершины современной космической фантастики.',
          pageCount: 710,
          imageSmall:
            'http://books.google.com/books/content?id=Ldo_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ldo_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 491,
          amount: 398.75,
          authorId: 160,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Ясно, понятно: Как доносить мысли и убеждать людей с помощью слов',
          description:
            'Эта книга о правильной и понятной коммуникации: как с помощью слов доносить свои мысли и влиять на людей. Максим Ильяхов развивает тему, затронутую в бестселлере «Пиши, сокращай». Вы узнаете, как привлечь внимание читателей, как помочь им понять и принять точку зрения автора, как увлекательно и доступно раскрыть любую тему, даже самую сложную. Вы найдете в книге более 50 инструментов улучшения текста. В разделе «Контекст» автор покажет, как справиться с предвзятостью читателей и настроить их на верное восприятие информации. В разделе «Интерес» — как превратить скучный текст в увлекательный, не меняя его содержания. Раздел «Текст» посвящен использованию примеров, антипримеров, аналогий, метафор, сюжетности и слоганов — тому, что поможет адресату правильно понять написанное вами. В разделе «Подача» представлены инструменты мгновенного воздействия: как донести главное заголовком, схемой или фотографией. Максим Ильяхов рассказывает о создании сильного текста, подкрепляя теорию примерами из собственной практики.',
          pageCount: 583,
          imageSmall:
            'http://books.google.com/books/content?id=t-4QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=t-4QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 514,
          amount: 549,
          authorId: 119,
          categoryId: 10,
          publisherId: 47,
        },
        {
          title: 'Matematika v shkole',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 612,
          imageSmall:
            'http://books.google.com/books/content?id=L5fxAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L5fxAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 983,
          amount: 2478,
          authorId: 354,
          categoryId: 109,
          publisherId: 34,
        },
        {
          title: 'Письма до полуночи',
          description:
            'Старшеклассницы Ана и Таня дружат с детства.Наступает момент, когда подростковые проблемы перерастают во взрослые... Ана ломает голову над загадочным преступлением сорокапятилетней давности, а Тане не дает покоя странная ссора, свидетельницей которой она стала на вписке. Смогут ли девушки разобраться и найти себя?Тем временем их класс медленно распадается под давлением страшной тайны.',
          pageCount: 366,
          imageSmall:
            'http://books.google.com/books/content?id=4onHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4onHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 511,
          amount: 1309,
          authorId: 177,
          categoryId: 1,
          publisherId: 28,
        },
        {
          title: 'Багровая книга',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 280,
          imageSmall:
            'http://books.google.com/books/content?id=nopNq20SuIIC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nopNq20SuIIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 606,
          amount: 2868,
          authorId: 164,
          categoryId: 31,
          publisherId: 7,
        },
        {
          title: 'Пьеса «Безумец и Доктор». Белая книга',
          description:
            'Когда ты безумец, и все об этом знают, а сможет справиться с ним молоденькая девушка-доктор? Именно это мы и узнаем в пьесе. Но суть каждой книги намного глубже, у каждого есть право выбора. А каждый ли человек умеет быть счастливым? Или проще жить по обстоятельствам?',
          pageCount: 812,
          imageSmall:
            'http://books.google.com/books/content?id=EYTVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EYTVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 21,
          amount: 25,
          authorId: 165,
          categoryId: 51,
          publisherId: 1,
        },
        {
          title: 'Дочь лжеца',
          description:
            'Выбор Американской библиотечной ассоциации в категории «Молодым читателям».Здесь Внешний мир нас не достанет. Ограда нас защитит. Нужно лишь оставаться на правильной стороне. Семнадцатилетняя Пайпер знает, что ее отец – Пророк. Непогрешимый. Избранный. Вся ее жизнь крутится вокруг него. Но в один жуткий день все меняется: правительство разлучает ее с родными. Теперь Пайпер живет на улице. Среди чужих. Злые люди вокруг говорят, что Пайпер украли. Они говорят, что ее отец на самом деле преступник. Но Пайпер знает правду. Она попробует сбежать.«Захватывающе и убедительно. Не могла оторваться до последней страницы». – Люси Кристофер, автор романа «Взаперти»«Петерсон использует собственный опыт пребывания в секте, чтобы воплотить историю Пайпер в жизнь. Это помогает создать ей богатое, многослойное повествование о любви, потерях и борьбе за то, чтобы снова стать собой». – BooklistМеган Кули Петерсон – американская писательница и редактор. В подростковом возрасте Меган была частью Культа Судного дня. Этот опыт помог ей в написании «Дочери лжеца», ее дебютного Young Adult романа. Также Меган является автором более 80 научно-популярных книг для детей на самые разные темы.',
          pageCount: 297,
          imageSmall:
            'http://books.google.com/books/content?id=ra5jEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ra5jEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 279,
          amount: 336.25,
          authorId: 167,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Воображая город',
          description:
            'Внутри устоявшегося языка описания, которым пользуются современные урбанисты и социологи, сформировались определенные модели мышления о городе — иными словами, концептуализации. Сегодня понятия, составляющие их фундамент, и сами модели мышления переживают период смысловой «инфляции» и остро нуждаются в серьезной рефлексии. Эта книга о таких концептуализациях: об истории их возникновения и противостояния, о философских основаниях и попытках воплотить их в жизнь. В своем исследовании Виктор Вахштайн показывает, как идеи «локального сообщества», «городской повседневности», «территориального контроля», «общественного пространства» и «социальной сегрегации» закреплялись в языке социологов, архитекторов и планировщиков, как из категорий познания превращались в инструменты управления. Теория концептуализации обнаруживает в хаотичном многообразии современных мегаполисов следы созданных исследовательским воображением утопических городов — от Бурдьеполиса до Сьюдад Деланды. Виктор Вахштайн — кандидат социологических наук, MA in sociology Манчестерского университета, декан факультета социальных наук Московской высшей школы социальных и экономических наук («Шанинки»), декан философско-социологического факультета РАНХиГС.',
          pageCount: 786,
          imageSmall:
            'http://books.google.com/books/content?id=DthWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DthWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 159,
          amount: 439,
          authorId: 168,
          categoryId: 54,
          publisherId: 23,
        },
        {
          title:
            'Труды перваго Всероссійскаго съѣзда по библіотечному дѣлу, состоявшагося в С.-Петербургѣ с 1-го по 7-ое іюня 1911 г',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 686,
          imageSmall:
            'http://books.google.com/books/content?id=krYlAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=krYlAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 426,
          amount: 4325,
          authorId: 484,
          categoryId: 52,
          publisherId: 26,
        },
        {
          title: 'Присвоение пространства',
          description:
            'В начале 1990-х годов Илья Кочергин решился на своеобразный биографический эксперимент: оставил учебу в Институте Стран Азии и Африки, уехал из Москвы и отправился путешествовать по Сибири. Несмотря на то, что Кочергин все же вернулся в Москву, эта авантюра оставила в судьбе писателя важный след: впечатление от жизни среди мистических алтайских гор стали частью его художественного мира. Опыт пребывания за пределами городской цивилизации снабдил Кочергина материалом, повлиял на его личные внутренние установки, художественный метод и выбор проблематики. В текстах, вошедших в книгу «Присвоение пространства», Илья Кочергин рассказывает о возвращении на Алтай и о строительстве собственного дома в Рязанской области. Позиция, с которой автор описывает пейзажи южной Сибири и средней полосы, уникальна: среди них он одновременно свой, «вжившийся» или «вживающийся» в эти пейзажи, и чужой, принадлежащий к большому городу. Такой ракурс позволяет увидеть в этих местах и историях их обитателей что-то особенно важное и пронзительное. Стилистически текст балансирует между публицистической ясностью и поэтичностью: так внутри книги создается динамика, которая помогает органично соединить автобиографический нарратив с актуальным размышлением о границах, которые современная цивилизация установила между человеком и природой.',
          pageCount: 203,
          imageSmall:
            'http://books.google.com/books/content?id=NthWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NthWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 213,
          amount: 239,
          authorId: 171,
          categoryId: 40,
          publisherId: 34,
        },
        {
          title: 'У Великой реки. Битва',
          description:
            'Если уж влип в историю, надо все же участвовать в ней до конца. И лицо сохранить, и вообще интересно самому, куда судьба приведет, да и компенсировать понесенные расходы желательно. И с такой вот прозаической мотивацией бывший драгунский унтер, а ныне охотник на нечисть, нежить и прочих вредных тварей Александр Волков с новыми друзьями идет до конца в своем невероятном путешествии.',
          pageCount: 484,
          imageSmall:
            'http://books.google.com/books/content?id=hRDKAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=hRDKAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 968,
          amount: 3030,
          authorId: 172,
          categoryId: 1,
          publisherId: 16,
        },
        {
          title: 'Больше никаких измен',
          description:
            'Когда Шариф Бен Нази Ал-Актум, миллиардер и эмир Махтара, впервые увидел Ирэн, его охватило непреодолимое желание сделать ее своей. Известный плейбой, он привык к тому, что женщины сами бросаются ему на шею. Тем удивительнее было для него то, что Ирэн отвергла его ухаживания. Но он невольно проникается уважением к ее принципам и идеалам, хотя и не может разделить их. Приглашая Ирэн занять место компаньонки его сестры, Шариф надеется завоевать расположение девушки. Но его жизнь омрачена тайной, которой он не спешит поделиться с Ирэн...',
          pageCount: 171,
          imageSmall:
            'http://books.google.com/books/content?id=OkMSDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OkMSDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 680,
          amount: 123.75,
          authorId: 145,
          categoryId: 1,
          publisherId: 38,
        },
        {
          title: 'Кот по имени Один',
          description:
            'Альдо 11 лет, и он без ума от комиксов. Настолько, что мальчик основал с друзьями Клуб Комиксов. Хотя они уверены, что Клуб Комиксов – это просто прикрытие. Миссия Клуба – тайная, разумеется, – в том, чтобы защитить Землю!Однажды тёмной ночью возле входной двери дома Альдо появляется одноглазый кот. Беднягу разрешают оставить и называют Одином, совсем не подозревая, что внутри пушистого питомца скрывается дух его тёзки: великий, могучий, вспыльчивый скандинавский бог, чья последняя битва, Рагнарёк, вот-вот начнётся.Для младшего школьного возраста.',
          pageCount: 221,
          imageSmall:
            'http://books.google.com/books/content?id=d7BeEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=d7BeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 66,
          amount: 473.75,
          authorId: 174,
          categoryId: 28,
          publisherId: 41,
        },
        {
          title: 'Мозг и его потребности 2.0. От питания до признания',
          description:
            'Обновленное издание знаменитого бестселлера.Эта книга – самый полный путеводитель по работе мозга и биологическим потребностям человека. Написанная профессором, нейрофизиологом Вячеславом Дубыниным, она приближает читателя к пониманию собственного организма, учит управлять природными механизмами тела, чтобы реализовать личную одаренность.Книга объясняет:– Почему шутка «Подышал рядом с тортиком – набрал 5 кг» не такая уж и шутка.– Как страстная влюбленность может ухудшить работу лобной коры.– Чем объясняется тяга людей к бродяжничеству.– Почему кормящие матери становятся сверхагрессивными.– Действительно ли фитнес может противостоять депрессии.– С чем связано массовое почитание капибар.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 619,
          imageSmall:
            'http://books.google.com/books/content?id=R28BEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=R28BEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 30,
          amount: 623.75,
          authorId: 179,
          categoryId: 15,
          publisherId: 43,
        },
        {
          title: 'Проблемы литературы США ХХ века',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 538,
          imageSmall:
            'http://books.google.com/books/content?id=EYAOAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EYAOAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 819,
          amount: 4105,
          authorId: 392,
          categoryId: 27,
          publisherId: 15,
        },
        {
          title: 'Устойчивы к будущему',
          description: 'технологии, инновации, предпринимателю, руководителю',
          pageCount: 258,
          imageSmall:
            'http://books.google.com/books/content?id=7l1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=7l1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 176,
          amount: 449,
          authorId: 180,
          categoryId: 42,
          publisherId: 38,
        },
        {
          title: 'Конституция Российской Федерации с комментариями для школьников',
          description:
            'В настоящем комментарии текста Конституции Российской Федерации 1993 г. в простой и доступной форме разъяснены значение Конституции РФ, термины, используемые в тексте, а также принципы развития общества и государства в России.Для учащихся школ, колледжей, студентов высших учебных заведений, а также граждан, желающих понять принципы и перспективы развития России.',
          pageCount: 372,
          imageSmall:
            'http://books.google.com/books/content?id=dJkUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dJkUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 348,
          amount: 248.75,
          authorId: 201,
          categoryId: 33,
          publisherId: 41,
        },
        {
          title: 'Rukovodstvo dli︠a︡ nebolʹshikh i srednikh bibliotek',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 344,
          imageSmall:
            'http://books.google.com/books/content?id=9tFaO9eEvtIC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9tFaO9eEvtIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 550,
          amount: 3529,
          authorId: 175,
          categoryId: 52,
          publisherId: 20,
        },
        {
          title: 'Сначала мобильные!',
          description:
            'Подход, предложенный Люком Вроблевски, произвел настоящую революцию в области веб-дизайна. Его суть проста: чтобы сайт наиболее полно удовлетворял потребности пользователей любых устройств, сначала следует проектировать его мобильную версию.В своей книге Люк подробно рассказывает о том, как перейти от создания обычных сайтов к разработке их мобильных версий, какие особенности поведения владельцев мобильных устройств следует учитывать при проектировании интерфейса, как правильно организовать контент и навигацию и о многом-многом другом.Следуя его рекомендациям, вы сможете создать максимально удобный дизайн, который обеспечит высокую посещаемость вашего сайта в самое ближайшее время.',
          pageCount: 215,
          imageSmall:
            'http://books.google.com/books/content?id=cXe4AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cXe4AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 390,
          amount: 1823,
          authorId: 176,
          categoryId: 10,
          publisherId: 38,
        },
        {
          title: 'Метро 2033',
          description:
            'Двадцать лет спустя Третьей мировой войны последние выжившие люди прячутся на станциях и в туннелях московского метро, самого большого на Земле противоатомного бомбоубежища. Поверхность планеты заражена и непригодна для обитания, и станции метро становятся последним пристанищем для человека. Они превращаются в независимые города-государства, которые соперничают и воюют друг с другом. Они не готовы примириться даже перед лицом новой страшной опасности, которая угрожает всем людям окончательным истреблением. Артем, двадцатилетний парень со станции ВДНХ, должен пройти через все метро, чтобы спасти свой единственный дом – и все человечество.«Метро 2033» – культовый роман-антиутопия, один из главных российских бестселлеров нулевых. Переведен на 37 иностранных языков, заинтересовал Голливуд, превращен в атмосферные компьютерные блокбастеры, породил целую книжную вселенную и настоящую молодежную субкультуру во всем мире.',
          pageCount: 815,
          imageSmall:
            'http://books.google.com/books/content?id=twKQ7zpid2UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=twKQ7zpid2UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 45,
          amount: 4902,
          authorId: 134,
          categoryId: 1,
          publisherId: 5,
        },
        {
          title: 'Библиография',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 468,
          imageSmall:
            'http://books.google.com/books/content?id=wVQnAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wVQnAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 487,
          amount: 854,
          authorId: 195,
          categoryId: 56,
          publisherId: 16,
        },
        {
          title: 'Где кончается мир',
          description:
            'Северные Шетландские острова, люди здесь живут своей собственной замкнутой жизнью. Каждое лето Куилла и других подростков отправляют на маленький остров в открытом море – Стак – для охоты на морских птиц, чтобы потом, загруженными богатой добычей, забрать их назад. Но в этот раз за ними никто не приехал.Конечно, ничем, кроме как концом света, не объяснить, почему их бросили – холодными, голодными и цепляющимися за жизнь в тисках смертоносного океана. Как они выживут?',
          pageCount: 282,
          imageSmall:
            'http://books.google.com/books/content?id=TBdPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=TBdPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 604,
          amount: 523.75,
          authorId: 181,
          categoryId: 28,
          publisherId: 5,
        },
        {
          title: 'Сделай! Твой первый шаг',
          description:
            'Мир меняется очень быстро. Технология просто летит вперёд. И человек не может оставаться на месте. Прежние «программы» планирования и принятия решений уже не работают. Вокруг слишком много информации, которая сбивает с толку и не дает двигаться в выбранном направлении. Автомобилю необходим периодический техосмотр. А человеку необходима перезагрузка.Как ты думаешь, ты можешь за 30 дней сделать то, на что тебе обычно требуется полгода? Автор утверждает, что можешь. С помощью системного подхода и умения не бросать начатые проекты. 20 простых и понятных инструментов помогут тебе перезагрузить свои программы мышления и действий.Это не просто книга, которая будет пылиться в книжном шкафу. Это то, что точно изменит твою жизнь в лучшую сторону. Без волшебных таблеток, но с четким и конкретным планом действий. Авторская методика сверх-обучения позволит запоминать важные для тебя моменты. А доступная и эффективная система внедрения навыков – действовать «на автомате», получая при этом удовольствие. Шансов не сделать у тебя просто не останется.',
          pageCount: 247,
          imageSmall:
            'http://books.google.com/books/content?id=WF4kDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WF4kDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 417,
          amount: 1085,
          authorId: 218,
          categoryId: 16,
          publisherId: 35,
        },
        {
          title: 'Дизайн – это работа',
          description:
            'Экстравагантный Майк Монтейро начал свой дизайнерский путь в копировальном центре. За свою карьеру он допустил все возможные ошибки и не скрывает этого, напротив – предупреждает.В книге дано описание всех ступеней организации рабочего процесса дизайн-компании. Майк утверждает, что работа дизайнера – не только талант, но и бизнес. Благодаря этой книге вы можете научиться у Монтейро искусству предоставления услуг, ценить свою работу и получать за это вознаграждение.Потому что дизайн – это работа.',
          pageCount: 230,
          imageSmall:
            'http://books.google.com/books/content?id=uQC1AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=uQC1AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 42,
          amount: 4075,
          authorId: 182,
          categoryId: 10,
          publisherId: 19,
        },
        {
          title: 'Izvi͡estīi͡a Otdi͡elenīi͡a russkago i͡azyka i slovesnosti Imperatorskoĭ akademīi nauk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 862,
          imageSmall:
            'http://books.google.com/books/content?id=x2YoAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=x2YoAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 647,
          amount: 2063,
          authorId: 572,
          categoryId: 27,
          publisherId: 25,
        },
        {
          title: 'Актуальные проблемы диалектологии и исторической лексикологии русского языка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=1ZolAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1ZolAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 532,
          amount: 2627,
          authorId: 167,
          categoryId: 57,
          publisherId: 21,
        },
        {
          title: 'Nat͡sionalʹnyĭ reestr pravovykh aktov Respubliki Belarusʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 912,
          imageSmall:
            'http://books.google.com/books/content?id=8gUmAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8gUmAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 477,
          amount: 1444,
          authorId: 183,
          categoryId: 58,
          publisherId: 39,
        },
        {
          title: 'Окна в облаках',
          description:
            'Высокий профессионализм и блестящий литературный талант Евгении Михайловой очаруют любого читателя. Ее романы уникальны, они переворачивают душу и заставляют чаще биться сердце. Евгения Михайлова – мастер социального детектива, в ее остросюжетных романах находят отражение самые актуальные проблемы современного российского общества.Этот малыш – настоящий ангел. Ему угрожает смертельная опасность, но, может быть, общими усилиями близких удастся отвоевать его у смерти?Марина старается не вмешиваться в чужие дела, но не может пройти мимо попавшей в беду девочки, и они обе оказываются в плену у коварного преступника. Счастье, что у Марины есть знакомый частный детектив – Сергей Кольцов, всегда готовый прийти на помощь...Чересчур заботливая мать не позволяет Паше жениться на любимой девушке. Послушный сын подчиняется, но от судьбы не уйдешь: совершив причудливый пируэт, она снова ставит его перед выбором...Евгения Михайлова много лет занималась журналистскими расследованиями. Героями ее публикаций становились невинно осужденные, воспитанники детских домов, люди, лишившиеся доброго имени, дома, надежды. И если порой в жизни борьба за справедливость терпит поражение, в остросюжетных рассказах Евгении Михайловой истина и любовь побеждают всегда, несмотря на самые тяжелые испытания.',
          pageCount: 200,
          imageSmall:
            'http://books.google.com/books/content?id=2oJjEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2oJjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 859,
          amount: 348.75,
          authorId: 185,
          categoryId: 1,
          publisherId: 44,
        },
        {
          title: 'Влияй! 7 заповедей лидера',
          description:
            'Ицхак Пинтосевич занимает второе место в рейтинге Международной ассоциации профессионалов развития личности, тренер успеха No 1 на русскоязычном пространстве, в прошлом бронзовый призер Чемпионата мира по легкой атлетике и удачный бизнесмен. В этой книге-тренинге Ицхак не только делится своим опытом работы с лидерами, он собрал все самые мощные инструменты и стратегии влияния, почерпнутые из лучших книг по лидерству за последние 100 лет. Среди клиентов Пинтосевича самые успешные компании мира – такие, как Procter & Gamble, Deloitte, Danon, Leo Burnett, PSB-Films, MasterCard, Mary Kay, «Приват Банк», а также политики, бизнесмены и звезды шоу-бизнеса. Специальный бонус для читателей: видеотренинг от Ицхака Пинтосевича в подарок. Подробности внутри книги.',
          pageCount: 309,
          imageSmall:
            'http://books.google.com/books/content?id=yfNhAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yfNhAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 978,
          amount: 298.75,
          authorId: 218,
          categoryId: 10,
          publisherId: 17,
        },
        {
          title: 'Все свободны: История о том, как в 1996 году в России закончились выборы',
          description:
            'Конец 1995 года. Старому президенту очень сложно отказаться от власти — особенно когда его окружение уверяет, что никто, кроме него, не справится. Даже лежа на больничной койке после инфаркта, Борис Ельцин решает баллотироваться вновь. Эти выборы станут переломными в истории России. Сторонники президента приложат все возможные и невозможные усилия ради сохранения свободы. И вроде бы одержат победу. Но в итоге получат прямо противоположное тому, за что боролись.',
          pageCount: 458,
          imageSmall:
            'http://books.google.com/books/content?id=SFMMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SFMMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 312,
          amount: 549,
          authorId: 468,
          categoryId: 5,
          publisherId: 3,
        },
        {
          title: 'Парижские мальчики в сталинской Москве',
          description:
            'Сергей Беляков – историк и писатель, автор книг “Гумилев сын Гумилева”, “Тень Мазепы. Украинская нация в эпоху Гоголя”, “Весна народов. Русские и украинцы между Булгаковым и Петлюрой”, лауреат премии “Большая книга”, финалист премий “Национальный бестселлер” и “Ясная Поляна”.Сын Марины Цветаевой Георгий Эфрон, более известный под домашним именем «Мур», родился в Чехии, вырос во Франции, но считал себя русским. Однако в предвоенной Москве одноклассники, приятели, девушки видели в нем – иностранца, парижского мальчика. «Парижским мальчиком» был и друг Мура, Дмитрий Сеземан, в это же время приехавший с родителями в Москву. Жизнь друзей в СССР кажется чередой несчастий: аресты и гибель близких, бездомье, эвакуация, голод, фронт, где один из них будет ранен, а другой погибнет... Но в их московской жизни были и счастливые дни.Сталинская Москва – сияющая витрина Советского Союза. По новым широким улицам мчатся «линкольны», «паккарды» и ЗИСы, в Елисеевском продают деликатесы: от черной икры и крабов до рокфора... Эйзенштейн ставит «Валькирию» в Большом театре, в Камерном идёт «Мадам Бовари» Таирова, для москвичей играют джазмены Эдди Рознера, Александра Цфасмана и Леонида Утесова, а учителя танцев зарабатывают больше инженеров и врачей... Странный, жестокий, но яркий мир, где утром шли в приемную НКВД с передачей для арестованных родных, а вечером сидели в ресторане «Националь» или слушали Святослава Рихтера в Зале Чайковского.В формате PDF A4 сохранен издательский макет.',
          pageCount: 855,
          imageSmall:
            'http://books.google.com/books/content?id=B2NXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=B2NXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 51,
          amount: 598.75,
          authorId: 215,
          categoryId: 12,
          publisherId: 44,
        },
        {
          title: 'Основы контентной стратегии',
          description:
            'У современного интернет-пользователя нет времени. Если, зайдя на вашу страницу, он не сможет за минуту понять, что же вы предлагаете, он уйдет и больше никогда не вернется. Что делать?Эрин Киссейн подробно рассказывает о том, как создавать правильный контент. В ее книге вы найдете ответы на основные вопросы современного владельца любого интернет-ресурса: как понять, какой контент будет интересен целевой аудитории, каким требованиям он должен удовлетворять, чтобы привлечь посетителей и превратить их в покупателей, как разработать контент-стратегию и придерживаться ее. Она поможет вам освоить необходимые навыки и избежать наиболее распространенных ошибок при разработке наполнения вашего сайта.',
          pageCount: 145,
          imageSmall:
            'http://books.google.com/books/content?id=CWe4AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=CWe4AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 381,
          amount: 4491,
          authorId: 189,
          categoryId: 10,
          publisherId: 26,
        },
        {
          title: 'Gosudarstvennyi͡a prestuplenii͡a v Rossii v XIX vi͡eki͡e',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1028,
          imageSmall:
            'http://books.google.com/books/content?id=YZlNAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=YZlNAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 261,
          amount: 3325,
          authorId: 188,
          categoryId: 98,
          publisherId: 30,
        },
        {
          title: 'Ночь в одиноком октябре',
          description:
            'В Лондоне конца XIX века под покровом тумана промозглого октября в Великой Игре сойдутся известнейшие персоны своего времени и их питомцы-помощники. Смогут ли игроки открыть врата в иной мир? В чем заключается их сила?',
          pageCount: 303,
          imageSmall:
            'http://books.google.com/books/content?id=Y-MrEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Y-MrEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 915,
          amount: 1038,
          authorId: 311,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Bibliotekarʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1018,
          imageSmall:
            'http://books.google.com/books/content?id=nyKqgBUbFf8C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nyKqgBUbFf8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 527,
          amount: 1643,
          authorId: 322,
          categoryId: 52,
          publisherId: 36,
        },
        {
          title: 'Voprosy ėkonomiki',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 804,
          imageSmall:
            'http://books.google.com/books/content?id=gCWr86mcU4kC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gCWr86mcU4kC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 837,
          amount: 1250,
          authorId: 534,
          categoryId: 59,
          publisherId: 2,
        },
        {
          title: 'Книга Полоцкого похода 1563 г',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 112,
          imageSmall:
            'http://books.google.com/books/content?id=korgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=korgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 358,
          amount: 3056,
          authorId: 34,
          categoryId: 9,
          publisherId: 44,
        },
        {
          title: "Apokrify i legendy z ukrajins'kych rukopysiv",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 478,
          imageSmall:
            'http://books.google.com/books/content?id=e92S6izHqUUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=e92S6izHqUUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 637,
          amount: 3149,
          authorId: 190,
          categoryId: 37,
          publisherId: 40,
        },
        {
          title: 'Внутренний порок',
          description:
            'Томас Пинчон — наряду с Сэлинджером, «великий американский затворник», один из крупнейших писателей мировой литературы XX, а теперь и XXI века, после первых же публикаций единодушно признанный классиком уровня Набокова, Джойса и Борхеса. Герои Пинчона традиционно одержимы темами вселенского заговора и социальной паранойи, поиском тайных пружин истории. И кто бы мог подумать, что автор таких краеугольных камней постмодернизма, как «V.» и «Радуга тяготения», возьмется за детектив. Ну да Пинчон не был бы Пинчоном, если бы и здесь не изобрел свой собственный жанр — психоделический нуар. Его герой, частный детектив Док Спортелло, временами выплывая из дурманной дымки, наблюдает закат эпохи всеобщей любви и наступление века паранойи. А когда в его жизнь вдруг возвращается бывшая подруга по имени Шаста с историей о готовящемся похищении магната-застройщика Мики Волкманна, Док поневоле запутывается в хитрой паутине перекрестных интересов, неочевидных улик и ложных следов. И что такое вездесущий Золотой Клык — придуманная дантистами схема ухода от налогов, азиатский наркокартель или нечто куда более зловещее?.. В 2014 году Пол Томас Андерсон — один из главных визионеров современного кинематографа, постановщик таких картин, как «Ночи в стиле буги» и «Магнолия», «Нефть» и «Мастер», «Призрачная нить» и «Лакричная пицца», — бережно перенес «Внутренний порок» на большой экран; впервые в истории произведение Пинчона поддалось киноадаптации. В фильме, номинированном на два «Оскара», снимались Хоакин Феникс, Джош Бролин, Риз Уизерспун, Бенисио дель Торо, Джоанна Ньюсом и др. Перевод публикуется в новой редакции.',
          pageCount: 301,
          imageSmall:
            'http://books.google.com/books/content?id=593mEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=593mEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 868,
          amount: 505,
          authorId: 210,
          categoryId: 1,
          publisherId: 18,
        },
        {
          title: 'Труды Отдела древнерусской литературы',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 768,
          imageSmall:
            'http://books.google.com/books/content?id=gtdfAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gtdfAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 435,
          amount: 1526,
          authorId: 193,
          categoryId: 27,
          publisherId: 18,
        },
        {
          title: 'Плановое хозяйство',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 800,
          imageSmall:
            'http://books.google.com/books/content?id=-9tHAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-9tHAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 968,
          amount: 2201,
          authorId: 553,
          categoryId: 60,
          publisherId: 32,
        },
        {
          title: 'Kniga o Knigakh',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 264,
          imageSmall:
            'http://books.google.com/books/content?id=OmwYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OmwYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 75,
          amount: 3382,
          authorId: 195,
          categoryId: 61,
          publisherId: 3,
        },
        {
          title: 'Действуй! 10 заповедей успеха',
          description:
            '«Действуй! 10 заповедей успеха» – ваш ключ к позитивным переменам в жизни. Успех неизбежен для тех, кто выполнит все заповеди: возьмет ответственность на себя, подчинит страх, поставит цель, составит план, начнет действовать и совершенствоваться. Включите каждую из предложенных заповедей в свою рутину, и это поможет укрепить самооценку, найти путь к себе и жизни своей мечты. Книга построена на основе последних открытий в области психологии, менеджмента и лучших практик личностного роста. Создай своими руками тот мир, в котором ты хочешь оказаться!В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 320,
          imageSmall:
            'http://books.google.com/books/content?id=9wMa0Lo2pRIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9wMa0Lo2pRIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 326,
          amount: 323.75,
          authorId: 218,
          categoryId: 10,
          publisherId: 41,
        },
        {
          title: 'ОчеCOVIDный обман. Афера на здоровье',
          description:
            'К моменту написания книги за плечами автора опыт преподавания в медицинском институте более 9-ти лет, многочисленные выступления на международных конференциях. Также Д. В. Иванов в течение 4-х лет представлял российскую медицинскую науку в Китайской Народной Республике. Правительством КНР он признан специалистом высшей категории – категории А. Бесценный опыт, полученный благодаря работе с китайцами, позволил изучать образ жизни, культуру, традиции данной страны, а также дал автору возможность уже в феврале 2020 года сделать чёткие выводы о происходящем в Китае, мире и в России – в связи объявленной пандемией covid-19...«Не удивлюсь, если для кого-то данные материалы будут знакомы, а для некоторых они могут стать полным откровением. Зато после прочтения, как говорится, все пазлы должны сложиться в общую картину!», – уверяет автор, добавляя, что составление книги было построено с учётом клинического опыта, научной и преподавательской деятельности.Рассчитана на широкий круг читателей.В формате PDF A4 сохранен издательский макет.',
          pageCount: 316,
          imageSmall:
            'http://books.google.com/books/content?id=hJdLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=hJdLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 658,
          amount: 473.75,
          authorId: 510,
          categoryId: 30,
          publisherId: 2,
        },
        {
          title: 'Багровая книга',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 280,
          imageSmall:
            'http://books.google.com/books/content?id=nopNq20SuIIC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nopNq20SuIIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 973,
          amount: 3716,
          authorId: 164,
          categoryId: 31,
          publisherId: 37,
        },
        {
          title: 'Пьеса «Безумец и Доктор». Белая книга',
          description:
            'Когда ты безумец, и все об этом знают, а сможет справиться с ним молоденькая девушка-доктор? Именно это мы и узнаем в пьесе. Но суть каждой книги намного глубже, у каждого есть право выбора. А каждый ли человек умеет быть счастливым? Или проще жить по обстоятельствам?',
          pageCount: 195,
          imageSmall:
            'http://books.google.com/books/content?id=EYTVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EYTVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 787,
          amount: 25,
          authorId: 165,
          categoryId: 51,
          publisherId: 30,
        },
        {
          title:
            'Труды перваго Всероссійскаго съѣзда по библіотечному дѣлу, состоявшагося в С.-Петербургѣ с 1-го по 7-ое іюня 1911 г',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 686,
          imageSmall:
            'http://books.google.com/books/content?id=krYlAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=krYlAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 41,
          amount: 2585,
          authorId: 237,
          categoryId: 52,
          publisherId: 4,
        },
        {
          title: 'Мужик и медведь',
          description:
            '«Мужик поехал в лес репу сеять. Пашет там да работает. Пришёл к нему медведь: – Мужик, я тебя сломаю...»',
          pageCount: 148,
          imageSmall:
            'http://books.google.com/books/content?id=JTJjAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JTJjAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 521,
          amount: 25,
          authorId: 237,
          categoryId: 1,
          publisherId: 47,
        },
        {
          title: 'Конституция Российской Федерации с комментариями для школьников',
          description:
            'В настоящем комментарии текста Конституции Российской Федерации 1993 г. в простой и доступной форме разъяснены значение Конституции РФ, термины, используемые в тексте, а также принципы развития общества и государства в России.Для учащихся школ, колледжей, студентов высших учебных заведений, а также граждан, желающих понять принципы и перспективы развития России.',
          pageCount: 372,
          imageSmall:
            'http://books.google.com/books/content?id=dJkUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dJkUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 396,
          amount: 248.75,
          authorId: 201,
          categoryId: 33,
          publisherId: 1,
        },
        {
          title: 'Мой путь к мысу Горн. Наедине со стихией и самим собой',
          description:
            'Книга известного русского путешественника протоиерея Фёдора Конюхова «Мой путь к мысу Горн» основана на дневниковых записях, которые автор вёл на вёсельной лодке «АКРОС» во время перехода через Южный океан. В ней отображены события и переживания всех 154 дней уникального одиночного плавания – с 6 декабря 2018 года по 9 мая 2019 года.Пронизанные океанскими штормами и ветрами строки этой удивительной книги дают понять: чтобы совершить такой невероятный переход в одиночку, нужно быть готовым к нему не только физически, но, в первую очередь, духовно! Перегрести целый океан, который отличается своими постоянными штормами и суровой погодой, – как всё это непросто и опасно!..Новая книга путешественника и протоиерея Фёдора Конюхова – нескончаемая, искренняя молитва к Богу. Она рассказывает о путешествии на грани человеческих возможностей с точки зрения его христианского осмысления.В формате PDF A4 сохранен издательский макет',
          pageCount: 319,
          imageSmall:
            'http://books.google.com/books/content?id=egMrEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=egMrEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 728,
          amount: 511.25,
          authorId: 238,
          categoryId: 5,
          publisherId: 21,
        },
        {
          title: 'Будь эффективным! Эффективность от А до Я',
          description:
            'Ицхак Пинтосевич – тренер успеха No 1 на русскоязычном пространстве, занимает второе место в рейтинге Международной ассоциации профессионалов развития личности, лауреат книжной премии Рунета 2013 года в категории «Лучшая бизнес-книга», совокупный тираж его книг – более 300 000 экземпляров. Эта книга-тренинг, построенная по принципу алфавита, в краткой и доступной форме рассказывает о главных секретах эффективности и учит применять их на практике. Вы будете достигать максимальных результатов при минимальных усилиях, сохраните гармонию во всех сферах жизни и в итоге очень скоро добьетесь успеха!',
          pageCount: 217,
          imageSmall:
            'http://books.google.com/books/content?id=DV9lAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DV9lAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 425,
          amount: 348.75,
          authorId: 218,
          categoryId: 16,
          publisherId: 45,
        },
        {
          title: 'Rukovodstvo dli︠a︡ nebolʹshikh i srednikh bibliotek',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 344,
          imageSmall:
            'http://books.google.com/books/content?id=9tFaO9eEvtIC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9tFaO9eEvtIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 387,
          amount: 3800,
          authorId: 175,
          categoryId: 52,
          publisherId: 12,
        },
        {
          title: 'Монстры Акслин',
          description:
            'Мир Акслин полон монстров. Среди них есть даже такие, что пробираются в дома по ночам, чтобы забрать детей, пока те спят.Акслин выросла, зная, что её очередь может наступить в любой момент. Её народ из поколения в поколение скрывался от монстров. Но, к сожалению, есть существа, от которых Акслин не умеет защищаться. И тогда она отправляется в древнюю Цитадель, где надеется обрести знания о том, как обезопасить людей.Для среднего школьного возраста.',
          pageCount: 515,
          imageSmall:
            'http://books.google.com/books/content?id=bUlVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bUlVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 396,
          amount: 473.75,
          authorId: 252,
          categoryId: 1,
          publisherId: 13,
        },
        {
          title: 'Библиография',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 468,
          imageSmall:
            'http://books.google.com/books/content?id=wVQnAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wVQnAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 284,
          amount: 3755,
          authorId: 78,
          categoryId: 56,
          publisherId: 46,
        },
        {
          title: 'Лучшие идеи челленджей для тебя и для компании',
          description:
            'Какой твой личный рекорд?Эта книга переполнена самыми странными, замечательными и бестолковыми челленджами на свете!В одних челленджах тебе предстоит состязаться со временем, в других – с друзьями, и всегда – с самим coбой!Брось себе настоящий вызов!',
          pageCount: 98,
          imageSmall:
            'http://books.google.com/books/content?id=5mFhEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5mFhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 42,
          amount: 361.25,
          authorId: 267,
          categoryId: 92,
          publisherId: 32,
        },
        {
          title: 'Собака, которая спасла мир',
          description:
            'Подружившись с эксцентричной учёной на пенсии, одиннадцатилетняя Джорджи и её приятель Рамзи становятся объектами испытаний в новом захватывающем эксперименте: создании трёхмерной версии будущего в виртуальной реальности. В это же самое время становится известно, что каждой собаке в мире угрожает смертельная болезнь. Спустя несколько дней вирус становится опасным и для людей. А тут любимый пёс Джорджи, мистер Мэш, заболевает. Но это только начало истории... Росс Уэлфорд – звезда современной фантастики для детей. Его книги отмечены такими наградами, как The Awesome Book Award, и занимают первые строчки рейтингов Amazon. «Собака, которая спасла мир» – это необыкновенный квест с самыми высокими ставками, где путешествие во времени сильно отличается от того, каким вы его знаете. Для среднего школьного возраста.',
          pageCount: 321,
          imageSmall:
            'http://books.google.com/books/content?id=Pos6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Pos6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 893,
          amount: 523.75,
          authorId: 66,
          categoryId: 28,
          publisherId: 41,
        },
        {
          title: 'Сердце для стража',
          description:
            'Он знал, что не первый в списке тех, кому повезло чуть больше, чем другим. И подозревал, что не последний. По слухам где-то здесь бродит как минимум один доброволец из проекта конкурентов. И доброволец непростой – психопат с манией убийства себе подобных холодным оружием.Случалось, ему снились встречи с «конкурентами», и ни один из этих снов не был приятным.И вот наконец сны начинают прорываться в реальность. Увы, момент не слишком подходящий, чтобы выяснять, так ли уж страшен черт, как рассказывают. У него ничего не осталось – ни верных воинов, ни сильного флота, даже ботинок и тех нет. Сохранилось только то, что не потрогать руками: опыт, закаленный характер, новые навыки и возможности.',
          pageCount: 378,
          imageSmall:
            'http://books.google.com/books/content?id=B5CbAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=B5CbAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 993,
          amount: 2538,
          authorId: 264,
          categoryId: 1,
          publisherId: 9,
        },
        {
          title: 'Великий пост. Объяснение смысла, значения, содержания',
          description:
            'Великий пост – особое время. Время подготовки к самому важному празднику христианства – Святому Христову Воскресению. Это ответственное, радостное и вместе с тем таинственное время. Книга поможет понять смысл и цель поста, а значит, и провести время поста с максимальной пользой для своей души как период внутреннего роста.',
          pageCount: 169,
          imageSmall:
            'http://books.google.com/books/content?id=BnQUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BnQUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 365,
          amount: 236.25,
          authorId: 255,
          categoryId: 8,
          publisherId: 33,
        },
        {
          title: 'Izvi͡estīi͡a Otdi͡elenīi͡a russkago i͡azyka i slovesnosti Imperatorskoĭ akademīi nauk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 862,
          imageSmall:
            'http://books.google.com/books/content?id=x2YoAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=x2YoAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 69,
          amount: 4317,
          authorId: 284,
          categoryId: 27,
          publisherId: 23,
        },
        {
          title: 'Обнажая ложь',
          description:
            'За пятнадцать лет брака у Ребекки и Максвелла было все: счастье и горе, любовь и предательство, страсть и измены. Но в один день, когда Бекк кажется, что все в порядке, она получает документы на развод, и ее мир, столь привычный и понятный, рушится. Но кто сказал, что Бекк так просто отпустит мужа?',
          pageCount: 71,
          imageSmall:
            'http://books.google.com/books/content?id=EC9REAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EC9REAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 924,
          amount: 124.87,
          authorId: 223,
          categoryId: 1,
          publisherId: 4,
        },
        {
          title: 'Актуальные проблемы диалектологии и исторической лексикологии русского языка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=1ZolAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1ZolAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 488,
          amount: 2681,
          authorId: 127,
          categoryId: 57,
          publisherId: 27,
        },
        {
          title: 'Nat͡sionalʹnyĭ reestr pravovykh aktov Respubliki Belarusʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 912,
          imageSmall:
            'http://books.google.com/books/content?id=8gUmAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8gUmAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 759,
          amount: 2652,
          authorId: 183,
          categoryId: 58,
          publisherId: 3,
        },
        {
          title:
            'НЕскучная психология. Для тех, кто разочаровался, отчаялся или так и не понял, что такое счастливые отношения',
          description:
            'Его называют великим мудрецом нашего времени. Его духовное имя – Сатья, а основа его учения – древние ведические знания. Он автор и ведущий популярнейших семинаров «Нескучная семейная психология» и «Очарование женственности». Его выступления посещает огромное число мужчин и женщин, в Интернете ролики с его лекциями набирают сотни тысяч просмотров. Потому что известно, что после общения с Сатьей сбываются мечты!..К ногам никому ненужных одиночек начинают падать и сами собой укладываться в штабеля толпы обожателей, несчастные жены снова становятся любимыми и желанными, а их мужья добиваются успеха. Эти превращения – не волшебство. У отношений мужчины и женщины есть свои законы, неумолимые, как законы физики или математики.Какова природа женщин и мужчин, каковы их ценности, в чем их обязанности? Как правильно вступать в отношения? Как не совершить досадных ошибок? И как из просто женщины стать Божественной Женщиной? Ответы на эти и другие сложные вопросы вы найдете в книге. И конечно, ее отличает фирменный стиль Сатьи – с юмором о проблемах, просто – о сложном.',
          pageCount: 227,
          imageSmall:
            'http://books.google.com/books/content?id=NzonDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NzonDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 85,
          amount: 1487.5,
          authorId: 173,
          categoryId: 55,
          publisherId: 44,
        },
        {
          title: 'Gosudarstvennyi͡a prestuplenii͡a v Rossii v XIX vi͡eki͡e',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1028,
          imageSmall:
            'http://books.google.com/books/content?id=YZlNAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=YZlNAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 894,
          amount: 3990,
          authorId: 188,
          categoryId: 53,
          publisherId: 29,
        },
        {
          title: 'Bibliotekarʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1018,
          imageSmall:
            'http://books.google.com/books/content?id=nyKqgBUbFf8C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nyKqgBUbFf8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 896,
          amount: 655,
          authorId: 253,
          categoryId: 52,
          publisherId: 2,
        },
        {
          title: 'Voprosy ėkonomiki',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 804,
          imageSmall:
            'http://books.google.com/books/content?id=gCWr86mcU4kC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gCWr86mcU4kC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 26,
          amount: 2289,
          authorId: 511,
          categoryId: 59,
          publisherId: 41,
        },
        {
          title: 'История книги своими руками',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 83,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 979,
          amount: 2477,
          authorId: 29,
          categoryId: 105,
          publisherId: 9,
        },
        {
          title: 'Испанский язык. Самоучитель с QR-кодами',
          description:
            'Самоучитель предназначен для всех, кто желает в короткий срок получить качественные базовые знания испанской грамматики и навыки устной и письменной речи. Книга состоит из 20 уроков, построенных по принципу от простого к сложному. В каждом уроке вы найдете интересные тексты, диалоги и упражнения, а также полезную страноведческую информацию. Фонетический курс и некоторые диалоги озвучены носителями языка. Сканируйте QR-код при помощи смартфона и прослушивайте аудиофайлы или просматривайте ответы к упражнениям. Самоучитель позволит быстро освоить лексическую и грамматическую базу уровней A1-A2-B1 общеевропейской системы уровней владения иностранными языками.Для всех, кто изучает испанский язык в вузе, на курсах или самостоятельно.',
          pageCount: 482,
          imageSmall:
            'http://books.google.com/books/content?id=eVkuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=eVkuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 440,
          amount: 348.75,
          authorId: 169,
          categoryId: 20,
          publisherId: 11,
        },
        {
          title: 'Книга Полоцкого похода 1563 г',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 112,
          imageSmall:
            'http://books.google.com/books/content?id=korgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=korgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 593,
          amount: 4922,
          authorId: 186,
          categoryId: 35,
          publisherId: 43,
        },
        {
          title: "Apokrify i legendy z ukrajins'kych rukopysiv",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 478,
          imageSmall:
            'http://books.google.com/books/content?id=e92S6izHqUUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=e92S6izHqUUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 816,
          amount: 4803,
          authorId: 190,
          categoryId: 44,
          publisherId: 27,
        },
        {
          title: 'Клиенты на всю жизнь',
          description:
            "Карл Сьюэлл — успешный бизнесмен, которому удалось поднять продажи до невиданных высот благодаря привлечению и удержанию покупателей. Его книга являет собой практическое руководство по работе с клиентами (а попутно и по организации работы предприятия, маркетингу и мерчендайзингу). Сьюэлл рекомендует всем делать ставку на постоянных клиентов, поскольку настрой на разовые продажи делает бизнес неустойчивым. И убедительно доказывает:чтобы удержать клиента, необходимо пересмотреть свои взгляды не только на обслуживание как таковое, но и на организацию работы, оплату труда, чистоту помещений, дизайн ландшафта и многие другие мелочи. Книга будет полезна как тем, кто только начинает свой бизнес, так и тем, кто ищет пути его дальнейшего расширения. Книга издательства 'Манн, Иванов и Фербер'",
          pageCount: 230,
          imageSmall:
            'http://books.google.com/books/content?id=Cn0IKb1MYToC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Cn0IKb1MYToC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 956,
          amount: 449,
          authorId: 184,
          categoryId: 10,
          publisherId: 46,
        },
        {
          title: 'Труды Отдела древнерусской литературы',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 768,
          imageSmall:
            'http://books.google.com/books/content?id=gtdfAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gtdfAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 612,
          amount: 1105,
          authorId: 193,
          categoryId: 27,
          publisherId: 38,
        },
        {
          title: 'Плановое хозяйство',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 800,
          imageSmall:
            'http://books.google.com/books/content?id=-9tHAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-9tHAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 8,
          amount: 872,
          authorId: 292,
          categoryId: 60,
          publisherId: 35,
        },
        {
          title: 'Kniga o Knigakh',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 264,
          imageSmall:
            'http://books.google.com/books/content?id=OmwYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OmwYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 458,
          amount: 2687,
          authorId: 195,
          categoryId: 61,
          publisherId: 11,
        },
        {
          title: 'Лицевой свод в контексте отечественного летописания XVI века',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 360,
          imageSmall:
            'http://books.google.com/books/content?id=QaAiAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QaAiAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 64,
          amount: 3168,
          authorId: 196,
          categoryId: 62,
          publisherId: 45,
        },
        {
          title: 'Kulʹbin',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 504,
          imageSmall:
            'http://books.google.com/books/content?id=gtssAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gtssAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 881,
          amount: 4494,
          authorId: 197,
          categoryId: 63,
          publisherId: 35,
        },
        {
          title:
            'Человек покупающий и продающий. Как законы эволюции влияют на психологию потребителя и при чем здесь Люк Скайуокер',
          description:
            'Поведение человека покупающего – неизведанная территория для маркетологов и продаванов. Современные компании сочиняют рекламные тексты и формируют ценность продукта, зачастую не зная, что именно заставляет людей покупать.Эта книга – ключ к пониманию скрытых механизмов принятия решения современными покупателями.Николай Молчанов – кандидат психологических наук, MBA в бизнес-школе INSEAD, один из лучших экспертов в области управления поведением покупателей. Автор одного из самых популярных Telegram-каналов Рунета «Психология маркетинга», который читают более 60 000 человек.В своей книге он объясняет, по каким законам работает человеческий мозг и как психология поможет повысить эффективность компании – от разработки продукта до управления бизнес-процессами.– Почему механизм принятия решений одинаков, когда человек покупает коврик в ванную и когда выбирает, в какую сторону свайпнуть фото в Tinder?– Каким образом шокированные пуэрториканские макаки-резусы связаны с нашей любовью поумничать и что это означает для маркетинга?– В чем заключается «эффект ИКЕА» и как с помощью него увеличить прибыль?В формате PDF A4 сохранен издательский макет.',
          pageCount: 623,
          imageSmall:
            'http://books.google.com/books/content?id=LGE8EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=LGE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 903,
          amount: 648.75,
          authorId: 199,
          categoryId: 10,
          publisherId: 16,
        },
        {
          title: 'Исагогика',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 648,
          imageSmall:
            'http://books.google.com/books/content?id=v00SAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=v00SAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 409,
          amount: 3576,
          authorId: 198,
          categoryId: 36,
          publisherId: 42,
        },
        {
          title: 'Танцуйте свою жизнь. Психологические эссе о том, как вернуть себе себя',
          description:
            'В ярких и сильных текстах Лили Град – профессионализм психолога, который каждый день встречается с невыдуманной болью разных людей. Как выбраться из разрушительных жизненных сценариев? Насколько важно и необходимо счастье? Что делать с отсутствием любви? В этих текстах много сочувствия, юмора, нежности, глубины и настоящей жизни – жизни, где отчаяние уже содержит в себе оттенки надежды, где не обязательно быть уникальным и где звучит только наша, ни с чем не сравнимая музыка. Жизнь нередко «заслуживает иронии, а не слез» – но она стоит того, чтобы ее любить. Эта книга – дверь, за которой можно посмотреть на себя по-новому. А можно просто выдохнуть и набраться сил.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 210,
          imageSmall:
            'http://books.google.com/books/content?id=zHJWEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zHJWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 174,
          amount: 740,
          authorId: 41,
          categoryId: 16,
          publisherId: 43,
        },
        {
          title: 'Ocherki ugolovnago suda i nakazanii︠a︡ v sovremennoǐ angalïi ...',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 738,
          imageSmall:
            'http://books.google.com/books/content?id=VrFBAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VrFBAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 555,
          amount: 4400,
          authorId: 200,
          categoryId: 64,
          publisherId: 6,
        },
        {
          title: 'Чингиз Айтматов в современном мире',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 422,
          imageSmall:
            'http://books.google.com/books/content?id=lToHAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lToHAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 971,
          amount: 2453,
          authorId: 219,
          categoryId: 43,
          publisherId: 6,
        },
        {
          title: 'Журнал общей биологии',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 980,
          imageSmall:
            'http://books.google.com/books/content?id=Tx0JAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Tx0JAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 539,
          amount: 880,
          authorId: 577,
          categoryId: 65,
          publisherId: 14,
        },
        {
          title: 'Письма до полуночи',
          description:
            'Старшеклассницы Ана и Таня дружат с детства.Наступает момент, когда подростковые проблемы перерастают во взрослые... Ана ломает голову над загадочным преступлением сорокапятилетней давности, а Тане не дает покоя странная ссора, свидетельницей которой она стала на вписке. Смогут ли девушки разобраться и найти себя?Тем временем их класс медленно распадается под давлением страшной тайны.',
          pageCount: 366,
          imageSmall:
            'http://books.google.com/books/content?id=4onHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4onHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 274,
          amount: 2986,
          authorId: 177,
          categoryId: 1,
          publisherId: 20,
        },
        {
          title:
            'Практическое руководство для волостных и сельских правленій с формами дѣлопроизводства и позднѣйшими узаконеніями и разъясненіями Правительствующаго Сената и Министерства внутренних дѣл',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 616,
          imageSmall:
            'http://books.google.com/books/content?id=Q4pBAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Q4pBAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 95,
          amount: 2735,
          authorId: 202,
          categoryId: 66,
          publisherId: 30,
        },
        {
          title: 'Detskai︠a︡ literatura',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 518,
          imageSmall:
            'http://books.google.com/books/content?id=ZQ-_AAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZQ-_AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 285,
          amount: 3312,
          authorId: 133,
          categoryId: 131,
          publisherId: 20,
        },
        {
          title: 'Краткое содержание «Мечтать не вредно. Как получить то, что действительно хочешь»',
          description:
            'Этот текст – сокращенная версия книги «Мечтать не вредно. Как получить то, что действительно хочешь». Только самое главное: идеи, техники, ключевые цитаты.«Мечтать не вредно» – эту фразу мы привыкли считать ироничной и опускающей нас с небес на землю при попытках что-то изменить в своей жизни. Однако Барбара Шер опровергает это утверждение и настаивает на том, что мечтать не только не вредно, но и очень даже полезно. Главное – делать это правильно. Не витать в облаках, а четко знать, чего вы хотите. Не надеяться на чудо, а пошагово расписывать план достижения желаемого. Не стесняться просить о помощи и, конечно, соблюдать дисциплину – ведь осуществление мечты – это сложная и порой довольно монотонная работа.Сама Барбара тоже не хватала звезд с неба – в ее жизни был период, когда она одна с двумя детьми еле-ела сводила концы с концами и в течение нескольких лет была вынуждена работать официанткой. Свою первую книгу – «Мечтать не вредно» – Шер издала, когда ей было за сорок. Сегодня, спустя 35 лет, на счету писательницы уже семь бестселлеров, и она является одним из лучших мотивационных спикеров в мире.В книге «Мечтать не вредно» она рассказывает о том, как можно осуществить даже самые несбыточные мечты и приводит ряд примеров из жизни, подтверждающих тот факт, что ее методика действительно работает. При этом Барбара не использует банальных советов из серии «верь в мечту – и она обязательно сбудется» и не призывает с завтрашнего дня все бросить и начать жить по-новому. Под ее руководством вы превратите вашу мечту в конкретную цель и будете ежедневно продвигаться к ней маленькими шажками, не меняя при этом своего привычного образа жизни.Если вы давно о чем-то мечтаете, но не знаете, как подступиться к своей мечте, прочитайте наш обзор по этой замечательной книге: возможно, то, о чем вы грезите вот уже много лет, можно осуществить уже в самое ближайшее время!Напоминаем, что этот текст – краткое изложение книги',
          pageCount: 561,
          imageSmall:
            'http://books.google.com/books/content?id=fOVTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fOVTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 68,
          amount: 187.5,
          authorId: 280,
          categoryId: 81,
          publisherId: 38,
        },
        {
          title: 'Bi︠u︡lletenʹ Narkomvnutorga SSSR',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 394,
          imageSmall:
            'http://books.google.com/books/content?id=9eAtAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9eAtAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 258,
          amount: 2523,
          authorId: 204,
          categoryId: 68,
          publisherId: 32,
        },
        {
          title: 'Звезда',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 856,
          imageSmall:
            'http://books.google.com/books/content?id=0ngEEjSiqn4C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0ngEEjSiqn4C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 856,
          amount: 4144,
          authorId: 392,
          categoryId: 27,
          publisherId: 32,
        },
        {
          title: 'Летопись рецензий',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1224,
          imageSmall:
            'http://books.google.com/books/content?id=Ry2yVeuoDNMC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ry2yVeuoDNMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 999,
          amount: 2521,
          authorId: 180,
          categoryId: 41,
          publisherId: 17,
        },
        {
          title: 'Istorii͡a russkoĭ obshchestvennoĭ mysli',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 704,
          imageSmall:
            'http://books.google.com/books/content?id=DLjctH3fZQoC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DLjctH3fZQoC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 727,
          amount: 2312,
          authorId: 205,
          categoryId: 18,
          publisherId: 20,
        },
        {
          title: 'CSS3 для веб-дизайнеров',
          description:
            'CSS3 – будущее веб-разработки, новый стандарт оформления документов, расширяющий возможности предыдущего стандарта CSS2. Многие возможности, которые ранее были труднодоступными, в CSS3 могут просто достигаться за счет использования новых свойств оформления.Абсолютные преимущества технологий нового поколения – на высоте. Прежде всего, простота и легкость – для программистов, а удобство и комфорт – для пользователей.Книга Дэна Сидерхолма поможет вам использовать CSS3 прямо сейчас, применяя технологии, появившиеся в новых стандартах.На примере дизайна веб-страницы автор показывает применение всех, изложенных в книге, инструментов.',
          pageCount: 192,
          imageSmall:
            'http://books.google.com/books/content?id=mVu2AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mVu2AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 126,
          amount: 4783,
          authorId: 291,
          categoryId: 24,
          publisherId: 1,
        },
        {
          title: 'Сценарии жизни людей',
          description:
            'Клод Штайнер — американский психолог и психотерапевт, один из создателей транзактного анализа, исследователь в области теории жизненных сценариев. «Люди рождаются Принцами и Принцессами, а родители превращают их в Лягушек». Знаменитый психолог Эрик Берн был уверен, что каждый из нас гармоничен от рождения, но в детстве под влиянием окружающих мы бессознательно формируем свое представление о себе. Всю оставшуюся жизнь мы реализуем навязанный нам сценарий, зачастую негативный. Так какие же мы на самом деле? Счастливчики или неудачники, победители или побежденные, сильные или зависимые? Если вовремя не разобраться в этом, последствия могут оказаться катастрофическими. В своей книге «Сценарии жизни людей» признанный мастер практической психологии Клод Штайнер, ближайший последователь Берна, идет еще дальше и описывает три губительных сценария жизни — «без любви», «без разума» и «без радости», — предлагая читателю механизм изменения своей «судьбы». Впервые увидевшая свет в 1974 году, эта теория выдержала проверку временем и оказалась универсальной и интернациональной, что определило успех книги, ставшей мировым бестселлером.',
          pageCount: 416,
          imageSmall:
            'http://books.google.com/books/content?id=NLRHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NLRHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 879,
          amount: 348,
          authorId: 253,
          categoryId: 16,
          publisherId: 47,
        },
        {
          title: 'Западноевропейская графика XV-XX веков',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 208,
          imageSmall:
            'http://books.google.com/books/content?id=PsRNAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PsRNAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 263,
          amount: 1163,
          authorId: 207,
          categoryId: 69,
          publisherId: 21,
        },
        {
          title: 'Библиография российской библиографии',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 420,
          imageSmall:
            'http://books.google.com/books/content?id=QMvfAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QMvfAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 791,
          amount: 2248,
          authorId: 50,
          categoryId: 70,
          publisherId: 40,
        },
        {
          title: 'Преподавание истории в школе',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 632,
          imageSmall:
            'http://books.google.com/books/content?id=LLZmAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=LLZmAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 141,
          amount: 3606,
          authorId: 545,
          categoryId: 15,
          publisherId: 7,
        },
        {
          title: 'Девятый Дом',
          description:
            'Алекс Стерн не похожа на других первокурсников Йельского университета. Она выросла на задворках Лос-Анджелеса, рано бросила школу, дружила с плохими парнями и перебивалась случайными заработками. В двадцать лет Алекс выжила в ужасной бойне – и благодаря этой трагедии загадочным образом получила шанс стать студенткой одного из самых престижных университетов мира. Почему она? И в чем тут подвох? В Нью-Хейвене к вопросам, которые терзают Алекс, прибавляются новые. Запрещенная магия, секретные общества, порочная элита Лиги плюща... Что за страшные тайны скрываются в древних, благопристойных стенах Йеля?',
          pageCount: 517,
          imageSmall:
            'http://books.google.com/books/content?id=dmYUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dmYUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 705,
          amount: 523.75,
          authorId: 178,
          categoryId: 1,
          publisherId: 2,
        },
        {
          title: 'Золотые земли. Сокол и Ворон',
          description:
            'Дара выросла на краю Великого леса. С детства её учили: не твори заклинаний и остерегайся лешего. Но однажды у неё не останется выбора.Милош чудом выжил, когда началась охота на ведьм. Он привык скрывать свой чародейский дар, но бояться смерти просто устал.Вячко знает, что он незаконный сын Великого князя, и мечтает заслужить признание отца. Но это значит, что придётся навсегда проститься с любимой.Ежи помнит сказания о древних богах предков: они коварны и беспощадны. Но что делать, если ты стал их жертвой?Невозможно обхитрить богов в их игре человеческими судьбами.Но все четверо обязательно попытаются.',
          pageCount: 700,
          imageSmall:
            'http://books.google.com/books/content?id=ums-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ums-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 552,
          amount: 298.75,
          authorId: 277,
          categoryId: 1,
          publisherId: 26,
        },
        {
          title: 'Sovetskoe bibliotekovedenie',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 412,
          imageSmall:
            'http://books.google.com/books/content?id=2KMuAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2KMuAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 81,
          amount: 3126,
          authorId: 225,
          categoryId: 52,
          publisherId: 29,
        },
        {
          title: 'Структурная трансформация региональной экономики',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 231,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 549,
          amount: 2548,
          authorId: 263,
          categoryId: 90,
          publisherId: 44,
        },
        {
          title: 'Host Bibliographic Record for Boundwith Item Barcode 30112087491897 and Others',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 342,
          imageSmall:
            'http://books.google.com/books/content?id=bsX0VZ2OO6AC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bsX0VZ2OO6AC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 363,
          amount: 2561,
          authorId: 555,
          categoryId: 43,
          publisherId: 22,
        },
        {
          title: 'Письма А.С. Суворина к В.В. Розанову',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 196,
          imageSmall:
            'http://books.google.com/books/content?id=qtkKAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=qtkKAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 632,
          amount: 1339,
          authorId: 268,
          categoryId: 22,
          publisherId: 15,
        },
        {
          title: 'Рождение Богов: НЕВОЗМОЖНОЕ',
          description:
            'Наконец Алексей нашел свой тайник. Сможет ли он правильно воспользоваться унаследованными знаниями и технологиями? С какими страшными вызовами судьбы ему предстоит встретиться на этот раз? Сумеет ли переломить ход истории и совершить невозможное? И будет ли хоть кто-то на его стороне?Это третья книга из серии "Рождение Богов". Но она написана таким образом, чтобы чтение цикла можно было начинать с нее.Подписывайтесь, чтобы не пропустить выход новых книг!',
          pageCount: 387,
          imageSmall:
            'http://books.google.com/books/content?id=hXVXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=hXVXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 340,
          amount: 776,
          authorId: 241,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Novai︠a︡ russkai︠a︡ kniga',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 600,
          imageSmall:
            'http://books.google.com/books/content?id=0ZIsAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0ZIsAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 691,
          amount: 1146,
          authorId: 326,
          categoryId: 27,
          publisherId: 38,
        },
        {
          title: 'Вопросы русского языкознания',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 368,
          imageSmall:
            'http://books.google.com/books/content?id=I189AQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=I189AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 858,
          amount: 648,
          authorId: 455,
          categoryId: 72,
          publisherId: 23,
        },
        {
          title: 'Izvestīi︠a︡ po literaturi︠e︡, naukam i biblīografīi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 862,
          imageSmall:
            'http://books.google.com/books/content?id=c3sgBtDVJNMC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=c3sgBtDVJNMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 617,
          amount: 4123,
          authorId: 217,
          categoryId: 27,
          publisherId: 33,
        },
        {
          title: 'Дом с фонтаном',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 168,
          imageSmall:
            'http://books.google.com/books/content?id=SJTqAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SJTqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 622,
          amount: 4566,
          authorId: 247,
          categoryId: 86,
          publisherId: 42,
        },
        {
          title: 'Судьба Нового человека',
          description:
            'В первые послевоенные годы на страницах многотиражных советских изданий (от «Огонька» до альманахов изобразительного искусства) отчетливо проступил новый образ маскулинности, основанный на идеалах солдата и отца (фигуры, почти не встречавшейся в визуальной культуре СССР 1930-х). Решающим фактором в формировании такого образа стал катастрофический опыт Второй мировой войны. Гибель, физические и психологические травмы миллионов мужчин, их нехватка в послевоенное время хоть и затушевывались в соцреалистической культуре, были слишком велики и наглядны, чтобы их могла полностью игнорировать официальная пропаганда. Именно война, а не окончание эпохи сталинизма, определила мужской идеал, характерный для периода оттепели. Хотя он не всегда совпадал с реальным самоощущением советских мужчин, с ним считались и на него равнялись. Реконструируя образ маскулинности в послевоенном СССР, автор привлекает обширный иллюстративный материал. Клэр И. Макколлум — британский историк, преподавательница Эксетерского университета (Великобритания).',
          pageCount: 939,
          imageSmall:
            'http://books.google.com/books/content?id=xvI-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xvI-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 739,
          amount: 319,
          authorId: 272,
          categoryId: 54,
          publisherId: 17,
        },
        {
          title: "Nauka i zhizn'.",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 696,
          imageSmall:
            'http://books.google.com/books/content?id=3PsnAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3PsnAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 864,
          amount: 2563,
          authorId: 280,
          categoryId: 11,
          publisherId: 27,
        },
        {
          title: 'Женщина – не мужчина',
          description:
            'Дейа Раад родилась и живет в Бруклине, Нью-Йорк. Как только ей исполнилось восемнадцать, родные начали подыскивать ей мужа, хотя сама она мечтает об университете, а не о замужестве. Но бабушка с дедушкой уже все решили за внучку – она повторит судьбу своей матери, которую тоже не спрашивали, а в возрасте семнадцати лет выдали замуж и отправили из Палестины в Америку.Родители погибли в автомобильной аварии, когда Дейа с сестрами были совсем маленькими – так она считала до тех пор, пока не получила однажды письмо от неизвестной женщины, не пожелавшей назвать свое имя, но хорошо знающей семью Дейи. Это послание поставило под сомнение все, что Дейа знает о своих близких и собственном прошлом...«Женщина – не мужчина» – роман о трех поколениях палестинских американок, разрывающихся между строгими нравами традиционного семейного уклада и желанием самостоятельно определять свою судьбу.',
          pageCount: 349,
          imageSmall:
            'http://books.google.com/books/content?id=NyVZEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NyVZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 471,
          amount: 373.75,
          authorId: 221,
          categoryId: 1,
          publisherId: 44,
        },
        {
          title: 'Машина мышления',
          description:
            'Двухтомник "Машина мышления" в одной книге.Мышление – самая удивительная и загадочная вещь во Вселенной.Цивилизация, культура, наука – всё это результат нашего с вами мыслительного процесса. Процесса, о котором мы так мало знаем. Процесса, которым мы пока так и не научились управлять.Эта книга – о том, как наш мозг создаёт образы, идеи, принимает решения, как в нём рождаются инсайты и переживаемые нами чувства.А ещё она содержит «инструменты мышления» – конкретные методики, которые помогут вам принимать правильные решения, лучше понимать себя, других людей и мир вокруг вас!МАШИНА МЫШЛЕНИЯ – ПОЕХАЛИ!',
          pageCount: 557,
          imageSmall:
            'http://books.google.com/books/content?id=1JddEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1JddEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 399,
          amount: 1098.75,
          authorId: 279,
          categoryId: 15,
          publisherId: 13,
        },
        {
          title: 'Парижские мальчики в сталинской Москве',
          description:
            'Сергей Беляков – историк и писатель, автор книг “Гумилев сын Гумилева”, “Тень Мазепы. Украинская нация в эпоху Гоголя”, “Весна народов. Русские и украинцы между Булгаковым и Петлюрой”, лауреат премии “Большая книга”, финалист премий “Национальный бестселлер” и “Ясная Поляна”.Сын Марины Цветаевой Георгий Эфрон, более известный под домашним именем «Мур», родился в Чехии, вырос во Франции, но считал себя русским. Однако в предвоенной Москве одноклассники, приятели, девушки видели в нем – иностранца, парижского мальчика. «Парижским мальчиком» был и друг Мура, Дмитрий Сеземан, в это же время приехавший с родителями в Москву. Жизнь друзей в СССР кажется чередой несчастий: аресты и гибель близких, бездомье, эвакуация, голод, фронт, где один из них будет ранен, а другой погибнет... Но в их московской жизни были и счастливые дни.Сталинская Москва – сияющая витрина Советского Союза. По новым широким улицам мчатся «линкольны», «паккарды» и ЗИСы, в Елисеевском продают деликатесы: от черной икры и крабов до рокфора... Эйзенштейн ставит «Валькирию» в Большом театре, в Камерном идёт «Мадам Бовари» Таирова, для москвичей играют джазмены Эдди Рознера, Александра Цфасмана и Леонида Утесова, а учителя танцев зарабатывают больше инженеров и врачей... Странный, жестокий, но яркий мир, где утром шли в приемную НКВД с передачей для арестованных родных, а вечером сидели в ресторане «Националь» или слушали Святослава Рихтера в Зале Чайковского.В формате PDF A4 сохранен издательский макет.',
          pageCount: 855,
          imageSmall:
            'http://books.google.com/books/content?id=B2NXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=B2NXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 690,
          amount: 598.75,
          authorId: 215,
          categoryId: 12,
          publisherId: 46,
        },
        {
          title: 'Entsiklopedicheskii slovarʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 528,
          imageSmall:
            'http://books.google.com/books/content?id=OtfrAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OtfrAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 555,
          amount: 1105,
          authorId: 619,
          categoryId: 23,
          publisherId: 9,
        },
        {
          title: '15 дней молитвы с митрополитом Антонием Сурожским',
          description:
            'Глубокий и многогранный духовный опыт митрополита Антония Сурожского стал неоценимым подспорьем для современных людей, стремящихся к жизни с Богом. Книга протоиерея Михаила Евдокимова дает нам возможность войти в молитву вместе с владыкой и приблизиться к собственному пониманию ключевых для его личного опыта тем.В формате PDF A4 сохранен издательский макет.',
          pageCount: 100,
          imageSmall:
            'http://books.google.com/books/content?id=HwIxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HwIxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 758,
          amount: 250,
          authorId: 324,
          categoryId: 8,
          publisherId: 46,
        },
        {
          title: 'Дарвинизм в XXI веке',
          description:
            'Книга Бориса Жукова “Дарвинизм в XXI веке” посвящена современному состоянию теории эволюции и месту в ней изначального дарвинизма. Автор подробно описал историю эволюционного учения, разобрал аргументы его противников и контраргументы сторонников, показал слабые и сильные места теории эволюции, ее связь с генетикой, эмбриологией и другими науками. И все это щедро приправил многочисленными примерами из животного и растительного мира, научными экспериментами и описаниями палеонтологических находок.В формате a4.pdf сохранен издательский макет.',
          pageCount: 887,
          imageSmall:
            'http://books.google.com/books/content?id=c2f2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=c2f2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 132,
          amount: 736.25,
          authorId: 273,
          categoryId: 11,
          publisherId: 27,
        },
        {
          title: 'Книжно-торговая бухгалтерія',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 190,
          imageSmall:
            'http://books.google.com/books/content?id=HrBBAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HrBBAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 806,
          amount: 2844,
          authorId: 397,
          categoryId: 25,
          publisherId: 31,
        },
        {
          title: 'Я - бездна',
          description:
            'Поутру Чистильщик трудится на берегу озера Комо и увлеченно разглядывает мусор, потому что мусор всегда рассказывает о людях чистую правду. «Я невидимка», — думает Чистильщик и еще не знает, что ошибается. Он вообще многого не знает. Чистильщик не знает, что сейчас поднимет голову, посмотрит на озеро — и его невидимая жизнь, в которой полно горьких воспоминаний и еще больше кровавых тайн, даст течь, готовая пойти ко дну. И что одна истерзанная тринадцатилетняя девочка с фиолетовой челкой вот-вот посмотрит на него — и взаправду увидит. И что Охотница, надломленная женщина, которая годами спасает жертв домашнего насилия, уже взяла след и ищет его. Чистильщику пока еще не ведомо, что они трое, люди без имен, запертые каждый в своем личном ужасе, извилистыми путями идут к общей взрывной развязке, а их судьбу решит озеро Комо, которое скрывает и выдает чужие секреты, когда и как ему вздумается. Новый триллер «Я — бездна» Донато Карризи — роман о том, что бездна поджидает всех, и не все спасутся. Впервые на русском!',
          pageCount: 202,
          imageSmall:
            'http://books.google.com/books/content?id=sEthEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sEthEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 744,
          amount: 413,
          authorId: 186,
          categoryId: 1,
          publisherId: 22,
        },
        {
          title: 'Краткій курс исторіи русской литературы для средних учебных заведеній',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 398,
          imageSmall:
            'http://books.google.com/books/content?id=uxfnAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=uxfnAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 898,
          amount: 1344,
          authorId: 427,
          categoryId: 27,
          publisherId: 8,
        },
        {
          title: 'Литовская метрика',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 198,
          imageSmall:
            'http://books.google.com/books/content?id=0hAhAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0hAhAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 875,
          amount: 806,
          authorId: 191,
          categoryId: 19,
          publisherId: 16,
        },
        {
          title: 'Istoricheskoe obozri︠e︡nīe',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 246,
          imageSmall:
            'http://books.google.com/books/content?id=tMktAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tMktAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 68,
          amount: 979,
          authorId: 467,
          categoryId: 5,
          publisherId: 32,
        },
        {
          title: 'Краткое руководство по статистике народного образования',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 250,
          imageSmall:
            'http://books.google.com/books/content?id=ilhEAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ilhEAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 548,
          amount: 4942,
          authorId: 222,
          categoryId: 15,
          publisherId: 12,
        },
        {
          title: 'Загадай любовь',
          description:
            'Неразделенная любовь – это проблема, и еще какая! Наташа Зуева знает об этом не понаслышке, ведь она безответно влюблена.Накануне новогодних праздников может случиться настоящее чудо. Наташа вместе с классом проведет зимние каникулы на прекрасном горнолыжном курорте. Какая девушка откажется встретить Новый год с парнем своей мечты? И неважно, что предмет воздыханий Наташи совершенно не подозревает о ее чувствах.Казалось, никто и ничто не сможет испортить ей праздник. Разве только ненавистный Тимур Макеев, самодовольный парень и главный прогульщик в школе.',
          pageCount: 269,
          imageSmall:
            'http://books.google.com/books/content?id=4x5LEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4x5LEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 405,
          amount: 323.75,
          authorId: 106,
          categoryId: 1,
          publisherId: 9,
        },
        {
          title: 'Путь Ruby',
          description:
            'Уже больше десяти лет программисты на Ruby обращаются к данной книге как к надежному источнику сведений о том, как эффективно писать на этом языке. А теперь Хэл Фултон и Андрэ Арко изрядно обновили этот классический труд, включив описание новых средств языка и инструментов.Новое издание охватывает версию Ruby 2.1 и содержит более 400 примеров, отвечающих на вопрос «Как это делается в Ruby?». Все примеры сопровождаются подробным описанием задачи и технических ограничений. Затем дается пошаговое объяснение одного хорошего решения с детальными комментариями, позволяющими лучше усвоить материал.Третье издание удобно организовано по темам, так что стало еще проще найти ответ на свой вопрос и писать более качественный код в согласии с духом и философией Ruby.',
          pageCount: 666,
          imageSmall:
            'http://books.google.com/books/content?id=qc1SEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=qc1SEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 885,
          amount: 2884,
          authorId: 224,
          categoryId: 24,
          publisherId: 18,
        },
        {
          title: 'Библиотекарь',
          description:
            '"Суть "Библиотекаря" состоит в том, что Книга в романе предлагает ярчайший фантом, воображаемое воспоминание: о детстве, отрочестве, юности" ("Столичные новости")',
          pageCount: 430,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 225,
          amount: 1401,
          authorId: 283,
          categoryId: 40,
          publisherId: 12,
        },
        {
          title: 'Ясно, понятно: Как доносить мысли и убеждать людей с помощью слов',
          description:
            'Эта книга о правильной и понятной коммуникации: как с помощью слов доносить свои мысли и влиять на людей. Максим Ильяхов развивает тему, затронутую в бестселлере «Пиши, сокращай». Вы узнаете, как привлечь внимание читателей, как помочь им понять и принять точку зрения автора, как увлекательно и доступно раскрыть любую тему, даже самую сложную. Вы найдете в книге более 50 инструментов улучшения текста. В разделе «Контекст» автор покажет, как справиться с предвзятостью читателей и настроить их на верное восприятие информации. В разделе «Интерес» — как превратить скучный текст в увлекательный, не меняя его содержания. Раздел «Текст» посвящен использованию примеров, антипримеров, аналогий, метафор, сюжетности и слоганов — тому, что поможет адресату правильно понять написанное вами. В разделе «Подача» представлены инструменты мгновенного воздействия: как донести главное заголовком, схемой или фотографией. Максим Ильяхов рассказывает о создании сильного текста, подкрепляя теорию примерами из собственной практики.',
          pageCount: 583,
          imageSmall:
            'http://books.google.com/books/content?id=t-4QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=t-4QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 966,
          amount: 549,
          authorId: 119,
          categoryId: 10,
          publisherId: 6,
        },
        {
          title: 'Нескучная детская психология',
          description:
            'Мы очень любим наших детей и желаем им счастья. Но хотим мы одного, а получаем иногда совсем другое. Ваш прекрасный ангелочек знает, как довести до белого каления. Как сохранить спокойствие, найти правильные слова, не опуститься до крика и шлепков? А главное, как воспитать ребенка и не сломать личность, вырастить его смелым, креативным и уверенным в себе человеком?Сатья – опытный семейный психолог и философ, автор и ведущий популярных семинаров «Нескучная семейная психология» – расскажет вам о том, как на самом деле надо взаимодействовать, общаться и обращаться с детьми, как проявить в них то, что заложено.Вы узнаете о семи с половиной детских характерах и пяти принципах воспитания, о секретных фразах, которые помогают детям вырасти счастливыми и реализоваться в жизни. Но не думайте, что вас ждут нудные нравоучения. Стиль Сатьи – это просто о сложном, с юмором о наболевшем. Поэтому позитивный настрой вам и, конечно же, вашим детям гарантирован!',
          pageCount: 215,
          imageSmall:
            'http://books.google.com/books/content?id=z4mREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=z4mREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 908,
          amount: 1487.5,
          authorId: 173,
          categoryId: 14,
          publisherId: 47,
        },
        {
          title: 'Культурно-просветительная работа',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 876,
          imageSmall:
            'http://books.google.com/books/content?id=elv8oMBQpyMC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=elv8oMBQpyMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 807,
          amount: 2539,
          authorId: 507,
          categoryId: 21,
          publisherId: 22,
        },
        {
          title: 'Запутанная жизнь. Как грибы меняют мир, наше сознание и наше будущее',
          description:
            'В этом увлекательном путешествии Мерлин Шелдрейк исследует таинственный мир грибов, чудесную паутину их связей, взаимодействий и общения и показывает, что человечество – всего лишь маленький кусочек большой головоломки.В этой книге – все о бытии грибов, живых лабиринтах, радикальной микологии, мицелиевом сознании и ворохе других интригующих тем. Ведь грибы – куда сложнее и таинственнее, чем нам кажется. Время узнать об их сложной жизни всё.После знакомства с царством грибов любой пересмотрит свои взгляды о том, что такое индивидуальность, разум, сознание и жизнь, ведь грибы сумели создать царство, которое слишком сложно вообразить нам, людям.В формате PDF A4 сохранен издательский макет.',
          pageCount: 328,
          imageSmall:
            'http://books.google.com/books/content?id=TuNJEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=TuNJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 785,
          amount: 348.75,
          authorId: 616,
          categoryId: 15,
          publisherId: 33,
        },
        {
          title: 'Природа',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 810,
          imageSmall:
            'http://books.google.com/books/content?id=sTcDAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sTcDAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 641,
          amount: 3577,
          authorId: 584,
          categoryId: 80,
          publisherId: 38,
        },
        {
          title: 'Руководство по публикации документов XIX в. и начала XX в',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 202,
          imageSmall:
            'http://books.google.com/books/content?id=azoZAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=azoZAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 544,
          amount: 2158,
          authorId: 227,
          categoryId: 19,
          publisherId: 25,
        },
        {
          title: 'Лавина',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 494,
          imageSmall:
            'http://books.google.com/books/content?id=WmNgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WmNgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 793,
          amount: 1676,
          authorId: 228,
          categoryId: 66,
          publisherId: 19,
        },
        {
          title: 'Избранное',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 250,
          imageSmall:
            'http://books.google.com/books/content?id=sxwMAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sxwMAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 448,
          amount: 3893,
          authorId: 229,
          categoryId: 56,
          publisherId: 29,
        },
        {
          title: 'Russkai︠a︡ myslʹ',
          description: '"Ezhemi︠e︡si︠a︡chnoe literaturno-politicheskoe izdanie" (varies slightly).',
          pageCount: 452,
          imageSmall:
            'http://books.google.com/books/content?id=CM9KAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=CM9KAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 752,
          amount: 1119,
          authorId: 282,
          categoryId: 27,
          publisherId: 45,
        },
        {
          title: 'Большая книга ужасов – 60 (сборник)',
          description:
            '«Тьма из подвалов»Друзья Роман и Андрей не раз слышали о том, что в их городе пропадают дети. А однажды узнали: все исчезнувшие ребята учились в их школе! Неужели что-то необычное и пугающее происходит прямо у них под боком? Роман и Андрей знакомятся с девчонкой, которая может обладать важными сведениями... и, кажется, выходят на след пропавших. Только друзья не подозревают, что сами при этом подвергаются большой опасности. Ведь из древних подвалов школы за ними следит настоящее зло.«Черная пустошь»Всем известно, не стоит глубоко заходить в этот лес. Где-то в его чаще находятся заброшенные военные базы и кладбища радиоактивных отходов, кто-то видел издали странных животных. Впрочем, по туристическим тропам бродить вполне безопасно, главное – с них не сходить. Именно по этим тропам и собирались пройти учитель физкультуры и четверо его учеников в рамках расширенного экзамена. И наверняка с ними ничего не случилось бы, если бы одному из ребят в голову не пришла заманчивая мысль...',
          pageCount: 280,
          imageSmall:
            'http://books.google.com/books/content?id=KXlSDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KXlSDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 584,
          amount: 4251,
          authorId: 230,
          categoryId: 28,
          publisherId: 42,
        },
        {
          title: 'Христианство: А-К',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 874,
          imageSmall:
            'http://books.google.com/books/content?id=53zYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=53zYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 63,
          amount: 1968,
          authorId: 22,
          categoryId: 74,
          publisherId: 28,
        },
        {
          title: 'Fondy',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 232,
          imageSmall:
            'http://books.google.com/books/content?id=oEY6AQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=oEY6AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 975,
          amount: 851,
          authorId: 414,
          categoryId: 38,
          publisherId: 25,
        },
        {
          title: 'Stoli͡etīe Voennago Ministerstva 1802-1902. Glavnyĭ red., D.A. Skalon. 1-13 [otd.2] kn. 1 [Imperf.].',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 528,
          imageSmall:
            'http://books.google.com/books/content?id=72l4BlcHOzcC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=72l4BlcHOzcC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 86,
          amount: 4721,
          authorId: 282,
          categoryId: 115,
          publisherId: 18,
        },
        {
          title: 'Путеводитель по фондам Государственного архива Самарской области',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 972,
          imageSmall:
            'http://books.google.com/books/content?id=YucKAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=YucKAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 997,
          amount: 1568,
          authorId: 81,
          categoryId: 75,
          publisherId: 27,
        },
        {
          title:
            'Верный и заботливый муж. Явки, пароли, секреты. Удачное знакомство, быстрое замужество, долгие счастливые отношения',
          description:
            'Вы хотите найти спутника жизни: познакомиться, выстроить отношения, выйти замуж, но почему-то ваше желание даже и не думает сбываться? Вы прочли не одну умную книгу, сформировали желание, отправили его во Вселенную, провели несколько «сильнейших» обрядов на жениха, усвоили все тонкости обращения с противоположным полом, а воз и ныне там? К сожалению, в большинстве многомудрых книг нет ответов на самые простые, и в то же время жизненно важные вопросы: Где все-таки встретить неженатого мужчину? Как действительно привлечь его внимание и не спугнуть? Как понять, что именно с ним вы обретете долгожданное счастье? И как при этом быть Божественной женщиной, а не «охотницей на мужчин». Создается впечатление, что эти сведения засекречены и охраняются так же тщательно, как государственная тайна. Сатья – популярный лектор, ведический психолог, автор и ведущий популярнейших семинаров «Нескучная семейная психология» и «Очарование женственности», снимает гриф секретности и передает вам все «явки и пароли». В его книге (как всегда, наполненной искрометным юмором) вы найдете ответы на вопросы, которые помогут вам оказаться именно там, где водятся потенциальные мужья, и построить отношения, которые будут защищены от ссор, обид, непонимания, измен и прочих неприятностей.',
          pageCount: 183,
          imageSmall:
            'http://books.google.com/books/content?id=ac-PEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ac-PEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 937,
          amount: 1487.5,
          authorId: 173,
          categoryId: 16,
          publisherId: 38,
        },
        {
          title: 'Журнал физической химии',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1562,
          imageSmall:
            'http://books.google.com/books/content?id=o-IiAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=o-IiAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 985,
          amount: 2909,
          authorId: 96,
          categoryId: 76,
          publisherId: 23,
        },
        {
          title: 'Ėnt͡siklopedicheskiĭ slovarʹ Tovarishchestva "Br. A. i I. Granat i Ko.": Tiagotenie',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 420,
          imageSmall:
            'http://books.google.com/books/content?id=EFQOAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EFQOAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 661,
          amount: 505,
          authorId: 404,
          categoryId: 23,
          publisherId: 42,
        },
        {
          title: 'Без усилий',
          description: 'продуктивность, тайм-менеджмент, энергия',
          pageCount: 424,
          imageSmall:
            'http://books.google.com/books/content?id=_F1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_F1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 976,
          amount: 449,
          authorId: 288,
          categoryId: 85,
          publisherId: 34,
        },
        {
          title: '1984',
          description:
            'Počemu dve knigi vmeste? Iz vsech sovremennych antiutopij tol\'ko "2084" javljaetsja diologičnym po otnošeniju k znamenitomu romanu Oruella. V knige Volkova proizošlo to, o čem daže ne dogadyvalis\'... v "1984"-m. Oruell nadejalsja, čto ego predskazanija ne sbudutsja. Volkov uveren - ocenit\' vernost\' ego prognoza budet prosto nekomu.',
          pageCount: 363,
          imageSmall:
            'http://books.google.com/books/content?id=StwojwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=StwojwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 645,
          amount: 1467,
          authorId: 494,
          categoryId: 45,
          publisherId: 8,
        },
        {
          title: 'Россия и Запад',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 210,
          imageSmall:
            'http://books.google.com/books/content?id=p2ofAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=p2ofAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 195,
          amount: 846,
          authorId: 232,
          categoryId: 35,
          publisherId: 11,
        },
        {
          title: 'Zapiski Istoriko-bytovogo otdela Gosudarstvennogo russkogo muzei͡a',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 358,
          imageSmall:
            'http://books.google.com/books/content?id=FJcTAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FJcTAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 720,
          amount: 3608,
          authorId: 552,
          categoryId: 77,
          publisherId: 27,
        },
        {
          title: 'Джедайские техники',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 135,
          imageSmall:
            'http://books.google.com/books/content?id=9t8tDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9t8tDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 956,
          amount: 449,
          authorId: 315,
          categoryId: 57,
          publisherId: 41,
        },
        {
          title: 'SIRIO',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 644,
          imageSmall:
            'http://books.google.com/books/content?id=PPYAAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PPYAAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 55,
          amount: 604,
          authorId: 233,
          categoryId: 18,
          publisherId: 6,
        },
        {
          title: 'Сборник статей, читанных в Отдѣленіи русскаго языка и словесности Императорской академіи наук',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1052,
          imageSmall:
            'http://books.google.com/books/content?id=f_pVAyLuhLMC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=f_pVAyLuhLMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 802,
          amount: 3329,
          authorId: 234,
          categoryId: 72,
          publisherId: 4,
        },
        {
          title: 'Литературное чтение в В-VII классах',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 134,
          imageSmall:
            'http://books.google.com/books/content?id=BacrAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BacrAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 196,
          amount: 3645,
          authorId: 600,
          categoryId: 78,
          publisherId: 41,
        },
        {
          title: 'KPSS o Komsomole i molodezhi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 394,
          imageSmall:
            'http://books.google.com/books/content?id=RHouIxEjQzcC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RHouIxEjQzcC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 244,
          amount: 2771,
          authorId: 235,
          categoryId: 79,
          publisherId: 1,
        },
        {
          title: 'Прыжок в тень',
          description:
            'Джек Филлипс – непростой подросток. Он не переносит солнечный свет и выходит гулять только ночью. Однажды его отец, знаменитый ученый, который работает в секретной лаборатории, пропадает, и Джек со своей подругой Бет отправляется на его поиски, заодно узнавая множество шокирующих тайн. Хватит ли у него смелости взглянуть на жизнь своих близких с другой стороны? Сможет ли он узнать тайну исчезновения своего отца и его разработок? Останется ли он прежним?Захватывающая история о семье, дружбе и преодолении самых сложных испытаний, которые подбрасывает жизнь необычному мальчику с необычными способностями.Золотая медаль Амазона за лучшую книгу для подростков в 2014 году.Для среднего школьного возраста.',
          pageCount: 170,
          imageSmall:
            'http://books.google.com/books/content?id=JDpMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JDpMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 534,
          amount: 523.75,
          authorId: 317,
          categoryId: 28,
          publisherId: 17,
        },
        {
          title: 'Земельный участок с постройками на нем. Введение в российское право недвижимости',
          description:
            'Очерк посвящен основному понятию вещного права – понятию недвижимой вещи. Автор описывает основные подходы к определению того, что является недвижимой вещью по современному российскому праву, сравнивая их с классическим подходом к пониманию недвижимости. В очерке содержится анализ правовых режимов как недвижимости в силу закона, так и недвижимости в силу природы, изучаются основные режимы объектов, состоящих, в свою очередь, из нескольких объектов (сложные, составные вещи), рассматриваются проблемы поэтажной собственности.Книга адресована практикующим юристам – судьям, нотариусам, адвокатам, а также всем, кто интересуется правом недвижимости.',
          pageCount: 141,
          imageSmall:
            'http://books.google.com/books/content?id=4S3MDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4S3MDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 949,
          amount: 487.5,
          authorId: 30,
          categoryId: 37,
          publisherId: 44,
        },
        {
          title: 'Сводъ постановленій о горнопромышленности',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 866,
          imageSmall:
            'http://books.google.com/books/content?id=9G4hAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9G4hAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 479,
          amount: 1082,
          authorId: 103,
          categoryId: 81,
          publisherId: 42,
        },
        {
          title: 'Последние дни наших отцов',
          description:
            'Начало Второй мировой отмечено чередой поражений европейских стран в борьбе с армией Третьего рейха. Чтобы переломить ход войны и создать на территориях, захваченных немцами, свои агентурные сети, британское правительство во главе с Уинстоном Черчиллем создает Управление специальных операций для обучения выходцев с оккупированных территорий навыкам подпольной борьбы, саботажа, пропаганды и диверсионной деятельности. Группа добровольцев-французов проходит подготовку в школах британских спецслужб, чтобы затем влиться в ряды Сопротивления. Кроме навыков коммандос, они обретут настоящую дружбу и любовь. Но война не раз заставит их делать мучительный выбор.В книге присутствует нецензурная брань!В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 407,
          imageSmall:
            'http://books.google.com/books/content?id=1xlUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1xlUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 223,
          amount: 2540,
          authorId: 50,
          categoryId: 1,
          publisherId: 14,
        },
        {
          title: 'Сила веры. 160 дней и ночей наедине с Тихим океаном',
          description:
            'Легендарный российский путешественник Федор Конюхов стал первым человеком на планете, которому удалось пересечь на веслах Южный Тихий океан «от континента до континента». 160 дней и ночей борьбы, испытаний, невероятного упорства и удивительной выдержки – один на один с Океаном! О чем размышляет человек, в одиночестве пересекающий Тихий океан на весельной лодке? Каким святым он молится? С какими словами обращается к сыновьям и внукам? Как преодолевает страх и сомнения? В чем черпает силы и решимость продолжать путь, несмотря на смертельную усталость и опасности? Что такое счастье, по мнению одного из самых известных путешественников планеты? В книге «Сила веры» Федор исповедуется нам об этом путешествии, о своих мыслях и чувствах, об истинах, которые он нашел в своей вере и в Боге. Свобода без границ, доступная только в таком путешествии, позволила Федору Конюхову открыть уникальный путь самопознания, чтобы каждый из нас открыл для Бога свою душу и нашел его там.',
          pageCount: 294,
          imageSmall:
            'http://books.google.com/books/content?id=9za1CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9za1CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 161,
          amount: 448.75,
          authorId: 238,
          categoryId: 8,
          publisherId: 41,
        },
        {
          title: 'Приложенія къ Стенографическимъ отчетамъ Государственной думы',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 3004,
          imageSmall:
            'http://books.google.com/books/content?id=wJk4AQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wJk4AQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 25,
          amount: 4357,
          authorId: 242,
          categoryId: 18,
          publisherId: 40,
        },
        {
          title: 'Наблюдая за англичан крытые правила пов&#',
          description:
            'Считается, что в Англии существует закон, по которому съесть лебедя может только королева. Читать эту книгу и узнать, почему королева пренебрегает этим законом. Эта книга произвела фурор на родине автора, сразу после выхода в свет вызвав шквал восторженных откликов читателей, критиков и социологов. Кейт Фокс, потомственному антропологу, удалось создать смешной и поразительно точный портрет английского общества. Она анализирует причуды, привычки и слабости англичан, но пишет не как антрополог, а как англичанка - с юмором и без помпы, остроумным, выразительным и доступным языком. Нельзя удержаться от смеха, читая про разговоры о погоде, садовых гномиках и чашках чая. Причем забавны не только англичане в целом, забавна и сама Кейт Фокс, и в этом ее величайшее достижение. Книга "Наблюдая за англичанами" - приятное развлекательное чтение с серьезным подтекстом. Книги на русском языке #ReadRussia',
          pageCount: 514,
          imageSmall:
            'http://books.google.com/books/content?id=1__LxQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1__LxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 754,
          amount: 4606,
          authorId: 219,
          categoryId: 80,
          publisherId: 28,
        },
        {
          title: 'Московские книжники',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 168,
          imageSmall:
            'http://books.google.com/books/content?id=xpoXAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xpoXAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 767,
          amount: 3357,
          authorId: 243,
          categoryId: 46,
          publisherId: 15,
        },
        {
          title: 'Russkiĭ evreĭ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 284,
          imageSmall:
            'http://books.google.com/books/content?id=noctAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=noctAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 788,
          amount: 2710,
          authorId: 397,
          categoryId: 31,
          publisherId: 41,
        },
        {
          title: 'Полкороля',
          description:
            'В мире, где властвует грубая сила, юноше с одной рукой нет места. Именно поэтому принц Ярви, младший сын короля Гетланда, выбрал для себя путь Служителя, мудреца, сидящего не на троне, но подле него.Однако Рок распорядился иначе, и Ярви, не король, но «полкороля», вынужден занять отцовский престол. Ему придется столкнуться не только с крушением своих надежд, но и с ложью, жестокостью и предательством.Волею судьбы очутившись в странном обществе изгоев и отбросов, Ярви сможет наконец стать тем человеком, каким ему должно быть.Впервые на русском языке!В формате a4.pdf сохранен издательский макет.',
          pageCount: 321,
          imageSmall:
            'http://books.google.com/books/content?id=iqllCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=iqllCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 849,
          amount: 448.75,
          authorId: 350,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Дом, в котором...',
          description:
            'Роман «Дом, в котором...» еще в рукописи стал победителем читательского голосования премии «Большая книга», а после публикации – настоящим литературным событием: он получил целый ряд премий («Русская премия», «Студенческий Букер», «Портал» и другие), переведен на девять языков и почти десять лет не покидает списки бестселлеров. Критики пытаются объяснить феноменальный успех романа, а литературоведы посвящают ему статьи и диссертации. Для сотен тысяч людей «Дом» стал книгой-паролем, по которому узнают «своих».В новое издание вошли ранее не публиковавшиеся отрывки, а также иллюстрации читателей, которые абсолютно и бесповоротно, раз и навсегда влюбились в «Дом».«Книга, которую вы держите в руках – книга культовая, фанатская, субкультурная. Но не только: как бы банально это ни прозвучало, я завидую тем, кто именно сейчас держит «Дом» в руках впервые – считайте, что специально к вашему визиту в нем сделали генеральную уборку. Заходите, обустраивайтесь. Не ходите к фазанам и постарайтесь не потеряться в Лесу. Кофе и прочие напитки вы найдете на втором этаже. Поверьте, вы останетесь здесь надолго». (Галина Юзефович, литературный критик).Больше интересных фактов об этой книге читайте в ЛитРес: ЖурналеВ формате a4.pdf сохранен издательский макет.',
          pageCount: 1431,
          imageSmall:
            'http://books.google.com/books/content?id=eOJoAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=eOJoAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 336,
          amount: 436.25,
          authorId: 231,
          categoryId: 1,
          publisherId: 24,
        },
        {
          title: 'Книжная лавка',
          description:
            '1959 год, Хардборо. Недавно овдовевшая Флоренс Грин рискует всем, чтобы открыть книжный магазин в маленьком приморском городке. Ей кажется, что это начинание может изменить ее жизнь и жизнь соседей к лучшему. Но не всем по душе ее затея. Некоторые уверены: книги не могут принести особую пользу – ни отдельному человеку, ни уж тем более городу. Одна из таких людей, миссис Гамар, сделает все, чтобы закрыть книжную лавку и создать на ее месте модный «Центр искусств». И у нее может получиться, ведь на ее стороне власть и деньги.Сумеет ли простая женщина спасти свое детище и доказать окружающим, что книги – это вовсе не бессмыслица, а настоящее сокровище?',
          pageCount: 183,
          imageSmall:
            'http://books.google.com/books/content?id=lJVGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lJVGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 903,
          amount: 3231,
          authorId: 303,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'История европейского искусствознания',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 478,
          imageSmall:
            'http://books.google.com/books/content?id=RPQjAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RPQjAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 57,
          amount: 1450,
          authorId: 244,
          categoryId: 3,
          publisherId: 30,
        },
        {
          title: 'Как заказывать печатную продукцию',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 92,
          imageSmall:
            'http://books.google.com/books/content?id=awQ6AAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=awQ6AAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 170,
          amount: 4624,
          authorId: 246,
          categoryId: 82,
          publisherId: 47,
        },
        {
          title: 'Над пропастью во ржи',
          description:
            'Содерж.: Над пропастью во ржи : роман ; повести: Выше стропила, плотники ; Симор: Введение ; Фрэнни ; Зуи ; рассказы: Хорошо ловится рыбка-бананка ; Лапа-растяпа ; Перед самой войной с эскимосами ; Человек, который смеялся ; В лодке, и др.',
          pageCount: 636,
          imageSmall:
            'http://books.google.com/books/content?id=UJyBkgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UJyBkgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 374,
          amount: 1781,
          authorId: 282,
          categoryId: 96,
          publisherId: 17,
        },
        {
          title: 'Как быть веселым, остроумным и креативным',
          description:
            'Если вы хотите научиться шутить в компании, чтобы превратить банальную беседу в интересное остроумное общение, развлекать друзей, а не просто поддерживать скучный разговор, если хотите добиться симпатии окружающих благодаря своему чувству юмора, эта книга для вас. Автор предлагает проверенные вербальные и невербальные способы смешить людей в любой ситуации, основанные на общих принципах шуток. Вы узнаете: как рассказать смешную историю; что такое ирония и самоирония и как их использовать в повседневном общении; что такое дружеские перешучивания; как добавить ролевую игру в любую ситуацию; как обыграть ожидания людей и контрасты; как ввести слушателей в заблуждение; почему смешные шутки должны быть узнаваемыми и понятными; что такое знаменитая «комедийная тройка».Наслаждайтесь жизнью и старайтесь во всем найти смешную сторону.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 126,
          imageSmall:
            'http://books.google.com/books/content?id=tCBVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tCBVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 373,
          amount: 2123.75,
          authorId: 300,
          categoryId: 16,
          publisherId: 31,
        },
        {
          title: 'Uspekhi fizicheskikh nauk',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 834,
          imageSmall:
            'http://books.google.com/books/content?id=1abyAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1abyAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 949,
          amount: 4469,
          authorId: 571,
          categoryId: 84,
          publisherId: 39,
        },
        {
          title: 'Химия и жизнь',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1260,
          imageSmall:
            'http://books.google.com/books/content?id=wb5QAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wb5QAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 41,
          amount: 3685,
          authorId: 34,
          categoryId: 85,
          publisherId: 9,
        },
        {
          title: 'Вино пророчеств',
          description:
            'Роман служит продолжением истории "Мальчика на качелях" и "Отпуска без содержания". Сюжет основан на реальных событиях. Герой пытается осознать перемены, произошедшие в его жизни после возвращения из Америки, ловит подсказки в собственных снах, в разговорах со случайными попутчиками, пытается уловить ту нить, которая выведет его из лабиринта заблуждений и ложных представлений о самом себе.Это книга о приключениях с погружением в подсознание и неожиданными поворотами сюжета, в которых отражается внутренняя жизнь героя.Его отношения с главной героиней проходят испытания, которые становятся тем краеугольным камнем, вокруг которого собирается новая личность героя романа.Этот роман откровенная и подробная хроника трансформаций главного героя, испытывающего настоящие перегрузки в ходе своего путешествия, которое он совершает из внутренней пустыни к новой земле, где он обретает свой дом, любимую женщину и полную свободу самовыражения.Содержит нецензурную брань.',
          pageCount: 150,
          imageSmall:
            'http://books.google.com/books/content?id=2kYnEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2kYnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 232,
          amount: 248.75,
          authorId: 285,
          categoryId: 1,
          publisherId: 13,
        },
        {
          title: 'Дорога волка',
          description:
            'Когда четырнадцатилетний Лукас выживает в автокатастрофе, в которой погибли его родители, он понимает, что волк, стоявший прямо на дороге, и есть причина аварии. И этот волк, кажется, теперь преследует и его самого. Но почему?Дорога волка – это история о преодолениях и потерях, об упорстве и силе духа. Одновременно захватывающий триллер и реалистичное исследование горя, выходящие за рамки обычного фэнтези.Для среднего и старшего школьного возраста.',
          pageCount: 281,
          imageSmall:
            'http://books.google.com/books/content?id=4245EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4245EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 266,
          amount: 561.25,
          authorId: 325,
          categoryId: 1,
          publisherId: 36,
        },
        {
          title: 'Снова почувствуй',
          description:
            '«Снова почувствуй» – третья книга серии «Абсолютный бестселлер Моны Кастен». История Сойер и Исаака, которые тоже будут бороться за свою любовь.Сойер Диксон привыкла быть совершенно одинокой. После трагической смерти родителей она держит всех на расстоянии. Однажды на вечеринке Сойер встречает Исаака Гранта, застенчивого ботаника, который носит смешные очки и дурацкую одежду.Он намерен избавиться от репутации неудачника и считает, что Сойер может ему помочь. Эти двое заключают договор: она сделает из Исаака «плохого парня» и устроит свидание с девушкой, а взамен снимет на камеру весь процесс преображения для своего проекта.Вроде бы все просто. Только Сойер не рассчитывала, что внезапно возникшие чувства помешают ей выполнить свою часть сделки.Мона Кастен – автор международного бестселлера «Спаси меня». Тираж ее книг уже перевалил отметку в 250 000 экземпляров в России и 2 млн экземпляров в Германии! Именно эта серия открыла писательнице путь на верхние строчки рейтингов немецких магазинов.Идеально подойдет всем, кто полюбил оригинальную трилогию Моны Кастен, а также является поклонником творчества Анны Тодд и Пенелопы Дуглас.О трендах современного янг-эдалта читайте в ЛитРес: Журнале',
          pageCount: 433,
          imageSmall:
            'http://books.google.com/books/content?id=y7FiEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=y7FiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 635,
          amount: 348.75,
          authorId: 270,
          categoryId: 1,
          publisherId: 31,
        },
        {
          title: 'Knizhnai͡a li͡etopisʹ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1694,
          imageSmall:
            'http://books.google.com/books/content?id=5bwrAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5bwrAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 629,
          amount: 1115,
          authorId: 472,
          categoryId: 21,
          publisherId: 35,
        },
        {
          title: 'Григорий без отчества Бабочкин',
          description:
            'Григорий Бабочкин и Герман Сто... нет, Герман Бабочкин и Григорий Столяров. Два совершенно непохожих подростка. Один мечтает стать хоккеистом, идёт к этому семимильными шагами, попутно становясь любимцем всех вокруг. Другой – объект всеобщих насмешек, но при этом как будто... бесстрашный? безрассудный?Две противоположности сходятся, открывают друг в друге что-то, чего им самим недостаёт. Кажется, что эта Настоящая Мужская Дружба поможет обоим справиться с чем угодно: с тревогой перед соревнованием, с семейными трудностями и непониманием близких, с травлей и насмешками. Так и есть – но лишь до тех пор, пока в дело не вмешивается первая любовь. Пока незнакомое чувство не запускает часовой механизм – который взорвёт мину замедленного действия в самый неожиданный момент...Новый роман Анны Зеньковой – удивительной силы текст, раскрывающий личности 14-летних героев во всём противоречии и во всём том общем, что есть у подростков. Построенная в форме двух аудиодневников, которые Григорий и Герман ведут в течение учебного года, книга отзовётся в душе у каждого – подростка или взрослого.Анна Зенькова – молодая писательница, победитель конкурса «Подросток N», организованного «КомпасГидом» совместно с «Лабиринтом» в 2019 году. Её дебютная повесть «С горячим приветом от Фёклы» удостоилась Крапивинской премии в почетной номинации «Выбор Командора», а едва выйдя в свет, попала в списки лучших детских произведений и получила множество хвалебных отзывов – в том числе как «достоверная книга о взрослении, в которой нет разделения на добрых и злых персонажей, но есть место обстоятельствам жизни и личному выбору». Вторая изданная «КомпасГидом» книга Анны Зеньковой, «Григорий без отчества Бабочкин», столь же осторожно касается неоднозначных семейных и социальных тем – и создаёт правдивый портрет поколения.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 269,
          imageSmall:
            'http://books.google.com/books/content?id=wGoUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wGoUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 684,
          amount: 577.5,
          authorId: 286,
          categoryId: 28,
          publisherId: 43,
        },
        {
          title: 'Лев Толстой',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 962,
          imageSmall:
            'http://books.google.com/books/content?id=UzUsAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UzUsAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 446,
          amount: 3469,
          authorId: 456,
          categoryId: 64,
          publisherId: 35,
        },
        {
          title: 'Все свободны: История о том, как в 1996 году в России закончились выборы',
          description:
            'Конец 1995 года. Старому президенту очень сложно отказаться от власти — особенно когда его окружение уверяет, что никто, кроме него, не справится. Даже лежа на больничной койке после инфаркта, Борис Ельцин решает баллотироваться вновь. Эти выборы станут переломными в истории России. Сторонники президента приложат все возможные и невозможные усилия ради сохранения свободы. И вроде бы одержат победу. Но в итоге получат прямо противоположное тому, за что боролись.',
          pageCount: 458,
          imageSmall:
            'http://books.google.com/books/content?id=SFMMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SFMMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 693,
          amount: 549,
          authorId: 315,
          categoryId: 5,
          publisherId: 7,
        },
        {
          title: 'Е.Е. Лансере',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 144,
          imageSmall:
            'http://books.google.com/books/content?id=ZA0cAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZA0cAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 271,
          amount: 4577,
          authorId: 248,
          categoryId: 88,
          publisherId: 6,
        },
        {
          title: 'Совы охотятся ночью',
          description:
            'Смерть знаменитого писателя Алана Конвея поставила точку в редакторской карьере Сьюзен Райленд. Теперь она управляет отелем на берегу Эгейского моря, однако не слишком успешно — денег катастрофически не хватает. Скучая по лондонской суете, Сьюзен подумывает о том, не сбежать ли из этого райского местечка, и кажется, сама судьба подкидывает ей шанс. Супруги-англичане обращаются к Райленд за помощью, обещая хорошо заплатить. Исчезла их дочь, успев признаться родителям, что на страницах детективного романа Конвея нашла ключ к разгадке кровавого преступления, совершенного восемь лет назад в Суффолке... Редактором этой книжной серии, оказывается, была Сьюзен. Удастся ли ей распутать хитросплетения авторской мысли? Мисс Райленд срочно отправляется в Англию, испытывая настоящий азарт сыщика, и ей не сразу приходит в голову, что нельзя безнаказанно ворошить тайны прошлого. Но это становится очевидным, когда над ней нависает смертельная опасность... Роман в романе, литературная игра, полная загадок и мистификаций. Впервые на русском!',
          pageCount: 396,
          imageSmall:
            'http://books.google.com/books/content?id=EsNfEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EsNfEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 751,
          amount: 413,
          authorId: 239,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Наследие Хоторнов',
          description:
            '«Наследие Хоторнов» – продолжение мирового бестселлера «Игры наследников». Необычный детектив-квест, наполненный неожиданными сюжетными поворотами и головоломками. Интриги, романтика, увлекательный сюжет, любовный треугольник и напряженная игра.Борьба за наследство продолжается!Еще недавно Эйвери Грэмбс была сиротой, которая сводила концы с концами. Она мечтала получить стипендию и начать новую жизнь. Но потом узнала о смерти одного из богатейших людей в стране. Самое неожиданное, что Тобиас Хоторн завещал ей сорок шесть миллиардов долларов.Чтобы унаследовать богатство, Эйвери пришлось сыграть в опасную игру, придуманную эксцентричным стариком. Теперь Эйвери предстоит узнать, почему миллиардер выбрал именно ее. И почему был уверен, что только она сможет объединить его семью.Топ-10 бестселлеров The New York Times.Готовится экранизация от Amazon.Идеально подойдет для поклонников фильма «Достать ножи», сериала «Дом ключей», а также творчества Карен М. Макманус и Морин Джонсон.',
          pageCount: 406,
          imageSmall:
            'http://books.google.com/books/content?id=yHViEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yHViEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 111,
          amount: 273.75,
          authorId: 482,
          categoryId: 1,
          publisherId: 3,
        },
        {
          title: 'Как устроена экономика',
          description:
            "В этой книге экономист из Кембриджа Ха-Джун Чанг в занимательной и доступной форме объясняет, как на самом деле работает мировая экономика.Автор предлагает читателю идеи, которых не найдешь в учебниках по экономике, и делает это с глубоким знанием истории, остроумием и легким пренебрежением к традиционным экономическим концепциям. Книга будет полезной для тех, кто интересуется экономикой и хочет лучше понимать, как устроен мир. Книга издательства 'Манн, Иванов и Фербер'.",
          pageCount: 304,
          imageSmall:
            'http://books.google.com/books/content?id=ceC6BwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ceC6BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 525,
          amount: 449,
          authorId: 249,
          categoryId: 10,
          publisherId: 18,
        },
        {
          title: 'Исследования по лексикологии и грамматике русского языка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 322,
          imageSmall:
            'http://books.google.com/books/content?id=EWzRAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EWzRAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 849,
          amount: 1464,
          authorId: 250,
          categoryId: 72,
          publisherId: 28,
        },
        {
          title: 'О священнослужителях',
          description:
            'В книгах серии «Детям о Православии» разговор идет о самом важном – о вере, о том, что дает нам силу духа и возможность прожить счастливую жизнь. Дети с удовольствием читают эти книги, в них все рассказано просто и интересно, а цветные картинки делают текст еще более понятным.Книга «О священнослужителях» рассказывает детям о людях, посвятивших себя и свою жизнь служению Богу, людям и Церкви, показывает непрерывную нить рукоположений от апостолов до священника, который принимает у ребенка исповедь.',
          pageCount: 33,
          imageSmall:
            'http://books.google.com/books/content?id=BZKNDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=BZKNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 183,
          amount: 186.25,
          authorId: 335,
          categoryId: 92,
          publisherId: 25,
        },
        {
          title: 'Дневник дизайнера-маньяка',
          description:
            'Это книга о дизайнерах и для дизайнеров — откровенный разговор о наболевшем. Сначала она существовала в виде сетевого дневника, который для издания на бумаге был переписан и снабжен иллюстрациями. Яна Франк делится своими мыслями о профессии, предлагает ответы на «вечные вопросы»: должен ли дизайнер уметь рисовать, существует ли идеальный заказчик, где брать свежие идеи, чем отличается плагиат от работы с материалом. Авторские рецепты спасения проектов от провала можно использовать и в качестве пособия по тому, как загубить любое хорошее начинание. Впервые книга была выпущена в 2006 году. Электронная версия основана на четвертом, дополненном, издании, вышедшем в 2014 году. Издательство Студии Артемия Лебедева, 2014',
          pageCount: 453,
          imageSmall:
            'http://books.google.com/books/content?id=9ZJ9q5Ur0MAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9ZJ9q5Ur0MAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 706,
          amount: 1183,
          authorId: 306,
          categoryId: 101,
          publisherId: 30,
        },
        {
          title: 'Зайчик Сева не хочет идти в детский сад! Полезные сказки 1+',
          description:
            'Зайчик Сева стал совсем большой, и ему пора идти в детский сад! Но Сева не хочет... А что случилось дальше, вы узнаете из сказки, поучительной и полезной. Это не просто великолепно иллюстрированные истории про непоседливого зайку и его друзей для семейного чтения, но и материал для беседы, «что такое хорошо и что такое плохо». В конце книги предлагаются вопросы, составленные детским педагогом-психологом для обсуждения с ребёнком. Книга рекомендована родителям, воспитателям, педагогам. Полезные сказки воспитывают ребёнка без крика и наказаний!',
          pageCount: 32,
          imageSmall:
            'http://books.google.com/books/content?id=1FBbDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1FBbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 935,
          amount: 235,
          authorId: 340,
          categoryId: 92,
          publisherId: 7,
        },
        {
          title:
            'Собрание сочинений: Rodnoe slovo . Kniga dli︠a︡ deteĭ, god pervyĭ i vtoroĭ ; Rodnoe slovo. Kniga dli︠a︡ uchashchikhsi︠a︡',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 456,
          imageSmall:
            'http://books.google.com/books/content?id=4e4VAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4e4VAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 102,
          amount: 523,
          authorId: 540,
          categoryId: 15,
          publisherId: 44,
        },
        {
          title: 'Неизбежность Пасхи. Великопостные письма',
          description:
            'Раскрывая пласты богословских, культурных, философских и психологических смыслов, «Великопостные письма» архимандрита Саввы (Мажуко) вдохновляют, заражают любовью к богослужению и Великому посту. В книге приводятся исторические факты о том, как сложилась современная традиция поста, и убедительные аргументы против преобладания запретов, уподобляющих церковный народ фарисеям.',
          pageCount: 393,
          imageSmall:
            'http://books.google.com/books/content?id=NOVTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NOVTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 255,
          amount: 4097,
          authorId: 162,
          categoryId: 8,
          publisherId: 24,
        },
        {
          title: "Izvi︠e︡stīi︠a︡ knizhnykh magazinov t-va M.O. Vol'f po literaturi︠e︡, naukam i biblīografīi",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 934,
          imageSmall:
            'http://books.google.com/books/content?id=dVkwAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dVkwAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 590,
          amount: 1881,
          authorId: 427,
          categoryId: 46,
          publisherId: 27,
        },
        {
          title: 'Полный коммерческій словарь',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 320,
          imageSmall:
            'http://books.google.com/books/content?id=M3RBAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=M3RBAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 55,
          amount: 4136,
          authorId: 254,
          categoryId: 89,
          publisherId: 20,
        },
        {
          title: "Simeon Polockij's Library",
          description:
            "Apart from his importance for 17th century Russian literature, Simeon Polockij was a learned man who assembled the largest private library in Moscow. His 600 books by mostly Catholic authors writing in Latin and Polish confirm the view that Simeon was a Trojan horse of Western learning in the largely conservative Orthodox milieu of Moscow. His collection is today preserved as part of the Synodal Press Library in the Russian State Archive of Ancient Documents. This book for the first time separates out Simeon's collection from the larger library and describes it. The alphabetical catalogue records publication details, collations, owner's inscriptions and editorial information.",
          pageCount: 252,
          imageSmall:
            'http://books.google.com/books/content?id=rw7hAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=rw7hAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 38,
          amount: 2724,
          authorId: 256,
          categoryId: 5,
          publisherId: 44,
        },
        {
          title: 'Зов Ктулху',
          description:
            'Имя Говарда Филлипса Лавкрафта прогремело на весь мир как эталон литературы ужасов. Одаренный искусством изящной словесности, он писал о страшных тенях в углу и о том, что недоступно обычным смертным, а лишь избранным. Его современники и сегодняшние герои хоррор-историй отдают дань рассказам Лавкрафта. В сборник вошли топ‐10 рассказов Говарда Филлипса Лавкрафта. Подборка лучших произведений ужасов, которые сделали его тем самым великим и могучим повелителем жанра, – «Зов Ктулху», «Дагон», «Потаенный ужас», «Данвичский кошмар» и др.',
          pageCount: 353,
          imageSmall:
            'http://books.google.com/books/content?id=JgioEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JgioEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 222,
          amount: 286.25,
          authorId: 295,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Энциклопедическій словаръ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 550,
          imageSmall:
            'http://books.google.com/books/content?id=JGIdAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JGIdAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 179,
          amount: 2570,
          authorId: 318,
          categoryId: 23,
          publisherId: 42,
        },
        {
          title: "Sobranie uzakoneniǐ i raspori͡azheniǐ pravitel'stva",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 3006,
          imageSmall:
            'http://books.google.com/books/content?id=U3xAAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=U3xAAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 681,
          amount: 4295,
          authorId: 103,
          categoryId: 21,
          publisherId: 16,
        },
        {
          title: 'КОМПАС-3D V19. Самоучитель',
          description:
            'Книга, которую вы держите в руках, адресована студентам, начинающим пользователям, программистам и системным администраторам операционной системы Linux. Она представляет собой введение во внутреннее устройство Linux — от ядра до сетевых служб и от утилит командной строки до графического интерфейса. Все части операционной системы рассматриваются в контексте типичных задач, решаемых на практике, и поясняются при помощи соответствующего инструментария пользователя, администратора и разработчика. Всё положения наглядно проиллюстрированы примерами, разработанными и проверенными автором с целью привить читателю навыки самостоятельного исследования постоянно эволюционирующей операционный системы Linux.',
          pageCount: 624,
          imageSmall:
            'http://books.google.com/books/content?id=9fMrEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9fMrEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 759,
          amount: 720,
          authorId: 323,
          categoryId: 109,
          publisherId: 35,
        },
        {
          title: 'Справочник издателя и автора',
          description:
            'У настоящего справочника две основные задачи: 1) обосновать рациональную форму элементов издания и видов текста, а также их выбор в зависимости от вида издания, характера его содержания, читательского назначения и т. д., чтобы авторы и издатели могли, делая книгу или другое издание, лучше удовлетворять запросы и потребности своих читателей, максимально упростили бы восприятие и извлечение информации из книжных и других изданий; 2) снабдить читателей, издающих и создающих книги и другие издания, систематизированным справочным материалом, который необходимо постоянно иметь под рукой в процессе работы над оригиналом издания; подсказать решение многих редакционно-технических задач, вплоть до самых мелких, чтобы можно было опереться на готовые образцы, а не искать, как следует оформить тот или иной элемент в ходе редакционной обработки оригинала, и тем самым сократить время на нее. В то же время авторы старались не просто изложить нормы, правила, рекомендации по принципу «Делай так», а обосновать их таким образом, чтобы их можно было выполнять осмысленно и видоизменять в зависимости от особенностей издания. Справочник адресован самому широкому кругу авторов и издательских работников — от тех, кому приходится руководить подготовкой изданий к выпуску, до тех, кто занимается ее мельчайшими деталями. Издательство Студии Артемия Лебедева, 2015',
          pageCount: 1440,
          imageSmall:
            'http://books.google.com/books/content?id=dv-mC8T4fasC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dv-mC8T4fasC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 611,
          amount: 2498,
          authorId: 314,
          categoryId: 17,
          publisherId: 10,
        },
        {
          title:
            'Polovina 1-2, vyp. 1. Perīad vtoroĭ, moskovskīĭ, ot nashestvīi︠a︡ mongolov do mitropolita Makarīi︠a︡ vkli︠u︡chitelʹno. 2 v',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 638,
          imageSmall:
            'http://books.google.com/books/content?id=GpY3AQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=GpY3AQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 972,
          amount: 1399,
          authorId: 259,
          categoryId: 18,
          publisherId: 4,
        },
        {
          title: 'Записки Императорской академіи наук по Историко-филологическому отдѣленію. VIIIe série',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 638,
          imageSmall:
            'http://books.google.com/books/content?id=NWxHAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NWxHAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 700,
          amount: 3137,
          authorId: 260,
          categoryId: 5,
          publisherId: 12,
        },
        {
          title: 'Собрание сочинений',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 697,
          imageSmall:
            'http://books.google.com/books/content?id=Ks4sAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ks4sAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 549,
          amount: 2763,
          authorId: 261,
          categoryId: 101,
          publisherId: 3,
        },
        {
          title: 'Радости и горести знаменитой Молль Фландерс',
          description:
            '«Золотой фонд мировой литературы» - коллекция электронных книг, включающая лучшие образцы мировой художественной литературы, представляет собой максимально исчерпывающий список самых читаемых книг мира. Каждое из произведений, изданных под обложкой этой серии, входит в один или сразу несколько списков лучших книг по разным версиям, которые не противопоставляются один другим, а гармонично объединяются, чтобы предоставить читателю наибольший выбор. «Радости и горести знаменитой Молль Фландерс» – плутовской роман выдающегося английского писателя Даниэля Дефо (англ. Daniel Defoe, 1660–1731). *** В основе повествования – исповедь видавшей виды и неожиданно разбогатевшей виргинской плантаторши. Сколько бы ни пришлось пережить главной героине, она находит в себе силы жить дальше... Даниэль Дефо – знаменитый писатель и публицист эпохи Просвещения, основоположник приключенческого, биографического и психологического романа в европейской литературе. Автор известен благодаря незабываемым приключениям Робинзона Крузо. Также среди его произведений – продолжение истории находчивого моряка «Дальнейшие приключения Робинзона Крузо», захватывающие романы «Жизнь и пиратские приключения славного капитана Сингльтона», «Счастливая куртизанка, или Роксана», «История полковника Джека».',
          pageCount: 737,
          imageSmall:
            'http://books.google.com/books/content?id=6XZKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=6XZKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 278,
          amount: 3,
          authorId: 240,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Бармалей',
          description:
            'Маленькая книжечка под страшным названием «Бармалей» – это две знаменитые сказки К. И. Чуковского про доктора Айболита, а ещё история про лентяйку и грязнулю Федору, которую перевоспитали тарелки и кастрюли. Книжечка маленькая, а почитать есть что.Для дошкольного возраста.',
          pageCount: 66,
          imageSmall:
            'http://books.google.com/books/content?id=g7V-DQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=g7V-DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 50,
          amount: 1175,
          authorId: 612,
          categoryId: 28,
          publisherId: 27,
        },
        {
          title: 'Ogonek',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1064,
          imageSmall:
            'http://books.google.com/books/content?id=-uEiAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-uEiAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 891,
          amount: 951,
          authorId: 118,
          categoryId: 137,
          publisherId: 24,
        },
        {
          title: 'Литература в школе',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1044,
          imageSmall:
            'http://books.google.com/books/content?id=wkchAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wkchAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 570,
          amount: 620,
          authorId: 526,
          categoryId: 78,
          publisherId: 18,
        },
        {
          title: 'Королевская школа. Часть 1. Пария',
          description:
            'Как быть, если в двенадцать лет тебя лишили родителей, выгнали из дома, отобрали титул, земли, богатства, а единственным человеком, приютившим тебя, стала старенькая няня? Что делать, если в шестнадцать тебя уже сватают замуж и не принимают отказа? Единственный выход – бежать. Поступить в королевскую школу, полный курс которой оплатил отец незадолго до смерти. И постараться выжить среди ненависти, унижений, клеветы и притворства. Потому, что назад дороги нет.',
          pageCount: 267,
          imageSmall:
            'http://books.google.com/books/content?id=9205EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9205EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 562,
          amount: 136.25,
          authorId: 305,
          categoryId: 1,
          publisherId: 16,
        },
        {
          title: 'Принц и нищий. The Prince and the Pauper: На английском языке с параллельным русским текстом',
          description:
            'Книгу составляет повесть классика американской литературы Марка Твэна (1835–1910) о юном короле Англии Эдуарде VI, основанная на историческом сюжете. Описываемые события относятся к XVI столетию. Произведение написано в 1881 году. Однако и сегодня оно остаётся одним из наиболее любимых и ярких приключенческих произведений в мире.Юный принц и будущий монарх, до поры абсолютно не представлявший, с какими бедами и горестями сталкиваются простые подданные его королевства, по воле прихотливого случая оказывается в низших слоях общества. Он мыкается среди нищих и воров, живёт среди крестьян, попадает в лапы к безумному религиозному фанатику, проходя при этом испытание голодом, холодом и одиночеством. И этот урок Эдуард Тюдор постигает не напрасно. «Королям, – искренне признается он, – должно посещать школу собственных законов, учась милосердию».Художественный перевод неадаптированного английского текста на русский язык способствует лучшему пониманию оригинала произведения, а параллельная визуализация ускоряет набор и закрепление лексики в памяти. В целом это уменьшает необходимость использовать словарь, экономит время и не отвлекает от чтения.Книга также будет полезна и для носителей английского языка, изучающих русский язык.Издание включает примечания автора и снабжено примечаниями издательства к тексту',
          pageCount: 1152,
          imageSmall:
            'http://books.google.com/books/content?id=I7dDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=I7dDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 582,
          amount: 186.25,
          authorId: 42,
          categoryId: 28,
          publisherId: 11,
        },
        {
          title: 'Аля, Кляксич и буква А.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 44,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 319,
          amount: 599,
          authorId: 298,
          categoryId: 120,
          publisherId: 28,
        },
        {
          title: 'Как быть веселым, остроумным и креативным',
          description:
            'Если вы хотите научиться шутить в компании, чтобы превратить банальную беседу в интересное остроумное общение, развлекать друзей, а не просто поддерживать скучный разговор, если хотите добиться симпатии окружающих благодаря своему чувству юмора, эта книга для вас. Автор предлагает проверенные вербальные и невербальные способы смешить людей в любой ситуации, основанные на общих принципах шуток. Вы узнаете: как рассказать смешную историю; что такое ирония и самоирония и как их использовать в повседневном общении; что такое дружеские перешучивания; как добавить ролевую игру в любую ситуацию; как обыграть ожидания людей и контрасты; как ввести слушателей в заблуждение; почему смешные шутки должны быть узнаваемыми и понятными; что такое знаменитая «комедийная тройка».Наслаждайтесь жизнью и старайтесь во всем найти смешную сторону.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 126,
          imageSmall:
            'http://books.google.com/books/content?id=tCBVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tCBVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 370,
          amount: 2123.75,
          authorId: 300,
          categoryId: 16,
          publisherId: 47,
        },
        {
          title: 'Казни Дьявольского Акра',
          description:
            'Судьба странного мира висит на волоске – монстр, уже не раз пытавшийся его погубить, вернулся и собирает армию. Приближается последняя битва. Дожди из крови, костей и пепла – будто египетские казни – обрушились на последнее прибежище странных людей. Джейкобу Портману и его друзьям предстоит бой с порождениями тьмы. И вся надежда на спасение сосредоточена в древнем пророчестве о семерых, которые «должны закрыть дверь».Иллюстрациями к этому напряженному повествованию, как и к предыдущим книгам серии, служат причудливые и жутковатые винтажные фотографии, которые автор коллекционирует на протяжении многих лет.',
          pageCount: 550,
          imageSmall:
            'http://books.google.com/books/content?id=EJtUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EJtUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 402,
          amount: 623.75,
          authorId: 310,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Граф Монте-Кристо I',
          description:
            '«Граф Монте-Кристо» - приключенческий роман, одно из самых известных произведений Александра Дюма. На фоне бурного политического периода Франции повествуется о судьбе одного молодого человека Эдиона Дантеса. Первая часть романа рассказывает о его заключении в крепость Иф. Дантес узнает о спрятанном сокровище, ему удается бежать, находит его и начинает свой заговор мести. Молодой человек принимает новое имя и проникает в те самые круги, из которых происходят его враги. Описание 14-летних невзгод Дантеса, его решимости выкопать туннель и последующая авантюрная жизнь возмездия делают эту первую половину книги увлекательной и запоминающейся историей, которая остается с читателем надолго. Александр Дюма (1802-1870) – французский писатель, драматург и журналист, мастер приключенческого романа. Много путешествовал, вёл активный образ жизни. Дюма много зарабатывал, но много и тратил, любил роскошь. Издавал журналы, газету и создал собственный Исторический театр. Самые известные его романы – «Граф Монте-Кристо», «Три мушкетёра» и «Двадцать лет спустя». По его произведениям снято более двухсот фильмов.',
          pageCount: 879,
          imageSmall:
            'http://books.google.com/books/content?id=erI_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=erI_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 505,
          amount: 147.32,
          authorId: 302,
          categoryId: 1,
          publisherId: 28,
        },
        {
          title: 'Аля, Кляксич и буква А.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 44,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 411,
          amount: 2024,
          authorId: 298,
          categoryId: 67,
          publisherId: 10,
        },
        {
          title: 'Главная книга о воспитании. Как здорово быть с детьми',
          description:
            'Дети – наше счастье! Сколько радости и счастливых моментов дарят нам эти шалопаи и шалуньи! Но воспитание – сложный и сбалансированный процесс, где каждому родителю надо умело находить подход к ребенку в любом возрасте, будь это период кризиса трех лет или первые подростковые сложности.В этой книге собраны советы от Ларисы Сурковой для детей всех возрастов —от младенцев до подростков. Все тексты дополнены новыми главами и материалами, которые помогут вам еще лучше понять своего ребенка.От 1 до 3 лет:[ul]нужно ли вводить запреты и наказывать ребенка;как организовать поход к врачу;необходимы ли для развития малыша специальные методики;как помочь ребенку выстраивать социальные отношения.[/ul]От 3 до 7 лет:[ul]как реагировать на детские фантазии и истерики;как выбрать детский сад и школу;как развить усидчивость и научить ребенка проигрывать;как решить проблему нарушения пищевого поведения.[/ul]От 8 до 13 лет:[ul]как найти с ребенком общий язык;как контролировать его агрессию;как сохранить родительский авторитет;как оградить подростка от дурного влияния.[/ul]',
          pageCount: 418,
          imageSmall:
            'http://books.google.com/books/content?id=FQFhCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FQFhCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 979,
          amount: 561.25,
          authorId: 299,
          categoryId: 14,
          publisherId: 23,
        },
        {
          title: 'Королевская школа. Часть 1. Пария',
          description:
            'Как быть, если в двенадцать лет тебя лишили родителей, выгнали из дома, отобрали титул, земли, богатства, а единственным человеком, приютившим тебя, стала старенькая няня? Что делать, если в шестнадцать тебя уже сватают замуж и не принимают отказа? Единственный выход – бежать. Поступить в королевскую школу, полный курс которой оплатил отец незадолго до смерти. И постараться выжить среди ненависти, унижений, клеветы и притворства. Потому, что назад дороги нет.',
          pageCount: 267,
          imageSmall:
            'http://books.google.com/books/content?id=9205EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9205EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 867,
          amount: 136.25,
          authorId: 305,
          categoryId: 1,
          publisherId: 26,
        },
        {
          title: 'Сила веры. 160 дней и ночей наедине с Тихим океаном',
          description:
            'Легендарный российский путешественник Федор Конюхов стал первым человеком на планете, которому удалось пересечь на веслах Южный Тихий океан «от континента до континента». 160 дней и ночей борьбы, испытаний, невероятного упорства и удивительной выдержки – один на один с Океаном! О чем размышляет человек, в одиночестве пересекающий Тихий океан на весельной лодке? Каким святым он молится? С какими словами обращается к сыновьям и внукам? Как преодолевает страх и сомнения? В чем черпает силы и решимость продолжать путь, несмотря на смертельную усталость и опасности? Что такое счастье, по мнению одного из самых известных путешественников планеты? В книге «Сила веры» Федор исповедуется нам об этом путешествии, о своих мыслях и чувствах, об истинах, которые он нашел в своей вере и в Боге. Свобода без границ, доступная только в таком путешествии, позволила Федору Конюхову открыть уникальный путь самопознания, чтобы каждый из нас открыл для Бога свою душу и нашел его там.',
          pageCount: 294,
          imageSmall:
            'http://books.google.com/books/content?id=9za1CgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9za1CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 225,
          amount: 448.75,
          authorId: 238,
          categoryId: 8,
          publisherId: 28,
        },
        {
          title: 'БУДЬ лучшей версией себя',
          description:
            "В этой книге описаны истории обычных людей, добившихся неординарного успеха. От них веет невероятной энергией. Они никого не оставят равнодушным и обязательно вдохновят вас на новые достижения в профессиональной и личной жизни, потому что это истории из жизни реальных людей из разных областей деятельности, которые рискнули и добились выдающегося результата. Книга издательства 'Манн, Иванов и Фербер'.",
          pageCount: 203,
          imageSmall:
            'http://books.google.com/books/content?id=24A5BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=24A5BgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 58,
          amount: 449,
          authorId: 582,
          categoryId: 13,
          publisherId: 26,
        },
        {
          title: 'Сегодня я увидела...',
          description:
            'Первая публикация на русском языке сборника философских эссе Делии Стейнберг Гусман, известного философа, писателя, музыканта, чьи книги и статьи изданы уже во многих странах мира. Внимательный взгляд, полный сострадания к миру, философский склад ума и душевная тонкость человека искусства позволяют автору в самом, казалось бы, простом и обыденном явлении повседневности увидеть глубину, найти пищу для души.',
          pageCount: 252,
          imageSmall:
            'http://books.google.com/books/content?id=VVtfAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VVtfAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 202,
          amount: 112.37,
          authorId: 301,
          categoryId: 15,
          publisherId: 44,
        },
        {
          title: 'Zhurnalist',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1022,
          imageSmall:
            'http://books.google.com/books/content?id=kHZlAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kHZlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 31,
          amount: 3941,
          authorId: 327,
          categoryId: 100,
          publisherId: 46,
        },
        {
          title: 'КОМПАС-3D V19. Самоучитель',
          description:
            'Книга, которую вы держите в руках, адресована студентам, начинающим пользователям, программистам и системным администраторам операционной системы Linux. Она представляет собой введение во внутреннее устройство Linux — от ядра до сетевых служб и от утилит командной строки до графического интерфейса. Все части операционной системы рассматриваются в контексте типичных задач, решаемых на практике, и поясняются при помощи соответствующего инструментария пользователя, администратора и разработчика. Всё положения наглядно проиллюстрированы примерами, разработанными и проверенными автором с целью привить читателю навыки самостоятельного исследования постоянно эволюционирующей операционный системы Linux.',
          pageCount: 624,
          imageSmall:
            'http://books.google.com/books/content?id=9fMrEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9fMrEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 997,
          amount: 720,
          authorId: 323,
          categoryId: 95,
          publisherId: 6,
        },
        {
          title: 'Сердце для стража',
          description:
            'Он знал, что не первый в списке тех, кому повезло чуть больше, чем другим. И подозревал, что не последний. По слухам где-то здесь бродит как минимум один доброволец из проекта конкурентов. И доброволец непростой – психопат с манией убийства себе подобных холодным оружием.Случалось, ему снились встречи с «конкурентами», и ни один из этих снов не был приятным.И вот наконец сны начинают прорываться в реальность. Увы, момент не слишком подходящий, чтобы выяснять, так ли уж страшен черт, как рассказывают. У него ничего не осталось – ни верных воинов, ни сильного флота, даже ботинок и тех нет. Сохранилось только то, что не потрогать руками: опыт, закаленный характер, новые навыки и возможности.',
          pageCount: 378,
          imageSmall:
            'http://books.google.com/books/content?id=B5CbAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=B5CbAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 724,
          amount: 2024,
          authorId: 264,
          categoryId: 1,
          publisherId: 8,
        },
        {
          title: 'Фрейлина. Моя невероятная жизнь в тени Королевы',
          description:
            'Благодаря своим знатным родителям леди Энн Гленконнер c детства дружила с будущей королевой Елизаветой II и ее сестрой, принцессой Маргарет. Всю свою долгую жизнь Энн находилась вблизи монаршей семьи: присутствовала на коронации Елизаветы II и была фрейлиной принцессы Маргарет вплоть до ее смерти в 2002 году. Дружба и обязанности при дворе омрачались личными трагедиями: неудачный брак со взбалмошным бароном Гленконнером, оставившим все состояние слуге, смерть двух сыновей и кома третьего сына. Все это время Энн продолжала сопровождать королевскую семью по всему миру и развивать карибский остров Мюстик, ставший любимым пристанищем не только принцессы Маргарет, но и знаменитостей по всему миру. «Фрейлина» – это откровенная и трогательная история женской дружбы и жизни в золотой клетке, проливающая свет на тайны королевского двора.В формате PDF A4 сохранен издательский макет.',
          pageCount: 307,
          imageSmall:
            'http://books.google.com/books/content?id=UuNSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UuNSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 467,
          amount: 298.75,
          authorId: 307,
          categoryId: 12,
          publisherId: 46,
        },
        {
          title: 'Чудовища и красавицы. Опасные сказки',
          description:
            'СТАРЫЕ СКАЗКИ МЕРТВЫ.Пришло время новых сказок для новых Читателей, точно знающих, что Чудовищу верить нельзя, а история Золушки не закончилась хеппи-эндом. Спящей Красавице совсем необязательно ждать спасения от Прекрасного принца, а Гензель и Гретель не то чтобы совсем уж беспомощные малыши. Принцы же порой совершенно не интересуются принцессами.Что если мы – НОВЫЕ ЧИТАТЕЛИ – правы, и всё было совсем не так, как все привыкли думать?12 ОПАСНЫХ СКАЗОК,12 историй, вселяющих надежду на то, что будущее за нами.Каждому под силу написать СВОЮ СОБСТВЕННУЮ НОВУЮ СКАЗКУ.',
          pageCount: 300,
          imageSmall:
            'http://books.google.com/books/content?id=ZrJhEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZrJhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 54,
          amount: 286.25,
          authorId: 292,
          categoryId: 1,
          publisherId: 4,
        },
        {
          title: 'Наблюдая за англичан крытые правила пов&#',
          description:
            'Считается, что в Англии существует закон, по которому съесть лебедя может только королева. Читать эту книгу и узнать, почему королева пренебрегает этим законом. Эта книга произвела фурор на родине автора, сразу после выхода в свет вызвав шквал восторженных откликов читателей, критиков и социологов. Кейт Фокс, потомственному антропологу, удалось создать смешной и поразительно точный портрет английского общества. Она анализирует причуды, привычки и слабости англичан, но пишет не как антрополог, а как англичанка - с юмором и без помпы, остроумным, выразительным и доступным языком. Нельзя удержаться от смеха, читая про разговоры о погоде, садовых гномиках и чашках чая. Причем забавны не только англичане в целом, забавна и сама Кейт Фокс, и в этом ее величайшее достижение. Книга "Наблюдая за англичанами" - приятное развлекательное чтение с серьезным подтекстом. Книги на русском языке #ReadRussia',
          pageCount: 514,
          imageSmall:
            'http://books.google.com/books/content?id=1__LxQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1__LxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 571,
          amount: 3005,
          authorId: 219,
          categoryId: 74,
          publisherId: 22,
        },
        {
          title: 'Я, редактор',
          description: 'писательское мастерство, контент-маркетинг, писательская серия николая кононова',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=RF1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RF1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 345,
          amount: 449,
          authorId: 308,
          categoryId: 125,
          publisherId: 28,
        },
        {
          title: 'Проданные сокровища России',
          description:
            'Om försäljningen av fr.a. ryska nationalklenoder till internationella konstsamlare och museer under åren 1918-1937.',
          pageCount: 306,
          imageSmall:
            'http://books.google.com/books/content?id=_iVYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_iVYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 484,
          amount: 3839,
          authorId: 309,
          categoryId: 3,
          publisherId: 30,
        },
        {
          title: 'Работа по любви',
          description: 'мечты и цели, мотивация, уверенность в себе, саморазвитие, вдохновение',
          pageCount: 223,
          imageSmall:
            'http://books.google.com/books/content?id=cV1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cV1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 729,
          amount: 449,
          authorId: 311,
          categoryId: 96,
          publisherId: 22,
        },
        {
          title: 'Литературные портреты',
          description:
            'Литературные портреты известных людей, выдающихся личностей писатель создавал не один год. Они вошли в целую, полновесную, а главное – неимоверно увлекательную книгу. Очерки, новеллы, эссе Константина Паустовского написаны удивительно сочным языком, с массой выразительных деталей, подчеркивающих оригинальность и самобытность героев. Какой же интересной – загадочной, трагической, беззаботной, тяжелой – была их жизнь.',
          pageCount: 188,
          imageSmall:
            'http://books.google.com/books/content?id=fyM_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fyM_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 44,
          amount: 99.97,
          authorId: 19,
          categoryId: 12,
          publisherId: 5,
        },
        {
          title: 'Азбука умной собачки Сони',
          description:
            'Собачка Соня – самый популярный персонаж Андрея Усачева – детского писателя, признанного классика современной детской литературы, чьи произведения покорили миллионы детей и взрослых!Умная собачка Соня давно выучила буквы и составила настоящую собачью азбуку, очень полезную, как для неграмотных собачек, так и для маленьких детей. Веселые стихи Андрея Усачева на каждую букву алфавита доставят радость и малышам, и их родителям!',
          pageCount: 65,
          imageSmall:
            'http://books.google.com/books/content?id=SKMlDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SKMlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 737,
          amount: 286.25,
          authorId: 313,
          categoryId: 92,
          publisherId: 5,
        },
        {
          title: 'Женский ум в проекте жизни',
          description:
            '«Я всегда был влюблен в женщину. Я анализировал и изучал ее во всех подробностях, пытаясь понять, почему она мне нравится, почему так притягивает? Эта проблема занимала мой ум, поэтому при очередном столкновении с женской противоречивостью я предполагал, что либо сам чего-то недопонимаю, либо у этой женщины слишком трудная жизнь... Мы живем на планете, где ум делится на мужской и женский. Какой же интерес может представлять для мужского ума – как важный момент в его реализации – связь с женщиной? И наоборот. Постараюсь показать идеал, проект, реальность – то, что жизнь хранит внутри женщины...»',
          pageCount: 375,
          imageSmall:
            'http://books.google.com/books/content?id=Xn2gCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Xn2gCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 511,
          amount: 675,
          authorId: 287,
          categoryId: 16,
          publisherId: 23,
        },
        {
          title: 'Большая книга сказок и стихов',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 684,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 461,
          amount: 4513,
          authorId: 51,
          categoryId: 102,
          publisherId: 44,
        },
        {
          title: 'Джедайские техники',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1152,
          imageSmall:
            'http://books.google.com/books/content?id=9t8tDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9t8tDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 982,
          amount: 449,
          authorId: 315,
          categoryId: 123,
          publisherId: 5,
        },
        {
          title: 'Щелкунчик',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 512,
          imageSmall:
            'http://books.google.com/books/content?id=MY2qDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MY2qDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 604,
          amount: 25,
          authorId: 131,
          categoryId: 108,
          publisherId: 16,
        },
        {
          title: 'Вселенная на твоей стороне. Как превратить страх в надежду на лучшее',
          description:
            'Как сохранить внутреннюю гармонию и продолжать радоваться жизни в мире стремительных перемен и бесконечных катаклизмов, рассказывает в своей новой книге автор бестселлеров New York Times, специалист по йоге и медитации Габриэль Бернштейн. Мы все чаще чувствуем себя растерянными, одинокими и бессильными в мире вечной спешки, плохих новостей и негатива в соцсетях. Кажется, наша жизнь больше не принадлежит нам, но Габриэль Бернштейн уверена: все может измениться к лучшему, если будете следовать путем любви и жить в согласии со своим «я» и истинными законами Вселенной. А помогут вам в этом простые упражнения, элементы йоги, медитации, настрои и, конечно, истории и примеры из жизни самой Габриэль. Истории, рассказанные ею, и уроки Вселенной помогут вам освободиться от страха, что что-то в вашей жизни в очередной раз пойдет не так, и тщетных усилий держать все под контролем. Вместе с этой книгой вы сможете расслабиться – и наконец-то почувствовать себя свободными, самодостаточными и способными радоваться каждому дню. Не нужно гоняться за жизнью – остановитесь и просто живите!',
          pageCount: 230,
          imageSmall:
            'http://books.google.com/books/content?id=2TiEDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2TiEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 293,
          amount: 939,
          authorId: 316,
          categoryId: 8,
          publisherId: 38,
        },
        {
          title: 'Прыжок в тень',
          description:
            'Джек Филлипс – непростой подросток. Он не переносит солнечный свет и выходит гулять только ночью. Однажды его отец, знаменитый ученый, который работает в секретной лаборатории, пропадает, и Джек со своей подругой Бет отправляется на его поиски, заодно узнавая множество шокирующих тайн. Хватит ли у него смелости взглянуть на жизнь своих близких с другой стороны? Сможет ли он узнать тайну исчезновения своего отца и его разработок? Останется ли он прежним?Захватывающая история о семье, дружбе и преодолении самых сложных испытаний, которые подбрасывает жизнь необычному мальчику с необычными способностями.Золотая медаль Амазона за лучшую книгу для подростков в 2014 году.Для среднего школьного возраста.',
          pageCount: 170,
          imageSmall:
            'http://books.google.com/books/content?id=JDpMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JDpMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 268,
          amount: 523.75,
          authorId: 317,
          categoryId: 28,
          publisherId: 16,
        },
        {
          title: 'Молния на двоих',
          description:
            'День у Леры не задался с самого утра: сначала на любимом костюме обнаружилось пятно, затем директор предпочел видеть на месте руководителя не ее, а коллегу-мужчину, так вдобавок еще и под ливень попала и застряла на остановке с самодовольным пикап-мастером Ником. Может ли случиться что-то более ужасное? Разве только то, что спустя пару минут в них ударит молния, и Лера очнется в неповоротливом мужском теле, а ее тело окажется во власти Ника!Получится ли у феминистки и пикапера обмануть окружающих и притвориться друг другом, пока не найдут способ поменяться обратно? И будут ли они готовы поделиться не только любимой пижамой, но и тайнами?',
          pageCount: 354,
          imageSmall:
            'http://books.google.com/books/content?id=EpXqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EpXqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 887,
          amount: 273.75,
          authorId: 535,
          categoryId: 1,
          publisherId: 10,
        },
        {
          title: 'Имени такого-то',
          description:
            'Октябрь 1941 года. Немецкие войска приближаются к Москве, а работающая в тяжелейших условиях психиатрическая больница имени такого-то ждет приказа об эвакуации. В атмосфере тревожного ожидания чувства героев достигают высочайшего накала, а больничный и военный быт становится все более осязаемым. История находящихся в смертельной опасности людей, больных и медиков, превращается в многослойную аллегорию, в которой переплетается военная историческая реальность и поэтический вымысел, самоотверженный подвиг и безумие, страх и надежда. К написанию этой книги автор готовилась много лет, опираясь на историю сложнейшей эвакуации московской больницы им. Алексеева (более известной как «Кащенко»). Линор Горалик — писательница, поэтесса и журналистка, преподавательница НИУ ВШЭ и Шанинки.',
          pageCount: 192,
          imageSmall:
            'http://books.google.com/books/content?id=RTVdEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RTVdEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 766,
          amount: 249,
          authorId: 582,
          categoryId: 40,
          publisherId: 42,
        },
        {
          title: 'Срочно требуется Пушкин! Прикольные рассказы',
          description:
            'В сборник вошли весёлые рассказы о школе лучших отечественных писателей – В. Драгунского, И. Пивоваровой, С. Махотина, А. Гиваргизова и других. Из книги дети узнают, как действуют на школьников «Возбудин» и «Соновит», что за зверь – ядовитый клювоног, как получить пятёрку за рисунок кота в тетради по математике и что хранится в ларчике у учительницы по литературе. Остроумные истории поднимут настроение и заставят хохотать любого.Для младшего школьного возраста.',
          pageCount: 168,
          imageSmall:
            'http://books.google.com/books/content?id=kWGyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kWGyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 668,
          amount: 1391,
          authorId: 318,
          categoryId: 28,
          publisherId: 19,
        },
        {
          title: 'Жизнь - это подарок',
          description:
            'Сборник коротких историй из обычной жизни, пропитанных горячим солнцем, греческой душевностью и глубокой житейской мудростью. Твой источник поддержки на каждый день. Книга, которая поможет находить радость в обычных вещах и стать счастливее.',
          pageCount: 259,
          imageSmall:
            'http://books.google.com/books/content?id=mVU0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mVU0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 625,
          amount: 449,
          authorId: 319,
          categoryId: 13,
          publisherId: 43,
        },
        {
          title: 'Принц и нищий. The Prince and the Pauper: На английском языке с параллельным русским текстом',
          description:
            'Книгу составляет повесть классика американской литературы Марка Твэна (1835–1910) о юном короле Англии Эдуарде VI, основанная на историческом сюжете. Описываемые события относятся к XVI столетию. Произведение написано в 1881 году. Однако и сегодня оно остаётся одним из наиболее любимых и ярких приключенческих произведений в мире.Юный принц и будущий монарх, до поры абсолютно не представлявший, с какими бедами и горестями сталкиваются простые подданные его королевства, по воле прихотливого случая оказывается в низших слоях общества. Он мыкается среди нищих и воров, живёт среди крестьян, попадает в лапы к безумному религиозному фанатику, проходя при этом испытание голодом, холодом и одиночеством. И этот урок Эдуард Тюдор постигает не напрасно. «Королям, – искренне признается он, – должно посещать школу собственных законов, учась милосердию».Художественный перевод неадаптированного английского текста на русский язык способствует лучшему пониманию оригинала произведения, а параллельная визуализация ускоряет набор и закрепление лексики в памяти. В целом это уменьшает необходимость использовать словарь, экономит время и не отвлекает от чтения.Книга также будет полезна и для носителей английского языка, изучающих русский язык.Издание включает примечания автора и снабжено примечаниями издательства к тексту',
          pageCount: 612,
          imageSmall:
            'http://books.google.com/books/content?id=I7dDDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=I7dDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 580,
          amount: 186.25,
          authorId: 42,
          categoryId: 28,
          publisherId: 1,
        },
        {
          title: 'Zhurnal Vsesii͡uznoe khimicheskoe obshchestvo imeni D. I. Mendeleeva',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 140,
          imageSmall:
            'http://books.google.com/books/content?id=-48QAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-48QAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 560,
          amount: 765,
          authorId: 313,
          categoryId: 103,
          publisherId: 13,
        },
        {
          title: 'Дама с собачкой',
          description:
            'Антон Павлович Чехов - великий русский писатель, "главный" драматург двадцатого века создал за 26 лет своей литературной деятельности около тысячи произведений, без которых невозможно представить сегодня ни кино, ни сцену, ни книжный магазин в любом городе мира.',
          pageCount: 18,
          imageSmall:
            'http://books.google.com/books/content?id=4lBMSczK3vUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4lBMSczK3vUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 661,
          amount: 33,
          authorId: 320,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Три твоих имени',
          description:
            'Ритка живет в деревне с сестрой и пьющими родителями. Третьеклассницу, аккуратистку Марго взяла в свою семью медсестра детдома. Почти взрослая Гошка надеется, что дурная слава защитит ее от окружающих. Но у каждой из них есть шанс стать счастливой. И все они – одна девочка. От того, как повернется ее судьба, зависит, какое имя станет настоящим. Пронзительная история ребенка, потерявшего родителей и попавшего в детский дом, читается на одном дыхании. И все же самое сильное в этой книге – другое: в смешанном хоре голосов, рассказывающих историю Маргариты Новак, не слышно ни фальши, ни лукавства. Правда переживаний, позволяющая читателю любого пола и возраста ощутить себя на месте героев заставляет нас оглянуться и, быть может, вовремя протянуть кому-то руку помощи.',
          pageCount: 176,
          imageSmall:
            'http://books.google.com/books/content?id=-7yrBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-7yrBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 245,
          amount: 612.5,
          authorId: 321,
          categoryId: 28,
          publisherId: 32,
        },
        {
          title: 'Дорога волка',
          description:
            'Когда четырнадцатилетний Лукас выживает в автокатастрофе, в которой погибли его родители, он понимает, что волк, стоявший прямо на дороге, и есть причина аварии. И этот волк, кажется, теперь преследует и его самого. Но почему?Дорога волка – это история о преодолениях и потерях, об упорстве и силе духа. Одновременно захватывающий триллер и реалистичное исследование горя, выходящие за рамки обычного фэнтези.Для среднего и старшего школьного возраста.',
          pageCount: 281,
          imageSmall:
            'http://books.google.com/books/content?id=4245EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4245EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 518,
          amount: 561.25,
          authorId: 325,
          categoryId: 1,
          publisherId: 11,
        },
        {
          title: 'Раз, два – пряжку застегни',
          description:
            'Что могло заставить преуспевающего респектабельного дантиста Морли покончить жизнь самоубийством? У него не было ни проблем с рассудком, ни недостатка в деньгах, ни любовной трагедии. Знаменитый сыщик Эркюль Пуаро, который в течение долгого времени являлся его клиентом, не верит в версию самоубийства. Расследуя это дело, бельгиец встречается и ведет беседы со старыми пациентами доктора Морли, его партнерами и друзьями. В результате у Пуаро складывается твердое убеждение, что дантиста уже давно собирались убить. Причем не его одного...',
          pageCount: 252,
          imageSmall:
            'http://books.google.com/books/content?id=cD6JCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cD6JCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 646,
          amount: 644,
          authorId: 322,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Когда мы мечтаем',
          description:
            'Что будет, если участник самой знаменитой k-pop-группы влюбится в обычную девушку?Девятнадцатилетняя Элла – студентка. Ее жизнь заполнена лекциями, книгами и заботой о младшей сестре. Вместо шумных вечеринок и встреч с друзьями она проводит время с блокнотом для рисования.Однажды Элла встречает Чжэ Ёна, обаятельного и уверенного в себе парня. Но Элла не догадывается, что он – участник NXT, самой известной k-pop-группы в мире.Как долго Чжэ Ён будет скрывать правду о своей настоящей личности? И что он выберет: музыкальную карьеру или любовь?',
          pageCount: 322,
          imageSmall:
            'http://books.google.com/books/content?id=5fAgEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5fAgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 872,
          amount: 198.75,
          authorId: 331,
          categoryId: 1,
          publisherId: 43,
        },
        {
          title: 'Poi︠u︡shchie v ternovnike',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 602,
          imageSmall:
            'http://books.google.com/books/content?id=4tMLNQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4tMLNQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 887,
          amount: 1156,
          authorId: 339,
          categoryId: 28,
          publisherId: 26,
        },
        {
          title: '15 дней молитвы с митрополитом Антонием Сурожским',
          description:
            'Глубокий и многогранный духовный опыт митрополита Антония Сурожского стал неоценимым подспорьем для современных людей, стремящихся к жизни с Богом. Книга протоиерея Михаила Евдокимова дает нам возможность войти в молитву вместе с владыкой и приблизиться к собственному пониманию ключевых для его личного опыта тем.В формате PDF A4 сохранен издательский макет.',
          pageCount: 100,
          imageSmall:
            'http://books.google.com/books/content?id=HwIxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HwIxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 500,
          amount: 250,
          authorId: 324,
          categoryId: 8,
          publisherId: 26,
        },
        {
          title: 'Образцы шрифтов',
          description:
            'Эта книга – сборник прекрасных шрифтовых примеров, составленный Яном Чихольдом, известным типографом и художником книги. В издание попали шрифты исключительной красоты, находящиеся вне времени и моды, – настоящие образцы для подражания в шрифтовом дизайне. Многие ценные исторические иллюстрации приведены в реальном размере и тщательно отретушированы автором, поэтому выглядят лучше, чем в плохо сохранившихся оригиналах.Прежде чем представить коллекцию образцов, Чихольд скрупулезно анализирует форму и устройство букв, разбирает плохие и хорошие шрифты, пишет об использовании прописных и строчных знаков, межбуквенном и междустрочном расстояниях. Много внимания уделено правильному подбору шрифта к задаче, шрифтовым композициям и типографике в городской среде.Издание содержит множество высококачественных иллюстраций, поэтому желательно просматривать его на устройствах с высоким разрешением экрана.По просьбе правообладателя полная версия книги распространяется исключительно в формате ePub',
          pageCount: 215,
          imageSmall:
            'http://books.google.com/books/content?id=5V1jAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5V1jAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 747,
          amount: 4956,
          authorId: 471,
          categoryId: 6,
          publisherId: 45,
        },
        {
          title: 'Сегодня я увидела...',
          description:
            'Первая публикация на русском языке сборника философских эссе Делии Стейнберг Гусман, известного философа, писателя, музыканта, чьи книги и статьи изданы уже во многих странах мира. Внимательный взгляд, полный сострадания к миру, философский склад ума и душевная тонкость человека искусства позволяют автору в самом, казалось бы, простом и обыденном явлении повседневности увидеть глубину, найти пищу для души.',
          pageCount: 252,
          imageSmall:
            'http://books.google.com/books/content?id=VVtfAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VVtfAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 854,
          amount: 112.37,
          authorId: 301,
          categoryId: 15,
          publisherId: 17,
        },
        {
          title: 'Магазинчик счастья Кейт и Клары',
          description:
            'Добро пожаловать в уютный городок Сент-Феликс, где летний воздух искрит романтикой и волшебством.Мечты сбываются! Кейт открыла свой маленький ремесленный магазинчик в портовом городке Сент-Феликс.Но вскоре Кейт обнаруживает, что магазинчик хранит тайну, и связана она с историей любви.Джек, владелец соседней художественной лавки, решает помочь ей разгадать секреты магазинчика. Герои еще не знают, что их судьбы связаны с влюбленными из прошлого.Смогут ли Кейт и Джек исправить ошибку шестидесятилетней давности и обрести свое счастье?«Городок Сент-Феликс украл мое сердце». – Кэти Брамли«Приятная история, наполненная заразительным юмором». – Миранда Дикинс«Идеальное легкое чтение». – SunСвое богатое воображение Эли Макнамара объясняет тем, что росла в семье одна. В детстве она так много мечтала о приключениях, что в ее голове скопилась уйма историй, которые просились наружу. Она записывала их ради удовольствия и выкладывала на сайте Ронана Китинга, и когда они стали настолько популярными, что были проданы в рамках благотворительного проекта по профилактике онкологических заболеваний, Эли поняла, что если ей нравится писать книги, то другим нравится их читать.',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=u7xSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=u7xSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 914,
          amount: 323.75,
          authorId: 354,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Повесть о Ходже Насреддине',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 364,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 340,
          amount: 1151,
          authorId: 8,
          categoryId: 94,
          publisherId: 32,
        },
        {
          title: 'Zhurnalist',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1022,
          imageSmall:
            'http://books.google.com/books/content?id=kHZlAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kHZlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 320,
          amount: 1097,
          authorId: 480,
          categoryId: 100,
          publisherId: 39,
        },
        {
          title: 'Азбука умной собачки Сони',
          description:
            'Собачка Соня – самый популярный персонаж Андрея Усачева – детского писателя, признанного классика современной детской литературы, чьи произведения покорили миллионы детей и взрослых!Умная собачка Соня давно выучила буквы и составила настоящую собачью азбуку, очень полезную, как для неграмотных собачек, так и для маленьких детей. Веселые стихи Андрея Усачева на каждую букву алфавита доставят радость и малышам, и их родителям!',
          pageCount: 65,
          imageSmall:
            'http://books.google.com/books/content?id=SKMlDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SKMlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 514,
          amount: 286.25,
          authorId: 313,
          categoryId: 92,
          publisherId: 24,
        },
        {
          title: 'Дочь для волка',
          description:
            'Рэд – единственная Вторая Дочь, которая родилась в королевской семье Валлейды за целый век. И у нее только одно предназначение – быть принесенной в жертву Волку. Монстру, что живет в Диколесье и когда-то пленил пятерых богов этого мира.Для самой Рэд такой исход – почти избавление. Ведь внутри нее живет опасная сила, которую невозможно контролировать. Быть может, в Диколесье девушка не сможет вновь причинить зло тем, кого любит.Но легенды лгут. Волк – не монстр, а человек. Магия Рэд – ее призвание, а не проклятие. И если девушка не узнает, как ее использовать, истинные монстры поглотят Диколесье... а с ним и весь мир.Сказочный ретеллинг для поклонников Мариссы Мейер, Кристины Генри и Наоми Новик! История Красной Шапочки, какой вы её ещё не видели + мрачная версия «Красавицы и Чудовища». Книга стала бестселлером New York Times немедленно после выхода. Невероятная атмосфера, яркая любовная линия, запоминающиеся персонажи – всё, что мы любим в сказках.',
          pageCount: 530,
          imageSmall:
            'http://books.google.com/books/content?id=vHViEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vHViEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 659,
          amount: 348.75,
          authorId: 378,
          categoryId: 1,
          publisherId: 14,
        },
        {
          title: 'Решения Федерального Верховного суда Германии по гражданским делам в 2020 г. 11—18',
          description:
            'Настоящая книга содержит сборник решений Федерального Верховного суда Германии по гражданским делам, принятым в 2020 г. В качестве кассационной инстанции судом рассмотрены актуальные споры в области договорного, вещного и деликтного права.',
          pageCount: 1063,
          imageSmall:
            'http://books.google.com/books/content?id=SYk5EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SYk5EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 730,
          amount: 495,
          authorId: 358,
          categoryId: 10,
          publisherId: 16,
        },
        {
          title: 'Госпожа принцесса',
          description:
            'В другой мир по приглашению богини? А почему бы и нет! Тем более что сироту Злату ничего в этом мире уже не держит и терять ей тоже нечего. Даже любимую тетрадь с бабушкиными рецептами домашней косметики удалось прихватить. Да здравствует новая жизнь в новом теле принцессы с чудными ушками и хвостиком! И ничего страшного, что придется отправляться на смотрины невест для наследника в соседнюю страну. Злата – девушка благоразумная и на принцев не падкая, особенно если у них пунктик насчет ушастых и хвостатых. Руки прочь от хвоста, мы еще посмотрим, что это за принц такой и нужен ли он нам вообще!',
          pageCount: 260,
          imageSmall:
            'http://books.google.com/books/content?id=-H5aEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-H5aEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 133,
          amount: 1855,
          authorId: 278,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Лиса и журавль',
          description:
            '«Лиса с журавлём подружились. Вот вздумала лиса угостить журавля, пошла звать его к себе в гости: – Приходи, куманёк, приходи, дорогой! Уж я тебя угощу!..»',
          pageCount: 3,
          imageSmall:
            'http://books.google.com/books/content?id=mSdjAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mSdjAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 948,
          amount: 25,
          authorId: 237,
          categoryId: 1,
          publisherId: 33,
        },
        {
          title: 'Подлинная история Анны Карениной',
          description:
            '«Анна Каренина» – наверное, самое загадочное произведение Льва Толстого. Почему оно до сих пор вызывает споры? Мы многого не знаем о суровых законах и парадоксальных нравах золотого девятнадцатого века. Павел Басинский исследует роман глазами любопытного и преданного читателя. Факты, собранные вместе, удивляют, обескураживают и дают объяснение многим странностям этой трагической истории любви.Павел Басинский – писатель, журналист, литературовед. Его увлекательные документальные книги о жизни и творчестве Льва Толстого подняли в обществе новую волну интереса к феномену «яснополянского апостола» («Лев Толстой: Бегство из рая», «Святой против Льва», «Лев в тени Льва»). Лауреат премии «Большая книга».Книга проиллюстрирована редкими фотографиями и живописью из архива музея-усадьбы «Ясная Поляна» и Государственного музея Л. Н. Толстого.В формате PDF A4 сохранен издательский макет.',
          pageCount: 350,
          imageSmall:
            'http://books.google.com/books/content?id=P_ViEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=P_ViEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 150,
          amount: 561.25,
          authorId: 297,
          categoryId: 99,
          publisherId: 25,
        },
        {
          title: 'Послушай моё сердце',
          description:
            'Книга живого классика итальянской литературы Бьянки Питцорно «Послушай мое сердце» вышла в 1991 году и сразу же завоевала читательскую любовь. В автобиографическом романе писательница рассказывает об одном школьном годе в начале 1950-х. Абсурдные эпизоды, показывающие самодурство взрослых и беззащитность детей перед их несправедливостью, перемежаются со смешными сочинениями главной героини, историями про черепаху, хроникой борьбы с Подлизами и Лицемерками и девичьей болтовней',
          pageCount: 368,
          imageSmall:
            'http://books.google.com/books/content?id=XCa5BgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=XCa5BgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 837,
          amount: 299,
          authorId: 139,
          categoryId: 28,
          publisherId: 38,
        },
        {
          title: 'Фрейлина. Моя невероятная жизнь в тени Королевы',
          description:
            'Благодаря своим знатным родителям леди Энн Гленконнер c детства дружила с будущей королевой Елизаветой II и ее сестрой, принцессой Маргарет. Всю свою долгую жизнь Энн находилась вблизи монаршей семьи: присутствовала на коронации Елизаветы II и была фрейлиной принцессы Маргарет вплоть до ее смерти в 2002 году. Дружба и обязанности при дворе омрачались личными трагедиями: неудачный брак со взбалмошным бароном Гленконнером, оставившим все состояние слуге, смерть двух сыновей и кома третьего сына. Все это время Энн продолжала сопровождать королевскую семью по всему миру и развивать карибский остров Мюстик, ставший любимым пристанищем не только принцессы Маргарет, но и знаменитостей по всему миру. «Фрейлина» – это откровенная и трогательная история женской дружбы и жизни в золотой клетке, проливающая свет на тайны королевского двора.В формате PDF A4 сохранен издательский макет.',
          pageCount: 307,
          imageSmall:
            'http://books.google.com/books/content?id=UuNSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=UuNSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 213,
          amount: 298.75,
          authorId: 307,
          categoryId: 12,
          publisherId: 32,
        },
        {
          title: 'Я, редактор',
          description: 'писательское мастерство, контент-маркетинг, писательская серия николая кононова',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=RF1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RF1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 762,
          amount: 449,
          authorId: 308,
          categoryId: 50,
          publisherId: 22,
        },
        {
          title: 'Клуб',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 540,
          imageSmall:
            'http://books.google.com/books/content?id=L258Ty0wujkC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L258Ty0wujkC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 202,
          amount: 2179,
          authorId: 409,
          categoryId: 97,
          publisherId: 8,
        },
        {
          title: 'Преображение Господне. Антология святоотеческих проповедей',
          description:
            'Святоотеческая антология на Преображение Господне включает творения разных традиций и эпох, византийских, латинских и русских авторов – от святителя Иоанна Златоуста до святителя Луки Крымского. Впервые публикуются переводы проповедей на Преображение блаженного Августина и преподобного Григория Синаита. Издание предваряет вводная статья П. Ю. Малкова, призванная в ясной и доступной форме познакомить читателя с важнейшими богословскими и нравственными особенностями святоотеческого учения о Преображении Господнем.',
          pageCount: 264,
          imageSmall:
            'http://books.google.com/books/content?id=L-pqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L-pqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 856,
          amount: 411.25,
          authorId: 343,
          categoryId: 8,
          publisherId: 42,
        },
        {
          title: 'Академия Зла. Испытание ведьмой',
          description:
            'Хуже ведьмы – только влюбленная ведьма, а хуже влюбленной – только разочарованная.Ох, плохо усвоили эту прописную истину ректор Академии Зла и декан факультета Контроля... И за какую-то нелепую ошибку – подумаешь, случайно приворожила преподавателя! – перевели меня на этот самый факультет. Но я же ведьма, а ведьмочки должны учиться только на Ведовском факультете! Ничего, они еще пожалеют... И ректор, и декан! Они обязательно пожалеют... Вот увидите!Ведьмочки никогда не сдаются! Могут от страха поседеть, но не сдаться...',
          pageCount: 1083,
          imageSmall:
            'http://books.google.com/books/content?id=6p-nCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=6p-nCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 186,
          amount: 186.25,
          authorId: 336,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title:
            'Практический интеллект. Как критически мыслить, моделировать ситуации, глубоко анализировать и никогда не обманываться',
          description:
            '«Практический интеллект» – это не обычная книга о том, как «эффективно думать». Нет, она начинается с рассмотрения биологических основ мышления, рассказывая, как перепрограммировать его с инстинктивного на аналитическое и проникать в суть вещей, чтобы на основе полученной информации принимать лучшее из возможных решений. Эта книга представляет реальный, действенный набор инструментов, поскольку правильное мышление – это, прежде всего, КАК, а не почему или что. Вы узнаете: как должны взаимодействовать тело и мозг, реализуя задачу быстрого мышления; как это в действительности – мыслить глубоко и анализировать; как думать о своем мышлении – и какие препятствия стоят на пути добрых намерений. Главное, чтобы вы сразу смогли применять на практике представленные здесь модели мышления, пока они не станут привычкой. И тогда вы сможете раскрывать скрытые детали, избегать ловушек мышления, быстрее осознавать происходящее, а не слепо доверять всему, что мы видим, слышим и чувствуем. Практический интеллект – это поиск истины.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 190,
          imageSmall:
            'http://books.google.com/books/content?id=PkY-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PkY-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 958,
          amount: 2123.75,
          authorId: 300,
          categoryId: 16,
          publisherId: 24,
        },
        {
          title: 'Поэтика феминизма',
          description:
            'Феминистская поэзия – важный, новаторский и очень интересный сегмент современной поэзии. Она отражает и перерабатывает все самое острое, что есть на сегодня в феминистской повестке, и делает это блестяще. Авторы этой книги – журналистка и литературный критик – с разных сторон подходят к тому, что такое современная русскоязычная фемпоэзия, объясняют, откуда она взялась, где и как ее читать. А главное, знакомят с поэтессами и их стихами. Если вы не любите поэзию, эта книга для вас: вы прочитаете эти стихи, и они навсегда перевернут ваши представления о поэзии. Если вы любите классическую поэзию – эта книга тоже для вас: вы удивитесь и по-новому посмотрите на мир и на саму поэзию. Ну а если вы интересуетесь феминизмом, книга станет вашей отдушиной и, возможно, вдохновением.В формате PDF A4 сохранен издательский макет.',
          pageCount: 307,
          imageSmall:
            'http://books.google.com/books/content?id=D-9GEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=D-9GEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 275,
          amount: 473.75,
          authorId: 96,
          categoryId: 99,
          publisherId: 19,
        },
        {
          title: 'Литературные портреты',
          description:
            'Литературные портреты известных людей, выдающихся личностей писатель создавал не один год. Они вошли в целую, полновесную, а главное – неимоверно увлекательную книгу. Очерки, новеллы, эссе Константина Паустовского написаны удивительно сочным языком, с массой выразительных деталей, подчеркивающих оригинальность и самобытность героев. Какой же интересной – загадочной, трагической, беззаботной, тяжелой – была их жизнь.',
          pageCount: 188,
          imageSmall:
            'http://books.google.com/books/content?id=fyM_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fyM_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 373,
          amount: 99.97,
          authorId: 19,
          categoryId: 12,
          publisherId: 33,
        },
        {
          title: 'Мужской стиль в лидерстве и жизни',
          description:
            'Название этой книги на итальянском языке «Il modo maschio» дословно можно перевести как мужской способ; имеется в виду способ действия, существования, т.е. способ как стиль или образ жизни мужчины в целом. Разумеется, речь идет о мужчине-лидере, о высшем уровне воплощения и реализации мужского ума. Книга адресована тем мужчинам, которым важно испытывать ощущение полного счастья и удовлетворения, что, в свою очередь, подразумевает развитие в себе качеств, обеспечивающих постоянный рост и самореализацию. Главное в жизни мужчины – это его дело, вся остальная диалектика выстраивается в зависимости от этой ключевой точки. В случае если эта логика нарушается – начинается полоса потерь, неудач, разочарований. Главная же проблема человека-мужчины – это человек-женщина: там, где возможно великое удовольствие, жизнь одновременно создает и большую проблему.«Измерение истинного мужчины остается прерогативой мудрецов, оно не для всех. Мужское чувство-смысл – это интеллектуальная позиция, способность и выбор».В оформлении обложки использована графика А. Менегетти «Адам».В формате PDF A4 сохранен издательский макет.',
          pageCount: 222,
          imageSmall:
            'http://books.google.com/books/content?id=pdPiCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=pdPiCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 853,
          amount: 600,
          authorId: 287,
          categoryId: 16,
          publisherId: 45,
        },
        {
          title: 'Хорошо с друзьями',
          description:
            'Хорошо с друзьями весело играть. Хорошо с друзьями книгу почитать. Хорошо с друзьями рыбок разводить. Хорошо с друзьями по морю поплыть. Хорошо с друзьями звёзды изучать. Хорошо с друзьями просто помолчать! Хорошо с друзьями! Очень хорошо! Я всегда с друзьями, а ты своих нашёл?',
          pageCount: 219,
          imageSmall:
            'http://books.google.com/books/content?id=HHG_CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HHG_CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 29,
          amount: 100,
          authorId: 366,
          categoryId: 106,
          publisherId: 42,
        },
        {
          title: 'Короли и капуста',
          description:
            'Содерж.: Короли и капуста : повесть ; новеллы: из сб. "Четыре миллиона", "Сердце Запада", "Горящий светильник", "Голос большого города", "Благородный жулик"',
          pageCount: 396,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 690,
          amount: 4565,
          authorId: 399,
          categoryId: 40,
          publisherId: 29,
        },
        {
          title: 'Работа по любви',
          description: 'мечты и цели, мотивация, уверенность в себе, саморазвитие, вдохновение',
          pageCount: 223,
          imageSmall:
            'http://books.google.com/books/content?id=cV1cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cV1cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 390,
          amount: 449,
          authorId: 311,
          categoryId: 39,
          publisherId: 4,
        },
        {
          title: 'Большая книга сказок и стихов',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 684,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 599,
          amount: 4515,
          authorId: 581,
          categoryId: 102,
          publisherId: 26,
        },
        {
          title: 'Маленький золотоискатель',
          description:
            'Калифорния, 1849 год, «золотая лихорадка» – на таком фоне развиваются события повести. Семья переселенцев терпит бедствие в горах, и четырнадцатилетний мальчик отправляется на поиски помощи, оставив отца, мать и маленькую сестренку в снегах Сьерра-Невада. Но снова встретиться со своими близкими ему предстоит еще очень нескоро. Отважный мальчик переживает множество опасных, захватывающих, а порой и забавных приключений. И на всем пути его сопровождает случайно встреченный в лесу загадочный старый охотник...Для среднего школьного возраста.',
          pageCount: 310,
          imageSmall:
            'http://books.google.com/books/content?id=HXBhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HXBhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 655,
          amount: 4990,
          authorId: 290,
          categoryId: 1,
          publisherId: 36,
        },
        {
          title: 'Искусство останавливать время',
          description:
            'Чтобы освоить искусство управления временем, не нужно в корне менять свою жизнь. Автор бестселлера New York Times и мастер медитации Шоджай Педрам предлагает курс, который поможет забыть о нехватке времени, все успевать и не жертвовать при этом любимыми занятиями. Самый правильный способ использовать эту книгу ‒ пройти её от начала до конца, выполняя практики каждый день.',
          pageCount: 227,
          imageSmall:
            'http://books.google.com/books/content?id=tnpKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tnpKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 20,
          amount: 4514,
          authorId: 551,
          categoryId: 8,
          publisherId: 44,
        },
        {
          title: 'Железный король',
          description:
            '﻿Мориса Дрюона читающая публика знает прежде всего по саге «Проклятые короли», открывшей мрачные тайны Средневековья. За каждым произведением цикла стояла кропотливая работа в Национальном архиве, изучение документов, написанных на архаичном французском или на латыни. Открыл эту серию исторических фресок роман «Железный король». Великий магистр ордена тамплиеров Жак де Моле, взойдя на костер 18 марта 1314 года, проклял своих палачей — папу Климента V, короля Филиппа Красивого, его советника Гийома де Ногаре и все их потомство до тринадцатого колена. Первый удар судьбы – обвинение невесток короля в неверности – не замедлил последовать. Но еще никто не знает, какие беды сулит будущее Железному королю…',
          pageCount: 351,
          imageSmall:
            'http://books.google.com/books/content?id=9aIlEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9aIlEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 668,
          amount: 349,
          authorId: 274,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Многогранники',
          description:
            'Димка – единственный друг Маши. Она так им дорожит, что готова за компанию с ним презирать Романа, который держится особняком в группе и необъяснимо не нравится ее маме. Маша принадлежит Димке, ведь он так решил. Ей он, правда, об этом не говорил, но у него и необходимости не было, пока не появился Роман. Роман многие месяцы игнорирует и Машу, и Димку. Ему разобраться бы со своей жизнью, в которой все встало с ног на голову. И все так бы и шло дальше, если бы не череда нелепых случайностей.',
          pageCount: 642,
          imageSmall:
            'http://books.google.com/books/content?id=MV8REAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MV8REAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 624,
          amount: 3943,
          authorId: 359,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title: 'Ребенок от 3 до 7 лет: интенсивное воспитание',
          description:
            'Ваш малыш в возрасте от 3 до 7 лет – самый непоседливый, самый любознательный, самый активный и коммуникабельный. Каждый день дарит ему новые впечатления, знания и важные уроки. Как раз в это время закладывается характер малыша, его будущее, поэтому именно жизнь ребенка до 7 лет – тот момент, когда от родителей требуется максимальная выдержка, внимание, мудрость и терпение!В новом дополненном издании книги Лариса Суркова поднимает важные вопросы, связанные с таким непростым периодом жизни малыша:– как реагировать на детские фантазии и истерики;– как хвалить и поощрять ребенка;– как выбрать детский сад и школу;– как развить усидчивость и научить ребенка проигрывать;– как решить проблему нарушения пищевого поведения;– как помочь ребенку адаптироваться в школе;– как не «перегрузить» ребенка кружками и пр.Научитесь прислушиваться к вашим детям, не считайте их взрослыми, все знающими и умеющими! В этот период жизни им так важны ваша любовь и поддержка!2-е издание, исправленное и дополненное',
          pageCount: 217,
          imageSmall:
            'http://books.google.com/books/content?id=F9VICAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=F9VICAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 162,
          amount: 373.75,
          authorId: 299,
          categoryId: 14,
          publisherId: 31,
        },
        {
          title: 'Джек Ричер, или Сплошные проблемы и неприятности',
          description:
            'Военный полицейский в отставке Джек Ричер получает сигнал о помощи от Фрэнсис Нигли, его бывшей подчиненной из отряда спецрасследований. Она сообщает, что один из девяти членов отряда найден мертвым в пустыне неподалеку от Лос-Анджелеса. Судя по всему, его выбросили из самолета. С остальными сослуживцами из отряда потеряна всякая связь. Возможно, они все тоже мертвы. Кому и по какой причине могла понадобиться смерть этих людей? Ричер начинает расследование, осознавая, что его жизни тоже угрожает смертельная опасность...Ли Чайлд – один из лучших современных авторов, работающих в жанре детектива-экшн. Его герой Джек Ричер стал поистине культовой фигурой, воплощением несгибаемого героя-детектива.',
          pageCount: 494,
          imageSmall:
            'http://books.google.com/books/content?id=rfGiAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=rfGiAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 27,
          amount: 541,
          authorId: 296,
          categoryId: 1,
          publisherId: 40,
        },
        {
          title: 'Как адмирал Ушаков Черное море русским сделал',
          description:
            'Автор книги, известный путешественник, с детских лет чтит великого русского флотоводца адмирала Федора Ушакова. Своей храбростью и талантом он сумел завоевать для России Черное море. Юный читатель узнает о том, какой вклад внес Ушаков в создание Черноморского флота, какую неожиданную тактику ведения морского боя разработал и применил, ознакомится с описанием трех знаменитых сражений с турецким флотом. В книге рассказывается также об уникальном умении Ушакова любить людей и быть милосердным даже к врагам.',
          pageCount: 1058,
          imageSmall:
            'http://books.google.com/books/content?id=WKHMBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WKHMBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 633,
          amount: 93.75,
          authorId: 238,
          categoryId: 5,
          publisherId: 43,
        },
        {
          title: 'Срочно требуется Пушкин! Прикольные рассказы',
          description:
            'В сборник вошли весёлые рассказы о школе лучших отечественных писателей – В. Драгунского, И. Пивоваровой, С. Махотина, А. Гиваргизова и других. Из книги дети узнают, как действуют на школьников «Возбудин» и «Соновит», что за зверь – ядовитый клювоног, как получить пятёрку за рисунок кота в тетради по математике и что хранится в ларчике у учительницы по литературе. Остроумные истории поднимут настроение и заставят хохотать любого.Для младшего школьного возраста.',
          pageCount: 168,
          imageSmall:
            'http://books.google.com/books/content?id=kWGyEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kWGyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 394,
          amount: 3207,
          authorId: 318,
          categoryId: 28,
          publisherId: 8,
        },
        {
          title: 'Примирить душу и тело. Телесные практики для жизни без болезней и стресса',
          description:
            'Пытаясь угнаться за ритмом современной жизни, мы находимся в постоянном физическом и психологическом напряжении, все чаще страдаем от усталости, раздражительности, проблем с вниманием и болезней. Софрология – наука, которая позволит выдержать паузу, снизить темп и обрести внутреннюю гармонию. О ее методах и техниках, основанных на расслаблении, правильном дыхании, визуализации и позитивном мышлении, в этой книге рассказывает правнучка великого психолога Мишель Фрейд.',
          pageCount: 264,
          imageSmall:
            'http://books.google.com/books/content?id=L83sDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L83sDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 751,
          amount: 486.25,
          authorId: 246,
          categoryId: 16,
          publisherId: 7,
        },
        {
          title: '[Т. 17] : Сент-Ронанские воды',
          description:
            'Роман "Сент-Ронанские воды" примыкает к жанру готического романа. Здесь налицо многие характерные для него сюжетные мотивы. Это единственный роман писателя, написанный о времени, в котором жил сам автор',
          pageCount: 446,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 526,
          amount: 1178,
          authorId: 361,
          categoryId: 40,
          publisherId: 1,
        },
        {
          title:
            'Мы влюбляемся три раза. Чему нас учат отношения и расставания и как не упустить свою настоящую любовь',
          description:
            'Распродажа! Все книги по одной цене из специальной подборки до 12 сентября.Когда мы влюбляемся и это взаимно, мы верим, что все закончится хеппи-эндом – брак, дети, вместе долго и счастливо. А когда расстаемся, то словно лишаемся опоры. И часто грустим не по прошлому с этим человеком, а по несбывшимся мечтам и будущему, которое сами себе придумали.Эксперт по отношениям Кейт Роуз считает, что не все влюбленности должны привести к «браку раз и навсегда». Иногда отношения (и расставания) нужны нам, чтобы понять, кто мы и чего на самом деле хотим, чтобы стать мудрее и, главное, подготовиться к настоящей любви, которая обязательно случается со всеми, кто извлекает уроки из прошлых неудач и находит в себе мужество снова открыть свое сердце.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 216,
          imageSmall:
            'http://books.google.com/books/content?id=ZmcUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZmcUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 109,
          amount: 323.75,
          authorId: 360,
          categoryId: 16,
          publisherId: 14,
        },
        {
          title: 'Граф Монте-Кристо I',
          description:
            '«Граф Монте-Кристо» - приключенческий роман, одно из самых известных произведений Александра Дюма. На фоне бурного политического периода Франции повествуется о судьбе одного молодого человека Эдиона Дантеса. Первая часть романа рассказывает о его заключении в крепость Иф. Дантес узнает о спрятанном сокровище, ему удается бежать, находит его и начинает свой заговор мести. Молодой человек принимает новое имя и проникает в те самые круги, из которых происходят его враги. Описание 14-летних невзгод Дантеса, его решимости выкопать туннель и последующая авантюрная жизнь возмездия делают эту первую половину книги увлекательной и запоминающейся историей, которая остается с читателем надолго. Александр Дюма (1802-1870) – французский писатель, драматург и журналист, мастер приключенческого романа. Много путешествовал, вёл активный образ жизни. Дюма много зарабатывал, но много и тратил, любил роскошь. Издавал журналы, газету и создал собственный Исторический театр. Самые известные его романы – «Граф Монте-Кристо», «Три мушкетёра» и «Двадцать лет спустя». По его произведениям снято более двухсот фильмов.',
          pageCount: 879,
          imageSmall:
            'http://books.google.com/books/content?id=erI_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=erI_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 111,
          amount: 147.32,
          authorId: 302,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Escape book 3: побег из тюрьмы Мариандуве. Книга, основанная на принципе легендарных квест-румов',
          description:
            'После взрыва на кладбище – Кандела сбежала, а Янина попала в больницу, а затем в тюрьму. Ее обвиняют в убийстве Атанаса Мозака. Все знают, что она невиновна, но влиятельным людям нужен был козел отпущения.Янина узнала слишком много про оруэллианцев и общество Атанаса Мозака, поэтому по пути на судебное заседание ее собираются убить. Людмила предупреждает ее об опасности, и Янина планирует побег.У нее есть 98 часов, чтобы спастись. Сможет ли она выбраться?',
          pageCount: 189,
          imageSmall:
            'http://books.google.com/books/content?id=uj0sEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=uj0sEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 139,
          amount: 343.85,
          authorId: 372,
          categoryId: 11,
          publisherId: 45,
        },
        {
          title: 'Жизнь - это подарок',
          description:
            'Сборник коротких историй из обычной жизни, пропитанных горячим солнцем, греческой душевностью и глубокой житейской мудростью. Твой источник поддержки на каждый день. Книга, которая поможет находить радость в обычных вещах и стать счастливее.',
          pageCount: 259,
          imageSmall:
            'http://books.google.com/books/content?id=mVU0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=mVU0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 936,
          amount: 449,
          authorId: 319,
          categoryId: 13,
          publisherId: 5,
        },
        {
          title: 'Чудовища и красавицы. Опасные сказки',
          description:
            'СТАРЫЕ СКАЗКИ МЕРТВЫ.Пришло время новых сказок для новых Читателей, точно знающих, что Чудовищу верить нельзя, а история Золушки не закончилась хеппи-эндом. Спящей Красавице совсем необязательно ждать спасения от Прекрасного принца, а Гензель и Гретель не то чтобы совсем уж беспомощные малыши. Принцы же порой совершенно не интересуются принцессами.Что если мы – НОВЫЕ ЧИТАТЕЛИ – правы, и всё было совсем не так, как все привыкли думать?12 ОПАСНЫХ СКАЗОК,12 историй, вселяющих надежду на то, что будущее за нами.Каждому под силу написать СВОЮ СОБСТВЕННУЮ НОВУЮ СКАЗКУ.',
          pageCount: 300,
          imageSmall:
            'http://books.google.com/books/content?id=ZrJhEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZrJhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 614,
          amount: 286.25,
          authorId: 292,
          categoryId: 1,
          publisherId: 7,
        },
        {
          title: '7 правил ведения сложных разговоров с коллегами и начальством',
          description:
            'Многие разговоры на работе напоминают монолог, а не диалог. Признавая, что для достижения значимых результатов разговора требуются два человека, автор описывает, что должен сделать каждый участник для достижения наилучшего возможного результата. Используя примеры повседневных рабочих ситуаций, эта книга предлагает рекомендации, как создать правильные условия для содержательного обсуждения.Автор выделяет семь ключевых правил общения (принципов), которые позволяют обеим сторонам глубже понять, о чем может думать другой человек, и помогают более четко сформулировать свою точку зрения. Эти правила – уверенность, ясность, сострадание, любопытство, компромисс, доверие, смелость. Книга включает советы от тех, кто был в этих ситуациях и преуспел, примеры сценариев продуктивных бесед, а также анализ уроков, извлеченных из неудачных разговоров. Читатели узнают, как подготовиться к диалогу, начать его и управлять потенциально сложным обменом словами, который обычно происходит на работе, и придут к пониманию того, что для любого разговора должен быть задействован интерес обеих сторон.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 304,
          imageSmall:
            'http://books.google.com/books/content?id=ewpMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ewpMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 296,
          amount: 2123.75,
          authorId: 391,
          categoryId: 16,
          publisherId: 3,
        },
        {
          title: 'Zhurnal Vsesii͡uznoe khimicheskoe obshchestvo imeni D. I. Mendeleeva',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 140,
          imageSmall:
            'http://books.google.com/books/content?id=-48QAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-48QAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 200,
          amount: 3801,
          authorId: 327,
          categoryId: 103,
          publisherId: 42,
        },
        {
          title: 'Пёс по имени Герой. Спасатель против урагана',
          description:
            'От автора бестселлеров The New York Times Дженнифер Ли Шотц!Когда на город обрушивается сильнейший ураган, Джек и его щенок Скаут пропадают без вести. Пёс Герой вместе со своим хозяином, мальчиком Беном, отправляются в лес на поиски друзей. Но шторм становится всё сильнее, команда спасателей оказывается в смертельной ловушке. Сможет ли Герой помочь всем выбраться и вернуться домой?«Пёс по имени Герой. Спасатель против урагана» – это история о невероятных приключениях и настоящей дружбе между собакой и его лучшим другом.Для среднего школьного возраста.',
          pageCount: 126,
          imageSmall:
            'http://books.google.com/books/content?id=bLEuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bLEuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 466,
          amount: 436.25,
          authorId: 593,
          categoryId: 28,
          publisherId: 43,
        },
        {
          title: 'Тихий океан',
          description:
            'Эта книга – путешествие по просторам огромного Тихого океана, который на самом деле совсем не тихий. Здесь случаются тайфуны, страшные цунами, дожди, похожие на водопады. Вы побываете на коралловых островах, спуститесь в морские глубины, узнаете, как питаются киты. Всё это расскажет вам отважный путешественник, который в одиночку на вёсельной лодке переплыл Тихий океан.',
          pageCount: 627,
          imageSmall:
            'http://books.google.com/books/content?id=li08DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=li08DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 946,
          amount: 93.75,
          authorId: 238,
          categoryId: 92,
          publisherId: 16,
        },
        {
          title: 'Три твоих имени',
          description:
            'Ритка живет в деревне с сестрой и пьющими родителями. Третьеклассницу, аккуратистку Марго взяла в свою семью медсестра детдома. Почти взрослая Гошка надеется, что дурная слава защитит ее от окружающих. Но у каждой из них есть шанс стать счастливой. И все они – одна девочка. От того, как повернется ее судьба, зависит, какое имя станет настоящим. Пронзительная история ребенка, потерявшего родителей и попавшего в детский дом, читается на одном дыхании. И все же самое сильное в этой книге – другое: в смешанном хоре голосов, рассказывающих историю Маргариты Новак, не слышно ни фальши, ни лукавства. Правда переживаний, позволяющая читателю любого пола и возраста ощутить себя на месте героев заставляет нас оглянуться и, быть может, вовремя протянуть кому-то руку помощи.',
          pageCount: 176,
          imageSmall:
            'http://books.google.com/books/content?id=-7yrBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-7yrBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 776,
          amount: 612.5,
          authorId: 321,
          categoryId: 28,
          publisherId: 19,
        },
        {
          title: 'Социальная и стратегическая стабильность как условие исторического прогресс. Монография',
          description:
            'Судьба любой страны сложна, противоречива, полна яркими событиями – славными свершениями и досадными просчетами, великими победами и горькими поражениями. Общий вклад социальной системы в культуру человеческой цивилизации становится возможным благодаря огромному труду, самопожертвованию, таланту, мудрости миллионов людей разных поколений, составляющих живую субстанцию любого социума. Значение развивающегося общества в мировом эволюционном процессе и качество жизни его членов в ХХI веке тесно связаны между собой и зависят от того, насколько верно будут определены, ясно сформулированы и поняты большей частью общества главные цели его социального развития, формы общественного воспроизводства. Об этом размышляют авторы книги, которая будет интересна специалистам в области социального развития, военной безопасности, всем тем, кому небезразличны настоящее и будущее России, судьба ее народа и мир на планете.',
          pageCount: 517,
          imageSmall:
            'http://books.google.com/books/content?id=ULszEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ULszEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 916,
          amount: 530,
          authorId: 387,
          categoryId: 11,
          publisherId: 42,
        },
        {
          title: 'Полное руководство по переговорам. Пять шагов для создания долгосрочного партнерства',
          description:
            'Правильно проведенные переговоры ведут к устойчивым партнерским отношениям, помогают обеим сторонам достичь более высоких целей, чем они могли бы достичь в одиночку, и позволяют компаниям избегать конфликтов. В этой книге описан простой и эффективный метод ведения переговоров как лично, так и виртуально. Автор предлагает испытанный и проверенный пятишаговый процесс переговоров по долгосрочным соглашениям с примерами из наилучшей практики, контрольными примерами и инструментами.Это полностью практическое руководство отражает более чем 25-летний опыт автора по ведению переговоров в различных ситуациях. Цель его – дать вам уверенность в ведении переговоров по любому контракту или соглашению, независимо от их масштаба. Используя подход, ориентированный на решения, который сосредоточен на предпочтительных результатах, а не на конфликтах, и на том, чтобы задавать вопросы и слушать другую сторону, а не пытаться убедить или навязать свою игру, эта прагматичная книга поможет вам создать свой профиль как этичного и уважаемого участника переговоров. Последовательно проводя читателя от контекстуального анализа и подготовки к достижению цели до осознания важности коммуникации и реализации соглашений, автор четко описывает инструментарий и навыки, необходимые для влияния на результат переговоров.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 382,
          imageSmall:
            'http://books.google.com/books/content?id=-RdSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-RdSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 684,
          amount: 2748.75,
          authorId: 358,
          categoryId: 10,
          publisherId: 3,
        },
        {
          title: 'Академия четырёх стихий. Лишняя',
          description:
            'Маленькая хитрость во время международного состязания обеспечила мне билет в лучшее учебное магическое заведение – Академию четырех стихий. Но знала бы я тогда, с чем придется столкнуться!Грант на обучение, переезд в заснеженный Норленд... Там белоснежные вейлары возят колесницы, в деревенские дома по ночам забираются вредные бровигги, а в лесах обитают легендарные снежные драгге, которые втайне обожают сладости. А еще там был ОН...Снежная история о любви с ароматом глинтвейна.',
          pageCount: 446,
          imageSmall:
            'http://books.google.com/books/content?id=PsX6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PsX6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 608,
          amount: 248.75,
          authorId: 491,
          categoryId: 1,
          publisherId: 15,
        },
        {
          title: 'Колыбельная для моей девочки',
          description:
            'Последнее расследование детектива Энджи Паллорино закончилось смертью преступника, за что ее временно отстранили от должности. Отныне Энджи не может носить с собой оружие и обязана посещать психотерапевта, поскольку ей снятся странные сны, в которых по ней звонят церковные колокола и кто-то зовет ее в рощу.Ко всему прочему мужчина, с которым у нее завязались романтические отношения, все больше отдаляется от нее из-за работы.Энджи пытается забыть о делах и разобраться в себе, но внезапно с ней связывается канадская королевская полиция. К паромной переправе вынесло останки, и ДНК невероятным образом совпадает с ее генетическим материалом. Несмотря на формальный запрет заниматься расследованиями, Энджи сразу берется за это дело.',
          pageCount: 379,
          imageSmall:
            'http://books.google.com/books/content?id=JHPADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JHPADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 828,
          amount: 373.75,
          authorId: 395,
          categoryId: 1,
          publisherId: 35,
        },
        {
          title: 'Глава Джулиана',
          description:
            'История Августа Пулмана, рассказанная Р. Дж. Паласио в «Чуде», была бы не полной без голоса еще одного участника – Джулиана Албанса. Того самого Джулиана, который больше всех смеялся над Ави, ненавидел его и... боялся, как оказалось. Страх, скрытый или явный, часто руководит теми, кто начинает травлю. Страх потерять популярность, страх оказаться хуже других, страх перед тем, что незнакомо или непонятно. Только посмотрев в лицо своему страху, можно выпутаться из сложной ситуации – будь ты жертвой, преследователем или наблюдателем.',
          pageCount: 98,
          imageSmall:
            'http://books.google.com/books/content?id=_ZKRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_ZKRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 340,
          amount: 568.75,
          authorId: 327,
          categoryId: 28,
          publisherId: 28,
        },
        {
          title: 'Бизнес по чуть-чуть',
          description:
            'Книга о том, из каких “узелков” сплетается талант руководителя и успех бизнеса. К каждому “узелку” прилагается конкретный совет, что нужно сделать прямо сейчас, чтобы стать лидером, за которым пойдет команда и построить крепкую и прибыльную компанию.',
          pageCount: 363,
          imageSmall:
            'http://books.google.com/books/content?id=0JnGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0JnGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 930,
          amount: 399,
          authorId: 521,
          categoryId: 10,
          publisherId: 26,
        },
        {
          title: 'Карамелька. Книга 2',
          description:
            'Вот уже сотню лет верхушкой власти на Земле являются имситы – носители идеального гена, модифицированные ровно настолько, чтобы превосходить людей буквально во всем. Их ненавидят, их боятся, но им подчиняются, потому что только благодаря имситам мы все еще живы как раса. Подчиняются, но я не готова отдать свою свободу веркомандиру космической армии. Есть только один способ избежать навязанного отчимом брака – стать новобранцем космической армии раньше, чем начнет действовать подписанный три года назад договор. Только так мне удастся сохранить свою жизнь, свободу и себя. Наверное.',
          pageCount: 248,
          imageSmall:
            'http://books.google.com/books/content?id=3BhsEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3BhsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 56,
          amount: 211.25,
          authorId: 328,
          categoryId: 1,
          publisherId: 34,
        },
        {
          title: 'Бизнес на пальцах: Развитие навыков управления, продаж и маркетинга за 60 дней',
          description:
            'Какими качествами должен обладать настоящий лидер? Как научиться управлению и что необходимо знать, чтобы принести реальную пользу компании и повысить свою ценность как профессионала? Дональд Миллер, глава компании Business Made Simple и автор бестселлеров «Метод Story Brand» и Marketing Made Simple, в своей новой книге собрал 60 уроков, которые способны заменить дорогие курсы бизнес-образования. Выполняя по одному уроку в день, вы всего за два месяца разовьете навыки управления, продаж, маркетинга, повысите личную эффективность. Книга будет полезна всем, кто хочет стать востребованным специалистом, добиться успеха в бизнесе и увеличить доход компании.',
          pageCount: 227,
          imageSmall:
            'http://books.google.com/books/content?id=WhldEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WhldEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 550,
          amount: 499,
          authorId: 52,
          categoryId: 10,
          publisherId: 3,
        },
        {
          title: 'Сафо',
          description:
            'В центре романа — дама полусвета Фанни Легран по прозвищу Сафо. Фанни не простая куртизанка, а личность, обладающая незаурядными способностями. Фанни хочет любить, готова на самопожертвование, но на ней стоит клеймо падшей женщины. Перевод с французского Н.М. Любимова. Файл электронной книги подготовлен в Агентстве ФТМ, Лтд., 2013.',
          pageCount: 200,
          imageSmall:
            'http://books.google.com/books/content?id=RwoSAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RwoSAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 678,
          amount: 59,
          authorId: 144,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Вот оно, счастье',
          description:
            '1957 год. В деревеньке Фаха в графстве Клэр, где ничто не менялось тысячу лет, грядут перемены. Во-первых, прекратился дождь. Никто не помнит, когда он начался: вечный дождь на западном побережье Ирландии — норма жизни. Но вот местный священник Отец Коффи возвещает приход электричества, и тучи, кажется, рассеиваются. Семнадцатилетний Ноэл Кроу проводит лето в Фахе у дедушки с бабушкой, и тут вместе с вестниками грядущего — электриками — появляется загадочный Кристи и приносит с собой громадную вселенную прошлого и тайн, которым предстоит раскрыться, а заодно много-много живой ирландской музыки. Найлл Уильямз владеет техникой голографического письма, когда целый космос умещается в песчинку и этой же песчинкой выражается. В каждой фразе романа — макрокосм ирландской деревни, которая и есть вселенная, куда вот-вот протянутся электрические провода. «Вот оно, счастье» — забавный, наблюдательный, иногда смешной и неизменно трогательный оммаж безмятежности, которую можно попробовать создать заново. Это роман о взрослении — и отдельных людей, и самого времени как такового. И, конечно, это роман о силе и власти людских историй.',
          pageCount: 444,
          imageSmall:
            'http://books.google.com/books/content?id=z2NbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=z2NbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 459,
          amount: 280,
          authorId: 359,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Проданные сокровища России',
          description:
            'Om försäljningen av fr.a. ryska nationalklenoder till internationella konstsamlare och museer under åren 1918-1937.',
          pageCount: 306,
          imageSmall:
            'http://books.google.com/books/content?id=_iVYAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_iVYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 484,
          amount: 2689,
          authorId: 309,
          categoryId: 3,
          publisherId: 21,
        },
        {
          title: 'Рукописи и книги кириллической традиции государственных учреждений г. Улан-Удэ (Республика Бурятия)',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=u29GAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=u29GAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 481,
          amount: 2901,
          authorId: 429,
          categoryId: 53,
          publisherId: 22,
        },
        {
          title: 'Escape Book 2: невидимая угроза. Книга, основанная на принципе легендарных квест-румов',
          description:
            'Кандела Фуэртес находится в неустойчивом положении: борьба с могущественным клубом Ванштейна подорвала ее авторитет как журналиста, а лабиринт «Дедал» – ее здоровье.Она решает обратиться за помощью в деле, которое уже кажется потерянным, к Оруэллианцам – группе, которая не жалеет ресурсов, чтобы раскрывать скандалы.Но чтобы добраться до них, ей придется пройти путь, пронизанный самыми сложными испытаниями.И для их преодоления ей необходима поддержка Янины, племянницы ее шефа. Единственного человека, который верит ей и не считает сумасшедшей.',
          pageCount: 180,
          imageSmall:
            'http://books.google.com/books/content?id=VJGRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VJGRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 511,
          amount: 660,
          authorId: 372,
          categoryId: 11,
          publisherId: 30,
        },
        {
          title: 'Лисичка-сестричка и Серый волк. Читаем по слогам',
          description:
            'Яркая иллюстрированная книга поможет ребёнку не только научиться читать, но и по-настоящему полюбить чтение.',
          pageCount: 17,
          imageSmall:
            'http://books.google.com/books/content?id=PcAVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PcAVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 900,
          amount: 49.87,
          authorId: 273,
          categoryId: 1,
          publisherId: 29,
        },
        {
          title:
            'Травник. Самый полный справочник лекарственных растений. Описание 300 растений и способы их применения для лечения и профилактики',
          description:
            'Этот травник – самое полное справочное издание по лекарственным растениям и их применению в народной медицине. В первой части книги вы найдете всю необходимую информацию о травах, деревьях, кустарниках, ягодах, фруктах, овощах, злаках, пряностях; об их целебных свойствах, особенностях сбора и хранения, способах приготовления лекарственных форм, а также показаниях и противопоказаниях к применению. Вторая часть травника посвящена описанию самых распространенных заболеваний и народных способов их лечения. Приведены рецепты с использованием лекарственных трав и описаны средства природной косметики. Эта книга станет незаменимым помощником для тех, кто хочет сохранить свое здоровье и здоровье своих близких.Внимание! Информация, содержащаяся в книге, не может служить заменой консультации врача. Необходимо проконсультироваться со специалистом перед применением любых рекомендуемых действий.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 964,
          imageSmall:
            'http://books.google.com/books/content?id=k_HrCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=k_HrCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 636,
          amount: 223.75,
          authorId: 230,
          categoryId: 43,
          publisherId: 19,
        },
        {
          title: 'Все семь волн',
          description:
            'Этот роман блестящий, жизнеутверждающий в письмах, сразу стал бестселлером и принес автору мировую известность. Данный роман является продолжением книги "Лучшее средство от северного ветра"',
          pageCount: 333,
          imageSmall:
            'http://books.google.com/books/content?id=IG_7ZwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IG_7ZwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 401,
          amount: 1641,
          authorId: 329,
          categoryId: 40,
          publisherId: 1,
        },
        {
          title: 'Детективный Новый год',
          description:
            'Ничего себе начало нового года! У соседки пропала маленькая дочка, точнее – ее похитили! А вместе с ней пропала ее игрушка – электронный Пушистик... Никто не может понять, что случилось? И почему грабителям понадобилась эта игрушка?Гошке с Никитой и их друзьям придется на новогодних каникулах распутывать это непростое дело.',
          pageCount: 164,
          imageSmall:
            'http://books.google.com/books/content?id=z8_HDNgXU5QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=z8_HDNgXU5QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 845,
          amount: 223.75,
          authorId: 548,
          categoryId: 28,
          publisherId: 39,
        },
        {
          title: 'Решения Федерального Верховного суда Германии по гражданским делам в 2020 г. 1—10',
          description:
            'Настоящая книга содержит сборник решений Федерального Верховного суда Германии по гражданским делам, принятым в 2020 г. В качестве кассационной инстанции судом рассмотрены актуальные споры в области договорного, вещного и деликтного права.',
          pageCount: 216,
          imageSmall:
            'http://books.google.com/books/content?id=0NYmEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0NYmEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 180,
          amount: 495,
          authorId: 358,
          categoryId: 10,
          publisherId: 7,
        },
        {
          title: 'Экономист под прикрытием',
          description:
            '"Редкий случай: книга об экономике, которая очарует своих читателей.... Она прекрасно написана и аргументирована и привносит власть экономики в жизнь"',
          pageCount: 261,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 412,
          amount: 4672,
          authorId: 398,
          categoryId: 10,
          publisherId: 1,
        },
        {
          title: 'Декабристы и Франция',
          description:
            'В.С. Парсамов, профессор Национального университета «Высшая школа экономики» в своей книге рассматривает идеологические, политические, религиозные и культурно-бытовые аспекты темы «Декабристы и Франция». Он показывает роль французского либерализма в формировании декабристской идеологии, проводит сравнительно-исторический анализ просветительских и либеральных идей во Франции и в России, исследует роль французской политической культуры как посредницы в ознакомлении декабристов с английским государственно-политическим строем. Все проблемы, поставленные в книге, рассматриваются на фоне культурно-политической жизни России и Франции конца XVIII – начала XIX в. Использован обширный документальный материал, многие документы вводятся в научный оборот впервые.Для историков, филологов, культурологов и всех интересующихся проблемами культурного взаимодействия.',
          pageCount: 884,
          imageSmall:
            'http://books.google.com/books/content?id=n8OGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=n8OGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 541,
          amount: 1953,
          authorId: 301,
          categoryId: 5,
          publisherId: 25,
        },
        {
          title: 'Галерея аферистов',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 445,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 765,
          amount: 2060,
          authorId: 499,
          categoryId: 3,
          publisherId: 31,
        },
        {
          title: 'Намедни',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 221,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 634,
          amount: 4321,
          authorId: 381,
          categoryId: 107,
          publisherId: 15,
        },
        {
          title: 'Ослепление',
          description:
            'Самый известный роман Канетти «Ослепление» ждала непростая судьба: его публикация в Вене в 1935 году осталась никем не замеченной, и лишь завоевав известность в Англии и Америке, он вернулся в немецкую литературу, где занял особое место как продолжатель традиций Кафки и Джойса.Главный герой, ученый-синолог Петер Кин, ведет замкнутый образ жизни в своей библиотеке и старается свести к минимуму контакты с обществом, посвящая все время изучению китайских литературных памятников. Но однажды, соблазненный своей экономкой, Кин вынужден столкнуться с реальностью и внешним миром, которого он так боится...',
          pageCount: 606,
          imageSmall:
            'http://books.google.com/books/content?id=3KFqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3KFqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 445,
          amount: 4976,
          authorId: 345,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Za Rodinu i Slavu',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 598,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 229,
          amount: 710,
          authorId: 402,
          categoryId: 128,
          publisherId: 12,
        },
        {
          title: 'Рассказы про Франца и лошадей',
          description:
            'В этой книге австрийского классика детской литературы Кристине Нёстлингер вас ждёт ещё одна порция рассказов про Франца. Ему восемь лет, и у него появляется неожиданное увлечение: лошади. Правда, на самом деле Франц их ужасно боится, а единственная в его жизни поездка верхом продлилась секунд пять – папа едва успел сделать фото. Но что ещё оставалось, как не изображать из себя знатока лошадей, когда Габи, его лучшая подруга, начала грезить конными прогулками? Как можно было – ради продолжения дружбы – не изучить все «лошадиные» энциклопедии и не расспросить маму о верховой езде? Вот девочка и поверила, будто Франц разбирается в теме в сто раз лучше, чем подружка Сандра и сама Габи.Кто же мог представить, что уже через пару недель Габи позовёт Франца на «Пони-ранчо» – чтобы тот ехал с ней бок о бок и помогал экспертным советом! Теперь он боится не только лошадей, но и того, что девочка уличит его во лжи, посмеётся, обидится, перестанет дружить. И ещё зачем-то подарил ей ту самую фотографию, где он в седле с гордой осанкой! Выпутаться из безнадёжной ситуации может помочь только бабушка: на неё всегда можно положиться. Как Францу перестать бояться лошадей и снова спасти дружбу?«Рассказы про Франца» – это идеальное чтение для тех, кто только начинает читать. Всего в серии девятнадцать книг, «Рассказы про Франца и лошадей» – четырнадцатая в коллекции.«Рассказы про Франца» стали лучшей книгой 2013 года по версии сайта «Папмамбук».Кристине Нёстлингер – австрийская детская писательница, автор более ста книг для детей и подростков. Её творчество отмечено десятками наград, среди которых премии им. Х. К. Андерсена, памяти Астрид Линдгрен. Книги Нёстлингер переведены на 40 языков.',
          pageCount: 68,
          imageSmall:
            'http://books.google.com/books/content?id=uS9yDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=uS9yDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 290,
          amount: 4018,
          authorId: 346,
          categoryId: 28,
          publisherId: 20,
        },
        {
          title: 'Крестьянка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 516,
          imageSmall:
            'http://books.google.com/books/content?id=bxgIAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bxgIAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 678,
          amount: 3486,
          authorId: 617,
          categoryId: 105,
          publisherId: 35,
        },
        {
          title: 'Сказки про времена года',
          description:
            'Как научить ребёнка ориентироваться во времени?Это знает Елена Ульева – талантливый автор детских развивающих книг, изданных совокупным тиражом 10,5 млн экземпляров.Отправляйтесь в путешествие по удивительному миру познавательных сказок о временах года! Старик-годовик и его внуки, двенадцать месяцев, уже заждались. Каждый хочет скорее рассказать свою историю, ведь каждый уверен, что его месяц – самый замечательный и интересный. Хотите послушать? Тогда скорее открывайте эту книгу!Книга поможет ребёнку:• запомнить времена года• узнать, чем прекрасен каждый месяц• научиться ориентироваться во времени',
          pageCount: 42,
          imageSmall:
            'http://books.google.com/books/content?id=qqrzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=qqrzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 633,
          amount: 248.75,
          authorId: 349,
          categoryId: 92,
          publisherId: 1,
        },
        {
          title: 'Невеста демона',
          description: 'Содерж.: Поймать тень ; Крылья феникса',
          pageCount: 605,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 940,
          amount: 3480,
          authorId: 422,
          categoryId: 40,
          publisherId: 39,
        },
        {
          title: 'Власть и тело',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 455,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 446,
          amount: 2018,
          authorId: 111,
          categoryId: 35,
          publisherId: 12,
        },
        {
          title: 'Весь Евтушенко',
          description:
            'Содерж.: стихи ; поэмы: Братская ГЭС ; Пушкинский перевал ; Коррида ; Под кожей статуи Свободы ; Казанский университет ; Снег в Токио ; Северная надбавка ; Голубь в Сантьяго ; Мама и нейтронная бомба ; Фуку! ; Тринадцать ; из поэмы "Просека"',
          pageCount: 1168,
          imageSmall:
            'http://books.google.com/books/content?id=yhJSAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yhJSAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 126,
          amount: 3746,
          authorId: 395,
          categoryId: 5,
          publisherId: 37,
        },
        {
          title: 'Жерминаль',
          description:
            '«Золотой фонд мировой литературы» - коллекция электронных книг, включающая лучшие образцы мировой художественной литературы, представляет собой максимально исчерпывающий список самых читаемых книг мира. Каждое из произведений, изданных под обложкой этой серии, входит в один или сразу несколько списков лучших книг по разным версиям, которые не противопоставляются один другим, а гармонично объединяются, чтобы предоставить читателю наибольший выбор. «Жерминаль» - роман французского публициста, писателя и общественного деятеля Эмиля Золя (1840-1902). Этьен Лантье устраивается на работу в шахты городка Мансу. Он быстро завоевывает признание товарищей, но как только условия в шахте становятся невыносимыми, друзья Этьена объявляют забастовку. Лантье руководит протестующими, но вскоре его революционный энтузиазм угасает.',
          pageCount: 628,
          imageSmall:
            'http://books.google.com/books/content?id=IRpLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IRpLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 853,
          amount: 7,
          authorId: 357,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Дух Меркурия',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 302,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 685,
          amount: 2021,
          authorId: 408,
          categoryId: 59,
          publisherId: 10,
        },
        {
          title: 'Ночные твари',
          description:
            'Продолжение бестселлера «Жена убийцы», проданного в России тиражом более 20 000 экземпляров. Высокие рейтинги книги на Amazon и Goodreads. Гремучая смесь Майка Омера и Рейчел Кейн. Книга, написанная профессионалом, побывавшим по обе стороны уголовного правосудия – на месте и прокурора, и адвоката.Одержимый картинами загадочного африканского художника, он воплощает их в своих жестоких убийствах. Чтобы поймать маньяка, нужно понять изощренный смысл этих картин...Черные туники. Туго обмотанные вокруг головы бинты, насквозь пропитанные кровью. Ногти обрезаны, волосы острижены, на коже следы отбеливателя. Так выглядят жертвы убийцы, прозванного Палачом с Багряного озера...Фанат безумного кенийского художника Сарпонга, он воплощает в реальность его кровавый цикл «Ночные твари». Никто не знает, какой смысл вкладывал Сарпонг в свои холсты. Но маньяк явно видит в них некую идею. Какую же?Чтобы это понять, прокурор Джессика Ярдли должна обратиться за помощью к бывшему мужу – ждущему казни серийному убийце. Тот не только знаток психологии психопатов, он сам художник. Но пойти на такое – выше ее сил... Тем временем убийца готовится «очеловечить» очередную картину. Героиней которой вполне может стать сама Джессика...«Мрачная книга, мрачная. И еще раз мрачная. Но тех, кто откроет ее, ждет незабываемая история». – Kirkus Reviews',
          pageCount: 412,
          imageSmall:
            'http://books.google.com/books/content?id=WihpEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=WihpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 200,
          amount: 373.75,
          authorId: 360,
          categoryId: 1,
          publisherId: 33,
        },
        {
          title: 'Люди кода. Собрание сочинений в 30 книгах. Книга 7',
          description:
            'Роман о том, как на Землю пришел долгожданный Мессия и как его приход изменил историю человечества. В 1997 г. этот роман был дважды номинирован на премии в области научной фантастики: на премию Интерпресскона и на премию «Бронзовая улитка».',
          pageCount: 518,
          imageSmall:
            'http://books.google.com/books/content?id=9H5jEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9H5jEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 218,
          amount: 360,
          authorId: 363,
          categoryId: 1,
          publisherId: 31,
        },
        {
          title: 'Нас называли ночными ведьмами',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 328,
          imageSmall:
            'http://books.google.com/books/content?id=dhcyAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dhcyAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 336,
          amount: 2638,
          authorId: 319,
          categoryId: 62,
          publisherId: 23,
        },
        {
          title: 'Поступь',
          description:
            'С бешеным течением времени отчетливо ощущается вкус утраты смыслов и необходимость ответов на глубинные и экзистенциальные вопросы. Но порой путь поиска этих ответов тернист и ухабист, он может пролегать через леса и темные гроты, через глубины и вершины. И ответ на извечный вопрос "что есть человек?" окажется непосильной ношей для человека, заплутавшего на этом пути...Содержит нецензурную брань.',
          pageCount: 83,
          imageSmall:
            'http://books.google.com/books/content?id=VFc9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VFc9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 817,
          amount: 99.97,
          authorId: 424,
          categoryId: 1,
          publisherId: 11,
        },
        {
          title: 'Весенний роман',
          description:
            'Идеальная книга для поклонников романов Джули Кэплин и Дженни Колган.Джилли убеждена, что любви больше не место в ее жизни, и все время посвящает своему отелю в очаровательной деревушке. Она продумала в нем каждую мелочь, чтобы постояльцы могли чувствовать себя как дома. Правда, сын Джилли настаивает, что ей стоит продать отель и вложить деньги в покупку дома для его семьи. Да и новый знакомый Джилли, обольстительный риэлтор Лео, тоже считает это удачной идеей. Но стоит ли доверять ему?Тем временем у дочери Джилли, Хелены, завязываются дружеские отношения со своим домовладельцем. Девушка участвует в ярмарке ремесел, и Джаго во всем ей помогает. С каждым днем они сближаются все больше и больше, но Хелене предстоит узнать страшную тайну Джаго. Сможет ли она принять его прошлое?Эта весна подарит Джилли и Хелене шанс на новую жизнь.«Как бы я хотела жить в романах Кэти Ффорд. Они доставляют такую радость, а эта книга просто уникальна!» – Джилл Мэнселл«Книги Кэти делают жизнь лучше, они восхитительны». – Элизабет Бьюкен',
          pageCount: 344,
          imageSmall:
            'http://books.google.com/books/content?id=cXT9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cXT9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 224,
          amount: 398.75,
          authorId: 397,
          categoryId: 1,
          publisherId: 37,
        },
        {
          title: 'Proletarskoe kino',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 54,
          imageSmall:
            'http://books.google.com/books/content?id=MHdTAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MHdTAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 390,
          amount: 3507,
          authorId: 490,
          categoryId: 109,
          publisherId: 26,
        },
        {
          title: 'Замуж спьяну, или Все секреты моего мужа',
          description:
            'Когда не ладится с работой и личной жизнью, самое время совершить какой-нибудь безумный поступок. Например, спьяну выйти замуж за таинственного незнакомца и стать самой счастливой женщиной на свете.',
          pageCount: 454,
          imageSmall:
            'http://books.google.com/books/content?id=RE4UEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RE4UEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 160,
          amount: 186.25,
          authorId: 403,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Короли и капуста',
          description:
            'Содерж.: Короли и капуста : повесть ; новеллы: из сб. "Четыре миллиона", "Сердце Запада", "Горящий светильник", "Голос большого города", "Благородный жулик"',
          pageCount: 396,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 666,
          amount: 4885,
          authorId: 399,
          categoryId: 40,
          publisherId: 27,
        },
        {
          title: 'Косморама',
          description:
            'Повесть В.Одоевского «Косморама», написанная в 1839 году, впервые была напечатана в журнале «Отечественные записки». Сюжет построен на мистической идее двоемирия. Каждый персонаж имеет своего двойника за стеклом детской игрушки – косморамы...',
          pageCount: 72,
          imageSmall:
            'http://books.google.com/books/content?id=hFwIjqLo22cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=hFwIjqLo22cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 220,
          amount: 25,
          authorId: 400,
          categoryId: 1,
          publisherId: 19,
        },
        {
          title: 'Золотой ключик, или приключения Буратино',
          description:
            'Хотите узнать, как Буратино удалось перехитрить кота Базилио и лису Алису, почему он оказался в тёмном чулане Мальвины, кто такой Карабас Барабас и какую дверь открывает Золотой ключик? Сказочная повесть Алексея Толстого о приключениях деревянного человечка и его друзей-кукол увлечёт каждого! Вот уже несколько поколений с интересом читают про озорного и непослушного Буратино и про то, как верная дружба помогает преодолеть любые опасности. В издание вошёл полный текст любимой сказки с красочными иллюстрациями Алексея Разуваева.',
          pageCount: 242,
          imageSmall:
            'http://books.google.com/books/content?id=dOMVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=dOMVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 956,
          amount: 448.75,
          authorId: 237,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Клуб',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 540,
          imageSmall:
            'http://books.google.com/books/content?id=L258Ty0wujkC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L258Ty0wujkC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 765,
          amount: 4669,
          authorId: 619,
          categoryId: 97,
          publisherId: 10,
        },
        {
          title: 'Власть и тело',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 455,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 87,
          amount: 3686,
          authorId: 278,
          categoryId: 109,
          publisherId: 29,
        },
        {
          title: 'Пёс по имени Герой. Спасатель против урагана',
          description:
            'От автора бестселлеров The New York Times Дженнифер Ли Шотц!Когда на город обрушивается сильнейший ураган, Джек и его щенок Скаут пропадают без вести. Пёс Герой вместе со своим хозяином, мальчиком Беном, отправляются в лес на поиски друзей. Но шторм становится всё сильнее, команда спасателей оказывается в смертельной ловушке. Сможет ли Герой помочь всем выбраться и вернуться домой?«Пёс по имени Герой. Спасатель против урагана» – это история о невероятных приключениях и настоящей дружбе между собакой и его лучшим другом.Для среднего школьного возраста.',
          pageCount: 126,
          imageSmall:
            'http://books.google.com/books/content?id=bLEuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=bLEuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 941,
          amount: 436.25,
          authorId: 546,
          categoryId: 28,
          publisherId: 2,
        },
        {
          title: 'Жизнь животных',
          description:
            'Немецкий зоолог Альфред Брем известен всему миру как автор знаменитой книги ""Жизнь животных"", переведенной на многие языки. Родился Брем 2 февраля 1829 года в семье священника в небольшой деревушке Рентендорф лесистой и холмистой Тюрингии, в Германии.Его отец Христиан Людвиг Брем был не только пастором, но и знатоком жизни птиц. Как орнитолога его знали во многих государствах.Уже в молодые годы благодаря отцу Брем приобрел необыкновенную наблюдательность. Ему была знакома вся фауна родных мест. Свою литературную деятельность Альфред Брем начал в 1852 г.: печатал орнитологические очерки в специальных журналах и был одним из основателей немецкого Орнитологического Общества. Брем обладал изумительным даром чувствовать красоту и постепенно смог стать выдающимся стилистом - настоящим художником слова, способным представить на страницах яркие, красочные образы живой природы. Потребность в доступной форме передать свои знания широким кругам любителей природы побудила Брема написать большую популярную книгу ""Жизнь птиц"". В этой книге в виде художественных очерков он дал характеристики наиболее интересных представителей преимущественно средне-европейской орнитофауны. Через год, в 1863 году, обработав результаты поездки в Абиссинию, он опубликовал книгу ""Ergebnisse einer Reise nach Habesch"". В книге Брем поместил большой материал об образе жизни млекопитающих и птиц. Эти страницы читались зоологами всех стран с большим интересом. В том же году он написал вместе со своим лейпцигским другом натуралистом Россмеслером книгу ""Лесные животные"", которая была переведена на русский язык. Работа над этими двумя книгами навела Брема на мысль создать большую научно-популярную сводку о жизни представителей всех классов животного царства. Так было начато издание самого большого сочинения Брема ""Жизнь животных"". Успеху этого сочинения способствовали многочисленные прекрасные иллюстрации. В данной книге дается общий взгляд на жизнь земноводных, возможность узнать об их поведении, образе жизни, местах обитания. Также приводится деление на отряды и семейства.',
          pageCount: 421,
          imageSmall:
            'http://books.google.com/books/content?id=nZp4BAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nZp4BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 905,
          amount: 75,
          authorId: 404,
          categoryId: 134,
          publisherId: 39,
        },
        {
          title: 'Английский язык для технических специальностей',
          description:
            'В учебнике представлены основные общеупотребительные разговорные темы, диалоги и задания к ним. Доступное изложение основ фонетики и грамматики на русском языке, наличие упражнений для тренировки позволяет использовать учебник для начинающих',
          pageCount: 207,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 680,
          amount: 4368,
          authorId: 414,
          categoryId: 20,
          publisherId: 24,
        },
        {
          title: 'Поступь',
          description:
            'С бешеным течением времени отчетливо ощущается вкус утраты смыслов и необходимость ответов на глубинные и экзистенциальные вопросы. Но порой путь поиска этих ответов тернист и ухабист, он может пролегать через леса и темные гроты, через глубины и вершины. И ответ на извечный вопрос "что есть человек?" окажется непосильной ношей для человека, заплутавшего на этом пути...Содержит нецензурную брань.',
          pageCount: 83,
          imageSmall:
            'http://books.google.com/books/content?id=VFc9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VFc9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 922,
          amount: 99.97,
          authorId: 424,
          categoryId: 1,
          publisherId: 20,
        },
        {
          title: '8 финансовых заблуждений. Управление деньгами',
          description:
            'Ложные стереотипы о деньгах придуманы богатыми специально для вас, чтобы вы по-прежнему оставались наемными работниками и не могли даже приблизиться к богатству! Вам внушили неправильное представление о деньгах, которое и мешает вам разбогатеть. А поскольку школа не дает людям финансового образования, им приходится руководствоваться этими устаревшими предрассудками. Если вы хотите изменить свою жизнь, прежде всего поменяйте мысли. Роберт Кийосаки стремится снабдить как можно больше людей качественными финансовыми знаниями, помочь вам отказаться от общепринятых мнений о деньгах и взамен приобрести современные экономические взгляды, которые позволят вам разоблачить плохих советчиков и взять на себя ответственность за свое финансовое будущее.',
          pageCount: 50,
          imageSmall:
            'http://books.google.com/books/content?id=KNP3CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KNP3CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 346,
          amount: 270,
          authorId: 405,
          categoryId: 10,
          publisherId: 42,
        },
        {
          title: 'Злая книга',
          description:
            'Это очень необычная книга! Ведь на её страницах спрятаны настоящие магические заклинания, парочка монстров и целое море загадок! Злая книга ищет читателя, который готов пройти запутанный квест и стать обладателем Чёрного амулета. Этот артефакт наделит своего хозяина огромной волшебной силой. И кажется, следующим всемогущим магом можешь стать именно ТЫ! Ведь ты не трусливый зайка и точно не испугаешься историй Злой книги. Приготовься к захватывающему приключению и скорее открывай первую страницу!Предупреждение от издателя: ЧИТАТЬ ЭТУ КНИГУ ОЧЕНЬ ОПАСНО! МЫ СДЕЛАЛИ ВСЁ ВОЗМОЖНОЕ, ЧТОБЫ ОСТАНОВИТЬ ЕЁ! НО ОНА ЗАПРОСТО ПОРАБОЩАЕТ ЧИТАТАЛЕЙ! ВЕДЬ ОНА... СЛИШКОМ КЛАССНАЯ.Для поклонников «Маленькой злой книги».',
          pageCount: 162,
          imageSmall:
            'http://books.google.com/books/content?id=1vo3EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1vo3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 917,
          amount: 297.85,
          authorId: 540,
          categoryId: 28,
          publisherId: 12,
        },
        {
          title: 'Ревизор',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 138,
          imageSmall:
            'http://books.google.com/books/content?id=frk9AAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=frk9AAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 165,
          amount: 3760,
          authorId: 406,
          categoryId: 124,
          publisherId: 24,
        },
        {
          title: 'Kolymskie rasskazy',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 437,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 411,
          amount: 2424,
          authorId: 407,
          categoryId: 107,
          publisherId: 12,
        },
        {
          title: 'Svod zakonov Rossīĭskoĭ Imperīi',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1980,
          imageSmall:
            'http://books.google.com/books/content?id=OXVPAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OXVPAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 649,
          amount: 618,
          authorId: 103,
          categoryId: 37,
          publisherId: 41,
        },
        {
          title: 'Странник',
          description:
            '«...Кто твердо решился, тот уже половину сделал, говорит пословица. Я твердо решился путешествовать кругом света и далее, если можно; вот, от моей твердой решительности, половина света уже объехана: половина света, которая пуста и незамечательна, в которую я – и заезжать не буду...»',
          pageCount: 1136,
          imageSmall:
            'http://books.google.com/books/content?id=QeMJDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QeMJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 691,
          amount: 25,
          authorId: 409,
          categoryId: 1,
          publisherId: 11,
        },
        {
          title: 'Три дня, которые...',
          description:
            'Ираида Степановна, или попросту Ирочка живёт размеренной жизнью: каждый день ходит на работу в офис и выполняет рутинную бумажную работу. Но однажды на её столе оказывается букет жёлтых хризантем. Кто же преподнёс ей цветы? Тихоня Синичкин, ловелас Женечка или сноб Николаев? Сможет ли героиня выпутаться из этого любовного квадрата и найти своё тихое женское счастье?',
          pageCount: 150,
          imageSmall:
            'http://books.google.com/books/content?id=GRE7EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=GRE7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 175,
          amount: 148.75,
          authorId: 61,
          categoryId: 1,
          publisherId: 14,
        },
        {
          title: 'Рождение звездного неба. Мифология космоса',
          description:
            'О чем свидетельствует схожесть представлений о Млечном Пути на Кавказе и на Балканах? Как случилось, что многие европейцы вспоминали ветхозаветную историю Каина и Авеля, глядя на лунные пятна? Почему одни жители Азии и Северной Америки видели в Большой Медведице охотников, которые гонят лося или медведя и несут котелок, чтобы варить мясо, а другие – семерых братьев? В этих и во многих других вопросах автор этой книги пытается разобраться. Для этого он анализирует мифологические представления народов Евразии, Африки и обеих Америк. О них известно из тысяч повествований, записанных этнографами и лингвистами либо извлеченных из древних текстов. Сходство и различия в представлениях о луне и звездах позволяют реконструировать исторические процессы – от относительно недавних до происходивших 10–15 тысяч лет назад и более.То есть эта книга – не путеводитель по ночному небу, а рассказ о том, что случилось в далеком прошлом. Такое исследование было бы невозможно без современных компьютерных технологий: они сделали доступной информацию, которую полвека назад автор вряд ли смог бы собрать. Но еще важнее – успехи археологии и генетики. За последние годы наши знания о прошлом человечества неизмеримо расширились; именно благодаря этому мы начинаем понимать те послания предков, что зашифрованы в мифах.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 437,
          imageSmall:
            'http://books.google.com/books/content?id=x9V5EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=x9V5EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 212,
          amount: 498.75,
          authorId: 410,
          categoryId: 54,
          publisherId: 16,
        },
        {
          title: 'Master i Margarita',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 477,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 967,
          amount: 4176,
          authorId: 415,
          categoryId: 5,
          publisherId: 17,
        },
        {
          title: 'Улитка и розовый куст',
          description:
            'В центре сада, за которым раскинулись луга до самого горизонта, цвел розовый куст. Под кустом жила улитка, которая любила вести с ним беседы. Они рассуждали, что бы они могли дать этому миру в своем небольшом саду. Ганс Христиан Андерсен (1805–1875) — датский поэт, прозаик и деятель искусства. Среди наиболее известных сказок этого детского писателя — «Новое платье короля», «Русалочка», «Соловей», «Стойкий оловянный солдатик», «Снежная королева», «Гадкий утёнок» и «Девочка со спичками». Его книги переведены на все языки мира, и едва ли найдется ребенок или взрослый, который не слышал об удивительных персонажах Андерсена. По мотивам его сказок создано множество экранизаций и театральных постановок. Наиболее известными стали мультипликационные фильмы студии Disney «Русалочка» 1989 года и «Холодное сердце» 2013 года, вдохновленный сказкой «Снежная королева». Вклад Андерсена в развитие литературы для детей настолько велик, что 2 апреля, в день его рождения, отмечают Международный день детской книги.',
          pageCount: 6,
          imageSmall:
            'http://books.google.com/books/content?id=R29BEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=R29BEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 440,
          amount: 93.7,
          authorId: 411,
          categoryId: 28,
          publisherId: 12,
        },
        {
          title: 'Чудесное путешествие Нильса с дикими гусями',
          description:
            'Selfish and lazy, fourteen-year-old Nils learns kindness and wisdom after he is bewitched into an elf-sized boy and carried off by a barnyard goose to join the migration of wild geese across Sweden to Lapland.',
          pageCount: 204,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 258,
          amount: 3790,
          authorId: 428,
          categoryId: 114,
          publisherId: 36,
        },
        {
          title: 'Кубик Рубика: За гранями головоломки, или Природа творческой мысли',
          description:
            'Пожалуй, о кубике Рубика знает каждый. Эта головоломка уже давно стала чем-то большим, чем просто игрушка для миллионов людей по всему миру. Классический кубик размером 3 × 3 × 3 изменил мир — не меньше. Инженеры создают шейп-моды, сложнейшие тетраэдральные и додекаэдральные головоломки, появился новый необыкновенный мир спидкубинга, а рубиккубизм стал полноценным жанром современного искусства. Школьники и взрослые уже на протяжении почти 50 лет развивают навыки решения изобретательских задач и осваивают азы технического творчества с помощью кубика Рубика. Он помогает формировать нейронные связи в мозге, а также обучать нейросети искусственного интеллекта. Эту книгу написал сам изобретатель кубика Рубика — венгерский скульптор и преподаватель архитектуры Эрнё Рубик. Из первых уст вы узнаете историю создания культовой головоломки, поймете, в чем феномен ее популярности и что скрывает невидимый глазу 27-й элемент в сердце кубика. По словам автора, эта книга — попытка осмыслить популярность кубика Рубика на протяжении многих лет.',
          pageCount: 180,
          imageSmall:
            'http://books.google.com/books/content?id=NFo9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NFo9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 333,
          amount: 449,
          authorId: 413,
          categoryId: 13,
          publisherId: 11,
        },
        {
          title: 'Путь к свободе. Взгляд в себя',
          description:
            'Мысли – материальны! Мысль порождает событие. Мысли формируют ситуацию. Мысли отражаются вовне и создают реальность. Как сделать так, чтобы не оказаться в клетке деструктивных мыслей, мыслей, которые превращают вашу жизнь в бег на месте?Философ, исследователь, практик Владимир Жикаренцев откроет вам Путь к свободе – уникальные техники работы с мыслями. Более 20 лет он ведет семинары и консультации и помогает людям перестроить мышление.Методика Жикаренцева многократно проверена, она помогла сотням тысяч людей, ее несут в мир сотни учеников мастера. Медитации, упражнения для очищения сознания, работа с подсознанием и внутренним «Я», управление энергией чакр – все это помогает вырваться из клетки пустой жизни, которая приносит одни страдания, и научиться мыслить так, чтобы жизнь была богатой, здоровой и счастливой.',
          pageCount: 327,
          imageSmall:
            'http://books.google.com/books/content?id=a43aAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=a43aAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 978,
          amount: 186.25,
          authorId: 416,
          categoryId: 55,
          publisherId: 5,
        },
        {
          title: 'Сторителлинг. Пособие для начинающих',
          description:
            'Рассказывание историй стало новым трендом ХХІ века. В мире цифровых технологий сторителлинг стал не только способом коммуникации, но и инструментом ведения бизнеса. Журнал Harvard Business Review назвал сторителлинг одной из лучших бизнес-идей 2006 года. Для тех, кто хочет овладеть искусством рассказывания историй и извлекать из этого не только удовольствие, но и пользу, предназначена данная книга.',
          pageCount: 570,
          imageSmall:
            'http://books.google.com/books/content?id=kKTFDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kKTFDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 345,
          amount: 595,
          authorId: 417,
          categoryId: 10,
          publisherId: 24,
        },
        {
          title:
            'Маркетинг для немаркетологов. Руководство по созданию успешных маркетинговых стратегий и увеличению прибыли',
          description:
            'Антон Петроченков – эксперт по продвижению в интернете, бизнес-тренер и основатель агентства интернет-маркетинга Convert Monster, которое в 2018 году вошло в Топ-10 самых узнаваемых брендов-агентств в России. Среди клиентов: Michelin, Daewoo, TaxCom, Humana, Knauf, PwC, «Шоколадница».Успешную компанию от стагнирующей отличает подход к маркетингу. Чаще всего маркетологи и даже агентства – это лишь руки, выполняющие бизнес-задачи. Маркетинговая стратегия должна определяться самой компанией. Иными словами, даже если вы не профи, вы должны понимать, что происходит в вашем интернет-маркетинге и как его усилить.В основу этой книги легла обучающая бизнес-система агентства Convert Monster, доказавшая свою эффективность на реальных кейсах российских и зарубежных компаний. Эта система позволит вам:[ul]придумывать работающие маркетинговые концепции;самостоятельно разобраться в том, что работает, а что – нет;перестать сливать деньги на неэффективные инструменты и каналы;анализировать и понимать отчеты и менять стратегию исходя из показателей;настроить воронку продаж и увеличить прибыль компании.[/ul]Дополнительные методические материалы вы можете скачать по ссылке: http://convertmonster.ru/fast-resultsВ формате PDF A4 сохранен издательский макет книги.',
          pageCount: 320,
          imageSmall:
            'http://books.google.com/books/content?id=iihpEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=iihpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 710,
          amount: 748.75,
          authorId: 418,
          categoryId: 10,
          publisherId: 5,
        },
        {
          title: 'Владимир Даль',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 296,
          imageSmall:
            'http://books.google.com/books/content?id=77cgAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=77cgAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 136,
          amount: 3602,
          authorId: 419,
          categoryId: 22,
          publisherId: 15,
        },
        {
          title: 'Фрикомыслие',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 938,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 372,
          amount: 3385,
          authorId: 49,
          categoryId: 120,
          publisherId: 26,
        },
        {
          title: 'Как преуспеть в бизнесе, нарушая все правила',
          description:
            'В своей книге миллионер Дэн С. Кеннеди развенчивает популярные мифы. На его взгляд, есть только одно правило, которое нужно как следует усвоить. А именно: правила существуют для того, чтобы их нарушать. В своей воодушевляющей и практичной книге, написанной доступным языком, он делится нестандартными стратегиями, гарантирующими богатство и успех. Забудьте все, что вы когда-либо знали о позитивном мышлении, — слепой, безосновательный оптимизм может негативно сказаться на ваших шансах на успех. Самоуверенность и самореклама — важнейшие составляющие успеха. Совмещайте работу и удовольствие при любой возможности.',
          pageCount: 230,
          imageSmall:
            'http://books.google.com/books/content?id=ZdX1CwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZdX1CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 638,
          amount: 299,
          authorId: 423,
          categoryId: 10,
          publisherId: 25,
        },
        {
          title: 'Охота на вампира',
          description:
            'Полковники МВД Гуров и Крячко проводят отпуск в отеле, который не только стилизован под средневековый замок, но, как и всякий замок, имеет свою легенду. Прежний хозяин якобы превратился в вампира и по сей день охраняет спрятанные в замке сокровища. В один прекрасный день вдруг умирает одна из горничных, причем смерть искусно обставлена как месть призрака. Конечно, сыщики поняли, что никакой мистикой тут и не пахнет, а они имеют дело с тщательно продуманным убийством, совершенным кем-то из живущих в отеле. Подозрение падает на управляющего, ведущего себя в последнее время довольно странно. Возможно, именно он пытается прикрыть преступление древней легендой? Дело еще больше запутывает известие о нераскрытом убийстве, случившемся в этом же замке год назад',
          pageCount: 640,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 716,
          amount: 1589,
          authorId: 427,
          categoryId: 127,
          publisherId: 16,
        },
        {
          title: 'Большая энциклопедия. Путешествия по бывшему Советскому Союзу',
          description:
            'Наш мир поистине прекрасен и полон таких красот, которые даже сложно представить. Конечно же, чтобы их увидеть, нужно не сидеть на месте, а путешествовать. В каждом государстве на любом континенте можно открыть для себя что-то привлекательное и неизведанное. Хотя зачем ездить куда-то далеко, ведь мы живем в самой большой и невероятно красивой стране. Кроме того, можно посетить и бывшие республики Советского Союза, также богатые природными и историческими достопримечательностями. Главное – выбрать себе вид отдыха или путешествие по душе. Одного заинтересует живописная природа Карелии, а другого – уникальный животный мир и чистейшие воды озера Байкал, кто-то мечтает понежиться на пляжах Крыма или Краснодарского края, а кто-то грезит горнолыжными курортами Карачаево-Черкесии или Грузии, некоторые и вовсе мечтают посетить музыкальные фестивали в Татарстане или в Беларуси.Перелистывая страницы этого издания, вы побываете на интереснейших экскурсиях, фестивалях и праздниках, насладитесь красотой и первозданностью заповедной природы, узнаете, в каких санаториях и лечебницах лучше поправить свое здоровье и на каких горнолыжных курортах или «тропах здоровья» эффективнее всего совершенствовать свою физическую форму. Как видите, в данной книге учтены интересы любителей самых разных видов туризма – оздоровительного, экскурсионного, спортивного и даже экстремального. Здесь содержатся описания свыше 60 маршрутов по территории бывшего СССР. При этом они даны по месяцам, выверены с точки зрения рациональности и построены оптимально. Программа тура, расписанная по дням, сопровождается увлекательными рассказами о природе и историко-культурных ценностях региона, а также, что очень важно для каждого путешественника, здесь представлена информация о специфике государства, посольствах, визе, транспорте, валюте и погоде. Счастливого пути!',
          pageCount: 194,
          imageSmall:
            'http://books.google.com/books/content?id=2nW-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2nW-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 415,
          amount: 736.25,
          authorId: 425,
          categoryId: 39,
          publisherId: 15,
        },
        {
          title: 'Гениальность и помешательство',
          description:
            'Чезаре Ломброзо – крупнейший итальянский философ-позитивист, психиатр и профессор судебной медицины. Центральной темой его главного труда «Гениальность и помешательство» стала идея о прирожденном преступнике. Ломброзо считал, что преступления совершают люди с набором определенных внешних данных и психологических характеристик. Будучи родоначальником оригинальной концепции творчества как сочетания патологических состояний, Ламброзо объяснял вдохновение как неразумное использование психической энергии, которое порождает оригинальные результаты и способствует прогрессу культуры. Его идеи и научные исследования оказали заметное влияние на развитие таких наук как криминология, психопатология творчества и позитивистская антропология.Все тексты снабжены подробными комментариями и разъяснениями профессора РГГУ А.В. Маркова.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 287,
          imageSmall:
            'http://books.google.com/books/content?id=QA-eEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QA-eEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 194,
          amount: 336.25,
          authorId: 436,
          categoryId: 16,
          publisherId: 42,
        },
        {
          title: 'Гостевой обмен опытом и характеристика Краткосрочной программы работы педагогов',
          description:
            'Этот сборник составлен на основе книги Е. Е. Шулешко «Понимание грамотности» и посвящен двум сторонам его педагогической практики, опыт которых значим для большинства детских садов.Первая часть раскрывает модель организации неформальной системы самообразования педагогов через их встречи на рабочих местах и совместные наблюдения за жизнью детей, вторая часть – общую логику планирования дошкольных занятий через проектирование событий детской жизни; при этом предполагается, что в каждом из событий должны быть переплетены различные роды и виды деятельностей так, чтобы в итоге ни один особенно значимый род занятий не был забыт.В совокупности две части книги дают объёмное видение того, что должно находиться в центре внимания при управленческом, организационном, психологическом обеспечении работы воспитателей с детьми.В формате PDF A4 сохранен издательский макет.',
          pageCount: 185,
          imageSmall:
            'http://books.google.com/books/content?id=McQVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=McQVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 812,
          amount: 148.75,
          authorId: 3,
          categoryId: 16,
          publisherId: 41,
        },
        {
          title: 'Английский язык. 7 класс',
          description:
            'Книга для учителя «Английский язык» (серия «Forward») для 7 класса общеобразовательных организаций разработана в рамках Федерального государственного образовательного стандарта основного общего образования (2010) с учётом его требований и планируемых результатов основного общего образования. Соответствует примерной программе по иностранному языку для основной школы.Книга для учителя с ключами для 7 класса общеобразовательных организаций содержит тематическое планирование курса, ключи и тексты аудиоприложений к учебнику и рабочей тетради, а также четыре контрольные работы (устная и письменная части) с подробными комментариями и ключами к заданиям.УМК для 7 класса входит в систему учебно-методических комплектов «Алгоритм успеха».',
          pageCount: 225,
          imageSmall:
            'http://books.google.com/books/content?id=zStiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zStiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 205,
          amount: 882,
          authorId: 228,
          categoryId: 33,
          publisherId: 10,
        },
        {
          title: 'Антарктида',
          description:
            'Антарктида – малоизученная часть нашей планеты, материк, покрытый толстым слоем льда. Здесь на полярных станциях живут смельчаки, не побоявшиеся самого сурового климата в мире. Фёдор Конюхов побывал в Антарктиде дважды. В этой книжке он рассказывает о том, как русская морская экспедиция во главе с капитанами Фаддеем Беллинсгаузеном и Михаилом Лазаревым открыла Антарктиду, какие трудности пришлось преодолеть отважным морякам.',
          pageCount: 372,
          imageSmall:
            'http://books.google.com/books/content?id=h0w8DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=h0w8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 151,
          amount: 93.75,
          authorId: 238,
          categoryId: 92,
          publisherId: 15,
        },
        {
          title: 'Убийство на улице Морг',
          description:
            '«Убийство на улице Морг» - рассказ известного американского новеллиста и автора рассказов в стиле хоррор Эдгара Аллана По (англ. Edgar Allan Poe, 1809-1849). *** Полиция Парижа в недоумении: кому понадобилось жестокое убийство на улице Морг? На помощь приходит сам Огюст Дюпен, чей невероятный нюх хорошо известен стражам порядка. Автор также знаменит благодаря произведениям «Спуск в Мальштрем», «Падение дома Эшер», «Свидание», «Тень», «Четыре зверя в одном», «Остров феи», «Поместье Арнгейм» и «Золотой жук». Эдгара Аллана По считают одним из самых ярких представителей американского романтизма. Создатель современной формы мистического детектива, он завоевал признание читателей готической атмосферностью и психологизмом своих произведений.',
          pageCount: 806,
          imageSmall:
            'http://books.google.com/books/content?id=IwZMDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IwZMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 127,
          amount: 9,
          authorId: 32,
          categoryId: 1,
          publisherId: 31,
        },
        {
          title: 'Sofīĭskai︠a︡ biblioteka',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 990,
          imageSmall:
            'http://books.google.com/books/content?id=tDCZ26xuVw8C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tDCZ26xuVw8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 567,
          amount: 1118,
          authorId: 580,
          categoryId: 25,
          publisherId: 5,
        },
        {
          title: 'Другое имя. Септология I-II',
          description:
            'Первая книга грандиозного полотна о Боге, одиночестве и сияющей темноте искусства.Номинант на Букеровскую премию 2020 года.Юн Фоссе – именитый норвежский писатель и драматург. Помимо пьес, он пишет стихи и романы, детские книги и эссе. Несколько лет назад Фоссе заявил, что отныне будет заниматься только прозой, и его «Трилогия» сразу получила Премию Совета северных стран.Художник Асле живет в Дюльгью. В основном он общается только со своим соседом, холостым рыбаком Ослейком. В Бьёргвине живет еще один Асле. Он тоже художник. Оба Асле дружат и в каком-то смысле представляют собой две версии одной и той же жизни.В первой книге «Септологии» мастер «медленной прозы» Юн Фоссе ретроспективно знакомит нас с детством обоих Асле. «Другое имя» – это история о памяти, фьорде, опасностях и о соседе, сгинувшем в море.',
          pageCount: 293,
          imageSmall:
            'http://books.google.com/books/content?id=2JddEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2JddEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 790,
          amount: 348.75,
          authorId: 429,
          categoryId: 1,
          publisherId: 3,
        },
        {
          title: 'Король, закон и свобода',
          description:
            'Леонид Николаевич Андреев (1871–1919) выдающийся писатель, один из видных представителей Серебряного века русской литературы. Его книги – яркие, шокирующие, образные – переведены на десятки языков. Слава к Андрееву пришла, когда творили Чехов, Толстой, Куприн, Блок и многие-многие другие, и выдержала испытание временем. Один из самых популярных писателей рубежа веков, он остается таким и сегодня, более века спустя.',
          pageCount: 52,
          imageSmall:
            'http://books.google.com/books/content?id=ZQYYAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZQYYAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 956,
          amount: 19.9,
          authorId: 430,
          categoryId: 1,
          publisherId: 5,
        },
        {
          title: 'Избранные речи',
          description:
            'Федор Никифорович Плевако (1842-1908) – выдающийся адвокат и талантливый оратор, прославившийся своей способностью убедить всех присяжных в невиновности его подзащитного. Плевако мастерски покорял сердца простых слушателей искренними речами, уделяя внимание фактам, контрастам и ловкой импровизации. Он – один из самых ярких и заметных участников политических и уголовных процессов конца XIX – начала XX века.В книгу вошли самые яркие и знаменитые речи Федора Плевако. Эти речи не просто примеры настоящего ораторского искусства, но и увлекательные истории, которые не оставят равнодушным. В сборник включены такие известные дела, как: «Дело Люторических крестьян», «Дело Максименко», «Дело Замятиных». Также в издание вошла известная речь Ф.Н. Плевако, произнесенная в защиту Каструбо-Карицкого.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 206,
          imageSmall:
            'http://books.google.com/books/content?id=nLzzEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nLzzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 434,
          amount: 561.25,
          authorId: 435,
          categoryId: 37,
          publisherId: 23,
        },
        {
          title: 'Легенды и мифы Древней Греции',
          description:
            '«Мифы о богах и их борьбе с гигантами и титанами изложены в основном по поэме Гесиода «Теогония» (Происхождение богов). Некоторые сказания заимствованы также из поэм Гомера «Илиада» и «Одиссея» и поэмы римского поэта Овидия «Метаморфозы» (Превращения).Вначале существовал лишь вечный, безграничный, темный Хаос. В нем заключался источник жизни мира. Все возникло из безграничного Хаоса – весь мир и бессмертные боги. Из Хаоса произошла и богиня Земля – Гея. Широко раскинулась она, могучая, дающая жизнь всему, что живет и растет на ней. Далеко же под Землей, так далеко, как далеко от нас необъятное, светлое небо, в неизмеримой глубине родился мрачный Тартар – ужасная бездна, полная вечной тьмы. Из Хаоса, источника жизни, родилась и могучая сила, все оживляющая Любовь – Эрос. Начал создаваться мир. Безграничный Хаос породил Вечный Мрак – Эреб и темную Ночь – Нюкту. А от Ночи и Мрака произошли вечный Свет – Эфир и радостный светлый День – Гемера. Свет разлился по миру, и стали сменять друг друга ночь и день...»',
          pageCount: 649,
          imageSmall:
            'http://books.google.com/books/content?id=SSUmAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SSUmAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 189,
          amount: 25,
          authorId: 467,
          categoryId: 1,
          publisherId: 44,
        },
        {
          title: 'Семь дней творения',
          description:
            'Книга одного из самых популярных французских писателей Марка Леви переведены на сорок один язык и расходятся многомиллионными тиражами. В книге представлен роман "Семь дней творения". Для широкого круга читателей',
          pageCount: 318,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 55,
          amount: 1628,
          authorId: 437,
          categoryId: 40,
          publisherId: 32,
        },
        {
          title: 'Фотография и ее предназначения',
          description:
            'В книгу британского писателя и арт-критика Джона Бёрджера (р. 1926), специально составленную автором для российских читателей, вошли эссе разных лет, посвященные фотографии, принципам функционирования системы послевоенного искусства, а также некоторым важным фигурам культуры ХХ века, от Маяковского до Ле Корбюзье. Тексты, в основном написанные в 1960-х годах, содержат как реакцию на события того времени (смерть Че Гевары, выход книги Сьюзен Сонтаг «О фотографии»), так и более универсальные работы по теории и истории искусства («Момент кубизма», «Историческая функция музея»), которые и поныне не утратили своей актуальности.',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=KxLmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KxLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 883,
          amount: 250,
          authorId: 438,
          categoryId: 115,
          publisherId: 3,
        },
        {
          title: 'Ловушка для каравана',
          description:
            'Книга основана на реальных событиях, воспоминаниях очевидцев и участников, документальных источниках и дневниках. Все эпизоды и фотографии привязаны к той местности, где происходили действия, описанные в романе. Автор – участник боевых действий в Афганистане и ему самому пришлось побывать в описываемых местах, испытать на себе ту атмосферу. Герои повести – это реальные люди, изменены лишь отдельные имена. Им присущи юмор и романтика. Развитие событий в книге нарастает постепенно и приближает к основному сюжету, повествующему о спец караване, в котором, кроме большого количества оружия и боеприпасов, находилась группа террористов-наёмников, имеющих опыт терактов и ликвидации политических лидеров во многих странах мира. Несмотря на то, что караван возглавлял опытный и коварный начальник с многочисленной охраной, разветвлённой разведывательной сетью, ему не удаётся пройти к месту назначения. Книга рассчитана на широкий круг читателей.Автор является лауреатом 21-го Всероссийского литературного конкурса имени генералиссимуса А.В. Суворова в номинации «Проза драматургия» за 2022 год.',
          pageCount: 594,
          imageSmall:
            'http://books.google.com/books/content?id=Ny6xEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Ny6xEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 142,
          amount: 186.25,
          authorId: 439,
          categoryId: 1,
          publisherId: 30,
        },
        {
          title: 'История',
          description:
            '«История» Геродота, обессмертившая имя этого великого грека, является первым памятником европейского исторического повествования, кладезем сведений о географии, культуре, войне и политике древнего мира. Основной сюжет книги — история греко-персидских войн, рассказ о кровопролитном столкновении двух цивилизаций, победа в котором обеспечила Элладе процветание на многие века и сделала ее наставницей человечества. Живой художественный стиль книги, читаемой на одном дыхании, непревзойденное обилие фактического и легендарного материала, закрепили за Геродотом титул «отца истории».',
          pageCount: 960,
          imageSmall:
            'http://books.google.com/books/content?id=kf9KDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kf9KDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 131,
          amount: 3,
          authorId: 443,
          categoryId: 5,
          publisherId: 41,
        },
        {
          title: 'Буря на Кавказе',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 127,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 266,
          amount: 4389,
          authorId: 317,
          categoryId: 110,
          publisherId: 28,
        },
        {
          title: 'Похищенная картина',
          description:
            '«Главный следователь Скотленд-Ярда Питер Дауэс был для своей должности сравнительно молод. Еще ни разу не потерял он найденный след, хотя сам Питер не любил говорить о своих подвигах.Если его что-то и увлекало, так это преступления с какой-нибудь запутанной загадкой. Все необычное, странное и таинственное вызывало в нем живейший интерес, и больше всего на свете он сожалел, что ему не пришлось заниматься ни одним из множества дел Джейн Четыре Квадрата...»',
          pageCount: 13,
          imageSmall:
            'http://books.google.com/books/content?id=L38iDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=L38iDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 204,
          amount: 2131,
          authorId: 440,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Портрет Дориана Грея',
          description:
            'Самый известный, изысканный и эпатажный роман Оскара Уайльда постоянно вызывает споры между поклонниками и противниками творчества писателя. Признанный мастер изящных и остроумных парадоксов увлекает читателей в неисчерпаемую тему подлинной и ложной красоты. В этом увлекательном путешествии вас сопровождает стильная, отточенная графика московского художника Андрея Симанчука.',
          pageCount: 384,
          imageSmall:
            'http://books.google.com/books/content?id=vZP_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vZP_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 904,
          amount: 323.75,
          authorId: 34,
          categoryId: 1,
          publisherId: 46,
        },
        {
          title: 'Тесты для детей 2-3 лет',
          description:
            'С предлагаемыми тестами легко и удобно работать, и для маленького ученика занятия превратятся в веселую и увлекательную игру',
          pageCount: 111,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 602,
          amount: 4989,
          authorId: 346,
          categoryId: 15,
          publisherId: 5,
        },
        {
          title:
            'Голос земли. Легендарный бестселлер десятилетия о сокровенных знаниях индейских племен, научных исследованиях и мистической связи человека с природой',
          description:
            'Как ученый-исследователь в области биологии, автор этой книги понимает, сколь не защищен и хрупок наш мир, а как активный гражданин и представитель коренного народа потаватоми, не потерявший связи со своими корнями, она чувствует и познает мир способом, который гораздо старше любой науки. В этой книге тесно переплетаются оба подхода к изучению мира – аналитический и эмоциональный, научный и культурологический, – чтобы в итоге найти способы преодоления возрастающего разрыва между людьми и природой. Книга, сотканная из реальных историй и легенд, возвращает людей к диалогу со всем, что зеленеет и растет, со Вселенной, которая никогда не переставала общаться с нами, даже когда мы разучились слышать.В формате PDF A4 сохранен издательский макет.',
          pageCount: 643,
          imageSmall:
            'http://books.google.com/books/content?id=Y0lVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Y0lVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 382,
          amount: 3149,
          authorId: 441,
          categoryId: 54,
          publisherId: 18,
        },
        {
          title: 'Язвы русской жизни. Записки бывшего губернатора',
          description:
            'Михаил Евграфович Салтыков-Щедрин, знаменитый русский писатель, знал о «язвах русской жизни» не понаслышке. В молодости он служил в вятском губернском правлении, затем – чиновником по особым поручениям при Министерстве внутренних дел, позже занимал должности рязанского и тверского вице-губернатора. Исходя из опыта своей деятельности, Салтыков-Щедрин показал «неустройство русского существования», в настоящем и будущем России он усматривал «конфуз»: «идти вперед – трудно, идти назад – невозможно». В книге, представленной вашему вниманию, собраны лучшие публицистические работы М. Е. Салтыкова-Щедрина, не потерявшие свою актуальность. В них идет речь об отношениях власти и народа, об особенностях российского управления, о жизни русских людей, о возможности преобразования России и т. д. Предисловие к книге написал Н. Н. Губенко – известный актер, режиссер и сценарист, руководитель театра «Содружество актеров Таганки». В своем театре он поставил по произведениям Салтыкова-Щедрина спектакль, который вызвал восторженные оценки зрителей. Они утверждают, что этот спектакль смотрится так, будто поставлен по пьесе современного автора.',
          pageCount: 345,
          imageSmall:
            'http://books.google.com/books/content?id=9p4UEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=9p4UEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 160,
          amount: 436.25,
          authorId: 442,
          categoryId: 2,
          publisherId: 8,
        },
        {
          title:
            'Разведывательная деятельность офицеров российского Генерального штаба на восточных окраинах империи во второй половине XIX века (по воспоминаниям генерала Л. К. Артамонова)',
          description:
            'Книга основывается на воспоминаниях генерала от инфантерии Леонида Константиновича Артамонова (1859–1932) – человека, прожившего насыщенную событиями интересную жизнь, которая пришлась на один из переломных в истории России периодов.Материалы книги служат иллюстрацией так называемой «Большой игры», с особенной силой развернувшейся в военно-политических структурах Российской и Британской империй во второй половине XIX в. В воспоминаниях Л. К. Артамонова отражены особенности службы и быта армейских, пограничных, казачьих войск, таможенной службы на окраинах империи, показано, как организовывалась штабная и разведывательная деятельность офицеров Генерального штаба.Книга предназначена для тех, кто интересуется военной историей, военной педагогикой и психологией, изучает историю военной разведки, для политологов, социологов и педагогов, а также для всех интеллигентных людей, размышляющих о судьбах России.',
          pageCount: 590,
          imageSmall:
            'http://books.google.com/books/content?id=PqP5EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PqP5EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 408,
          amount: 1218.75,
          authorId: 91,
          categoryId: 12,
          publisherId: 42,
        },
        {
          title: 'Сфера услуг: экономика, менеджмент, маркетинг',
          description:
            'Практикум носит прикладной характер, обогащает методическое сопровождение и междисциплинарные связи, формируя у студентов целостную системы знаний по взаимосвязанным дисциплинам. Предназначен для студентов, магистрантов и преподавателей вузов',
          pageCount: 421,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 290,
          amount: 2856,
          authorId: 43,
          categoryId: 2,
          publisherId: 46,
        },
        {
          title: 'Невеста демона',
          description: 'Содерж.: Поймать тень ; Крылья феникса',
          pageCount: 605,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 634,
          amount: 612,
          authorId: 422,
          categoryId: 40,
          publisherId: 33,
        },
        {
          title: 'Несмеяна-царевна. Любимые сказки',
          description:
            'Русские народные сказки входят в школьную программу и списки внеклассного чтения в начальной школе. В сборник любимых волшебных сказок вошли «Никита Кожемяка», «Несмеяна-царевна», «Окаменелое царство», «Утро, Полдень и Вечор». Красочное оформление Марины Литвиновой.Для младшего школьного возраста.',
          pageCount: 475,
          imageSmall:
            'http://books.google.com/books/content?id=vxdJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vxdJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 32,
          amount: 25,
          authorId: 445,
          categoryId: 1,
          publisherId: 17,
        },
        {
          title: 'Страница любви',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 269,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 770,
          amount: 2991,
          authorId: 357,
          categoryId: 51,
          publisherId: 15,
        },
        {
          title: 'Математика. Для детей 4–6 лет.',
          description:
            'Цель пособия – развить математическое мышление ребёнка и подготовить его к школе по математике быстро и качественно. В книге использована авторская методика, созданная на основе многолетней практической работы с детьми и успешно прошедшая апробацию в детском эко-клубе «Умничка».Выполняя увлекательные задания, ребёнок познакомится с понятиями «больше – меньше», «выше – ниже», «легче – тяжелее», «раньше – позже», «один – много», «столько же», научится ориентироваться на листе бумаги, правильно писать цифры и математические знаки, рисовать узоры по клеткам и выполнять графические диктанты, познакомится с составом числа, будет решать примеры и простейшие задачи на сложение и вычитание.Чтобы ребёнок не уставал, заниматься нужно не более 30 минут в день. Работать с пособием необходимо последовательно, не пропуская страницы и не перескакивая с темы на тему, так как курс построен по принципу усложнения.Адресовано родителям и педагогам для занятий со старшими дошкольниками дома и в ДОУ.',
          pageCount: 66,
          imageSmall:
            'http://books.google.com/books/content?id=k29nEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=k29nEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 672,
          amount: 236.25,
          authorId: 446,
          categoryId: 92,
          publisherId: 25,
        },
        {
          title: 'Жизнь Пи',
          description:
            '«Жизнь Пи» произвела настоящий культурный взрыв в мировой интеллектуальной среде. Фантастическое путешествие юноши и бенгальского тигра, описанное в романе, перекликается с повестью «Старик и море», с магическим реализмом Маркеса и с абсурдностью Беккета. Книга стала не только бестселлером, но и символом литературы нового века, флагом новой культуры.',
          pageCount: 443,
          imageSmall:
            'http://books.google.com/books/content?id=0kYOnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0kYOnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 129,
          amount: 2365,
          authorId: 448,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Учить словенский - Быстро / Просто / Эффективно',
          description:
            'В этой книге содержатся 2 000 наиболее употребительных слов и фраз, которые расположены по частоте употребления в бытовых ситуациях. В соответствии с правилом 80/20 с помощью этого словаря вы сначала выучите базовые слова и структуру предложений. Это поможет вам быстро двигаться вперед и сохранять мотивацию. Зачем нужна эта книга? Эта книга предназначена для начинающих или учеников среднего уровня, которые могут тратить на самостоятельное изучение лексики 15-20 минут в день. Из этого словаря исключено все ненужное, поэтому вы можете сконцентрироваться только на тех разделах, которые помогут вам быстро добиться максимального успеха в изучении языка. Если вы готовы ежедневно посвящать учебе 20 минут, эта книга, скорее всего, лучшее капиталовложение для начинающих или учеников среднего уровня. Всего несколько недель ежедневной практики — и вы будете поражены своими успехами. Для кого эта книга? Эта книга не подойдет ученикам высокого («продвинутого») уровня. В этом случае перейдите на наш веб-сайт или найдите наш словарь словенского языка с большим количеством слов и выражений, сгруппированных по темам, — это идеальный вариант для учеников высокого уровня, которые хотят улучшить свои языковые навыки в отдельных областях. Кроме того, если вам нужен универсальный учебник словенского языка, предполагающий поэтапное обучение, эта книга, скорее всего, тоже не то, что вы ищете. В этой книге даны только слова и выражения. Вы должны самостоятельно изучить такие разделы языка, как грамматика и фонетика, с помощью других источников или на курсах. Основное преимущество этого издания заключается в том, что оно ориентировано на быстрое изучение базовой лексики и не содержит информацию, которая обычно представлена в традиционном учебнике иностранного языка. Обратите на это внимание при покупке. Как работать с этой книгой? В идеале с этой книгой нужно работать ежедневно, изучая установленное количество страниц за урок. Книга состоит из разделов по 50 слов и выражений каждый, поэтому вы можете проходить курс поэтапно. Например, предположим, что сейчас вы изучаете слова со 101 по 200. После заучивания слов со 101 по 150 вы можете приступить к изучению слов с 201 по 250, на следующий день пропустить слова со 101 по 150 и продолжить изучение слов со 151 по 250. Таким образом, вы изучите все разделы словаря, улучшая ваши языковые навыки с каждой пройденной страницей.',
          pageCount: 127,
          imageSmall:
            'http://books.google.com/books/content?id=pdaoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=pdaoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 852,
          amount: 499,
          authorId: 449,
          categoryId: 6,
          publisherId: 42,
        },
        {
          title: 'Что-то не так в городе Идеал',
          description:
            'Вайолет крайне недовольна переездом в город Идеал. Почему все здесь слепнут и вынуждены носить специальные очки, чтобы хоть что-то видеть? Что за странные звуки слышатся по ночам и почему мама сама на себя не похожа? А потом отец Вайолет исчезает, и девочка вынуждена начать своё собственное расследование в компании нового таинственного знакомого, Мальчика. Вайолет ещё не знает, что ради спасения Идеала им предстоит сразиться в настоящей битве... Для среднего школьного возраста.',
          pageCount: 302,
          imageSmall:
            'http://books.google.com/books/content?id=KqsUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KqsUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 735,
          amount: 473.75,
          authorId: 7,
          categoryId: 1,
          publisherId: 24,
        },
        {
          title: 'Just f*cking do it! Хватит мечтать – пришло время жить по-настоящему',
          description:
            'В своей новой книге автор бестселлера «Магический пофигизм» Сара Найт рассказывает, как покончить с ленью и самосаботажем и жить той жизнью, о которой вы всегда мечтали. Если попытки «начать с понедельника» раз за разом проваливаются, понятные и четкие рекомендации Сары помогут вам правильно расставлять приоритеты, содержать свои финансы, отношения и здоровье в порядке и вершить великие дела, забыв о прокрастинации. Отговорки больше не принимаются – пришло время действовать!',
          pageCount: 262,
          imageSmall:
            'http://books.google.com/books/content?id=_tGJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_tGJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 227,
          amount: 3472,
          authorId: 450,
          categoryId: 16,
          publisherId: 9,
        },
        {
          title: 'Мальчик - отец мужчины.',
          description:
            'От чего зависят присущие или приписываемые мальчикам свойства? Всегда ли они одинаковы? Каково реальное положение мальчика в современной семье, школе и социуме? Каким он видит себя и свое тело? Как формируются и реализуются мальчишеские представления о мужественности? Каково приходится мальчикам, которые не могут или не хотят соответствовать предлагаемому нормативному канону? В каком направлении развивается современная гендерная педагогика? Обобщая данные мировых междисциплинарных исследований, ученый не дает педагогических рецептов, но его книга необходима каждому, кто готов думать над этими вопросами.',
          pageCount: 632,
          imageSmall:
            'http://books.google.com/books/content?id=HtLBEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HtLBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 313,
          amount: 249.99,
          authorId: 456,
          categoryId: 16,
          publisherId: 1,
        },
        {
          title: 'Библия и мировая культура',
          description:
            'Учебное пособие посвящено Библии – одному из важнейших прецедентных текстов (метатекстов) европейской и – шире – иудео-христианской культуры, а также ее воздействию на последующую культуру в целом и ее репрезентации в религиозной и художественной культуре. Библия рассматривается как главный итог развития древнееврейской культуры, в единстве Ветхого Завета (Еврейской Библии, или Танаха) и собственно христианской части Священного Писания – Нового Завета. Анализируются религиозно-философская проблематика, эстетика и поэтика библейских книг, рецепция библейских сюжетов, образов, мотивов в мировой литературе и искусстве.Предназначено для студентов учреждений высшего образования, обучающихся по культурологическим и филологическим специальностям.',
          pageCount: 687,
          imageSmall:
            'http://books.google.com/books/content?id=8wFrDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8wFrDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 608,
          amount: 771.25,
          authorId: 451,
          categoryId: 54,
          publisherId: 7,
        },
        {
          title: 'Средиземноморская диета: 30-дневный план питания',
          description:
            'Книга предлагает подробный взгляд на принципы средиземноморской диеты, известной своими благотворными воздействиями на здоровье. Автор предоставляет читателям не только теоретическую базу, но и конкретный 30-дневный план питания, сосредоточенный на продуктах, типичных для этого региона. Эта книга станет идеальным проводником для тех, кто стремится к балансу, энергии и долгосрочному благополучию через сбалансированный образ питания.',
          pageCount: 195,
          imageSmall:
            'http://books.google.com/books/content?id=n7z1EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=n7z1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 850,
          amount: 248.75,
          authorId: 452,
          categoryId: 116,
          publisherId: 10,
        },
        {
          title: 'Новый год в России. История праздника',
          description:
            'История празднования Нового года в разных странах, застольные традиции и многое другое в роскошном подарочном издании к Новому году. Традиция отмечать зимнее солнцестояние была еще у наших далеких предков, древних славян. Встреча Нового года сопровождается самыми яркими ритуалами, а еще этот замечательный праздник прямиком родом из детства. Эта книга о том, как Новый год пришел в Россию, откуда есть пошла русская елка и где на самом деле живет Дед Мороз. С Новым годом!',
          pageCount: 1002,
          imageSmall:
            'http://books.google.com/books/content?id=5jBNCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5jBNCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 367,
          amount: 1248.75,
          authorId: 453,
          categoryId: 5,
          publisherId: 38,
        },
        {
          title: 'Эхо сердца. Книга избранных стихов. 1987–2019',
          description:
            'Автор воспевает жизнь во всем ее многообразии, обращаясь к стилю японской поэзии. Его изысканный, невесомый слог поднимает над суетой обыденности, позволяя увидеть красоту окружающего мира.Стихи переводились на сербский, английский, французский, испанский, японский языки.В оформлении использован автограф (перевод хайку) Фудзинума Такаси, профессора русской литературы университета Васэда в Токио, переводчика романов Льва Толстого «Анна Каренина» и «Война и мир».',
          pageCount: 962,
          imageSmall:
            'http://books.google.com/books/content?id=5aAxEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5aAxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 904,
          amount: 750,
          authorId: 454,
          categoryId: 106,
          publisherId: 2,
        },
        {
          title: 'Большая книга счастья',
          description:
            'В сказках вы найдете мудрые подсказки и волшебные инструменты, которые сможете сразу применять на практике. Читайте, пробуйте, экспериментируйте и будьте счастливы!',
          pageCount: 128,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 273,
          amount: 3146,
          authorId: 87,
          categoryId: 40,
          publisherId: 26,
        },
        {
          title: 'Большая книга мудрых притч со всего света',
          description:
            'Притчи – это не просто истории, занимательные рассказы обо всем на свете, в них – мудрость веков. Это – игра ума, воображения, проникновение в тайные лабиринты сознания. Это – практическое руководство по духовному самосовершенствованию, по раскрытию духовного могущества человека, раскрытию предназначения цивилизации как частицы вселенского Разума. Притчи – отличный отдых и развлечение для души. Вместе с афоризмами притчи из этой книги помогут развлечься или отдохнуть, почерпнуть творческой энергии или укрепить веру в собственные силы.',
          pageCount: 798,
          imageSmall:
            'http://books.google.com/books/content?id=eG1VCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=eG1VCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 813,
          amount: 1306,
          authorId: 426,
          categoryId: 117,
          publisherId: 45,
        },
        {
          title: 'Книга сказок В. Сутеева',
          description:
            'Great fun and enjoyment for children to read and to look at the pictures of this book, written and illustrated by Suteev and other artists. Contains the most popular works written by Suteev, including "Under the mushroom", "The chick and the duckling", "The apple", "Uncle Misha", "The fir-tree", and "The fishing cat". The characters from the cartoon film which include "One, two -- harmoniously", "About the hippopotamus, which feared inoculations", "Pete and the Red Cap", and "We search for blots", and also include children\'s stories translated from Norwegian, English and Italian, which are "The little goat who can count to ten", "Happy New Year", and "The famous duckling Tim."',
          pageCount: 270,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 763,
          amount: 1538,
          authorId: 457,
          categoryId: 118,
          publisherId: 44,
        },
        {
          title: 'От Боттичелли до Караваджо. 100 шедевров Уффици',
          description:
            'Галерея Уффици, расположенная в самом сердце Флоренции – вечно живой памятник человеческому гению и оттиск величия Ренессанса. Внушительная коллекция шедевров, принадлежавшая знаменитому семейству Медичи, разместилась в великолепном здании, возведенном архитекторами Дж. Вазари и Б. Буонталенти. Общее количество картин галереи насчитывает около двух тысяч и еще почти столько же хранят ее фонды. В залах музея выставлено богатейшее собрание итальянской живописи XIII-XVIII веков: картины художников Пьеро делла Франческа, Сандро Боттичелли, Леонардо да Винчи, Рафаэля, Тициана и Караваджо. Выстроенная в хронологическом порядке экспозиция дает возможность посетителям изучить особенности художественных школ и проследить, как течения в искусстве сменяли друг друга.В этом иллюстрированном издании собрано описание ста лучших шедевров галереи Уффици. Вместе с автором книги и знаменитым искусствоведом Паолой Волковой вы совершите увлекательное путешествие в мир искусства и откроете для себя сокровища одного из самых посещаемых музеев мира.',
          pageCount: 258,
          imageSmall:
            'http://books.google.com/books/content?id=5onHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5onHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 722,
          amount: 561.25,
          authorId: 458,
          categoryId: 3,
          publisherId: 36,
        },
        {
          title: 'Учить хорватский - Быстро / Просто / Эффективно',
          description:
            'В этой книге содержатся 2 000 наиболее употребительных слов и фраз, которые расположены по частоте употребления в бытовых ситуациях. В соответствии с правилом 80/20 с помощью этого словаря вы сначала выучите базовые слова и структуру предложений. Это поможет вам быстро двигаться вперед и сохранять мотивацию. Зачем нужна эта книга? Эта книга предназначена для начинающих или учеников среднего уровня, которые могут тратить на самостоятельное изучение лексики 15-20 минут в день. Из этого словаря исключено все ненужное, поэтому вы можете сконцентрироваться только на тех разделах, которые помогут вам быстро добиться максимального успеха в изучении языка. Если вы готовы ежедневно посвящать учебе 20 минут, эта книга, скорее всего, лучшее капиталовложение для начинающих или учеников среднего уровня. Всего несколько недель ежедневной практики — и вы будете поражены своими успехами. Для кого эта книга? Эта книга не подойдет ученикам высокого («продвинутого») уровня. В этом случае перейдите на наш веб-сайт или найдите наш словарь хорватского языка с большим количеством слов и выражений, сгруппированных по темам, — это идеальный вариант для учеников высокого уровня, которые хотят улучшить свои языковые навыки в отдельных областях. Кроме того, если вам нужен универсальный учебник хорватского языка, предполагающий поэтапное обучение, эта книга, скорее всего, тоже не то, что вы ищете. В этой книге даны только слова и выражения. Вы должны самостоятельно изучить такие разделы языка, как грамматика и фонетика, с помощью других источников или на курсах. Основное преимущество этого издания заключается в том, что оно ориентировано на быстрое изучение базовой лексики и не содержит информацию, которая обычно представлена в традиционном учебнике иностранного языка. Обратите на это внимание при покупке. Как работать с этой книгой? В идеале с этой книгой нужно работать ежедневно, изучая установленное количество страниц за урок. Книга состоит из разделов по 50 слов и выражений каждый, поэтому вы можете проходить курс поэтапно. Например, предположим, что сейчас вы изучаете слова со 101 по 200. После заучивания слов со 101 по 150 вы можете приступить к изучению слов с 201 по 250, на следующий день пропустить слова со 101 по 150 и продолжить изучение слов со 151 по 250. Таким образом, вы изучите все разделы словаря, улучшая ваши языковые навыки с каждой пройденной страницей.',
          pageCount: 129,
          imageSmall:
            'http://books.google.com/books/content?id=PdaoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PdaoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 948,
          amount: 499,
          authorId: 449,
          categoryId: 20,
          publisherId: 25,
        },
        {
          title: 'Сказки народов мира',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 899,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 656,
          amount: 4948,
          authorId: 463,
          categoryId: 86,
          publisherId: 15,
        },
        {
          title: 'Репетитор по алгебре и началам анализа для 10-11 классов',
          description:
            'Книга написана на основе действующей программы по алгебре и началам анализа для общеобразовательных школ, гимназий, лицеев.Она содержит более 2500 задач, из которых около 800 даны с решениями, а остальные предназначены для самостоятельного решения.Каждая глава сопровождается краткими теоретическими сведениями, справочными материалами и включает различные типы примеров с подробными решениями.Задачи тщательно подобраны по принципу однородности тем, типов, методов решения и распределены на две части по уровню сложности.Неравенства, рассматриваемые в книге, решены как традиционными методами, так и методом рационализации, который стал активнее применяться в последние годы на ЕГЭ.В заключительной главе приводятся олимпиадные задачи, к которым даны ответы, краткие указания и решения к наиболее трудным.Репетитор адресован школьникам и выпускникам для самостоятельной подготовки к урокам и сдаче ЕГЭ, олимпиадам, для успешной сдачи экзамена при поступлении в престижные вузы, а также учителям математики, студентам и репетиторам.',
          pageCount: 507,
          imageSmall:
            'http://books.google.com/books/content?id=KjP9EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=KjP9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 626,
          amount: 773.75,
          authorId: 460,
          categoryId: 33,
          publisherId: 35,
        },
        {
          title: 'Сестромам. О тех, кто будет маяться',
          description:
            'Писательница и сценаристка Евгения Некрасова родилась в 1985 году. Окончила Московскую школу нового кино. Её цикл прозы «Несчастливая Москва» удостоен премии «Лицей» (2017), роман «Калечина-Малечина» вошёл в шортлисты премий «НОС» (2018), «Национальный бестселлер» (2019) и «Большая книга» (2019), лонг-лист «АБСпремии».Книгу рассказов «Сестромам. О тех, кто будет маяться» населяют люди, животные и мифические существа. Четыре кольца охраняют Москву, да не всегда спасают; старуха превращается в молодую женщину, да не надолго. В повседневность здесь неизменно вмешивается сказ, а заговоры и прибаутки легко соседствуют с лондонскими диалектами.',
          pageCount: 270,
          imageSmall:
            'http://books.google.com/books/content?id=EEKuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=EEKuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 794,
          amount: 523.75,
          authorId: 461,
          categoryId: 1,
          publisherId: 15,
        },
        {
          title: 'Чаша Грааля. Софиология страдания',
          description:
            '«Невместимый мыслитель, неуместный богослов», священник и философ, протоиерей Сергий Булгаков – без сомнения, одна из самых ярких, противоречивых и влиятельных фигур в пантеоне христианских мыслителей ХХ века. Его живая, острая и богатая мысль питалась прежде всего глубоким личным опытом Встречи с Христом, Который открывался ему как в радости, так и в страданиях.Обширное богословское наследие о. Сергия еще ждет своего глубокого и благодарного изучения. Вклад в это важное дело – настоящий сборник, посвящённый одному из главных аспектов богословия о. Сергия и составленный внимательным, вдумчивым и любящим читателем, писателем и публицистом, архимандритом Саввой (Мажуко).В настоящем сборнике представлены работы, написанные о. Сергием Булгаковым в последние годы его жизни: «Святой Грааль»,«Софиология смерти», «Христос в мире», «Размышления о войне», «Беседы о Божественной литургии» и фрагменты дневниковых записей.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 345,
          imageSmall:
            'http://books.google.com/books/content?id=5s8hEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5s8hEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 109,
          amount: 400,
          authorId: 462,
          categoryId: 8,
          publisherId: 1,
        },
        {
          title: 'Курс вождения автомобиля (+CD с анимационной тренинг-системой по ПДД)',
          description:
            'Из этой книги вы узнаете, что представляет собой современный автомобиль, как получить первые водительские навыки, какие упражнения следует освоить на тренировочной площадке, как правильно ездить в городских условиях и на загородных дорогах. Вам не будут страшны дождь, снег, гололед, туман, темное время суток и иные природные катаклизмы: в книге рассказывается не только о том, как управлять машиной в подобных условиях, но и о том, что следует предпринять в случае внезапной нештатной ситуации. Понятный и доступный стиль изложения, а также большое количество полезных советов и рекомендаций делают материал увлекательным и легким для восприятия. Диск, дополняющий книгу, не позволит вам скучать! Знания, которые вы приобретете во время игры, пригодятся вам на настоящих трассах и позволят на равных общаться с постовыми. Удачи на дорогах!',
          pageCount: 192,
          imageSmall:
            'http://books.google.com/books/content?id=DKk5AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DKk5AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 684,
          amount: 120,
          authorId: 337,
          categoryId: 60,
          publisherId: 15,
        },
        {
          title: 'Сборник пошаговых рецептов для диабетиков',
          description:
            'Уважаемые будущие читатели! Эта книга написана для диабетиков 2 типа и ПП. Здесь представлены переработанные только 30 рецептов 1960 года из книги М.П. Петерсон, А.Я. Пасопа «Поваренная книга» и 69 из личной практики. В книге есть следующие разделы: «Мука для диабетиков», «Ржаная закваска», «Хлеб и хлебобулочные изделия», «Супы», «Гарниры к супам», «Закуска», «Мясо», «Рыба», «Каша», «Макароны», «Блюда из творога», «Яйца», «Салаты», «Холодные блюда из рыбы», «Холодные блюда из мяса», «Бутерброды», «Желе», «Кремы», «Мороженое», «Варенье», «Приложение». В «Приложении» дается реальное меню на день. Далее универсальное меню с подбором продуктов питания и комментариями из личного опыта. Выдержки из статей врачей об осложнениях при сахарном диабете и питании при осложнениях. Всего 100 рецептов с комментариями. Администрация сайта ЛитРес не несет ответственности за представленную информацию. Могут иметься медицинские противопоказания, необходима консультация специалиста.',
          pageCount: 106,
          imageSmall:
            'http://books.google.com/books/content?id=PCSHEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PCSHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 621,
          amount: 2750,
          authorId: 362,
          categoryId: 43,
          publisherId: 3,
        },
        {
          title: 'На пороге бессмертия',
          description:
            'Бывший хирург, сумевший игрой на бирже сколотить состояние и попытавшийся его до времени скрыть от посторонних глаз, попадает в ловушку и становится невольным убийцей близких ему людей. Получив срок и потеряв возможность действовать, он всё же делает всё, чтобы найти тех, кто подставил его, и наказать их своим судом. Подполковнику Волкову и Матвееву предстоит распутать клубок интриг и кровавых преступлений, которые едва не затмили своей жесткостью преступления синдиката ликвидаторов.',
          pageCount: 235,
          imageSmall:
            'http://books.google.com/books/content?id=yC24EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yC24EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 861,
          amount: 248.75,
          authorId: 440,
          categoryId: 1,
          publisherId: 36,
        },
        {
          title: 'Орфографический словарь русского языка',
          description:
            'Словарь предназначается для филологов, специалистов в области русского языка, переводчиков, преподавателей, студентов, для широкого круга лиц, читающих литературу, и для иностранцев, занимающихся русским языком',
          pageCount: 23,
          imageSmall:
            'http://books.google.com/books/content?id=rcwbfQt58IAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=rcwbfQt58IAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 264,
          amount: 4403,
          authorId: 265,
          categoryId: 20,
          publisherId: 22,
        },
        {
          title: 'Орфографический словарь русского языка',
          description:
            'Словарь предназначается для филологов, специалистов в области русского языка, переводчиков, преподавателей, студентов, для широкого круга лиц, читающих литературу, и для иностранцев, занимающихся русским языком',
          pageCount: 23,
          imageSmall:
            'http://books.google.com/books/content?id=rcwbfQt58IAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=rcwbfQt58IAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 33,
          amount: 3116,
          authorId: 297,
          categoryId: 20,
          publisherId: 11,
        },
        {
          title: 'Шея жирафа',
          description:
            'Иронично-трагичный «роман воспитания» молодой немецкой писательницы рассказывает о трех днях из жизни Инги Ломарк, учительницы биологии и физкультуры еще гэдээровской закалки в провинциальной гимназии, которую скоро закроют из-за нехватки учеников. Инга твердо верит в законы природы, естественный отбор и конкуренцию как основу развития общества. Она думает, что знает все о себе, своих учениках и о жизни вообще, но отчего тогда ее безупречная педагогическая карьера заканчивается крахом?.. «Шея жирафа» стала в Германии бестселлером, вошла в длинный список Немецкой литературной премии и получила звание самой красивой немецкой книги 2012 года. На русском языке издается впервые.',
          pageCount: 180,
          imageSmall:
            'http://books.google.com/books/content?id=LzF7AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=LzF7AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 484,
          amount: 3043,
          authorId: 464,
          categoryId: 1,
          publisherId: 35,
        },
        {
          title: 'Три стороны камня',
          description:
            'Новый роман «Три стороны камня» Марины Москвиной (финалист премии «Ясная Поляна», автор романов «Крио», «Гений безответной любви», «Роман с Луной», книги «Моя собака любит джаз») продолжает ее бесконечную историю любви к нашему угловатому и абсурдному бытию. Это трагикомическое повествование про живописца, который искал цвет в своих картинах и в конечном счете превратился в чистый свет. В прозе Марины Москвиной упоминания заслуживают лишь те люди и события, которые привносят дыхание вечного в наш преходящий мир.',
          pageCount: 214,
          imageSmall:
            'http://books.google.com/books/content?id=36NoEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=36NoEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 166,
          amount: 523.75,
          authorId: 465,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title: 'История успеха BTS и как это повторить самостоятельно',
          description:
            'Коммерческий успех любого бизнеса зависит от того, насколько точно выбранная менеджментом стратегия отвечает реалиям рынка. Об этом очень часто забывают менеджеры и владельцы бизнеса, когда на рынке есть преуспевающая компания, чей успех хочется повторить. Поверхностное копирование чужого продукта обязательно обернется для вашего бизнеса катастрофой, если вы не вникаете в суть стратегии конкурентов и не понимаете, на каких принципах она основана.Эта книга поможет как начинающим, так и опытным бизнесменам и маркетологам избежать ошибок и использовать преимущества эффективных управленческих и маркетинговых стратегий на примере самого успешного бизнес-проекта XX века – южнокорейской группы BTS.Автор книги Пак Хёнчжун, MBA, – эксперт в области корпоративной стратегии и управления, автор методологии управления, основанной на перфоманс-маркетинге, а также книг о корпоративном управлении, маркетинге и Big Data в бизнесе.В формате PDF A4 cсохранён издательский дизайн.',
          pageCount: 263,
          imageSmall:
            'http://books.google.com/books/content?id=CLIUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=CLIUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 919,
          amount: 398.75,
          authorId: 466,
          categoryId: 10,
          publisherId: 31,
        },
        {
          title: 'Как заработать в интернете. Фриланс с нуля и до первых заработков',
          description:
            'В интернете можно зарабатывать и это просто и легко! Как? Вы узнаете в этой книге. В книге собраны множество видов заработка в интернете для начинающих фрилансеров. С примерами и опытом самого фрилансера.',
          pageCount: 11,
          imageSmall:
            'http://books.google.com/books/content?id=lUjTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lUjTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 881,
          amount: 248.75,
          authorId: 468,
          categoryId: 10,
          publisherId: 39,
        },
        {
          title: 'Биомеханика позвоночника в асанах йоги',
          description:
            'Книга предназначена для того, чтобы помочь преподавателям йоги и всем, кто ее практикует, разобраться в анатомии позвоночника – главной и основной структуры нашего тела, понять механику его движений и физиологические возможности, исключить травмоопасные движения и положения, минимизировать риски и максимально использовать терапевтический потенциал йоги. Книга содержит все необходимые сведения о строении и функционировании позвоночника, написана доступным языком, материал четко структурирован, что делает его легким для понимания и усвоения. Текст сопровождается иллюстрациями с пояснениями. Книга станет надежным подспорьем в личной и преподавательской практике, прояснит многие моменты и сделает йогу эффективнее и безопаснее.Администрация сайта ЛитРес не несет ответственности за представленную информацию. Могут иметься медицинские противопоказания, необходима консультация специалиста.',
          pageCount: 194,
          imageSmall:
            'http://books.google.com/books/content?id=i9_dDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=i9_dDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 592,
          amount: 612.5,
          authorId: 469,
          categoryId: 11,
          publisherId: 27,
        },
        {
          title: 'Замуж за орка, или Эльфы тоже плачут',
          description:
            'Элизабет красива, капризна и мечтает о принце. И непременно об эльфийском. Ее отец богат, властолюбив и готов отдать ее за королевского племянника. А вот у прабабки совершенно другие планы. Она не мелочится и прочит в супруги взбалмошной девице не одного, а сразу двух орков. Один брутальный грубиян, другой утонченный циник. И у обоих секретов больше, чем травинок в степи. И как ужиться с такими разными мужчинами? Остается лишь уповать на судьбу и магию фурий, посуливших любовь и счастье.',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=uVeyDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=uVeyDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 819,
          amount: 888,
          authorId: 470,
          categoryId: 1,
          publisherId: 21,
        },
        {
          title: 'Елена Ивановна Рерих. Письма. Том VI (1938–1939 гг.)',
          description:
            'Полное собрание писем Елены Ивановны Рерих из архива Международного Центра Рерихов.В шестой том вошли письма 1938–1939 гг., адресованные издателю журнала «Оккультизм и Йога» А.М. Асееву, американским ученикам Е.И. Рерих – К. Кэмпбелл, Ф. Грант, З.Г. и М. Лихтманам, а также сотрудникам Латвийского и Литовского обществ имени Рериха – Р.Я. Рудзитису, Г.Ф. Лукину, А.И. Клизовскому, Н.П. Серафининой, Ю.Д. Монтвидене и другим.Большинство писем публикуется впервые.',
          pageCount: 1058,
          imageSmall:
            'http://books.google.com/books/content?id=MQNTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MQNTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 849,
          amount: 186.25,
          authorId: 471,
          categoryId: 12,
          publisherId: 40,
        },
        {
          title: 'Административный ресурс. Часть 1. Я вспомнил все, что надобно забыть',
          description:
            'Вторая книга трилогии "Россия. Наши дни" описывает жизнь главного героя до момента его похищения и потери памяти с 1994 по 2006 год. В борьбе с рейдерами за свой бизнес, главный герой получает три пули. Очнувшись после тяжелой операции, он понимает, что многое вспомнил из своей прошлой жизни. Теперь в его шкафу оказались не только собственные скелеты, но и страшные тайны известных политиков, чиновников и крупных бизнесменов, прошедших по его жизненному пути. Их фамилии в романе изменены, но узнаваемы. Помогут ли ему эти знания о себе и одиозных фигурах современной России в новой жизни, или, наоборот, полученная информация еще больше усложнит существующую реальность. Он вспоминает, что на его оффшорных счетах находятся миллионы долларов, которые заработаны в результате криминальных деяний и торговли оружием. И самое главное – большая часть этих денег принадлежит сотрудникам спецслужб.',
          pageCount: 537,
          imageSmall:
            'http://books.google.com/books/content?id=sEX2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sEX2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 600,
          amount: 248.75,
          authorId: 472,
          categoryId: 1,
          publisherId: 31,
        },
        {
          title: 'Вещие сны кота Сократа',
          description:
            'Книга, которую вы держите в руках или которая сияет на вашем мониторе, полностью посвящена снам кота Сократа. Как так получилось?Очень просто. По утрам во время завтрака его домочадцы частенько делятся своими снами. И среди этих рассказов попадаются настолько невероятные, что диву даёшься.Людям снится всё, что угодно – от полёта в космос до спуска на дно океана. И вот недавно Сократа посетила такая мысль: а почему бы не рассказать читателям о его снах?За годы путешествий ему такое наприснилось, что он даже сомневается, хватит ли одной книги, чтобы обо всём рассказать.Итак, начинаем?',
          pageCount: 225,
          imageSmall:
            'http://books.google.com/books/content?id=yqWkEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=yqWkEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 968,
          amount: 398.75,
          authorId: 473,
          categoryId: 28,
          publisherId: 10,
        },
        {
          title: 'Обострение памяти. Рассказы',
          description:
            'Юность наполнена мечтами, грандиозными планами, зрелость – страстями и заботами. Но приходит время, когда мы всё чаще обращаемся к воспоминаниям. И не только личным. Где-то в глубинах подсознания просыпается генетическая память, обрывки разговоров, бабушкиных и дедушкиных рассказов выстраиваются в чёткие картины прошлого. Порой даже мимолётные встречи оставляют яркий след в нашей памяти. И как из разноцветных бусин собирают ожерелье, так из самых разных воспоминаний собрана эта книга.',
          pageCount: 851,
          imageSmall:
            'http://books.google.com/books/content?id=cOlNDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cOlNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 200,
          amount: 100,
          authorId: 474,
          categoryId: 1,
          publisherId: 30,
        },
        {
          title: 'Невоспетый герой русского авангарда',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 382,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 629,
          amount: 3451,
          authorId: 518,
          categoryId: 123,
          publisherId: 19,
        },
        {
          title: 'Поколение одиночек',
          description:
            '«Поколение одиночек» – третья книга известного критика, главного редактора литературной газеты «День литературы» Владимира Бондаренко, вышедшая в издательстве ИТРК.Вместе с двумя ранее изданными книгами «Дети 1937 года» и «Серебряный век простонародья» они составляют трехтомник по литературе 20 века и представляют читателю 70 прозаиков и поэтов России, оставивших заметный след в русской литературе советского периода и определяющих её уровень в настоящее время.В этих произведениях Владимир Бондаренко исследует и анализирует русскую литературу независимо от социально-политических воззрений авторов во всем её объеме в едином литературном потоке. Судьбы созданных авторами литературных героев, биографии самих авторов и деяния их поколений отражают реальные исторические события жизни нашего народа.Книга полезна всем, кто любит русскую литературу и поможет читателю лучше сориентироваться в выборе книг для своего чтения.Книга также является важным пособием по литературе XX века для учителей литературы в школе, студентов и преподавателей гуманитарных факультетов высших учебных заведений.',
          pageCount: 850,
          imageSmall:
            'http://books.google.com/books/content?id=HvgVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=HvgVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 474,
          amount: 161.25,
          authorId: 475,
          categoryId: 12,
          publisherId: 20,
        },
        {
          title: 'Последняя игра чернокнижника',
          description:
            'Пусть и не по своей воле я очутилась в иной реальности, но увидела возможность начать с чистого листа новую жизнь. А другой мир оказался местом страшнее, чем я знавала до сих пор. В прошлом преступница, которой нечем гордиться, встретилась со злом настоящим – холодным, расчетливым, порочным и не ведающим сострадания. Чернокнижник решил вовлечь меня в свою очередную игру. Самое простое – сдаться на его волю, но раз уж прошлое меня не сломило, то и с ролью жертвы не смирюсь.',
          pageCount: 424,
          imageSmall:
            'http://books.google.com/books/content?id=QPACEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=QPACEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 399,
          amount: 4660,
          authorId: 476,
          categoryId: 1,
          publisherId: 16,
        },
        {
          title: 'Мать – это святое! Манипуляции токсичных родительниц и как им противостоять',
          description:
            '«Мама – главный человек в жизни» – эти слова мы слышим с самого раннего детства. А что, если мать, подарив жизнь, в дальнейшем по капле отнимает ее? А что, если она вредит ребенку, уничтожает морально, убивает его душу и разрушает дух?Татьяна Дьяченко касается сложной, во многом табуированной темы в нашем обществе – токсичного отношения матерей к своим детям.Эта книга – поддержка жертвам матерей, до сих пор страдающим от последствий насилия. Прочитав ее, вы освободитесь от материнского гипноза, поймете, что вы не виноваты в том, что с вами делала или делает мать. Вы достойны счастья и свободы.Внутри:• типы токсичных матерей;• проявления психологического и физического насилия;• техники самопомощи;• истории успешного исцеления травм детства.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 337,
          imageSmall:
            'http://books.google.com/books/content?id=5BX_EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=5BX_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 579,
          amount: 473.75,
          authorId: 477,
          categoryId: 16,
          publisherId: 38,
        },
        {
          title: 'Советы автолюбителю',
          description:
            'Что даст вам эта книга?! Базу! Базовые знания для того, чтобы стать профессионалом или не делать глупостей, мелких и больших, – последствия которых не сможет помочь вам исправить даже профессионал.Если вы профессионал в области автомобилей, тогда вам стоит сразу открыть книгу на интересующей странице и, просмотрев несколько разделов, убедиться, что большая часть содержания вам уже известна, и если можно ее купить, то ради свеженьких справочных данных.Если вы только-только начинаете учиться водить автомобиль и всему, что с этим связано, то эта книга для вас. Она и для тех, у кого нет времени разбираться детально, нет возможности получить помощь профессионала, а результат необходим.',
          pageCount: 820,
          imageSmall:
            'http://books.google.com/books/content?id=-hDvCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-hDvCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 35,
          amount: 124.87,
          authorId: 478,
          categoryId: 119,
          publisherId: 36,
        },
        {
          title: 'Kotjonok po imeni Gav',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 48,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 620,
          amount: 3693,
          authorId: 382,
          categoryId: 79,
          publisherId: 2,
        },
        {
          title: 'Две жизни',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 715,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 6,
          amount: 2209,
          authorId: 512,
          categoryId: 23,
          publisherId: 19,
        },
        {
          title: 'Красное солнышко',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 160,
          imageSmall:
            'http://books.google.com/books/content?id=xOh4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xOh4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 62,
          amount: 611,
          authorId: 50,
          categoryId: 19,
          publisherId: 27,
        },
        {
          title: 'Историческая правда и украинофильская пропаганда',
          description:
            'Предлагаемая книга Александра Волконского впервые была издана в начале XX века. И за столетний период она не утратила актуальность. По мнению многих историков, князь Волконский является одним из знатоков «украинского сепаратизма». В своей книге он подвергает критике это явление и говорит о необходимости восстановления общерусского единства – объединения великороссов, белорусов и малороссов. Приводя исторические факты, документы и анализируя «украинофильскую» пропаганду, он помогает понять причины и истоки украинского «национал-сепаратизма».',
          pageCount: 164,
          imageSmall:
            'http://books.google.com/books/content?id=ETALDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ETALDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 850,
          amount: 290,
          authorId: 479,
          categoryId: 5,
          publisherId: 21,
        },
        {
          title: 'Жестокий брак. Как мы влюблялись, женились и ревновали на протяжении веков',
          description:
            'Четвертая книга от автора исторических бестселлеров Ники Марш!Зачем люди вступают в брак? Как брачный союз влиял на королей и простолюдинов? Что изменилось сегодня? В истории человечества было множество удивительных, трогательных и необычных брачных традиций. На протяжении веков брак был не только и не столько союзом любви, но и способом сохранить трон, дать фамилию потомству, узурпировать власть, соблюсти древние обычаи... Самые поразительные истории брачных союзов разных стран и времен ждут вас на страницах этой книги.Cохранен издательский макет.',
          pageCount: 361,
          imageSmall:
            'http://books.google.com/books/content?id=guH1EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=guH1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 896,
          amount: 648.75,
          authorId: 480,
          categoryId: 54,
          publisherId: 32,
        },
        {
          title: 'Нулевой пациент. Нестрашная история самых страшных болезней в мире',
          description:
            'Правда ли, что Христофор Колумб завез новую разновидность сифилиса в Европу? Что общего у ребенка супругов Льюисов и одиннадцатого президента США? Связаны ли туберкулез и вампиры? Книга Лидии Канг и Нэйта Педерсена – увлекательная иллюстрированная история эпидемий инфекционных заболеваний: как они появляются, как распространяются, что позволяет их диагностировать, и как мы спешим уничтожить их, прежде чем они уничтожат нас. Чума, оспа, проказа, тиф, бешенство, корь, сибирская язва, гепатит, лихорадка Эбола, ВИЧ, коронавирус – насколько успешно человечество справляется с этими болезнями и есть ли шансы победить их раз и навсегда?В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 805,
          imageSmall:
            'http://books.google.com/books/content?id=7PXKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=7PXKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 761,
          amount: 998.75,
          authorId: 481,
          categoryId: 15,
          publisherId: 30,
        },
        {
          title: 'Социопат по соседству. Люди без совести против нас. Как распознать и противостоять',
          description:
            'Холодные и расчетливые, непредсказуемые и невероятно привлекательные – так клинический психолог Марта Стаут описывает социопатов, людей без совести. Каждый из нас может стать жертвой этих виртуозных манипуляторов, поддавшись их хищному обаянию. Не испытывая эмоций и не чувствуя сострадания, социопат разрушает судьбы окружающих людей, используя их для достижения собственных эгоистичных целей. В книге объясняется, как вовремя распознать таких людей и обезопасить себя. Марта Стаут мастерски рассказывает истории, описывая характеры социопатов, делится своим опытом и дает важные советы. Прославленный бестселлер, получивший приз Books for a Better life за лучшую книгу по психологии. Первое издание на русском языке.',
          pageCount: 289,
          imageSmall:
            'http://books.google.com/books/content?id=DElADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=DElADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 244,
          amount: 3026,
          authorId: 483,
          categoryId: 16,
          publisherId: 36,
        },
        {
          title: 'Динозавры. Полный гид',
          description:
            '«Динозавры. Полный гид» – уникальное руководство по миру динозавров от самого лучшего в мире динозаврового эксперта среди детей! Дино Дана – героиня одноименного фильма и сериала, четырежды номинированного на Дневную премию «Эмми». Эта книга не первый год является бестселлером во всем мире и подходит как для тех, кто только недавно заинтересовался динозаврами, так и для тех, кто хочет узнать о них больше.Дана знает о динозаврах абсолютно все! Но не перестает задавать вопросы и каждый день стремится совершить новое открытие. Каждое свое предположение она проверяет на практике и устраивает эксперимент. Например, кто был сильнее, тираннозавр рекс или гиганотозавр? Стоит лишь подключить воображение, провести эксперимент и ответ у вас в руках!В руководстве Даны читатель найдет огромное количество фактов о динозаврах, основанных на последних палеонтологических открытиях. Например, в какой период времени жил тот или иной динозавр, насколько большими были «древние ящеры», чем питались, как спасались от жары и холода? Каждому динозавру посвящен невероятный эксперимент, благодаря которому ребенок не только сможет узнать больше, но и научится выдвигать настоящие научные гипотезы и подтверждать их на практике, а также по максимуму использовать воображение!Для среднего школьного возраста.',
          pageCount: 242,
          imageSmall:
            'http://books.google.com/books/content?id=IuPGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=IuPGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 887,
          amount: 623.75,
          authorId: 484,
          categoryId: 92,
          publisherId: 11,
        },
        {
          title: 'Стихи про зубы. Том 18. Серия «Дентилюкс». Здоровые зубы – залог здоровья нации',
          description:
            'В книге опубликованы стихи про зубы, чистку зубов, Зубную Фею, жевательную резинку, соблюдение правил чистки зубов и т. д. Книга рекомендована широкому кругу читателей: детям, подросткам, родителям, гигиенистам стоматологическим, врачам-стоматологам, детским стоматологам и т.д., а также студентам и аспирантам медицинских колледжей и вузов.',
          pageCount: 38,
          imageSmall:
            'http://books.google.com/books/content?id=FoqqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FoqqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 403,
          amount: 1518,
          authorId: 487,
          categoryId: 43,
          publisherId: 23,
        },
        {
          title:
            'Рабочая тетрадь для выхода из круга навязчивых мыслей и эмоционального перенапряжения. Методы когнитивно-поведенческой и диалектической поведенческой терапии',
          description:
            'Неприятные мысли и сложные эмоции бывают у всех, и это нормально. Но иногда негативные размышления повторяются и со временем становятся навязчивыми. Такая проблема может быть свидетельством обсессивно-компульсивного расстройства (ОКР) или его предпосылкой.Навязчивые мысли и непрерывный поток сложных чувств сильно влияют на качество жизни и не дают получать удовольствие от пребывания в настоящем. Авторы рабочей тетради Джон Хершфилд и Блейз Агирре, опираясь на свой обширный опыт в психиатрии и психотерапии, рассказывают, как эффективно справиться с обсессиями (то есть повторяющимися нежелательными мыслями) и компульсиями (то есть ритуалами и навязчивыми действиями) и разорвать порочный круг. В качестве действенных методов авторы предлагают когнитивно-поведенческую терапию (КПТ) и диалектическую поведенческую терапию (ДПТ).Джон Хершфилд и Блейз Агирре используют в своей практике экспозицию: советуют клиентам пойти навстречу собственным страхам и не поддаваться нездоровым повторяющимся сценариям. Теория в рабочей тетради поможет расставить все точки над i, а в закреплении материала и претворении полезных навыков в жизнь вам поможет практическая часть.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 224,
          imageSmall:
            'http://books.google.com/books/content?id=VkP2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VkP2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 334,
          amount: 286.25,
          authorId: 488,
          categoryId: 16,
          publisherId: 30,
        },
        {
          title: 'Делай, что можешь',
          description:
            'Многие мечтают исправить жизнь. Вернуться назад, в прошлое, и сделать нечто, на что прежде не решились бы. Жениться на другой и вести себя совершенно иначе, зарабатывая миллионы. Мы ведь все умны задним числом. А если ты успешен и добился многого? Если тебе не нужна власть, но ты видишь, как окружающий мир идет в глубоко сомнительном направлении? И вот в голову начинают приходить мысли об исправлении истории. Невозможно? Ну только не тогда, когда ты имеешь огромные возможности и много лет занимаешься идеей, заходя совсем с другой стороны. Никаких машин времени! Только человеческий мозг! Двадцать лет подготовки с риском сесть за растрату... и вместо Германии двадцатых прошлого века оказаться в России. Э, да какая разница. Цель прежняя – отменить Вторую мировую войну!',
          pageCount: 345,
          imageSmall:
            'http://books.google.com/books/content?id=ZjFEEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZjFEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 319,
          amount: 3326,
          authorId: 490,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'REM-психология. Решение психологических проблем в осознанном сне',
          description:
            'Случалось ли вам сталкиваться со сложными отношениями, постоянными страхами, лишним весом, комплексами, депрессией? Нашли ли вы свое место в жизни? А что, если эти и многие другие проблемы вы сумеете решить, всего лишь раздвинув границы своей реальности?Во сне мы можем не только набираться сил, но и учиться осознанно имитировать любые события. Без привычных физических лимитов в REM-стадии сна можно подсознательно воздействовать на истинный корень своих проблем. Именно в этом секрет REM-психологии – абсолютно нового инструмента работы с личными неурядицами. Без затрат и походов к психологам в одно утро вы просто проснетесь в гармонии со Вселенной. Эта книга объяснит вам, за счет каких нейробиологических механизмов это происходит, и даст четкие инструкции, как начать исцелять себя уже сегодня ночью.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 267,
          imageSmall:
            'http://books.google.com/books/content?id=xC24EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xC24EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 663,
          amount: 436.25,
          authorId: 491,
          categoryId: 16,
          publisherId: 7,
        },
        {
          title: 'Волшебство эмоций',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 47,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 850,
          amount: 1291,
          authorId: 322,
          categoryId: 78,
          publisherId: 23,
        },
        {
          title: 'Маркетинг игр',
          description:
            'Книга, которую вы сейчас читаете, предназначена для сотрудников небольших и средних команд. У таких коллективов обычно нет денег на выделенного маркетолога, поэтому в его роли выступает руководитель студии, геймдизайнер или тот, кто лучше всего выглядит в кадре. И даже если команда работает с издателем, её сотрудники не всегда понимают, что именно происходит с продвижением их игры и почему. Я постарался не вдаваться в теорию и поэтому не всегда объяснял, почему нужно делать вещи так, а не иначе. Если у вас есть время, то почитайте Роберта Чалдини, почитайте Джека Траута, почитайте всё, что найдете по психологии, написанное в двадцать первом веке. Перед вами практическое руководство для начинающих и неспециалистов по продвижению игры от начала её разработки до выхода (и даже после). Вы узнаете о том, как позиционировать игру, готовиться к её анонсу, общаться с прессой, закупать рекламу и участвовать в выставках. Поскольку маркетинговая терминология сейчас формируется на основе западных источников, часть терминов и названий в книге не адаптированы, а просто транслитерированы для краткости. Скажем “фичалист” вместо “список ключевых особенностей”, “твиттер”, а не “акаунт в социальной сети Twitter” и “летсплеер” вместо “пользователь, размещающий видеоролики прохождения игр со своими комментариями в видеосервисе Youtube и делающий прямые трансляции на Twitch”. Продвигать игры несложно. Вам всего лишь необходимо понять, кому ваша игра может понравиться (аудитория), что им сказать, чтобы заинтересовать игрой (сообщение), и как это до них донести (канал). Продвижение игр для разных платформ и с разными бизнес-моделями может отличаться инструментами, но общий подход остается одним и тем же: привлечь, увлечь, завлечь. Игры в этом плане выгодно отличаются от других товаров массового потребления тем, что сами по себе вызывают у потребителя эмоции. Вам остается просто найти своего потребителя и направить его эмоции в верное русло.',
          pageCount: 119,
          imageSmall:
            'http://books.google.com/books/content?id=sxMuAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sxMuAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 391,
          amount: 4369,
          authorId: 497,
          categoryId: 37,
          publisherId: 14,
        },
        {
          title: 'Смерть в облаках',
          description:
            'Агата Кристи является самым популярным автором детективов в истории. Ее книги переведены более чем на сто языков, суммарный тираж их превосходит два миллиарда экземпляров',
          pageCount: 254,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 83,
          amount: 1337,
          authorId: 322,
          categoryId: 40,
          publisherId: 47,
        },
        {
          title: 'Куриный бульон для души. Сила «Да». 101 история о смелости пробовать новое',
          description:
            '«Да» – такое короткое слово, но оно обладает огромной силой. Герои этого сборника «Куриного бульона» побороли свой страх, вышли из зоны комфорта, попробовали нечто новое, и это изменило их жизнь к лучшему. Или просто превратилось в яркий незабываемый опыт.Хотите ли вы найти любовь или освоить новую профессию; страдаете от застенчивости или фобии; думаете заняться спортом или завести новые знакомства с интересными людьми; мечтаете совершить путешествие в одиночку или покорить крутые американские горки – на этих страницах вы непременно встретите родственные души и найдете вдохновение.',
          pageCount: 410,
          imageSmall:
            'http://books.google.com/books/content?id=w9ipDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=w9ipDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 314,
          amount: 248.75,
          authorId: 499,
          categoryId: 10,
          publisherId: 26,
        },
        {
          title: 'Стратегемы',
          description:
            'Секст Юлий Фронтин (30–03 гг.) – древнеримский политический деятель, полководец, администратор, ученый и писатель. Тацит называл его «великим мужем», Плиний Младший был в числе его друзей, Марциал упоминал о нем в своих эпиграммах, а для военных историков он был безусловным авторитетом.Труд Фронтина сравним по значению с древним трактатом «Искусство войны», созданным на другом краю Ойкумены великим китайским стратегом и мыслителем Сунь-Цзы.«Стратегемы» представляют собой упорядоченный сборник тактических и психологических приемов, использованных в конкретных случаях древними и современными автору правителями и военачальниками. Причем эти приемы не были обдуманы заранее в ходе стратегического планирования, а были применены из-за внезапно возникших неблагоприятных обстоятельств с целью избежать их или даже обернуть себе на пользу. Недаром второе название книги – «Военные хитрости».В формате a4.pdf сохранен издательский макет книги.',
          pageCount: 253,
          imageSmall:
            'http://books.google.com/books/content?id=JMvMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JMvMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 725,
          amount: 186.25,
          authorId: 500,
          categoryId: 5,
          publisherId: 35,
        },
        {
          title: 'Nachala i kont︠s︡y',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 264,
          imageSmall:
            'http://books.google.com/books/content?id=e48UAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=e48UAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 777,
          amount: 1981,
          authorId: 501,
          categoryId: 117,
          publisherId: 42,
        },
        {
          title: 'Овидий в изгнании',
          description: 'Файл электронной книги подготовлен в Агентстве ФТМ, Лтд., 2013.',
          pageCount: 254,
          imageSmall:
            'http://books.google.com/books/content?id=ifsRAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ifsRAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 761,
          amount: 19,
          authorId: 502,
          categoryId: 1,
          publisherId: 47,
        },
        {
          title: 'Соусы и маринады с любовью',
          description:
            'Соусы и маринады с любовью" от Аси Орловой – это богатый сборник рецептов, которые помогут превратить любое домашнее блюдо в изысканное лакомство для всей семьи. В книге представлены оригинальные и классические рецепты соусов и маринадов, которые придадут блюдам уникальный вкус и аромат. Каждый рецепт сопровождается подробным описанием и инструкциями, что позволит начинающим хозяйкам легко повторить блюдо. Книга будет полезна как опытным поварам, так и тем, кто только начинает заниматься кулинарией. Приобретая эту книгу, вы обязательно найдете рецепт, который понравится вашей семье и друзьям.',
          pageCount: 155,
          imageSmall:
            'http://books.google.com/books/content?id=53y4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=53y4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 16,
          amount: 311.25,
          authorId: 503,
          categoryId: 116,
          publisherId: 11,
        },
        {
          title: 'Шашки. Как выигрывать у сильнейших. Сборник лучших комбинаций и партий',
          description:
            'Мир шашек – загадочный и непредсказуемый, с особой эстетикой черно-белых цветов – он давно вышел за рамки просто спорта и стал своего рода искусством.Этот мир никого не оставляет равнодушным: попробовав хоть раз сыграть в шашки, забыть об этом уже не получится! Но игра в шашки не терпит случайных людей, как нет в ней места и самим случайностям или эмоциям. Каждый ход здесь требует особого внимания и тщательного обдумывания, ведь одна неверная стратегия может стать шагом к поражению. Именно поэтому часто говорят, что игра в шашки – это прежде всего, соревнование стратегий, и не только интеллектуальных, но и личностных.Так как же выигрывать у сильнейших? За счет каких комбинаций можно выстроить грамотную защиту или организовать атаку? Лучший способ оттачивать навыки шашиста – изучать турниры других игроков.Книга «Шашки. Как выигрывать у сильнейших. Сборник лучших комбинаций и партий» адресована, прежде всего, новичкам и любителям, которые только начинают открывать для себя увлекательный мир классических шашек, но также она может быть интересна и людям, уже хорошо знакомым с механикой шашечной игры. Комбинаций в шашках существует огромное количество, из которых автором были отобраны наиболее интересные.Книга подходит как для использования в учебном процессе, так и для самостоятельной работы.',
          pageCount: 98,
          imageSmall:
            'http://books.google.com/books/content?id=FtMBEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FtMBEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 960,
          amount: 248.75,
          authorId: 504,
          categoryId: 120,
          publisherId: 9,
        },
        {
          title: 'Кто по тебе плачет',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 376,
          imageSmall:
            'http://books.google.com/books/content?id=ippqAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ippqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 235,
          amount: 3378,
          authorId: 505,
          categoryId: 121,
          publisherId: 32,
        },
        {
          title: 'Великий раскол',
          description:
            'Звезды горели ярко, и длинный хвост кометы стоял на синеве неба прямо, словно огненная метла, поднятая невидимою рукою. По Москве пошли зловещие слухи. Говорили, что во время собора, в трескучий морозный день, слышен был гром с небеси и земля зашаталась. И оттого стал такой мороз, какого не бывало: с колокольни Ивана Великого метлами сметали замерзших воробьев, голубей и галок; из лесу в Москву забегали волки и забирались в сени, в дома, в церковные сторожки. Все это не к добру, все это за грехи... «Великий раскол» — это роман о трагических событиях XVII столетия. Написанию книги предшествовало кропотливое изучение источников, сопоставление и проверка фактов. Даниил Мордовцев создал яркое полотно, где нет второстепенных героев. Тишайший и благочестивейший царь Алексей Михайлович, народный предводитель Стенька Разин, патриарх Никон, протопоп Аввакум, боярыня Морозова, каждый из них — часть великой русской истории.',
          pageCount: 744,
          imageSmall:
            'http://books.google.com/books/content?id=NlKlBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NlKlBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 739,
          amount: 199,
          authorId: 506,
          categoryId: 1,
          publisherId: 8,
        },
        {
          title: 'Творцы',
          description:
            'Герои стихов и поэм этой книги – реальные люди с конкретным именем и фамилией, и своей неповторимой судьбой, которых объединяет одно важное качество – это творческие люди, творцы. Среди них есть и всемирно известные деятели литературы и искусства, и творческие люди, известные малому кругу друзей и поклонников. Содержание стихов и поэм книги «Творцы» продолжает сквозную тему двух других книг Леонида Юдникова: «Имена на карте» (2013 г.) и «Победители» (2020 г.), в которых отражены судьбы земляков: флотоводцев, путешественников, поэтов, художников и защитников Отечества.',
          pageCount: 833,
          imageSmall:
            'http://books.google.com/books/content?id=cRR-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cRR-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 17,
          amount: 675,
          authorId: 508,
          categoryId: 106,
          publisherId: 36,
        },
        {
          title: 'Кто по тебе плачет',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 376,
          imageSmall:
            'http://books.google.com/books/content?id=ippqAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ippqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: true,
          quantity: 604,
          amount: 2665,
          authorId: 505,
          categoryId: 121,
          publisherId: 23,
        },
        {
          title: 'Великий раскол',
          description:
            'Звезды горели ярко, и длинный хвост кометы стоял на синеве неба прямо, словно огненная метла, поднятая невидимою рукою. По Москве пошли зловещие слухи. Говорили, что во время собора, в трескучий морозный день, слышен был гром с небеси и земля зашаталась. И оттого стал такой мороз, какого не бывало: с колокольни Ивана Великого метлами сметали замерзших воробьев, голубей и галок; из лесу в Москву забегали волки и забирались в сени, в дома, в церковные сторожки. Все это не к добру, все это за грехи... «Великий раскол» — это роман о трагических событиях XVII столетия. Написанию книги предшествовало кропотливое изучение источников, сопоставление и проверка фактов. Даниил Мордовцев создал яркое полотно, где нет второстепенных героев. Тишайший и благочестивейший царь Алексей Михайлович, народный предводитель Стенька Разин, патриарх Никон, протопоп Аввакум, боярыня Морозова, каждый из них — часть великой русской истории.',
          pageCount: 1182,
          imageSmall:
            'http://books.google.com/books/content?id=NlKlBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=NlKlBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 608,
          amount: 199,
          authorId: 506,
          categoryId: 1,
          publisherId: 1,
        },
        {
          title: 'Творцы',
          description:
            'Герои стихов и поэм этой книги – реальные люди с конкретным именем и фамилией, и своей неповторимой судьбой, которых объединяет одно важное качество – это творческие люди, творцы. Среди них есть и всемирно известные деятели литературы и искусства, и творческие люди, известные малому кругу друзей и поклонников. Содержание стихов и поэм книги «Творцы» продолжает сквозную тему двух других книг Леонида Юдникова: «Имена на карте» (2013 г.) и «Победители» (2020 г.), в которых отражены судьбы земляков: флотоводцев, путешественников, поэтов, художников и защитников Отечества.',
          pageCount: 833,
          imageSmall:
            'http://books.google.com/books/content?id=cRR-EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cRR-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 456,
          amount: 675,
          authorId: 508,
          categoryId: 106,
          publisherId: 46,
        },
        {
          title: 'СПИД – крупнейшая фальсификация нашего времени',
          description:
            'Когда медицина прочно коммерциализирована, забота о здоровье уходит на второй план. Фармацевтические компании вместе с Всемирной организацией здравоохранения были неоднократно уличены исследовательскими группами в обмане людей. А теория ВИЧ/СПИДа – вероятно, крупнейший обман на рынке современной медицины. То, что именуют СПИДом (иммунодефицитом) – это симптом (а не болезнь), который может возникнуть под влиянием многих факторов (традиционных болезней, наркотиков, неблагоприятных экологических условий и т. д.), и вирус тут ни при чем. Вирус иммунодефицита человека никогда не был выделен. В этом признались его «первооткрыватели» – Люк Монтанье и Роберт Галло. Как сказал американский биохимик, лауреат Нобелевской премии Кэри Муллис, «Гипотеза ВИЧ-СПИДа – это адская ошибка». И это бизнес на смерти.Книга сформирована из статей интернет-рассылки Ф. Кирсанова, выходящих периодически (соответственно частям книги), поэтому в ней присутствуют отзывы читателей, которые автор получал после выхода каждой статьи.',
          pageCount: 436,
          imageSmall:
            'http://books.google.com/books/content?id=lI8xCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lI8xCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 932,
          amount: 148.75,
          authorId: 509,
          categoryId: 30,
          publisherId: 3,
        },
        {
          title: 'Портрет художника в юности',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 637,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 967,
          amount: 3144,
          authorId: 543,
          categoryId: 8,
          publisherId: 30,
        },
        {
          title: 'Письма. Том III (1936)',
          description:
            'Полное собрание писем выдающегося русского художника, мыслителя, историка, археолога, путешественника и общественного деятеля Николая Константиновича Рериха (1874–1947) из отдела рукописей Международного Центра Рерихов.Н.К.Рерих также известен как автор международного Договора об охране художественных и научных учреждений и исторических памятников (Пакта Рериха).В третий том вошли письма 1936 года, адресованные преимущественно сотрудникам Музея Рериха в Нью-Йорке, а также председателю Латвийского общества Рериха Р.Я.Рудзитису, А.М.Асееву.',
          pageCount: 1076,
          imageSmall:
            'http://books.google.com/books/content?id=VC2wEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=VC2wEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 240,
          amount: 400,
          authorId: 511,
          categoryId: 2,
          publisherId: 32,
        },
        {
          title: 'Восьмое делопроизводство',
          description:
            'Лыков повышен в чине, теперь он статский советник. И стал ненадолго бюрократом: временно руководит Восьмым делопроизводством Департамента полиции. «Восьмерка» – всероссийский сыск, она координирует действия всех сыскных отделений империи. Но бюрократ из Лыкова не получается: кабинетная работа не для него. По счастью, Столыпин нашел Алексею Николаевичу лучшее применение. Премьер-министр обеспокоен участившимися экспроприациями в Петербурге и Москве. Гибнут люди, налетчики похищают крупные денежные суммы. Полиция не может найти преступников. И Лыкову поручают ликвидировать банды экспроприаторов в двух столицах. Создана временная группа дознавателей под его командой, с особыми полномочиями. Статский советник выходит на охоту...',
          pageCount: 279,
          imageSmall:
            'http://books.google.com/books/content?id=YVrTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=YVrTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 498,
          amount: 486.25,
          authorId: 513,
          categoryId: 1,
          publisherId: 18,
        },
        {
          title: 'Открытая организация',
          description:
            'Джим Уайтхёрст – президент и генеральный директор Red Hat, крупнейшей в мире корпорации, выпускающей программное обеспечение с открытым исходным кодом, – делится секретами управления высокоэффективной компанией нового типа – «открытой организацией». Эта принципиально новая модель большой компании достойно отвечает экономическим и технологическим вызовам XXI века. Открытая организация характеризуется крепкими горизонтальными связями и вовлеченностью сотрудников в идеологию и судьбу сообщества, к которому они принадлежат. Принципы меритократии предполагают участие персонала во всем круге вопросов, стоящих на повестке дня: разработка миссии, необходимость сплоченной реакции на кризисы, обсуждение целесообразности нового продукта... Автор подробно объясняет, каким образом структура открытой организации помогает развиваться талантам на разных должностях и культивирует в людях лояльность компании и энтузиазм, благодаря которым они способны свернуть горы. Книга будет интересна собственникам и руководителям бизнеса, а также государственным служащим на руководящих должностях.',
          pageCount: 435,
          imageSmall:
            'http://books.google.com/books/content?id=Nu2cDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Nu2cDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 753,
          amount: 836.25,
          authorId: 514,
          categoryId: 10,
          publisherId: 34,
        },
        {
          title: 'Рок-н-ролл под Кремлем',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 413,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 668,
          amount: 2046,
          authorId: 515,
          categoryId: 122,
          publisherId: 32,
        },
        {
          title: 'Новая и Новейшая история',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 557,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 870,
          amount: 2349,
          authorId: 594,
          categoryId: 120,
          publisherId: 40,
        },
        {
          title: 'Легенды и мифы Древней Греции и Древнего Рима',
          description:
            '«Легенды и мифы Древней Греции» в изложении знаменитого исследователя античности Н.А. Куна уже давно стали классикой, без которой трудно представить себе детство или юность образованного человека.Данное издание подарит вам уникальную возможность познакомиться с работами Н.А. Куна в том виде, в каком они вышли в свет в 1914 г. «для учениц и учеников старших классов средних учебных заведений, а также для всех тех, кто интересуется мифологией греков и римлян». Под своим первоначальным названием «Что рассказывали греки и римляне о своих богах и героях» оно издавалось в 1922 г. и 1937 г. В 1940 г. Н.А. Кун, подписывая сигнальный вариант третьего издания книги, изменил название на «Легенды и мифы Древней Греции».В книгу вошли мифы о богах, героях и аргонавтах, Илиада и Одиссея, мифы об Агамемноне и Оресте и Фиванский цикл мифов.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 853,
          imageSmall:
            'http://books.google.com/books/content?id=sLV8DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=sLV8DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 780,
          amount: 561.25,
          authorId: 467,
          categoryId: 1,
          publisherId: 22,
        },
        {
          title: 'Жизнь после цели, Или как достигнуть успеха, вкладываясь в действия, а не в результат',
          description:
            'Думаете, жизнь – это гонка за успехом? Так считают многие. Так считал и Мейер Фельдберг, пока однажды не упустил из рук мировой рекорд по плаванию. Будучи слишком сосредоточенным на цели, Мейер не рассчитал силы и потерпел поражение.Эта история легла в основу его системы принципов, следуя которым неизменно добиваешься задуманного. Так, завершив спортивную карьеру, автор книги стал профессором и почетным деканом Колумбийской школы бизнеса, старшим советником отдела инвестиционного банкинга Morgan Stanley. Его окружают верные и влиятельные друзья, а брак длится более 50 лет.Формула успеха профессора Фельдберга проста: – за неудачей следует удача, – за ней – здравое решение, – затем снова удача, – за которой следует еще более здравое решение.Эту формулу он применял к любой задаче и опирался на нее в отношениях с окружающими, о чем рассказывает в своей книге. Он предлагает читателю 18 принципов, используя которые можно выйти победителем из любой гонки.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 131,
          imageSmall:
            'http://books.google.com/books/content?id=cpREEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cpREEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 5,
          amount: 448.75,
          authorId: 517,
          categoryId: 16,
          publisherId: 45,
        },
        {
          title: 'Сказки народов мира',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 972,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 756,
          amount: 4621,
          authorId: 463,
          categoryId: 24,
          publisherId: 6,
        },
        {
          title: 'Лучшие стихи',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 371,
          imageSmall:
            'http://books.google.com/books/content?id=aelDzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=aelDzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 981,
          amount: 3286,
          authorId: 306,
          categoryId: 102,
          publisherId: 41,
        },
        {
          title: 'Старый год',
          description:
            'Замечательного писателя и человека Игоря Всеволодовича Можейко (1934–2003) мы знаем, в первую очередь, как Кира Булычева, автора рассказов об Алисе Селезневой. Всего же опубликованных произведений Булычева насчитывается несколько сотен – многие из них входят в серии (автор часто возвращался к любимым персонажам), но достаточное количество очень интересных книг нельзя отнести ни к одной из них. Это повести "Журавль в руках", "Похищение чародея", "Поминальник XX века", "Чужая память" и многие другие. Наиболее известные циклы рассказов: "Великий Гусляр", "Доктор Павлыш", "Институт экспертизы", "Театр теней", "Река Хронос", "Галактическая полиция" и др.',
          pageCount: 329,
          imageSmall:
            'http://books.google.com/books/content?id=gfIIAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=gfIIAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 589,
          amount: 55,
          authorId: 519,
          categoryId: 1,
          publisherId: 9,
        },
        {
          title: 'Левиафан',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 264,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 103,
          amount: 3187,
          authorId: 510,
          categoryId: 54,
          publisherId: 6,
        },
        {
          title: 'Тайный язык симптомов',
          description:
            'Традиция, культура и философская мысль внушили нам представление о том, что разум и тело – это две отдельные и разделенные сущности. Лишь в сравнительно недавнее время представление о том, что разум и тело взаимосвязаны и взаимозависимы, вновь обрело популярность, способствуя развитию современных воззрений на природу болезней и такой научной дисциплины, как PNEI (ПНИ) или психонейроиммунологии. В ходе работы психологом, Марко Пакори отметил для себя один очень важный момент: все люди, которые приходили к нему с психологическими проблемами, часто также жаловались и на телесные расстройства. Автор изучил, почему улучшения или ухудшения эмоционального и физического состояния происходят параллельно друг с другом, а труды медиков, остеопатов, специалистов по акупунктуре, врачей-иридологов и т.д. помогли охватить проблематику работы во всей ее полноте и сложности.',
          pageCount: 832,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 18,
          amount: 2278,
          authorId: 543,
          categoryId: 125,
          publisherId: 7,
        },
        {
          title: 'Azazel',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 266,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 600,
          amount: 1452,
          authorId: 424,
          categoryId: 88,
          publisherId: 25,
        },
        {
          title: '50 отборных карточных фокусов',
          description:
            'Автор книги открывает людям, не знакомым с карточными фокусами, те навыки и приемы, которые позволят им самостоятельно развлекать публику на дружеской вечеринке. Здесь вы найдете фокусы, которые не требуют никаких специальных навыков; фокусы, для которых нужен несложный реквизит, например носовой платок или ручка с бумагой; а также фокусы более сложные, подразумевающие такие приемы, как ложная тасовка, сдвиг, двойной подъем или карта, спрятанная в ладони. Книга предназначена для широкого круга читателей.',
          pageCount: 229,
          imageSmall:
            'http://books.google.com/books/content?id=ftNTquE8iPAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ftNTquE8iPAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 806,
          amount: 173.75,
          authorId: 520,
          categoryId: 11,
          publisherId: 18,
        },
        {
          title: 'Император и молот',
          description:
            'В своей жизни Шеф Сигвардссон – король Севера, носил и рабский ошейник, и королевскую корону, и амулет богов. Многие священные реликвии, побывав в его руках и выполнив свою миссию, обрели настоящих хозяев. Всем, что знал и умел, он щедро поделился со своими подданными. И последнее, что он должен для них сделать, – это привести их под стены Рима и бросить в смертельную битву, кровавей которой еще не видел мир.',
          pageCount: 303,
          imageSmall:
            'http://books.google.com/books/content?id=CbieAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=CbieAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 986,
          amount: 1454,
          authorId: 521,
          categoryId: 1,
          publisherId: 26,
        },
        {
          title: 'Колдовской мир',
          description:
            'Перу американской писательницы Андрэ Нортон, «великой леди фантастики» XX столетия, принадлежит более 130 книг. Критики, увы, не спешили поддержать ее, а сама она была слишком скромным человеком, чтобы пробивать себе дорогу к пьедесталу. Тем не менее талант ее сиял так ярко, что не остался незамеченным. В нашей стране имя писательницы стало известно после выхода романа «Саргассы в космосе», блистательно переведенного Аркадием и Борисом Стругацкими. А в 1963 году в США вышла книга под названием «Колдовской мир» — так был создан один из известнейших фэнтези-миров в истории жанра. Полковник в отставке Саймон Трегарт, спасаясь от преследования, попадает в параллельный волшебный мир — и в водоворот самых неожиданных приключений. Жизнь в Эсткарпе полна магии, интриг и опасностей, но талантам Трегарта и здесь находится применение...',
          pageCount: 1124,
          imageSmall:
            'http://books.google.com/books/content?id=MHEqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MHEqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 592,
          amount: 413,
          authorId: 523,
          categoryId: 1,
          publisherId: 39,
        },
        {
          title: 'ESHELON NA SAMARKAND.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1033,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 553,
          amount: 4533,
          authorId: 17,
          categoryId: 115,
          publisherId: 43,
        },
        {
          title: 'Человек',
          description:
            'Из книги вы узнаете, почему обезьяна на становится человеком? Какими секретами обладают железы внутренней секреции? Почему генетика не клонируют гениев? и многое другое',
          pageCount: 254,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 893,
          amount: 4156,
          authorId: 524,
          categoryId: 124,
          publisherId: 29,
        },
        {
          title: 'Хвостатым здесь не место!',
          description:
            'Когда муж погиб, а свекровь отняла квартиру, у Кристины остался лишь один выход – отправиться с новорожденной дочерью на окраину города, в маленький дом, предназначенный под снос. Неожиданно в ее жизнь вмешивается богатый сосед. Стоит ли принимать помощь незнакомого мужчины? Что он потребует взамен? И как быть с тем, что из штанов у него торчит... длиннющий хвост?! Еще одна книга по этому миру, в которой встречаются герои «Хвоста»: Крылатым не входить Так же не пропустите мою новую книгу в том же жанре: Рогатый папа!',
          pageCount: 292,
          imageSmall:
            'http://books.google.com/books/content?id=PIl6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PIl6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 647,
          amount: 198.75,
          authorId: 525,
          categoryId: 1,
          publisherId: 20,
        },
        {
          title: 'С неврозом по жизни',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 288,
          imageSmall:
            'http://books.google.com/books/content?id=l38A5oOLQ6MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=l38A5oOLQ6MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 893,
          amount: 616,
          authorId: 526,
          categoryId: 114,
          publisherId: 43,
        },
        {
          title: 'Цвет и ваше здоровье',
          description:
            'Наше самочувствие – и эмоциональное, и физическое – во многом зависит от окружающих нас цветов в интерьере и одежде. Информация о том, какие цвета нам нравятся, а какие нет, может рассказать о состоянии нашего здоровья и о наших болезнях, а продукты определенного цвета способны влиять на разные типы людей по-разному. Елена Егорова – автор книги – долго собирала данные о воздействии цвета на наше здоровье и в результате разработала несколько поразительно простых и вместе с тем эффективных методик лечения цветом. В своей книге она рассказывает о том, как познать себя через цвет; как похудеть, употребляя продукты определенного цвета; как излечить тяжелые заболевания цветными минералами; как заряжать воду энергией цвета; как выполнять цветомедитации, и т. д. Автор напоминает нам, что цвет – это самое доступное «лекарство» в нашей домашней аптечке. И мы всегда можем «брать» тот, который необходим нам для восстановления душевного равновесия и здоровья в данный момент.',
          pageCount: 158,
          imageSmall:
            'http://books.google.com/books/content?id=Yl0kDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Yl0kDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 162,
          amount: 2433,
          authorId: 527,
          categoryId: 43,
          publisherId: 35,
        },
        {
          title: 'Дюна. Графический роман. Том 1',
          description:
            'Дюна – эпический научно-фантастический шедевр Фрэнка Герберта, действие которого происходит в далёком будущем в разросшемся межзвёздном феодальном обществе. Роман повествует о Поле Атрейдесе и его семье, принимающей правление пустынной планетой Арракис. Потрясающая смесь приключений и мистики, экологизма и политики, «Дюна» – это мощная фантастическая история, беспрецедентный взгляд на наш собственный мир, теперь в формате графического романа, созданного Брайаном Гербертом и Кевином Дж. Андерсоном. В нём сохраняется целостность оригинального произведения, а великолепные иллюстрации Рауля Аллена и Патриции Мартин вместе с обложкой Билла Сенкевича оживляют книгу для нового поколения читателей.',
          pageCount: 182,
          imageSmall:
            'http://books.google.com/books/content?id=37TREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=37TREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 784,
          amount: 561.25,
          authorId: 528,
          categoryId: 1,
          publisherId: 1,
        },
        {
          title: 'Anna Karênina',
          description:
            'Anna Karêrina é uma mulher inteligente e bela da aristocracia da Rússia czarista que permeia círculos importantes de São Petersburgo, onde seu marido é um respeitado servidor público. O casamento de seu irmão entra em crise quando uma traição vem à tona e Anna intercede para que essa instituição não vá a falência, porém se questiona a respeito de sua própria felicidade e matrimônio quando uma paixão ameaça surgir. Crises familiares entre bailes da nobreza ilustram a alta sociedade russa neste romance clássico.',
          pageCount: 411,
          imageSmall:
            'http://books.google.com/books/content?id=p6UCEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=p6UCEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 223,
          amount: 179,
          authorId: 531,
          categoryId: 1,
          publisherId: 47,
        },
        {
          title: 'Юмор. Стендап. Психология сцены',
          description:
            'Долгожданное пособие для начинающих!Отличный подарок твоему болтливому другу!Как писать Стендап?Как сделать первые шаги?Почему Стендап так популярен?Кто пишет шутки для Стендапа и для телешоу?Как вообще писать шутки и юмор?Как готовиться к выступлениям, работать с аудиторией и набирать фанатскую базу?В этой книге о Стендапе от российского Стендап комика, который начинал со всеми будущими звёздами Вы найдете множество научных наблюдений о психотерапевтическом эффекте этого комедийного жанра.Как писать стендап, как делать из своих наблюдений юмор, можно ли научиться шутить и как развить чувство юмора.В этой книге собраны конкретные инструменты для построения своей стендап карьеры, ответы на популярные вопросы о юморе и нюансы психологии артистов.Загляни в описание и начни читать бесплатно.',
          pageCount: 183,
          imageSmall:
            'http://books.google.com/books/content?id=vfJeEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=vfJeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 301,
          amount: 548.75,
          authorId: 532,
          categoryId: 6,
          publisherId: 22,
        },
        {
          title: 'Revizor',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 968,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 654,
          amount: 2017,
          authorId: 275,
          categoryId: 80,
          publisherId: 26,
        },
        {
          title: 'Взламывая прогресс',
          description:
            'В этой книге Том Джексон собрал самые значимые для человечества изобретения в хронологическом порядке – от первого костра и инструментов для охоты до холодильника, смартфона и умного дома. Вы узнаете благодаря каким, казалось бы, примитивным технологиям мы смогли прийти к нашей нынешней информационной эпохе.В формате PDF A4 сохранен издательский макет книги.',
          pageCount: 493,
          imageSmall:
            'http://books.google.com/books/content?id=GkH0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=GkH0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 833,
          amount: 436.25,
          authorId: 533,
          categoryId: 15,
          publisherId: 38,
        },
        {
          title: 'Звуки с, з, ц, ш, ж',
          description:
            'В книге описаны методы постановки звуков с, з ,ш, ж, ц. Также книга содержит речевой материал по автоматизации и дифференциации в словах и текстах. Тексы представлены для чтения по слогам с описанием времен года.',
          pageCount: 26,
          imageSmall:
            'http://books.google.com/books/content?id=JyTXDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=JyTXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 999,
          amount: 373.75,
          authorId: 534,
          categoryId: 14,
          publisherId: 12,
        },
        {
          title: 'Оружие и военная техника, изменившие ход Великой Отечественной войны',
          description:
            'Техническая оснащенность армий сыграла важную роль в исходе Великой Отечественной войны, которую не зря окрестили «войной моторов». Данное издание знакомит с различными видами вооружений, которые использовались в боях по обе стороны фронта. История создания советскими инженерами новейших танков, самолетов, стрелкового оружия и артиллерии, их выпуск на тыловых оружейных заводах и применение в бою – все это как нельзя лучше иллюстрирует обновление Красной армии на пути к Великой Победе. С оружием и боевой техникой военных лет можно познакомиться на страницах книги по схемам, таблицам, тактико-техническим характеристикам и благодаря другой справочной информации. Здесь содержатся сведения о роли оружия и военной техники в сражениях, которые повлияли на ход Великой Отечественной войны и всей мировой истории.Для среднего и старшего школьного возраста.',
          pageCount: 194,
          imageSmall:
            'http://books.google.com/books/content?id=PNQUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=PNQUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 466,
          amount: 4084,
          authorId: 425,
          categoryId: 5,
          publisherId: 3,
        },
        {
          title: 'Побег из сказки',
          description:
            'Когда серые будни вдруг оборачиваются феерическими приключениями, а жизнь превращается в сказку, не спешите ликовать. Вполне возможно, что уже через пару дней вам захочется из нее сбежать. Вот только выбраться из сказки куда сложнее, чем в нее попасть. Да и знания, почерпнутые из книг, оказываются совершенно бесполезны. Приходится рассчитывать только на свои силы и проявлять чудеса сообразительности. Провести танцевальный мастер-класс для русалок? Нет проблем! Отпиарить продукцию сумасшедшей травницы? Легко! Побывать анти-Золушкой? Предупреждать надо! А все из-за своевольной выпускницы Школы магии, сбежавшей со стажировки в средневековом королевстве и по неосторожности отправившей нашу современницу на свое место. Ах, начинающей волшебнице сейчас тоже несладко приходится? Ну и поделом ей! Будет знать, что с волшебством шутки плохи, а со сказками – тем более.',
          pageCount: 466,
          imageSmall:
            'http://books.google.com/books/content?id=T23Q79gX5jMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=T23Q79gX5jMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 89,
          amount: 68.73,
          authorId: 535,
          categoryId: 1,
          publisherId: 28,
        },
        {
          title: 'Свобода',
          description:
            'В поисках истины. Динамическая 3d-расшифровка.В этой книге каждый найдёт нечто ценное и полезное для себя. Краткость – сестра таланта. Концентрат мысли. Просто добавь воды. Книги «Разномыслия» позволяют выиграть время. «Разномыслие» – путеводитель растерянных. Истина где-то рядом. Истина делает нас сильнее.Книга представляет собой ЛЕГО-конструктор «ДНК мысли». У вас есть проблема или вопрос, в процессе чтения, складывая детали, вы найдёте ответ и осознаете, что вам делать.',
          pageCount: 313,
          imageSmall:
            'http://books.google.com/books/content?id=2Du1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=2Du1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 475,
          amount: 2261,
          authorId: 537,
          categoryId: 117,
          publisherId: 33,
        },
        {
          title: 'А я тебя «нет». Как не бояться отказов и идти напролом к своей цели',
          description:
            'Чтобы добиться успеха, необходимо побороть страх перед отказом.Огромное количество гениальных идей и стоящих решений умирает только потому, что их не решились озвучить. Страх быть отвергнутым, боязнь насмешки, нерешительность – всё это останавливает тех, кто мог бы создать что-то уникальное.Джиа Джианг, предприниматель и один из самых популярных спикеров TED, провел эксперимент. В течение 100 дней он сознательно добивался отказов, обращаясь к незнакомцам с нелепыми просьбами. Каково же было его удивление, когда, вопреки ожиданиям, люди соглашались выполнять самые безбашенные из них!Эта книга о том, как победить страх отказов и стать неуязвимым, как превратить «нет» в «да» и обрести уверенность в себе. Увлекательное и вдумчивое исследование, которое поможет вам осмелиться жить.В формате a4.pdf сохранен издательский макет.',
          pageCount: 240,
          imageSmall:
            'http://books.google.com/books/content?id=lwBPDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=lwBPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 992,
          amount: 511.25,
          authorId: 538,
          categoryId: 16,
          publisherId: 28,
        },
        {
          title: 'Анастасия. Дело для нежной барышни',
          description:
            'Анастасия Волконская – эксперт-оперативник Следственного Департамента, нежная барышня с таинственным прошлым, неясным будущим и множеством загадок в настоящем. В их разгадывании и заключается работа Анастасии. Но загадка загадке рознь. Сумеет ли госпожа эксперт решить ребус по имени князь Даниил Северов, советник-посланник соседнего государства? Или это он разгадает тайны Анастасии, заставив сделать выбор между привычным прошлым и полным неожиданности будущим?',
          pageCount: 385,
          imageSmall:
            'http://books.google.com/books/content?id=fnTKBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=fnTKBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 308,
          amount: 1291,
          authorId: 539,
          categoryId: 1,
          publisherId: 1,
        },
        {
          title: 'Изнанка',
          description:
            'Удаленные деревеньки хранят такие тайны, услышав о которых, люди замирают в молчаливом страхе, а волосы на их затылках встают дыбом от необъяснимой жути.В одну из таких деревень Артем ехал на машине по семейным делам. Местных предостережений он не знал, а, как истинное дитя города, на слухи махал рукой. Кто станет обращать внимание на средневековые бредни необразованных деревенщин?Но иногда легче поверить, чем понять. Потому что от этого зависит не только его жизнь, но и судьба целой деревни.',
          pageCount: 225,
          imageSmall:
            'http://books.google.com/books/content?id=AwYCEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=AwYCEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 686,
          amount: 311.25,
          authorId: 540,
          categoryId: 1,
          publisherId: 4,
        },
        {
          title: 'Театр мистера Фэйса',
          description:
            'Здесь театральной сценой служит весь Лос-Анджелес, а режиссером выступает мистер Фэйс – циничный киллер. Его театр гениален по сути, кровав по исполнению и основан на философии гипербореев. Перформансы мучительной смерти, немотивированных убийств и кровавого распутства – все это театр мистера Фэйса...',
          pageCount: 322,
          imageSmall:
            'http://books.google.com/books/content?id=nUNhAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nUNhAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 283,
          amount: 1581,
          authorId: 541,
          categoryId: 1,
          publisherId: 26,
        },
        {
          title: 'Слова о воспитании детей',
          description:
            'Старец Порфирий Кавсокаливит (1906–1991) – один из самых почитаемых старцев Святой горы Афон. Многие родители обращались за помощью к старцу, не в силах преодолеть непослушание, своеволие или несчастья своих детей. И всегда опыт во Христе и мудрость святого старца делали его советы не только бесценным духовным сокровищем, но и практическим руководством в таком тонком и жизненно важном вопросе, как воспитание детей.',
          pageCount: 36,
          imageSmall:
            'http://books.google.com/books/content?id=ZmuDBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ZmuDBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 110,
          amount: 56.18,
          authorId: 542,
          categoryId: 14,
          publisherId: 43,
        },
        {
          title: 'Святая ведьма',
          description:
            'Колдовской мир раздавлен тяжелым сапогом Святой Инквизиции. Красивым ведьмам предложен выбор – согреть постель инквизитора или сгореть на костре. Людмила выбрала первое. Но девушкой движет не только желание выжить – жажда мести сжигает сильнее очищающего огня.Шепотом передается древнее предсказание о Святой ведьме, в чьих силах бросить вызов инквизиции и изменить существующий порядок. Но если женщина встретит истинную любовь, то изменение грозит привести к непредсказуемым последствиям. И по всем срокам – она должна вот-вот появиться...',
          pageCount: 304,
          imageSmall:
            'http://books.google.com/books/content?id=wswUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=wswUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 202,
          amount: 173.75,
          authorId: 271,
          categoryId: 1,
          publisherId: 40,
        },
        {
          title: 'Дважды рождённые',
          description:
            'Герой книги – молодой мужчина по имени Игорь всю свою жизнь прожил в мире, который был бы мечтой многих людей нашего времени. Замечательные друзья, абсолютный комфорт, увлекательная и неутомительная работа. Совершенно случайно в его жизнь вошёл необычный персонаж, который перепутал все его устоявшиеся представления о жизни и о мечте.Эта книга написана для читателя, который ищет удовольствия в самом процессе прочтения книги. Книга наполнена фантазией и иллюзией, ритмом действия и мечтами, ненавязчивой философией и романтикой.',
          pageCount: 389,
          imageSmall:
            'http://books.google.com/books/content?id=jgBiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=jgBiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 402,
          amount: 3540,
          authorId: 493,
          categoryId: 1,
          publisherId: 41,
        },
        {
          title: 'Танец со зверем. Первая книга из серии «Дьявольские сети»',
          description:
            'Я трусиха. Мне двадцать четыре года, у меня две работы, полное отсутствие личной жизни, больной отец на моей шее и брат, которому на всё насрать. Жизнь удалась.Думала ли я когда-нибудь, что угожу в лапы Босса одного из мафиозных кланов? Конечно нет. Он не отпустит меня. Я ему понравилась. И не только ему. Другой... он ещё хуже своего Босса. Все они здесь озабоченные психи.Но я выживу, чего бы мне это ни стоило. Приму их правила игры, войду в доверие... и нанесу удар. Книга содержит нецензурную брань.',
          pageCount: 352,
          imageSmall:
            'http://books.google.com/books/content?id=YLYUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=YLYUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 625,
          amount: 1553,
          authorId: 412,
          categoryId: 1,
          publisherId: 10,
        },
        {
          title: 'Цифровые анализаторы спектра, сигналов и логики',
          description:
            'Впервые в отечественной литературе дается описание цифровых анализаторов спектра, сигналов (в том числе близких к монохромным и телекоммуникационных), цепей и логических состояний цифровых устройств. Особое внимание уделено анализаторам спектров и сигналов реального времени. Описаны как стационарные, так и переносные приборы с питанием от аккумуляторных батарей, а также приборы-приставки к персональному компьютеру. Книга содержит наиболее полный обзор приборов этих классов на российском рынке. Приведены многочисленные примеры реальной работы с приборами. Для инженеров, научных работников, преподавателей аспирантов и студентов вузов и университетов технического профиля.',
          pageCount: 647,
          imageSmall:
            'http://books.google.com/books/content?id=RM7kDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=RM7kDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 322,
          amount: 437.5,
          authorId: 564,
          categoryId: 53,
          publisherId: 22,
        },
        {
          title: 'Рок-н-ролл под Кремлем',
          description:
            'Здесь и взятые из реальной жизни события, и хитроумная интрига, и головокружительные сюжетные хитросплетения, и неожиданные развязки. Для всех любителей детективного жанра',
          pageCount: 381,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 603,
          amount: 1271,
          authorId: 515,
          categoryId: 40,
          publisherId: 17,
        },
        {
          title: 'Последняя Дверь',
          description:
            'Год 4461. В 2312 году случилась ядерная война, катастрофически повлиявшая на облик планеты и людей, её населявших. Действие происходит в гигантском многоуровневом комплексе Этажи. Комплекс состоит из Секций, в которых всё, что нужно его обитателям: дом, учёба, работа, еда, досуг. Всё соединено между собой Дверями, создание и обслуживание которых – основная задача жителей Этажей. Главному герою, Джейсу, предстоит открыть их все, чтобы получить ответы на самые важные вопросы: что такое Этажи? Кто такой Император? Кем населён комплекс? И почему не каждый может открыть ту самую, последнюю Дверь?',
          pageCount: 186,
          imageSmall:
            'http://books.google.com/books/content?id=OKUVEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OKUVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 892,
          amount: 1536,
          authorId: 255,
          categoryId: 39,
          publisherId: 22,
        },
        {
          title: 'Revizor',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 616,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 549,
          amount: 3786,
          authorId: 468,
          categoryId: 125,
          publisherId: 39,
        },
        {
          title: 'ВИТЧ',
          description:
            'Всеволод Бенигсен – один из самых ярких писателей нового поколения, автор романов «ГенАцид» (лонг-листы премий «Русский Букер», «Большая книга») и «Раяд» (шорт-лист премии «Нос»).Герой романа «ВИТЧ» журналист Максим Терещенко в конце девяностых возвращается в Россию после эмиграции и пытается «ухватить» изменчивую реальность современной России. Неожиданно ему поступает «заказ» – написать книгу о малоизвестных писателях-диссидентах семидесятых.Воодушевленный возможностью рассказать о забытых ныне друзьях, герой рьяно берется за дело. Но все персонажи его будущей книги таинственно исчезли, словно и не существовали вовсе. Поиски их приводят к неожиданному результату.',
          pageCount: 345,
          imageSmall:
            'http://books.google.com/books/content?id=3VpGwxcQrE0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=3VpGwxcQrE0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 418,
          amount: 2475,
          authorId: 546,
          categoryId: 1,
          publisherId: 42,
        },
        {
          title: 'Русский язык с енотами-полиглотами',
          description:
            'Хочется писать грамотно, но нет времени и желания перечитывать учебники? С забавными енотами-полиглотами правила превращаются в увлекательные приключения, время на которые появляется из ниоткуда как по волшебству!Анна Беловицкая, педагог и иллюстратор, автор проекта «Русский язык в котах» и серии книг «Грамотные коты», представляет не менее грамотных енотов, которые помогут легко и весело вспомнить позабытые правила русского языка.',
          pageCount: 162,
          imageSmall:
            'http://books.google.com/books/content?id=V8cUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=V8cUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 145,
          amount: 373.75,
          authorId: 547,
          categoryId: 33,
          publisherId: 23,
        },
        {
          title: 'Все прелести замужества',
          description:
            'Журналистка Юлия Бронникова получила дивный подарок – бесплатный купон в косметический салон «Будуар» на процедуру, о которой даже мечтать не могла, так дорого та стоила! Но именно с этого момента началась череда загадочных, а порой просто пугающих событий. Юлии, обычной рядовой сотруднице «Уральской звезды», поступает странное предложение участвовать в компании по выбору нового мэра, и деньги обещают нешуточные! Конечно, это заманчиво, но только теперь Юлию преследует незнакомый мужчина в чёрном плаще, в квартире неизвестно откуда возникают новые вещи и сама собой двигается мебель. А самое главное, у неё появились необъяснимые провалы в памяти...',
          pageCount: 347,
          imageSmall:
            'http://books.google.com/books/content?id=F3t0QEbS-x8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=F3t0QEbS-x8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 113,
          amount: 236.25,
          authorId: 548,
          categoryId: 1,
          publisherId: 7,
        },
        {
          title: 'Отрывки из обрывков',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 207,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 839,
          amount: 2528,
          authorId: 339,
          categoryId: 127,
          publisherId: 35,
        },
        {
          title: 'Семейное счастье',
          description: 'Читайте лучшие книги Андрея Курпатова в серии "Бестселлер"',
          pageCount: 253,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 242,
          amount: 1468,
          authorId: 526,
          categoryId: 30,
          publisherId: 15,
        },
        {
          title: 'Закодированная Россия',
          description:
            'Эта история могла произойти только в одной стране – России. Однажды врач-нарколог решил сделать доброе дело (а заодно, и заработать денег) и с помощью методики «25-й кадр» закодировал целую страну. И вся Россия вмиг протрезвела...',
          pageCount: 380,
          imageSmall:
            'http://books.google.com/books/content?id=8UeKAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=8UeKAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 367,
          amount: 68.73,
          authorId: 550,
          categoryId: 30,
          publisherId: 46,
        },
        {
          title: 'The Irony Tower. Советские художники во времена гласности',
          description:
            'История неофициального русского искусства последней четверти XX века, рассказанная очевидцем событий. Приехав с журналистским заданием на первый аукцион «Сотбис» в СССР в 1988 году, Эндрю Соломон, не зная ни русского языка, ни особенностей позднесоветской жизни, оказывается сначала в сквоте в Фурман-ном переулке, а затем в гуще художественной жизни двух столиц: нелегальные вернисажи в мастерских и на пустырях, запрещенные концерты групп «Среднерусская возвышенность» и «Кино», «поездки за город» Андрея Монастырского и первые выставки отечественных звезд арт-андеграунда на Западе, круг Ильи Кабакова и «Новые художники». Как добросовестный исследователь, Соломон пытается описать и объяснить зашифрованное для внешнего взгляда советское неофициальное искусство, попутно рассказывая увлекательную историю культурного взрыва эпохи перестройки и описывая людей, оказавшихся в его эпицентре.',
          pageCount: 563,
          imageSmall:
            'http://books.google.com/books/content?id=1RYjAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1RYjAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 466,
          amount: 1829,
          authorId: 551,
          categoryId: 2,
          publisherId: 26,
        },
        {
          title: 'Как соблазнить герцога',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 239,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 141,
          amount: 2897,
          authorId: 552,
          categoryId: 95,
          publisherId: 29,
        },
        {
          title: 'Боги богов',
          description:
            'Андрей Рубанов – прозаик, журналист. Автор романов «Йод», «Жизнь удалась», «Психодел» и фантастических «Хлорофилия» и «Живая земля». Настоящее в его книгах всегда актуально и жестко, а будущее так похоже на правду...Угонщик космических кораблей Марат и старый вор Жилец чудом попадают на далекую Золотую Планету. Здесь нельзя замерзнуть или умереть от голода; все пахнет ванилью и карамелью, и даже соль – сладкая. Это земля обетованная!Жилец мечтал о ней долгие годы, но теперь не может даже ступить на нее... В прежней жизни Марат не захотел быть вторым пилотом, а на Золотой планете должен стать первым диктатором... Вернуться нельзя, помощи ждать неоткуда. Обитатели сладкого мира не рады незваным гостям. Борьба за жизнь превращается сначала в драму, а затем в запутанный фарс.«Боги богов» – книга о том, как создаются цивилизации и как творится миф. О том, как обычный человек может стать божеством. Это не пособие для богов, а история выживания на затерянной планете.',
          pageCount: 550,
          imageSmall:
            'http://books.google.com/books/content?id=Qeq7AAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=Qeq7AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 676,
          amount: 2856,
          authorId: 553,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Энергия — новая валюта: Как поддерживать баланс жизненных сил',
          description:
            'Жизненная энергия человека — валюта нашего времени. У кого ее больше, тот успевает больше сделать, заряжен позитивом и хорошим настроением, притягивает к себе людей и интересные проекты. Все хотят иметь больше энергии, быть в потоке, который не иссякает. Леонид Кроль — профессор Высшей школы экономики с 25-летним опытом работы коучем и бизнес-тренером, директор Института групповой и семейной психологии и психотерапии — рассказывает о проблемах с энергией, а также показывает, как управлять ею, используя то, что заложено природой в конкретном человеке. В каждой главе — кейсы из реальной практики, фрагменты коучинговых бесед, а в конце книги — приложение с 12 энергетическими профилями, которые помогут вам узнать о себе много полезного и правильно начать работу по балансировке жизненных сил.',
          pageCount: 106,
          imageSmall:
            'http://books.google.com/books/content?id=H7PnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=H7PnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 173,
          amount: 499,
          authorId: 555,
          categoryId: 10,
          publisherId: 18,
        },
        {
          title: 'Первые уроки грамоты в стихах и картинках',
          description:
            'Книга поможет малышу в занимательной форме познакомиться со звуками речи, чтобы в дальнейшем легко овладеть чтением и письмом, расширить словарный запас и кругозор, запомнить все буквы алфавита и научиться изображать их графически.Для успешного обучения в школе ребенку необходимо обладать устойчивым зрительным и слуховым вниманием, памятью, достаточно развитым мышлением. Эта книга с помощью игровых заданий поможет ему не только основательно подготовиться к поступлению в школу, но и понять, что учиться, открывать новое – это очень интересно.',
          pageCount: 865,
          imageSmall:
            'http://books.google.com/books/content?id=tRptDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=tRptDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 968,
          amount: 223.75,
          authorId: 556,
          categoryId: 92,
          publisherId: 39,
        },
        {
          title: 'Денискины рассказы',
          description:
            '«Денискины рассказы» написал Виктор Юзефович Драгунский. Отчасти прототипом его героя Дениски Кораблева стал сын Денис. Активный, но при этом нежный и наблюдательный ребёнок живёт в весёлом, доброжелательном мире, но при этом уже сталкивается с несправедливостью, нечестностью взрослых. Но и сам проказничает, а иногда просто теряется и попадает из-за этого в истории, которые долго потом веселят его родителей и одноклассников.Для младшего школьного возраста.',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=nyvnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nyvnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 449,
          amount: 223.75,
          authorId: 558,
          categoryId: 28,
          publisherId: 46,
        },
        {
          title: 'ESHELON NA SAMARKAND.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 922,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 380,
          amount: 3932,
          authorId: 303,
          categoryId: 132,
          publisherId: 27,
        },
        {
          title: 'Восход Авроры. Темный час',
          description:
            'Долгожданное издание первой части дилогии «Восход Авроры»!Качественное фэнтези с непредсказуемым сюжетом окунет читателя в настоящие политические игры и любовные перипетии. Древние пророчества, легендарные героини и танцы со смертью – здесь вы можете найти все.Для любителей цикла «Песнь льда и пламени» Джорджа Мартина и «Хроник Амбера» Роберта Желязны.',
          pageCount: 253,
          imageSmall:
            'http://books.google.com/books/content?id=SkT0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=SkT0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 411,
          amount: 561.25,
          authorId: 559,
          categoryId: 1,
          publisherId: 6,
        },
        {
          title: 'Кто виноват?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 372,
          imageSmall:
            'http://books.google.com/books/content?id=zOE0sVp2IpkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zOE0sVp2IpkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 668,
          amount: 4176,
          authorId: 561,
          categoryId: 27,
          publisherId: 16,
        },
        {
          title: 'Встретимся после войны',
          description:
            'Война, унесшая жизни более половины населения планет, разрушившая остатки озонового слоя, и последняя ракета, изменившая структуру всей растительности на планете. Возможно ли ещё вернуться к обычной жизни? Или людей ждёт неминуемая гибель? Какие ещё секреты хранят последствия войны?',
          pageCount: 339,
          imageSmall:
            'http://books.google.com/books/content?id=6PuuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=6PuuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 481,
          amount: 1031,
          authorId: 562,
          categoryId: 1,
          publisherId: 15,
        },
        {
          title: 'Тоннель. Последняя записка',
          description:
            'Можно ли предчувствовать приближение трагедии? Или человек проживает день за днем, не осознавая, что его может ждать впереди? Герой рассказа встречает на своем пути знаки, чувствует страх, но сможет ли он предотвратить то, что его ждет завтра? Или это всего лишь страшный сон?',
          pageCount: 13,
          imageSmall:
            'http://books.google.com/books/content?id=nexYEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=nexYEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 46,
          amount: 62.37,
          authorId: 563,
          categoryId: 1,
          publisherId: 9,
        },
        {
          title: 'Египетская сила',
          description:
            'Уже немолодая женщина, находясь в отпуске в Египте знакомится с красивым арабом, и решает выйти за него замуж. В следующую поездку в эту страну она хочет встретиться с родителями своего избранника, и желает познакомить своего семилетнего сына с этой страной и со своим будущим мужем. Но происходит страшная трагедия – мальчика находят убитым в номере отеля. По обвинению в убийстве арестовывают его мать, которой грозит по законам этой страны пожизненное заключение или смертная казнь. Но МИД России включает все свои возможности, и женщину отправляют в Россию, снимая все обвинения. Но кто же всё-таки убил мальчика? И как же складывается жизнь женщины после этой трагедии?',
          pageCount: 137,
          imageSmall:
            'http://books.google.com/books/content?id=qguwDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=qguwDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 170,
          amount: 3624,
          authorId: 564,
          categoryId: 1,
          publisherId: 43,
        },
        {
          title: 'Время для откровений',
          description:
            'Эйвери Скотт уже много лет устраивает праздники для знаменитых богачей и уже давно привыкла к таким клиентам, как Малик, кронпринц Зубрана. Но этот человек когда-то разжег в ее теле настоящий огонь, а потом дотла сжег ее сердце. Когда он снова обращается к ней за советом, Эйвери решает ему помочь, чтобы раз и навсегда покончить с прошлым. Для этого нужно совсем немного – побороть соблазн, оставшись с Малом наедине посреди знойной пустыни, и найти его сбежавшую невесту...',
          pageCount: 157,
          imageSmall:
            'http://books.google.com/books/content?id=e6KQAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=e6KQAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 108,
          amount: 123.75,
          authorId: 565,
          categoryId: 1,
          publisherId: 27,
        },
        {
          title: 'Дочь серийного убийцы',
          description:
            'ОСТОРОЖНО! ТОКСИЧНЫЕ ОТНОШЕНИЯ!Может ли убийство быть в крови?Когда в сонной девонширской глубинке бесследно пропадает женщина по имени Оливия, это становится большим потрясением для всех жителей. Такого здесь еще не бывало. Но больше всех новость потрясла местного ветеринара Дженни Джонсон...У Дженни не было счастливого детства. Ее отец – знаменитый серийный убийца, известный как Губитель крапивниц из-за привычки оставлять бабочек этого вида на телах своих жертв. Теперь папочка отбывает пожизненное заключение за высокими тюремными стенами. А Дженни всю жизнь пытается убежать от себя и своего прошлого. Она сменила имя, место жительства, вышла замуж, родила детей и никогда и никому не рассказывала, кто ее отец. Боялась, как бы люди не подумали, что и ей передались его злые гены... А еще в последнее время женщина страдает провалами в памяти. Она понятия не имеет, где бывает и что делает в такие часы...И вот пропала Оливия. Женщина, с которой у мужа Дженни был роман. И это до ужаса напоминает преступления, которые Губитель крапивниц совершал много лет назад...Но она же не ее отец, правда?Или все-таки существует ген убийцы – и он внутри нее?..«Абсолютно захватывающая и блестящая вводная – насколько хорошо мы знаем близких нам людей...». – Кэтрин Купер',
          pageCount: 369,
          imageSmall:
            'http://books.google.com/books/content?id=kCXKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kCXKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 218,
          amount: 436.25,
          authorId: 566,
          categoryId: 1,
          publisherId: 45,
        },
        {
          title: 'Промежуток',
          description:
            '"Что, если допустить, что голуби читают обрывки наших газет у метро и книги на свалке? Что развитым сознанием обладают не только люди, но и собаки, деревья, безымянные пальцы? Тромбоциты? Кирпичи, занавески? Корка хлеба в дырявом кармане заключенного? Платформа станции, на которой собираются живые и мертвые? Если все существа и объекты в этом мире наблюдают за нами, осваивают наш язык, понимают нас (а мы их, разумеется, нет) и говорят?"--',
          pageCount: 350,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 297,
          amount: 3721,
          authorId: 567,
          categoryId: 128,
          publisherId: 15,
        },
        {
          title: 'Как изменить свою жизнь за 7 дней',
          description:
            'Если вы хотите понять себя и окружающих, изменить жизнь к лучшему, определить свое место в будущем - читайте эту книгу! Она может стать вашим надежным другом и советчиком',
          pageCount: 285,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 656,
          amount: 783,
          authorId: 568,
          categoryId: 16,
          publisherId: 21,
        },
        {
          title: 'Нездешние',
          description:
            'Бывшая полицейская Мона Брайт наследует дом своей матери в странном городе под названием Уинк, построенном вокруг давно закрытой физической лаборатории, все исследования которой были глубоко засекречены. Мона всю жизнь считала мать сумасшедшей, но, по крупицам собирая информацию о семье, она постепенно осознает, что ее воспоминания о детстве мало совпадают с действительностью. И чем больше проникает в тайны прошлого, тем сильнее понимает: этот город отличаются от всего, что Мона когда-либо видела на этом свете. Здесь под всегда розовой луной посреди пустыни раскинулся настоящий оазис, по телевизору идут только передачи 1950-х годов, на главной площади стоит памятник молнии, а люди одержимы нормальностью... Вот только в каждом образцовом доме скрывается тайна, а сама реальность в Уинке оборачивается подлинным кошмаром, масштаб которого сложно даже представить.',
          pageCount: 698,
          imageSmall:
            'http://books.google.com/books/content?id=FfKJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=FfKJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 238,
          amount: 598.75,
          authorId: 569,
          categoryId: 1,
          publisherId: 7,
        },
        {
          title: 'Город, написанный по памяти',
          description: 'A novel about 4 generations of a family living in Saint-Petersburg, Russia.',
          pageCount: 315,
          imageSmall:
            'http://books.google.com/books/content?id=hpWzwwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=hpWzwwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 833,
          amount: 4722,
          authorId: 560,
          categoryId: 45,
          publisherId: 13,
        },
        {
          title: 'Золотой ключик, или Приключения Буратино',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 158,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 461,
          amount: 1143,
          authorId: 571,
          categoryId: 40,
          publisherId: 17,
        },
        {
          title: 'Английский язык. Диалоги и микро рассказы. Элементарный уровень А2+',
          description:
            'Эти диалоги и микро рассказы (пересказы диалогов) научат вас говорить и думать по-английски! В данном пособии сорок диалогов и сто двадцать микро рассказов – каждый диалог сопровождается тремя текстами-пересказами. Диалоги и пересказы – это тренинг по составлению рассказов. Пересказы-тренинги, составлены в соответствии с принципами метода Речевой плазмы (the Speech Plasma Method). Материал усваивается удивительно легко, так как самые важные слова и грамматические структуры повторяются многократно в диалогах, микро рассказах и в вопросах.',
          pageCount: 370,
          imageSmall:
            'http://books.google.com/books/content?id=eia-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=eia-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 912,
          amount: 311.25,
          authorId: 572,
          categoryId: 20,
          publisherId: 8,
        },
        {
          title: 'Незамеченная революция',
          description:
            'Книга посвящена относительно недавним (в основном сделанным в последние 30 лет) открытиям в экологии и науках о Земле, которые переворачивают сложившиеся представления, усвоенные нами со школы. По мнению автора, в совокупности эти открытия можно считать научной революцией, сменой парадигмы, подобной научным революциям А. Эйнштейна или Ч. Дарвина. В книге пять глав, тесно связанных друг с другом. В первых двух радикально пересматриваются представления о сукцессии и роли животных в поддержании стабильности экосистем. Показано, в частности, что многие считающиеся эталоном дикой природы сообщества на самом деле глубоко преобразованы деятельностью человека. А привычная нам чёткая зональность возникает под действием человека лишь в голоцене на месте единой гиперзоны от Белого до Чёрного моря. Третья глава посвящена биотическому (лесному) насосу – концепции, которая требует глубокой ревизии сложившихся представлений о климате и биоте как гораздо более мощной геологической силе. В четвёртой главе раскрывается антропогенный генезис подзолистых почв и подчёркивает недооцениваемая ранее роль биоты. В последней главе подробно доказывается, что «ледникового периода» не было, все представления экологии, биогеографии, климатологии и других наук, основанные на этой гипотезе, нуждаются в ревизии. Показана взаимосвязь всех описанных в книге открытий – это действительно единая парадигма, которая должна занять центральное место в учении о взаимодействии биосферы и геосферы. Книга написана живым языком, местами в острой публицистической форме, и при этом совершенно корректна с научной точки зрения. Автор чётко отделяет свои гипотезы от доказанных фактов, описывает нерешённые пока проблемы или противоречиями. Перед публикацией были учтены все замечания, предложения и дополнения авторов открытий, описываемых в книге.',
          pageCount: 551,
          imageSmall:
            'http://books.google.com/books/content?id=zt10EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=zt10EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 333,
          amount: 311.25,
          authorId: 573,
          categoryId: 11,
          publisherId: 39,
        },
        {
          title: 'Дочь шторма, невеста огня',
          description:
            'Служба в Имперской полиции довольно скучна и однообразна, а еще не шибко прибыльна – особенно если тебе приходится содержать самого внушительного кота во всем Иленгарде. Берясь за очередную халтурку на стороне, сержант некроотдела Киара Блэр и представить не могла, каковы будут последствия: запутанное расследование, серийный убийца с ее магической подписью и вдобавок – смилуйтесь, боги и богини! – боевой маг в качестве почетного караула.Книга также выходила под названием «Жнец крови и пепла».',
          pageCount: 464,
          imageSmall:
            'http://books.google.com/books/content?id=jJ4eEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=jJ4eEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 614,
          amount: 348.75,
          authorId: 574,
          categoryId: 1,
          publisherId: 8,
        },
        {
          title: 'Восточный конвой',
          description:
            'В стране биороботов трудно остаться человеком. И тем не менее бывшему сотруднику Интерпола Милову удается проникнуть в замыслю правителей Технеции и внедриться в обслуживающий персонал военного конвоя. Сможет ли Милов предотвратить широкомасштабную диверсию на границах России?',
          pageCount: 489,
          imageSmall:
            'http://books.google.com/books/content?id=cUWfAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cUWfAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 628,
          amount: 74.87,
          authorId: 576,
          categoryId: 1,
          publisherId: 11,
        },
        {
          title: 'Война, в которой я победила',
          description:
            'Теперь у Ады есть настоящая любящая семья, и ей, похоже, могут вылечить покалеченную ногу, из-за которой родная мать всегда считала её ничтожеством. Но кто она теперь? Она не дочь, ведь у неё нет матери, она больше не калека и не изгой, она не эвакуированный ребёнок из разбомблённого Лондона, да и вроде не сирота даже, ведь у неё есть опекун... Как найти себя, когда в мире бушует война, люди появляются в жизни и исчезают, а тот, на кого она только-только позволила себе положиться, может тоже её оставить – и на этот раз навсегда? Ещё немало сражений ждёт Аду, пусть она никогда не бывала на фронте. Хватит ли у неё отваги и силы выстоять в этой войне?',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=z2tNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=z2tNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 33,
          amount: 2992,
          authorId: 577,
          categoryId: 1,
          publisherId: 32,
        },
        {
          title: 'Лорд и леди Шервуда. Том 2',
          description:
            'Он хотел обвенчаться с ней и представить ее в Шервуде как свою супругу – она вернула ему слово и пожелала стать вольным стрелком. Он позволил, и она увидела его в прежде незнакомом ей облике строгого и взыскательного командира, справедливого, но жесткого правителя. Она осознала, что в жизни лесной державы нет места бесшабашным вольностям, о которых из уст в уста передаются легенды. Ряд событий наводит его на мысли о предателе в Шервуде, но эти мысли он пока хранит при себе, понимая, на кого падет подозрение.',
          pageCount: 673,
          imageSmall:
            'http://books.google.com/books/content?id=MXBLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MXBLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 366,
          amount: 3332,
          authorId: 579,
          categoryId: 1,
          publisherId: 17,
        },
        {
          title: 'Der, die, das. Секреты немецких артиклей',
          description:
            'Правильное употребление артикля в зависимости от рода существительного относится к основам постижения немецкого языка. Поскольку носители языка с раннего детства интуитивно усваивают распределение существительных по родам, эта тема не изучается в школе и не раскрывается в учебниках по грамматике немецкого языка. Данная книга восполняет существующий пробел. В ней просто, на примерах объясняются принципы распределения немецких существительных по родам. Изучающим язык она поможет уверенно и правильно употреблять артикли, а значит повысить грамотность устной и письменной речи.',
          pageCount: 191,
          imageSmall:
            'http://books.google.com/books/content?id=1lwUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1lwUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 298,
          amount: 862.5,
          authorId: 580,
          categoryId: 20,
          publisherId: 43,
        },
        {
          title: 'Иллюстрированный справочник рыболова',
          description:
            'Рыбалка – это прекрасное хобби, которое увлекает людей на всю жизнь. Тот, кто один раз ощутил азарт рыболова, навсегда остается поклонником этой безмолвной интеллектуальной охоты. Однако начинающему не так просто разобраться во всех премудростях этого занятия, в снастях, способах ловли, особенностях отдельных видов рыб.Но наш справочник решает эту проблему: в нем достаточно информации для того, чтобы первые походы на рыбалку были успешными и принесли не только удовольствие от самой рыбалки, но и приличный улов.',
          pageCount: 312,
          imageSmall:
            'http://books.google.com/books/content?id=imbNCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=imbNCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 486,
          amount: 2562,
          authorId: 583,
          categoryId: 17,
          publisherId: 2,
        },
        {
          title: 'Восточный конвой',
          description:
            'В стране биороботов трудно остаться человеком. И тем не менее бывшему сотруднику Интерпола Милову удается проникнуть в замыслю правителей Технеции и внедриться в обслуживающий персонал военного конвоя. Сможет ли Милов предотвратить широкомасштабную диверсию на границах России?',
          pageCount: 489,
          imageSmall:
            'http://books.google.com/books/content?id=cUWfAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=cUWfAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 519,
          amount: 74.87,
          authorId: 576,
          categoryId: 1,
          publisherId: 2,
        },
        {
          title: 'Война, в которой я победила',
          description:
            'Теперь у Ады есть настоящая любящая семья, и ей, похоже, могут вылечить покалеченную ногу, из-за которой родная мать всегда считала её ничтожеством. Но кто она теперь? Она не дочь, ведь у неё нет матери, она больше не калека и не изгой, она не эвакуированный ребёнок из разбомблённого Лондона, да и вроде не сирота даже, ведь у неё есть опекун... Как найти себя, когда в мире бушует война, люди появляются в жизни и исчезают, а тот, на кого она только-только позволила себе положиться, может тоже её оставить – и на этот раз навсегда? Ещё немало сражений ждёт Аду, пусть она никогда не бывала на фронте. Хватит ли у неё отваги и силы выстоять в этой войне?',
          pageCount: 311,
          imageSmall:
            'http://books.google.com/books/content?id=z2tNEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=z2tNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 535,
          amount: 2294,
          authorId: 577,
          categoryId: 1,
          publisherId: 5,
        },
        {
          title: 'Лорд и леди Шервуда. Том 2',
          description:
            'Он хотел обвенчаться с ней и представить ее в Шервуде как свою супругу – она вернула ему слово и пожелала стать вольным стрелком. Он позволил, и она увидела его в прежде незнакомом ей облике строгого и взыскательного командира, справедливого, но жесткого правителя. Она осознала, что в жизни лесной державы нет места бесшабашным вольностям, о которых из уст в уста передаются легенды. Ряд событий наводит его на мысли о предателе в Шервуде, но эти мысли он пока хранит при себе, понимая, на кого падет подозрение.',
          pageCount: 673,
          imageSmall:
            'http://books.google.com/books/content?id=MXBLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=MXBLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 538,
          amount: 2418,
          authorId: 579,
          categoryId: 1,
          publisherId: 18,
        },
        {
          title: 'Чародей',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 634,
          imageSmall:
            'http://books.google.com/books/content?id=xEeJ0FUEtz8C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=xEeJ0FUEtz8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 733,
          amount: 1278,
          authorId: 113,
          categoryId: 20,
          publisherId: 40,
        },
        {
          title: 'Der, die, das. Секреты немецких артиклей',
          description:
            'Правильное употребление артикля в зависимости от рода существительного относится к основам постижения немецкого языка. Поскольку носители языка с раннего детства интуитивно усваивают распределение существительных по родам, эта тема не изучается в школе и не раскрывается в учебниках по грамматике немецкого языка. Данная книга восполняет существующий пробел. В ней просто, на примерах объясняются принципы распределения немецких существительных по родам. Изучающим язык она поможет уверенно и правильно употреблять артикли, а значит повысить грамотность устной и письменной речи.',
          pageCount: 191,
          imageSmall:
            'http://books.google.com/books/content?id=1lwUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=1lwUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 70,
          amount: 862.5,
          authorId: 580,
          categoryId: 20,
          publisherId: 9,
        },
        {
          title: 'Иллюстрированный справочник рыболова',
          description:
            'Рыбалка – это прекрасное хобби, которое увлекает людей на всю жизнь. Тот, кто один раз ощутил азарт рыболова, навсегда остается поклонником этой безмолвной интеллектуальной охоты. Однако начинающему не так просто разобраться во всех премудростях этого занятия, в снастях, способах ловли, особенностях отдельных видов рыб.Но наш справочник решает эту проблему: в нем достаточно информации для того, чтобы первые походы на рыбалку были успешными и принесли не только удовольствие от самой рыбалки, но и приличный улов.',
          pageCount: 312,
          imageSmall:
            'http://books.google.com/books/content?id=imbNCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=imbNCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 759,
          amount: 3589,
          authorId: 583,
          categoryId: 17,
          publisherId: 5,
        },
        {
          title:
            'DeFi и будущее финансов. Как технология децентрализованных финансов трансформирует банковскую систему',
          description:
            'Перед вами лаконичный, но исчерпывающий гид по децентрализованным финансам (DeFi). Цель этой книги – рассказать вам о состоянии дел в стремительно растущей сфере DeFi, ее возможностях и преимуществах, а также о тех проблемах современной экономики, которые решает эта технология. Внутри вы найдете подробную информацию о том, из чего состоят децентрализованные финансы, как использовать их без боязни потерять деньги и почему нельзя представить себе ближайшее будущее без DeFi.В формате PDF A4 сохранён издательский дизайн.',
          pageCount: 242,
          imageSmall:
            'http://books.google.com/books/content?id=o2vBEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=o2vBEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 801,
          amount: 636.25,
          authorId: 585,
          categoryId: 10,
          publisherId: 29,
        },
        {
          title: 'Тайные знания коммерческих иллюстраторов',
          description:
            'В этой книге Яна Франк рассказывается, как стать коммерческими иллюстратором, и раскрывает всю "кухню" этой работы',
          pageCount: 241,
          imageSmall:
            'http://books.google.com/books/content?id=c-tFeHidhiAC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=c-tFeHidhiAC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 931,
          amount: 2721,
          authorId: 306,
          categoryId: 4,
          publisherId: 28,
        },
        {
          title: 'Собор парижской Богоматери',
          description:
            'The intricate, tragic novel about the playwright Pierre Gringoire, Quasimodo, and the gypsy Esmerelda.',
          pageCount: 573,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 594,
          amount: 2839,
          authorId: 588,
          categoryId: 132,
          publisherId: 47,
        },
        {
          title: 'Эффект дракона',
          description:
            'Десятая книга серии бестселлеров ЛитРес «Эгида» про приключения бывшего инженера Павла, а ныне – гнома Троя! Чтобы продвинуться в выполнении череды испытаний, ему необходимо уничтожить дьявола, и пройти данж, который образуется на месте его гибели. Выполнение этой невероятно трудной задачи осложнено тем, что армия ада, заставив сбежать с поля боя объединённую армию орков и гномов, кажется несокрушимой. Неожиданно для всех в дело вступает и созданная при помощи дракона армия нежити...',
          pageCount: 459,
          imageSmall:
            'http://books.google.com/books/content?id=E1sUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=E1sUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 764,
          amount: 248.75,
          authorId: 591,
          categoryId: 1,
          publisherId: 11,
        },
        {
          title: "Ispoved'",
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 147,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 522,
          amount: 3637,
          authorId: 578,
          categoryId: 42,
          publisherId: 37,
        },
        {
          title: 'Артания',
          description:
            'Юрий Никитин – последовательный противник развернутых аннотаций, пересказывающих читателю содержание книги. Поэтому мы можем себе позволить лишь единственную подсказку: перед вами – новый роман в жанре фэнтези, слава которого, безусловно, затмит знаменитых «Троих из Леса»!',
          pageCount: 801,
          imageSmall:
            'http://books.google.com/books/content?id=evs2tSGFLnsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=evs2tSGFLnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 543,
          amount: 348.75,
          authorId: 592,
          categoryId: 1,
          publisherId: 35,
        },
        {
          title: 'Богатые коучи делают Это. Быстрый способ получить больше клиентов',
          description:
            'Книга представляет собой простое и доступное руководство по привлечению клиентов для коучей. Эта книга не про множество разных способов оторваться от конкурентов, а про один, но, пожалуй, один из самых эффективных, который только существует. Один вечер, проведенный за чтением этой книги, может полностью изменить вашу коучинговую практику и вывести ваш бизнес на новый уровень. Книга адресована профессиональным коучам, а также новичкам, планирующим работать в новой для себя профессии.',
          pageCount: 835,
          imageSmall:
            'http://books.google.com/books/content?id=ku5NDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ku5NDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 464,
          amount: 350,
          authorId: 593,
          categoryId: 16,
          publisherId: 30,
        },
        {
          title: 'Тренажёр по чистописанию. Учимся писать за 30 занятий. 1-й класс',
          description:
            '«Тренажёр по чистописанию. Учимся писать за 30 занятий. 1-й класс» представляет собой рабочую тетрадь, в которой первоклассники потренируются аккуратно и красиво писать буквы, их элементы, варианты соединений, а также слоги, слова и предложения. Занимаясь по этому пособию, ребёнок сможет выработать красивый почерк и увеличить скорость письма всего лишь за 30 занятий. Пособие можно использовать в качестве дополнительного материала на уроках в классе, а также для работы дома.Для начального образования.',
          pageCount: 50,
          imageSmall:
            'http://books.google.com/books/content?id=_7-gDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=_7-gDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 412,
          amount: 123.75,
          authorId: 594,
          categoryId: 28,
          publisherId: 30,
        },
        {
          title: 'Охота на овец',
          description:
            'О её смерти мне сообщил по телефону старый приятель... Так начинается Охота на Овец – пожалуй, самое странное путешествие по закоулкам современного мира и человеческого сознания, придуманное классиком современной литературы, японским писателем Харуки Мураками. Этот роман недаром стал абсолютным мировым бестселлером: Охота на Овец в наших душах не заканчивается никогда. Итак – позвоните в полицию, спросите адрес и номер телефона семьи, затем позвоните семье и узнайте дату и время похорон. А после, в назначенный день, садитесь в пригородную электричку от станции Васэда. И надейтесь, что охота будет удачной...',
          pageCount: 444,
          imageSmall:
            'http://books.google.com/books/content?id=kSQ9nwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=kSQ9nwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 700,
          amount: 1017,
          authorId: 539,
          categoryId: 40,
          publisherId: 33,
        },
        {
          title: 'Моя кухня и мое меню',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 440,
          imageSmall:
            'http://books.google.com/books/content?id=CSMnAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=CSMnAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          saleability: false,
          quantity: 725,
          amount: 1323,
          authorId: 596,
          categoryId: 133,
          publisherId: 24,
        },
        {
          title: 'Злодейка из камина',
          description:
            'Я Джарес Тодан, последний из рода Владык Источника. Немудрено, что за мной охотятся как давние враги, так и девицы на выданье. Но одна превзошла всех: свалилась ко мне в камин и тут же исчезла, унеся мой покой. Враг? Жертва? Видение? Не успокоюсь, пока не найду её и не узнаю все тайны, которые скрывает! Книга заняла призовое место на конкурсе «Юмор и Магия» на портале ПродаМан, бестселлер 2017 года на портале Призрачные Миры. В оформлении обложки использованы иллюстрации с сайта depositphotos. ID van bestand: 66193223 van EdwardDerule, Foto van kiuikson, Ольга Бойко (Olga Boyko). Alexandra',
          pageCount: 397,
          imageSmall:
            'http://books.google.com/books/content?id=ysnpDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ysnpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 508,
          amount: 205,
          authorId: 597,
          categoryId: 1,
          publisherId: 25,
        },
        {
          title: 'Золото бунта',
          description:
            '«1778 год. Урал дымит горными заводами, для которых существует только одна дорога в Россию – бурная река Чусовая. Но здесь барки с заводским железом безжалостно крушат береговые скалы-бойцы. У сплавщиков, которые проводят барки по стремнинам реки, есть способ избежать крушений: попросить о помощи старцев, что правят Рекой из тайных раскольничьих скитов и держат в кулаке грандиозный сплав “железных караванов”. Однако молодой сплавщик Осташа, пытаясь разгадать причины гибели своего отца, поднимает бунт против сложившегося на Чусовой порядка. Чтобы вернуть честное имя себе и отцу, он должен будет найти казну самого Пугачева, спрятанную где-то на бойцах...А подлинное “золото бунта” – это не пугачёвский клад, но ответ на вопрос: как сделать непосильное дело и не потерять душу?» (Алексей Иванов)',
          pageCount: 829,
          imageSmall:
            'http://books.google.com/books/content?id=OTM0AQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=OTM0AQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 886,
          amount: 248.75,
          authorId: 598,
          categoryId: 1,
          publisherId: 10,
        },
        {
          title: 'Инвестиции на диване',
          description:
            '"Инвестиции на диване" – это практическое руководство, которое открывает перед вами возможности инвестирования и достижения финансового успеха. В этой книге вы найдете полезные советы, стратегии и инструменты, которые помогут вам создать и управлять своим инвестиционным портфелем.Вас ждет увлекательное погружение в различные инвестиционные возможности. Вы узнаете, как анализировать рынок, определять перспективные активы, оценивать риски и принимать обоснованные инвестиционные решения. "Инвестиции на диване" станет вашим надежным путеводителем в мире инвестиций. Независимо от того, являетесь ли вы новичком или опытным инвестором, вы найдете здесь ценные стратегии, которые помогут вам достичь ваших финансовых целей. Если вы хотите освоить искусство инвестирования на диване и обеспечить стабильный доход, "Инвестиции на диване" – это именно то, что вам нужно. Получите доступ к этой книге сегодня и начните свой путь к финансовому успеху, не выходя из дома.',
          pageCount: 35,
          imageSmall:
            'http://books.google.com/books/content?id=ArjGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=ArjGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 160,
          amount: 248.75,
          authorId: 599,
          categoryId: 10,
          publisherId: 6,
        },
        {
          title: 'Царь Соломон. Мудрейший из мудрых',
          description:
            'Царь Соломон, мудрейший из мудрых, – символ мудрости всего рода человеческого. Эпоха его царствования была проникнута обаянием образа величественного правителя. Народ переживал период мирного строительства, были доведены до совершенства торговые связи, создан Храм, объединивший в духовное целое народ Израиля и Иудеи, составлены основные книги Ветхого Завета. В сознании людей укоренялись чувства законности и справедливости. Автор книги Фридрих Тибергер – всемирно известный ученый-гебраист, друг и собеседник Франца Кафки – не ставит задач необоснованного возвеличивания. Он критически оценивает источники с позиций современных исторических знаний, а его тонкий и глубокий анализ древних текстов раскрывает пронзительный трагизм непреодолимого одиночества мудрейшего из мудрых.',
          pageCount: 309,
          imageSmall:
            'http://books.google.com/books/content?id=0wXzjnwc64YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=0wXzjnwc64YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 172,
          amount: 261.25,
          authorId: 600,
          categoryId: 12,
          publisherId: 30,
        },
        {
          title: 'Чудесное путешествие Нильса с дикими гусями',
          description:
            'Selfish and lazy, fourteen-year-old Nils learns kindness and wisdom after he is bewitched into an elf-sized boy and carried off by a barnyard goose to join the migration of wild geese across Sweden to Lapland.',
          pageCount: 204,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 23,
          amount: 4722,
          authorId: 428,
          categoryId: 114,
          publisherId: 36,
        },
        {
          title: 'Лошадь без головы',
          description: 'Повесть о забавных приключениях адресована детям среднего школьного возраста и их родителям',
          pageCount: 152,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 897,
          amount: 4577,
          authorId: 601,
          categoryId: 40,
          publisherId: 8,
        },
        {
          title: 'Тусовка на острове Скелета',
          description:
            'На острове Скелета, затерянном в Тихом океане, братья-сыщики Дима и Алешка обнаружили... одичавшего человека! Современный Робинзон долго заново учился разговаривать по-русски, но в конце концов выяснилось – это знаменитый профессор Чижов, исчезнувший два года назад! Преступники, похитившие коллекцию ученого, не нашли знаменитый ковш Петра Первого, за которым, собственно, и охотились. Профессор не раскрыл им тайны этого сокровища – за что и был высажен злодеями на необитаемом острове. И вот теперь Чижов доставлен в Москву, а украденную коллекцию взялись искать ребята. Интересно, удастся ли им опередить доблестную милицию?',
          pageCount: 154,
          imageSmall:
            'http://books.google.com/books/content?id=-7wbj0eowO8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=-7wbj0eowO8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: true,
          quantity: 247,
          amount: 173.75,
          authorId: 602,
          categoryId: 28,
          publisherId: 41,
        },
        {
          title: 'Мексика в системе геополитических координат начала XXI века',
          description:
            'В работе рассмотрены основные тенденции международной деятельности Мексики в первых двух десятилетиях XXI в., а также ведущие тренды социально-политического развития этой крупнейшей латиноамериканской страны. Автор стремился показать, что Мексика не только претендует на роль регионального лидера, но и все более активно подключается к решению основных проблем мировой политики, где она подчеркнуто занимает независимые и самостоятельные позиции. Сумеет ли Мексика довести до конца этот «разворот» от США, безвольным и к тому же бесцветным «союзником» которых принято было считать эту страну, к Латинской Америке, некогда утраченные позиции в которой она пытается восстановить? Ответ на этот вопрос и стал главной задачей автора работы.Книга адресована широкому кругу читателей, интересующихся современной Мексикой, а также проблематикой взаимоотношений Латинской Америки и США. Отельные разделы исследования могут найти свое практическое применение в преподавании учебных курсов, использоваться для подготовки спецкурсов и программ в системе высшей школы.В формате PDF A4 сохранен издательский макет.',
          pageCount: 520,
          imageSmall:
            'http://books.google.com/books/content?id=4boqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=4boqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 351,
          amount: 600,
          authorId: 603,
          categoryId: 2,
          publisherId: 41,
        },
        {
          title: 'Трагедия Мясного Бора',
          description:
            'Неизвестные страницы истории и уникальные архивные материалы, парадоксальные выводы и профессиональные оценки непосредственных участников событий - все в этой книге',
          pageCount: 535,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 259,
          amount: 3759,
          authorId: 604,
          categoryId: 5,
          publisherId: 26,
        },
        {
          title: 'Новая роль Японии в мировом порядке XXI века',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 837,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 905,
          amount: 4303,
          authorId: 605,
          categoryId: 134,
          publisherId: 47,
        },
        {
          title: 'Дети синего фламинго',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 205,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 150,
          amount: 2125,
          authorId: 615,
          categoryId: 124,
          publisherId: 43,
        },
        {
          title: 'Утопия-Авеню',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 701,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: true,
          quantity: 354,
          amount: 2937,
          authorId: 616,
          categoryId: 136,
          publisherId: 2,
        },
        {
          title: 'Маньяк Гуревич',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 531,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 237,
          amount: 4805,
          authorId: 582,
          categoryId: 131,
          publisherId: 30,
        },
        {
          title: 'Философские повести',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 574,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 848,
          amount: 3411,
          authorId: 618,
          categoryId: 34,
          publisherId: 42,
        },
        {
          title: 'Источник',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 1118,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 756,
          amount: 2765,
          authorId: 294,
          categoryId: 41,
          publisherId: 1,
        },
        {
          title: 'Пожилые записки',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 352,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 925,
          amount: 1347,
          authorId: 448,
          categoryId: 75,
          publisherId: 34,
        },
        {
          title: 'Время всегда хорошее',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 238,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 564,
          amount: 3640,
          authorId: 613,
          categoryId: 40,
          publisherId: 22,
        },
        {
          title: 'Три толстяка',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pageCount: 221,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 382,
          amount: 1300,
          authorId: 608,
          categoryId: 43,
          publisherId: 3,
        },
        {
          title: 'Shokolad',
          description:
            'When a single mother and her young daughter move to rural France and open a chocolate shop - with Sunday hours - across the street from the local church, they are met with some resistance from the rigidly moral community. But as soon as the townspeople discover their delicious products, their attitudes begin to change.',
          pageCount: 478,
          imageSmall:
            'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          image: 'https://images.freeimages.com/images/premium/previews/3436/3436408-blank-vintage-book-cover-xxl.jpg',
          saleability: false,
          quantity: 667,
          amount: 3437,
          authorId: 617,
          categoryId: 137,
          publisherId: 26,
        },
        {
          title: 'PC Mag',
          description:
            'PCMag.com is a leading authority on technology, delivering Labs-based, independent reviews of the latest products and services. Our expert industry analysis and practical solutions help you make better buying decisions and get more from technology.',
          pageCount: 456,
          imageSmall:
            'http://books.google.com/books/content?id=w_OhaFDePS4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          image:
            'http://books.google.com/books/content?id=w_OhaFDePS4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          saleability: false,
          quantity: 739,
          amount: 3576,
          authorId: 305,
          categoryId: 96,
          publisherId: 21,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
