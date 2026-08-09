import React from 'react'

const Gallery = () => {
  return (
    <>


    
  {/* about section end */}
  <div className="search_section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="search_taital">Search Your Best Cars</h1>
          <p className="search_text">
            Using 'Content here, content here', making it look like readable
          </p>
          {/* select box section start */}
          <div className="container">
            <div className="select_box_section">
              <div className="select_box_main">
                <div className="row">
                  <div className="col-md-3 select-outline">
                    <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                      <option value="" disabled="" selected="">
                        Any Brand
                      </option>
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                      <option value={3}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-3 select-outline">
                    <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                      <option value="" disabled="" selected="">
                        Any type
                      </option>
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                      <option value={3}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-3 select-outline">
                    <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                      <option value="" disabled="" selected="">
                        Price
                      </option>
                      <option value={1}>Option 1</option>
                      <option value={2}>Option 2</option>
                      <option value={3}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <div className="search_btn">
                      <a href="#">Search Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* select box section end */}
        </div>
      </div>
    </div>
  </div>


  {/* gallery section start */}
  <div className="gallery_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="gallery_taital">Our best offers</h1>
        </div>
      </div>
      <div className="gallery_section_2">
        <div className="row">
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-1.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-2.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-3.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_section_2">
        <div className="row">
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-1.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-2.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery_box">
              <div className="gallery_img">
                <img src="images/img-3.png" />
              </div>
              <h3 className="types_text">Toyota car</h3>
              <p className="looking_text">Start per day $4500</p>
              <div className="read_bt">
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Gallery
