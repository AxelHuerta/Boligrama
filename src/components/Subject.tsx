type Props = {
  title: string;
  credits: number;
  reqSubjects?: string[];
};

function Subject({ title, credits, reqSubjects }: Props) {
  // ordenar las materias seriadas
  const takeReqSubjects = () => {
    // si no hay materias seriadas
    if (reqSubjects == null) return " ";
    // si hay materias seriadas
    let reqSubjectsArray = "[";
    reqSubjects?.map((reqS) => (reqSubjectsArray += `${reqS}, `));
    reqSubjectsArray = reqSubjectsArray.slice(0, -2);
    reqSubjectsArray += "]";

    return reqSubjectsArray;
  };

  if (credits == 0) {
    return (
      <>
        <div
          className="rounded-md py-2 px-3"
          style={{
            width: "300px",
            background: "rgba(0,0,0,0)",
          }}
        ></div>
      </>
    );
  }

  return (
    <>
      <div
        className="rounded-md py-2 px-3"
        style={{
          width: "300px",
          background: "#585b70",
        }}
      >
        <p className="title is-5 uppercase font-bold text-center">{title}</p>
        <div className="columns">
          {/* créditos */}
          <p className="column">{credits}</p>
          {/* seriado */}
          <p className="column">{takeReqSubjects()}</p>
        </div>
      </div>
    </>
  );
}

export default Subject;
