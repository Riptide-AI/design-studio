import Image from 'next/image';
import styles from './style.module.scss';
import { blogPosts, text } from '@/data/blog';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner } from '@/data/blog';
export default function page() {
  const router = useRouter();
  return (
    <>
      {blogPosts.map(
        (post) =>
          post.id == router.query.id && (
            <>
              {' '}
              <HeroBannerLight data={heroBanner} />
              <div className={styles.Article_page}>
                <div className={styles.wrapper}>
                  <div className={styles.article_label}>{post.name}</div>
                  <p className={styles.sub_label_text}>{post.descrip_1}</p>
                  <div className={styles.picture_block}>
                    <Image width={1240} height={400} src={post.image} alt="" />
                  </div>
                  <div className={styles.sub_label}>{post.sub_label}</div>
                  <p className={styles.last_text}>{post.descrip_2} </p>
                  <div className={styles.more_articles}>
                    <div className={styles.more_articles_label}>Схожі статті</div>
                    <div className={styles.more_articles_card_row}>
                      {blogPosts.map((morePost,i) => {
                        if (post.category == morePost.category && post.id !== morePost.id) {
                          return (
                            <Link href={`/blog/article_page/${morePost.id}`}>
                          <div className={styles.card}>
                            <div className={styles.card_image}>
                              <Image width={1000} height={1000} src={morePost.image} alt="" />
                            </div>
                            <div className={styles.card_label}>{morePost.name}</div>
                            <div className={styles.card_text}>
                             {morePost.descrip}
                            </div>
                            <div className={styles.card_more_info}>
                              <div className={styles.card_views}>{morePost.views}</div>
                              <div className={styles.card_time}>{morePost.timeToRead + ' '+text.time}</div>
                            </div>
                          </div>
                        </Link>
                          )
                        }
                        
                      })}
                    </div>

                    <button className={styles.more_button}>
                      <Link href={'/blog'}>{text.morebtn}</Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ),
      )}
    </>
  );
}
