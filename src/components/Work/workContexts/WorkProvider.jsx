import { WorkContext } from "./contextWork";
import {useState} from 'react'

export default function WorkProvider({ children }) {
  const timeLineData = [
    {
      id:'W-0',   
      title: "Tutor at DCI Institute",
      duration: "May 2023-Feb 2024",
      skills: "Html,CSS,JavaScript,React",
      description:
        "Tutored and helped my fellow classmates by doing the recap of Web Dev topics on daily basis. Broke down the complicated topics of Web development and helped them to understand by explaining in a simpler and easy way",
    type:'work'},
    {
        id:'W-1', 
      title: "Full Stack Web Devolepment Student at DCI Institute",
      duration: "December 2022-April 2024",
      skills: "Html,CSS,JavaScript,React",
      description:
        "Learned all the necessary skills like html,css,Javascript, Saas, Bootstrap,DOM Manipulation,Single page Applications with react as part of this 1 Year web developement course",
    type:'study'},
    {
        id:'W-2', 
      title: "Deutsch Language Student at SFS Institute Obehausen,Germany",
      duration: "August 2021-May 2022",
      skills: "German Language up to Level B1",
      description:
        "Learned to read,write and speak Deutsch/German language as part of 6 months German Course and Succesfully got certified as TELC DEUTSCH B1 ZERTIFIZIERT",
    type:'study'},
    {
        id:'W-3', 
      title: "Transaction Risk Investigator at AMAZON,India",
      duration: "May 2019-December 2020",
      skills: "Analytical Skills,Customer Support Skills",
      description:
        "Worked as a Transaction Risk Investigator where I solved and closed many Accounts of Amazon that were prone to Fradulent Activities with the helpof Internal Tools of Amazon and also by highly utilizing my Analytical Skills",
    type:'work'},
    {
        id:'W-4', 
      title: "Career Gap due to Mother Hood",
      duration: "Feb 2017-May 2019",
      skills: "Learned Python programming language through Web Sites like Udemy and W3 Schools",
      description: "Enjoyed and Embraced Motherhood during this time.",
    type:'gap'},
    {
        id:'W-5', 
      title: "Associate Software Developer at Accenture,India",
      duration: "March 2016-Feb 2017",
      skills: "Manual Testing Skills, Java, Selenium WebDriver tool for Automation Testing",
      description: "Manually Tested Health Care application and raised more than 500 bugs by performing functional testing.Gained Knowledge on Automation Testing using Selenium Web Driver with Java",
    type:'work'},
    {
        id:'W-6', 
        title: "Customer Support Executive at Amazon,India",
        duration: "September 2015-March 2016",
        skills: "Problem Solving Skills, Analytical Skills, Quick Decision Making Skills, LIstening Skills, Communication Skills",
        description: "Solved the problems of many Customers by finding the qick and efficient solution to customers issues through verbal communication and handled more than 1000 customer enquiries about their Order status, returns and refunds",
      type:'work'},
      {
        id:'W-7', 
        title: "Bachelor of Technology in Electronics and Telecommunications",
        duration: 'June 2011-July 2015',
        skills: "Electronics and Telecommunications Engineering Skills",
        description: "Graduated as Engineer by passing in all the subjects of Telecommunications and Electronics from G.Narayanamma INstitute of Technology and Science accrediated by Jawaharlal Nehru Technological University Hyderabad, India",
      type:'study'},
      {
        id:'W-8', 
        title: "Schooling from MRR High School and Narayana Institues for Intermediate",
        duration: '2000-July 2011',
        skills: "All the Skills required to reach Graduation",
        description: "I was an above average student gaining good grades around 90% through out my Schooling",
      type:'study'},
  ];
  const [scroll,setScroll]=useState(0);

  return (
  <WorkContext.Provider value={{timeLineData,scroll,setScroll}}>

{children}
  </WorkContext.Provider>
  );
}
