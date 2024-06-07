import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { howitworks } from '@/data/homepage';
import { ContentWrapper } from '@/components/ContentWrapper';
import { CustomButton } from '@/components/CustomButton';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const left = useRef('90px');
  const top = useRef('410px');
  const data = useRef('opened');
  const [windowWidth, setwindowWidth] = useState();
  const { t } = useTranslation();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);

      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  function chooseText(datatype) {
    if (  windowWidth>1440) {
      !open ? setOpen(true) : '';
      switch (datatype) {
        case 'Analysis':
          setText(t(howitworks[0].desc));
          {
            data.current == 'Analysis' ? setOpen(!open) : '';
            windowWidth<1440? top.current = '182px':'';
            left.current = '125px';
            data.current = datatype;
          }
          break;
        case 'Design':
          setText(t(howitworks[1].desc));
          {
            data.current == 'Design' ? setOpen(!open) : console.log(data);
            windowWidth<1440? top.current = '280px':'';
            left.current = '365px';
            data.current = datatype;
          }
          break;
        case 'Development':
          setText(t(howitworks[2].desc));
          {
            data.current == 'Development' ? setOpen(!open) : '';
            windowWidth<1440? top.current = '380px':'';
            left.current = '615px';
            data.current = datatype;
          }
          break;
        case 'Launching':
          setText(t(howitworks[3].desc));
          {
            data.current == 'Launching' ? setOpen(!open) : '';
            windowWidth<1440? top.current = '480px':'';
            left.current = '855px';
            data.current = datatype;
          }
          break;
        case 'Maintenance':
          setText(t(howitworks[4].desc));
          {
            data.current == 'Maintenance' ? setOpen(!open) : '';
            windowWidth<1440? top.current = '580px':'';
            left.current = '1100px';
            data.current = datatype;
          }
          break;
        default:
          setOpen(false);
          break;
      }
    }
    
   
  }
  return (
    <ContentWrapper>
      <section className={style.How_we_work}>
        <div className={style.wrapper}>
          <div className={style.label}>{t('How_we_work.title')}</div>
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
                  chooseText('Analysis');
                }}
                className={style.card_label}
              >
                {t(howitworks[0].title)}
              </button>
              <button
                onClick={() => {
                  chooseText('Design');
                }}
                className={style.card_label}
              >
                {t(howitworks[1].title)}
              </button>
              <button
                onClick={() => {
                  chooseText('Development');
                }}
                className={style.card_label}
              >
                {t(howitworks[2].title)}
              </button>
              <button
                onClick={() => {
                  chooseText('Launching');
                }}
                className={style.card_label}
              >
                {t(howitworks[3].title)}
              </button>
              <button
                onClick={() => {
                  chooseText('Maintenance');
                }}
                className={style.card_label}
              >
                {t(howitworks[4].title)}
              </button>
            </div>
          </div>
          <div
            className={open ? style.card_description + ' ' + style.open : style.card_description}
             style={{ top: top.current }} >
            <div className={style.arrow}
             style={{ left: left.current}}></div>
            <p className={style.text}>{text}</p>
          </div>
          <Link href={'/contacts'}>
            <CustomButton
              title={t('How_we_work.oreder-btn')}
              stylesClassName={open ? style.btn_order + ' ' + style.hide : style.btn_order}
            />
          </Link>
        </div>
      </section>
    </ContentWrapper>
  );
}
