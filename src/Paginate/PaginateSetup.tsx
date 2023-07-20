import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import Paginate from './Paginate';


export interface PostType {
  id: number;
  title: string;
  thumbnail: string;
};

function PaginateSetup() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true)
      const resData = await axios.get('https://dummyjson.com/products')
      setPosts(resData.data.products)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  // get all posts to show on single page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div style={{padding: '1rem'}}>
      <Paginate postPerPage={postsPerPage} totalPost={posts.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Products loading={loading} posts={currentPost} />
    </div>
  )
}

export default PaginateSetup;
