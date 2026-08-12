import {Link} from 'react-router-dom'

function Home() {
 return(
    <main className="container" id="home">
      <section className="hero">
        <div className="hero-content">
          <p className="greeting">Hello, I'am</p>
          <h1 className="name">Swathy Gandham</h1>
          <p className="role">Assosiate Software Engineer & Frontend Developer </p>
          <p className="bio">
            I build clean, responsive web interfaces with HTML, CSS, and JavaScript while continuing to grow my skills in software testing and modern web development.
          </p>
          <div className="buttons">
            <a href="SWATHY RESUME.pdf"
download
className="btn">


Download Resume


</a>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
         <div className="hero-image">
                <img src="/Gandham_pic.png" alt="Swathy Gandham" />
            </div>
      </section>

      <section className="section">
        <h2 className="section-title">Portfolio Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="number">3+</div>
            <div className="label">Live projects</div>
          </div>
          <div className="stat-card">
            <div className="number">2+</div>
            <div className="label">Years learning</div>
          </div>
          <div className="stat-card">
            <div className="number">100%</div>
            <div className="label">Focus on quality</div>
          </div>
          <div className="stat-card">
            <div className="number">1</div>
            <div className="label">Goal: grow fast</div>
          </div>
        </div>
      </section>

      <section className="section grid-two" id="about">
        <div className="card">
          <h3>About Me</h3>
          <p>
            I�m a dedicated B.Tech student with a strong interest in frontend development, UI design, and web technologies. I enjoy creating responsive websites that look modern and feel easy to use.
          </p>
          <ul className="list">
            <li>Strong foundation in HTML, CSS, and JavaScript</li>
            <li>Learning software testing and quality practices</li>
            <li>Enjoys working in teams and solving real-world problems</li>
          </ul>
        </div>
        
      </section>
      </main>
 );
 }

export default Home;