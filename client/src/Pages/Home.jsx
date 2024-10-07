import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'; // Custom CSS file for styling
import homepageImage from './images/homepage-image.jpg'; // Corrected import

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={homepageImage} alt="Shopping Buddy" />
      </div>
      <div className="main-content">
       
        <div id="introduction">
          <p>
        Welcome to SKYREK’s Security Hub 
        At SKYREK, we understand that cybersecurity is everyone's responsibility. This platform is your gateway to mastering information security policies and best practices.
         Whether you’re looking to stay informed, track compliance, or enhance your security knowledge, our interactive tools and resources are here to support you every step of the way. 
         Start exploring today to help protect the future of SKYREK and safeguard our digital landscape.
         </p>
        </div>
        </div>
        <br></br>
        <br></br>
     
        <br></br>
     
        <div id="Security-awareness">
        <h1  id="Security-awareness-header">Security awareness</h1>
        <p>
        Employees represent a significant part of an organization’s vulnerability to cyber threats, making it crucial for them to be well-equipped to protect both
         themselves and the organization from attacks. To comply with various regulations such as FISMA, PCI DSS, HIPAA, or Sarbanes-Oxley, 
         organizations are required to provide comprehensive security awareness training for their workforce
        Partnering with outside providers for security training services may be helpful, depending on the organization's internal security capabilities and experience. Organizational leaders must comprehend the essential components of developing a security awareness program, regardless of whether outside assistance is used. During the process, leadership should continue to be involved, providing direction and making sure the training complies with the security and regulatory requirements of the firm.
        This proactive involvement from leadership not only ensures that the training is tailored to the organization’s unique risks but also reinforces the importance of security at every level of the company. Effective security awareness training should cover a wide range of topics, such as phishing, social engineering, password management, and data protection, with regular updates to address evolving threats. Moreover, it’s important to foster a culture of security where employees feel empowered to report suspicious activities and adhere to security policies. By integrating training into the organization's overall security strategy, companies can significantly reduce the likelihood of human error leading to security incidents.
        </p>
        </div>


        <div id="Fundamentals">
        <h1  id="Fundamentals-header">Cyber Security Fundamentals: Protecting Your Digital Assets</h1>
        <p>
                        <h3><b>Understanding cybersecurity is crucial in maintaining the safety of personal and organizational data. The fundamentals of cybersecurity encompass several key principles designed to protect against common threats. In this section, we’ll cover three core areas: password management, data protection, and secure browsing, and provide actionable steps to enhance your awareness.</b></h3><br></br>
              <b>  1. Password Management: Your First Line of Defense</b><br></br>
                A strong password is your first layer of protection against unauthorized access. Weak passwords are easily exploited, leading to potential data breaches.<br></br>
                •	Key Factors:<br></br>
                o	Strong Passwords: Use a mix of uppercase letters, lowercase letters, numbers, and special characters.<br></br>
                o	Unique Passwords: Avoid reusing passwords across multiple accounts.<br></br>
                o	Two-Factor Authentication (2FA): Enable 2FA wherever possible for an added layer of security.<br></br>
                •	Examples:<br></br>
                o	Weak Password: "12345" or "password123" (easy to guess).<br></br>
                o	Strong Password: "Xy7@9hT#kL!m" (difficult to crack due to complexity).<br></br>
                •	Steps to Improve Awareness:<br></br>
                o	Training Module: Provide interactive training on how to create and manage strong passwords.<br></br>
                o	Password Manager Tools: Recommend the use of password managers to store and organize passwords securely.<br></br><br></br>
              <b> 2. Data Protection: Securing Sensitive Information</b> <br></br>
                Data is the lifeblood of an organization, and protecting it from loss, theft, or exposure is a top priority. Whether stored locally or shared online, sensitive data must be handled with care.
                •	Key Factors:<br></br>
                o	Encryption: Ensure that data is encrypted when stored or transmitted.<br></br>
                o	Data Classification: Know the sensitivity of the data you handle (e.g., confidential, internal, public).<br></br>
                o	Backup: Regularly back up important data to secure locations to prevent loss in the event of a system failure.<br></br>
                •	Examples:<br></br>
                o	Unprotected Data: Leaving sensitive files unencrypted on shared drives.<br></br>
                o	Protected Data: Encrypting emails or files before sharing them with external partners.<br></br>
                •	Steps to Improve Awareness:<br></br>
                o	Data Handling Guidelines: Provide clear guidelines on how to handle and share sensitive data securely.<br></br>
                o	Phishing Simulations: Conduct regular phishing simulations to help employees recognize fraudulent emails that aim to steal data.<br></br><br></br>
               <b> 3. Secure Browsing: Protecting Yourself Online</b><br></br>
                Secure browsing practices protect employees from online threats, such as malware, phishing attacks, and unsecured websites.<br></br>
                •	Key Factors:
                o	HTTPS: Always verify that websites use HTTPS (secure connections) before entering any personal information.<br></br>
                o	Safe Downloads: Download files and applications only from trusted sources.<br></br>
                o	Avoid Public Wi-Fi: Refrain from accessing sensitive information over unsecured public Wi-Fi networks.<br></br>
                •	Examples:
                o	Unsecure Browsing: Visiting unverified websites or clicking on suspicious links.<br></br>
                o	Secure Browsing: Using a VPN to access company resources while traveling or working remotely.<br></br>
                •	Steps to Improve Awareness:<br></br>
                o	Secure Browsing Checklist: Distribute a checklist to employees that includes steps for verifying website security, identifying phishing sites, and avoiding malicious content.<br></br>
                o	Browser Settings Training: Provide training on browser security settings and privacy controls to ensure safe browsing.<br></br><br></br>
                
               
                </p>
        </div>
        <div id='Phishing-Attacks'>
       <div id='Phishing-Attacks-header'>Phishing Attacks</div>
       <p>
          Phishing is a type of social engineering attack where attackers attempt to trick individuals into revealing sensitive information, such as passwords, credit card numbers, or login credentials. 
          Phishing attacks often take the form of emails that appear to be from legitimate sources but contain malicious links or attachments. By understanding how phishing attacks work and how to identify and respond to them, you can protect yourself and your 
          organization from becoming victims.
          </p>
        </div>
<br></br>
        <div id='Ransomware-Attacks'>
       <div id='Ransomware-Attacks-header'>Ransomware Attacks</div>
       <p>
       Ransomware is a type of malware that encrypts files on a device, making them inaccessible until a ransom is paid. Ransomware attacks are becoming increasingly common and can cause significant disruption to businesses and individuals.
        By understanding how ransomware works and how to prevent and respond to attacks, you can protect your data and minimize the damage caused by ransomware.
        </p>
        </div>

        <div id='Remote-Work-Good-Practices'>
       <div id='Remote-Work-Good-Practices-header'>Remote Work Good Practices</div>
       <p>
       Remote work is becoming increasingly popular as more and more businesses allow employees to work from home or other locations. While remote work offers many benefits,
        such as increased flexibility and work-life balance, it also presents unique challenges,
        such as isolation and communication difficulties. By following best practices for remote work,
       such as setting clear boundaries, communicating effectively, and staying organized,
        you can maximize the benefits of working remotely and avoid common pitfalls.
        </p>
        </div>
      
    </div>
  );
}

export default Home;