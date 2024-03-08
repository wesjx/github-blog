import { GitlabLogoSimple, Buildings, User } from 'phosphor-react'
import { ProfileContainer, ProfileContent, ProfileSocialMedia } from './styles'
import { useEffect, useState } from 'react'
import { apiProfile } from '../../../lib/axios';

interface ProfileTypes {
    name: string;
    description: string;
    userName: string;
    imgUrl: string;
    followers: number;
}

export function Profile() {
    const [profileData, setProfileData] = useState<ProfileTypes>({
        name: "",
        description: "",
        userName: "",
        imgUrl: "",
        followers: 0
    });

    async function fetchProfile() {
        try {
            const response = await apiProfile.get('');
            const userData = response.data;

            setProfileData({
                name: userData.name,
                userName: userData.login,
                description: userData.bio,
                imgUrl: userData.avatar_url,
                followers: userData.followers
            });
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <ProfileContainer>
            <img src={profileData.imgUrl} alt="" />
            <ProfileContent>
                <h2>{profileData.name}</h2>
                <p>{profileData.description}</p>
                <ProfileSocialMedia>
                    <p><GitlabLogoSimple/> {profileData.userName}</p>
                    <p><Buildings/>Home gallery</p>
                    <p><User/>{profileData.followers} Followers</p>
                </ProfileSocialMedia>
            </ProfileContent>
        </ProfileContainer>
    )
}