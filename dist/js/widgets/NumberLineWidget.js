/**
 * WIDGET TRỤC SỐ TRỰC QUAN (NUMBER LINE WIDGET)
 * Dành cho Chương I (Số tự nhiên) và Chương III (Số nguyên)
 * Hiển thị trục số SVG với gốc 0, các số nguyên âm/dương, mũi tên dịch chuyển và điểm đánh dấu
 */

export class NumberLineWidget {
  static render(container, config = {}) {
    const min = config.min !== undefined ? config.min : -5;
    const max = config.max !== undefined ? config.max : 5;
    const step = config.step || 1;
    const markedPoints = config.markedPoints || [];
    const arrows = config.arrows || [];

    const width = 640;
    const height = 140;
    const paddingX = 40;
    const axisY = 85;

    const totalSteps = (max - min) / step;
    const stepWidth = (width - 2 * paddingX) / totalSteps;

    const getX = (val) => paddingX + ((val - min) / step) * stepWidth;

    let svg = `<svg viewBox="0 0 ${width} ${height}" class="math-svg-widget number-line-svg">`;

    // Definitions (mũi tên)
    svg += `
      <defs>
        <marker id="arrowhead-axis" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 0, 8 4, 0 8" fill="var(--text-secondary, #94a3b8)" />
        </marker>
        <marker id="arrowhead-jump" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <polygon points="0 1, 7 4, 0 7" fill="#6366f1" />
        </marker>
      </defs>
    `;

    // Đường trục chính
    svg += `<line x1="${paddingX - 15}" y1="${axisY}" x2="${width - paddingX + 20}" y2="${axisY}" stroke="var(--border-color, #cbd5e1)" stroke-width="2.5" marker-end="url(#arrowhead-axis)"/>`;

    // Các vạch chia (ticks) và nhãn số
    for (let val = min; val <= max; val += step) {
      const x = getX(val);
      const isZero = val === 0;
      const tickHeight = isZero ? 16 : 10;
      const tickColor = isZero ? "var(--accent-color, #3b82f6)" : "var(--text-muted, #94a3b8)";
      const tickWeight = isZero ? 2.5 : 1.5;

      svg += `<line x1="${x}" y1="${axisY - tickHeight/2}" x2="${x}" y2="${axisY + tickHeight/2}" stroke="${tickColor}" stroke-width="${tickWeight}"/>`;
      
      const labelColor = isZero ? "var(--accent-color, #3b82f6)" : (val < 0 ? "#ef4444" : "var(--text-primary, #1e293b)");
      const fontWeight = isZero ? "bold" : "normal";

      svg += `<text x="${x}" y="${axisY + 22}" text-anchor="middle" font-size="12" font-weight="${fontWeight}" fill="${labelColor}">${val}</text>`;
    }

    // Các cung tên dịch chuyển (jump arrows) cho phép cộng/trừ số nguyên
    arrows.forEach(arr => {
      const x1 = getX(arr.from);
      const x2 = getX(arr.to);
      const midX = (x1 + x2) / 2;
      const arcH = 38;
      const color = arr.color || "#6366f1";

      const path = `M ${x1} ${axisY - 8} Q ${midX} ${axisY - arcH} ${x2} ${axisY - 8}`;
      svg += `<path d="${path}" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead-jump)"/>`;

      if (arr.label) {
        svg += `
          <rect x="${midX - 16}" y="${axisY - arcH - 12}" width="32" height="18" rx="4" fill="var(--bg-card, #ffffff)" stroke="${color}" stroke-width="1.5"/>
          <text x="${midX}" y="${axisY - arcH}" text-anchor="middle" font-size="11" font-weight="bold" fill="${color}">${arr.label}</text>
        `;
      }
    });

    // Các điểm đánh dấu nổi bật
    markedPoints.forEach(pt => {
      const x = getX(pt.value);
      const color = pt.color || "#ef4444";
      // Chấm tròn trên trục
      svg += `<circle cx="${x}" cy="${axisY}" r="5.5" fill="${color}" stroke="#ffffff" stroke-width="2" />`;
      // Thẻ tên điểm phía trên
      svg += `
        <g class="marked-point-group">
          <rect x="${x - 14}" y="${axisY - 36}" width="28" height="20" rx="6" fill="${color}" />
          <text x="${x}" y="${axisY - 22}" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">${pt.label}</text>
        </g>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
  }
}
