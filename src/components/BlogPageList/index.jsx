import style from './style.module.scss';

export default function BlogPageList({ articlesAtPage, totalArticles, paginate, currentPage }) {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalArticles / articlesAtPage);

  const nextPage = (page) => {
    page == totalPage ? paginate(page) : paginate(page + 1);
  };
  const prevPage = (page) => {
    page == 1 ? paginate(page) : paginate(page - 1);
  };
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.blog_page_list}>
      <ul className={style.page_pagination}>
        <li onClick={() => paginate(1)}>
          {
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.227 12L13.167 11.06L10.1137 8L13.167 4.94L12.227 4L8.22699 8L12.227 12Z" />
              <path d="M7.83344 12L8.77344 11.06L5.7201 8L8.77344 4.94L7.83344 4L3.83344 8L7.83344 12Z" />
            </svg>
          }
        </li>
        <li onClick={() => prevPage(currentPage)}>
          {
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.56 8L5.5 7.06L2.44667 4L5.5 0.94L4.56 8.21774e-08L0.56 4L4.56 8Z" />
            </svg>
          }{' '}
        </li>
        {pageNumbers.map((number) => (
          <li
            key={'Page' + number}
            className={currentPage == number ? style.active : ''}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li onClick={() => nextPage(currentPage)}>
          {
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.44 0L0.5 0.94L3.55333 4L0.5 7.06L1.44 8L5.44 4L1.44 0Z" />
            </svg>
          }{' '}
        </li>
        <li onClick={() => paginate(totalPage)}>
          {
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.7735 4L3.8335 4.94L6.88683 8L3.8335 11.06L4.7735 12L8.7735 8L4.7735 4Z" />
              <path d="M9.16656 4L8.22656 4.94L11.2799 8L8.22656 11.06L9.16656 12L13.1666 8L9.16656 4Z" />
            </svg>
          }{' '}
        </li>
      </ul>
    </div>
  );
}
