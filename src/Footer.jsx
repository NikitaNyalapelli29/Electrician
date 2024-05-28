const Footer = (props)=>{
    const footItems=props.footApp;

    return(
        <>
            <div className="foot">
                {
                    footItems.map(function(x){
                        return(
                            <>
                            <div className="container text-white pb-5">
                                <div className=" row pt-5 pb-5">
                                    <div className="col-12 col-md-4">
                                    <i className="bi bi-geo-alt-fill"><span className="ms-3">{x.p}</span></i>
                                    </div>
                                    <div className="col-12 col-md-4">
                                    <i className="bi bi-telephone-fill"><span className="ms-3">{x.call}</span></i>
                                    </div>
                                    <div className="col-12 col-md-4">
                                    <i className="bi bi-envelope-fill"><span className="ms-3">{x.mail}</span></i>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <input type="email" placeholder="Enter Your Email" className="form-control mt-4"/>
                                    </div>
                                    <div className="col-12 col-md-4">
                                    <button type="button" className="hom-btn border-0 text-white ps-5 pe-5 pt-2 pb-2 mt-4">{x.sub}</button>
                                    </div>
                                    <div className="col-12 col-md-4 mt-4">
                                    <i className="bi bi-facebook me-3  fs-2"></i>
                                    <i className="bi bi-twitter me-3 fs-2"></i>
                                    <i className="bi bi-linkedin me-3 fs-2"></i>
                                    <i className="bi bi-instagram  fs-2"></i>
                                    </div>
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

export default Footer;