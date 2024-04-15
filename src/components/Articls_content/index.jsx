import { text } from '@/data/blog';
import Article_card from '../ArticleCard';
export default function Articls_content({ blogPost }) {
  return (
    <>
      {blogPost.length > 0 ? (
        blogPost.map((post) => (
          <Article_card
            key={post.id + 'Cards'}
            id={post.id}
            name={post.name}
            views={post.views}
            date={post.date}
            descrip={post.descrip}
            timeToRead={post.timeToRead}
            categoryName={post.categoryName}
            image={post.image}
            category={post.category}
          />
        ))
      ) : (
        <h2
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            flex: '1 1 auto',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {text.notFound}
        </h2>
      )}
    </>
  );
}
