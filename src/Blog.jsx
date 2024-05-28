const Blog=(props)=>{
    const blogItems=props.blogApp;

    return(
        <>
            <div className="container mb-5 pb-5">
                {
                    blogItems.map(function(x){
                        return(
                            <>
                                <h2 className="text-center mt-5 mb-4 pb-4 fw-bold">{x.h2} <img src={x.img} width="30px" height="30px" /></h2>
                                <div className="row">
                                <div className="col-12 col-md-6 mt-5">
                                        <figure className="width-90">
                                            <img src={x.img1} width="250px" height="250px" className="w-100 hei"/>
                                            <div className="fig-cap">
                                                <h5 className="fw-semibold mt-3">{x.h5}</h5>
                                                <p className="">{x.p}</p>
                                            </div>
                                        </figure>
                                </div>
                                   
                                <div className="col-12 col-md-6 mt-5">
                                        <figure className="width-90">
                                            <img src={x.img2} width="250px" height="250px" className="w-100 hei"/>
                                            <div className="fig-cap">
                                                <h5 className="fw-semibold mt-3">{x.h5}</h5>
                                                <p className="">{x.p}</p>
                                            </div>
                                        </figure>
                                </div>
                                    
                                <div className="col-12 col-md-6 mt-5">
                                        <figure className="width-90">
                                            <img src={x.img3} width="250px" height="250px" className="w-100 hei"/>
                                            <div className="fig-cap">
                                                <h5 className="fw-semibold mt-3">{x.h5}</h5>
                                                <p className="">{x.p}</p>
                                            </div>
                                        </figure>
                                </div>
                                  
                                    
                                <div className="col-12 col-md-6 mt-5">
                                        <figure className="width-90">
                                            <img src={x.img4} width="250px" height="250px" className="w-100 hei"/>
                                            <div className="fig-cap">
                                                <h5 className="fw-semibold mt-3">{x.h5}</h5>
                                                <p className="">{x.p}</p>
                                            </div>
                                        </figure>
                                </div>
                                    
                                </div>
                            </>
                        )
                    })
                }    
            </div>  
        </>
    )
}

export default Blog;