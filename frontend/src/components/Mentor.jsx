const Mentor = ({ sendData }) => {
  const handleClick = () => {
    sendData("Rahul");   // sending data to parent
  };
  return (
    <button onClick={handleClick}>
      Send Data to Parent
    </button>
  );
};
export default Mentor;
