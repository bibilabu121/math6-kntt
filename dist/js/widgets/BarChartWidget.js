/**
 * WIDGET BIỂU ĐỒ CỘT & CỘT KÉP (BAR CHART WIDGET)
 * Dành cho Chương IX (Bài 40 Biểu đồ cột, Bài 41 Biểu đồ cột kép)
 */

export class BarChartWidget {
  static render(container, config = {}) {
    const title = config.title || "Biểu đồ cột";
    const categories = config.categories || ["A", "B", "C", "D"];
    const series = config.series || [{ name: "Số lượng", values: [10, 20, 15, 25], color: "#6366f1" }];
    const yAxisLabel = config.yAxisLabel || "Giá trị";

    // Tìm giá trị max để scale trục y
    let maxVal = 0;
    series.forEach(s => {
      s.values.forEach(v => {
        if (v > maxVal) maxVal = v;
      });
    });
    // Làm tròn maxVal lên mốc đẹp (bội số của 5 hoặc 10)
    const yMax = Math.ceil((maxVal * 1.15) / 5) * 5 || 10;

    const width = 560;
    const height = 240;
    const padLeft = 55;
    const padBottom = 40;
    const padTop = 30;
    const padRight = 30;

    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    let svg = `<svg viewBox="0 0 ${width} ${height}" class="math-svg-widget bar-chart-svg">`;

    // Lưới ngang & nhãn trục Y
    const yTicks = 4;
    for (let i = 0; i <= yTicks; i++) {
      const val = Math.round((yMax / yTicks) * i);
      const y = padTop + chartH - (i / yTicks) * chartH;

      svg += `<line x1="${padLeft}" y1="${y}" x2="${width - padRight}" y2="${y}" stroke="var(--border-color, rgba(255,255,255,0.1))" stroke-width="1" stroke-dasharray="3,3"/>`;
      svg += `<text x="${padLeft - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="var(--text-muted, #94a3b8)">${val}</text>`;
    }

    // Trục X và Trục Y
    svg += `<line x1="${padLeft}" y1="${padTop + chartH}" x2="${width - padRight}" y2="${padTop + chartH}" stroke="var(--text-secondary, #64748b)" stroke-width="2"/>`;
    svg += `<line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${padTop + chartH}" stroke="var(--text-secondary, #64748b)" stroke-width="2"/>`;

    // Nhãn trục Y
    svg += `<text x="${padLeft}" y="${padTop - 12}" text-anchor="start" font-size="11" font-weight="600" fill="var(--text-secondary, #64748b)">${yAxisLabel}</text>`;

    // Vẽ các cột
    const numCats = categories.length;
    const groupW = chartW / numCats;
    const numSeries = series.length;
    const barW = Math.min(28, (groupW * 0.7) / numSeries);

    categories.forEach((cat, cIdx) => {
      const groupCenter = padLeft + cIdx * groupW + groupW / 2;
      const totalGroupBarsW = numSeries * barW;
      const startX = groupCenter - totalGroupBarsW / 2;

      series.forEach((s, sIdx) => {
        const val = s.values[cIdx] || 0;
        const bH = (val / yMax) * chartH;
        const bx = startX + sIdx * barW;
        const by = padTop + chartH - bH;
        const color = s.color || "#3b82f6";

        svg += `
          <rect x="${bx}" y="${by}" width="${barW - 4}" height="${bH}" rx="4" fill="${color}" opacity="0.9">
            <title>${cat} - ${s.name}: ${val}</title>
          </rect>
          <text x="${bx + (barW - 4)/2}" y="${by - 5}" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--text-primary, #1e293b)">${val}</text>
        `;
      });

      // Nhãn danh mục trục X
      svg += `<text x="${groupCenter}" y="${padTop + chartH + 20}" text-anchor="middle" font-size="12" font-weight="500" fill="var(--text-primary, #1e293b)">${cat}</text>`;
    });

    svg += `</svg>`;

    // Render title và legend nếu có nhiều series (biểu đồ cột kép)
    let legendHtml = "";
    if (series.length > 1) {
      legendHtml = `<div class="bar-chart-legend">` + series.map(s => `
        <span class="legend-item">
          <span class="legend-box" style="background: ${s.color};"></span>
          ${s.name}
        </span>
      `).join("") + `</div>`;
    }

    container.innerHTML = `
      <div class="bar-chart-widget-container">
        <div class="bar-chart-title"><i data-lucide="bar-chart-2"></i> ${title}</div>
        ${svg}
        ${legendHtml}
      </div>
    `;
  }
}
