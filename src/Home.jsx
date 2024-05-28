const Home = (props) => {
  const homeItems = props.homeApp;
  return (
    <>
      <div className="home">
        {homeItems.map(function (x) {
          return (
            <>
              <div className="container text-center row">
                <div className="col-12 col-md-6 pb-md-5">
                  <h1 className="display-3 fs-md-2 p-3 pt-5 fw-bold text-uppercase">
                    {x.h1}
                  </h1>
                  <p className="p-3 pt-0">{x.p}</p>
                  <button
                    type="button"
                    className=" text-white hom-btn border border-0 pt-2 pb-2 ps-4 pe-4 rounded-pill"
                  >
                    {x.cont}
                  </button>
                </div>
                <div className="pb-5 col-12 col-md-6">
                  <div className="container">
                    <img
                      src={x.img}
                      width="270px"
                      height="270px"
                      className="rounded-circle mt-5 bor-img"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
