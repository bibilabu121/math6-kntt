/**
 * WIDGET HÌNH HỌC TRỰC QUAN (GEOMETRY PREVIEW WIDGET)
 * Dành cho Chương IV (Hình phẳng thực tiễn), Chương V (Tính đối xứng) và Chương VIII (Hình học cơ bản)
 */

export class GeometryWidget {
  static render(container, config = {}) {
    const shape = config.shape || "regular_hexagon";

    switch (shape) {
      case "regular_hexagon":
        GeometryWidget.renderHexagon(container, config);
        break;
      case "rhombus":
        GeometryWidget.renderRhombus(container, config);
        break;
      case "angle_view":
        GeometryWidget.renderAngle(container, config);
        break;
      case "segment_midpoint":
        GeometryWidget.renderMidpoint(container, config);
        break;
      case "symmetry_showcase":
        GeometryWidget.renderSymmetryShowcase(container, config);
        break;
      default:
        container.innerHTML = `<div class="geometry-placeholder">Hình học minh họa</div>`;
    }
  }

  // 1. Lục giác đều kèm các đường chéo chính
  static renderHexagon(container, config) {
    const w = 260;
    const h = 220;
    const cx = w / 2;
    const cy = h / 2;
    const r = 75;
    const labels = config.labels || ["A", "B", "C", "D", "E", "F"];
    const stroke = config.strokeColor || "#10b981";
    const fill = config.fillColor || "rgba(16, 185, 129, 0.15)";

    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      pts.push({
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle)
      });
    }

    const ptsStr = pts.map(p => `${p.x},${p.y}`).join(" ");

    let svg = `<svg viewBox="0 0 ${w} ${h}" class="math-svg-widget geometry-svg">`;
    svg += `<polygon points="${ptsStr}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;

    // Vẽ 3 đường chéo chính nếu bật
    if (config.showDiagonals) {
      for (let i = 0; i < 3; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 3];
        svg += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,3"/>`;
      }
      // Điểm tâm O
      svg += `<circle cx="${cx}" cy="${cy}" r="4" fill="#ef4444" />`;
      svg += `<text x="${cx + 8}" y="${cy - 4}" font-size="12" font-weight="bold" fill="#ef4444">O</text>`;
    }

    // Nhãn đỉnh A, B, C, D, E, F
    pts.forEach((p, idx) => {
      const dx = (p.x - cx) * 0.22;
      const dy = (p.y - cy) * 0.22;
      svg += `
        <circle cx="${p.x}" cy="${p.y}" r="3.5" fill="${stroke}"/>
        <text x="${p.x + dx}" y="${p.y + dy + 4}" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--text-primary, #1e293b)">${labels[idx] || ''}</text>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = `<div class="geometry-widget-container">${svg}</div>`;
  }

  // 2. Hình thoi với 2 đường chéo
  static renderRhombus(container, config) {
    const w = 280;
    const h = 180;
    const cx = w / 2;
    const cy = h / 2;
    const rx = 90;
    const ry = 55;
    const stroke = config.strokeColor || "#f59e0b";
    const fill = config.fillColor || "rgba(245, 158, 11, 0.15)";

    const pA = { x: cx, y: cy - ry };
    const pB = { x: cx + rx, y: cy };
    const pC = { x: cx, y: cy + ry };
    const pD = { x: cx - rx, y: cy };

    let svg = `<svg viewBox="0 0 ${w} ${h}" class="math-svg-widget geometry-svg">`;
    svg += `<polygon points="${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y} ${pD.x},${pD.y}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`;

    // Đường chéo d1 (AC) và d2 (BD)
    svg += `<line x1="${pA.x}" y1="${pA.y}" x2="${pC.x}" y2="${pC.y}" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="3,3"/>`;
    svg += `<line x1="${pD.x}" y1="${pD.y}" x2="${pB.x}" y2="${pB.y}" stroke="#ec4899" stroke-width="1.8" stroke-dasharray="3,3"/>`;

    // Nhãn kích thước đường chéo
    if (config.d1Label) {
      svg += `<text x="${cx + 10}" y="${cy - 20}" font-size="11" font-weight="bold" fill="#3b82f6">d₁ = ${config.d1Label}</text>`;
    }
    if (config.d2Label) {
      svg += `<text x="${cx - 40}" y="${cy + 22}" font-size="11" font-weight="bold" fill="#ec4899">d₂ = ${config.d2Label}</text>`;
    }

    svg += `</svg>`;
    container.innerHTML = `<div class="geometry-widget-container">${svg}</div>`;
  }

  // 3. Góc và số đo góc
  static renderAngle(container, config) {
    const deg = config.degrees || 60;
    const rad = (deg * Math.PI) / 180;
    const w = 260;
    const h = 170;
    const ox = 50;
    const oy = 135;
    const armLen = 130;

    // Tia Ox nằm ngang
    const ax = ox + armLen;
    const ay = oy;
    // Tia Oy quay ngược chiều kim đồng hồ
    const bx = ox + armLen * Math.cos(rad);
    const by = oy - armLen * Math.sin(rad);

    let svg = `<svg viewBox="0 0 ${w} ${h}" class="math-svg-widget geometry-svg">`;
    
    // Hai tia Ox, Oy
    svg += `<line x1="${ox}" y1="${oy}" x2="${ax}" y2="${ay}" stroke="var(--text-primary, #1e293b)" stroke-width="2.5"/>`;
    svg += `<line x1="${ox}" y1="${oy}" x2="${bx}" y2="${by}" stroke="var(--text-primary, #1e293b)" stroke-width="2.5"/>`;

    // Cung số đo góc
    const arcR = 36;
    const arcBx = ox + arcR * Math.cos(rad);
    const arcBy = oy - arcR * Math.sin(rad);
    const largeArc = deg > 180 ? 1 : 0;
    const arcPath = `M ${ox + arcR} ${oy} A ${arcR} ${arcR} 0 ${largeArc} 0 ${arcBx} ${arcBy}`;

    svg += `<path d="${arcPath}" fill="rgba(244, 63, 94, 0.15)" stroke="${config.arcColor || '#f43f5e'}" stroke-width="2"/>`;

    // Nhãn đỉnh O, tia x, tia y và số đo
    svg += `<text x="${ox - 14}" y="${oy + 6}" font-size="14" font-weight="bold" fill="var(--text-primary, #1e293b)">O</text>`;
    svg += `<text x="${ax + 8}" y="${ay + 5}" font-size="13" font-style="italic" fill="var(--text-secondary, #64748b)">x</text>`;
    svg += `<text x="${bx + 5}" y="${by - 5}" font-size="13" font-style="italic" fill="var(--text-secondary, #64748b)">y</text>`;
    
    const labelAngle = rad / 2;
    const textR = arcR + 18;
    const tx = ox + textR * Math.cos(labelAngle);
    const ty = oy - textR * Math.sin(labelAngle);
    svg += `<text x="${tx}" y="${ty}" font-size="13" font-weight="bold" fill="${config.arcColor || '#f43f5e'}">${config.label || `${deg}°`}</text>`;

    svg += `</svg>`;
    container.innerHTML = `<div class="geometry-widget-container">${svg}</div>`;
  }

  // 4. Đoạn thẳng và Trung điểm
  static renderMidpoint(container, config) {
    const w = 360;
    const h = 100;
    const y = 50;
    const x1 = 50;
    const x2 = 310;
    const xm = (x1 + x2) / 2;
    const color = config.strokeColor || "#0ea5e9";

    let svg = `<svg viewBox="0 0 ${w} ${h}" class="math-svg-widget geometry-svg">`;
    svg += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${color}" stroke-width="3"/>`;

    // Điểm A, B, M
    svg += `<circle cx="${x1}" cy="${y}" r="5" fill="${color}"/>`;
    svg += `<circle cx="${x2}" cy="${y}" r="5" fill="${color}"/>`;
    svg += `<circle cx="${xm}" cy="${y}" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>`;

    // Ký hiệu 2 đoạn bằng nhau (vạch chéo)
    const m1 = (x1 + xm) / 2;
    const m2 = (xm + x2) / 2;
    svg += `<line x1="${m1 - 4}" y1="${y - 8}" x2="${m1 + 4}" y2="${y + 8}" stroke="${color}" stroke-width="2"/>`;
    svg += `<line x1="${m2 - 4}" y1="${y - 8}" x2="${m2 + 4}" y2="${y + 8}" stroke="${color}" stroke-width="2"/>`;

    // Nhãn A, M, B
    svg += `<text x="${x1}" y="${y + 24}" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--text-primary, #1e293b)">${config.labelA || 'A'}</text>`;
    svg += `<text x="${xm}" y="${y + 24}" text-anchor="middle" font-size="13" font-weight="bold" fill="#ef4444">${config.labelM || 'M'}</text>`;
    svg += `<text x="${x2}" y="${y + 24}" text-anchor="middle" font-size="13" font-weight="bold" fill="var(--text-primary, #1e293b)">${config.labelB || 'B'}</text>`;

    if (config.totalLength) {
      svg += `<text x="${xm}" y="${y - 16}" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-secondary, #64748b)">Độ dài AB = ${config.totalLength}</text>`;
    }

    svg += `</svg>`;
    container.innerHTML = `<div class="geometry-widget-container">${svg}</div>`;
  }

  // 5. Trưng bày tính đối xứng (trục đối xứng & tâm đối xứng)
  static renderSymmetryShowcase(container, config) {
    const items = config.items || [];
    let html = `<div class="symmetry-grid">`;

    items.forEach(item => {
      let icon = "circle";
      if (item.type === "triangle") icon = "triangle";
      if (item.type === "trapezoid") icon = "square";

      html += `
        <div class="symmetry-card">
          <div class="symmetry-badge-shape"><i data-lucide="${icon}"></i> ${item.name}</div>
          <div class="symmetry-features">
            <span class="feat ${item.hasAxis ? 'yes' : 'no'}">
              <i data-lucide="${item.hasAxis ? 'check' : 'x'}"></i> Trục đối xứng
            </span>
            <span class="feat ${item.hasCenter ? 'yes' : 'no'}">
              <i data-lucide="${item.hasCenter ? 'check' : 'x'}"></i> Tâm đối xứng
            </span>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }
}
