import ButtonWrap from "./styled";

const Button = ({ children, onClick }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

export default Button;
