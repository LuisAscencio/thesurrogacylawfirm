import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import BlogList from  '../home-one/BlogList'
import blogData from '../../../data/Blog/blog'
  
  
const Blog = () => {
    return (
		<section className="blog-section" id="blog"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					smallTitle="Our Blog" 
					title="Latest News " 
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        blogData.reverse().slice(0,3).map(blog =>(
 
                            <BlogList 
                            key={blog.id} 
                            id={blog.id} 
                            thumb={blog.thumb} 
                            title={blog.title} 
                            excerpt={blog.excerpt} 
                            author={blog.author} 
                            publishDate={blog.publishDate} 
                            tag={blog.tag}  
                            commentCount={blog.commentCount} />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Blog;