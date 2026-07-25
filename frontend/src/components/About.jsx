import React from 'react'

function About() {
  return (
    <>
   <>
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container">
      <div className="about_section_2">
        <div className="row">
          <div className="col-md-6">
            <div className="image_iman">
              <img src="images/about-img.png" className="about_img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_taital_box">
              <h1 className="about_taital">
                About <span style={{ color: "#fe5b29" }}>Us</span>
              </h1>
              <p className="about_text">
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All
                the Lorem Ipsum generators on the Internet tend to repeat
                predefined going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined{" "}
              </p>
              <div className="readmore_btn">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</>


      
    </>
  )
}

export default About