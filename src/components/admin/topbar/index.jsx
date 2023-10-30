import * as S from './styles'
import { ProfileButton } from '@/components/profile-button';

function Topbar() {
    return (
        <S.Topbar>
            <ProfileButton />
        </S.Topbar>
    )
}

export { Topbar };