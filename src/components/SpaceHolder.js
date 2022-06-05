import { SHWrapper } from "./styled/SpaceHolder.styled";

const SpaceHolder = ({ children }) => {
    return (
        <SHWrapper>{children}</SHWrapper>
    );
}
 
export default SpaceHolder;