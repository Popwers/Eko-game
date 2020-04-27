import Logo from "../UI/LogoEko";
import ButtonNav from "../UI/ButtonNav";
import Input from "../UI/Input";
import Label from "../UI/Label";
import NbrJoueurs from "../UI/IndiceNbrJoueurs";
import TitrePage from "../UI/TitrePage";
import { Spacer } from '../design/designComponents';

export default (props) => {
    return (
        <>
            <Spacer>
                <Logo />
            </Spacer>

            <Spacer>
                <NbrJoueurs
                    JoueursCo={2}
                    JoueursTotal={6}
                />
            </Spacer>

            <Spacer>
                <TitrePage
                    codeRoom='#IEIIA'
                />
            </Spacer>
            

        </>
    );
}
