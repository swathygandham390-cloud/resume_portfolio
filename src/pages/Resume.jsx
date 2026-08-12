function Resume(){
return(
<section className="section" id="resume">
        <h2 className="section-title">Resume Highlights</h2>
        <div className="resume-section">
            <h2 className="resume-heading">My Resume</h2>
            <p className="resume-para">
                Asummary of my education, experience, technical skills,and career objectives.
            </p>
            <div className="objective-box">
                <div className="objective-title">
                    <span className="dot"></span>
                    Career Objective
                </div>
                <p className="objective-text">
                    To work in a challenging environment where i can utilize my skillsin
                    Frontend Development and continuosly grow as aprofessional, while
                    contributing to the sucess and growth of the organization.

                </p>
            </div>
        </div>
        <div className="resume-section">
            <div className="info-box">
                <div className="info-title">
                    <span className="dot"></span>
                    Education
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">2018 - 2019</div>
                    <div className="timeline-title">SSC</div>
                    <div className="timeline-desc">completed SSC , building a strong  foundation for future </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-year">2019 - 2022</div>
                    <div className="timeline-title">Diploma</div>
                    <div className="timeline-desc">completed Diploma , building a strong  foundation in core technical concepts</div>
                </div>
                
                <div className="timeline-item">
                    <div className="timeline-year">2022 - 2025</div>
                    <div className="timeline-title">B.Tech</div>
                    <div className="timeline-desc">completed B.Tech focusing on engineering fundamentals and technical skill development</div>
                </div>
            </div>
            <div className="info-box">
                <div className="info-title">
                    <span className="dot"></span>
                    Experience
                    </div>
            <div className="timeline-item">
                <div className="timeline-year">currently working</div>
                <div className="timeline-title">Micro Info Web</div>
                <div className="timeline-desc">
                    Working at microinfo web, developing frontend projects using html and css,
                    and javascript. along side project work, actively learning java to
                    strengthen backend and programming fundamentals
                </div>
                </div>
            </div>
        </div>
        <center><h2 style={{color: 'blue',}}>Technical Skills</h2></center>
        <div className="tags-section">
            <div className="tags-wrapper">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Java script</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">Responsive Design</span>
                <span className="tag">Git</span>
                <span className="tag">Github</span>
                <span className="tag">VS code</span>
                <span className="tag">Excel</span>
                <span className="tag">Python</span>
            </div>
        </div>

        <center><h2 style={{color: 'blue'}}>Strengths</h2></center>
        <div className="type-section">
            <div className="types-wrapper">
                <span className="tag">Time management</span>
                <span className="tag">Adaptiblity</span>
                <span className="tag">communication</span>
                <span className="tag">Quick learner</span>
                <span className="tag">problem solving</span>
                <span className="tag">team collabration</span>
                <span className="tag">self motivated</span>
            </div>
        </div>
        <div className="download-section">
            <h2 className="download-heading">Download Resume</h2>
            <p className="download-para">you can downlaod my latest resume in pdf format</p>
            <a href="/swathy_Resume.pdf"
download
className="btn">


Download Resume


</a>
        </div>
        
      </section>
)
}
export default Resume;