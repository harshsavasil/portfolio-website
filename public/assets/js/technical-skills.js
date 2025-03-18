// Radar Chart Configuration
const ctxFrontend = document.getElementById('frontendRadarChart').getContext('2d');
const ctxBackend = document.getElementById('backendRadarChart').getContext('2d');
const ctxDevOps = document.getElementById('devopsRadarChart').getContext('2d');
const ctxAiMl = document.getElementById('aimlRadarChart').getContext('2d');

const skills = {
    frontend: [
        {
            skill: 'Next.js',
            proficiency: 75
        },
        {
            skill: 'Tailwind CSS',
            proficiency: 60
        },
        {
            skill: 'JavaScript',
            proficiency: 90
        },
        {
            skill: 'React',
            proficiency: 70
        },
        {
            skill: 'Node.js',
            proficiency: 95
        }
    ],
    backend: [
        {
            skill: 'Node.js',
            proficiency: 90
        },
        {
            skill: 'Java',
            proficiency: 80
        },
        {
            skill: 'Python',
            proficiency: 90
        },
        {
            skill: 'Kafka',
            proficiency: 90
        },
        {
            skill: 'PostgreSQL',
            proficiency: 90
        },
        {
            skill: 'MongoDB',
            proficiency: 90
        },
        {
            skill: 'Redis',
            proficiency: 90
        }
    ],
    devops: [
        {
            skill: 'Kubernetes',
            proficiency: 80
        },
        {
            skill: 'Docker',
            proficiency: 90
        },
        {
            skill: 'AWS',
            proficiency: 85
        },
        {
            skill: 'CI/CD',
            proficiency: 70
        },
        {
            skill: 'Git',
            proficiency: 90
        }
    ],
    aiMl: [
        {
            skill: 'Python',
            proficiency: 90
        },
        {
            skill: 'Langchain',
            proficiency: 80
        },
        {
            skill: 'Transformers',
            proficiency: 70
        },
        {
            skill: 'llamaindex',
            proficiency: 80
        },
        {
            skill: 'LLMs',
            proficiency: 80
        },
        {
            skill: 'RAG',
            proficiency: 80
        },
        {
            skill: 'LangGraph',
            proficiency: 80
        },
        {
            skill: 'AI Agents',
            proficiency: 80
        }
    ]
};

const frontendRadarChart = new Chart(ctxFrontend, {
    type: 'radar',
    data: {
        labels: skills.frontend.map(skill => skill.skill),
        datasets: [{
            label: 'Skills Proficiency',
            data: skills.frontend.map(skill => skill.proficiency),
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
            borderColor: 'rgba(54, 162, 235, 1)', // Blue
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                grid: {
                    color: 'rgba(54, 162, 235, 0.2)',
                    display: true,
                    lineWidth: 1
    
                },
                pointLabels: {
                    fontSize: 14,
                    fontColor: '#e0e0e0' // Light color for point labels
                },
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                    fontColor: '#e0e0e0', // Light color for tick labels
                    backdropColor: 'rgba(54, 162, 235, 0.2)' // Light color for radar chart backdrop
    
                },
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 3,
                fill: true,
                color: 'rgba(54, 162, 235, 0.2)'
            }
        },
        plugins: {
            tooltip: {
                backgroundColor: '#333', // Dark background for tooltips
                titleColor: '#fff', // Light title text in tooltips
                bodyColor: '#e0e0e0', // Light body text in tooltips
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Show value with percentage
                    }
                }
            }
        }
    }
});

const backendRadarChart = new Chart(ctxBackend, {
    type: 'radar',
    data: {
        labels: skills.backend.map(skill => skill.skill),
        datasets: [{
            label: 'Skills Proficiency',
            data: skills.backend.map(skill => skill.proficiency),
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
            borderColor: 'rgba(54, 162, 235, 1)', // Blue
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                grid: {
                    color: 'rgba(54, 162, 235, 0.2)',
                    display: true,
                    lineWidth: 1
    
                },
                pointLabels: {
                    fontSize: 14,
                    fontColor: '#e0e0e0' // Light color for point labels
                },
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                    fontColor: '#e0e0e0', // Light color for tick labels
                    backdropColor: 'rgba(54, 162, 235, 0.2)' // Light color for radar chart backdrop
    
                },
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 3,
                fill: true,
                color: 'rgba(54, 162, 235, 0.2)'
            }
        },
        plugins: {
            tooltip: {
                backgroundColor: '#333', // Dark background for tooltips
                titleColor: '#fff', // Light title text in tooltips
                bodyColor: '#e0e0e0', // Light body text in tooltips
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Show value with percentage
                    }
                }
            }
        }
    }
});

const devopsRadarChart = new Chart(ctxDevOps, {
    type: 'radar',
    data: {
        labels: skills.devops.map(skill => skill.skill),
        datasets: [{
            label: 'Skills Proficiency',
            data: skills.devops.map(skill => skill.proficiency),
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
            borderColor: 'rgba(54, 162, 235, 1)', // Blue
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                grid: {
                    color: 'rgba(54, 162, 235, 0.2)',
                    display: true,
                    lineWidth: 1
    
                },
                pointLabels: {
                    fontSize: 14,
                    fontColor: '#e0e0e0' // Light color for point labels
                },
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                    fontColor: '#e0e0e0', // Light color for tick labels
                    backdropColor: 'rgba(54, 162, 235, 0.2)' // Light color for radar chart backdrop
    
                },
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 3,
                fill: true,
                color: 'rgba(54, 162, 235, 0.2)'
            }
        },
        plugins: {
            tooltip: {
                backgroundColor: '#333', // Dark background for tooltips
                titleColor: '#fff', // Light title text in tooltips
                bodyColor: '#e0e0e0', // Light body text in tooltips
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Show value with percentage
                    }
                }
            }
        }
    }
});

const aimlRadarChart = new Chart(ctxAiMl, {
    type: 'radar',
    data: {
        labels: skills.aiMl.map(skill => skill.skill),
        datasets: [{
            label: 'Skills Proficiency',
            data: skills.aiMl.map(skill => skill.proficiency),
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
            borderColor: 'rgba(54, 162, 235, 1)', // Blue
            borderWidth: 2,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                grid: {
                    color: 'rgba(54, 162, 235, 0.2)',
                    display: true,
                    lineWidth: 1
    
                },
                pointLabels: {
                    fontSize: 14,
                    fontColor: '#e0e0e0' // Light color for point labels
                },
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 20,
                    fontColor: '#e0e0e0', // Light color for tick labels
                    backdropColor: 'rgba(54, 162, 235, 0.2)' // Light color for radar chart backdrop
    
                },
            }
        },
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 3,
                fill: true,
                color: 'rgba(54, 162, 235, 0.2)'
            }
        },
        plugins: {
            tooltip: {
                backgroundColor: '#333', // Dark background for tooltips
                titleColor: '#fff', // Light title text in tooltips
                bodyColor: '#e0e0e0', // Light body text in tooltips
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Show value with percentage
                    }
                }
            }
        }
    }
});

// Function to switch between tabs and show the corresponding chart
function showChart(category) {
    // Hide all chart containers
    const allContainers = document.querySelectorAll('.chart-container');
    allContainers.forEach(container => {
        container.classList.remove('active-container');
    });

    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Show the selected chart container
    document.getElementById(category).classList.add('active-container');

    // Set the active tab
    const activeTab = document.querySelector(`[onclick="showChart('${category}')"]`);
    activeTab.classList.add('active-tab');
}

// Show the default tab (backend) when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showChart('backend');
});