import { PostType } from "./PaginateSetup";

interface PropsType {
  loading: boolean;
  posts: PostType[];
}

function Products({ posts, loading }: PropsType) {
  return (
    <>
      {!loading ? (
        posts.map((item: PostType, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt="404" />
          </div>
        ))
      ) : (
        <span>loading...</span>
      )}
    </>
  );
}

export default Products;
