import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="#4d52a9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4d52a9"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      ;
    </div>
  );
};
