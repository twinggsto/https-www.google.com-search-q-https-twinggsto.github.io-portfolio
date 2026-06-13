document.addEventListener("DOMContentLoaded", function() {
    const leafSVG = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>`;

    // This function builds the leaves and does the math based on the direction
    function createLeaves(containerClass, direction) {
        const container = document.querySelector(containerClass);
        if (!container) return; // Skip if the container isn't found

        const totalLeaves = 12;

        for (let i = 0; i < totalLeaves; i++) {
            const leaf = document.createElement("div");
            leaf.classList.add("leaf");
            
            // Add the specific starting position class
            if (direction === 'ltr') {
                leaf.classList.add("leaf-ltr");
            } else {
                leaf.classList.add("leaf-rtl");
            }

            leaf.innerHTML = leafSVG;

            // Base properties
            const startPosY = Math.random() * 100;
            const duration = Math.random() * 12 + 10;
            const delay = Math.random() * 15;
            const size = Math.random() * 6 + 8;
            const rotZ = Math.random() * 360 + 180;

            let endX, endY, scaleEnd;
            const flightType = Math.random();

            if (direction === 'ltr') {
                // LEFT TO RIGHT MATH (Positive X values)
                if (flightType < 0.33) {
                    endX = Math.random() * 300 + 200;
                    endY = Math.random() * 300 + 200;
                    scaleEnd = 1;
                } else if (flightType < 0.66) {
                    endX = Math.random() * 800 + 400;
                    endY = Math.random() * 150 + 50;
                    scaleEnd = 1;
                } else {
                    endX = Math.random() * 400 + 200;
                    endY = Math.random() * 100 + 50;
                    scaleEnd = 0.3;
                }
            } else {
                // RIGHT TO LEFT MATH (Negative X values)
                if (flightType < 0.33) {
                    endX = -(Math.random() * 300 + 200);
                    endY = Math.random() * 300 + 200;
                    scaleEnd = 1;
                } else if (flightType < 0.66) {
                    endX = -(Math.random() * 800 + 400);
                    endY = Math.random() * 150 + 50;
                    scaleEnd = 1;
                } else {
                    endX = -(Math.random() * 400 + 200);
                    endY = Math.random() * 100 + 50;
                    scaleEnd = 0.3;
                }
            }

            // Apply all CSS variables
            leaf.style.top = `${startPosY}%`;
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;
            leaf.style.animationDuration = `${duration}s`;
            leaf.style.animationDelay = `${delay}s`;
            leaf.style.setProperty('--endX', `${endX}px`);
            leaf.style.setProperty('--endY', `${endY}px`);
            leaf.style.setProperty('--scaleEnd', `${scaleEnd}`);

            const svgElement = leaf.querySelector('svg');
            const spinDuration = duration * (Math.random() * 0.5 + 0.5);
            svgElement.style.animationDuration = `${spinDuration}s`;
            svgElement.style.setProperty('--rotZ', `${rotZ}deg`);

            container.appendChild(leaf);
        }
    }

    // ACTIVATE HEADER: Left to Right ('ltr')
    createLeaves(".leaves-container-header", "ltr");

    // ACTIVATE FOOTER: Right to Left ('rtl')
    createLeaves(".leaves-container-footer", "rtl");
});