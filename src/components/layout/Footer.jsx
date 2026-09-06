import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return <>
<footer class="footer">
  <div class="footer-section about">
    <h3>ShopEase</h3>
    <p>Your one-stop shop for everything you love. Quality products, fast delivery, great prices.</p>
  </div>

  <div class="footer-section links">
    <h4>Quick Links</h4>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
    </ul>
  </div>

  <div class="footer-section contact">
    <h4>Contact Us</h4>
    <p><i class="fa-solid fa-envelope"></i> support@shopease.com</p>
    <p><i class="fa-solid fa-phone"></i> +1 234 567 890</p>
  </div>

  <div class="footer-section social">
    <h4>Follow Us</h4>
    <NavLink to="#"><i class="fa-brands fa-facebook"></i></NavLink>
    <NavLink to="#"><i class="fa-brands fa-instagram"></i></NavLink>
    <NavLink to="#"><i class="fa-brands fa-twitter"></i></NavLink>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2026 ShopEase. All rights reserved.</p>
  </div>
</footer>
    </>
}