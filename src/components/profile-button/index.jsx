import * as S from './styles';

function ProfileButton() {
    return (
        <S.ProfileButton>
            <S.Image 
                src='https://avatars.githubusercontent.com/u/121354889?v=4'
                alt='Furkan Baştan'
            />
            <S.Content>
                <S.Text>Furkan Baştan</S.Text>
                <S.Subtitle>Admin</S.Subtitle>
            </S.Content>
        </S.ProfileButton>
    )
}

export { ProfileButton };