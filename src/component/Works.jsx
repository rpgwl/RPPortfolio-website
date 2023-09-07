import "./Works.css"
import img1 from '../assets/portfolio-1.png'
import img2 from '../assets/portfolio-2.png'
import img3 from '../assets/portfolio-3.png'
import img4 from '../assets/portfolio-4.png'
import img5 from '../assets/portfolio-5.png'
import img6 from '../assets/portfolio-6.png'

export default function Works(){
  return(
    <section id='works'>
      <h2 className='worktitle'>My Portfolio</h2>
      <span className='workdesc'>I take a pride in paying the attention to the smallest details and making sure thet my work is pixel perfect. i am excited to bring m skills and experience to help buisnesses achieve their goals and create a strong online presence</span>
      <div className='workimgs'>
        <img src={img1} className='workimg'></img>
        <img src={img2} className='workimg'></img>
        <img src={img3} className='workimg'></img>
        <img src={img4} className='workimg'></img>
        <img src={img5} className='workimg'></img>
        <img src={img6} className='workimg'></img>
      </div>
      <button className='workbtn'>See more</button>
    </section>
  )
}