import styled from "styled-components";

export const PostInfoContainer = styled.div`
    margin: -5rem auto;
    height: 13.25rem;
    width: 54rem;
    padding: 2rem;
    border-radius: 10px;
    background: ${props => props.theme['base-post']};
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;

    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    header{
        display: flex;
        justify-content: space-between;

        a{
            text-decoration: none;
            color: ${props => props.theme['blue']};
            display: flex;
            gap: 0.5rem;

            &:hover{
               text-decoration: underline;
            }
        }
    }

    div {
        display: flex;
        gap: 2rem;

        p {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`


export const PostContent = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 54rem;
    margin: 9rem auto;
    line-height: 1.6;

        h1, h2, h3 {
            padding: 1rem 0;
        }

        strong {
            font-weight: 400;
        }

        img {
            width:  -webkit-fill-available;
            padding: 1rem 0;
        }
    
`


// export const  = styled.``