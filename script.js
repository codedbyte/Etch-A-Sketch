const container = document.querySelector('.container');
const generateGridBtn = document.getElementById('generate-grid');

generateGridBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getUserEntry();
})



function createGrid(rows, cols) {
    for (let i=1; i<=rows; i++){
        const grid = document.createElement('div');
        grid.className = 'container-grid';
        container.appendChild(grid);
        
        for (let j=1; j<=cols; j++){
            const innerGrid = document.createElement('div');
            innerGrid.className = 'container-innergrid';
            grid.appendChild(innerGrid)

            function getRandomRgbColor () {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                let opacity = 100;
                opacity -= 10;
                return `rgb(${r}, ${g}, ${b}, ${opacity}%)`;
            }

            let randomColor = getRandomRgbColor();

            innerGrid.addEventListener("mouseenter", 
                () => {
            innerGrid.style.backgroundColor = randomColor;
        });

            innerGrid.addEventListener("mouseleave", () => {
                innerGrid.style.backgroundColor = '#333';
            });
            
        }
        }
    }

createGrid(16,16);

function getUserEntry() {
    const rows = parseInt(prompt('Enter Number of rows: '));
    const cols = parseInt(prompt("Enter Number of columns: "));
    container.innerHTML = '';
    createGrid(rows, cols);
}


