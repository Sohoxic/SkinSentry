import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening related to Skin Cancer, <br /> Know more about it.</h1>
    </div>
    <div className="">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog01} date="" text={"Skin Cancer Facts & Statistics:\n- More than 2 people die of skin cancer in the U.S. every hour."} url={"https://www.skincancer.org/skin-cancer-information/skin-cancer-facts/"} />
      
        <Article imgUrl={blog02} date="" text={"Risk Factors and Prevention :\n- Reducing exposure to UV radiation, lowers the risk of developing skin cancer. "} url={"https://www.cancer.net/cancer-types/skin-cancer-non-melanoma/risk-factors-and-prevention"} />
        <Article imgUrl={blog03} date="Sep 26, 2021" text={"Treatment for skin cancer:\n- Learn about the various treatments available to treat Skin Cancer. "} url={"https://www.cancerresearchuk.org/about-cancer/skin-cancer/treatment"}/>
        {/* <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
        {/* <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
    </div>
  </div>
);

export default Blog;
