import React, { useEffect, useState } from 'react';
import { HiOutlineSparkles } from "react-icons/hi";
import Input from './Input';
import Post from './Post';
import { onSnapshot, collection, query, orderBy, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import {PostProps} from './Post'

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className='sm:ml-[81px] xl:ml-[340px] w-[900px] min-h-screen  text-white py-2'>
      <div className='sticky justify-center text-[#1d9bf0] top-0 flex font-medium text-[1.5rem] px-4 py-2'>
        Collaborate and Q/A
        {/* <HiOutlineSparkles /> */}
      </div>

      <Input />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data() as PostProps['post']} />
      ))}

    </div>
  );
};

export default Feed;