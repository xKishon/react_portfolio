import { BsArrowDownSquareFill } from 'react-icons/bs';

const Home = () => {


  return (
    <>
      <div className="container-fluid" id="container_Home">
        <div className="row vh-100">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-white display text-center">
              Hello i'm <span className="text_main" id="name_landing">Davide Lobascio</span>.
            </h1>
            <h3 className="text-white text-center">I'm a Full-Stack web developer</h3>
            <BsArrowDownSquareFill
              className="fs-1 text-white mt-4"
              id="arrow_down_landing"
              type="button"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
