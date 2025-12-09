import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <div className="container-fluid blog-label">
      <div
        className="container d-flex align-items-center justify-content-between p-3"
      >
        <h2>Blog</h2>
        <Link to="" className="nav-link">Blog</Link>
      </div>
    </div>


    <div className="container box p-5">
      <div className="col-md-12">
        <div className="row justify-content-evenly">
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0002_shutterstock_1449574139-600x417.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Duis sagitis ipsum prasent</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0000_shutterstock_1924418081-1024x711.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Tortor neque adpiscing diam</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row justify-content-evenly">
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0004_shutterstock_582264496-1024x711.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Tortor neque adpiscing diam</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0003_shutterstock_785154337-600x417.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Vestibulum sapin prin quam</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="row justify-content-evenly">
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0005_shutterstock_559055305-768x533.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Litora torqent per conubia</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-contant">
              <img
                src="https://gbackpack.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0001_shutterstock_1740836306-768x533.png"
                alt=""
                className="img-fluid w-100 rounded"
              />
            </div>
            <div className="details">
              <h3>Praesent libro se cursus ante</h3>
              <p>Tips - 0 comments</p>
              <p>
                The image features a neatly designed blue backpack placed
                upright, showcasing its clean and modern look. Its structured
                shape and smooth texture give it a practical yet stylish
                appearance, making it suitable for school, travel, or everyday
                use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Blog
