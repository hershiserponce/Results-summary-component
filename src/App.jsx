import { data } from "./assets/data";

const App = () => {
  return (
    <section className="containerSumary">
      <section className="containerYourResult">
        <span className="titleSection">Your Result</span>
          <div className="containerContainerResult">
        <div className="containerResult">
          <span className="score">76</span>
          <span className="range">of 100</span>
        </div>
          </div>

        <span className="great">Great</span>
        <div className="ContainerScoreText">
        <p className="scoreText">
          You scored higher that 65% of the people who have taken these tests.
        </p>
        </div>
      </section>

      <section className="containerSumaryItems">
        <div className="sumary">Sumary</div>
        {data.map((data, index) => (
          <div className={`containerMapSumary color-${index + 1}`} key={data.score}>
            <div className="section1Map">
              <img src={data.icon} alt="" />
              <div className={`category color-${index + 1}`}>{data.category}</div>
            </div>
            <div className="section2Map">
              <div>{data.score}</div>
              <div className="s100"> /100</div>
            </div>

          </div>
        ))}

        <button className="btnSubmit">Continue</button>
        
      </section>
    </section>
  );
};

export default App;
