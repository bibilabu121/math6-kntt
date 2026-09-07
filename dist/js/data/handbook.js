/**
 * SỔ TAY CÔNG THỨC TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Toàn bộ công thức được định dạng chuẩn LaTeX KaTeX ($$...$$) chống lỗi parse.
 * Toàn bộ công thức hình học kèm hình vẽ SVG trực quan, sắc nét.
 */

export const FORMULA_HANDBOOK = [
  // ==========================================
  // PHẦN 1: HÌNH HỌC PHẲNG & THỰC TIỄN (CÓ HÌNH MINH HỌA SVG)
  // ==========================================
  {
    category: "geometry",
    categoryTitle: "Hình Học & Đo Đạc Thực Tiễn",
    icon: "shapes",
    items: [
      {
        id: "geo-square",
        title: "Hình vuông",
        formula_latex: "$$\\begin{aligned} C &= 4a \\\\ S &= a^2 \\end{aligned}$$",
        description: "Hình vuông có 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau và vuông góc tại trung điểm mỗi đường.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <rect x="35" y="15" width="110" height="110" rx="4" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5"/>
            <text x="90" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#6366f1">S = a²</text>
            <text x="90" y="136" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">cạnh a</text>
            <text x="22" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">a</text>
            <rect x="35" y="15" width="12" height="12" fill="none" stroke="#6366f1" stroke-width="1.5"/>
          </svg>
        `
      },
      {
        id: "geo-rectangle",
        title: "Hình chữ nhật",
        formula_latex: "$$\\begin{aligned} C &= 2(a + b) \\\\ S &= a \\cdot b \\end{aligned}$$",
        description: "Hình chữ nhật có 4 góc vuông, các cạnh đối song song và bằng nhau, hai đường chéo bằng nhau và cắt nhau tại trung điểm.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <rect x="20" y="30" width="140" height="80" rx="3" fill="rgba(14, 165, 233, 0.15)" stroke="#0ea5e9" stroke-width="2.5"/>
            <text x="90" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#0ea5e9">S = a · b</text>
            <text x="90" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">chiều dài a</text>
            <text x="10" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">b</text>
          </svg>
        `
      },
      {
        id: "geo-triangle-general",
        title: "Tam giác thường",
        formula_latex: "$$\\begin{aligned} C &= a + b + c \\\\ S &= \\frac{1}{2} a \\cdot h \\end{aligned}$$",
        description: "Diện tích hình tam giác bằng một nửa tích của độ dài đáy với chiều cao tương ứng hạ từ đỉnh đối diện.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="30,115 155,115 75,25" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
            <line x1="75" y1="25" x2="75" y2="115" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.8"/>
            <rect x="75" y="103" width="10" height="12" fill="none" stroke="#ef4444" stroke-width="1.2"/>
            <text x="65" y="75" font-size="11" font-weight="bold" fill="#ef4444">h</text>
            <text x="95" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">đáy a</text>
            <text x="45" y="65" font-size="11" font-weight="bold" fill="var(--text-primary)">b</text>
            <text x="125" y="65" font-size="11" font-weight="bold" fill="var(--text-primary)">c</text>
          </svg>
        `
      },
      {
        id: "geo-triangle-equilateral",
        title: "Tam giác đều",
        formula_latex: "$$\\begin{aligned} C &= 3a \\\\ \\widehat{A} &= \\widehat{B} = \\widehat{C} = 60^\\circ \\end{aligned}$$",
        description: "Tam giác đều có 3 cạnh bằng nhau, 3 góc bằng nhau và mỗi góc đều bằng 60 độ.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="90,15 30,120 150,120" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
            <text x="90" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#10b981">C = 3a</text>
            <text x="90" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">a</text>
            <text x="50" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">a</text>
            <text x="130" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">a</text>
          </svg>
        `
      },
      {
        id: "geo-rhombus",
        title: "Hình thoi",
        formula_latex: "$$\\begin{aligned} C &= 4a \\\\ S &= \\frac{1}{2} m \\cdot n \\end{aligned}$$",
        description: "Hình thoi có 4 cạnh bằng nhau, 2 đường chéo vuông góc tại trung điểm mỗi đường. Diện tích bằng nửa tích hai đường chéo.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="90,15 155,70 90,125 25,70" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2.5"/>
            <line x1="90" y1="15" x2="90" y2="125" stroke="#3b82f6" stroke-dasharray="3,3" stroke-width="1.8"/>
            <line x1="25" y1="70" x2="155" y2="70" stroke="#ec4899" stroke-dasharray="3,3" stroke-width="1.8"/>
            <text x="100" y="45" font-size="11" font-weight="bold" fill="#3b82f6">m</text>
            <text x="135" y="65" font-size="11" font-weight="bold" fill="#ec4899">n</text>
            <text x="90" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#f59e0b">S = ½ m·n</text>
          </svg>
        `
      },
      {
        id: "geo-parallelogram",
        title: "Hình bình hành",
        formula_latex: "$$\\begin{aligned} C &= 2(a + b) \\\\ S &= a \\cdot h \\end{aligned}$$",
        description: "Hình bình hành có các cạnh đối song song và bằng nhau. Diện tích bằng độ dài cạnh đáy nhân với chiều cao tương ứng.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="45,30 160,30 135,110 20,110" fill="rgba(139, 92, 246, 0.15)" stroke="#8b5cf6" stroke-width="2.5"/>
            <line x1="45" y1="30" x2="45" y2="110" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.8"/>
            <text x="36" y="75" font-size="11" font-weight="bold" fill="#ef4444">h</text>
            <text x="80" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">đáy a</text>
            <text x="95" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#8b5cf6">S = a · h</text>
          </svg>
        `
      },
      {
        id: "geo-trapezoid",
        title: "Hình thang cân",
        formula_latex: "$$\\begin{aligned} C &= a + b + 2c \\\\ S &= \\frac{(a + b) \\cdot h}{2} \\end{aligned}$$",
        description: "Hình thang cân có hai cạnh bên bằng nhau, hai góc kề đáy bằng nhau. Diện tích bằng nửa tích tổng hai đáy với chiều cao.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="50,25 130,25 160,115 20,115" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
            <line x1="50" y1="25" x2="50" y2="115" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.8"/>
            <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--text-primary)">đáy nhỏ a</text>
            <text x="90" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--text-primary)">đáy lớn b</text>
            <text x="40" y="75" font-size="11" font-weight="bold" fill="#ef4444">h</text>
            <text x="95" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">S = (a+b)h/2</text>
          </svg>
        `
      },
      {
        id: "geo-hexagon",
        title: "Hình lục giác đều",
        formula_latex: "$$\\begin{aligned} C &= 6a \\\\ S &= 6 \\cdot S_{\\Delta \\text{ đều}} \\end{aligned}$$",
        description: "Lục giác đều có 6 cạnh bằng nhau, 6 góc bằng nhau, ghép từ 6 tam giác đều bằng nhau quanh tâm O.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <polygon points="90,12 145,43 145,97 90,128 35,97 35,43" fill="rgba(236, 72, 153, 0.15)" stroke="#ec4899" stroke-width="2.5"/>
            <line x1="90" y1="12" x2="90" y2="128" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5"/>
            <line x1="35" y1="43" x2="145" y2="97" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5"/>
            <line x1="35" y1="97" x2="145" y2="43" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5"/>
            <circle cx="90" cy="70" r="3.5" fill="#ef4444"/>
            <text x="98" y="68" font-size="11" font-weight="bold" fill="#ef4444">O</text>
            <text x="90" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#ec4899">C = 6a</text>
          </svg>
        `
      },
      {
        id: "geo-circle",
        title: "Hình tròn & Đường tròn",
        formula_latex: "$$\\begin{aligned} C &= 2 \\pi r = \\pi d \\\\ S &= \\pi r^2 \\quad (\\pi \\approx 3{,}14) \\end{aligned}$$",
        description: "Đường tròn tâm O bán kính r là tập hợp các điểm cách O một khoảng bằng r. Hình tròn gồm đường tròn và các điểm bên trong nó.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <circle cx="90" cy="70" r="50" fill="rgba(99, 102, 241, 0.12)" stroke="#6366f1" stroke-width="2.5"/>
            <line x1="90" y1="70" x2="140" y2="70" stroke="#ef4444" stroke-width="2"/>
            <circle cx="90" cy="70" r="3.5" fill="#ef4444"/>
            <text x="85" y="65" font-size="11" font-weight="bold" fill="#ef4444">O</text>
            <text x="115" y="62" font-size="11" font-weight="bold" fill="#ef4444">r</text>
            <text x="90" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#6366f1">S = πr²</text>
          </svg>
        `
      },
      {
        id: "geo-midpoint",
        title: "Trung điểm đoạn thẳng",
        formula_latex: "$$AM = MB = \\frac{AB}{2}$$",
        description: "Điểm M nằm giữa hai điểm A và B sao cho MA = MB được gọi là trung điểm của đoạn thẳng AB.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <line x1="25" y1="70" x2="155" y2="70" stroke="#0ea5e9" stroke-width="3"/>
            <circle cx="25" cy="70" r="4" fill="#0ea5e9"/>
            <circle cx="90" cy="70" r="4.5" fill="#ef4444"/>
            <circle cx="155" cy="70" r="4" fill="#0ea5e9"/>
            <text x="25" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">A</text>
            <text x="90" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#ef4444">M</text>
            <text x="155" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="var(--text-primary)">B</text>
            <line x1="55" y1="62" x2="55" y2="78" stroke="#10b981" stroke-width="2"/>
            <line x1="125" y1="62" x2="125" y2="78" stroke="#10b981" stroke-width="2"/>
            <text x="90" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#10b981">AM = MB = AB/2</text>
          </svg>
        `
      },
      {
        id: "geo-angles",
        title: "Phân loại các góc",
        formula_latex: "$$\\begin{aligned} \\text{Góc nhọn:} &\\quad 0^\\circ < \\alpha < 90^\\circ \\\\ \\text{Góc vuông:} &\\quad \\alpha = 90^\\circ \\\\ \\text{Góc tù:} &\\quad 90^\\circ < \\alpha < 180^\\circ \\\\ \\text{Góc bẹt:} &\\quad \\alpha = 180^\\circ \\end{aligned}$$",
        description: "Góc là hình gồm hai tia chung gốc. Điểm chung gốc là đỉnh của góc, hai tia là hai cạnh của góc.",
        svg: `
          <svg viewBox="0 0 180 140" class="handbook-svg">
            <line x1="20" y1="110" x2="160" y2="110" stroke="var(--text-primary)" stroke-width="2"/>
            <line x1="90" y1="110" x2="90" y2="25" stroke="#3b82f6" stroke-width="2"/>
            <line x1="90" y1="110" x2="145" y2="40" stroke="#10b981" stroke-width="2"/>
            <line x1="90" y1="110" x2="35" y2="40" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="90" cy="110" r="4" fill="#ef4444"/>
            <text x="90" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#ef4444">Gốc O</text>
            <text x="90" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#3b82f6">90° (Vuông)</text>
            <text x="145" y="32" font-size="10" font-weight="bold" fill="#10b981">Nhọn</text>
            <text x="25" y="32" font-size="10" font-weight="bold" fill="#f59e0b">Tù</text>
          </svg>
        `
      }
    ]
  },

  // ==========================================
  // PHẦN 2: SỐ TỰ NHIÊN & TÍNH CHIA HẾT
  // ==========================================
  {
    category: "arithmetic",
    categoryTitle: "Số Tự Nhiên & Tính Chia Hết",
    icon: "hash",
    items: [
      {
        id: "alg-powers",
        title: "Công thức lũy thừa",
        formula_latex: "$$\\begin{aligned} a^m \\cdot a^n &= a^{m+n} \\\\ a^m : a^n &= a^{m-n} \\quad (a \\neq 0, m \\ge n) \\\\ (a^m)^n &= a^{m \\cdot n} \\\\ a^0 &= 1 \\quad (a \\neq 0) \\end{aligned}$$",
        description: "Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ. Khi chia, ta giữ nguyên cơ số và trừ các số mũ."
      },
      {
        id: "alg-order-ops",
        title: "Thứ tự thực hiện phép tính",
        formula_latex: "$$\\begin{aligned} \\text{Không ngoặc: } & \\text{Lũy thừa} \\to \\text{Nhân/Chia} \\to \\text{Cộng/Trừ} \\\\ \\text{Có dấu ngoặc: } & (\\;) \\longrightarrow [\\;] \\longrightarrow \\{\\;\\} \\end{aligned}$$",
        description: "Biểu thức không ngoặc: thực hiện lũy thừa trước, rồi đến nhân chia, cuối cùng là cộng trừ. Biểu thức có ngoặc: từ trong ra ngoài."
      },
      {
        id: "alg-divisibility-sum",
        title: "Tính chất chia hết của tổng & hiệu",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} a \\; \\vdots \\; m \\quad \\text{và} \\quad b \\; \\vdots \\; m &\\implies (a \\pm b) \\; \\vdots \\; m \\\\[3pt] a \\; \\vdots \\; m \\quad \\text{và} \\quad b \\; \\not\\vdots \\; m &\\implies (a \\pm b) \\; \\not\\vdots \\; m \\end{aligned}$$",
        description: "Nếu tất cả các số hạng đều chia hết cho m thì tổng/hiệu chia hết cho m. Nếu chỉ có một số hạng không chia hết thì tổng/hiệu không chia hết."
      },
      {
        id: "alg-divisibility-rules",
        title: "Dấu hiệu chia hết cho 2, 3, 5, 9",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} \\vdots 2 \\text{ khi } &\\quad \\text{Chữ số tận cùng là } 0, 2, 4, 6, 8 \\\\ \\vdots 5 \\text{ khi } &\\quad \\text{Chữ số tận cùng là } 0 \\text{ hoặc } 5 \\\\ \\vdots 3 \\text{ khi } &\\quad \\text{Tổng các chữ số chia hết cho } 3 \\\\ \\vdots 9 \\text{ khi } &\\quad \\text{Tổng các chữ số chia hết cho } 9 \\end{aligned}$$",
        description: "Một số chia hết cho cả 2 và 5 khi và chỉ khi tận cùng là 0. Một số chia hết cho 9 thì chắc chắn chia hết cho 3."
      },
      {
        id: "alg-gcd-lcm",
        title: "ƯCLN và BCNN",
        formula_latex: "$$\\begin{aligned} \\text{ƯCLN}(a, b) &: \\text{Thừa số chung (số mũ nhỏ nhất)} \\\\[4pt] \\text{BCNN}(a, b) &: \\text{Thừa số chung và riêng (số mũ lớn nhất)} \\\\[4pt] a \\cdot b &= \\text{ƯCLN}(a, b) \\cdot \\text{BCNN}(a, b) \\end{aligned}$$",
        description: "Hai số có ƯCLN bằng 1 được gọi là hai số nguyên tố cùng nhau. BCNN luôn chia hết cho cả a và b."
      }
    ]
  },

  // ==========================================
  // PHẦN 3: SỐ NGUYÊN & QUY TẮC DẤU
  // ==========================================
  {
    category: "integers",
    categoryTitle: "Số Nguyên & Quy Tắc Dấu",
    icon: "move-horizontal",
    items: [
      {
        id: "int-addition",
        title: "Phép cộng số nguyên",
        formula_latex: "$$\\begin{aligned} (+a) + (+b) &= a + b \\\\ (-a) + (-b) &= -(a + b) \\\\ a + (-a) &= 0 \\quad (\\text{hai số đối nhau}) \\end{aligned}$$",
        description: "Cộng hai số cùng dấu âm: cộng hai phần số tự nhiên rồi đặt dấu trừ đằng trước. Cộng hai số đối nhau luôn bằng 0."
      },
      {
        id: "int-brackets-transfer",
        title: "Quy tắc dấu ngoặc & Chuyển vế",
        formula_latex: "$$\\begin{aligned} -(a - b + c) &= -a + b - c \\\\ +(a - b + c) &= a - b + c \\\\ x + a = b &\\iff x = b - a \\end{aligned}$$",
        description: "Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, ta phải đổi dấu số hạng đó: dấu cộng đổi thành dấu trừ và ngược lại."
      },
      {
        id: "int-multiplication",
        title: "Quy tắc nhân, chia hai số nguyên",
        formula_latex: "$$\\begin{aligned} (+) \\cdot (+) = (+) &\\qquad (-) \\cdot (-) = (+) \\\\ (+) \\cdot (-) = (-) &\\qquad (-) \\cdot (+) = (-) \\end{aligned}$$",
        description: "Nhân hoặc chia hai số cùng dấu luôn cho kết quả DƯƠNG. Nhân hoặc chia hai số khác dấu luôn cho kết quả ÂM."
      },
      {
        id: "int-abs-val",
        title: "Giá trị tuyệt đối & So sánh",
        formula_latex: "$$\\begin{aligned} |a| &= a \\quad (\\text{nếu } a \\ge 0) \\\\ |a| &= -a \\quad (\\text{nếu } a < 0) \\\\ |-a| &= |a| \\ge 0 \\quad (\\forall a \\in \\mathbb{Z}) \\end{aligned}$$",
        description: "Giá trị tuyệt đối của một số nguyên là khoảng cách từ điểm biểu diễn số đó đến điểm 0 trên trục số. Trong hai số nguyên âm, số có giá trị tuyệt đối lớn hơn thì bé hơn."
      }
    ]
  },

  // ==========================================
  // PHẦN 4: PHÂN SỐ & SỐ THẬP PHÂN
  // ==========================================
  {
    category: "fractions",
    categoryTitle: "Phân Số & Số Thập Phân",
    icon: "percent",
    items: [
      {
        id: "frac-equality",
        title: "Phân số bằng nhau & Rút gọn",
        formula_latex: "$$\\begin{aligned} \\frac{a}{b} = \\frac{c}{d} &\\iff a \\cdot d = b \\cdot c \\quad (b, d \\neq 0) \\\\ \\frac{a}{b} &= \\frac{a \\cdot m}{b \\cdot m} = \\frac{a : n}{b : n} \\end{aligned}$$",
        description: "Phân số tối giản là phân số mà cả tử và mẫu chỉ có ước chung là 1 và -1."
      },
      {
        id: "frac-operations",
        title: "Bốn phép tính phân số",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} \\frac{a}{m} \\pm \\frac{b}{m} &= \\frac{a \\pm b}{m} \\\\ \\frac{a}{b} \\cdot \\frac{c}{d} &= \\frac{a \\cdot c}{b \\cdot d} \\\\ \\frac{a}{b} : \\frac{c}{d} &= \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} \\quad (c \\neq 0) \\end{aligned}$$",
        description: "Cộng trừ khác mẫu: quy đồng mẫu số rồi cộng trừ các tử. Chia phân số: nhân với phân số nghịch đảo của số chia."
      },
      {
        id: "frac-mixed-numbers",
        title: "Hỗn số & Số nghịch đảo",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} q\\frac{r}{b} &= \\frac{q \\cdot b + r}{b} \\quad (q, r, b \\in \\mathbb{N}^*, r < b) \\\\ \\frac{a}{b} \\cdot \\frac{b}{a} &= 1 \\quad (a, b \\neq 0) \\end{aligned}$$",
        description: "Một phân số lớn hơn 1 có thể viết dưới dạng hỗn số gồm phần nguyên và phần phân số nhỏ hơn 1."
      },
      {
        id: "frac-word-problems",
        title: "Hai bài toán cơ bản về phân số",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} \\text{1. Tìm } \\frac{m}{n} \\text{ của } a: &\\quad b = a \\cdot \\frac{m}{n} \\\\ \\text{2. Tìm } a \\text{ biết } \\frac{m}{n} \\text{ của nó bằng } b: &\\quad a = b : \\frac{m}{n} \\end{aligned}$$",
        description: "Bài toán 1: Tìm giá trị phân số của một số cho trước. Bài toán 2: Tìm một số khi biết giá trị một phân số của nó."
      },
      {
        id: "decimal-percentage-applied",
        title: "Tỉ số phần trăm & Ứng dụng",
        alignLeft: true,
        formula_latex: "$$\\begin{array}{l} T = \\dfrac{a}{b} \\cdot 100\\% \\quad (b \\neq 0) \\\\[6pt] \\text{Giá mới} = \\text{Giá gốc} \\cdot (100\\% - p\\%) \\end{array}$$",
        description: "Để tìm tỉ số phần trăm của a và b, ta nhân a với 100 rồi chia cho b và viết thêm kí hiệu %."
      },
      {
        id: "decimal-rounding",
        title: "Quy tắc làm tròn số thập phân",
        alignLeft: true,
        formula_latex: "$$\\begin{aligned} < 5 &\\implies \\text{Giữ nguyên chữ số hàng làm tròn} \\\\[4pt] \\ge 5 &\\implies \\text{Cộng thêm 1 vào hàng làm tròn} \\end{aligned}$$",
        description: "Khi làm tròn đến một hàng nào đó, nhìn chữ số đầu tiên bị bỏ đi: nếu nhỏ hơn 5 thì giữ nguyên, nếu từ 5 trở lên thì cộng 1 vào chữ số hàng làm tròn."
      }
    ]
  },

  // ==========================================
  // PHẦN 5: DỮ LIỆU & XÁC SUẤT THỰC NGHIỆM
  // ==========================================
  {
    category: "statistics",
    categoryTitle: "Dữ Liệu & Xác Suất Thực Nghiệm",
    icon: "bar-chart-2",
    items: [
      {
        id: "stat-probability",
        title: "Xác suất thực nghiệm",
        alignLeft: true,
        formula_latex: "$$P = \\frac{k}{n} = \\frac{\\text{Số lần xuất hiện biến cố}}{\\text{Tổng số lần thực nghiệm}}$$",
        description: "Xác suất thực nghiệm của một biến cố là tỉ số giữa số lần xảy ra biến cố đó và tổng số lần thực hiện thực nghiệm (ví dụ tung đồng xu, gieo xúc xắc)."
      },
      {
        id: "stat-data-types",
        title: "Phân loại dữ liệu thống kê",
        formula_latex: "$$\\begin{aligned} \\text{Dữ liệu số:} &\\quad \\text{Điểm thi, chiều cao, số lượng...} \\\\[4pt] \\text{Phi số liệu:} &\\quad \\text{Xếp loại, sở thích, màu sắc...} \\end{aligned}$$",
        description: "Dữ liệu thu thập được có thể là số (cho phép tính trung bình, tổng) hoặc không là số (dùng để phân loại, thống kê tỉ lệ)."
      }
    ]
  }
];
