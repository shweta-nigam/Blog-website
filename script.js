* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    align-items: center;
    background: #f5f7fa;
  }

 /* Header and Navbar styling */
header {
    width: 100%;
    background: linear-gradient(135deg, #f39c12, #d35400);
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  nav .logo {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    padding: 8px 12px;
    transition: background 0.3s;
    border-radius: 4px;
    font-size: larger;
  }
  
  .nav-links a:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  #search-bar {
    padding: 8px;
    border-radius: 4px;
    border: none;
  }
  
  /* Responsive Design for header  */

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    width: 30px;
    height: 30px;
    justify-content: space-around;
  }
  
  .hamburger span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
    transition: 0.3s;
  }
  
  /* Toggle Navigation for Small Screens */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  
    .nav-links {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: linear-gradient(135deg, #f39c12, #d35400);
      flex-direction: column;
      padding: 20px 0;
    }
  
    .nav-links li {
      text-align: center;
      margin: 10px 0;
    }
  
    .nav-links a {
      color: #fff;
      padding: 10px;
      display: block;
    }
  
    #search-bar {
      display: none;
    }
  
    /* Active state for toggled menu */
    .nav-links.active {
      display: flex;
    }
  }
  
  /* main section............ */
  h1{
    font-size: 3rem;
    text-shadow: 2px 2px #d35400;
    padding: 15px;
    text-align: center;
  }
  #search-bar {
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: none;
  }
  
  #blog-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .post {
    width: 45%;
    margin: 10px 0;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .post img {
    width: 100%;
    border-radius: 4px;
  }
  
  .post h2 {
    color: #333;
  }
  /* Comments Section */
#comments-section {
    margin-top: 40px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  #comments-section h2 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  /* Comment Form */
  #comment-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  #comment-form input[type="text"],
  #comment-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s;
  }
  
  #comment-form input[type="text"]:focus,
  #comment-form textarea:focus {
    border-color: #3498db;
    outline: none;
  }
  
  #comment-form button {
    padding: 12px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  #comment-form button:hover {
    background-color: #2980b9;
  }
  
  /* Comments Display */
  #comments {
    margin-top: 20px;
  }
  
  .comment {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  
  .comment .comment-name {
    font-weight: bold;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 5px;
    font-family: 'Poppins', sans-serif;
  }
  
  .comment .comment-message {
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }
  
  #comments-section {
    margin-top: 20px;
    margin: 50px;
  }
  
  @media (max-width: 768px) {
    .post {
      width: 100%;
    }
    #comments-section {
        margin-top: 20px;
        margin: 50px;
      }
  }
  @media (min-width: 1008px) {
    #comments-section {
        margin: 20px 190px;
      }
  }
 /* footer... */
#footer {
    background: linear-gradient(135deg, #f39c12, #d35400);
    color: #fff;
    padding: 40px 20px;
    text-align: center;
    position: relative;
    font-family: 'Poppins', sans-serif;
  }
  
  .footer-content {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .footer-links {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .footer-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s, transform 0.3s;
  }
  
  .footer-links a:hover {
    color: #442b02;
    transform: translateY(-3px);
  }
  
  .footer-social {
    display: flex;
    gap: 20px;
  }
  .x-icon{
    font-weight: bold;
  }
  .footer-social .social-icon {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s, transform 0.3s;
    text-decoration: none;
  }
  .footer-social a:hover{
    color: #f39c12;
    transform: scale(1.2);
  }
  .footer-content p {
    font-size: 0.9rem;
    color: #ddd;
    margin-top: 20px;
  }
  
  /* Footer Animation */
  #footer::before,
  #footer::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    animation: footerGlow 5s infinite alternate;
  }
  
  @keyframes footerGlow {
    0% { opacity: 0.1; transform: scale(1); }
    100% { opacity: 0.3; transform: scale(1.05); }
  }
  
  /* Responsive Footer */
  @media (max-width: 768px) {
    .footer-links {
      gap: 15px;
    }
  
    .footer-links a {
      font-size: 1rem;
    }
  
    .footer-social .social-icon {
      font-size: 1.2rem;
    }
  }
