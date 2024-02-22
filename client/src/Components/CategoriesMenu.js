import React from 'react';

const CategoriesMenu = () => {
  return (
    <div className="    ">
      <div className="categories">
        <ul id="nav">
          <li>
            Categories <i className="fa fa-bars"></i>
            <ul>
              <li><a href="#"><i className="fa fa-male"></i> Automotive Professionals</a></li>
              <li><a href="#"><i className="fa fa-clock-o"></i> Civil & Construction Engineering<i className="fa fa-angle-right icon-right"></i></a></li>
              <li><a href="#"><i className="fa fa-home"></i> Consultants  <i className="fa fa-angle-right icon-right"></i></a></li>
              <li><a href="#"><i className="fa fa-desktop"></i>Education Field <i className="fa fa-angle-right icon-right"></i></a></li>
              <li><a href="#"><i className="fa fa-mobile"></i> Engineering Industries</a></li>
              <li><a href="#"><i className="fa fa-laptop"></i> Farming & Agriculture <i className="fa fa-angle-right icon-right"></i></a></li>
              <li><a href="#"><i className="fa fa-lightbulb-o"></i> Food & Accommodation Industry<i className="fa fa-angle-right icon-right"></i></a></li>
              <li><a href="#"><i className="fa fa-volume-up"></i>Handicrafts & Artisans</a></li>
              <li><a href="#"><i className="fa fa-heart-o"></i> IT & ITES Services</a></li>
              <li><a href="#"><i className="fa fa-wheelchair"></i> Gym & Fitness</a></li>
              <li><a href="#"><i className="fa fa-wheelchair"></i> Media & Events</a></li>
              <li className="last-li"><a href="#">View all categories</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoriesMenu;
