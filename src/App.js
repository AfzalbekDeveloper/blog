import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
       <div className="upper">
        <div className="rightside">
          Start bootstrap
        </div>
        <div className="leftside">
          <ul className="navbarUl">
            <li className='navbarli'><a href="#" className='navbarA'>Home</a></li>
            <li className='navbarli'><a href="#" className='navbarA'>About</a></li>
            <li className='navbarli'><a href="#" className='navbarA'>Contact</a></li>
            <li className='navbarli'><a href="#" className='navbarA mute'>Blog</a></li>
          </ul>
        </div>
       </div>

       <header>
        <h1 className='headerText'>Welcome to Blog Home!</h1>
        <p className='headerP'>A Bootstrap 5 starter layout for your next blog homepage</p>
       </header>

       <div className="flexContent">
        <div className="leftFlex">
          <div className="cardBig">
            <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
            <p className='dateBig'>January 1, 2023</p>
            <h2 className='bigH1'>Featured Post Title</h2>
            <p className='bigP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a<br/>laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <a class="btn btn-primary firstBtn" href="#!">Read more →</a>
          </div>
<div className="obshiy">
          <div class="row">
                        <div class="col-lg-6">
                            
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                           
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        <nav aria-label="Pagination">
                        <hr />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li className="page-item"><a class="page-link" href="#!">2</a></li>
                            <li className="page-item"><a class="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li className="page-item"><a class="page-link" href="#!">15</a></li>
                            <li className="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
        </div>


        <div className="rightFlex">
        <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
        </div>
       </div>



       <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;
