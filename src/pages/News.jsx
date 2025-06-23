import React from "react";
import "./news.css";

import news1 from "../assets/simba-files/news-01.jpg";
import news2 from "../assets/simba-files/news-02.jpg";
import news3 from "../assets/simba-files/news-03.jpg";

function NewsSection() {
  return (
    <div className="news-section container">
      <h2 className="section-title" id="bew">
        news, announcements <br /> and press releases.
      </h2>

      <div className="news-container">
        {/* Left Featured News */}
        <div className="featured-news">
          <div className="featured-image-wrapper">
            <img src={news1} alt="News 1" className="featured-image" />
          </div>

          <div className="featured-bottom">
            <div className="featured-date">29 Aug, 2023</div>
            <div className="featured-title">
              Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During
              Official Visit to Africab Group
            </div>
          </div>
        </div>

        {/* Right Small News */}
        <div className="small-news-list">
          <div className="small-news-item">
            <div className="small-image-container">
              <img src={news2} alt="News 2" className="small-news-image" />
              <div className="small-date">29 Aug, 2023</div>
            </div>
            <div className="small-title">
              <div className="small-date">29 Aug, 2023</div>
              Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During
              Official Visit to Africab Group
            </div>
          </div>

          <div className="small-news-item">
            <div className="small-image-container">
              <img src={news3} alt="News 3" className="small-news-image" />
              <div className="small-date">29 Aug, 2023</div>
            </div>
            <div className="small-title">
              Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During
              Official Visit to Africab Group
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;