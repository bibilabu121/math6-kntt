/**
 * WIDGET BIỂU ĐỒ TRANH (PICTOGRAM WIDGET)
 * Dành cho Chương IX (Dữ liệu và xác suất thực nghiệm - Bài 39 Bảng thống kê và biểu đồ tranh)
 */

export class PictogramWidget {
  static render(container, config = {}) {
    const title = config.title || "Biểu đồ tranh";
    const symbol = config.unitSymbol || "⭐";
    const unitValue = config.unitValue || 1;
    const unitLabel = config.unitLabel || `1 biểu tượng ${symbol} = ${unitValue} đơn vị`;
    const rows = config.rows || [];

    let rowsHtml = "";
    rows.forEach(row => {
      const fullSymbols = Math.floor(row.count);
      const hasHalf = (row.count % 1) >= 0.5;

      let symbolsDisplay = "";
      for (let i = 0; i < fullSymbols; i++) {
        symbolsDisplay += `<span class="pictogram-icon full">${symbol}</span>`;
      }
      if (hasHalf) {
        symbolsDisplay += `<span class="pictogram-icon half" title="0.5 đơn vị">${symbol}</span>`;
      }

      const calculatedTotal = row.count * unitValue;

      rowsHtml += `
        <div class="pictogram-row">
          <div class="pictogram-row-label">${row.label}</div>
          <div class="pictogram-row-symbols">${symbolsDisplay}</div>
          <div class="pictogram-row-val">(${calculatedTotal})</div>
        </div>
      `;
    });

    const html = `
      <div class="pictogram-container">
        <div class="pictogram-header">
          <span class="pictogram-title"><i data-lucide="image"></i> ${title}</span>
          <span class="pictogram-legend">${unitLabel}</span>
        </div>
        <div class="pictogram-body">
          ${rowsHtml}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
}
