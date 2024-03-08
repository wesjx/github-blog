import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin: -5rem auto;
    height: 13.25rem;
    width: 54rem;
    border-radius: 10px;
    background: ${props => props.theme['base-post']};
    display: flex;
    position: relative;

    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    img{
        width: 9.25rem ;
        height: 9.25rem;
        margin: 2rem;
        border-radius: 10px;

    }
`
export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem 2rem 0;

    h2{
        padding-bottom: 0.5rem
    }

    p{
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
`

export const ProfileSocialMedia = styled.div`
    display: flex;
    gap: 1.5rem;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
`