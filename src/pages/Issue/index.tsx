import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiPostsIssueFull } from "../../lib/axios";
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostContent, PostInfoContainer } from "./styles";
import Markdown from "react-markdown";

interface Post {
    user: {
        html_url: string,
        login: string
    }
    id: number;
    title: string;
    created_at: string;
    body: string;
    comments: string;
}

export function Issue() {
    const { postNumber } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await apiPostsIssueFull.get(`/${postNumber}`); // Concatene o ID do post à URL da API
                const postData: Post = response.data;
                setPost(postData);
            } catch (error) {
                console.error('Erro ao buscar os dados do post:', error);
            }
        };

        fetchPost();
    }, [postNumber]);

    if (!post) {
        return <div>Carregando...</div>;
    }

    console.log(post);

    return (
        <div>
            <PostInfoContainer>
                <header>
                    <a href="/"> <CaretLeft size={20}/>BACK</a>
                    <a href={post.user.html_url}>GITHUB <ArrowSquareOut size={20}/> </a>
                </header>

                <h2>{post.title}</h2>

                <div>
                    <p><GithubLogo size={19}/> {post.user.login}</p>
                    <p><Calendar size={19}/> {formatDistanceToNow(new Date(post.created_at), { locale: ptBR, addSuffix: true })}</p>
                    <p><ChatCircle size={19}/> {post.comments} Coments</p>
                </div>
            </PostInfoContainer>

            <PostContent>
                <Markdown>
                    {post.body}
                </Markdown>
            </PostContent>
        </div>
    );
}
