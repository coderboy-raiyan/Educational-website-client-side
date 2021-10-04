import { useEffect, useState } from "react";

const useCoruses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return [courses, setCourses];
};

export default useCoruses;
