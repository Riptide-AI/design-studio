import React, { useRef, useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import arrow from '../../../../public/img/How_we_work/arrow.png';
import { howitworks } from '@/data/homepage';
import { ContentWrapper } from '@/components/ContentWrapper';
import { CustomButton } from '@/components/CustomButton';

export function HowItWorks() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const left = useRef('90px');
  const data = useRef('opened');

  function chooseText(datatype) {
    !open ? setOpen(true) : '';
    switch (datatype) {
      case 'Research':
        setText(howitworks[0].desc);
        {
          data.current == 'Research' ? setOpen(!open) : '';
          left.current = '100px';
          data.current = datatype;
        }
        break;
      case 'Design':
        setText(howitworks[1].desc);
        {
          data.current == 'Design' ? setOpen(!open) : console.log(data);
          left.current = '330px';
          data.current = datatype;
        }
        break;
      case 'Development':
        setText(howitworks[2].desc);
        {
          data.current == datatype ? setOpen(!open) : '';
          left.current = '565px';
          data.current = datatype;
        }
        break;
      case 'Launching':
        setText(howitworks[3].desc);
        {
          data.current == datatype ? setOpen(!open) : '';
          left.current = '795px';
          data.current = datatype;
        }
        break;
      case 'Support':
        setText(howitworks[4].desc);
        {
          data.current == datatype ? setOpen(!open) : '';
          left.current = '1020px';
          data.current = datatype;
        }
        break;
      default:
        setOpen(false);
        break;
    }
  }
  return (
    <ContentWrapper>
      <section className={style.How_we_work}>
        <div className={style.wrapper}>
          <div className={style.label}>Як ми працюємо</div>
          <div className={style.card_row}>
            <div className={style.images}>
              <div className={style.picture}>
                <Image
                  className={style.radar}
                  src={howitworks[0].radar}
                  width={100}
                  height={100}
                  alt="Picture of the radar"
                />{' '}
                <Image
                  className={style.radar_line}
                  src={howitworks[0].radar_line}
                  width={100}
                  height={100}
                  alt="Picture of the radar_line"
                />
              </div>
              <div className={style.picture}>
                <div className={style.pc_hover}>
                  <Image
                    className={style.pc}
                    src={howitworks[1].pc}
                    width={100}
                    height={100}
                    alt="Picture of the pc"
                  />{' '}
                  <Image
                    className={style.pencil}
                    src={howitworks[1].pencil}
                    width={100}
                    height={100}
                    alt="Picture of the pc"
                  />
                  <Image
                    className={style.pc_line}
                    src={howitworks[1].pc_line}
                    width={100}
                    height={100}
                    alt="Picture of the pc"
                  />
                </div>
              </div>
              <div className={style.picture}>
                <Image
                  src={howitworks[2].head}
                  width={100}
                  height={100}
                  alt="Picture of the head"
                />{' '}
                <Image
                  className={style.active_gear}
                  src={howitworks[2].gear}
                  width={100}
                  height={100}
                  alt="Picture of the gear"
                />
              </div>
              <div className={style.picture}>
                <Image
                  className={style.rocket}
                  src={howitworks[3].rocket}
                  width={100}
                  height={100}
                  alt="Picture of the rocket"
                />{' '}
                <Image
                  className={style.rocket_fire}
                  src={howitworks[3].rocket_fire}
                  width={100}
                  height={100}
                  alt="Picture of the rocket_fire"
                />{' '}
                <Image
                  className={style.rocket_active_fire}
                  src={howitworks[3].rocket_active_fire}
                  width={100}
                  height={100}
                  alt="Picture of the rocket_active_fire"
                />
              </div>
              <div className={style.picture}>
                <Image
                  className={style.wrench}
                  src={howitworks[4].wrench}
                  width={100}
                  height={100}
                  alt="Picture of the wrench"
                />
              </div>
            </div>
            <div className={style.btns_to_images}>
              <button
                onClick={() => {
                  chooseText('Research');
                }}
                className={style.card_label}
              >
                {howitworks[0].title}
              </button>
              <button
                onClick={() => {
                  chooseText('Design');
                }}
                className={style.card_label}
              >
                {howitworks[1].title}
              </button>
              <button
                onClick={() => {
                  chooseText('Development');
                }}
                className={style.card_label}
              >
                {howitworks[2].title}
              </button>
              <button
                onClick={() => {
                  chooseText('Launching');
                }}
                className={style.card_label}
              >
                {howitworks[3].title}
              </button>
              <button
                onClick={() => {
                  chooseText('Support');
                }}
                className={style.card_label}
              >
                {howitworks[4].title}
              </button>
            </div>
          </div>
          <div
            className={open ? style.card_description + ' ' + style.open : style.card_description}
          >
            <div className={style.arrow} style={{ left: left.current }}></div>
            <p className={style.text}>{text}</p>
          </div>
          <CustomButton
            title="Замовити веб-сайт"
            stylesClassName={open ? style.btn_order + ' ' + style.hide : style.btn_order}
          />
        </div>
      </section>
    </ContentWrapper>
  );
}
