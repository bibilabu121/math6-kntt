/**
 * WIDGET THANH PHÂN SỐ TRỰC QUAN (FRACTION BAR WIDGET)
 * Dành cho Chương VI (Phân số)
 * Biểu diễn trực quan tỷ lệ phân số, so sánh hai hay nhiều phân số bằng các thanh chữ nhật chia đều
 */

export class FractionBarWidget {
  static render(container, config = {}) {
    let html = `<div class="fraction-widget-container">`;

    if (config.compare && Array.isArray(config.bars)) {
      // Chế độ so sánh nhiều thanh
      config.bars.forEach((bar, idx) => {
        html += FractionBarWidget.renderSingleBar(bar, idx);
      });
    } else {
      // Chế độ hiển thị 1 phân số
      html += FractionBarWidget.renderSingleBar(config, 0);
    }

    html += `</div>`;
    container.innerHTML = html;
  }

  static renderSingleBar(bar, index) {
    const total = bar.totalParts || 4;
    const colored = bar.coloredParts || 1;
    const color = bar.color || "#3b82f6";
    const label = bar.label || `${colored}/${total}`;

    let cellsHtml = "";
    for (let i = 0; i < total; i++) {
      const isFilled = i < colored;
      const bgStyle = isFilled 
        ? `background: linear-gradient(135deg, ${color}, ${color}dd);` 
        : `background: var(--bg-bar-empty, rgba(255, 255, 255, 0.05));`;
      const borderStyle = `border-right: 1px solid var(--border-color, rgba(255, 255, 255, 0.15));`;

      cellsHtml += `
        <div class="fraction-cell ${isFilled ? 'filled' : 'empty'}" 
             style="${bgStyle} ${i === total - 1 ? '' : borderStyle}">
          <span class="fraction-cell-index">${i + 1}</span>
        </div>
      `;
    }

    return `
      <div class="fraction-bar-row">
        <div class="fraction-bar-header">
          <span class="fraction-bar-label">${label}</span>
          <span class="fraction-bar-badge" style="color: ${color}; background: ${color}22; border: 1px solid ${color}44;">
            ${colored} / ${total} phần
          </span>
        </div>
        <div class="fraction-bar-track">
          ${cellsHtml}
        </div>
      </div>
    `;
  }
}
