import style from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { isCheck } from '@/data/store/Slices/FilterSlice';
import { text } from '@/data/blog';

export default function Article_card({
  views,
  id,
  image,
  name,
  descrip,
  categoryName,
  date,
  timeToRead,
  category,
}) {
  const dispatch = useDispatch();

  return (
    <div key={views + timeToRead} className={style.article_card}>
      <Link href={`/blog/article_page/${id}`}>
        <div className={style.card_image}>
          <Image width={400} height={300} src={image} alt={name + ' Image'} />
        </div>
      </Link>
      <div className={style.info}>
          <div className={style.card_main_info}>
          <Link href={`/blog/article_page/${id}`}>
            <div className={style.card_label}>{name}</div>
            </Link>
            <div className={style.card_short_text}>{descrip} </div>
            <div className={style.card_views}>
              {views}
              <span> {text.viwes}</span>
            </div>
          </div>
      
        <div className={style.card_more_info}>
          <div className={style.category} onClick={() => dispatch(isCheck(category))}>
            {categoryName}
          </div>
          <div className={style.card_date_post}>{date?.toDateString().slice(4)}</div>
          <div className={style.card_time}>
            {timeToRead} {text.time}
          </div>
        </div>
      </div>
    </div>
  );
}
