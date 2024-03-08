import { useEffect, useState } from "react";
import { apiPostsIssue } from "../../../lib/axios";
import { PostContainer, PostContent, PostHeader, PostItem } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

interface PostProps {
    id: number;
    title: string;
    created_at: string;
    body: string;
    number: number
}

export function Posts() {
    const [postIssue, setPostIssue] = useState<PostProps[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function fetchPosts() {
        try {
            const response = await apiPostsIssue.get('');
            const issue = response.data.items;

            setPostIssue(issue)
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }


    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = postIssue.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.body && post.body.toLowerCase().includes(searchTerm.toLowerCase()))
    );


    return (
        <PostContainer>
            <PostHeader>
                <div>
                    <h2>Posts</h2>
                    <span>{postIssue.length} Posts</span>
                </div>
                <input
                    type="text"
                    placeholder="Search content"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </PostHeader>

            <PostContent>
                {filteredPosts.map((issue) => {
                    return (
                        <Link key={issue.id} to={`${issue.number}`}>
                            <PostItem>
                                <header>
                                    <h2>{issue.title}</h2>
                                    <span>{formatDistanceToNow(new Date(issue.created_at), { locale: ptBR, addSuffix: true })}</span>
                                </header>

                                <p>
                                    {issue.body}
                                </p>
                            </PostItem>
                        </Link>
                    )
                })}

            </PostContent>

        </PostContainer>
    )
}