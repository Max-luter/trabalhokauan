document.addEventListener('DOMContentLoaded', function() {
    const data = [{
      x: ['Muito Ruim', 'Ruim', 'Razoável', 'Boa', 'Muito Boa'],
      y: [9, 15, 35, 40, 71],
      type: 'bar',
      marker: {
        color: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
      }
    }];
  
    const layout = {
      title: 'Qualidade de Comida do Restaurante',
      xaxis: {
        title: 'Qualidade da Comida'
      },
      yaxis: {
        title: 'Número de Avaliações'
      }
    };
  
    Plotly.newPlot('foodQualityChart', data, layout);
  });
  