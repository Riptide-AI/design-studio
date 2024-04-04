import style from './style.module.scss';
import Sort_list from '@/components/BlogSortList';
import Blog_filter from '@/components/BlogFilter';
import { blogPosts, text } from '@/data/blog';
import Articls_content from '@/components/Articls_content';
import BlogPageList from '@/components/BlogPageList';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesAtPage] = useState(5);

  const filterListRef = useRef([]);
  const filtredArray = useRef([]);

  const filtersData = useSelector((state) => state.filter.filterdata);
  const sortList = useSelector((state) => state.sort.sortList);

  const [howToSort, setHowToSort] = useState('TOP');

  const lastArticelIndex = currentPage * articlesAtPage;
  const firstArticelIndex = lastArticelIndex - articlesAtPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //sort func
  function compareFnByName(a, b) {
    if (howToSort == 'TOP') {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      }
      return 0;
    }
  }
  function compareFnByDate(a, b) {
    if (howToSort == 'TOP') {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      }
      return 0;
    } else {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      }
      return 0;
    }
  }
  function compareFnByViews(a, b) {
    if (howToSort == 'TOP') {
      if (a.views < b.views) {
        return -1;
      } else if (a.views > b.views) {
        return 1;
      }
      return 0;
    } else {
      if (a.views > b.views) {
        return -1;
      } else if (a.views < b.views) {
        return 1;
      }
      return 0;
    }
  }
  function sortWay(sortFunc) {
    if (howToSort == 'TOP') {
      setcurrentArticle(
        filtredArray.current.sort(sortFunc).slice(firstArticelIndex, lastArticelIndex),
      );
      setHowToSort('DOWN');
    } else if (howToSort == 'DOWN') {
      setcurrentArticle(
        filtredArray.current.sort(sortFunc).slice(firstArticelIndex, lastArticelIndex),
      );

      setHowToSort('TOP');
    }
  }

  useEffect(() => {
    setcurrentArticle(filtredArray.current.slice(firstArticelIndex, lastArticelIndex));
  }, [currentPage]);

  useEffect(() => {
    filterListRef.current = [];
    filtredArray.current = [];

    filtersData.map((e) => {
      if (e.isChecked) {
        filterListRef.current.push(e.id);
      }
    });

    blogPosts.map((post) => {
      if (filterListRef.current.includes(post.category) || filterListRef.current.length == 0) {
        filtredArray.current.push(post);
      }
    });
    setcurrentArticle(filtredArray.current.slice(firstArticelIndex, lastArticelIndex));
    setCurrentPage(1)
  }, [filtersData]);

  useEffect(() => {

    sortList.map((e) => {
      if (e.isActive) {
        switch (e.id) {
          case 'Date':
            sortWay(compareFnByDate);
            break;
          case 'Name':
            sortWay(compareFnByName);
            break;
          case 'Views':
            sortWay(compareFnByViews);
            break;
          default:
            break;
        }
      }
    });
  }, [sortList]);

  const [currentArticle, setcurrentArticle] = useState(
    filtredArray.current.slice(firstArticelIndex, lastArticelIndex),
  );

  return (
    <div className={style.blog}>
      <div className={style.wrapper}>
        <div className={style.blogs_label_sort}>
          <div className={style.label}>{text.MainArticle}</div>
          <div className={style.line}></div>
          <Sort_list />
        </div>
        <div className={style.blog_content}>
          <Blog_filter />
          <div className={style.blogs_label_sort_mob}>
            <div className={style.label_mob}>{text.MainArticle}</div>
            <div className={style.line}></div>
            <Sort_list />
          </div>
          <div className={style.articles}>
            <Articls_content blogPost={currentArticle} />
            <BlogPageList
              articlesAtPage={articlesAtPage}
              totalArticles={filtredArray.current.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
