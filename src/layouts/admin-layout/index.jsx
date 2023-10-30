import * as S from './styles'
import { Topbar } from '@/components/admin/topbar';
import { Sidebar } from '@/components/admin/sidebar';
import { Admin } from '@/components/admin';

function AdminLayout() {
    return (
        <S.AdminLayout>
            <Topbar/>
            <Sidebar/>
            <Admin/>
        </S.AdminLayout>
    )
}

export { AdminLayout };