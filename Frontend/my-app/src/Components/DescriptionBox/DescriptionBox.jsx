import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Descripition</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Elevate your online shopping experience with a sleek and user-friendly platform designed to showcase the latest fashion trends. Our website boasts a visually stunning interface, ensuring an immersive browsing experience for customers. Seamlessly integrated with secure payment gateways, it guarantees a hassle-free checkout process. Explore a diverse range of high-quality apparel, from casual wear to formal attire, presented through vibrant images and detailed product descriptions. With responsive design, our website adapts seamlessly to various devices, ensuring accessibility for shoppers on the go. Join us in creating a stylish and dynamic online marketplace that caters to the fashion-forward consumer.</p>
       <p>Discover personalized style recommendations with our intelligent algorithm, making shopping a breeze. Stay in the fashion loop with real-time updates on new arrivals and exclusive deals. Enjoy a seamless customer support experience, with live chat assistance and a comprehensive FAQ section. Immerse yourself in a world of fashion with our blog, featuring style guides and industry insights to keep you informed and inspired.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
