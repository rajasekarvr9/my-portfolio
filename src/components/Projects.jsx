import React from 'react';

export default function Projects(){
const projects = [
{title: 'Smart Customer Support IVR', desc: 'Dynamic routing and analytics integration.'},
{title: 'Automated Billing IVR', desc: 'Payment processing with voice verification.'}
];
return (
<section id="projects">
<h2>Projects</h2>
<div className="projects-grid">
{projects.map(p => (
<article className="project-card" key={p.title}>
<h3>{p.title}</h3>
<p>{p.desc}</p>
</article>
))}
</div>
</section>
);
}