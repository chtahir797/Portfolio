
tsParticles.load("tsparticles", {
  particles: {
      number: {
          value: 80,
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: {
          value: ["#1abc9c", "#3498db", "#9b59b6", "#e74c3c", "#f39c12", "#2ecc71"] // Array of colorful values
      },
      shape: {
          type: "circle"
      },
      links: {
          enable: true,
          color: "#000000",
          distance: 150,
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 2, // Adjusted speed
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
          }
      },
      size: {
          value: 4,
          random: true,
          anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
          }
      }
  },
  interactivity: {
    detectsOn: "window",
    events: {
        onHover: {
            enable: true,
            mode: "repulse"
        },
        onClick: {
            enable: true,
            mode: "bubble"
        }
    },
      modes: {
          grab: {
              distance: 400,
              line_linked: {
                  opacity: 1
              }
          },
          bubble: {
              distance: 400,
              size: 20,
              duration: 1,
              opacity: 5,
              speed: 2
          },
          repulse: {
              distance: 100,
              duration: 0.4
          },
          push: {
              particles_nb: 4
          },
          remove: {
              particles_nb: 24
          }
      }
  },
  retina_detect: true
});
