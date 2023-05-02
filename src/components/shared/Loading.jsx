import spinner from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div className="flex-center">
      <img src={spinner} alt="loading" style={{ width: "120px" }} />
    </div>
  );
};

export default Loading;
