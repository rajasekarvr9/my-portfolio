import React from "react";

export default function Clients() {
  const clients = [
    {
      name: "Zebra Technologies",
      logo: "https://www.zebra.com/content/experience-fragments/zebra1/us/en/header/master/_jcr_content/root/image.coreimg.svg/1757099569592/zebra-logo-horizontal.svg",
      url: "https://www.zebra.com",
    },
    {
      name: "Tech Mahindra",
      logo: "https://mma.prnewswire.com/media/2804444/Tech_Mahindra_New_Logo.jpg?p=facebook",
      url: "https://www.techmahindra.com",
    },
    {
      name: "Avaya",
      logo: "https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg",
      url: "https://www.avaya.com",
    },
    {
      name: "Ethiopian Electric Utility",
      logo: "https://www.eeu.gov.et/images/logo.png?20283a30cdedd9d88649256801e667c6",
      url: "https://www.eeu.gov.et",
    },
    {
      name: "Prudential Asia",
      logo: "https://www.prudentialplc.com/content/dam/prudential-aem-common/header/Prudential-Logo.svg",
      url: "https://www.prudentialplc.com",
    },
    {
      name: "DXC Technology",
      logo: "https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/vertical/DXC%20Logo_Purple+Black%20RGB.png",
      url: "https://www.dxc.com",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png",
      url: "https://www.hp.com",
    },
    {
      name: "HPE",
      logo: "https://cdn.thebrandingjournal.com/wp-content/uploads/2015/04/hp_enterprise_logo_the_branding_journal.jpg",
      url: "https://www.hpe.com",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      url: "https://www.infosys.com",
    },
    {
      name: "Caterpillar",
      logo: "https://s7d2.scene7.com/is/image/Caterpillar/CM20220222-5c3c2-280a8?fmt=png-alpha",
      url: "https://www.caterpillar.com",
    },
    {
      name: "SYSRS IT Services LLC",
      logo: "https://www.sysrs.com/images/logo.png",
      url: "https://www.sysrs.com",
    },
    {
      name: "ONE Gas",
      logo: "https://s23.q4cdn.com/945657003/files/design/client-logo.png",
      url: "https://www.onegas.com",
    },
  ];

  return (
    <section id="clients" style={{ marginTop: "50px" }}>
      <h2>Clients</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {clients.map((client, index) => (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.25s ease",
              }}
              className="client-tile"
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  width: "120px",
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />

              <h4
                style={{
                  margin: 0,
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {client.name}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
