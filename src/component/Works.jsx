import "./Works.css"
import img1 from '../assets/Screenshot 2023-09-09 111518.png'
import img2 from '../assets/Screenshot 2023-09-24 124636.png'
import img3 from '../assets/Screenshot 2023-09-24 125652.png'
import img4 from '../assets/portfolio-4.png'
import img5 from '../assets/portfolio-5.png'
import img6 from '../assets/portfolio-6.png'

export default function Works(){
  return(
    <section id='works'>
      <h2 className='worktitle'>My Portfolio</h2>
      <span className='workdesc'>I take a pride in paying the attention to the smallest details and making sure thet my work is pixel perfect. i am excited to bring m skills and experience to help buisnesses achieve their goals and create a strong online presence</span>
      <div className='workimgs'>
        <div className="imgdiv">
          <img src={img1} width={400} height={500} className='workimg'></img>
          <a href="https://exceltochart.rahulpal5.repl.co/" target="_blank" ><span>Excel to Charts</span></a >
        </div>
        <div className="imgdiv">
          <img src={img2} className='workimg'></img>
          <a href="https://weather-app.rahulpal5.repl.co/" target="_blank"><span>Weather App</span></a >
        </div>
        <div className="imgdiv">
          <img src={img3} width={400} height={500} className='workimg'></img>
          <a href="https://newcontactapp.rahulpal5.repl.co/" target="_blank"><span>Conatct App</span></a >
        </div>
        
        
        <img src={img4} className='workimg'></img>
        <img src={img5} className='workimg'></img>
        <img src={img6} className='workimg'></img>
      </div>
      <button className='workbtn'>See more</button>
    </section>
  )
}