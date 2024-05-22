import { Oval } from 'react-loader-spinner';

export default function loader() {
  return (
    <div>
      <Oval
        height={50}
        width={50}
        color="red"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="pink"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
