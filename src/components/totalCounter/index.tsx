const TotalCounter = ({
  knownQuestion,
  listLength,
}: {
  knownQuestion: number;
  listLength: number;
}) => {
  return (
    <div>
      {knownQuestion} / {listLength}
    </div>
  );
};

export default TotalCounter;
