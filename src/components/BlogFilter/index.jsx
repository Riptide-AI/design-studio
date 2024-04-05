import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { isCheck } from '@/data/store/Slices/FilterSlice';
import { text } from '@/data/blog';

export default function Blog_filter() {
  const dispatch = useDispatch();
  const filtersData = useSelector((state) => state.filter.filterdata);
  
  const onChangeCheckBox = (id) => {
    dispatch(isCheck(id));
  };

  return (
    <div className={style.categorys}>
      <div className={style.category_label}>{text.category}</div>
      <div className={style.category_list}>
        {filtersData.map((item, index) => (
          <div key={index} className={style.category}>
            <label htmlFor={item.name} className={style.checkLabel}>
              {item.name}
              <input
                type="checkbox"
                value={item.name}
                name="name"
                onChange={() => onChangeCheckBox(item.id)}
                id={item.name}
                checked={item.isChecked}
              />
              <span className={style.checkSpan}></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
