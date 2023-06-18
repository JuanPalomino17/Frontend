import { Component } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            backgroundColor: '#13B497',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderRadius: 10 // Aplica un border-radius de 10px a las barras
          },
          {
            backgroundColor: '#3B444D',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderRadius: 10 // Aplica un border-radius de 10px a las barras
          }
        ]
      };

      this.options = {
        indexAxis: 'x',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
          x: {
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: 'white',
              display: false, // Oculta los valores del eje y
              max: 100 // Establece el valor máximo del eje y
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
              display: false // Oculta las líneas del grid del eje y
            }
          }
        },
        plugins: {
          legend: {
            display: false // Oculta la leyenda completa
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
              }
            }
          }
        },
        datasets: {
          bar: {
            barThickness: 10 // Ajustar el valor para cambiar el ancho de las barras
          }
        }
      };
  }
}
