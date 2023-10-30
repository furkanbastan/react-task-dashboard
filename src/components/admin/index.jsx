import * as S from './styles'
import { Outlet, useNavigation } from "react-router-dom";

function Admin() {
    const navigation = useNavigation();

    return (
        <S.Admin $element="main" $isLoading={navigation.state !== "idle"}>
            <Outlet/>
        </S.Admin>
    )
}

export { Admin };