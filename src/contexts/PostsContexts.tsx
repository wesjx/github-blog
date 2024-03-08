// import { ReactNode, createContext, useEffect, useState } from "react";
// import { api } from "../lib/axios";

// interface PostProps {
//     name: string;
//     description: string;
//     userName: string;
//     imgUrl: string;
//     followers: number;
// }

// interface PostsContextType {
//     postData: PostProps;
// }

// interface PostProviderProps {
//     children: ReactNode;
// }

// export const PostsContext = createContext<PostsContextType>({
//     postData: {
//         name: "",
//         description: "",
//         userName: "",
//         imgUrl: "",
//         followers: 0
//     }
// });

// export function PostsProvider({ children }: PostProviderProps) {
//     const [postData, setPostData] = useState<PostProps>({
//         name: "",
//         description: "",
//         userName: "",
//         imgUrl: "",
//         followers: 0
//     });

//     async function fetchPosts() {
//         try {
//             const response = await api.get('');
//             const userData = response.data;

//             setPostData({
//                 name: userData.name,
//                 userName: userData.login,
//                 description: userData.bio,
//                 imgUrl: userData.avatar_url,
//                 followers: userData.followers
//             });
//         } catch (error) {
//             console.error('Erro ao buscar os dados:', error);
//         }
//     }

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     return (
//         <PostsContext.Provider value={{ postData }}>
//             {children}
//         </PostsContext.Provider>
//     );
// }
