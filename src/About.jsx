const About = (props) => {
  const aboutItems = props.aboApp;

  return (
    <>
      <div className="about">
        {aboutItems.map((x) => {
          return (
            <>
              <div className="container pt-5">
                
                <div className="row">
                  <div className="pb-5 col-12 col-md-6 ">
                    <div className="container">
                    <h2 className="pt-5 pb-3 fw-bold">
                  {x.h2} <img src={x.img} width="30px" height="30px" />
                </h2>
                      <p>{x.p}</p>
                      <button
                        className="mt-4 hom-btn text-white border-0 p-2 ps-4 pe-4 rounded-pill"
                        type="button"
                      >
                        {x.read}
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="container pb-5 ">
                      <div className="text-center mt-md-4">
                        <img
                          src={x.img1}
                          width="220px"
                          height="220px"
                          className="rounded-circle abo-img"
                        />
                      </div>
                      <div className="text-end">
                        <img
                          src={x.img2}
                          width="150px"
                          height="150px"
                          className="rounded-circle abo-img2"
                        />
                      </div>
                    </div>  
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

export default About;
