import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra2',
  templateUrl: './barra2.component.html',
  styleUrls: ['./barra2.component.css'],
})
export class Barra2Component implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
      datasets: [
        {
          backgroundColor: 'white',
          data: [65, 59, 80, 81, 56, 55, 40, 55, 66, 77, 45],
          borderRadius: 10, // Aplica un border-radius de 10px a las barras
        },
        {
          backgroundColor: '#22DBBA',
          data: [28, 48, 40, 19, 86, 27, 90, 55, 66, 77, 45],
          borderRadius: 10, // Aplica un border-radius de 10px a las barras
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: false, // Oculta la leyenda completa
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'white',
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
      datasets: {
        bar: {
          barThickness: 10, // Ajustar el valor para cambiar el ancho de las barras
        },
      },
    };
  }
}
