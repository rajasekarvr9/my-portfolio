import React from 'react';


export default function Migrations(){
const items = [
{title: 'Legacy Avaya → Amazon Connect', desc: 'Migrated IVR system with zero downtime.'},
{title: 'Huawei IPCC → Cloud Contact Center', desc: 'Migrated multi-language IVR system.'}
];
return (
<section id="migrations">
<h2>Migration Projects</h2>
<ul>
{items.map(i => (
<li key={i.title}><strong>{i.title}</strong>: {i.desc}</li>
))}
</ul>
</section>
);
}