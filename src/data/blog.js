export const heroBanner = {
  title: 'Назва заголовку блогу',
  bg: '/img/hero-banner-13.png',
};

export const text = {
  sortBy: 'Сортувати за:',
  category: 'Категорія',
  MainArticle: 'Статті',
  viwes: 'переглядів',
  time: 'хв',
  notFound: 'Постів да даними параметрами не знайдено(',
  morebtn: 'Більше',
};
export const blogPosts = [
  {
    id: 1,
    image: '/img/Blog/Articles_img/1.png',
    name: 'Заголовок номер один приклад ',
    date: new Date(2001, 11, 17),
    descrip:
      'Короткий опис 1 ************* ***************************** *************** ************************ ************* **********...',
      descrip_1:
      'Короткий опис 2 ************* ***************************** *************** ************************ ************* **********...',
      descrip_2:
      'Короткий опис 2 ************* ***************************** *************** ************************ ************* **********...',
    timeToRead: 120,
    categoryName: 'Web Design',
    category: 'design',
    views: 1234,
    sub_label: 'Some text',
  }, {
    id: 10,
    image: '/img/Blog/Articles_img/1.png',
    name: 'Заголовок номер один приклад ',
    date: new Date(2001, 11, 17),
    descrip:
      'Короткий опис 1 ************* ***************************** *************** ************************ ************* **********...',
      descrip_1:
      'Короткий опис 2 ************* ***************************** *************** ************************ ************* **********...',
      descrip_2:
      'Короткий опис 2 ************* ***************************** *************** ************************ ************* **********...',
    timeToRead: 120,
    categoryName: 'Web Design',
    category: 'design',
    views: 1234,
    sub_label: 'Some text',
  },
  {
    id: 2,
    image: '/img/Blog/Articles_img/2.png',
    name: 'Заголовок 3',
    date: new Date(1990, 11, 17),
    descrip: 'Короткий опис 2',
    timeToRead: 7,
    categoryName: 'SEO',
    category: 'marketing',
    views: 200,
  },
  {
    id: 3,
    image: '/img/Blog/Articles_img/3.png',
    name: 'Заголовок 2',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 3',
    timeToRead: 3,
    categoryName: 'Огляди',
    category: 'sience',
    views: 10,
  },
  {
    id: 4,
    image: '/img/Blog/Articles_img/4.png',
    name: 'Заголовок 4',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 4',
    timeToRead: 10,
    categoryName: 'Інструкції',
    category: 'marketing',
    views: 3456,
  },
  {
    id: 5,
    image: '/img/Blog/Articles_img/5.png',
    name: 'Заголовок 5',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 5',
    timeToRead: 6,
    categoryName: 'Рекомендації',
    category: 'design',
    views: 7890,
  },
  {
    id: 6,
    image: '/img/Blog/Articles_img/6.png',
    name: 'Заголовок 6',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 6',
    timeToRead: 2,
    categoryName: 'Саморозвиток',
    category: 'design',
    views: 12345,
  },
  {
    id: 7,
    image: '/img/Blog/Articles_img/7.png',
    name: 'Заголовок 7',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 7',
    timeToRead: 4,
    categoryName: 'Кулінарія',
    category: 'ai',
    views: 6789,
  },

  {
    id: 8,
    image: '/img/Blog/Articles_img/8.png',
    name: 'Заголовок 8',
    date: new Date(1995, 11, 17),

    descrip: 'Короткий опис 8',
    timeToRead: 8,
    categoryName: 'Подорожі',
    category: 'other',
    views: 101112,
  },
];

export const filterData = [
  {
    id: 'design',
    name: 'Дизайн',
    isChecked: false,
  },
  {
    id: 'web-develop',
    name: 'Веб-розробка',
    isChecked: false,
  },
  {
    id: 'marketing',
    name: 'Маркетинг',
    isChecked: false,
  },
  {
    id: 'sience',
    name: 'Освіта і наука',
    isChecked: false,
  },
  {
    id: 'ai',
    name: 'Революція ШІ',
    isChecked: false,
  },
  {
    id: 'other',
    name: 'Інше',
    isChecked: false,
  },
];
export const sortOptions = [
  { name: 'Дата', isActive: true, id: 'Date' },
  { name: 'Ім’я', isActive: false, id: 'Name' },
  { name: 'Перегляди', isActive: false, id: 'Views' },
];
