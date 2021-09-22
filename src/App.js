import './App.css';
import Footer from './Components/Footer.js';
import Content from './Components/Content.js';
import styles from './css/styles.min.css';
import picture from './img/Christoph_Berger.png';

function App() {
  return (
    <div class="App">
<div class={styles.container}>
        <h1 class="d-block d-sm-flex d-xl-flex flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xl-center align-items-xl-end">Christoph Berger</h1>
    </div>
    <div>
        <nav class="navbar navbar-light navbar-expand-md navigation-clean">
            <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Home</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="files/CV_ChristophBerger.pdf">CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-6 float-left align-self-start"><img class="rounded-circle img-fluid float-right d-xl-flex align-items-xl-center" src={picture} width="50%" alt="Profile" height="50%"/></div>
                <Content/>
            </div>
        </div>
    </div>
    <Footer/>
    <script src="./js/jquery.min.js"></script>
    <script src="./bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
