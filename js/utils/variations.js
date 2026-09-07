/**
 * BỘ SINH BIẾN THỂ SỐ TỰ ĐỘNG (PARAMETRIC VARIATION GENERATOR)
 * Tạo ra ngân hàng câu hỏi phong phú, đa dạng cho 34 tỉnh thành và các bài kiểm tra
 * Đầy đủ 9 chương, cân đối 4 mức độ Bloom: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao
 * Tích hợp các bài toán thực tế sinh động: nhiệt độ, tài chính, đo đạc hình học, xác suất
 */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

export const VARIATION_GENERATORS = [
  // ==================== CHƯƠNG I: TẬP HỢP CÁC SỐ TỰ NHIÊN ====================
  {
    chapter_id: "ch-01",
    topic_id: "b01",
    difficulty: "EASY",
    name: "Tập hợp phần tử",
    generate: () => {
      const a = randInt(1, 5);
      const b = a + randInt(3, 6);
      const items = [];
      for (let i = a; i <= b; i++) items.push(i);
      const target = randInt(a, b);
      const nonTarget = b + randInt(1, 4);

      return {
        id: `VAR_CH1_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-01",
        topic_id: "b01",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Cho tập hợp $M = \\{${items.join("; ")}\\}$. Khẳng định nào dưới đây là **đúng**?`,
        options: [
          `$${target} \\in M$`,
          `$${nonTarget} \\in M$`,
          `$${target} \\notin M$`,
          `$${a - 1} \\in M$`
        ],
        correct_answer: `$${target} \\in M$`,
        explanation_latex: `Số $${target}$ nằm trong danh sách các phần tử của tập hợp $M$, do đó $${target} \\in M$ là khẳng định đúng.`
      };
    }
  },
  {
    chapter_id: "ch-01",
    topic_id: "b06",
    difficulty: "MEDIUM",
    name: "Lũy thừa cùng cơ số",
    generate: () => {
      const base = randInt(2, 5);
      const m = randInt(2, 4);
      const n = randInt(2, 5);
      const isMul = Math.random() > 0.4;
      const op = isMul ? "\\cdot" : ":";
      const exp1 = isMul ? m : m + n;
      const exp2 = n;
      const ansExp = isMul ? exp1 + exp2 : exp1 - exp2;

      return {
        id: `VAR_CH1_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-01",
        topic_id: "b06",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Viết kết quả của phép tính $${base}^{${exp1}} ${op} ${base}^{${exp2}}$ dưới dạng một lũy thừa:`,
        options: [
          `$${base}^{${ansExp}}$`,
          `$${base}^{${ansExp + 1}}$`,
          `$${base}^{${Math.max(1, ansExp - 1)}}$`,
          `$${base * 2}^{${ansExp}}$`
        ],
        correct_answer: `$${base}^{${ansExp}}$`,
        explanation_latex: `Áp dụng công thức lũy thừa: giữ nguyên cơ số $${base}$ và ${isMul ? 'cộng' : 'trừ'} số mũ ta được $${base}^{${ansExp}}$.`
      };
    }
  },
  {
    chapter_id: "ch-01",
    topic_id: "b07",
    difficulty: "HARD",
    name: "Thứ tự thực hiện phép tính có ngoặc vuông",
    generate: () => {
      const a = randInt(2, 4);
      const b = randInt(1, 3);
      const p = (a - b) ** 2; // e.g. (3-1)^2 = 4
      const inside = 20 - p; // e.g. 16
      const outer = 50 - inside; // e.g. 34

      return {
        id: `VAR_CH1_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-01",
        topic_id: "b07",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Giá trị của biểu thức $A = 50 - [20 - (${a} - ${b})^2]$ là:`,
        options: [
          `$${outer}$`,
          `$${outer + 4}$`,
          `$${outer - 6}$`,
          `$${outer + 10}$`
        ],
        correct_answer: `$${outer}$`,
        explanation_latex: `Thực hiện trong ngoặc tròn trước: $(${a} - ${b})^2 = ${a - b}^2 = ${p}$. Trong ngoặc vuông: $20 - ${p} = ${inside}$. Cuối cùng: $50 - ${inside} = ${outer}$.`
      };
    }
  },
  {
    chapter_id: "ch-01",
    topic_id: "b07",
    difficulty: "ADVANCED",
    name: "Tìm x với lũy thừa",
    generate: () => {
      const ansX = randInt(3, 7);
      const base = 2;
      const exp = randInt(2, 4); // 2^exp
      const val = base ** exp;
      // 3 * (x - 1) + 5 = 3*(ansX-1)+5
      const total = 3 * (ansX - 1) + 5;

      return {
        id: `VAR_CH1_A1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-01",
        topic_id: "b07",
        difficulty: "ADVANCED",
        difficulty_label: "Vận dụng cao",
        type: "single_choice",
        content_latex: `Tìm số tự nhiên $x$ biết: $3 \\cdot (x - 1) + 5 = ${total}$`,
        options: [
          `$x = ${ansX}$`,
          `$x = ${ansX + 1}$`,
          `$x = ${ansX - 1}$`,
          `$x = ${ansX + 2}$`
        ],
        correct_answer: `$x = ${ansX}$`,
        explanation_latex: `Ta có: $3 \\cdot (x - 1) = ${total} - 5 = ${total - 5} \\implies x - 1 = ${total - 5} : 3 = ${ansX - 1} \\implies x = ${ansX}$.`
      };
    }
  },

  // ==================== CHƯƠNG II: TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN ====================
  {
    chapter_id: "ch-02",
    topic_id: "b09",
    difficulty: "EASY",
    name: "Dấu hiệu chia hết",
    generate: () => {
      const k = randInt(11, 89) * 10; // tận cùng là 0
      return {
        id: `VAR_CH2_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-02",
        topic_id: "b09",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Trong các số sau, số nào chia hết cho cả $2$ và $5$?`,
        options: [
          `$${k}$`,
          `$${k + 3}$`,
          `$${k + 5}$`,
          `$${k + 7}$`
        ],
        correct_answer: `$${k}$`,
        explanation_latex: `Số chia hết cho cả $2$ và $5$ phải có chữ số tận cùng là $0$. Trong các số trên, chỉ có $${k}$ có tận cùng là $0$.`
      };
    }
  },
  {
    chapter_id: "ch-02",
    topic_id: "b11",
    difficulty: "MEDIUM",
    name: "ƯCLN của hai số",
    generate: () => {
      const d = randInt(3, 8);
      const m = randInt(2, 4);
      const n = randInt(5, 7);
      const a = d * m;
      const b = d * n;
      const ansUcln = gcd(a, b);

      return {
        id: `VAR_CH2_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-02",
        topic_id: "b11",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Ước chung lớn nhất của $${a}$ và $${b}$ là:`,
        options: [
          `$${ansUcln}$`,
          `$${ansUcln * 2}$`,
          `$${Math.max(1, Math.floor(ansUcln / 2))}$`,
          `$${ansUcln + 2}$`
        ],
        correct_answer: `$${ansUcln}$`,
        explanation_latex: `Phân tích $${a}$ và $${b}$ ra thừa số nguyên tố, ta tìm được $\\text{ƯCLN}(${a}, ${b}) = ${ansUcln}$.`
      };
    }
  },
  {
    chapter_id: "ch-02",
    topic_id: "b11",
    difficulty: "HARD",
    name: "Bài toán thực tế chia quà (ƯCLN)",
    generate: () => {
      const d = randInt(4, 9);
      const vo = d * randInt(4, 6);
      const but = d * randInt(7, 9);

      return {
        id: `VAR_CH2_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-02",
        topic_id: "b11",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Cô giáo có $${vo}$ quyển vở và $${but}$ chiếc bút bi. Cô muốn chia đều số vở và bút vào các túi quà sao cho số túi quà là nhiều nhất. Số túi quà nhiều nhất có thể chia được là:`,
        options: [
          `$${d}\\text{ túi}$`,
          `$${d * 2}\\text{ túi}$`,
          `$${d + 3}\\text{ túi}$`,
          `$${Math.max(2, d - 2)}\\text{ túi}$`
        ],
        correct_answer: `$${d}\\text{ túi}$`,
        explanation_latex: `Số túi quà nhiều nhất chính là $\\text{ƯCLN}(${vo}, ${but}) = ${d}$ túi quà.`
      };
    }
  },
  {
    chapter_id: "ch-02",
    topic_id: "b12",
    difficulty: "ADVANCED",
    name: "Bài toán BCNN thực tế",
    generate: () => {
      const a = randInt(10, 15);
      const b = randInt(16, 20);
      const boiChung = lcm(a, b);

      return {
        id: `VAR_CH2_A1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-02",
        topic_id: "b12",
        difficulty: "ADVANCED",
        difficulty_label: "Vận dụng cao",
        type: "single_choice",
        content_latex: `Hai bạn An và Bình cùng trực nhật vào ngày đầu tuần. Cứ sau $${a}$ ngày An lại trực nhật một lần, cứ sau $${b}$ ngày Bình lại trực nhật một lần. Hỏi sau ít nhất bao nhiêu ngày hai bạn lại cùng trực nhật vào một ngày?`,
        options: [
          `$${boiChung}\\text{ ngày}$`,
          `$${boiChung * 2}\\text{ ngày}$`,
          `$${a * b}\\text{ ngày}$`,
          `$${boiChung + 10}\\text{ ngày}$`
        ],
        correct_answer: `$${boiChung}\\text{ ngày}$`,
        explanation_latex: `Số ngày ít nhất để hai bạn cùng trực nhật chính là bội chung nhỏ nhất: $\\text{BCNN}(${a}, ${b}) = ${boiChung}$ ngày.`
      };
    }
  },

  // ==================== CHƯƠNG III: SỐ NGUYÊN ====================
  {
    chapter_id: "ch-03",
    topic_id: "b14",
    difficulty: "EASY",
    name: "Số đối của số nguyên",
    generate: () => {
      const val = randInt(5, 30) * (Math.random() > 0.5 ? 1 : -1);
      const opp = -val;

      return {
        id: `VAR_CH3_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-03",
        topic_id: "b14",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Số đối của số nguyên $${val}$ là:`,
        options: [
          `$${opp}$`,
          `$${val}$`,
          `$|${val}|$`,
          `$0$`
        ],
        correct_answer: `$${opp}$`,
        explanation_latex: `Số đối của số $a$ là $-a$. Do đó số đối của $${val}$ là $${opp}$.`
      };
    }
  },
  {
    chapter_id: "ch-03",
    topic_id: "b15",
    difficulty: "MEDIUM",
    name: "Cộng trừ số nguyên",
    generate: () => {
      const a = randInt(-30, -5);
      const b = randInt(10, 40);
      const sum = a + b;

      return {
        id: `VAR_CH3_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-03",
        topic_id: "b15",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Kết quả của phép tính $(${a}) + ${b}$ là:`,
        options: [
          `$${sum}$`,
          `$${-sum}$`,
          `$${sum + 5}$`,
          `$${sum - 5}$`
        ],
        correct_answer: `$${sum}$`,
        explanation_latex: `Cộng hai số nguyên khác dấu: lấy số có giá trị tuyệt đối lớn hơn trừ số có giá trị tuyệt đối nhỏ hơn: $${b} - ${Math.abs(a)} = ${sum}$.`
      };
    }
  },
  {
    chapter_id: "ch-03",
    topic_id: "b15",
    difficulty: "HARD",
    name: "Bài toán thực tế nhiệt độ Sa Pa",
    generate: () => {
      const t1 = randInt(2, 6);
      const delta = randInt(5, 9);
      const t2 = t1 - delta;

      return {
        id: `VAR_CH3_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-03",
        topic_id: "b15",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Nhiệt độ tại đỉnh Phan Xi Păng vào buổi trưa là $${t1}^\\circ\\text{C}$. Đến đêm, nhiệt độ giảm thêm $${delta}^\\circ\\text{C}$. Nhiệt độ tại đỉnh núi vào ban đêm là bao nhiêu?`,
        options: [
          `$${t2}^\\circ\\text{C}$`,
          `$${Math.abs(t2)}^\\circ\\text{C}$`,
          `$${t2 - 2}^\\circ\\text{C}$`,
          `$${t1 + delta}^\\circ\\text{C}$`
        ],
        correct_answer: `$${t2}^\\circ\\text{C}$`,
        explanation_latex: `Nhiệt độ ban đêm là: $${t1} - ${delta} = ${t2}^\\circ\\text{C}$.`
      };
    }
  },
  {
    chapter_id: "ch-03",
    topic_id: "b17",
    difficulty: "ADVANCED",
    name: "Phép tính nhân số nguyên kết hợp tìm x",
    generate: () => {
      const ansX = randInt(-8, -2);
      const k = randInt(3, 5);
      const b = randInt(10, 20);
      const total = k * ansX + b;

      return {
        id: `VAR_CH3_A1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-03",
        topic_id: "b17",
        difficulty: "ADVANCED",
        difficulty_label: "Vận dụng cao",
        type: "single_choice",
        content_latex: `Tìm số nguyên $x$ thỏa mãn đẳng thức: $${k} \\cdot x + ${b} = ${total}$`,
        options: [
          `$x = ${ansX}$`,
          `$x = ${-ansX}$`,
          `$x = ${ansX + 2}$`,
          `$x = ${ansX - 2}$`
        ],
        correct_answer: `$x = ${ansX}$`,
        explanation_latex: `Ta có: $${k}x = ${total} - ${b} = ${total - b} \\implies x = (${total - b}) : ${k} = ${ansX}$.`
      };
    }
  },

  // ==================== CHƯƠNG IV: HÌNH HỌC PHẲNG TRONG THỰC TIỄN ====================
  {
    chapter_id: "ch-04",
    topic_id: "b18",
    difficulty: "EASY",
    name: "Nhận biết hình học phẳng",
    generate: () => {
      return {
        id: `VAR_CH4_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-04",
        topic_id: "b18",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Hình nào sau đây có 4 cạnh bằng nhau và 4 góc vuông?`,
        options: [
          `Hình vuông`,
          `Hình thoi`,
          `Hình chữ nhật`,
          `Hình bình hành`
        ],
        correct_answer: `Hình vuông`,
        explanation_latex: `Theo định nghĩa SGK, hình vuông có 4 cạnh bằng nhau và 4 góc vuông.`
      };
    }
  },
  {
    chapter_id: "ch-04",
    topic_id: "b20",
    difficulty: "MEDIUM",
    name: "Chu vi và diện tích hình chữ nhật",
    generate: () => {
      const a = randInt(5, 12);
      const b = a + randInt(3, 8);
      const s = a * b;

      return {
        id: `VAR_CH4_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-04",
        topic_id: "b20",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Một mảnh vườn hình chữ nhật có chiều rộng là $${a}\\text{ m}$, chiều dài là $${b}\\text{ m}$. Diện tích của mảnh vườn đó là:`,
        options: [
          `$${s}\\text{ m}^2$`,
          `$${2 * (a + b)}\\text{ m}^2$`,
          `$${s + 10}\\text{ m}^2$`,
          `$${s - 8}\\text{ m}^2$`
        ],
        correct_answer: `$${s}\\text{ m}^2$`,
        explanation_latex: `Diện tích hình chữ nhật bằng tích chiều dài nhân chiều rộng: $S = ${b} \\cdot ${a} = ${s}\\text{ m}^2$.`
      };
    }
  },
  {
    chapter_id: "ch-04",
    topic_id: "b20",
    difficulty: "HARD",
    name: "Bài toán thực tế lát gạch nền nhà",
    generate: () => {
      const dai = randInt(6, 10);
      const rong = randInt(4, 6);
      const areaRoom = dai * rong; // m2
      const gachCanh = 50; // 50cm = 0.5m
      const areaGach = 0.25; // 0.25 m2
      const soGach = Math.round(areaRoom / areaGach);

      return {
        id: `VAR_CH4_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-04",
        topic_id: "b20",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Bác Ba cần lát gạch nền một phòng học hình chữ nhật có chiều dài $${dai}\\text{ m}$ và chiều rộng $${rong}\\text{ m}$. Bác dùng gạch vuông cạnh $50\\text{ cm}$. Bác Ba cần mua ít nhất bao nhiêu viên gạch (bỏ qua diện tích mạch vữa)?`,
        options: [
          `$${soGach}\\text{ viên}$`,
          `$${soGach + 20}\\text{ viên}$`,
          `$${soGach - 30}\\text{ viên}$`,
          `$${soGach * 2}\\text{ viên}$`
        ],
        correct_answer: `$${soGach}\\text{ viên}$`,
        explanation_latex: `Diện tích phòng: $${dai} \\times ${rong} = ${areaRoom}\\text{ m}^2 = ${areaRoom * 10000}\\text{ cm}^2$. Diện tích một viên gạch: $50 \\times 50 = 2500\\text{ cm}^2$. Số viên gạch cần dùng là: $${areaRoom * 10000} : 2500 = ${soGach}$ viên.`
      };
    }
  },
  {
    chapter_id: "ch-04",
    topic_id: "b20",
    difficulty: "ADVANCED",
    name: "Diện tích lối đi quanh mảnh vườn",
    generate: () => {
      const m = randInt(6, 10);
      const n = randInt(12, 16);
      const sRhombus = (m * n) / 2;

      return {
        id: `VAR_CH4_A1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-04",
        topic_id: "b20",
        difficulty: "ADVANCED",
        difficulty_label: "Vận dụng cao",
        type: "single_choice",
        content_latex: `Một bồn hoa hình thoi có độ dài hai đường chéo lần lượt là $${m}\\text{ m}$ và $${n}\\text{ m}$. Người ta trồng hoa hồng trên bồn hoa đó, biết mỗi mét vuông tốn $150\\,000$ đồng tiền mua giống hoa. Số tiền cần dùng là:`,
        options: [
          `$${(sRhombus * 150000).toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${((sRhombus + 5) * 150000).toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${((sRhombus * 2) * 150000).toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${(sRhombus * 100000).toLocaleString('vi-VN')}\\text{ đồng}$`
        ],
        correct_answer: `$${(sRhombus * 150000).toLocaleString('vi-VN')}\\text{ đồng}$`,
        explanation_latex: `Diện tích bồn hoa hình thoi là: $S = \\frac{1}{2} \\cdot ${m} \\cdot ${n} = ${sRhombus}\\text{ m}^2$. Số tiền cần dùng là: $${sRhombus} \\times 150\\,000 = ${(sRhombus * 150000).toLocaleString('vi-VN')}$ đồng.`
      };
    }
  },

  // ==================== CHƯƠNG V: TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG ====================
  {
    chapter_id: "ch-05",
    topic_id: "b21",
    difficulty: "EASY",
    name: "Trục đối xứng chữ cái",
    generate: () => {
      return {
        id: `VAR_CH5_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-05",
        topic_id: "b21",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Chữ cái in hoa nào dưới đây có đúng **một** trục đối xứng đứng?`,
        options: [
          `Chữ A`,
          `Chữ H`,
          `Chữ O`,
          `Chữ N`
        ],
        correct_answer: `Chữ A`,
        explanation_latex: `Chữ A có đúng 1 trục đối xứng thẳng đứng. Chữ H có 2 trục đối xứng, chữ O có vô số trục đối xứng, chữ N không có trục đối xứng.`
      };
    }
  },
  {
    chapter_id: "ch-05",
    topic_id: "b22",
    difficulty: "MEDIUM",
    name: "Tâm đối xứng hình học",
    generate: () => {
      return {
        id: `VAR_CH5_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-05",
        topic_id: "b22",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Hình nào sau đây **không** có tâm đối xứng?`,
        options: [
          `Tam giác đều`,
          `Hình bình hành`,
          `Hình chữ nhật`,
          `Hình thoi`
        ],
        correct_answer: `Tam giác đều`,
        explanation_latex: `Tam giác đều chỉ có 3 trục đối xứng, không có tâm đối xứng. Hình bình hành, hình chữ nhật và hình thoi đều có tâm đối xứng là giao điểm hai đường chéo.`
      };
    }
  },

  // ==================== CHƯƠNG VI: PHÂN SỐ ====================
  {
    chapter_id: "ch-06",
    topic_id: "b23",
    difficulty: "EASY",
    name: "Rút gọn phân số",
    generate: () => {
      let p = randInt(2, 5);
      let q = randInt(6, 9);
      while (gcd(p, q) !== 1) {
        p = randInt(2, 5);
        q = randInt(6, 9);
      }
      const k = randInt(2, 5);
      const num = p * k;
      const den = q * k;

      return {
        id: `VAR_CH6_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-06",
        topic_id: "b23",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Rút gọn phân số $\\frac{${num}}{${den}}$ về phân số tối giản ta được:`,
        options: [
          `$\\frac{${p}}{${q}}$`,
          `$\\frac{${p + 1}}{${q}}$`,
          `$\\frac{${p}}{${q + 1}}$`,
          `$\\frac{${num + 1}}{${den}}$`
        ],
        correct_answer: `$\\frac{${p}}{${q}}$`,
        explanation_latex: `Chia cả tử và mẫu cho ước chung lớn nhất $${k}$: $\\frac{${num} : ${k}}{${den} : ${k}} = \\frac{${p}}{${q}}$.`
      };
    }
  },
  {
    chapter_id: "ch-06",
    topic_id: "b25",
    difficulty: "MEDIUM",
    name: "Cộng trừ phân số",
    generate: () => {
      const a = randInt(1, 3);
      const b = randInt(4, 6);
      const c = randInt(1, 2);
      const d = randInt(7, 9);
      // a/b + c/d
      const num = a * d + b * c;
      const den = b * d;
      const u = gcd(num, den);
      const simpNum = num / u;
      const simpDen = den / u;

      return {
        id: `VAR_CH6_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-06",
        topic_id: "b25",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Tính: $\\frac{${a}}{${b}} + \\frac{${c}}{${d}}$`,
        options: [
          `$\\frac{${simpNum}}{${simpDen}}$`,
          `$\\frac{${simpNum + 1}}{${simpDen}}$`,
          `$\\frac{${a + c}}{${b + d}}$`,
          `$\\frac{${simpNum}}{${simpDen + 1}}$`
        ],
        correct_answer: `$\\frac{${simpNum}}{${simpDen}}$`,
        explanation_latex: `Quy đồng mẫu số: $\\frac{${a} \\cdot ${d}}{${b} \\cdot ${d}} + \\frac{${c} \\cdot ${b}}{${d} \\cdot ${b}} = \\frac{${a * d} + ${b * c}}{${den}} = \\frac{${num}}{${den}} = \\frac{${simpNum}}{${simpDen}}$.`
      };
    }
  },
  {
    chapter_id: "ch-06",
    topic_id: "b27",
    difficulty: "HARD",
    name: "Bài toán thực tế tỉ lệ phân số",
    generate: () => {
      const total = randInt(35, 45);
      const fractionNum = 2;
      const fractionDen = 5;
      const nu = (total * fractionNum) / fractionDen; // check chia hết
      const finalTotal = Math.floor(total / 5) * 5;
      const soNu = (finalTotal * 2) / 5;
      const soNam = finalTotal - soNu;

      return {
        id: `VAR_CH6_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-06",
        topic_id: "b27",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Lớp 6A có $${finalTotal}$ học sinh, trong đó số học sinh nữ chiếm $\\frac{2}{5}$ tổng số học sinh cả lớp. Số học sinh nam của lớp 6A là:`,
        options: [
          `$${soNam}\\text{ bạn}$`,
          `$${soNu}\\text{ bạn}$`,
          `$${soNam + 2}\\text{ bạn}$`,
          `$${soNam - 3}\\text{ bạn}$`
        ],
        correct_answer: `$${soNam}\\text{ bạn}$`,
        explanation_latex: `Số học sinh nữ của lớp là: $${finalTotal} \\cdot \\frac{2}{5} = ${soNu}$ học sinh. Số học sinh nam là: $${finalTotal} - ${soNu} = ${soNam}$ học sinh.`
      };
    }
  },
  {
    chapter_id: "ch-06",
    topic_id: "b26",
    difficulty: "ADVANCED",
    name: "Tổng chuỗi phân số quy luật (VDC)",
    generate: () => {
      const n = randInt(20, 99);

      return {
        id: `VAR_CH6_A1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-06",
        topic_id: "b26",
        difficulty: "ADVANCED",
        difficulty_label: "Vận dụng cao",
        type: "single_choice",
        content_latex: `Giá trị của tổng $S = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{${n} \\cdot ${n + 1}}$ là:`,
        options: [
          `$\\frac{${n}}{${n + 1}}$`,
          `$\\frac{${n - 1}}{${n}}$`,
          `$1$`,
          `$\\frac{1}{${n + 1}}$`
        ],
        correct_answer: `$\\frac{${n}}{${n + 1}}$`,
        explanation_latex: `Ta có: $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$. Do đó: $S = 1 - \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{3} + \\dots + \\frac{1}{${n}} - \\frac{1}{${n + 1}} = 1 - \\frac{1}{${n + 1}} = \\frac{${n}}{${n + 1}}$.`
      };
    }
  },

  // ==================== CHƯƠNG VII: SỐ THẬP PHÂN ====================
  {
    chapter_id: "ch-07",
    topic_id: "b28",
    difficulty: "EASY",
    name: "So sánh số thập phân",
    generate: () => {
      const a = (randInt(1, 9) + randInt(1, 9) / 10).toFixed(1);
      const negA = `-${a}`;
      const b = (parseFloat(a) + 0.5).toFixed(1);
      const negB = `-${b}`;

      return {
        id: `VAR_CH7_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-07",
        topic_id: "b28",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Khẳng định nào dưới đây là **đúng** khi so sánh hai số thập phân $${negA}$ và $${negB}$?`,
        options: [
          `$${negA} > ${negB}$`,
          `$${negA} < ${negB}$`,
          `$${negA} = ${negB}$`,
          `$${negB} > 0$`
        ],
        correct_answer: `$${negA} > ${negB}$`,
        explanation_latex: `Trong hai số thập phân âm, số nào có giá trị tuyệt đối nhỏ hơn thì số đó lớn hơn. Vì $|${negA}| = ${a} < |${negB}| = ${b}$ nên $${negA} > ${negB}$.`
      };
    }
  },
  {
    chapter_id: "ch-07",
    topic_id: "b31",
    difficulty: "MEDIUM",
    name: "Tính tỉ số phần trăm",
    generate: () => {
      const total = 50;
      const part = randInt(5, 45);
      const pct = Math.round((part * 100) / total);

      return {
        id: `VAR_CH7_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-07",
        topic_id: "b31",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Tỉ số phần trăm của $${part}$ và $${total}$ là:`,
        options: [
          `$${pct}\\%$`,
          `$${pct + 5}\\%$`,
          `$${Math.max(1, pct - 5)}\\%$`,
          `$${part}\\%$`
        ],
        correct_answer: `$${pct}\\%$`,
        explanation_latex: `Tỉ số phần trăm là: $\\frac{${part} \\cdot 100}{${total}}\\% = ${pct}\\%$.`
      };
    }
  },
  {
    chapter_id: "ch-07",
    topic_id: "b31",
    difficulty: "HARD",
    name: "Bài toán khuyến mãi giảm giá siêu thị",
    generate: () => {
      const giaGoc = randInt(200, 500) * 1000;
      const p = 15; // giảm 15%
      const soTienGiam = Math.round(giaGoc * 0.15);
      const giaMoi = Math.round(giaGoc - soTienGiam);

      return {
        id: `VAR_CH7_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-07",
        topic_id: "b31",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Một chiếc cặp sách có giá niêm yết là $${giaGoc.toLocaleString('vi-VN')}\\text{ đồng}$. Nhân dịp đầu năm học mới, nhà sách giảm giá $${p}\\%$ cho mặt hàng này. Số tiền khách hàng phải trả khi mua chiếc cặp là:`,
        options: [
          `$${giaMoi.toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${soTienGiam.toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${(giaMoi + 20000).toLocaleString('vi-VN')}\\text{ đồng}$`,
          `$${(giaMoi - 15000).toLocaleString('vi-VN')}\\text{ đồng}$`
        ],
        correct_answer: `$${giaMoi.toLocaleString('vi-VN')}\\text{ đồng}$`,
        explanation_latex: `Số tiền được giảm là: $${giaGoc.toLocaleString('vi-VN')} \\times 15\\% = ${soTienGiam.toLocaleString('vi-VN')}$ đồng. Số tiền thực tế phải trả là: $${giaGoc.toLocaleString('vi-VN')} - ${soTienGiam.toLocaleString('vi-VN')} = ${giaMoi.toLocaleString('vi-VN')}$ đồng.`
      };
    }
  },

  // ==================== CHƯƠNG VIII: HÌNH HỌC CƠ BẢN ====================
  {
    chapter_id: "ch-08",
    topic_id: "b35",
    difficulty: "EASY",
    name: "Trung điểm đoạn thẳng",
    generate: () => {
      const len = randInt(4, 16) * 2;
      const half = len / 2;

      return {
        id: `VAR_CH8_E1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-08",
        topic_id: "b35",
        difficulty: "EASY",
        difficulty_label: "Nhận biết",
        type: "single_choice",
        content_latex: `Cho đoạn thẳng $AB$ dài $${len}\\text{ cm}$. Điểm $M$ là trung điểm của $AB$. Độ dài đoạn thẳng $AM$ là:`,
        options: [
          `$${half}\\text{ cm}$`,
          `$${len}\\text{ cm}$`,
          `$${half / 2}\\text{ cm}$`,
          `$${len * 2}\\text{ cm}$`
        ],
        correct_answer: `$${half}\\text{ cm}$`,
        explanation_latex: `Vì $M$ là trung điểm của đoạn thẳng $AB$ nên $AM = \\frac{AB}{2} = \\frac{${len}}{2} = ${half}\\text{ cm}$.`
      };
    }
  },
  {
    chapter_id: "ch-08",
    topic_id: "b36",
    difficulty: "MEDIUM",
    name: "Phân loại góc",
    generate: () => {
      const deg = randInt(95, 165);

      return {
        id: `VAR_CH8_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-08",
        topic_id: "b36",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Góc có số đo bằng $${deg}^\\circ$ là góc gì?`,
        options: [
          `Góc tù`,
          `Góc nhọn`,
          `Góc vuông`,
          `Góc bẹt`
        ],
        correct_answer: `Góc tù`,
        explanation_latex: `Vì $90^\\circ < ${deg}^\\circ < 180^\\circ$ nên góc có số đo $${deg}^\\circ$ là góc tù.`
      };
    }
  },

  // ==================== CHƯƠNG IX: DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM ====================
  {
    chapter_id: "ch-09",
    topic_id: "b43",
    difficulty: "MEDIUM",
    name: "Xác suất thực nghiệm tung đồng xu",
    generate: () => {
      const total = 50;
      const k = randInt(15, 35);
      const pct = Math.round((k * 100) / total);

      return {
        id: `VAR_CH9_M1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-09",
        topic_id: "b43",
        difficulty: "MEDIUM",
        difficulty_label: "Thông hiểu",
        type: "single_choice",
        content_latex: `Gieo một đồng xu $${total}$ lần liên tiếp, thấy có $${k}$ lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt ngửa là:`,
        options: [
          `$${pct}\\%$`,
          `$${pct + 10}\\%$`,
          `$${Math.max(2, pct - 10)}\\%$`,
          `$${k}\\%$`
        ],
        correct_answer: `$${pct}\\%$`,
        explanation_latex: `Xác suất thực nghiệm là: $P = \\frac{${k}}{${total}} = \\frac{${k * 2}}{100} = ${pct}\\%$.`
      };
    }
  },
  {
    chapter_id: "ch-09",
    topic_id: "b43",
    difficulty: "HARD",
    name: "Xác suất thực nghiệm gieo xúc xắc",
    generate: () => {
      const total = 60;
      const k = randInt(8, 18);
      const p = Math.round((k / total) * 100);

      return {
        id: `VAR_CH9_H1_${Date.now()}_${randInt(100, 999)}`,
        chapter_id: "ch-09",
        topic_id: "b43",
        difficulty: "HARD",
        difficulty_label: "Vận dụng",
        type: "single_choice",
        content_latex: `Gieo một con xúc xắc $6$ mặt cân đối $${total}$ lần, thấy có $${k}$ lần xuất hiện mặt $6$ chấm. Xác suất thực nghiệm xuất hiện mặt $6$ chấm là:`,
        options: [
          `$\\frac{${k}}{${total}}$`,
          `$\\frac{1}{6}$`,
          `$\\frac{${k + 2}}{${total}}$`,
          `$\\frac{${total - k}}{${total}}$`
        ],
        correct_answer: `$\\frac{${k}}{${total}}$`,
        explanation_latex: `Xác suất thực nghiệm là tỉ số giữa số lần mặt $6$ chấm xuất hiện ($${k}$) và tổng số lần gieo ($${total}$): $P = \\frac{${k}}{${total}}$.`
      };
    }
  }
];

/**
 * Sinh câu hỏi biến thể ngẫu nhiên có lọc theo topic_id, chapter_id và mức độ tư duy desiredDifficulty
 * TUYỆT ĐỐI KHÔNG rò rỉ hoặc gán đè câu hỏi từ bài học này sang bài học khác.
 */
export function generateRandomQuestion(topicId = null, chapterId = null, desiredDifficulty = null) {
  let matched = VARIATION_GENERATORS;

  if (chapterId) {
    const byChap = matched.filter(g => g.chapter_id === chapterId);
    if (byChap.length > 0) matched = byChap;
  }

  if (topicId) {
    const byTopic = matched.filter(g => g.topic_id === topicId);
    if (byTopic.length > 0) {
      matched = byTopic;
    } else {
      // Nếu không có generator cho topicId này, KHÔNG lấy câu bài khác trong chương rồi gán đè!
      return null;
    }
  }

  if (desiredDifficulty) {
    const byDiff = matched.filter(g => g.difficulty === desiredDifficulty);
    if (byDiff.length > 0) matched = byDiff;
  }

  if (matched.length === 0) return null;

  const generator = matched[Math.floor(Math.random() * matched.length)];
  const q = generator.generate();

  if (desiredDifficulty) {
    q.difficulty = desiredDifficulty;
    q.difficulty_label = desiredDifficulty === 'EASY' ? 'Nhận biết'
      : (desiredDifficulty === 'MEDIUM' ? 'Thông hiểu'
      : (desiredDifficulty === 'HARD' ? 'Vận dụng' : 'Vận dụng cao'));
  }

  if (chapterId) q.chapter_id = chapterId;
  if (topicId) q.topic_id = topicId;

  return q;
}
