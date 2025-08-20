const container = document.querySelector('.container');

function createGrid(rows, cols) {
    for (let i=1; i<=rows; i++){
        const grid = document.createElement('div');
        grid.className = 'container-grid';
        container.appendChild(grid);
        
        for (let j=1; j<=cols; j++){
            const innerGrid = document.createElement('div');
            innerGrid.className = 'container-innergrid';
            grid.appendChild(innerGrid)

            innerGrid.addEventListener("mouseenter", 
                () => {
            innerGrid.classList.toggle('hover');
        });

            innerGrid.addEventListener("mouseleave", () => {
                innerGrid.classList.toggle('hover');
            });
            
        }
        }
    }

createGrid(16,16);



