const projects = [
  {
    num: '01',
    title: 'Music Website redesign',
    client: 'Client:Govrdhan',
    category: 'Harmony Hub',
    image: 'https://themewagon.com/wp-content/uploads/2020/02/solmusic-1.jpg',
    link:'https://swathygandham390-cloud.github.io/Musical_hubs/',
   
  },
  {
    num: '02',
    title: 'Online Course Website',
    client: 'client:Pavan',
    category: 'Learning Courses',
    image: 'https://market-resized.envatousercontent.com/previews/files/455344611/preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=92d4bb990daeb50420a46d153348383a4c0528440e33ced31260c5e94400e5db',
    link:'https://swathygandham390-cloud.github.io/online_course/',
  },
  {
    num: '03',
    title: 'Construction BUilding',
    client: 'client:Rakhi',
    category: 'Real Estate',
    image: 'https://mbluxury1.s3.amazonaws.com/2024/04/05140334/eco-residency-website.jpg',
    link:'https://swathygandham390-cloud.github.io/apx_real_estate/',
   
  },
  {
    num: '04',
    title: 'Hospital Website',
    client: 'client:Fathima',
    category: 'Web development',
    image: 'https://themewagon.com/wp-content/uploads/2020/06/MedicalCenter-1.jpg',
    link:'https://swathygandham390-cloud.github.io/Diagnostic-Center/',
  },


  {
    num: '05',
    title: 'It Services Website',
    client: 'client:Chaithanya',
    category: 'Web development',
    image: 'https://cdn.prod.website-files.com/660d2f5487880c4b5e088ca2/660d2f5487880c4b5e089aa8_ArifPbJQKJ4x86YCCtDbRz2OwuqpoRbPGpqC9JSF6V6ne6vzEVq90c2iOPjR5EU9NWtlNoxpm1Bq0B9AXPB3tjdRLStr6gtiSjz22ukER19kg7szfhtNiSAyZ-5ALhI0iRj9r8D3lHftflp54WQNaXU.jpeg',
    link: 'https://pavan9966.github.io/IT-Services-Company-Website/',
  },

  {
    num: '06',
    title: 'Property Website',
    client: 'client:Pankaj',
    category: 'Web development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHA6Y1-Bl-xKY41xPBA9dXGEPbd9rdGSweBN-TQHdu8dEKGs5k9jZ11PZQ&s=10',
    link:'https://swathygandham390-cloud.github.io/apx_real_estate/',
   
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        <p className="eyebrow">MY work</p>
        <h2 style={{ marginTop: 8 }}>Projects</h2>
        <p style={{ marginTop: 10, maxWidth: 480 }}>
          A Collection of recent projects I've designed and built from concepts to launch, with care in every detail.catalog of recent projects across Frontend, branding, and product design .
        </p>

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
        >
          {projects.map((p) => (
            <div key={p.num} style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: '100%',
                  height: 160,
                  objectFit: 'cover',
                  borderRadius: 'var(--radius)',
                  marginBottom: 16,
                  display: 'block',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3>{p.title}</h3>
                <span className="eyebrow">{p.num}</span>
              </div>
              <p style={{ fontSize: 13, marginTop: 6 }}>{p.category} &middot; {p.client}</p>

              <a href={p.link}
              tearget="_blank"
              rel="noreferrer"
              style={{
                display:'inline-block',
                marginTop:14,
                fontSize:13,
                fontWeight:600,
                color:'#fff',
                background:'green',
                padding:'8px 16px',
                borderRadius:'20px',
                textDecoration:'none',

              }}
              >
              View Project &rarr;
              </a>

            </div>
          ))}
        </div>
      </div>
    </div>

    
            
           
  );
}
