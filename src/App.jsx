import { useState, useEffect } from 'react';
const App = () => {
  const [data, setData] = useState([]);
  console.log("data", data);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('../assets/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener y analizar el JSON:', error);
      }
    };
  
    getData();
  }, []);
  return (
   <section className="containerSumary">

<section className="containerYourResult">
<span>Your Result</span>
<div className="containerResult">
  <span>76</span>
  <span>of 100</span>
</div>

<span>Great</span>
<p>You scored higher that 65% of the people who have taken these tests.</p>
</section>

<section className="containerSumaryItems">
<span>Sumary</span>

</section>

   </section>
  )
}

export default App