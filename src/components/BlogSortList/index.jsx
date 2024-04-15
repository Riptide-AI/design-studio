import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { isCheck } from '@/data/store/Slices/SortSlice';
import { text } from '@/data/blog';

export default function SortList() {
  const dispatch = useDispatch();
  const sortList = useSelector((state) => state.sort.sortList);

  return (
    <div className={style.sort}>
      <div className={style.sort_label}>{text.sortBy}</div>
      <ul className={style.sort_list}>
        {sortList.map((option) => (
          <li
            data-name={option.name}
            key={option.name}
            className={option.isActive ? style.active : ''}
            onClick={() => dispatch(isCheck(option.name))}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
