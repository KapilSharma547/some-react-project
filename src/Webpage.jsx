import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Webpage = () => {
    return (
        <React.Fragment>
            <h1 className='text-center text-danger text-capitalize my-5px' > Welcome to my Website </h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="card" >
                            <img src="https://picsum.photos/id/1019/367/267" class="card-img-top" alt="..."
                                height='350px'
                            />
                            <div class ="card-body">
                            <h5 class ="card-title">Card title</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div class="card" >
                            <img src="https://picsum.photos/id/1025/367/267" class="card-img-top" alt="..."
                            height='350px' />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" >
                            <img src="https://picsum.photos/id/1011/367/267" class="card-img-top" alt="..."
                                height='350px'
                            />
                            <div class ="card-body">
                            <h5 class ="card-title">Card title</h5>
                            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
}
export default Webpage;