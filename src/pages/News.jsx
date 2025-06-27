import React from "react";
import "./news.css";

import news1 from "../assets/simba-files/news-01.jpg";
import news2 from "../assets/simba-files/news-02.jpg";
import news3 from "../assets/simba-files/news-03.jpg";

function NewsSection() {
  return (
    <div className="news-section container">
      <h2 className="section-title">
        news, announcements <br /> and press releases.
      </h2>

      <div className="news-container">
        {/* Left: Featured News */}
        <div className="featured-news">
          <div className="featured-wrapper">
            <img src={news1} alt="News 1" className="featured-image" />
            <div className="featured-overlay">
              <div className="featured-date">29 Aug, 2023</div>
              <div className="featured-caption">
                Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group
              </div>
            </div>
          </div>
        </div>

        {/* Right: Small News List */}
        <div className="small-news-list">
          {/* News item 1 */}
          <div className="small-news-item">
            <img src={news2} alt="News 2" className="small-image" />
            <div className="small-text">
              <div className="small-date">29 Aug, 2023</div>
              <div className="small-caption">
                Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group
              </div>
            </div>
          </div>

          {/* News item 2 */}
          <div className="small-news-item">
            <img src={news3} alt="News 3" className="small-image" />
            <div className="small-text">
              <div className="small-date">15 May, 2023</div>
              <div className="small-caption">
                Africab Group Launches Solar-Powered Manufacturing Unit in Dar Es Salaam
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
