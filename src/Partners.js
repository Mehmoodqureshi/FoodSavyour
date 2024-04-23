import React from "react";
import Card from "./Card";
import "./Partner.css";

function Partner() {
  return (
    <div className="partners-section">
      <h2>OUR PARTNERS</h2>
      <div className="partners">
        <Card
          name="Baitussalam"
          description="Baitussalam Welfare Trust (BWT) is a Pakistan-based charity & welfare organisation, that creates opportunities for Muslims around the world to learn and practice the obligation of charity, humanitarian and social welfare services grounded in Islamic principles and contribute in the sustainable socio-economic development under the supervision of learned and experienced Islamic Scholars. Baitussalam is registered as international charity in FBR, Karachi Chambers of Commerce, and is enlisted in the second schedule of the Income Tax Ordinance under clause 61 and clause 66 in the Federal Finance Budget 2020. All donations to Baitussalam are eligible for tax credit."
        />
        <Card
          name="NgoBase"
          description="A non-governmental organization (NGO) is a group that functions independently of any government with the objective of improving social conditions. NGOs are typically non-profit institutions. They are sometimes called civil society organizations and are established on community, national, and international levels to serve a social or political goal such as a humanitarian cause or the protection of the enviroment."
        />
        <Card
          name="SKT Welfare"
          description="SKT Welfare has been operating over the last 10 years in several countries around the world, including Syria, Palestine, Bangladesh, Pakistan, Somalia and the UK.We provide food, water and healthcare to those affected by conflict, poverty and natural disasters and establish sustainable development projects in some of the world’s poorest communities.Our mission is to deliver humanitarian aid solutions to those in desperate need, regardless of gender, race or religion.Founded in 2009, SKT Welfare is a UK registered charity and international NGO dedicated to delivering humanitarian aid to those in need, regardless of gender, race or religion.Over the past decade, we have delivered multiple projects, focusing on emergency relief, food, water, healthcare, education, orphan care and seasonal campaigns, such as winter and Qurbani, across in Pakistan, India, the Middle East, Somalia and here in the UK."
        />
        <Card
          name="Chhipa Welfare Association"
          description="a non-profit welfare organization in Pakistan, imbued with a noble mission, having sincere love and affection for the humanity and a strong commitment to serve the COMMON PEOPLE without discrimination of any caste, creed or colour under all circumstances, where frequent road accidents, sudden events and emergencies daily occur."
        />
        <Card
          name="Shifa Foundation"
          description="As an NGO, our commitment to positive change is at the heart of everything we do. We recognize that the challenges facing our world today are complex and multifaceted, but we also believe that every individual can make a difference. That's why we are dedicated to making an effort, no matter how small, to create a better world for all.Our efforts are focused on addressing issues such as poverty, health, nutrition, education, hunger, and environmental degradation. We work tirelessly to empower marginalized communities, provide access to education and healthcare, and promote sustainable practices. We believe that by working together and taking action, we can create a brighter future for all."
        />
        <Card
          name="Rizq Foundation"
          description="Risk Foundation was established by a group of young and energetic people who were highly motivated and committed for contributing their time, skills and energies for the development and empowerment of socially disadvantaged and vulnerable communities in Pakistan and addressing poverty issues.Rizq Foundation is a development organization. It’s a non-government, not-for-profit and nonsectarian, non-partisan organization working for social development of vulnerable and less developed people. It’s a human-centered NGO. Rizq Foundation could also be labeled as an implementing organization which designs and implements various developmental projects with the financial and technical support of international donor agencies and the government."
        />
      </div>
    </div>
  );
}

export default Partner;
