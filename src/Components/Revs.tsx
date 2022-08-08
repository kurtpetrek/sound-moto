import React, { useEffect, useState } from "react";

const Revs = ({ positionData }) => {
  const [positionDataArray, setPositionDataArray] = useState<any>([]);

  useEffect(() => {
    setPositionDataArray((data) => [...data, positionData]);
  }, [positionData]);

  return <div>{JSON.stringify(positionDataArray)}</div>;
};

export default Revs;
