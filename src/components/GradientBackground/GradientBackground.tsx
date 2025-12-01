import React, { useEffect } from "react";
import "./GradientBackground.css";

const GradientBackground: React.FC = () => {

  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;

    const particleCount = 100;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const resetParticle = () => {
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = "0";
        return { x: posX, y: posY };
      };

      const animateParticle = () => {
        const pos = resetParticle();
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        setTimeout(() => {
          particle.style.transition = `all ${duration}s linear`;
          particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
          const moveX = pos.x + (Math.random() * 20 - 10);
          const moveY = pos.y - Math.random() * 30;
          particle.style.left = `${moveX}%`;
          particle.style.top = `${moveY}%`;
          setTimeout(animateParticle, duration * 1000);
        }, delay * 1000);
      };

      animateParticle();
      particlesContainer.appendChild(particle);
    };

    for (let i = 0; i < particleCount; i++) createParticle();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      /*
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";
        setTimeout(() => particle.remove(), 2000);
      }, 10);
      */
     
      // Sutil movimiento de esferas
      const spheres = document.querySelectorAll(".gradient-sphere");
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
      spheres.forEach((sphere) => {
        sphere.setAttribute(
          "style",
          `transform: translate(${moveX}px, ${moveY}px)`
        );
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="gradient-background">
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
      <div className="glow"></div>
      <div className="particles-container" id="particles-container"></div>
    </div>
  );
};

export default GradientBackground;
