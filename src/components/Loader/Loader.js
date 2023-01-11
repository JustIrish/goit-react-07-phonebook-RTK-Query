import { Oval } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <Oval
      height={14}
      width={14}
      color="#000000"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#979191"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </SpinnerWrapper>
);
