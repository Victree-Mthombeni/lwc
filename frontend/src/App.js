import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Footer from "./components/Footer/Footer";
import Brands from "./components/Brands/Brands";
function App() {
  return (
    <div className="App">
      <Header></Header>
        <Hero></Hero>
        <WhatWeDo></WhatWeDo>
      <CaseStudies></CaseStudies>
        <Brands></Brands>
        <Footer></Footer>

    </div>
  );
}

export default App;
