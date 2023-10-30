import * as S from './styles'
import { AdminLogo } from '@/components/admin-logo';
import { NavigationMenu } from '../navigation-menu';

function Sidebar() {
    return (
        <S.Sidebar>
            <AdminLogo/>
            <NavigationMenu/>
        </S.Sidebar>
    )
}

export { Sidebar };