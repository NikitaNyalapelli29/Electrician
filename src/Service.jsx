const Service = (props) => {
  const servItems = props.servApp;
  return (
    <>
      <div className="container mb-5">
        {servItems.map(function (x) {
          return (
            <>
              <h2 className="text-center mt-5 mb-5 fw-bold">
                {x.h2}
                <i>
                  <img src={x.h_img} width="30px" height="30px" />
                </i>
              </h2>
              <div className="row text-center mb-5">
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <section className="width-90 ser-box p-4">
                    <img src={x.img1} width="90px" height="90px" />
                    <h5 className="mt-4">{x.h5_1}</h5>
                    <p className="serv-p text-secondary">{x.p1}</p>
                  </section>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <section className="width-90 ser-box p-4">
                    <img src={x.img2} width="90px" height="90px" />
                    <h5 className="mt-4">{x.h5_2}</h5>
                    <p className="serv-p text-secondary">{x.p2}</p>
                  </section>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <section className="width-90 ser-box p-4">
                    <img src={x.img3} width="90px" height="90px" />
                    <h5 className="mt-4">{x.h5_3}</h5>
                    <p className="serv-p text-secondary">{x.p3}</p>
                  </section>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <section className="width-90 ser-box p-4">
                    <img src={x.img4} width="90px" height="90px" />
                    <h5 className="mt-4">{x.h5_4}</h5>
                    <p className="serv-p text-secondary">{x.p4}</p>
                  </section>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mt-5">
                  <section className="width-90 ser-box p-4">
                    <img src={x.img5} width="90px" height="90px" />
                    <h5 className="mt-4">{x.h5_5}</h5>
                    <p className="serv-p text-secondary">{x.p5}</p>
                  </section>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Service;
