import Quarter from "./components/Quarter";
import Subject from "./components/Subject";

function App() {
  return (
    <div className="container">
      <div>
        {/* Trimestre 0 */}
        <Quarter
          num={0}
          subject1={<Subject title="cursos complementarios" credits={26} />}
        />
        {/* Trimestre 1 */}
        <Quarter
          num={1}
          subject1={<Subject title="" credits={0} />}
          subject2={<Subject title="cálculo diferencial" credits={11} />}
          subject3={<Subject title="mécanica elemental I" credits={9} />}
          subject4={<Subject title="int. a la computación" credits={9} />}
        />
        {/* Trimestre 2 */}
        <Quarter
          num={2}
          subject1={<Subject title="método experimental I" credits={9} />}
          subject2={
            <Subject
              title="cálculo integral"
              credits={11}
              reqSubjects={["cálculo diferencial"]}
            />
          }
          subject3={
            <Subject
              title="mécanica elemental II"
              credits={9}
              reqSubjects={["mécanica elemental I"]}
            />
          }
          subject4={<Subject title="fund. de programación" credits={9} />}
        />
        {/* Trimestre 3 */}
        <Quarter
          num={3}
          subject1={<Subject title="Estruc. de la materia" credits={9} />}
          subject2={<Subject title="algebra lineal aplicada I" credits={9} />}
          subject3={
            <Subject
              title="mat. discretas I"
              credits={10}
              reqSubjects={["cálculo integral"]}
            />
          }
          subject4={
            <Subject
              title="APALOO"
              credits={9}
              reqSubjects={["fund. de programación"]}
            />
          }
        />
        {/* Trimestre 4 */}
        <Quarter
          num={4}
          subject1={
            <Subject
              title="cálculo de V.V I"
              credits={11}
              reqSubjects={["cálculo integral", "algebra lineal aplicada I"]}
            />
          }
          subject2={<Subject title="algebra lineal aplicada II" credits={10} />}
          subject3={
            <Subject
              title="mat. discretas II"
              credits={10}
              reqSubjects={["mat. discretas I"]}
            />
          }
          subject4={
            <Subject title="APANLOO" credits={11} reqSubjects={["APALOO"]} />
          }
        />
        {/* Trimestre 5 */}
        <Quarter
          num={5}
          subject1={
            <Subject
              title="ecuaciones D.O I"
              credits={9}
              reqSubjects={["cálculo V.V I"]}
            />
          }
          subject2={
            <Subject
              title="probabilidad aplicada"
              credits={9}
              reqSubjects={["cálculo V.V I"]}
            />
          }
          subject3={
            <Subject
              title="teo. mat. de la comp."
              credits={10}
              reqSubjects={["mat. discretas II"]}
            />
          }
          subject4={
            <Subject
              title="bases de datos"
              credits={11}
              reqSubjects={["APANLOO"]}
            />
          }
        />
        {/* Trimestre 6 */}
        <Quarter
          num={6}
          subject1={
            <Subject
              title="métodos numéricos"
              credits={9}
              reqSubjects={["ecuaciones D.O I"]}
            />
          }
          subject2={
            <Subject
              title="estadis. y dis. de exp."
              credits={9}
              reqSubjects={["probabilidad aplicada"]}
            />
          }
          subject3={
            <Subject
              title="arq. de computadoras"
              credits={8}
              reqSubjects={["APANLOO"]}
            />
          }
          subject4={
            <Subject
              title="Análisis y d. s. comp."
              credits={11}
              reqSubjects={["bases de datos"]}
            />
          }
        />

        {/* Trimestre 7 */}
        <Quarter
          num={7}
          subject1={
            <Subject
              title="Ingles Intermedio I"
              credits={10}
              reqSubjects={["pues los básicos"]}
            />
          }
          subject2={
            <Subject
              title="compiladores"
              credits={8}
              reqSubjects={["APANLOO", "teo. mat. de la comp."]}
            />
          }
          subject3={
            <Subject
              title="programación concurrente"
              credits={8}
              reqSubjects={["arq. de computadoras"]}
            />
          }
          subject4={
            <Subject
              title="ingeniería de software"
              credits={11}
              reqSubjects={["Análisis y d. s. comp."]}
            />
          }
        />

        {/* Trimestre 8 */}
        <Quarter
          num={8}
          subject1={
            <Subject
              title="Ingles Intermedio II"
              credits={10}
              reqSubjects={["Ingles Intermedio I"]}
            />
          }
          subject2={
            <Subject
              title="inteligencia artificial"
              credits={10}
              reqSubjects={["APANLOO"]}
            />
          }
          subject3={
            <Subject
              title="sistemas operativos"
              credits={8}
              reqSubjects={["programación concurrente"]}
            />
          }
          subject4={
            <Subject
              title="comp. y su ent. empresarial"
              credits={8}
              reqSubjects={["APANLOO"]}
            />
          }
        />

        {/* Trimestre 9 */}
        <Quarter
          num={9}
          subject1={
            <Subject
              title="Ingles Intermedio III"
              credits={10}
              reqSubjects={["Ingles Intermedio II"]}
            />
          }
          subject2={<Subject title="opt. CBS/CSH I" credits={8} />}
          subject3={
            <Subject
              title="Análisis y Diseño de Alg."
              credits={10}
              reqSubjects={["APANLOO"]}
            />
          }
          subject4={
            <Subject
              title="Redes de Telecom"
              credits={9}
              reqSubjects={["Arq. de computadoras"]}
            />
          }
        />

        {/* Trimestre 10*/}
        <Quarter
          num={10}
          subject1={<Subject title="Opt. Computación" credits={11} />}
          subject2={<Subject title="opt. CBS/CSH II" credits={8} />}
          subject3={<Subject title="Opt. lic. Computación" credits={8} />}
          subject4={<Subject title="Opt. lic. Computación" credits={8} />}
        />

        {/* Trimestre 11*/}
        <Quarter
          num={11}
          subject1={<Subject title="Opt. lic. Computación" credits={11} />}
          subject2={<Subject title="opt. CBS/CSH III" credits={8} />}
          subject3={<Subject title="Opt. CBI" credits={9} />}
          subject4={
            <Subject
              title="Proy. de Inv. I"
              credits={12}
              reqSubjects={["Ingeniería de software", "Sistemas operativos"]}
            />
          }
        />

        {/* Trimestre 12*/}
        <Quarter
          num={12}
          subject1={<Subject title="Opt. lic. Computación" credits={8} />}
          subject2={<Subject title="opt. CBS/CSH IV" credits={8} />}
          subject3={<Subject title="Opt. CBI" credits={9} />}
          subject4={
            <Subject
              title="Proy. de Inv. II"
              credits={12}
              reqSubjects={["Proy. de Inv. I"]}
            />
          }
        />
      </div>
    </div>
  );
}

export default App;
