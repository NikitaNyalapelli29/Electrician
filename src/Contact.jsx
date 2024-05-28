const Contact = (props)=>{
    const contItems= props.contApp;

    return(
        <>
            <div className="container mb-5">
                {
                    contItems.map(function(x){
                        return(
                            <>
                                <h2 className="text-center mt-5">{x.h2} <img src={x.img} width="30px" height="30px" /></h2>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <input type="text" placeholder="Name" className="form-control mt-5 in"/>
                                        <input type="email" placeholder="Email" className="form-control mt-3 in"/>
                                        <input type="number" placeholder="Phone Number" className="form-control mt-3 in" />
                                        <textarea placeholder="Message" cols={10} rows={6}  className="form-control mt-3 in"></textarea>
                                        <button type="button" className=" text-white hom-btn border border-0 mt-3 pt-2 pb-2 ps-5 pe-5 mb-5 in rounded">{x.send}</button>
                                   </div>
                                    <div className="col-12 col-md-6 mt-5">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.800719558723!2d73.78405977574012!3d18.507420981896995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb732af849d%3A0xd4078b48b3fe44f0!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715527238949!5m2!1sen!2sin" width="300px" height="450px" className="frame"></iframe>
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

export default Contact;