import React from "react";

export default function Skills() {
  const skills = [
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20240325264914/en/814330/4/Avaya_Logo-01.jpg"
          alt="Avaya"
          style={{ width: 150, height: 80, objectFit: "contain" }}
        />
      ),
      title: "Avaya Products",
      items:
        "Avaya IVR, Orchestration Designer(Avaya OD), Avaya Aura Experience Portal (AAEP), Avaya POM, Control Manager, AES, , WFO, ACR, QM, CMS, CM,SMGR, Dialer, CMS Reporting, Avaya CM, Media Gateways G450/G650, Automated Call Handling, ",
    },
    {
      icon: (
        <img
          src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/02/08/amazon-connect.jpg"
          alt="Amazon Connect"
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      ),
      title: "Amazon Contact Center Service",
      items:
        "Amazon Connect, Contact Flows, Amazon S3, Amazon Kinesis, Amazon SNS/SQS, Amazon Polly, Amazon Lex, Lambda, DynamoDB, Contact Lens, Routing & Management, Amazon Q, Amazon EventBridge, Cloud Formation Agent Tools",
    },
    {
      icon: (
        <img
          src="https://www.huawei.com/-/media/hcomponent-header/1.0.1.20251023120200/component/img/huawei_logo.png"
          alt="Huawei"
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      ),
      title: "Huawei Products",
      items: "IPCC U2980, CTI, WAS, IVR, Agent gateway/ICI",
    },
    {
      icon: (
        <img
          src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
          alt="Salesforce"
          style={{ width: 120, height: 80, objectFit: "contain" }}
        />
      ),
      title: "Salesforce",
      items: "Service Cloud Voice(SCV), Salesforce CRM, Salesforce Lightning, Cloud Voice solution (Cloud Base Contact Center)",
    },
    {
      icon: (
        <img
          src="https://mms.businesswire.com/media/20210406005728/en/532501/4/NICE-LOGO-300px-web.jpg"
          alt="Nice Products"
          style={{ width: 150, height: 100, objectFit: "contain" }}
        />
      ), 
      title: "Nice Products",
      items: "Nice InContact, Nice IVR, Nice Loggers, Workforce Optimization",
    },
    {
      icon: (
        <img
          src="https://verint.imgix.net/wp-content/uploads/verint-systems-600.png"
          alt="Recorders"
          style={{ width: 180, height: 120, objectFit: "contain" }}
        />
      ),
      title: "Verint Recorders", 
      items: "Workforce Management (WFM), Quality Management, Customer Engagement & Self-Service, Verint Recorders",
    },
    {
      icon: (
        <img
          src="https://www.spinnakersupport.com/wp-content/uploads/2024/01/image4-11.png"
          alt="project management"
          style={{ width: 200, height: 100, objectFit: "contain" }}
        />
      ), 
      title: "Project Management Process",
      items:
        "Incident Management, Problem Management, Change Management, ",
    },
    {
      icon: (
        <img
          src="https://www.web-ideas.com.au/uploads/1051/service-online-booking-system-5600w.jpg"
          alt="Ticketing Tools"
          style={{ width: 180, height: 100, objectFit: "contain" }}
        />
      ), 
      title: "Ticketing Tools",
      items:
        "Jira, Service Now, Remedy, Matrix Tools, Siebel, Citrix, PAM Access",
    },
    {
      icon: (
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Feature-M365-Premium-Glass-Icon-Bounce-Homepage:VP1-539x349"
          alt="TWindows Tools"
          style={{ width: 189, height: 100, objectFit: "contain" }}
        />
      ),
      title: "Windows Tools",
      items: "MS Visio, MS Project, MS Notes, Excel, Word, PowerPoint, Documentation",
    },
    {
      icon: (
        <img
          src="https://cdn.hackr.io/uploads/topics_svg/1535001824kkvHDNpC4T.svg"
          alt="Operating Systems"
          style={{ width: 180, height: 100, objectFit: "contain" }}
        />
      ),
      title: "Servers / Operating Systems",
      items: "Windows 2008/2012/2016, Linux servers, Windows 10/8/7/XP, Unix, MacOS",
    },
    {
      icon: (
        <img
          src="https://miro.medium.com/1*wcEYa9AjnMZxXAau2iuhYw.png"
          alt="Languages"
          style={{ width: 150, height: 80, objectFit: "contain" }}
        />
      ),
      title: "Languages",
      items: "Java, JavaScript, React, Node.Js JSON, HTML, VXML, CCXML, CSS",
    },
    {
      icon: (
        <img
          src="https://www.avaya.com/content/dam/aem-avaya-portal/en_us/Avaya-Infinity-Marketecture-Diagram-1200x678_250728.jpg"
          alt="AvayaCloud & AWS"
          style={{ width: 180, height: 60, objectFit: "contain" }}
        />
      ),
      title: "AvayaCloud & AWS",
      items:
        "Avaya Cloud, AWS Cloud Services: EC2, VPC, Internet Gateway, EBS, ELB, S3, S3 Glacier,Route 53, Amazon QuickSight, Kinesis, AWS Lambda, Amazon RDS, CloudWatch, IAM, Auto Scaling, NAT Gateway, Cloud Formation, AWS Terraform ",
    },
  ];

  return (
    <section id="skills">
      <h2>Skills & Expertise</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "11px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
          >
            <div style={{ marginBottom: "12px" }}>{skill.icon}</div>
            <h4 style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>
              {skill.title}
            </h4>
            <p style={{ fontSize: "14px", color: "#374151" }}>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
