import React from "react";

export default function Certifications() {
  const certs = [
    {
      icon: (
        <img
          src="https://images.credly.com/size/680x680/images/c2e730b8-ec46-40ff-b0d9-c3df3fa7d8cc/blob"
          alt="AWS Training & Certification"
          style={{ width: 55, height: 90, objectFit: "contain" }}
        />
      ),
      title: "ACDS - Amazon Connect Developer Specialist",
      issuer: "AWS Training & Certification",
    },
    {
      icon: (
        <img
          src="https://images.credly.com/size/680x680/images/7296c476-fb6a-44bf-a802-2cc75b870d66/blob"
          alt="AWS Training & Certification"
          style={{ width: 55, height: 90, objectFit: "contain" }}
        />
      ),
      title: "ACCS - Amazon Connect Communications Specialist",
      issuer: "AWS Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title: "71201T - Avaya Aura® Core Components Implementation",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title: "ASTA – 9090 Avaya Call Management System Technical Associate (CMS)",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title: "ASPS - Avaya CMS Implementation & Maintenance",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya AES"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title:
        "AIPS - Avaya Application Enablement Services (AES) Admin & Implementation",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya ACSS"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title:
        "ACSS-3305 - Avaya Aura® Certified Support Specialist (AEP & POM) — Training Completed",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya WFO"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title:
        "ACSS-3308 - Avaya Aura® Certified Support Specialist (WFO) — Training Completed",
      issuer: "Avaya Training & Certification",
    },
    {
      icon: (
        <img
          src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/02/08/amazon-connect.jpg"
          alt="Amazon Connect"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title:
        "Amazon Connect: Create & Manage a Contact Center — Certificate",
      issuer: "AWS Training & Certification",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20210406005728/en/532501/4/NICE-LOGO-300px-web.jpg"
          alt="Nice InContact"
          style={{ width: 50, height: 110, objectFit: "contain" }}
        />
      ),
      title:
        "Nice InContact — Basic Knowledge Transfer (Completed)",
      issuer: "Nice InContact Team",
    },
    {
        icon: (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Oracle_logo.svg"
            alt="Oracle"
            style={{ width: 35, height: 35, objectFit: "contain" }}
          />
        ),
        title: "1Z0-1085 - Oracle Cloud Infrastructure 2022 Foundations Associate",
        issuer: "Oracle University",
      },
  ];

  return (
    <section id="certifications" style={{ marginTop: "40px" }}>
      <h2>Certifications & Training</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {certs.map((cert, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              transition: "transform 0.2s ease",
            }}
            className="cert-card"
          >
            <div style={{ width: 40 }}>{cert.icon}</div>

            <div>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                {cert.title}
              </h4>
              <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
