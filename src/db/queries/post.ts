import type { Post } from "@prisma/client";
import { db } from "..";
import { string } from "zod";
export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};
// alternative type names and query definations
// export type PostWithData=Awaited<ReturnType<typeof fetchPostByTopicSlug>>[number]

export function fetchPostByTopicSlug(slug: string):Promise<PostWithData[]> {
  return db.post.findMany({
    where: {
      topic: { slug: slug },
      
    },
    include:{
        topic:{select:{slug:true}},
        user:{select:{name:true}},
        _count:{select:{comments:true}}
      }
  });
}


export function fetchTopPosts():Promise<PostWithData[]>{
  return db.post.findMany({
    orderBy:[
      {
        comments:{
          _count:"desc"
        }
      }
    ],
    include:{
      topic:{select:{slug:true}},
      user:{select:{name:true,image:true}},
      _count:{select:{comments:true}}

    },
    take:5

  })

}