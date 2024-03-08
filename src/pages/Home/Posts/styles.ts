import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 54rem;
    margin: 8rem auto;
`

export const PostHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    input{
        border: 0;
        border: 1px solid ${props => props.theme['base-border']};
        background: transparent;
        color: ${props => props.theme['base-title']};
        padding: 0.75rem;
        border-radius: 10px;
    }
`

export const PostContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

    a {
        text-decoration: none;
        color: ${(props) => props.theme['base-text']};
    }
`
export const PostItem = styled.div`
    width: 26rem;
    height: 16.25rem;
    background: ${props => props.theme['base-post']};
    border: 1px solid ${props => props.theme['base-post']};
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.theme['blue']};
    }

    header {
        display: flex;
        justify-content: space-between;
        padding: 2rem;

        h2{
            padding-right: 1rem;
            text-overflow: ellipsis;
        }
    }

    p{
        padding: 0 2rem 2rem 2rem;
        height: 7rem;
        margin-right: 1rem;text-overflow: ellipsis;
        max-width: 100%;
        overflow: hidden;
        white-space: pre;
    }
`