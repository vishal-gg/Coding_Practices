
type PropsType = {
    error: string;
}

const Error = ({ error } : PropsType) => {
  return (
    <div data-testid="errorMsg" className="bg-red-100 text-red-500 text-center p-5 my-5">
      {error}
    </div>
  );
};

export default Error;
