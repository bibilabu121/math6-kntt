/**
 * NGÂN HÀNG CÂU HỎI TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Toàn diện 43 bài học thuộc 9 chương (Tập 1 & Tập 2)
 * Chuẩn hóa 100% theo interface Math6Question
 * Phân bổ cân đối theo 4 mức độ tư duy Bloom:
 *   - EASY: Nhận biết
 *   - MEDIUM: Thông hiểu
 *   - HARD: Vận dụng
 *   - ADVANCED: Vận dụng cao
 * Đảm bảo 100% CÁCH LY CHỦ ĐỀ: Bài học nào chỉ chứa câu hỏi chuẩn xác của bài học đó!
 */

export const QUESTION_BANK = [
  {
    "id": "Q01_b01_01",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Cho tập hợp $A = \\{2; 3; 5; 7\\}$. Khẳng định nào sau đây là **đúng**?",
    "options": [
      "$2 \\in A$",
      "$4 \\in A$",
      "$5 \\notin A$",
      "$7 \\notin A$"
    ],
    "correct_answer": "$2 \\in A$",
    "hints": [
      "Kí hiệu $\\in$ là thuộc, $\\notin$ là không thuộc.",
      "Quan sát danh sách phần tử của $A$."
    ],
    "explanation_latex": "Số 2 có mặt trong tập hợp $A$ nên khẳng định đúng là $2 \\in A$."
  },
  {
    "id": "Q01_b01_02",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Viết tập hợp $B$ các chữ cái tiếng Việt có mặt trong từ \"HỌC SINH\":",
    "options": [
      "$B = \\{\\text{H; O; C; S; I; N}\\}$",
      "$B = \\{\\text{H; O; C; S; I; N; H}\\}$",
      "$B = \\{\\text{H; O; C}\\}$",
      "$B = \\{\\text{S; I; N; H}\\}$"
    ],
    "correct_answer": "$B = \\{\\text{H; O; C; S; I; N}\\}$",
    "hints": [
      "Mỗi phần tử chỉ được liệt kê một lần duy nhất.",
      "Chữ cái H xuất hiện 2 lần, chỉ ghi 1 lần."
    ],
    "explanation_latex": "Vì mỗi chữ cái chỉ viết một lần, ta có tập hợp $B = \\{\\text{H; O; C; S; I; N}\\}$."
  },
  {
    "id": "Q01_b01_03",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho tập hợp $M = \\{x \\in \\mathbb{N} \\mid 10 < x \\le 15\\}$. Viết tập hợp $M$ bằng cách liệt kê phần tử:",
    "options": [
      "$M = \\{11; 12; 13; 14; 15\\}$",
      "$M = \\{10; 11; 12; 13; 14; 15\\}$",
      "$M = \\{11; 12; 13; 14\\}$",
      "$M = \\{10; 11; 12; 13; 14\\}$"
    ],
    "correct_answer": "$M = \\{11; 12; 13; 14; 15\\}$",
    "hints": [
      "$x > 10$ thì không lấy 10.",
      "$x \\le 15$ thì lấy đến 15."
    ],
    "explanation_latex": "Các số tự nhiên lớn hơn 10 và không vượt quá 15 là 11, 12, 13, 14, 15."
  },
  {
    "id": "Q01_b01_04",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tập hợp $E = \\{x \\in \\mathbb{N}^* \\mid x < 8\\}$ có bao nhiêu phần tử?",
    "options": [
      "$7$",
      "$8$",
      "$6$",
      "Vô số"
    ],
    "correct_answer": "$7$",
    "hints": [
      "$\\mathbb{N}^*$ là tập số tự nhiên lớn hơn 0: $\\{1; 2; 3; \\dots\\}$.",
      "Đếm từ 1 đến 7."
    ],
    "explanation_latex": "$E = \\{1; 2; 3; 4; 5; 6; 7\\}$ nên có $7$ phần tử."
  },
  {
    "id": "Q01_b01_05",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho tập hợp $S = \\{5; 9; 13; 17; \\dots; 201\\}$. Số phần tử của tập hợp $S$ là:",
    "options": [
      "$50$",
      "$49$",
      "$51$",
      "$48$"
    ],
    "correct_answer": "$50$",
    "hints": [
      "Dãy số cách đều nhau 4 đơn vị.",
      "Số số hạng = $(\\text{Số cuối} - \\text{Số đầu}) : 4 + 1$."
    ],
    "explanation_latex": "Khoảng cách là $4$. Số phần tử: $(201 - 5) : 4 + 1 = 196 : 4 + 1 = 49 + 1 = 50$."
  },
  {
    "id": "Q01_b01_06",
    "chapter_id": "ch-01",
    "topic_id": "b01",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x = 4k + 1, k \\in \\mathbb{N}, x < 100\\}$. Hỏi có bao nhiêu phần tử của $A$ chia hết cho $3$?",
    "options": [
      "$8$",
      "$9$",
      "$7$",
      "$10$"
    ],
    "correct_answer": "$8$",
    "hints": [
      "$4k + 1 < 100 \\implies k \\in \\{0; 1; \\dots; 24\\}$.",
      "Số chia hết cho 3 khi $4k + 1 \\equiv k + 1 \\equiv 0 \\pmod 3 \\implies k$ chia 3 dư 2."
    ],
    "explanation_latex": "Ta có $k \\in \\{0; 1; 2; \\dots; 24\\}$. Các số $k$ chia 3 dư 2 là: $2, 5, 8, 11, 14, 17, 20, 23$. Có đúng $8$ số."
  },
  {
    "id": "Q01_b02_01",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Chữ số $7$ trong số $375\\,204$ có giá trị bằng bao nhiêu?",
    "options": [
      "$70\\,000$",
      "$7\\,000$",
      "$700$",
      "$700\\,000$"
    ],
    "correct_answer": "$70\\,000$",
    "hints": [
      "Chữ số 7 đứng ở hàng chục nghìn."
    ],
    "explanation_latex": "Giá trị của chữ số 7 là $7 \\times 10\\,000 = 70\\,000$."
  },
  {
    "id": "Q01_b02_02",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số La Mã $\$ XXIV tương ứng với giá trị nào trong hệ thập phân?",
    "options": [
      "$24$",
      "$26$",
      "$19$",
      "$29$"
    ],
    "correct_answer": "$24$",
    "hints": [
      "$\\text{X} = 10, \\text{IV} = 4$."
    ],
    "explanation_latex": "$\\text{XXIV} = 10 + 10 + 4 = 24$."
  },
  {
    "id": "Q01_b02_03",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Biểu diễn số tự nhiên $\\overline{ab}$ trong hệ thập phân theo cấu tạo số là:",
    "options": [
      "$10a + b$",
      "$a + 10b$",
      "$a \\cdot b$",
      "$100a + b$"
    ],
    "correct_answer": "$10a + b$",
    "hints": [
      "$a$ là chữ số hàng chục, $b$ là chữ số hàng đơn vị."
    ],
    "explanation_latex": "$\\overline{ab} = 10a + b$ với $a \\in \\{1; \\dots; 9\\}$ và $b \\in \\{0; \\dots; 9\\}$."
  },
  {
    "id": "Q01_b02_04",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Số La Mã nào sau đây biểu diễn số $29$?",
    "options": [
      "$\$ XXIX",
      "$\$ XXVIIII",
      "$\$ XXXI",
      "$\$ XIX"
    ],
    "correct_answer": "$\$ XXIX",
    "hints": [
      "$29 = 20 + 9$. $20$ là $\$ XX, $9$ là $\$ IX."
    ],
    "explanation_latex": "Số 29 được viết thành $\$ XXIX."
  },
  {
    "id": "Q01_b02_05",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Để đánh số trang một cuốn sách từ trang 1 đến trang 120, người ta cần dùng tất cả bao nhiêu chữ số?",
    "options": [
      "$252$",
      "$240$",
      "$249$",
      "$261$"
    ],
    "correct_answer": "$252$",
    "hints": [
      "Chia làm 3 nhóm: 1 chữ số (1-9), 2 chữ số (10-99), 3 chữ số (100-120)."
    ],
    "explanation_latex": "Từ 1 đến 9: có 9 chữ số. Từ 10 đến 99: có $90 \\times 2 = 180$ chữ số. Từ 100 đến 120: có $21 \\times 3 = 63$ chữ số. Tổng cộng: $9 + 180 + 63 = 252$ chữ số."
  },
  {
    "id": "Q01_b02_06",
    "chapter_id": "ch-01",
    "topic_id": "b02",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên có hai chữ số $\\overline{ab}$, biết rằng chữ số hàng chục gấp đôi chữ số hàng đơn vị, và nếu xen chữ số $0$ vào giữa thì được số mới hơn số cũ $180$ đơn vị.",
    "options": [
      "$21$",
      "$42$",
      "$63$",
      "$84$"
    ],
    "correct_answer": "$21$",
    "hints": [
      "Số mới là $\\overline{a0b} = 100a + b$. Ta có $\\overline{a0b} - \\overline{ab} = 90a = 180$."
    ],
    "explanation_latex": "Ta có $\\overline{a0b} - \\overline{ab} = (100a + b) - (10a + b) = 90a = 180 \\implies a = 2$. Do $a = 2b \\implies b = 1$. Vậy số đó là $21$."
  },
  {
    "id": "Q01_b03_01",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số tự nhiên liền sau của số $2\\,023$ là:",
    "options": [
      "$2\\,024$",
      "$2\\,022$",
      "$2\\,025$",
      "$2\\,033$"
    ],
    "correct_answer": "$2\\,024$",
    "hints": [
      "Số liền sau hơn số đã cho 1 đơn vị."
    ],
    "explanation_latex": "Số liền sau của 2023 là $2\\,023 + 1 = 2\\,024$."
  },
  {
    "id": "Q01_b03_02",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Khẳng định nào dưới đây là **đúng**?",
    "options": [
      "$2\\,025 > 2\\,024$",
      "$1\\,999 > 2\\,000$",
      "$0 > 1$",
      "$105 < 98$"
    ],
    "correct_answer": "$2\\,025 > 2\\,024$",
    "hints": [
      "So sánh số lượng chữ số và giá trị các hàng từ trái qua phải."
    ],
    "explanation_latex": "$2\\,025 > 2\\,024$ là khẳng định đúng."
  },
  {
    "id": "Q01_b03_03",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tập hợp các số tự nhiên $x$ thỏa mãn $198 \\le x < 202$ là:",
    "options": [
      "$\\{198; 199; 200; 201\\}$",
      "$\\{199; 200; 201\\}$",
      "$\\{198; 199; 200; 201; 202\\}$",
      "$\\{199; 200; 201; 202\\}$"
    ],
    "correct_answer": "$\\{198; 199; 200; 201\\}$",
    "hints": [
      "$x \\ge 198$ lấy số 198. $x < 202$ không lấy 202."
    ],
    "explanation_latex": "Các số tự nhiên từ 198 đến 201 là $\\{198; 199; 200; 201\\}$."
  },
  {
    "id": "Q01_b03_04",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho ba số tự nhiên $a, b, c$ sao cho $a < b$ và $b < c$. Trên tia số nằm ngang, điểm biểu diễn số nào nằm ở giữa hai điểm còn lại?",
    "options": [
      "Điểm $b$",
      "Điểm $a$",
      "Điểm $c$",
      "Không xác định được"
    ],
    "correct_answer": "Điểm $b$",
    "hints": [
      "Số nhỏ hơn nằm bên trái, số lớn hơn nằm bên phải."
    ],
    "explanation_latex": "Vì $a < b < c$, trên tia số điểm $a$ ở bên trái $b$, và điểm $b$ ở bên trái $c$. Vậy điểm $b$ nằm giữa $a$ và $c$."
  },
  {
    "id": "Q01_b03_05",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho ba chữ số $0; 3; 7$. Lập được bao nhiêu số tự nhiên có ba chữ số khác nhau từ ba chữ số đó?",
    "options": [
      "$4$",
      "$6$",
      "$5$",
      "$3$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Chữ số hàng trăm phải khác 0, nên có 2 cách chọn (3 hoặc 7)."
    ],
    "explanation_latex": "Chữ số hàng trăm có 2 cách chọn (3 hoặc 7). Chữ số hàng chục có 2 cách chọn. Chữ số hàng đơn vị có 1 cách chọn. Tổng số các số lập được: $2 \\times 2 \\times 1 = 4$ số (307, 370, 703, 730)."
  },
  {
    "id": "Q01_b03_06",
    "chapter_id": "ch-01",
    "topic_id": "b03",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số tự nhiên có 3 chữ số mà các chữ số tăng dần từ trái sang phải (nghĩa là chữ số hàng trăm nhỏ hơn hàng chục, và hàng chục nhỏ hơn hàng đơn vị)?",
    "options": [
      "$84$",
      "$120$",
      "$72$",
      "$90$"
    ],
    "correct_answer": "$84$",
    "hints": [
      "Các chữ số được chọn từ tập $\\{1; 2; 3; 4; 5; 6; 7; 8; 9\\}$ (chữ số hàng trăm khác 0 nên không thể chứa số 0).",
      "Mỗi bộ 3 chữ số phân biệt từ 9 chữ số này sắp xếp được đúng 1 số tăng dần: $C_9^3$."
    ],
    "explanation_latex": "Chọn 3 chữ số khác nhau từ 9 chữ số $\\{1; 2; \\dots; 9\\}$: số cách chọn là $\\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$. Với mỗi bộ 3 chữ số, chỉ có duy nhất một cách sắp xếp tăng dần. Vậy có 84 số."
  },
  {
    "id": "Q01_b04_01",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $45 + 55$ là:",
    "options": [
      "$100$",
      "$90$",
      "$110$",
      "$95$"
    ],
    "correct_answer": "$100$",
    "hints": [
      "Cộng hai số tròn trăm."
    ],
    "explanation_latex": "$45 + 55 = 100$."
  },
  {
    "id": "Q01_b04_02",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $x$, biết: $x - 32 = 68$.",
    "options": [
      "$x = 100$",
      "$x = 36$",
      "$x = 90$",
      "$x = 110$"
    ],
    "correct_answer": "$x = 100$",
    "hints": [
      "Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ."
    ],
    "explanation_latex": "$x = 68 + 32 = 100$."
  },
  {
    "id": "Q01_b04_03",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính nhanh: $128 + 47 + 72 + 53$:",
    "options": [
      "$300$",
      "$290$",
      "$310$",
      "$280$"
    ],
    "correct_answer": "$300$",
    "hints": [
      "Nhóm các cặp có tổng tròn trăm: $(128 + 72) + (47 + 53)$."
    ],
    "explanation_latex": "$(128 + 72) + (47 + 53) = 200 + 100 = 300$."
  },
  {
    "id": "Q01_b04_04",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hiệu của số tự nhiên lớn nhất có 4 chữ số khác nhau và số tự nhiên nhỏ nhất có 4 chữ số khác nhau là:",
    "options": [
      "$8\\,853$",
      "$8\\,874$",
      "$8\\,999$",
      "$8\\,765$"
    ],
    "correct_answer": "$8\\,853$",
    "hints": [
      "Số lớn nhất có 4 chữ số khác nhau là 9876.",
      "Số nhỏ nhất có 4 chữ số khác nhau là 1023."
    ],
    "explanation_latex": "$9\\,876 - 1\\,023 = 8\\,853$."
  },
  {
    "id": "Q01_b04_05",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một siêu thị buổi sáng bán được $245$ kg gạo, buổi chiều bán được ít hơn buổi sáng $35$ kg. Hỏi cả hai buổi siêu thị bán được bao nhiêu ki-lô-gam gạo?",
    "options": [
      "$455\$ kg",
      "$490\$ kg",
      "$420\$ kg",
      "$465\$ kg"
    ],
    "correct_answer": "$455\$ kg",
    "hints": [
      "Tính số gạo buổi chiều trước: $245 - 35 = 210$.",
      "Sau đó cộng cả hai buổi."
    ],
    "explanation_latex": "Buổi chiều bán được: $245 - 35 = 210\$ kg. Cả hai buổi: $245 + 210 = 455\$ kg."
  },
  {
    "id": "Q01_b04_06",
    "chapter_id": "ch-01",
    "topic_id": "b04",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tính tổng: $S = 2 + 5 + 8 + 11 + \\dots + 59$:",
    "options": [
      "$610$",
      "$600$",
      "$620$",
      "$590$"
    ],
    "correct_answer": "$610$",
    "hints": [
      "Dãy cách đều 3 đơn vị.",
      "Số số hạng: $(59 - 2) : 3 + 1 = 20$.",
      "Tổng: $(2 + 59) \\times 20 : 2$."
    ],
    "explanation_latex": "Số số hạng là $(59 - 2) : 3 + 1 = 20$. Tổng là $S = (2 + 59) \\times 20 : 2 = 61 \\times 10 = 610$."
  },
  {
    "id": "Q01_b05_01",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tích của $25 \\cdot 4$ bằng:",
    "options": [
      "$100$",
      "$125$",
      "$150$",
      "$75$"
    ],
    "correct_answer": "$100$",
    "hints": [
      "Nhân số tự nhiên cơ bản."
    ],
    "explanation_latex": "$25 \\cdot 4 = 100$."
  },
  {
    "id": "Q01_b05_02",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong phép chia có dư $53 : 6$, số dư là:",
    "options": [
      "$5$",
      "$6$",
      "$4$",
      "$3$"
    ],
    "correct_answer": "$5$",
    "hints": [
      "$53 = 6 \\times 8 + r$."
    ],
    "explanation_latex": "Vì $53 = 6 \\times 8 + 5$ nên số dư là $5$."
  },
  {
    "id": "Q01_b05_03",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính hợp lý: $25 \\cdot 39 \\cdot 4$:",
    "options": [
      "$3\\,900$",
      "$390$",
      "$39\\,000$",
      "$1\\,560$"
    ],
    "correct_answer": "$3\\,900$",
    "hints": [
      "Nhóm $(25 \\cdot 4) \\cdot 39$."
    ],
    "explanation_latex": "$(25 \\cdot 4) \\cdot 39 = 100 \\cdot 39 = 3\\,900$."
  },
  {
    "id": "Q01_b05_04",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $x$, biết: $120 : (x - 5) = 24$.",
    "options": [
      "$x = 10$",
      "$x = 9$",
      "$x = 15$",
      "$x = 8$"
    ],
    "correct_answer": "$x = 10$",
    "hints": [
      "$x - 5 = 120 : 24 = 5$."
    ],
    "explanation_latex": "$x - 5 = 120 : 24 = 5 \\implies x = 5 + 5 = 10$."
  },
  {
    "id": "Q01_b05_05",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một trường tổ chức cho $215$ học sinh đi dã ngoại bằng xe ô tô 45 chỗ. Cần ít nhất bao nhiêu xe để chở hết số học sinh trên?",
    "options": [
      "$5\$ xe",
      "$4\$ xe",
      "$6\$ xe",
      "$7\$ xe"
    ],
    "correct_answer": "$5\$ xe",
    "hints": [
      "Thực hiện phép chia có dư: $215 : 45$."
    ],
    "explanation_latex": "Ta có $215 : 45 = 4$ dư $35$ học sinh. 4 xe chở được 180 học sinh, còn 35 bạn cần thêm 1 xe nữa. Vậy cần ít nhất $4 + 1 = 5$ xe."
  },
  {
    "id": "Q01_b05_06",
    "chapter_id": "ch-01",
    "topic_id": "b05",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Một số tự nhiên khi chia cho $7$ dư $5$, chia cho $11$ dư $9$. Hỏi số đó khi chia cho $77$ dư bao nhiêu?",
    "options": [
      "$75$",
      "$64$",
      "$53$",
      "$42$"
    ],
    "correct_answer": "$75$",
    "hints": [
      "Gọi số đó là $A$. Để ý $A + 2$ cùng chia hết cho cả 7 và 11."
    ],
    "explanation_latex": "Vì $A$ chia 7 dư 5 nên $(A + 2) \\vdots 7$. Vì $A$ chia 11 dư 9 nên $(A + 2) \\vdots 11$. Do đó $(A + 2) \\vdots 77$. Suy ra $A + 2 = 77k \\implies A = 77(k - 1) + 75$. Vậy $A$ chia 77 dư $75$."
  },
  {
    "id": "Q01_b06_01",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Viết tích $3 \\cdot 3 \\cdot 3 \\cdot 3$ dưới dạng một lũy thừa:",
    "options": [
      "$3^4$",
      "$4^3$",
      "$3 \\cdot 4$",
      "$12$"
    ],
    "correct_answer": "$3^4$",
    "hints": [
      "Lũy thừa bậc $n$ của $a$ là tích của $n$ thừa số bằng nhau."
    ],
    "explanation_latex": "Tích gồm 4 thừa số 3 được viết là $3^4$."
  },
  {
    "id": "Q01_b06_02",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép nhân $5^3 \\cdot 5^4$ là:",
    "options": [
      "$5^7$",
      "$5^{12}$",
      "$25^7$",
      "$10^7$"
    ],
    "correct_answer": "$5^7$",
    "hints": [
      "Khi nhân hai lũy thừa cùng cơ số, giữ nguyên cơ số và cộng các số mũ."
    ],
    "explanation_latex": "$5^3 \\cdot 5^4 = 5^{3+4} = 5^7$."
  },
  {
    "id": "Q01_b06_03",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Kết quả của phép chia $2^{10} : 2^7$ là:",
    "options": [
      "$2^3$",
      "$2^{17}$",
      "$1^3$",
      "$2^{70}$"
    ],
    "correct_answer": "$2^3$",
    "hints": [
      "Khi chia hai lũy thừa cùng cơ số, giữ nguyên cơ số và trừ các số mũ."
    ],
    "explanation_latex": "$2^{10} : 2^7 = 2^{10-7} = 2^3 = 8$."
  },
  {
    "id": "Q01_b06_04",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Giá trị của biểu thức $2^3 + 3^2 - 1^{2024}$ là:",
    "options": [
      "$16$",
      "$17$",
      "$18$",
      "$15$"
    ],
    "correct_answer": "$16$",
    "hints": [
      "$2^3 = 8, 3^2 = 9, 1^{2024} = 1$."
    ],
    "explanation_latex": "$8 + 9 - 1 = 16$."
  },
  {
    "id": "Q01_b06_05",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "So sánh hai lũy thừa: $2^{300}$ và $3^{200}$:",
    "options": [
      "$2^{300} < 3^{200}$",
      "$2^{300} > 3^{200}$",
      "$2^{300} = 3^{200}$",
      "Không so sánh được"
    ],
    "correct_answer": "$2^{300} < 3^{200}$",
    "hints": [
      "Đưa về cùng số mũ $100$: $2^{300} = (2^3)^{100}$ và $3^{200} = (3^2)^{100}$."
    ],
    "explanation_latex": "Ta có $2^{300} = (2^3)^{100} = 8^{100}$, và $3^{200} = (3^2)^{100} = 9^{100}$. Vì $8 < 9$ nên $8^{100} < 9^{100} \\implies 2^{300} < 3^{200}$."
  },
  {
    "id": "Q01_b06_06",
    "chapter_id": "ch-01",
    "topic_id": "b06",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Chữ số tận cùng của lũy thừa $2^{2024}$ là:",
    "options": [
      "$6$",
      "$2$",
      "$4$",
      "$8$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Chu kỳ chữ số tận cùng của các lũy thừa của 2 là: $2, 4, 8, 6$ (chu kỳ 4).",
      "Xét số dư của $2024$ khi chia cho 4."
    ],
    "explanation_latex": "Các chữ số tận cùng của $2^n$ lặp lại theo chu kỳ 4: $2^1$ tận cùng 2, $2^2$ tận cùng 4, $2^3$ tận cùng 8, $2^4$ tận cùng 6. Vì $2024$ chia hết cho 4 ($2024 = 4 \\times 506$) nên $2^{2024}$ có chữ số tận cùng là $6$."
  },
  {
    "id": "Q01_b07_01",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Giá trị của biểu thức $20 - 10 : 2$ là:",
    "options": [
      "$15$",
      "$5$",
      "$10$",
      "$20$"
    ],
    "correct_answer": "$15$",
    "hints": [
      "Nhân chia trước, cộng trừ sau."
    ],
    "explanation_latex": "$20 - 10 : 2 = 20 - 5 = 15$."
  },
  {
    "id": "Q01_b07_02",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Khi thực hiện biểu thức có các dấu ngoặc tròn $( )$, ngoặc vuông $[ ]$, ngoặc nhọn $\\{ \\}$, thứ tự đúng là:",
    "options": [
      "$( ) \\to [ ] \\to \\{ \\}$",
      "$\\{ \\} \\to [ ] \\to ( )$",
      "$[ ] \\to ( ) \\to \\{ \\}$",
      "Thứ tự nào cũng được"
    ],
    "correct_answer": "$( ) \\to [ ] \\to \\{ \\}$",
    "hints": [
      "Quy tắc thực hiện dấu ngoặc."
    ],
    "explanation_latex": "Thực hiện trong ngoặc tròn $( )$ trước, rồi đến ngoặc vuông $[ ]$, cuối cùng đến ngoặc nhọn $\\{ \\}$."
  },
  {
    "id": "Q01_b07_03",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Giá trị của biểu thức $50 - [30 - (6 - 2)^2]$ là:",
    "options": [
      "$36$",
      "$24$",
      "$46$",
      "$40$"
    ],
    "correct_answer": "$36$",
    "hints": [
      "$(6 - 2)^2 = 4^2 = 16$.",
      "$30 - 16 = 14$. Sau đó lấy $50 - 14$."
    ],
    "explanation_latex": "$50 - [30 - 16] = 50 - 14 = 36$."
  },
  {
    "id": "Q01_b07_04",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $x$, biết: $2 \\cdot (x - 5) + 3^2 = 25$.",
    "options": [
      "$x = 13$",
      "$x = 8$",
      "$x = 10$",
      "$x = 15$"
    ],
    "correct_answer": "$x = 13$",
    "hints": [
      "$2(x - 5) + 9 = 25 \\implies 2(x - 5) = 16$."
    ],
    "explanation_latex": "$2(x - 5) = 25 - 9 = 16 \\implies x - 5 = 8 \\implies x = 13$."
  },
  {
    "id": "Q01_b07_05",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tính giá trị biểu thức: $A = 120 : \\{96 - [3^3 + (18 - 3 \\cdot 5)^2]\\}$:",
    "options": [
      "$2$",
      "$1$",
      "$3$",
      "$4$"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Thực hiện trong ngoặc tròn trước: $18 - 3 \\cdot 5 = 18 - 15 = 3$.",
      "Thực hiện lũy thừa rồi tính giá trị trong ngoặc vuông: $3^3 + 3^2 = 27 + 9 = 36$."
    ],
    "explanation_latex": "Thực hiện phép tính theo đúng thứ tự: trong ngoặc tròn $\\to$ lũy thừa $\\to$ ngoặc vuông $\\to$ ngoặc nhọn $\\to$ phép chia:\n- Ngoặc tròn: $18 - 3 \\cdot 5 = 18 - 15 = 3$\n- Lũy thừa và ngoặc vuông: $3^3 + 3^2 = 27 + 9 = 36$\n- Ngoặc nhọn: $96 - 36 = 60$\n- Phép chia: $A = 120 : 60 = 2$."
  },
  {
    "id": "Q01_b07_06",
    "chapter_id": "ch-01",
    "topic_id": "b07",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $x$, biết: $3^{x+1} + 3^x = 36$.",
    "options": [
      "$x = 2$",
      "$x = 1$",
      "$x = 3$",
      "$x = 0$"
    ],
    "correct_answer": "$x = 2$",
    "hints": [
      "Đặt $3^x$ làm thừa số chung: $3^x \\cdot (3 + 1) = 36$."
    ],
    "explanation_latex": "$3^x \\cdot (3 + 1) = 36 \\implies 3^x \\cdot 4 = 36 \\implies 3^x = 9 = 3^2 \\implies x = 2$."
  },
  {
    "id": "Q01_b08_01",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Cho tổng $A = 12 + 16 + 24$. Không tính giá trị, hỏi $A$ chia hết cho số nào sau đây?",
    "options": [
      "$4$",
      "$5$",
      "$7$",
      "$9$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Xét tính chia hết của từng số hạng cho 4."
    ],
    "explanation_latex": "Vì $12 \\; \\vdots \\; 4$, $16 \\; \\vdots \\; 4$, $24 \\; \\vdots \\; 4$ nên tổng $A \\; \\vdots \\; 4$."
  },
  {
    "id": "Q01_b08_02",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tập hợp các ước của số $12$ là:",
    "options": [
      "$\\{1; 2; 3; 4; 6; 12\\}$",
      "$\\{1; 2; 3; 4; 6\\}$",
      "$\\{2; 3; 4; 6; 12\\}$",
      "$\\{0; 1; 2; 3; 4; 6; 12\\}$"
    ],
    "correct_answer": "$\\{1; 2; 3; 4; 6; 12\\}$",
    "hints": [
      "Ước của số tự nhiên không chứa số 0."
    ],
    "explanation_latex": "Số 12 chia hết cho các số: 1, 2, 3, 4, 6, 12."
  },
  {
    "id": "Q01_b08_03",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho tổng $M = 24 + 36 + x$. Để $M$ chia hết cho $6$ thì số tự nhiên $x$ phải thỏa mãn điều kiện gì?",
    "options": [
      "$x$ chia hết cho $6$",
      "$x$ chia 6 dư 1",
      "$x$ là số chẵn",
      "$x$ là số lẻ"
    ],
    "correct_answer": "$x$ chia hết cho $6$",
    "hints": [
      "$24 \\; \\vdots \\; 6$ và $36 \\; \\vdots \\; 6$."
    ],
    "explanation_latex": "Vì 24 và 36 đều chia hết cho 6 nên để $M \\; \\vdots \\; 6$ thì bắt buộc $x \\; \\vdots \\; 6$."
  },
  {
    "id": "Q01_b08_04",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Bốn bội đầu tiên của số $7$ (theo thứ tự tăng dần) là:",
    "options": [
      "$0; 7; 14; 21$",
      "$7; 14; 21; 28$",
      "$1; 7; 14; 21$",
      "$0; 1; 7; 14$"
    ],
    "correct_answer": "$0; 7; 14; 21$",
    "hints": [
      "Nhân 7 lần lượt với 0, 1, 2, 3."
    ],
    "explanation_latex": "Các bội của 7 là: $7 \\times 0 = 0, 7 \\times 1 = 7, 7 \\times 2 = 14, 7 \\times 3 = 21$."
  },
  {
    "id": "Q01_b08_05",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $n$ sao cho $(n + 7)$ chia hết cho $(n + 2)$:",
    "options": [
      "$n = 3$",
      "$n = 2$",
      "$n = 4$",
      "$n = 5$"
    ],
    "correct_answer": "$n = 3$",
    "hints": [
      "Tách: $n + 7 = (n + 2) + 5$."
    ],
    "explanation_latex": "Ta có $n + 7 = (n + 2) + 5$. Để $(n + 7) \\; \\vdots \\; (n + 2)$ thì $5 \\; \\vdots \\; (n + 2)$. Vì $n \\in \\mathbb{N}$ nên $n + 2 \\ge 2$, do đó $n + 2 = 5 \\implies n = 3$."
  },
  {
    "id": "Q01_b08_06",
    "chapter_id": "ch-01",
    "topic_id": "b08",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Chứng minh rằng với mọi số tự nhiên $n$, tích $P = n(n + 1)(2n + 1)$ luôn chia hết cho số nào dưới đây?",
    "options": [
      "$6$",
      "$8$",
      "$9$",
      "$12$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Trong hai số tự nhiên liên tiếp $n, n+1$ luôn có một số chẵn nên $P \\; \\vdots \\; 2$.",
      "Xét số dư của $n$ khi chia cho 3 để chứng minh $P \\; \\vdots \\; 3$."
    ],
    "explanation_latex": "Tích $n(n+1)$ là tích 2 số tự nhiên liên tiếp nên chia hết cho 2. Nếu $n$ chia hết cho 3 thì $P \\; \\vdots \\; 3$. Nếu $n = 3k + 1$ thì $2n + 1 = 6k + 3 \\; \\vdots \\; 3$. Nếu $n = 3k + 2$ thì $n + 1 = 3k + 3 \\; \\vdots \\; 3$. Vậy $P$ luôn chia hết cho cả 2 và 3, do đó $P \\; \\vdots \\; 6$."
  },
  {
    "id": "Q01_b09_01",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số nào sau đây chia hết cho cả $2$ và $5$?",
    "options": [
      "$320$",
      "$125$",
      "$234$",
      "$505$"
    ],
    "correct_answer": "$320$",
    "hints": [
      "Số chia hết cho cả 2 và 5 có chữ số tận cùng là 0."
    ],
    "explanation_latex": "Số 320 có chữ số tận cùng là 0 nên chia hết cho cả 2 và 5."
  },
  {
    "id": "Q01_b09_02",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số nào sau đây chia hết cho $9$?",
    "options": [
      "$2\\,340$",
      "$1\\,234$",
      "$5\\,671$",
      "$8\\,105$"
    ],
    "correct_answer": "$2\\,340$",
    "hints": [
      "Tính tổng các chữ số của mỗi số."
    ],
    "explanation_latex": "Tổng các chữ số của $2\\,340$ là $2 + 3 + 4 + 0 = 9 \\; \\vdots \\; 9$ nên số đó chia hết cho 9."
  },
  {
    "id": "Q01_b09_03",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm chữ số $x$ để số $\\overline{5x2}$ chia hết cho $3$ nhưng **không** chia hết cho $9$:",
    "options": [
      "$x = 5$",
      "$x = 2$",
      "$x = 8$",
      "$x = 0$"
    ],
    "correct_answer": "$x = 5$",
    "hints": [
      "Tổng các chữ số là $5 + x + 2 = x + 7$.",
      "$x + 7$ chia hết cho 3 nhưng không chia hết cho 9."
    ],
    "explanation_latex": "Với $x = 5$: tổng là $5 + 7 = 12 \\; \\vdots \\; 3$ và $12 \\not\\vdots 9$ (thỏa mãn). Với $x = 2$ thì tổng là 9 chia hết cho 9 (loại)."
  },
  {
    "id": "Q01_b09_04",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Số tự nhiên nhỏ nhất có 3 chữ số khác nhau chia hết cho cả $2$ và $3$ là:",
    "options": [
      "$102$",
      "$120$",
      "$108$",
      "$126$"
    ],
    "correct_answer": "$102$",
    "hints": [
      "Chữ số hàng trăm là 1, hàng chục nhỏ nhất là 0.",
      "Chữ số hàng đơn vị phải chẵn và tổng chia hết cho 3."
    ],
    "explanation_latex": "Số có dạng $\\overline{10x}$. Để chia hết cho 2 thì $x \\in \\{2; 4; 6; 8\\}$. Để chia hết cho 3 thì $1 + 0 + x \\; \\vdots \\; 3 \\implies x = 2$. Vậy số đó là $102$."
  },
  {
    "id": "Q01_b09_05",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm các chữ số $x, y$ để số $\\overline{1x5y}$ chia hết cho cả $2; 5$ và $9$:",
    "options": [
      "$x = 3; y = 0$",
      "$x = 4; y = 0$",
      "$x = 3; y = 5$",
      "$x = 0; y = 0$"
    ],
    "correct_answer": "$x = 3; y = 0$",
    "hints": [
      "Chia hết cho cả 2 và 5 thì tận cùng $y = 0$.",
      "Tổng $1 + x + 5 + 0 = x + 6 \\; \\vdots \\; 9$."
    ],
    "explanation_latex": "Để chia hết cho 2 và 5 thì $y = 0$. Số trở thành $\\overline{1x50}$. Để chia hết cho 9 thì $1 + x + 5 + 0 = x + 6 \\; \\vdots \\; 9 \\implies x = 3$. Vậy $x = 3; y = 0$."
  },
  {
    "id": "Q01_b09_06",
    "chapter_id": "ch-01",
    "topic_id": "b09",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số tự nhiên có 3 chữ số chia hết cho cả $2$ và $5$, đồng thời chia cho $3$ dư $1$?",
    "options": [
      "$30$",
      "$29$",
      "$31$",
      "$28$"
    ],
    "correct_answer": "$30$",
    "hints": [
      "Chia hết cho cả 2 và 5 thì số tận cùng là 0 $\\implies$ số có dạng $\\overline{ab0}$.",
      "Số chia hết cho 10 có dạng $10k$. Số vừa chia hết cho 10 vừa chia 3 dư 1 có dạng $30m + 10$."
    ],
    "explanation_latex": "Số chia hết cho 10 trong khoảng 100 đến 990 có dạng $10k$ với $k \\in \\{10; 11; \\dots; 99\\}$ (90 số). Trong đó số chia 3 dư 1: vì $10k \\equiv k \\pmod 3$, nên $k$ chia 3 dư 1. Các giá trị của $k$: $10, 13, 16, \\dots, 97$. Số lượng: $(97 - 10) : 3 + 1 = 30$ số."
  },
  {
    "id": "Q01_b10_01",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số nào sau đây là số nguyên tố?",
    "options": [
      "$17$",
      "$15$",
      "$21$",
      "$27$"
    ],
    "correct_answer": "$17$",
    "hints": [
      "Số nguyên tố chỉ có đúng hai ước là 1 và chính nó."
    ],
    "explanation_latex": "$17$ chỉ có hai ước là $1$ và $17$ nên là số nguyên tố."
  },
  {
    "id": "Q01_b10_02",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số nguyên tố chẵn duy nhất là số nào?",
    "options": [
      "$2$",
      "$0$",
      "$4$",
      "$6$"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Số 2 là số nguyên tố nhỏ nhất và là số chẵn duy nhất."
    ],
    "explanation_latex": "Số 2 là số nguyên tố chẵn duy nhất."
  },
  {
    "id": "Q01_b10_03",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Phân tích số $60$ ra thừa số nguyên tố:",
    "options": [
      "$60 = 2^2 \\cdot 3 \\cdot 5$",
      "$60 = 4 \\cdot 3 \\cdot 5$",
      "$60 = 2 \\cdot 30$",
      "$60 = 2 \\cdot 5 \\cdot 6$"
    ],
    "correct_answer": "$60 = 2^2 \\cdot 3 \\cdot 5$",
    "hints": [
      "Tất cả các thừa số phải là số nguyên tố."
    ],
    "explanation_latex": "$60 = 4 \\cdot 15 = 2^2 \\cdot 3 \\cdot 5$."
  },
  {
    "id": "Q01_b10_04",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Khẳng định nào dưới đây là **sai**?",
    "options": [
      "Số $1$ là số nguyên tố nhỏ nhất",
      "Số $0$ và số $1$ không là số nguyên tố cũng không là hợp số",
      "Mọi số nguyên tố lớn hơn 2 đều là số lẻ",
      "Hợp số là số tự nhiên lớn hơn 1 có nhiều hơn 2 ước"
    ],
    "correct_answer": "Số $1$ là số nguyên tố nhỏ nhất",
    "hints": [
      "Số nguyên tố nhỏ nhất là số 2."
    ],
    "explanation_latex": "Số 1 không phải là số nguyên tố. Số nguyên tố nhỏ nhất là 2."
  },
  {
    "id": "Q01_b10_05",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $p$ để cả $p$ và $p + 2$ đều là các số nguyên tố:",
    "options": [
      "$p = 3$",
      "$p = 7$",
      "$p = 9$",
      "$p = 2$"
    ],
    "correct_answer": "$p = 3$",
    "hints": [
      "Thử các số nguyên tố nhỏ: nếu $p = 3$ thì $p + 2 = 5$ đều là số nguyên tố."
    ],
    "explanation_latex": "Với $p = 3$, ta có $p + 2 = 5$, cả 3 và 5 đều là số nguyên tố. (Nếu $p = 2$ thì $p + 2 = 4$ là hợp số)."
  },
  {
    "id": "Q01_b10_06",
    "chapter_id": "ch-01",
    "topic_id": "b10",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm tất cả các số nguyên tố $p$ sao cho $p + 10$ và $p + 14$ cũng là các số nguyên tố:",
    "options": [
      "$p = 3$",
      "$p = 2$",
      "$p = 5$",
      "$p = 7$"
    ],
    "correct_answer": "$p = 3$",
    "hints": [
      "Xét các trường hợp $p$ chia cho 3."
    ],
    "explanation_latex": "Nếu $p = 3$: $p + 10 = 13$, $p + 14 = 17$ đều là số nguyên tố (thỏa mãn). Nếu $p > 3$ và $p$ chia 3 dư 1 thì $p + 14 = 3k + 15 \\; \\vdots \\; 3$ (hợp số). Nếu $p$ chia 3 dư 2 thì $p + 10 = 3k + 12 \\; \\vdots \\; 3$ (hợp số). Vậy duy nhất $p = 3$."
  },
  {
    "id": "Q01_b11_01",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Ước chung lớn nhất của $12$ và $18$ là:",
    "options": [
      "$6$",
      "$3$",
      "$2$",
      "$12$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Tìm ước chung lớn nhất chia hết cho cả 12 và 18."
    ],
    "explanation_latex": "ƯCLN(12, 18) = 6."
  },
  {
    "id": "Q01_b11_02",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hai số được gọi là nguyên tố cùng nhau khi ước chung lớn nhất của chúng bằng:",
    "options": [
      "$1$",
      "$0$",
      "$2$",
      "Bất kỳ"
    ],
    "correct_answer": "$1$",
    "hints": [
      "Định nghĩa hai số nguyên tố cùng nhau."
    ],
    "explanation_latex": "Hai số nguyên tố cùng nhau là hai số có ƯCLN = 1."
  },
  {
    "id": "Q01_b11_03",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Rút gọn phân số $\\frac{24}{36}$ về phân số tối giản:",
    "options": [
      "$\\frac{2}{3}$",
      "$\\frac{4}{6}$",
      "$\\frac{6}{9}$",
      "$\\frac{12}{18}$"
    ],
    "correct_answer": "$\\frac{2}{3}$",
    "hints": [
      "Chia cả tử và mẫu cho ƯCLN(24, 36) = 12."
    ],
    "explanation_latex": "$\\frac{24 : 12}{36 : 12} = \\frac{2}{3}$."
  },
  {
    "id": "Q01_b11_04",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Biết $a = 2^2 \\cdot 3 \\cdot 5$ và $b = 2 \\cdot 3^2 \\cdot 7$. ƯCLN(a, b) là:",
    "options": [
      "$6$",
      "$12$",
      "$210$",
      "$420$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Lấy các thừa số nguyên tố chung với số mũ nhỏ nhất: $2^1 \\cdot 3^1$."
    ],
    "explanation_latex": "ƯCLN(a, b) = 2^1 \\cdot 3^1 = 6."
  },
  {
    "id": "Q01_b11_05",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cô giáo có $30$ chiếc bút và $45$ quyển vở muốn chia đều vào các phần thưởng sao cho mỗi phần có số bút và số vở như nhau. Hỏi cô giáo có thể chia được nhiều nhất bao nhiêu phần thưởng?",
    "options": [
      "$15\$ phần",
      "$5\$ phần",
      "$10\$ phần",
      "$30\$ phần"
    ],
    "correct_answer": "$15\$ phần",
    "hints": [
      "Số phần thưởng nhiều nhất chính là ƯCLN(30, 45)."
    ],
    "explanation_latex": "Ta có ƯCLN(30, 45) = 15. Vậy cô có thể chia nhiều nhất 15 phần thưởng (mỗi phần 2 bút và 3 vở)."
  },
  {
    "id": "Q01_b11_06",
    "chapter_id": "ch-01",
    "topic_id": "b11",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số tự nhiên $n$ lớn nhất có hai chữ số sao cho phân số $\\frac{n + 1}{2n + 3}$ là phân số tối giản với mọi $n$:",
    "options": [
      "$99$",
      "$98$",
      "$97$",
      "$96$"
    ],
    "correct_answer": "$99$",
    "hints": [
      "Gọi $d =$ ƯCLN(n+1, 2n+3). Ta có $2(n+1) = 2n+2$. Suy ra $(2n+3) - (2n+2) = 1 \\; \\vdots \\; d$."
    ],
    "explanation_latex": "Gọi $d =$ ƯCLN(n + 1, 2n + 3). Khi đó $(n + 1) \\; \\vdots \\; d \\implies 2(n + 1) = (2n + 2) \\; \\vdots \\; d$. Lại có $(2n + 3) \\; \\vdots \\; d$. Suy ra $[(2n + 3) - (2n + 2)] = 1 \\; \\vdots \\; d \\implies d = 1$. Do đó phân số luôn tối giản với MỌI số tự nhiên $n$. Số tự nhiên lớn nhất có 2 chữ số là $99$."
  },
  {
    "id": "Q01_b12_01",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Bội chung nhỏ nhất của $6$ và $8$ là:",
    "options": [
      "$24$",
      "$48$",
      "$12$",
      "$16$"
    ],
    "correct_answer": "$24$",
    "hints": [
      "Số nhỏ nhất khác 0 cùng chia hết cho 6 và 8."
    ],
    "explanation_latex": "$BCNN(6, 8) = 24$."
  },
  {
    "id": "Q01_b12_02",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Nếu số tự nhiên $a$ chia hết cho $b$ thì $BCNN(a, b)$ bằng:",
    "options": [
      "$a$",
      "$b$",
      "$a \\cdot b$",
      "$1$"
    ],
    "correct_answer": "$a$",
    "hints": [
      "Vì $a$ là bội của $b$ nên $a$ cũng là bội chung nhỏ nhất."
    ],
    "explanation_latex": "Khi $a \\; \\vdots \\; b$ thì $BCNN(a, b) = a$."
  },
  {
    "id": "Q01_b12_03",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho $x = 2^3 \\cdot 3$ và $y = 2 \\cdot 3^2 \\cdot 5$. $BCNN(x, y)$ là:",
    "options": [
      "$360$",
      "$24$",
      "$72$",
      "$120$"
    ],
    "correct_answer": "$360$",
    "hints": [
      "Chọn thừa số chung và riêng với số mũ lớn nhất: $2^3 \\cdot 3^2 \\cdot 5$."
    ],
    "explanation_latex": "$BCNN(x, y) = 2^3 \\cdot 3^2 \\cdot 5 = 8 \\cdot 9 \\cdot 5 = 360$."
  },
  {
    "id": "Q01_b12_04",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Mẫu số chung nhỏ nhất của hai phân số $\\frac{5}{12}$ và $\\frac{7}{18}$ là:",
    "options": [
      "$36$",
      "$72$",
      "$216$",
      "$6$"
    ],
    "correct_answer": "$36$",
    "hints": [
      "Mẫu số chung nhỏ nhất là $BCNN(12, 18)$."
    ],
    "explanation_latex": "$BCNN(12, 18) = 36$."
  },
  {
    "id": "Q01_b12_05",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Hai bạn An và Bình cùng trực nhật một ngày. Cứ sau $6$ ngày An lại trực nhật, cứ sau $8$ ngày Bình lại trực nhật. Hỏi ít nhất sau bao nhiêu ngày thì hai bạn lại cùng trực nhật vào một ngày?",
    "options": [
      "$24\$ ngày",
      "$48\$ ngày",
      "$14\$ ngày",
      "$12\$ ngày"
    ],
    "correct_answer": "$24\$ ngày",
    "hints": [
      "Số ngày ít nhất là $BCNN(6, 8)$."
    ],
    "explanation_latex": "Số ngày cần tìm là $BCNN(6, 8) = 24$ ngày."
  },
  {
    "id": "Q01_b12_06",
    "chapter_id": "ch-01",
    "topic_id": "b12",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Học sinh khối 6 của một trường khi xếp hàng 12, hàng 15, hàng 18 đều vừa đủ. Biết số học sinh trong khoảng từ $300$ đến $400$ em. Số học sinh khối 6 là:",
    "options": [
      "$360\$ học sinh",
      "$350\$ học sinh",
      "$380\$ học sinh",
      "$320\$ học sinh"
    ],
    "correct_answer": "$360\$ học sinh",
    "hints": [
      "Số học sinh là bội chung của 12, 15, 18. Tìm $BCNN(12, 15, 18)$."
    ],
    "explanation_latex": "$12 = 2^2 \\cdot 3; 15 = 3 \\cdot 5; 18 = 2 \\cdot 3^2 \\implies BCNN = 2^2 \\cdot 3^2 \\cdot 5 = 180$. Các bội chung là $180, 360, 540, \\dots$ Số nằm trong khoảng $300$ đến $400$ là $360$ học sinh."
  },
  {
    "id": "Q01_b13_01",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số đối của số $-7$ là:",
    "options": [
      "$7$",
      "$-7$",
      "$0$",
      "$\\frac{1}{7}$"
    ],
    "correct_answer": "$7$",
    "hints": [
      "Hai số đối nhau có tổng bằng 0."
    ],
    "explanation_latex": "Số đối của $-7$ là $+7$."
  },
  {
    "id": "Q01_b13_02",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Nhiệt độ $5^\\circ\$ C dưới $0^\\circ\$ C được biểu diễn bằng số nguyên nào?",
    "options": [
      "$-5^\\circ\$ C",
      "$+5^\\circ\$ C",
      "$0^\\circ\$ C",
      "$-10^\\circ\$ C"
    ],
    "correct_answer": "$-5^\\circ\$ C",
    "hints": [
      "Dưới $0^\\circ\$ C dùng số nguyên âm."
    ],
    "explanation_latex": "Nhiệt độ dưới 0 độ C được biểu diễn bằng số âm: $-5^\\circ\$ C."
  },
  {
    "id": "Q01_b13_03",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Sắp xếp các số nguyên sau theo thứ tự tăng dần: $-5; 2; 0; -8; 3$:",
    "options": [
      "$-8 < -5 < 0 < 2 < 3$",
      "$-5 < -8 < 0 < 2 < 3$",
      "$3 < 2 < 0 < -5 < -8$",
      "$-8 < -5 < 0 < 3 < 2$"
    ],
    "correct_answer": "$-8 < -5 < 0 < 2 < 3$",
    "hints": [
      "Số nguyên âm có phần tự nhiên càng lớn thì càng nhỏ."
    ],
    "explanation_latex": "Số âm nhỏ hơn 0, số dương lớn hơn 0: $-8 < -5 < 0 < 2 < 3$."
  },
  {
    "id": "Q01_b13_04",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tập hợp các số nguyên $x$ thỏa mãn $-3 < x \\le 2$ là:",
    "options": [
      "$\\{-2; -1; 0; 1; 2\\}$",
      "$\\{-3; -2; -1; 0; 1; 2\\}$",
      "$\\{-2; -1; 0; 1\\}$",
      "$\\{-3; -2; -1; 0; 1\\}$"
    ],
    "correct_answer": "$\\{-2; -1; 0; 1; 2\\}$",
    "hints": [
      "$x > -3$ không lấy $-3$. $x \\le 2$ lấy đến $2$."
    ],
    "explanation_latex": "Các số nguyên thỏa mãn là $\\{-2; -1; 0; 1; 2\\}$."
  },
  {
    "id": "Q01_b13_05",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một tàu ngầm đang ở độ sâu $35\$ m dưới mực nước biển (được ghi là $-35\$ m). Tàu tiếp tục lặn sâu thêm $15\$ m nữa. Hỏi độ sâu mới của tàu ngầm là bao nhiêu mét?",
    "options": [
      "$-50\$ m",
      "$-20\$ m",
      "$+50\$ m",
      "$-15\$ m"
    ],
    "correct_answer": "$-50\$ m",
    "hints": [
      "Lặn sâu thêm nghĩa là trừ thêm độ cao: $-35 - 15$."
    ],
    "explanation_latex": "Độ sâu mới: $-35 - 15 = -50\$ m (nghĩa là 50 m dưới mực nước biển)."
  },
  {
    "id": "Q01_b13_06",
    "chapter_id": "ch-01",
    "topic_id": "b13",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số nguyên $x$ thỏa mãn $|x| \\le 10$?",
    "options": [
      "$21$",
      "$20$",
      "$19$",
      "$11$"
    ],
    "correct_answer": "$21$",
    "hints": [
      "$|x| \\le 10 \\iff -10 \\le x \\le 10$."
    ],
    "explanation_latex": "Các số nguyên từ $-10$ đến $10$: có $(10 - (-10)) + 1 = 20 + 1 = 21$ số."
  },
  {
    "id": "Q01_b14_01",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $(-15) + (-25)$ là:",
    "options": [
      "$-40$",
      "$40$",
      "$-10$",
      "$10$"
    ],
    "correct_answer": "$-40$",
    "hints": [
      "Cộng hai số nguyên âm: cộng hai phần tự nhiên rồi đặt dấu trừ trước kết quả."
    ],
    "explanation_latex": "$(-15) + (-25) = -(15 + 25) = -40$."
  },
  {
    "id": "Q01_b14_02",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $18 - 25$ là:",
    "options": [
      "$-7$",
      "$7$",
      "$-43$",
      "$43$"
    ],
    "correct_answer": "$-7$",
    "hints": [
      "$a - b = a + (-b)$."
    ],
    "explanation_latex": "$18 - 25 = -(25 - 18) = -7$."
  },
  {
    "id": "Q01_b14_03",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính hợp lý: $45 + (-75) + 55$:",
    "options": [
      "$25$",
      "$-25$",
      "$175$",
      "$-75$"
    ],
    "correct_answer": "$25$",
    "hints": [
      "Nhóm $(45 + 55) + (-75)$."
    ],
    "explanation_latex": "$(45 + 55) + (-75) = 100 - 75 = 25$."
  },
  {
    "id": "Q01_b14_04",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Nhiệt độ tại Sa Pa lúc 6 giờ sáng là $-2^\\circ\$ C, đến 12 giờ trưa tăng thêm $7^\\circ\$ C. Nhiệt độ lúc 12 giờ trưa là:",
    "options": [
      "$5^\\circ\$ C",
      "$-9^\\circ\$ C",
      "$9^\\circ\$ C",
      "$-5^\\circ\$ C"
    ],
    "correct_answer": "$5^\\circ\$ C",
    "hints": [
      "Thực hiện phép cộng: $-2 + 7$."
    ],
    "explanation_latex": "$-2 + 7 = 5^\\circ\$ C."
  },
  {
    "id": "Q01_b14_05",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm số nguyên $x$, biết: $x - (-15) = -20$.",
    "options": [
      "$x = -35$",
      "$x = -5$",
      "$x = 5$",
      "$x = 35$"
    ],
    "correct_answer": "$x = -35$",
    "hints": [
      "$x - (-15) = x + 15$."
    ],
    "explanation_latex": "$x + 15 = -20 \\implies x = -20 - 15 = -35$."
  },
  {
    "id": "Q01_b14_06",
    "chapter_id": "ch-01",
    "topic_id": "b14",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tính tổng tất cả các số nguyên $x$ thỏa mãn $-100 \\le x < 102$:",
    "options": [
      "$201$",
      "$101$",
      "$0$",
      "$102$"
    ],
    "correct_answer": "$201$",
    "hints": [
      "Các số nguyên từ $-100$ đến $100$ triệt tiêu lẫn nhau từng đôi một."
    ],
    "explanation_latex": "Tổng $S = (-100 + 100) + (-99 + 99) + \\dots + (-1 + 1) + 0 + 101 = 101$ hoặc nếu gồm cả 101 thì tổng là 101. Kiểm tra: $-100 \\le x < 102$ tức là $x \\in \\{-100; -99; \\dots; 100; 101\\}$. Tổng bằng $101$."
  },
  {
    "id": "Q01_b15_01",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Khi bỏ dấu ngoặc có dấu \"-\" đằng trước: $-(a - b + c)$, kết quả là:",
    "options": [
      "$-a + b - c$",
      "$-a - b + c$",
      "$-a - b - c$",
      "$a - b + c$"
    ],
    "correct_answer": "$-a + b - c$",
    "hints": [
      "Đổi dấu tất cả các số hạng trong ngoặc."
    ],
    "explanation_latex": "$-(a - b + c) = -a + b - c$."
  },
  {
    "id": "Q01_b15_02",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Khi bỏ dấu ngoặc có dấu \"+\" đằng trước: $+(x - y + z)$, kết quả là:",
    "options": [
      "$x - y + z$",
      "$-x + y - z$",
      "$x + y + z$",
      "$x - y - z$"
    ],
    "correct_answer": "$x - y + z$",
    "hints": [
      "Dấu các số hạng trong ngoặc giữ nguyên."
    ],
    "explanation_latex": "$+(x - y + z) = x - y + z$."
  },
  {
    "id": "Q01_b15_03",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính nhanh: $(28 - 145) - (28 - 45)$:",
    "options": [
      "$-100$",
      "$100$",
      "$-200$",
      "$0$"
    ],
    "correct_answer": "$-100$",
    "hints": [
      "Bỏ ngoặc: $28 - 145 - 28 + 45$."
    ],
    "explanation_latex": "$(28 - 28) + (45 - 145) = 0 - 100 = -100$."
  },
  {
    "id": "Q01_b15_04",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Rút gọn biểu thức $A = (x + y - 5) - (x - y - 5)$:",
    "options": [
      "$2y$",
      "$2x$",
      "$0$",
      "$2y - 10$"
    ],
    "correct_answer": "$2y$",
    "hints": [
      "Bỏ ngoặc: $x + y - 5 - x + y + 5$."
    ],
    "explanation_latex": "$(x - x) + (y + y) + (-5 + 5) = 2y$."
  },
  {
    "id": "Q01_b15_05",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tính giá trị biểu thức: $M = 325 - (125 - 47) - 47$:",
    "options": [
      "$200$",
      "$247$",
      "$153$",
      "$250$"
    ],
    "correct_answer": "$200$",
    "hints": [
      "Bỏ dấu ngoặc: $325 - 125 + 47 - 47$."
    ],
    "explanation_latex": "$325 - 125 + 47 - 47 = (325 - 125) + (47 - 47) = 200 + 0 = 200$."
  },
  {
    "id": "Q01_b15_06",
    "chapter_id": "ch-01",
    "topic_id": "b15",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số nguyên $x$, biết: $(x - 3) - (2x + 5) = -12$.",
    "options": [
      "$x = 4$",
      "$x = -4$",
      "$x = 20$",
      "$x = -20$"
    ],
    "correct_answer": "$x = 4$",
    "hints": [
      "Bỏ ngoặc: $x - 3 - 2x - 5 = -12$."
    ],
    "explanation_latex": "$-x - 8 = -12 \\implies -x = -12 + 8 = -4 \\implies x = 4$."
  },
  {
    "id": "Q01_b16_01",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tích của hai số nguyên khác dấu luôn là:",
    "options": [
      "Một số nguyên âm",
      "Một số nguyên dương",
      "Số 0",
      "Không xác định được"
    ],
    "correct_answer": "Một số nguyên âm",
    "hints": [
      "Quy tắc dấu: âm nhân dương ra âm."
    ],
    "explanation_latex": "Tích của hai số nguyên khác dấu luôn mang dấu âm."
  },
  {
    "id": "Q01_b16_02",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $(-6) \\cdot (-7)$ là:",
    "options": [
      "$42$",
      "$-42$",
      "$13$",
      "$-13$"
    ],
    "correct_answer": "$42$",
    "hints": [
      "Hai số nguyên cùng âm nhân với nhau ra số dương."
    ],
    "explanation_latex": "$(-6) \\cdot (-7) = +42$."
  },
  {
    "id": "Q01_b16_03",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính giá trị biểu thức: $(-4) \\cdot 25 \\cdot (-7)$:",
    "options": [
      "$700$",
      "$-700$",
      "$100$",
      "$-100$"
    ],
    "correct_answer": "$700$",
    "hints": [
      "$(-4) \\cdot 25 = -100$. Sau đó nhân $(-7)$."
    ],
    "explanation_latex": "$[(-4) \\cdot 25] \\cdot (-7) = (-100) \\cdot (-7) = 700$."
  },
  {
    "id": "Q01_b16_04",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm số nguyên $x$, biết: $(x - 3)(x + 2) = 0$.",
    "options": [
      "$x \\in \\{3; -2\\}$",
      "$x \\in \\{-3; 2\\}$",
      "$x = 3$",
      "$x = -2$"
    ],
    "correct_answer": "$x \\in \\{3; -2\\}$",
    "hints": [
      "Tích bằng 0 khi ít nhất một trong hai thừa số bằng 0."
    ],
    "explanation_latex": "$x - 3 = 0 \\implies x = 3$ hoặc $x + 2 = 0 \\implies x = -2$."
  },
  {
    "id": "Q01_b16_05",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một công ty may mỗi tháng sản xuất được $500$ bộ quần áo. Tháng này do cải tiến kỹ thuật, công ty làm ra nhiều hơn $50$ bộ, mỗi bộ lãi $120\\,000$ đồng. Hỏi tổng tiền lãi tháng này của công ty là bao nhiêu?",
    "options": [
      "$66\\,000\\,000\$ đồng",
      "$60\\,000\\,000\$ đồng",
      "$6\\,000\\,000\$ đồng",
      "$65\\,000\\,000\$ đồng"
    ],
    "correct_answer": "$66\\,000\\,000\$ đồng",
    "hints": [
      "Tổng số bộ quần áo sản xuất tháng này là $500 + 50 = 550$."
    ],
    "explanation_latex": "Số bộ quần áo: $500 + 50 = 550$ bộ. Tiền lãi: $550 \\times 120\\,000 = 66\\,000\\,000$ đồng."
  },
  {
    "id": "Q01_b16_06",
    "chapter_id": "ch-01",
    "topic_id": "b16",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu cặp số nguyên $(x, y)$ thỏa mãn: $(x - 1)(y + 2) = 5$?",
    "options": [
      "$4$",
      "$2$",
      "$6$",
      "$8$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "$5$ chỉ có 4 ước nguyên là: $1, -1, 5, -5$."
    ],
    "explanation_latex": "Các cặp ước của 5 là $(1, 5), (5, 1), (-1, -5), (-5, -1)$. Mỗi cặp cho tương ứng 1 cặp nghiệm nguyên $(x, y)$. Vậy có đúng $4$ cặp."
  },
  {
    "id": "Q01_b17_01",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tập hợp tất cả các ước nguyên của số $6$ là:",
    "options": [
      "$\\{\\pm 1; \\pm 2; \\pm 3; \\pm 6\\}$",
      "$\\{1; 2; 3; 6\\}$",
      "$\\{\\pm 2; \\pm 3\\}$",
      "$\\{\\pm 1; \\pm 6\\}$"
    ],
    "correct_answer": "$\\{\\pm 1; \\pm 2; \\pm 3; \\pm 6\\}$",
    "hints": [
      "Ước của số nguyên bao gồm cả ước dương và ước âm."
    ],
    "explanation_latex": "Các ước nguyên của 6 là: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$."
  },
  {
    "id": "Q01_b17_02",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép chia $(-36) : (-9)$ là:",
    "options": [
      "$4$",
      "$-4$",
      "$3$",
      "$-3$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Chia hai số nguyên cùng dấu cho kết quả dương."
    ],
    "explanation_latex": "$(-36) : (-9) = +4$."
  },
  {
    "id": "Q01_b17_03",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Kết quả của phép chia $48 : (-12)$ là:",
    "options": [
      "$-4$",
      "$4$",
      "$-6$",
      "$6$"
    ],
    "correct_answer": "$-4$",
    "hints": [
      "Dương chia âm ra âm."
    ],
    "explanation_latex": "$48 : (-12) = -4$."
  },
  {
    "id": "Q01_b17_04",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm tất cả các số nguyên $x$ sao cho $x$ vừa là ước của $15$, vừa là bội của $-3$:",
    "options": [
      "$\\{-15; -3; 3; 15\\}$",
      "$\\{-3; 3\\}$",
      "$\\{-15; 15\\}$",
      "$\\{3; 15\\}$"
    ],
    "correct_answer": "$\\{-15; -3; 3; 15\\}$",
    "hints": [
      "Các ước của 15 là $\\pm 1, \\pm 3, \\pm 5, \\pm 15$.",
      "Lọc ra các số chia hết cho 3."
    ],
    "explanation_latex": "Trong các ước của 15, các số chia hết cho 3 là $\\{-15; -3; 3; 15\\}$."
  },
  {
    "id": "Q01_b17_05",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm tất cả các số nguyên $n$ để $(n + 3)$ là ước của $5$:",
    "options": [
      "$n \\in \\{-8; -4; -2; 2\\}$",
      "$n \\in \\{-4; -2\\}$",
      "$n \\in \\{-8; 2\\}$",
      "$n \\in \\{1; 5\\}$"
    ],
    "correct_answer": "$n \\in \\{-8; -4; -2; 2\\}$",
    "hints": [
      "Ước nguyên của 5 là $\\pm 1, \\pm 5$."
    ],
    "explanation_latex": "$n + 3 \\in \\{1; -1; 5; -5\\} \\implies n \\in \\{-2; -4; 2; -8\\}$."
  },
  {
    "id": "Q01_b17_06",
    "chapter_id": "ch-01",
    "topic_id": "b17",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số nguyên $n$ để phân số $\\frac{2n + 5}{n + 1}$ nhận giá trị là một số nguyên?",
    "options": [
      "$4$",
      "$2$",
      "$6$",
      "$8$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Tách: $\\frac{2n + 5}{n + 1} = \\frac{2(n + 1) + 3}{n + 1} = 2 + \\frac{3}{n + 1}$."
    ],
    "explanation_latex": "Để biểu thức nguyên thì $3 \\; \\vdots \\; (n + 1) \\implies n + 1 \\in \\{\\pm 1; \\pm 3\\}$. Có 4 giá trị của $n + 1$, tương ứng có đúng $4$ số nguyên $n$ thỏa mãn."
  },
  {
    "id": "Q04_b18_01",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tam giác đều $ABC$ có cạnh bằng $5\$ cm. Chu vi của tam giác đều đó là:",
    "options": [
      "$15\$ cm",
      "$10\$ cm",
      "$25\$ cm",
      "$20\$ cm"
    ],
    "correct_answer": "$15\$ cm",
    "hints": [
      "Tam giác đều có 3 cạnh bằng nhau."
    ],
    "explanation_latex": "Chu vi tam giác đều: $P = 3 \\times 5 = 15\$ cm."
  },
  {
    "id": "Q04_b18_02",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hình lục giác đều có bao nhiêu cạnh bằng nhau?",
    "options": [
      "$6$",
      "$5$",
      "$8$",
      "$4$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Lục giác đều có 6 đỉnh và 6 cạnh bằng nhau."
    ],
    "explanation_latex": "Hình lục giác đều có 6 cạnh bằng nhau."
  },
  {
    "id": "Q04_b18_03",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Trong hình vuông $ABCD$, hai đường chéo $AC$ và $BD$ có tính chất nào sau đây?",
    "options": [
      "Bằng nhau và vuông góc với nhau",
      "Song song với nhau",
      "Không bằng nhau",
      "Bằng nhau nhưng không vuông góc"
    ],
    "correct_answer": "Bằng nhau và vuông góc với nhau",
    "hints": [
      "Tính chất đường chéo của hình vuông."
    ],
    "explanation_latex": "Hình vuông có hai đường chéo bằng nhau, cắt nhau tại trung điểm của mỗi đường và vuông góc với nhau."
  },
  {
    "id": "Q04_b18_04",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một hình lục giác đều được ghép bởi bao nhiêu hình tam giác đều có cạnh bằng cạnh lục giác?",
    "options": [
      "$6$",
      "$4$",
      "$8$",
      "$5$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Nối tâm đối xứng của lục giác đều với 6 đỉnh."
    ],
    "explanation_latex": "Hình lục giác đều được ghép từ 6 hình tam giác đều bằng nhau có chung đỉnh tại tâm."
  },
  {
    "id": "Q04_b18_05",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Người ta dùng một sợi dây thép dài $48\$ cm uốn thành một hình vuông. Diện tích của hình vuông tạo thành là:",
    "options": [
      "$144\\text{ cm}^2$",
      "$96\\text{ cm}^2$",
      "$196\\text{ cm}^2$",
      "$120\\text{ cm}^2$"
    ],
    "correct_answer": "$144\\text{ cm}^2$",
    "hints": [
      "Chu vi hình vuông là chiều dài sợi dây thép.",
      "Tính cạnh hình vuông: $a = 48 : 4$."
    ],
    "explanation_latex": "Cạnh hình vuông là $a = 48 : 4 = 12\$ cm. Diện tích là $S = a^2 = 12^2 = 144\\text{ cm}^2$."
  },
  {
    "id": "Q04_b18_06",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho lục giác đều $ABCDEF$ có chu vi $36\$ cm. Độ dài đường chéo chính $AD$ là:",
    "options": [
      "$12\$ cm",
      "$6\$ cm",
      "$18\$ cm",
      "$9\$ cm"
    ],
    "correct_answer": "$12\$ cm",
    "hints": [
      "Cạnh của lục giác đều là $36 : 6 = 6\$ cm.",
      "Độ dài đường chéo chính đi qua tâm bằng 2 lần cạnh."
    ],
    "explanation_latex": "Cạnh lục giác đều là $a = 36 : 6 = 6\$ cm. Đường chéo chính gồm hai đoạn nối từ tâm tới đỉnh (mỗi đoạn bằng cạnh $a$), do đó $AD = 2a = 2 \\times 6 = 12\$ cm."
  },
  {
    "id": "Q04_b19_01",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong hình bình hành, khẳng định nào sau đây là **sai**?",
    "options": [
      "Hai đường chéo vuông góc với nhau",
      "Các cạnh đối song song",
      "Các cạnh đối bằng nhau",
      "Các góc đối bằng nhau"
    ],
    "correct_answer": "Hai đường chéo vuông góc với nhau",
    "hints": [
      "Hình bình hành nói chung hai đường chéo không vuông góc (chỉ hình thoi/hình vuông mới vuông góc)."
    ],
    "explanation_latex": "Đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường chứ không vuông góc với nhau."
  },
  {
    "id": "Q04_b19_02",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hình thang cân là hình thang có:",
    "options": [
      "Hai góc kề một đáy bằng nhau",
      "Bốn cạnh bằng nhau",
      "Hai đường chéo vuông góc",
      "Hai đáy vuông góc với nhau"
    ],
    "correct_answer": "Hai góc kề một đáy bằng nhau",
    "hints": [
      "Định nghĩa hình thang cân."
    ],
    "explanation_latex": "Hình thang cân có hai góc kề một đáy bằng nhau (và hai đường chéo bằng nhau)."
  },
  {
    "id": "Q04_b19_03",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một hình thoi có chu vi là $40\$ cm. Độ dài một cạnh của hình thoi đó là:",
    "options": [
      "$10\$ cm",
      "$20\$ cm",
      "$5\$ cm",
      "$15\$ cm"
    ],
    "correct_answer": "$10\$ cm",
    "hints": [
      "Hình thoi có 4 cạnh bằng nhau."
    ],
    "explanation_latex": "Độ dài cạnh hình thoi: $a = 40 : 4 = 10\$ cm."
  },
  {
    "id": "Q04_b19_04",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình nào sau đây có hai đường chéo bằng nhau nhưng các cạnh **không** nhất thiết phải bằng nhau?",
    "options": [
      "Hình chữ nhật",
      "Hình thoi",
      "Hình bình hành",
      "Tam giác đều"
    ],
    "correct_answer": "Hình chữ nhật",
    "hints": [
      "Hình chữ nhật luôn có 2 đường chéo bằng nhau."
    ],
    "explanation_latex": "Hình chữ nhật có hai đường chéo bằng nhau."
  },
  {
    "id": "Q04_b19_05",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một mảnh vườn hình chữ nhật có chu vi $64\$ m, chiều dài hơn chiều rộng $8\$ m. Chiều dài của mảnh vườn là:",
    "options": [
      "$20\$ m",
      "$12\$ m",
      "$24\$ m",
      "$16\$ m"
    ],
    "correct_answer": "$20\$ m",
    "hints": [
      "Nửa chu vi là $64 : 2 = 32\$ m.",
      "Bài toán tìm hai số khi biết tổng và hiệu."
    ],
    "explanation_latex": "Nửa chu vi là $32\$ m. Chiều dài: $(32 + 8) : 2 = 20\$ m."
  },
  {
    "id": "Q04_b19_06",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có $AB = 6\$ cm, $CD = 14\$ cm. Kẻ hai đường cao $AH$ và $BK$ xuống đáy $CD$. Độ dài đoạn thẳng $DH$ là:",
    "options": [
      "$4\$ cm",
      "$3\$ cm",
      "$5\$ cm",
      "$2\$ cm"
    ],
    "correct_answer": "$4\$ cm",
    "hints": [
      "Trong hình thang cân, hai đoạn thẳng ở hai bên đáy lớn bằng nhau: $DH = CK = \\frac{CD - AB}{2}$."
    ],
    "explanation_latex": "Vì $ABCD$ là hình thang cân nên $DH = CK = \\frac{CD - AB}{2} = \\frac{14 - 6}{2} = 4\$ cm."
  },
  {
    "id": "Q04_b20_01",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Công thức tính diện tích hình thoi có độ dài hai đường chéo $d_1, d_2$ là:",
    "options": [
      "$S = \\frac{1}{2} d_1 d_2$",
      "$S = d_1 d_2$",
      "$S = 2 d_1 d_2$",
      "$S = d_1 + d_2$"
    ],
    "correct_answer": "$S = \\frac{1}{2} d_1 d_2$",
    "hints": [
      "Diện tích hình thoi bằng nửa tích hai đường chéo."
    ],
    "explanation_latex": "Công thức đúng là $S = \\frac{1}{2} d_1 d_2$."
  },
  {
    "id": "Q04_b20_02",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Một hình chữ nhật có chiều dài $8\$ cm, chiều rộng $5\$ cm. Diện tích là:",
    "options": [
      "$40\\text{ cm}^2$",
      "$26\\text{ cm}^2$",
      "$13\\text{ cm}^2$",
      "$80\\text{ cm}^2$"
    ],
    "correct_answer": "$40\\text{ cm}^2$",
    "hints": [
      "$S = a \\cdot b$."
    ],
    "explanation_latex": "$S = 8 \\times 5 = 40\\text{ cm}^2$."
  },
  {
    "id": "Q04_b20_03",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một mảnh đất hình bình hành có đáy $15\$ m và chiều cao tương ứng $8\$ m. Diện tích mảnh đất là:",
    "options": [
      "$120\\text{ m}^2$",
      "$60\\text{ m}^2$",
      "$46\\text{ m}^2$",
      "$23\\text{ m}^2$"
    ],
    "correct_answer": "$120\\text{ m}^2$",
    "hints": [
      "Diện tích hình bình hành bằng đáy nhân chiều cao."
    ],
    "explanation_latex": "$S = a \\cdot h = 15 \\times 8 = 120\\text{ m}^2$."
  },
  {
    "id": "Q04_b20_04",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình thang có độ dài hai đáy lần lượt là $12\$ cm và $18\$ cm, chiều cao $10\$ cm. Diện tích hình thang đó là:",
    "options": [
      "$150\\text{ cm}^2$",
      "$300\\text{ cm}^2$",
      "$75\\text{ cm}^2$",
      "$120\\text{ cm}^2$"
    ],
    "correct_answer": "$150\\text{ cm}^2$",
    "hints": [
      "$S = \\frac{(a+b)h}{2}$."
    ],
    "explanation_latex": "$S = \\frac{(12 + 18) \\times 10}{2} = \\frac{30 \\times 10}{2} = 150\\text{ cm}^2$."
  },
  {
    "id": "Q04_b20_05",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một căn phòng hình chữ nhật có kích thước $6\\text{ m} \\times 4\$ m. Người ta lát nền bằng các viên gạch men hình vuông cạnh $40\$ cm. Cần ít nhất bao nhiêu viên gạch để lát kín nền phòng (bỏ qua mạch vữa)?",
    "options": [
      "$150\$ viên",
      "$120\$ viên",
      "$200\$ viên",
      "$160\$ viên"
    ],
    "correct_answer": "$150\$ viên",
    "hints": [
      "Đổi kích thước phòng sang cm: $600\\text{ cm} \\times 400\$ cm.",
      "Diện tích nền chia diện tích một viên gạch."
    ],
    "explanation_latex": "Diện tích phòng: $600 \\times 400 = 240\\,000\\text{ cm}^2$. Diện tích một viên gạch: $40 \\times 40 = 1\\,600\\text{ cm}^2$. Số viên gạch: $240\\,000 : 1\\,600 = 150$ viên."
  },
  {
    "id": "Q04_b20_06",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Một mảnh vườn hình chữ nhật dài $20\$ m, rộng $15\$ m. Người ta làm một lối đi xung quanh vườn rộng $1\$ m, phần đất còn lại bên trong để trồng hoa. Diện tích phần trồng hoa là:",
    "options": [
      "$234\\text{ m}^2$",
      "$266\\text{ m}^2$",
      "$300\\text{ m}^2$",
      "$247\\text{ m}^2$"
    ],
    "correct_answer": "$234\\text{ m}^2$",
    "hints": [
      "Lối đi rộng 1 m ở mỗi phía nên chiều dài bên trong giảm $2\$ m, chiều rộng giảm $2\$ m."
    ],
    "explanation_latex": "Chiều dài phần trồng hoa: $20 - 2 \\times 1 = 18\$ m. Chiều rộng phần trồng hoa: $15 - 2 \\times 1 = 13\$ m. Diện tích phần trồng hoa: $18 \\times 13 = 234\\text{ m}^2$."
  },
  {
    "id": "Q04_b18_07",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số góc bằng nhau trong một hình tam giác đều là bao nhiêu góc?",
    "options": [
      "$3\$ góc",
      "$4\$ góc",
      "$2\$ góc",
      "$6\$ góc"
    ],
    "correct_answer": "$3\$ góc",
    "hints": [
      "Tam giác đều có 3 góc bằng nhau, mỗi góc bằng $60^\\circ$."
    ],
    "explanation_latex": "Hình tam giác đều có 3 góc bằng nhau và đều bằng $60^\\circ$."
  },
  {
    "id": "Q04_b18_08",
    "chapter_id": "ch-04",
    "topic_id": "b18",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình lục giác đều $ABCDEF$ có bao nhiêu đường chéo chính?",
    "options": [
      "$3$",
      "$6$",
      "$9$",
      "$4$"
    ],
    "correct_answer": "$3$",
    "hints": [
      "Các đường chéo chính nối các đỉnh đối diện: $AD, BE, CF$."
    ],
    "explanation_latex": "Hình lục giác đều có 3 đường chéo chính đi qua tâm đối xứng là $AD, BE, CF$."
  },
  {
    "id": "Q04_b19_07",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hai đường chéo của hình thoi có tính chất nào sau đây?",
    "options": [
      "Vuông góc với nhau tại trung điểm của mỗi đường",
      "Bằng nhau và song song với nhau",
      "Song song với nhau",
      "Không vuông góc với nhau"
    ],
    "correct_answer": "Vuông góc với nhau tại trung điểm của mỗi đường",
    "hints": [
      "Tính chất đường chéo hình thoi."
    ],
    "explanation_latex": "Hai đường chéo của hình thoi vuông góc với nhau tại trung điểm của mỗi đường."
  },
  {
    "id": "Q04_b19_08",
    "chapter_id": "ch-04",
    "topic_id": "b19",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một mảnh đất hình thang cân có đáy nhỏ $10\$ m, đáy lớn gấp đôi đáy nhỏ, chiều cao $8\$ m. Diện tích mảnh đất đó là:",
    "options": [
      "$120\\text{ m}^2$",
      "$240\\text{ m}^2$",
      "$80\\text{ m}^2$",
      "$160\\text{ m}^2$"
    ],
    "correct_answer": "$120\\text{ m}^2$",
    "hints": [
      "Đáy lớn là $10 \\times 2 = 20\$ m.",
      "Áp dụng công thức $S = \\frac{(a+b)h}{2}$."
    ],
    "explanation_latex": "Đáy lớn: $20\$ m. Diện tích: $S = \\frac{(10 + 20) \\times 8}{2} = 120\\text{ m}^2$."
  },
  {
    "id": "Q04_b20_07",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một mảnh sân hình chữ nhật có chu vi $30\$ m, chiều dài $9\$ m. Người ta lát sân bằng các viên gạch men vuông cạnh $30\$ cm. Hỏi cần bao nhiêu viên gạch (bỏ qua mạch vữa)?",
    "options": [
      "$600\$ viên",
      "$500\$ viên",
      "$450\$ viên",
      "$900\$ viên"
    ],
    "correct_answer": "$600\$ viên",
    "hints": [
      "Nửa chu vi là $15\$ m, suy ra chiều rộng là $15 - 9 = 6\$ m.",
      "Diện tích sân chia diện tích một viên gạch."
    ],
    "explanation_latex": "Chiều rộng sân là $15 - 9 = 6\$ m. Diện tích sân là $9 \\times 6 = 54\\text{ m}^2 = 540\\,000\\text{ cm}^2$. Diện tích 1 viên gạch là $30 \\times 30 = 900\\text{ cm}^2$. Số viên gạch: $540\\,000 : 900 = 600$ viên."
  },
  {
    "id": "Q04_b20_08",
    "chapter_id": "ch-04",
    "topic_id": "b20",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Một thửa ruộng hình thoi có độ dài hai đường chéo là $40\$ m và $30\$ m. Cứ $100\\text{ m}^2$ ruộng thì thu hoạch được $60\$ kg thóc. Hỏi cả thửa ruộng thu hoạch được bao nhiêu tạ thóc?",
    "options": [
      "$3{,}6\$ tạ",
      "$36\$ tạ",
      "$6\$ tạ",
      "$2{,}4\$ tạ"
    ],
    "correct_answer": "$3{,}6\$ tạ",
    "hints": [
      "Diện tích thửa ruộng: $S = \\frac{40 \\times 30}{2} = 600\\text{ m}^2$.",
      "Đổi $1\\text{ tạ} = 100\$ kg."
    ],
    "explanation_latex": "Diện tích thửa ruộng: $S = \\frac{1}{2} \\times 40 \\times 30 = 600\\text{ m}^2$. Số thóc thu được: $\\frac{600}{100} \\times 60 = 360\\text{ kg} = 3{,}6$ tạ."
  },
  {
    "id": "Q05_b21_01",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hình nào sau đây có đúng $1$ trục đối xứng?",
    "options": [
      "Tam giác cân (không đều)",
      "Hình tròn",
      "Hình vuông",
      "Hình chữ nhật"
    ],
    "correct_answer": "Tam giác cân (không đều)",
    "hints": [
      "Tam giác cân có trục đối xứng là đường cao hạ từ đỉnh đối diện đáy."
    ],
    "explanation_latex": "Tam giác cân có đúng 1 trục đối xứng."
  },
  {
    "id": "Q05_b21_02",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Chữ cái in hoa nào sau đây có trục đối xứng nằm dọc?",
    "options": [
      "A",
      "B",
      "E",
      "S"
    ],
    "correct_answer": "A",
    "hints": [
      "Trục đối xứng chia chữ cái thành 2 nửa đối xứng trái - phải."
    ],
    "explanation_latex": "Chữ A có một trục đối xứng thẳng đứng đi qua đỉnh."
  },
  {
    "id": "Q05_b21_03",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình vuông có tất cả bao nhiêu trục đối xứng?",
    "options": [
      "$4$",
      "$2$",
      "$6$",
      "Vô số"
    ],
    "correct_answer": "$4$",
    "hints": [
      "2 đường thẳng nối trung điểm các cạnh đối diện và 2 đường chéo."
    ],
    "explanation_latex": "Hình vuông có 4 trục đối xứng: 2 trục đi qua trung điểm các cặp cạnh đối diện và 2 trục chứa 2 đường chéo."
  },
  {
    "id": "Q05_b21_04",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?",
    "options": [
      "$2$",
      "$4$",
      "$1$",
      "$0$"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Trục đi qua trung điểm các cạnh đối diện. Hai đường chéo không phải trục đối xứng."
    ],
    "explanation_latex": "Hình chữ nhật có đúng 2 trục đối xứng đi qua trung điểm các cặp cạnh đối."
  },
  {
    "id": "Q05_b21_05",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Biển báo giao thông hình tròn có viền đỏ, nền trắng, bên trong có dấu trừ màu trắng trên nền đỏ tròn (biển cấm đi ngược chiều) có bao nhiêu trục đối xứng?",
    "options": [
      "$2$",
      "$1$",
      "$4$",
      "Vô số"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Quan sát hình dáng của vạch ngang màu trắng."
    ],
    "explanation_latex": "Biển báo có vạch ngang hình chữ nhật ở giữa, do đó chỉ có 2 trục đối xứng (1 trục nằm ngang và 1 trục thẳng đứng)."
  },
  {
    "id": "Q05_b21_06",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Hình lục giác đều có tất cả bao nhiêu trục đối xứng?",
    "options": [
      "$6$",
      "$3$",
      "$12$",
      "$8$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "3 trục nối các cặp đỉnh đối diện và 3 trục nối trung điểm các cặp cạnh đối diện."
    ],
    "explanation_latex": "Hình lục giác đều có 6 trục đối xứng: 3 đường thẳng đi qua các cặp đỉnh đối diện và 3 đường trung trực của các cặp cạnh đối diện."
  },
  {
    "id": "Q05_b22_01",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tâm đối xứng của hình tròn là:",
    "options": [
      "Tâm của hình tròn",
      "Điểm bất kỳ trên đường tròn",
      "Điểm bất kỳ ngoài hình tròn",
      "Không có tâm đối xứng"
    ],
    "correct_answer": "Tâm của hình tròn",
    "hints": [
      "Mọi điểm qua tâm đều biến thành điểm đối xứng trên đường tròn."
    ],
    "explanation_latex": "Tâm đối xứng của hình tròn chính là tâm của đường tròn đó."
  },
  {
    "id": "Q05_b22_02",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Chữ cái in hoa nào sau đây có tâm đối xứng?",
    "options": [
      "N",
      "A",
      "M",
      "E"
    ],
    "correct_answer": "N",
    "hints": [
      "Quay 180 độ chữ N vẫn giữ nguyên hình dạng."
    ],
    "explanation_latex": "Chữ N có tâm đối xứng (tâm là trung điểm của đoạn nối chéo)."
  },
  {
    "id": "Q05_b22_03",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Hình nào sau đây vừa có trục đối xứng vừa có tâm đối xứng?",
    "options": [
      "Hình chữ nhật",
      "Hình thang cân",
      "Tam giác đều",
      "Hình bình hành không là hình chữ nhật"
    ],
    "correct_answer": "Hình chữ nhật",
    "hints": [
      "Hình thang cân chỉ có trục, không có tâm. Hình bình hành chỉ có tâm, không có trục."
    ],
    "explanation_latex": "Hình chữ nhật vừa có 2 trục đối xứng vừa có tâm đối xứng là giao điểm hai đường chéo."
  },
  {
    "id": "Q05_b22_04",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tâm đối xứng của hình bình hành là:",
    "options": [
      "Giao điểm của hai đường chéo",
      "Trung điểm của một cạnh",
      "Một đỉnh của hình bình hành",
      "Không có tâm đối xứng"
    ],
    "correct_answer": "Giao điểm của hai đường chéo",
    "hints": [
      "Hai đường chéo của hình bình hành cắt nhau tại trung điểm mỗi đường."
    ],
    "explanation_latex": "Giao điểm hai đường chéo chính là tâm đối xứng của hình bình hành."
  },
  {
    "id": "Q05_b22_05",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Trong các chữ số từ $0$ đến $9$, có bao nhiêu chữ số có tâm đối xứng (theo dạng nét viết chuẩn)?",
    "options": [
      "$2$ (số 0 và số 8)",
      "$1$ (số 0)",
      "$3$ (số 0, 6, 9)",
      "$4$ (số 0, 1, 2, 8)"
    ],
    "correct_answer": "$2$ (số 0 và số 8)",
    "hints": [
      "Quay 180 độ xung quanh tâm."
    ],
    "explanation_latex": "Số 0 và số 8 là hai chữ số có tâm đối xứng khi quay 180 độ quanh tâm."
  },
  {
    "id": "Q05_b22_06",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Trong các hình sau: (1) Tam giác đều; (2) Hình vuông; (3) Hình lục giác đều; (4) Ngũ giác đều; (5) Hình thoi. Có bao nhiêu hình có tâm đối xứng?",
    "options": [
      "$3$ hình",
      "$2$ hình",
      "$4$ hình",
      "$5$ hình"
    ],
    "correct_answer": "$3$ hình",
    "hints": [
      "Các đa giác đều có số cạnh chẵn thì có tâm đối xứng. Số cạnh lẻ không có tâm đối xứng."
    ],
    "explanation_latex": "Hình vuông (4 cạnh), Hình lục giác đều (6 cạnh) và Hình thoi có tâm đối xứng. Tam giác đều (3 cạnh) và ngũ giác đều (5 cạnh) không có tâm đối xứng. Vậy có đúng 3 hình."
  },
  {
    "id": "Q05_b21_07",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hình nào sau đây **không** có trục đối xứng?",
    "options": [
      "Hình bình hành (không là hình chữ nhật hay hình thoi)",
      "Hình tròn",
      "Hình thang cân",
      "Hình thoi"
    ],
    "correct_answer": "Hình bình hành (không là hình chữ nhật hay hình thoi)",
    "hints": [
      "Hình bình hành tổng quát chỉ có tâm đối xứng, không có trục đối xứng."
    ],
    "explanation_latex": "Hình bình hành (tổng quát) không có trục đối xứng."
  },
  {
    "id": "Q05_b21_08",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Chữ cái in hoa nào sau đây có cả trục đối xứng nằm ngang và trục đối xứng thẳng đứng?",
    "options": [
      "H",
      "A",
      "M",
      "E"
    ],
    "correct_answer": "H",
    "hints": [
      "Chữ H có 2 trục đối xứng: 1 ngang và 1 dọc."
    ],
    "explanation_latex": "Chữ H có 2 trục đối xứng cắt nhau tại tâm."
  },
  {
    "id": "Q05_b21_09",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Biển báo giao thông hình tam giác đều cảnh báo nguy hiểm có bao nhiêu trục đối xứng?",
    "options": [
      "$3$",
      "$1$",
      "$2$",
      "$0$"
    ],
    "correct_answer": "$3$",
    "hints": [
      "Tam giác đều có 3 trục đối xứng đi qua 3 đỉnh và trung điểm cạnh đối diện."
    ],
    "explanation_latex": "Biển báo hình tam giác đều có 3 trục đối xứng."
  },
  {
    "id": "Q05_b21_10",
    "chapter_id": "ch-05",
    "topic_id": "b21",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho hình vuông $ABCD$. Có bao nhiêu trục đối xứng của hình vuông đi qua các đỉnh của nó?",
    "options": [
      "$2$",
      "$4$",
      "$1$",
      "$0$"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Hình vuông có 4 trục đối xứng, trong đó 2 trục chứa 2 đường chéo đi qua các đỉnh."
    ],
    "explanation_latex": "Chỉ có 2 trục đối xứng chứa hai đường chéo $AC$ và $BD$ là đi qua các đỉnh."
  },
  {
    "id": "Q05_b22_07",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong các chữ cái sau, chữ cái nào **không** có tâm đối xứng?",
    "options": [
      "A",
      "N",
      "S",
      "Z"
    ],
    "correct_answer": "A",
    "hints": [
      "Chữ A chỉ có trục đối xứng, không có tâm đối xứng."
    ],
    "explanation_latex": "Chữ A không có tâm đối xứng."
  },
  {
    "id": "Q05_b22_08",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tâm đối xứng của hình vuông là điểm nào?",
    "options": [
      "Giao điểm của hai đường chéo",
      "Trung điểm của một cạnh",
      "Một đỉnh của hình vuông",
      "Không có tâm đối xứng"
    ],
    "correct_answer": "Giao điểm của hai đường chéo",
    "hints": [
      "Giao điểm hai đường chéo của hình vuông chính là tâm đối xứng."
    ],
    "explanation_latex": "Tâm đối xứng của hình vuông là giao điểm hai đường chéo."
  },
  {
    "id": "Q05_b22_09",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho đoạn thẳng $AB = 8\$ cm. Điểm $O$ là tâm đối xứng của đoạn thẳng $AB$. Khoảng cách từ điểm $O$ đến điểm $A$ bằng:",
    "options": [
      "$4\$ cm",
      "$8\$ cm",
      "$2\$ cm",
      "$16\$ cm"
    ],
    "correct_answer": "$4\$ cm",
    "hints": [
      "Tâm đối xứng của đoạn thẳng chính là trung điểm của đoạn thẳng đó."
    ],
    "explanation_latex": "Tâm đối xứng $O$ là trung điểm của $AB$, do đó $OA = AB : 2 = 8 : 2 = 4\$ cm."
  },
  {
    "id": "Q05_b22_10",
    "chapter_id": "ch-05",
    "topic_id": "b22",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Trong các hình sau: (1) Tam giác đều; (2) Hình vuông; (3) Hình lục giác đều; (4) Hình thoi; (5) Hình thang cân. Có bao nhiêu hình vừa có trục đối xứng vừa có tâm đối xứng?",
    "options": [
      "$3\$ hình",
      "$2\$ hình",
      "$4\$ hình",
      "$5\$ hình"
    ],
    "correct_answer": "$3\$ hình",
    "hints": [
      "Kiểm tra từng hình: hình vuông, lục giác đều, hình thoi thỏa mãn. Tam giác đều và hình thang cân không có tâm đối xứng."
    ],
    "explanation_latex": "Có 3 hình vừa có trục đối xứng vừa có tâm đối xứng là: Hình vuông, Hình lục giác đều và Hình thoi."
  },
  {
    "id": "Q06_b23_01",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong các cách viết sau, cách viết nào cho ta một phân số?",
    "options": [
      "$\\frac{-3}{5}$",
      "$\\frac{1{,}5}{2}$",
      "$\\frac{4}{0}$",
      "$\\frac{3}{\\sqrt{2}}$"
    ],
    "correct_answer": "$\\frac{-3}{5}$",
    "hints": [
      "Phân số có dạng $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}$ và $b \\ne 0$."
    ],
    "explanation_latex": "$\\frac{-3}{5}$ là phân số vì tử và mẫu đều là số nguyên và mẫu khác 0."
  },
  {
    "id": "Q06_b23_02",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Cặp phân số nào sau đây bằng nhau?",
    "options": [
      "$\\frac{-2}{3}$ và $\\frac{4}{-6}$",
      "$\\frac{1}{2}$ và $\\frac{1}{3}$",
      "$\\frac{-3}{4}$ và $\\frac{3}{4}$",
      "$\\frac{2}{5}$ và $\\frac{5}{2}$"
    ],
    "correct_answer": "$\\frac{-2}{3}$ và $\\frac{4}{-6}$",
    "hints": [
      "Kiểm tra tích chéo: $(-2) \\cdot (-6) = 3 \\cdot 4 = 12$."
    ],
    "explanation_latex": "Vì $(-2) \\cdot (-6) = 12 = 3 \\cdot 4$ nên $\\frac{-2}{3} = \\frac{4}{-6}$."
  },
  {
    "id": "Q06_b23_03",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm số nguyên $x$, biết: $\\frac{x}{15} = \\frac{-2}{5}$.",
    "options": [
      "$x = -6$",
      "$x = 6$",
      "$x = -10$",
      "$x = 10$"
    ],
    "correct_answer": "$x = -6$",
    "hints": [
      "Nhân chéo: $5x = 15 \\cdot (-2) = -30$."
    ],
    "explanation_latex": "$x = \\frac{15 \\cdot (-2)}{5} = -6$."
  },
  {
    "id": "Q06_b23_04",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Rút gọn phân số $\\frac{-36}{48}$ về dạng tối giản có mẫu dương:",
    "options": [
      "$\\frac{-3}{4}$",
      "$\\frac{3}{-4}$",
      "$\\frac{-6}{8}$",
      "$\\frac{-9}{12}$"
    ],
    "correct_answer": "$\\frac{-3}{4}$",
    "hints": [
      "Chia cả tử và mẫu cho ƯCLN(36, 48) = 12."
    ],
    "explanation_latex": "$\\frac{-36 : 12}{48 : 12} = \\frac{-3}{4}$."
  },
  {
    "id": "Q06_b23_05",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số nguyên $x$ sao cho phân số $\\frac{5}{x - 2}$ nhận giá trị nguyên?",
    "options": [
      "$4$",
      "$2$",
      "$6$",
      "$1$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "$x - 2$ phải là ước của 5: $\\pm 1, \\pm 5$."
    ],
    "explanation_latex": "$x - 2 \\in \\{1; -1; 5; -5\\} \\implies x \\in \\{3; 1; 7; -3\\}$. Có 4 giá trị nguyên."
  },
  {
    "id": "Q06_b23_06",
    "chapter_id": "ch-06",
    "topic_id": "b23",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số nguyên $n$ để phân số $A = \\frac{n + 1}{n - 2}$ nhận giá trị là một số nguyên:",
    "options": [
      "$n \\in \\{3; 1; 5; -1\\}$",
      "$n \\in \\{1; -1\\}$",
      "$n \\in \\{3; 5\\}$",
      "$n \\in \\{0; 2\\}$"
    ],
    "correct_answer": "$n \\in \\{3; 1; 5; -1\\}$",
    "hints": [
      "Tách: $\\frac{n + 1}{n - 2} = \\frac{(n - 2) + 3}{n - 2} = 1 + \\frac{3}{n - 2}$."
    ],
    "explanation_latex": "Để $A$ nguyên thì $3 \\; \\vdots \\; (n - 2) \\implies n - 2 \\in \\{\\pm 1; \\pm 3\\} \\implies n \\in \\{3; 1; 5; -1\\}$."
  },
  {
    "id": "Q06_b24_01",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hỗn số $3\\frac{2}{5}$ được viết dưới dạng phân số là:",
    "options": [
      "$\\frac{17}{5}$",
      "$\\frac{11}{5}$",
      "$\\frac{6}{5}$",
      "$\\frac{15}{5}$"
    ],
    "correct_answer": "$\\frac{17}{5}$",
    "hints": [
      "Lấy $3 \\times 5 + 2$ làm tử số, mẫu giữ nguyên."
    ],
    "explanation_latex": "$3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$."
  },
  {
    "id": "Q06_b24_02",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong hai phân số có cùng mẫu số dương, phân số nào lớn hơn?",
    "options": [
      "Phân số có tử số lớn hơn",
      "Phân số có tử số nhỏ hơn",
      "Hai phân số bằng nhau",
      "Không so sánh được"
    ],
    "correct_answer": "Phân số có tử số lớn hơn",
    "hints": [
      "Quy tắc so sánh hai phân số cùng mẫu dương."
    ],
    "explanation_latex": "Phân số nào có tử lớn hơn thì lớn hơn."
  },
  {
    "id": "Q06_b24_03",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "So sánh hai phân số: $\\frac{-3}{7}$ và $\\frac{-5}{7}$:",
    "options": [
      "$\\frac{-3}{7} > \\frac{-5}{7}$",
      "$\\frac{-3}{7} < \\frac{-5}{7}$",
      "$\\frac{-3}{7} = \\frac{-5}{7}$",
      "Không so sánh được"
    ],
    "correct_answer": "$\\frac{-3}{7} > \\frac{-5}{7}$",
    "hints": [
      "Vì $-3 > -5$ nên $\\frac{-3}{7} > \\frac{-5}{7}$."
    ],
    "explanation_latex": "Cùng mẫu dương 7, so sánh hai tử: $-3 > -5$, do đó $\\frac{-3}{7} > \\frac{-5}{7}$."
  },
  {
    "id": "Q06_b24_04",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Sắp xếp các phân số sau theo thứ tự tăng dần: $\\frac{1}{2}; \\frac{-2}{3}; 0; \\frac{3}{4}$:",
    "options": [
      "$\\frac{-2}{3} < 0 < \\frac{1}{2} < \\frac{3}{4}$",
      "$0 < \\frac{-2}{3} < \\frac{1}{2} < \\frac{3}{4}$",
      "$\\frac{-2}{3} < \\frac{1}{2} < 0 < \\frac{3}{4}$",
      "$\\frac{3}{4} < \\frac{1}{2} < 0 < \\frac{-2}{3}$"
    ],
    "correct_answer": "$\\frac{-2}{3} < 0 < \\frac{1}{2} < \\frac{3}{4}$",
    "hints": [
      "Số âm < 0 < số dương.",
      "So sánh $\\frac{1}{2} = \\frac{2}{4} < \\frac{3}{4}$."
    ],
    "explanation_latex": "Thứ tự tăng dần đúng là: $\\frac{-2}{3} < 0 < \\frac{1}{2} < \\frac{3}{4}$."
  },
  {
    "id": "Q06_b24_05",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "So sánh hai phân số: $A = \\frac{2023}{2024}$ và $B = \\frac{2024}{2025}$:",
    "options": [
      "$A < B$",
      "$A > B$",
      "$A = B$",
      "Không so sánh được"
    ],
    "correct_answer": "$A < B$",
    "hints": [
      "Sử dụng phần bù tới 1: $1 - A = \\frac{1}{2024}$ và $1 - B = \\frac{1}{2025}$."
    ],
    "explanation_latex": "Ta có $1 - A = \\frac{1}{2024}$ và $1 - B = \\frac{1}{2025}$. Vì $\\frac{1}{2024} > \\frac{1}{2025}$ nên phần bù của $A$ lớn hơn, suy ra $A < B$."
  },
  {
    "id": "Q06_b24_06",
    "chapter_id": "ch-06",
    "topic_id": "b24",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu phân số có mẫu bằng $12$, lớn hơn $\\frac{-5}{6}$ và nhỏ hơn $\\frac{-1}{4}$?",
    "options": [
      "$6$",
      "$5$",
      "$7$",
      "$8$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Quy đồng mẫu về 12: $\\frac{-10}{12} < \\frac{x}{12} < \\frac{-3}{12}$."
    ],
    "explanation_latex": "Ta có $\\frac{-10}{12} < \\frac{x}{12} < \\frac{-3}{12} \\implies -10 < x < -3$. Các số nguyên $x$ thỏa mãn: $\\{-9; -8; -7; -6; -5; -4\\}$. Có đúng $6$ phân số."
  },
  {
    "id": "Q06_b25_01",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $\\frac{-3}{8} + \\frac{5}{8}$ là:",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{2}{8}$",
      "$\\frac{8}{8}$",
      "$-1$"
    ],
    "correct_answer": "$\\frac{1}{4}$",
    "hints": [
      "Cùng mẫu, cộng tử: $\\frac{-3 + 5}{8} = \\frac{2}{8} = \\frac{1}{4}$."
    ],
    "explanation_latex": "$\\frac{-3 + 5}{8} = \\frac{2}{8} = \\frac{1}{4}$."
  },
  {
    "id": "Q06_b25_02",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số đối của phân số $\\frac{-4}{9}$ là:",
    "options": [
      "$\\frac{4}{9}$",
      "$\\frac{-9}{4}$",
      "$\\frac{9}{4}$",
      "$\\frac{-4}{-9}$"
    ],
    "correct_answer": "$\\frac{4}{9}$",
    "hints": [
      "Số đối của $-\\frac{a}{b}$ là $\\frac{a}{b}$."
    ],
    "explanation_latex": "Số đối của $\\frac{-4}{9}$ là $\\frac{4}{9}$."
  },
  {
    "id": "Q06_b25_03",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $\\frac{2}{3} - \\frac{1}{4}$ là:",
    "options": [
      "$\\frac{5}{12}$",
      "$\\frac{1}{12}$",
      "$\\frac{1}{1}$",
      "$\\frac{5}{7}$"
    ],
    "correct_answer": "$\\frac{5}{12}$",
    "hints": [
      "Quy đồng mẫu chung 12: $\\frac{8}{12} - \\frac{3}{12}$."
    ],
    "explanation_latex": "$\\frac{8 - 3}{12} = \\frac{5}{12}$."
  },
  {
    "id": "Q06_b25_04",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm $x$, biết: $x + \\frac{3}{5} = \\frac{1}{10}$.",
    "options": [
      "$x = \\frac{-1}{2}$",
      "$x = \\frac{7}{10}$",
      "$x = \\frac{-7}{10}$",
      "$x = \\frac{1}{2}$"
    ],
    "correct_answer": "$x = \\frac{-1}{2}$",
    "hints": [
      "$x = \\frac{1}{10} - \\frac{3}{5} = \\frac{1 - 6}{10} = \\frac{-5}{10}$."
    ],
    "explanation_latex": "$x = \\frac{1}{10} - \\frac{6}{10} = \\frac{-5}{10} = \\frac{-1}{2}$."
  },
  {
    "id": "Q06_b25_05",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tính hợp lý: $A = \\frac{5}{13} + \\frac{-4}{9} + \\frac{8}{13} + \\frac{-5}{9}$:",
    "options": [
      "$0$",
      "$1$",
      "$-1$",
      "$2$"
    ],
    "correct_answer": "$0$",
    "hints": [
      "Nhóm các phân số có cùng mẫu: $(\\frac{5}{13} + \\frac{8}{13}) + (\\frac{-4}{9} + \\frac{-5}{9})$."
    ],
    "explanation_latex": "$A = \\frac{5 + 8}{13} + \\frac{-4 + (-5)}{9} = 1 + (-1) = 0$."
  },
  {
    "id": "Q06_b25_06",
    "chapter_id": "ch-06",
    "topic_id": "b25",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tính tổng: $S = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{99 \\cdot 100}$:",
    "options": [
      "$\\frac{99}{100}$",
      "$\\frac{1}{100}$",
      "$1$",
      "$\\frac{98}{100}$"
    ],
    "correct_answer": "$\\frac{99}{100}$",
    "hints": [
      "Dùng công thức: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$."
    ],
    "explanation_latex": "$S = (1 - \\frac{1}{2}) + (\\frac{1}{2} - \\frac{1}{3}) + \\dots + (\\frac{1}{99} - \\frac{1}{100}) = 1 - \\frac{1}{100} = \\frac{99}{100}$."
  },
  {
    "id": "Q06_b26_01",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép nhân $\\frac{-2}{5} \\cdot \\frac{3}{7}$ là:",
    "options": [
      "$\\frac{-6}{35}$",
      "$\\frac{6}{35}$",
      "$\\frac{-14}{15}$",
      "$\\frac{-5}{12}$"
    ],
    "correct_answer": "$\\frac{-6}{35}$",
    "hints": [
      "Nhân tử với tử, mẫu với mẫu."
    ],
    "explanation_latex": "$\\frac{-2 \\cdot 3}{5 \\cdot 7} = \\frac{-6}{35}$."
  },
  {
    "id": "Q06_b26_02",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Phân số nghịch đảo của phân số $\\frac{-4}{7}$ là:",
    "options": [
      "$\\frac{-7}{4}$",
      "$\\frac{4}{7}$",
      "$\\frac{7}{4}$",
      "$\\frac{-4}{-7}$"
    ],
    "correct_answer": "$\\frac{-7}{4}$",
    "hints": [
      "Đảo ngược vị trí tử và mẫu."
    ],
    "explanation_latex": "Phân số nghịch đảo của $\\frac{-4}{7}$ là $\\frac{7}{-4} = \\frac{-7}{4}$."
  },
  {
    "id": "Q06_b26_03",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $\\frac{-5}{9} : \\frac{10}{3}$ là:",
    "options": [
      "$\\frac{-1}{6}$",
      "$\\frac{-50}{27}$",
      "$\\frac{1}{6}$",
      "$\\frac{-6}{1}$"
    ],
    "correct_answer": "$\\frac{-1}{6}$",
    "hints": [
      "Chia là nhân với phân số nghịch đảo: $\\frac{-5}{9} \\cdot \\frac{3}{10}$."
    ],
    "explanation_latex": "$\\frac{-5}{9} \\cdot \\frac{3}{10} = \\frac{-1 \\cdot 1}{3 \\cdot 2} = \\frac{-1}{6}$."
  },
  {
    "id": "Q06_b26_04",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm $x$, biết: $x \\cdot \\frac{3}{4} = \\frac{-9}{16}$.",
    "options": [
      "$x = \\frac{-3}{4}$",
      "$x = \\frac{3}{4}$",
      "$x = \\frac{-27}{64}$",
      "$x = \\frac{-4}{3}$"
    ],
    "correct_answer": "$x = \\frac{-3}{4}$",
    "hints": [
      "$x = \\frac{-9}{16} : \\frac{3}{4} = \\frac{-9}{16} \\cdot \\frac{4}{3}$."
    ],
    "explanation_latex": "$x = \\frac{-9 \\cdot 4}{16 \\cdot 3} = \\frac{-3}{4}$."
  },
  {
    "id": "Q06_b26_05",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tính hợp lý: $M = \\frac{4}{7} \\cdot \\frac{3}{5} + \\frac{4}{7} \\cdot \\frac{2}{5} - \\frac{4}{7}$:",
    "options": [
      "$0$",
      "$\\frac{4}{7}$",
      "$1$",
      "$\\frac{8}{7}$"
    ],
    "correct_answer": "$0$",
    "hints": [
      "Đặt $\\frac{4}{7}$ làm nhân tử chung: $\\frac{4}{7} \\cdot (\\frac{3}{5} + \\frac{2}{5} - 1)$."
    ],
    "explanation_latex": "$\\frac{4}{7} \\cdot (\\frac{3}{5} + \\frac{2}{5} - 1) = \\frac{4}{7} \\cdot (1 - 1) = 0$."
  },
  {
    "id": "Q06_b26_06",
    "chapter_id": "ch-06",
    "topic_id": "b26",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tính tích: $P = (1 - \\frac{1}{2})(1 - \\frac{1}{3})(1 - \\frac{1}{4}) \\dots (1 - \\frac{1}{50})$:",
    "options": [
      "$\\frac{1}{50}$",
      "$\\frac{2}{50}$",
      "$\\frac{49}{50}$",
      "$\\frac{1}{25}$"
    ],
    "correct_answer": "$\\frac{1}{50}$",
    "hints": [
      "Viết thành: $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\dots \\frac{49}{50}$."
    ],
    "explanation_latex": "Triệt tiêu liên tiếp tử số với mẫu số liền trước, còn lại: $\\frac{1}{50}$."
  },
  {
    "id": "Q06_b27_01",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Giá trị của $\\frac{2}{3}$ của số $60$ là:",
    "options": [
      "$40$",
      "$90$",
      "$30$",
      "$20$"
    ],
    "correct_answer": "$40$",
    "hints": [
      "Muốn tìm $\\frac{m}{n}$ của số $a$, ta lấy $a \\cdot \\frac{m}{n}$."
    ],
    "explanation_latex": "$60 \\cdot \\frac{2}{3} = 40$."
  },
  {
    "id": "Q06_b27_02",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tìm một số biết $\\frac{3}{5}$ của số đó bằng $30$:",
    "options": [
      "$50$",
      "$18$",
      "$45$",
      "$90$"
    ],
    "correct_answer": "$50$",
    "hints": [
      "Muốn tìm một số biết $\\frac{m}{n}$ của nó bằng $b$, ta lấy $b : \\frac{m}{n}$."
    ],
    "explanation_latex": "$30 : \\frac{3}{5} = 30 \\cdot \\frac{5}{3} = 50$."
  },
  {
    "id": "Q06_b27_03",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Lớp 6A có $40$ học sinh, trong đó số học sinh giỏi chiếm $\\frac{2}{5}$ số học sinh cả lớp. Số học sinh giỏi của lớp 6A là:",
    "options": [
      "$16\$ học sinh",
      "$20\$ học sinh",
      "$24\$ học sinh",
      "$15\$ học sinh"
    ],
    "correct_answer": "$16\$ học sinh",
    "hints": [
      "Tính $40 \\times \\frac{2}{5}$."
    ],
    "explanation_latex": "Số học sinh giỏi: $40 \\times \\frac{2}{5} = 16$ học sinh."
  },
  {
    "id": "Q06_b27_04",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một người đi được $45\$ km, tương ứng với $\\frac{3}{4}$ quãng đường dự định. Toàn bộ quãng đường dài bao nhiêu km?",
    "options": [
      "$60\$ km",
      "$50\$ km",
      "$55\$ km",
      "$65\$ km"
    ],
    "correct_answer": "$60\$ km",
    "hints": [
      "Lấy $45 : \\frac{3}{4}$."
    ],
    "explanation_latex": "Quãng đường dài: $45 : \\frac{3}{4} = 45 \\times \\frac{4}{3} = 60\$ km."
  },
  {
    "id": "Q06_b27_05",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một rổ cam có $60$ quả. Buổi sáng mẹ bán được $\\frac{1}{3}$ số cam. Buổi chiều mẹ bán được $\\frac{3}{5}$ số cam còn lại. Hỏi trong rổ còn lại bao nhiêu quả cam?",
    "options": [
      "$16\$ quả",
      "$20\$ quả",
      "$24\$ quả",
      "$12\$ quả"
    ],
    "correct_answer": "$16\$ quả",
    "hints": [
      "Buổi sáng bán: $60 \\times \\frac{1}{3} = 20$ quả. Số cam còn lại là 40 quả.",
      "Buổi chiều bán $\\frac{3}{5}$ của 40 quả."
    ],
    "explanation_latex": "Buổi sáng bán: $60 \\times \\frac{1}{3} = 20$ quả. Còn lại: $60 - 20 = 40$ quả. Buổi chiều bán: $40 \\times \\frac{3}{5} = 24$ quả. Số cam còn lại: $40 - 24 = 16$ quả."
  },
  {
    "id": "Q06_b27_06",
    "chapter_id": "ch-06",
    "topic_id": "b27",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Một người đi xe máy trong ba ngày đi hết một quãng đường. Ngày thứ nhất đi $\\frac{1}{3}$ quãng đường. Ngày thứ hai đi $\\frac{2}{5}$ quãng đường còn lại. Ngày thứ ba đi nốt $48\$ km. Hỏi toàn bộ quãng đường dài bao nhiêu km?",
    "options": [
      "$120\$ km",
      "$100\$ km",
      "$140\$ km",
      "$150\$ km"
    ],
    "correct_answer": "$120\$ km",
    "hints": [
      "Phân số chỉ quãng đường còn lại sau ngày 1 là $1 - \\frac{1}{3} = \\frac{2}{3}$.",
      "Phân số chỉ ngày thứ 3 so với cả quãng đường."
    ],
    "explanation_latex": "Sau ngày 1 còn lại: $1 - \\frac{1}{3} = \\frac{2}{3}$ quãng đường. Ngày thứ hai đi: $\\frac{2}{3} \\times \\frac{2}{5} = \\frac{4}{15}$ quãng đường. Phân số chỉ ngày thứ 3: $\\frac{2}{3} - \\frac{4}{15} = \\frac{6}{15} = \\frac{2}{5}$ quãng đường. Chiều dài quãng đường: $48 : \\frac{2}{5} = 48 \\times \\frac{5}{2} = 120\$ km."
  },
  {
    "id": "Q07_b28_01",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Phân số thập phân $\\frac{-7}{100}$ được viết dưới dạng số thập phân là:",
    "options": [
      "$-0{,}07$",
      "$-0{,}7$",
      "$-0{,}007$",
      "$0{,}07$"
    ],
    "correct_answer": "$-0{,}07$",
    "hints": [
      "Hai chữ số 0 ở mẫu tương ứng với 2 chữ số sau dấu phẩy."
    ],
    "explanation_latex": "$\\frac{-7}{100} = -0{,}07$."
  },
  {
    "id": "Q07_b28_02",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Số đối của số thập phân $-3{,}45$ là:",
    "options": [
      "$3{,}45$",
      "$-3{,}45$",
      "$-5{,}43$",
      "$5{,}43$"
    ],
    "correct_answer": "$3{,}45$",
    "hints": [
      "Số đối của $-a$ là $+a$."
    ],
    "explanation_latex": "Số đối của $-3{,}45$ là $3{,}45$."
  },
  {
    "id": "Q07_b28_03",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Khẳng định nào dưới đây là **đúng** khi so sánh hai số thập phân?",
    "options": [
      "$-2{,}35 > -2{,}53$",
      "$-1{,}5 > 0{,}2$",
      "$-0{,}4 < -0{,}45$",
      "$3{,}12 < 3{,}09$"
    ],
    "correct_answer": "$-2{,}35 > -2{,}53$",
    "hints": [
      "Với hai số âm, số nào có phần tự nhiên nhỏ hơn thì lớn hơn: $2{,}35 < 2{,}53 \\implies -2{,}35 > -2{,}53$."
    ],
    "explanation_latex": "Vì $2{,}35 < 2{,}53$ nên $-2{,}35 > -2{,}53$."
  },
  {
    "id": "Q07_b28_04",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Sắp xếp các số sau theo thứ tự tăng dần: $0{,}5; -1{,}2; 0; -1{,}25$:",
    "options": [
      "$-1{,}25 < -1{,}2 < 0 < 0{,}5$",
      "$-1{,}2 < -1{,}25 < 0 < 0{,}5$",
      "$0{,}5 < 0 < -1{,}2 < -1{,}25$",
      "$-1{,}25 < -1{,}2 < 0{,}5 < 0$"
    ],
    "correct_answer": "$-1{,}25 < -1{,}2 < 0 < 0{,}5$",
    "hints": [
      "So sánh hai số âm: $1{,}25 > 1{,}2 \\implies -1{,}25 < -1{,}2$."
    ],
    "explanation_latex": "Thứ tự đúng: $-1{,}25 < -1{,}2 < 0 < 0{,}5$."
  },
  {
    "id": "Q07_b28_05",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Tìm tất cả các số nguyên $x$ sao cho: $-3{,}15 < x \\le 1{,}8$:",
    "options": [
      "$\\{-3; -2; -1; 0; 1\\}$",
      "$\\{-2; -1; 0; 1\\}$",
      "$\\{-3; -2; -1; 0; 1; 2\\}$",
      "$\\{-4; -3; -2; -1; 0; 1\\}$"
    ],
    "correct_answer": "$\\{-3; -2; -1; 0; 1\\}$",
    "hints": [
      "$x > -3{,}15 \\implies x \\ge -3$. $x \\le 1{,}8 \\implies x \\le 1$."
    ],
    "explanation_latex": "Các số nguyên thỏa mãn là $-3, -2, -1, 0, 1$ (gồm 5 số)."
  },
  {
    "id": "Q07_b28_06",
    "chapter_id": "ch-07",
    "topic_id": "b28",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu số thập phân có một chữ số ở phần thập phân lớn hơn $-2$ và nhỏ hơn $1$?",
    "options": [
      "$29$",
      "$30$",
      "$31$",
      "$28$"
    ],
    "correct_answer": "$29$",
    "hints": [
      "Các số có dạng $\\frac{k}{10}$ với $-2 < \\frac{k}{10} < 1 \\implies -20 < k < 10$."
    ],
    "explanation_latex": "Ta có $-2 < \\frac{k}{10} < 1 \\iff -20 < k < 10$. Số các số nguyên $k$ là: $9 - (-19) + 1 = 29$ số."
  },
  {
    "id": "Q07_b29_01",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $(-2{,}5) + (-1{,}3)$ là:",
    "options": [
      "$-3{,}8$",
      "$3{,}8$",
      "$-1{,}2$",
      "$1{,}2$"
    ],
    "correct_answer": "$-3{,}8$",
    "hints": [
      "Cộng hai số âm: $-(2{,}5 + 1{,}3)$."
    ],
    "explanation_latex": "$(-2{,}5) + (-1{,}3) = -3{,}8$."
  },
  {
    "id": "Q07_b29_02",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Kết quả của phép tính $(-0{,}4) \\cdot (-5)$ là:",
    "options": [
      "$2$",
      "$-2$",
      "$0{,}2$",
      "$-0{,}2$"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Âm nhân âm ra dương."
    ],
    "explanation_latex": "$(-0{,}4) \\cdot (-5) = 2$."
  },
  {
    "id": "Q07_b29_03",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tính giá trị biểu thức: $3{,}5 \\cdot 4{,}8 + 3{,}5 \\cdot 5{,}2$:",
    "options": [
      "$35$",
      "$3{,}5$",
      "$350$",
      "$30$"
    ],
    "correct_answer": "$35$",
    "hints": [
      "Đặt $3{,}5$ làm thừa số chung: $3{,}5 \\cdot (4{,}8 + 5{,}2)$."
    ],
    "explanation_latex": "$3{,}5 \\cdot (4{,}8 + 5{,}2) = 3{,}5 \\cdot 10 = 35$."
  },
  {
    "id": "Q07_b29_04",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Kết quả của phép chia $12{,}6 : (-0{,}3)$ là:",
    "options": [
      "$-42$",
      "$42$",
      "$-4{,}2$",
      "$4{,}2$"
    ],
    "correct_answer": "$-42$",
    "hints": [
      "Dương chia âm ra âm. $12{,}6 : 0{,}3 = 126 : 3 = 42$."
    ],
    "explanation_latex": "$12{,}6 : (-0{,}3) = -42$."
  },
  {
    "id": "Q07_b29_05",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một người mua $2{,}5\$ kg thịt lợn với giá $130\\,000$ đồng/kg và $1{,}2\$ kg cá với giá $85\\,000$ đồng/kg. Người đó đưa cho thu ngân tờ tiền $500\\,000$ đồng. Hỏi thu ngân phải trả lại người đó bao nhiêu tiền?",
    "options": [
      "$73\\,000\$ đồng",
      "$63\\,000\$ đồng",
      "$427\\,000\$ đồng",
      "$83\\,000\$ đồng"
    ],
    "correct_answer": "$73\\,000\$ đồng",
    "hints": [
      "Tiền thịt: $2{,}5 \\times 130\\,000$. Tiền cá: $1{,}2 \\times 85\\,000$."
    ],
    "explanation_latex": "Tiền thịt: $2{,}5 \\times 130\\,000 = 325\\,000$ đồng. Tiền cá: $1{,}2 \\times 85\\,000 = 102\\,000$ đồng. Tổng tiền hàng: $325\\,000 + 102\\,000 = 427\\,000$ đồng. Tiền thối lại: $500\\,000 - 427\\,000 = 73\\,000$ đồng."
  },
  {
    "id": "Q07_b29_06",
    "chapter_id": "ch-07",
    "topic_id": "b29",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tìm số thập phân $x$, biết: $2{,}5 \\cdot x - 1{,}5 \\cdot (x + 2) = 5$:",
    "options": [
      "$x = 8$",
      "$x = 6$",
      "$x = 5$",
      "$x = 10$"
    ],
    "correct_answer": "$x = 8$",
    "hints": [
      "$2{,}5x - 1{,}5x - 3 = 5 \\implies 1x - 3 = 5$."
    ],
    "explanation_latex": "$2{,}5x - 1{,}5x - 3 = 5 \\implies x = 5 + 3 = 8$."
  },
  {
    "id": "Q07_b30_01",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Làm tròn số $45{,}673$ đến hàng phần mười (chữ số thập phân thứ nhất) được kết quả là:",
    "options": [
      "$45{,}7$",
      "$45{,}6$",
      "$46$",
      "$45{,}67$"
    ],
    "correct_answer": "$45{,}7$",
    "hints": [
      "Chữ số sau hàng phần mười là 7 ($\\ge 5$) nên cộng thêm 1."
    ],
    "explanation_latex": "$45{,}673$ làm tròn đến hàng phần mười là $45{,}7$."
  },
  {
    "id": "Q07_b30_02",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Làm tròn số $12\\,435$ đến hàng trăm được kết quả là:",
    "options": [
      "$12\\,400$",
      "$12\\,500$",
      "$12\\,000$",
      "$12\\,440$"
    ],
    "correct_answer": "$12\\,400$",
    "hints": [
      "Chữ số ở hàng chục là 3 ($< 5$) nên giữ nguyên hàng trăm."
    ],
    "explanation_latex": "$12\\,435$ làm tròn đến hàng trăm là $12\\,400$."
  },
  {
    "id": "Q07_b30_03",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Làm tròn số $-15{,}489$ với độ chính xác $0{,}05$ (làm tròn đến hàng phần mười) ta được:",
    "options": [
      "$-15{,}5$",
      "$-15{,}4$",
      "$-15$",
      "$-15{,}49$"
    ],
    "correct_answer": "$-15{,}5$",
    "hints": [
      "Độ chính xác $0{,}05$ yêu cầu làm tròn đến hàng phần mười. Chữ số hàng phần trăm là 8."
    ],
    "explanation_latex": "Vì chữ số hàng phần trăm là $8 \\ge 5$ nên ta làm tròn thành $-15{,}5$."
  },
  {
    "id": "Q07_b30_04",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Ước lượng kết quả của phép tính $49{,}8 \\times 20{,}2$ bằng cách làm tròn các thừa số đến hàng đơn vị:",
    "options": [
      "$1\\,000$",
      "$900$",
      "$1\\,050$",
      "$980$"
    ],
    "correct_answer": "$1\\,000$",
    "hints": [
      "$49{,}8 \\approx 50$ và $20{,}2 \\approx 20$."
    ],
    "explanation_latex": "$50 \\times 20 = 1\\,000$."
  },
  {
    "id": "Q07_b30_05",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một cuốn sách có giá bìa $78\\,500$ đồng, một cây bút giá $8\\,200$ đồng. Bạn Nam mua 3 cuốn sách và 5 cây bút. Hãy ước lượng (làm tròn đến hàng nghìn) số tiền Nam cần chuẩn bị:",
    "options": [
      "$277\\,000\$ đồng",
      "$280\\,000\$ đồng",
      "$270\\,000\$ đồng",
      "$260\\,000\$ đồng"
    ],
    "correct_answer": "$277\\,000\$ đồng",
    "hints": [
      "Sách: $79\\,000 \\times 3 = 237\\,000$. Bút: $8\\,000 \\times 5 = 40\\,000$."
    ],
    "explanation_latex": "Làm tròn: mỗi cuốn sách khoảng $79\\,000$ đồng $\\implies 3$ cuốn là $237\\,000$ đồng; 5 cây bút khoảng $5 \\times 8\\,000 = 40\\,000$ đồng. Tổng cộng khoảng $237\\,000 + 40\\,000 = 277\\,000$ đồng."
  },
  {
    "id": "Q07_b30_06",
    "chapter_id": "ch-07",
    "topic_id": "b30",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Dân số của một tỉnh là $1\\,845\\,720$ người. Khi làm tròn số này với độ chính xác $d = 500$ (tức là làm tròn đến hàng nghìn), ta thu được số dân là:",
    "options": [
      "$1\\,846\\,000\$ người",
      "$1\\,845\\,000\$ người",
      "$1\\,850\\,000\$ người",
      "$1\\,845\\,700\$ người"
    ],
    "correct_answer": "$1\\,846\\,000\$ người",
    "hints": [
      "Độ chính xác $500$ thì làm tròn đến hàng nghìn. Chữ số hàng trăm là 7."
    ],
    "explanation_latex": "Vì chữ số hàng trăm là $7 \\ge 5$ nên làm tròn lên đến hàng nghìn ta được $1\\,846\\,000$ người."
  },
  {
    "id": "Q07_b31_01",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tỉ số phần trăm của $15$ và $60$ là:",
    "options": [
      "$25\\%$",
      "$20\\%$",
      "$30\\%$",
      "$15\\%$"
    ],
    "correct_answer": "$25\\%$",
    "hints": [
      "$\\frac{15}{60} \\times 100\\%$."
    ],
    "explanation_latex": "$\\frac{15}{60} \\times 100\\% = 0{,}25 \\times 100\\% = 25\\%$."
  },
  {
    "id": "Q07_b31_02",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tìm $20\\%$ của $150\$ kg:",
    "options": [
      "$30\$ kg",
      "$25\$ kg",
      "$35\$ kg",
      "$20\$ kg"
    ],
    "correct_answer": "$30\$ kg",
    "hints": [
      "$150 \\times 20\\% = 150 \\times 0{,}2$."
    ],
    "explanation_latex": "$150 \\times \\frac{20}{100} = 30\$ kg."
  },
  {
    "id": "Q07_b31_03",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Tìm một số biết $30\\%$ của số đó bằng $45$:",
    "options": [
      "$150$",
      "$135$",
      "$120$",
      "$160$"
    ],
    "correct_answer": "$150$",
    "hints": [
      "$45 : 30\\% = 45 : 0{,}3$."
    ],
    "explanation_latex": "Số đó là: $45 : \\frac{30}{100} = 45 \\times \\frac{100}{30} = 150$."
  },
  {
    "id": "Q07_b31_04",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một chiếc áo có giá niêm yết là $200\\,000$ đồng. Nhân dịp khuyến mãi, cửa hàng giảm giá $15\\%$. Giá bán của chiếc áo sau khi giảm là:",
    "options": [
      "$170\\,000\$ đồng",
      "$185\\,000\$ đồng",
      "$160\\,000\$ đồng",
      "$175\\,000\$ đồng"
    ],
    "correct_answer": "$170\\,000\$ đồng",
    "hints": [
      "Số tiền được giảm: $200\\,000 \\times 15\\% = 30\\,000$."
    ],
    "explanation_latex": "Tiền giảm: $200\\,000 \\times 15\\% = 30\\,000$ đồng. Giá sau giảm: $200\\,000 - 30\\,000 = 170\\,000$ đồng."
  },
  {
    "id": "Q07_b31_05",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Bác An gửi tiết kiệm $50\\,000\\,000$ đồng vào ngân hàng với lãi suất $6\\%/\$ năm. Hỏi sau một năm, cả tiền gốc và tiền lãi bác An nhận được là bao nhiêu?",
    "options": [
      "$53\\,000\\,000\$ đồng",
      "$56\\,000\\,000\$ đồng",
      "$3\\,000\\,000\$ đồng",
      "$50\\,300\\,000\$ đồng"
    ],
    "correct_answer": "$53\\,000\\,000\$ đồng",
    "hints": [
      "Tiền lãi sau 1 năm: $50\\,000\\,000 \\times 6\\% = 3\\,000\\,000$."
    ],
    "explanation_latex": "Tiền lãi: $50\\,000\\,000 \\times 6\\% = 3\\,000\\,000$ đồng. Tổng số tiền nhận được: $50\\,000\\,000 + 3\\,000\\,000 = 53\\,000\\,000$ đồng."
  },
  {
    "id": "Q07_b31_06",
    "chapter_id": "ch-07",
    "topic_id": "b31",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Một món hàng có giá gốc $500\\,000$ đồng. Cửa hàng giảm giá lần thứ nhất $10\\%$. Sau đó, nhân ngày sinh nhật của khách, cửa hàng giảm tiếp $5\\%$ trên giá đã giảm. Hỏi khách hàng phải trả bao nhiêu tiền?",
    "options": [
      "$427\\,500\$ đồng",
      "$425\\,000\$ đồng",
      "$430\\,000\$ đồng",
      "$415\\,000\$ đồng"
    ],
    "correct_answer": "$427\\,500\$ đồng",
    "hints": [
      "Giá sau lần 1: $500\\,000 \\times (1 - 0{,}1) = 450\\,000$.",
      "Giá sau lần 2: $450\\,000 \\times (1 - 0{,}05)$."
    ],
    "explanation_latex": "Sau lần giảm 1: $500\\,000 \\times 90\\% = 450\\,000$ đồng. Sau lần giảm 2: $450\\,000 \\times (1 - 0{,}05) = 450\\,000 \\times 0{,}95 = 427\\,500$ đồng."
  },
  {
    "id": "Q08_b32_01",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Có bao nhiêu đường thẳng đi qua hai điểm phân biệt $A$ và $B$?",
    "options": [
      "$1$",
      "$2$",
      "$0$",
      "Vô số"
    ],
    "correct_answer": "$1$",
    "hints": [
      "Qua hai điểm phân biệt xác định duy nhất một đường thẳng."
    ],
    "explanation_latex": "Có duy nhất 1 đường thẳng đi qua hai điểm phân biệt $A$ và $B$."
  },
  {
    "id": "Q08_b32_02",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hai đường thẳng phân biệt có thể có nhiều nhất bao nhiêu điểm chung?",
    "options": [
      "$1$",
      "$2$",
      "$0$",
      "Vô số"
    ],
    "correct_answer": "$1$",
    "hints": [
      "Hai đường thẳng cắt nhau có đúng 1 điểm chung."
    ],
    "explanation_latex": "Hai đường thẳng phân biệt chỉ có thể cắt nhau (1 điểm chung) hoặc song song (0 điểm chung)."
  },
  {
    "id": "Q08_b32_03",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho ba điểm $A, B, C$ thẳng hàng theo thứ tự đó. Điểm nào nằm giữa hai điểm còn lại?",
    "options": [
      "Điểm $B$",
      "Điểm $A$",
      "Điểm $C$",
      "Không có điểm nào"
    ],
    "correct_answer": "Điểm $B$",
    "hints": [
      "Theo thứ tự $A, B, C$ thì $B$ nằm ở giữa."
    ],
    "explanation_latex": "Điểm $B$ nằm giữa hai điểm $A$ và $C$."
  },
  {
    "id": "Q08_b32_04",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho 4 điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Cứ qua hai điểm vẽ được một đường thẳng. Số đường thẳng vẽ được là:",
    "options": [
      "$6$",
      "$4$",
      "$8$",
      "$12$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Số đường thẳng qua 4 điểm là $\\frac{4 \\times 3}{2} = 6$."
    ],
    "explanation_latex": "Công thức $\\frac{n(n-1)}{2} = \\frac{4 \\times 3}{2} = 6$ đường thẳng."
  },
  {
    "id": "Q08_b32_05",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho 10 điểm phân biệt trong đó không có ba điểm nào thẳng hàng. Số đường thẳng đi qua từng cặp điểm là:",
    "options": [
      "$45$",
      "$50$",
      "$90$",
      "$20$"
    ],
    "correct_answer": "$45$",
    "hints": [
      "Số đường thẳng là $\\frac{10 \\times 9}{2}$."
    ],
    "explanation_latex": "$\\frac{10 \\times 9}{2} = 45$ đường thẳng."
  },
  {
    "id": "Q08_b32_06",
    "chapter_id": "ch-08",
    "topic_id": "b32",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho 10 điểm phân biệt trong đó có đúng 4 điểm thẳng hàng, ngoài ra không có 3 điểm nào khác thẳng hàng. Hỏi vẽ được tất cả bao nhiêu đường thẳng đi qua các cặp điểm?",
    "options": [
      "$40$",
      "$45$",
      "$39$",
      "$42$"
    ],
    "correct_answer": "$40$",
    "hints": [
      "Nếu không có 3 điểm nào thẳng hàng thì có 45 đường. 4 điểm thẳng hàng tạo 1 đường thay vì $\\frac{4 \\times 3}{2} = 6$."
    ],
    "explanation_latex": "Số đường thẳng tạo bởi 10 điểm: $45 - 6 + 1 = 40$ đường thẳng."
  },
  {
    "id": "Q08_b33_01",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hai tia chung gốc và tạo thành một đường thẳng được gọi là:",
    "options": [
      "Hai tia đối nhau",
      "Hai tia trùng nhau",
      "Hai tia song song",
      "Hai tia cắt nhau"
    ],
    "correct_answer": "Hai tia đối nhau",
    "hints": [
      "Định nghĩa hai tia đối nhau."
    ],
    "explanation_latex": "Hai tia chung gốc tạo thành một đường thẳng được gọi là hai tia đối nhau."
  },
  {
    "id": "Q08_b33_02",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Gốc của tia $Ax$ là điểm nào?",
    "options": [
      "Điểm $A$",
      "Điểm $x$",
      "Không có gốc",
      "Cả $A$ và $x$"
    ],
    "correct_answer": "Điểm $A$",
    "hints": [
      "Chữ cái đầu tiên chỉ gốc của tia."
    ],
    "explanation_latex": "Tia $Ax$ có gốc là điểm $A$."
  },
  {
    "id": "Q08_b33_03",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Lấy điểm $M$ nằm giữa hai điểm $A$ và $B$. Trong các khẳng định sau, khẳng định nào **đúng**?",
    "options": [
      "Hai tia $MA$ và $MB$ là hai tia đối nhau",
      "Hai tia $AM$ và $BM$ là hai tia đối nhau",
      "Hai tia $MA$ và $MB$ là hai tia trùng nhau",
      "Hai tia $AB$ và $BA$ là hai tia trùng nhau"
    ],
    "correct_answer": "Hai tia $MA$ và $MB$ là hai tia đối nhau",
    "hints": [
      "Điểm $M$ chung gốc, $A$ và $B$ nằm về hai phía khác nhau của $M$."
    ],
    "explanation_latex": "Vì $M$ nằm giữa $A$ và $B$ nên hai tia $MA$ và $MB$ là hai tia đối nhau."
  },
  {
    "id": "Q08_b33_04",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Trên đường thẳng $xy$, lấy điểm $O$. Trên đường thẳng đó có bao nhiêu tia gốc $O$?",
    "options": [
      "$2$",
      "$1$",
      "$4$",
      "Vô số"
    ],
    "correct_answer": "$2$",
    "hints": [
      "Tia $Ox$ và tia $Oy$."
    ],
    "explanation_latex": "Có 2 tia gốc $O$ là tia $Ox$ và tia $Oy$ (hai tia đối nhau)."
  },
  {
    "id": "Q08_b33_05",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Trên một đường thẳng lấy 5 điểm phân biệt $A, B, C, D, E$. Hỏi có tất cả bao nhiêu tia phân biệt trên đường thẳng đó?",
    "options": [
      "$10$",
      "$5$",
      "$8$",
      "$20$"
    ],
    "correct_answer": "$10$",
    "hints": [
      "Mỗi điểm là gốc của đúng 2 tia đối nhau."
    ],
    "explanation_latex": "Với mỗi điểm trên đường thẳng xác định được 2 tia đối nhau về hai phía. Vậy 5 điểm tạo thành $5 \\times 2 = 10$ tia phân biệt."
  },
  {
    "id": "Q08_b33_06",
    "chapter_id": "ch-08",
    "topic_id": "b33",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho hai tia $Ox$ và $Oy$ đối nhau. Lấy điểm $A$ thuộc tia $Ox$, điểm $B$ thuộc tia $Oy$ ($A, B$ khác $O$). Khẳng định nào sau đây là **sai**?",
    "options": [
      "Tia $OA$ và tia $OB$ trùng nhau",
      "Điểm $O$ nằm giữa hai điểm $A$ và $B$",
      "Tia $OA$ và tia $Ox$ trùng nhau",
      "Tia $OB$ và tia $Oy$ trùng nhau"
    ],
    "correct_answer": "Tia $OA$ và tia $OB$ trùng nhau",
    "hints": [
      "$OA$ và $OB$ là hai tia đối nhau vì chung gốc $O$ và hướng về hai phía."
    ],
    "explanation_latex": "Tia $OA$ và tia $OB$ là hai tia đối nhau chứ không phải hai tia trùng nhau."
  },
  {
    "id": "Q08_b34_01",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Đoạn thẳng $AB$ là hình gồm:",
    "options": [
      "Điểm $A$, điểm $B$ và tất cả các điểm nằm giữa $A$ và $B$",
      "Đường thẳng đi qua hai điểm $A$ và $B$",
      "Tia gốc $A$ đi qua $B$",
      "Hai điểm $A$ và $B$"
    ],
    "correct_answer": "Điểm $A$, điểm $B$ và tất cả các điểm nằm giữa $A$ và $B$",
    "hints": [
      "Định nghĩa đoạn thẳng trong SGK."
    ],
    "explanation_latex": "Đoạn thẳng $AB$ là hình gồm điểm $A$, điểm $B$ và tất cả các điểm nằm giữa $A$ và $B$."
  },
  {
    "id": "Q08_b34_02",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì ta có hệ thức nào sau đây?",
    "options": [
      "$AM + MB = AB$",
      "$AM + AB = MB$",
      "$MB + AB = AM$",
      "$AM = MB$"
    ],
    "correct_answer": "$AM + MB = AB$",
    "hints": [
      "Tính chất điểm nằm giữa."
    ],
    "explanation_latex": "Khi $M$ nằm giữa $A$ và $B$ thì $AM + MB = AB$."
  },
  {
    "id": "Q08_b34_03",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho điểm $M$ nằm giữa hai điểm $A$ và $B$. Biết $AB = 9\$ cm, $AM = 4\$ cm. Độ dài đoạn thẳng $MB$ là:",
    "options": [
      "$5\$ cm",
      "$13\$ cm",
      "$4\$ cm",
      "$6\$ cm"
    ],
    "correct_answer": "$5\$ cm",
    "hints": [
      "$MB = AB - AM$."
    ],
    "explanation_latex": "$MB = 9 - 4 = 5\$ cm."
  },
  {
    "id": "Q08_b34_04",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho ba điểm $A, B, C$ thẳng hàng, biết $AB = 3\$ cm, $BC = 5\$ cm và $AC = 8\$ cm. Khẳng định nào sau đây là **đúng**?",
    "options": [
      "Điểm $B$ nằm giữa hai điểm $A$ và $C$",
      "Điểm $A$ nằm giữa hai điểm $B$ và $C$",
      "Điểm $C$ nằm giữa hai điểm $A$ và $B$",
      "Ba điểm không thẳng hàng"
    ],
    "correct_answer": "Điểm $B$ nằm giữa hai điểm $A$ và $C$",
    "hints": [
      "Vì $AB + BC = 3 + 5 = 8 = AC$."
    ],
    "explanation_latex": "Vì $AB + BC = AC$ nên điểm $B$ nằm giữa hai điểm $A$ và $C$."
  },
  {
    "id": "Q08_b34_05",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Trên tia $Ox$, lấy hai điểm $A$ và $B$ sao cho $OA = 3\$ cm, $OB = 7\$ cm. Lấy điểm $C$ trên tia đối của tia $Ox$ sao cho $OC = 2\$ cm. Độ dài đoạn thẳng $CB$ là:",
    "options": [
      "$9\$ cm",
      "$5\$ cm",
      "$12\$ cm",
      "$8\$ cm"
    ],
    "correct_answer": "$9\$ cm",
    "hints": [
      "$C$ và $B$ nằm trên hai tia đối nhau gốc $O$ nên $O$ nằm giữa $C$ và $B$: $CB = CO + OB$."
    ],
    "explanation_latex": "$CB = CO + OB = 2 + 7 = 9\$ cm."
  },
  {
    "id": "Q08_b34_06",
    "chapter_id": "ch-08",
    "topic_id": "b34",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Trên đoạn thẳng $AB = 10\$ cm, lấy hai điểm $C$ và $D$ sao cho $AC = 4\$ cm và $BD = 3\$ cm (với $C$ và $D$ cùng nằm giữa $A$ và $B$). Độ dài đoạn thẳng $CD$ là:",
    "options": [
      "$3\$ cm",
      "$4\$ cm",
      "$2\$ cm",
      "$5\$ cm"
    ],
    "correct_answer": "$3\$ cm",
    "hints": [
      "Tính $CD = AB - AC - BD$."
    ],
    "explanation_latex": "Vì $AC + BD = 4 + 3 = 7 < 10\$ cm nên $C$ và $D$ không trùng nhau và cùng nằm giữa $A, B$. Độ dài $CD = 10 - (4 + 3) = 3\$ cm."
  },
  {
    "id": "Q08_b35_01",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Điểm $M$ được gọi là trung điểm của đoạn thẳng $AB$ nếu:",
    "options": [
      "$M$ nằm giữa $A, B$ và $MA = MB$",
      "$M$ cách đều $A$ và $B$",
      "$M$ nằm giữa $A$ và $B$",
      "$MA = MB = AB$"
    ],
    "correct_answer": "$M$ nằm giữa $A, B$ và $MA = MB$",
    "hints": [
      "Định nghĩa chuẩn của trung điểm."
    ],
    "explanation_latex": "Trung điểm của đoạn thẳng là điểm nằm giữa hai đầu mút và cách đều hai đầu mút đó."
  },
  {
    "id": "Q08_b35_02",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Cho đoạn thẳng $AB = 12\$ cm. Nếu $M$ là trung điểm của đoạn thẳng $AB$ thì độ dài đoạn thẳng $AM$ là:",
    "options": [
      "$6\$ cm",
      "$12\$ cm",
      "$3\$ cm",
      "$24\$ cm"
    ],
    "correct_answer": "$6\$ cm",
    "hints": [
      "$AM = AB : 2$."
    ],
    "explanation_latex": "$AM = 12 : 2 = 6\$ cm."
  },
  {
    "id": "Q08_b35_03",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho đoạn thẳng $PQ$. Điểm $I$ là trung điểm của $PQ$. Biết $IP = 5\$ cm, độ dài đoạn thẳng $PQ$ là:",
    "options": [
      "$10\$ cm",
      "$5\$ cm",
      "$2{,}5\$ cm",
      "$15\$ cm"
    ],
    "correct_answer": "$10\$ cm",
    "hints": [
      "$PQ = 2 \\times IP$."
    ],
    "explanation_latex": "$PQ = 2 \\times 5 = 10\$ cm."
  },
  {
    "id": "Q08_b35_04",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Trên tia $Ox$, lấy hai điểm $A$ và $B$ sao cho $OA = 4\$ cm, $OB = 8\$ cm. Khẳng định nào sau đây là **đúng**?",
    "options": [
      "$A$ là trung điểm của đoạn thẳng $OB$",
      "$B$ là trung điểm của đoạn thẳng $OA$",
      "$O$ là trung điểm của đoạn thẳng $AB$",
      "$A$ không phải là trung điểm của $OB$"
    ],
    "correct_answer": "$A$ là trung điểm của đoạn thẳng $OB$",
    "hints": [
      "$OA = 4$, $AB = OB - OA = 4\$ cm. Do đó $OA = AB$."
    ],
    "explanation_latex": "Vì $OA = 4\$ cm và $AB = 8 - 4 = 4\$ cm nên $A$ nằm giữa $O, B$ và $OA = AB$. Vậy $A$ là trung điểm của $OB$."
  },
  {
    "id": "Q08_b35_05",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho đoạn thẳng $AB = 16\$ cm. Gọi $M$ là trung điểm của $AB$, $N$ là trung điểm của đoạn thẳng $AM$. Độ dài đoạn thẳng $NB$ là:",
    "options": [
      "$12\$ cm",
      "$8\$ cm",
      "$4\$ cm",
      "$10\$ cm"
    ],
    "correct_answer": "$12\$ cm",
    "hints": [
      "$AM = 8\\text{ cm} \\implies NM = 4\$ cm. Đoạn $NB = NM + MB$."
    ],
    "explanation_latex": "Ta có $AM = MB = 16 : 2 = 8\$ cm. $N$ là trung điểm của $AM$ nên $NM = 8 : 2 = 4\$ cm. Độ dài $NB = NM + MB = 4 + 8 = 12\$ cm."
  },
  {
    "id": "Q08_b35_06",
    "chapter_id": "ch-08",
    "topic_id": "b35",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Cho đoạn thẳng $AB = 20\$ cm. Lấy điểm $C$ nằm giữa $A$ và $B$. Gọi $I$ và $K$ lần lượt là trung điểm của các đoạn thẳng $AC$ và $CB$. Độ dài đoạn thẳng $IK$ là:",
    "options": [
      "$10\$ cm",
      "$12\$ cm",
      "$8\$ cm",
      "Phụ thuộc vào vị trí điểm $C$"
    ],
    "correct_answer": "$10\$ cm",
    "hints": [
      "$IK = IC + CK = \\frac{AC}{2} + \\frac{CB}{2} = \\frac{AC + CB}{2} = \\frac{AB}{2}$."
    ],
    "explanation_latex": "Độ dài $IK = \\frac{AC + CB}{2} = \\frac{AB}{2} = 20 : 2 = 10\$ cm (không phụ thuộc vào vị trí điểm $C$)."
  },
  {
    "id": "Q08_b36_01",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Hình tạo bởi hai tia chung gốc được gọi là:",
    "options": [
      "Góc",
      "Đoạn thẳng",
      "Đường thẳng",
      "Tam giác"
    ],
    "correct_answer": "Góc",
    "hints": [
      "Định nghĩa góc trong SGK."
    ],
    "explanation_latex": "Góc là hình gồm hai tia chung gốc."
  },
  {
    "id": "Q08_b36_02",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Góc bẹt là góc có hai cạnh là:",
    "options": [
      "Hai tia đối nhau",
      "Hai tia trùng nhau",
      "Hai tia song song",
      "Hai tia vuông góc"
    ],
    "correct_answer": "Hai tia đối nhau",
    "hints": [
      "Góc bẹt có số đo $180^\\circ$."
    ],
    "explanation_latex": "Góc bẹt là góc có hai cạnh là hai tia đối nhau."
  },
  {
    "id": "Q08_b36_03",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Góc $\\widehat{xOy}$ có đỉnh là điểm nào và hai cạnh là hai tia nào?",
    "options": [
      "Đỉnh $O$, hai cạnh là tia $Ox$ và tia $Oy$",
      "Đỉnh $x$, hai cạnh là $Oy$ và $xy$",
      "Đỉnh $y$, hai cạnh là $Ox$ và $Oy$",
      "Đỉnh $O$, hai cạnh là đường thẳng $x$ và $y$"
    ],
    "correct_answer": "Đỉnh $O$, hai cạnh là tia $Ox$ và tia $Oy$",
    "hints": [
      "Tên góc viết đỉnh ở giữa."
    ],
    "explanation_latex": "Góc $\\widehat{xOy}$ có đỉnh là $O$, hai cạnh là tia $Ox$ và tia $Oy$."
  },
  {
    "id": "Q08_b36_04",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho 3 tia chung gốc $Ox, Oy, Oz$. Hỏi có tất cả bao nhiêu góc được tạo thành?",
    "options": [
      "$3$",
      "$2$",
      "$4$",
      "$6$"
    ],
    "correct_answer": "$3$",
    "hints": [
      "Số góc tạo bởi 3 tia là $\\frac{3 \\times 2}{2} = 3$."
    ],
    "explanation_latex": "Có 3 góc: $\\widehat{xOy}, \\widehat{yOz}, \\widehat{xOz}$."
  },
  {
    "id": "Q08_b36_05",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Cho 5 tia chung gốc phân biệt. Hỏi có tất cả bao nhiêu góc được tạo thành?",
    "options": [
      "$10$",
      "$5$",
      "$15$",
      "$20$"
    ],
    "correct_answer": "$10$",
    "hints": [
      "Công thức số góc từ $n$ tia chung gốc: $\\frac{n(n-1)}{2}$."
    ],
    "explanation_latex": "$\\frac{5 \\times 4}{2} = 10$ góc."
  },
  {
    "id": "Q08_b36_06",
    "chapter_id": "ch-08",
    "topic_id": "b36",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Biết từ một điểm $O$ vẽ một số tia phân biệt, người ta đếm được tất cả $36$ góc. Hỏi đã vẽ bao nhiêu tia phân biệt chung gốc $O$?",
    "options": [
      "$9\$ tia",
      "$8\$ tia",
      "$10\$ tia",
      "$12\$ tia"
    ],
    "correct_answer": "$9\$ tia",
    "hints": [
      "$\\frac{n(n-1)}{2} = 36 \\implies n(n-1) = 72$."
    ],
    "explanation_latex": "Ta có $\\frac{n(n-1)}{2} = 36 \\implies n(n-1) = 72$. Vì $9 \\times 8 = 72$ nên $n = 9$ tia."
  },
  {
    "id": "Q08_b37_01",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Góc có số đo bằng $90^\\circ$ được gọi là:",
    "options": [
      "Góc vuông",
      "Góc nhọn",
      "Góc tù",
      "Góc bẹt"
    ],
    "correct_answer": "Góc vuông",
    "hints": [
      "Phân loại góc theo số đo."
    ],
    "explanation_latex": "Góc có số đo $90^\\circ$ là góc vuông."
  },
  {
    "id": "Q08_b37_02",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Góc có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ được gọi là:",
    "options": [
      "Góc tù",
      "Góc nhọn",
      "Góc vuông",
      "Góc bẹt"
    ],
    "correct_answer": "Góc tù",
    "hints": [
      "Định nghĩa góc tù."
    ],
    "explanation_latex": "Góc có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ là góc tù."
  },
  {
    "id": "Q08_b37_03",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Lúc đúng 3 giờ, góc tạo bởi kim giờ và kim phút của đồng hồ có số đo là:",
    "options": [
      "$90^\\circ$",
      "$60^\\circ$",
      "$120^\\circ$",
      "$180^\\circ$"
    ],
    "correct_answer": "$90^\\circ$",
    "hints": [
      "Mỗi khoảng 1 giờ trên đồng hồ tương ứng với $360^\\circ : 12 = 30^\\circ$."
    ],
    "explanation_latex": "Lúc 3 giờ, hai kim cách nhau 3 khoảng: $3 \\times 30^\\circ = 90^\\circ$ (góc vuông)."
  },
  {
    "id": "Q08_b37_04",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Cho góc $\\widehat{xOy} = 60^\\circ$ và góc $\\widehat{mAn} = 120^\\circ$. Khẳng định nào sau đây là **đúng**?",
    "options": [
      "$\\widehat{xOy}$ là góc nhọn, $\\widehat{mAn}$ là góc tù",
      "Cả hai góc đều là góc nhọn",
      "Cả hai góc đều là góc tù",
      "$\\widehat{xOy}$ là góc vuông, $\\widehat{mAn}$ là góc bẹt"
    ],
    "correct_answer": "$\\widehat{xOy}$ là góc nhọn, $\\widehat{mAn}$ là góc tù",
    "hints": [
      "$60^\\circ < 90^\\circ$ là góc nhọn, $120^\\circ > 90^\\circ$ là góc tù."
    ],
    "explanation_latex": "$\\widehat{xOy} = 60^\\circ$ là góc nhọn, $\\widehat{mAn} = 120^\\circ$ là góc tù."
  },
  {
    "id": "Q08_b37_05",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Lúc đúng 6 giờ, góc tạo bởi kim giờ và kim phút của đồng hồ là:",
    "options": [
      "Góc bẹt ($180^\\circ$)",
      "Góc vuông ($90^\\circ$)",
      "Góc tù ($150^\\circ$)",
      "Góc nhọn ($60^\\circ$)"
    ],
    "correct_answer": "Góc bẹt ($180^\\circ$)",
    "hints": [
      "Hai kim chỉ vào số 12 và số 6, tạo thành một đường thẳng."
    ],
    "explanation_latex": "Hai kim tạo thành hai tia đối nhau, tức là một góc bẹt có số đo $180^\\circ$."
  },
  {
    "id": "Q08_b37_06",
    "chapter_id": "ch-08",
    "topic_id": "b37",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Lúc đúng 4 giờ, góc nhỏ tạo bởi kim giờ và kim phút có số đo bằng bao nhiêu độ?",
    "options": [
      "$120^\\circ$",
      "$90^\\circ$",
      "$150^\\circ$",
      "$100^\\circ$"
    ],
    "correct_answer": "$120^\\circ$",
    "hints": [
      "Khoảng cách giữa hai kim là 4 khoảng, mỗi khoảng $30^\\circ$."
    ],
    "explanation_latex": "Mỗi giờ kim phút quay 1 vòng ($360^\\circ$), đồng hồ chia làm 12 khoảng, mỗi khoảng là $30^\\circ$. Lúc 4 giờ, kim giờ chỉ số 4, kim phút chỉ số 12 (cách nhau 4 khoảng): $4 \\times 30^\\circ = 120^\\circ$."
  },
  {
    "id": "Q09_b38_01",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Dữ liệu nào sau đây là dữ liệu số (số liệu)?",
    "options": [
      "Chiều cao của các bạn trong tổ (đơn vị: cm)",
      "Tên các môn học yêu thích",
      "Màu sắc yêu thích của học sinh",
      "Xếp loại học lực (Giỏi, Khá, Đạt)"
    ],
    "correct_answer": "Chiều cao của các bạn trong tổ (đơn vị: cm)",
    "hints": [
      "Số liệu là dữ liệu được biểu diễn bằng các con số."
    ],
    "explanation_latex": "Chiều cao đo bằng số cm là dữ liệu số."
  },
  {
    "id": "Q09_b38_02",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Để thu thập dữ liệu về số giờ tự học mỗi ngày của học sinh lớp 6A, phương pháp nào sau đây là phù hợp nhất?",
    "options": [
      "Phỏng vấn hoặc lập phiếu điều tra",
      "Đo bằng thước kẻ",
      "Cân bằng cân đồng hồ",
      "Xem nhiệt kế"
    ],
    "correct_answer": "Phỏng vấn hoặc lập phiếu điều tra",
    "hints": [
      "Thu thập ý kiến/số giờ của từng học sinh bằng phiếu điều tra."
    ],
    "explanation_latex": "Lập phiếu hỏi hoặc phỏng vấn trực tiếp là phương pháp tối ưu."
  },
  {
    "id": "Q09_b38_03",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Trong bảng danh sách điểm kiểm tra môn Toán của 5 bạn: Minh: 8; Hoa: 9; Nam: 15; Lan: 7; An: 10. Giá trị nào là **không hợp lý**?",
    "options": [
      "Điểm $15$ của bạn Nam",
      "Điểm $9$ của bạn Hoa",
      "Điểm $10$ của bạn An",
      "Điểm $7$ của bạn Lan"
    ],
    "correct_answer": "Điểm $15$ của bạn Nam",
    "hints": [
      "Thang điểm kiểm tra chuẩn từ 0 đến 10."
    ],
    "explanation_latex": "Điểm môn Toán trong trường phổ thông tối đa là 10 điểm, do đó điểm 15 là không hợp lý."
  },
  {
    "id": "Q09_b38_04",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Dãy dữ liệu nào sau đây là dữ liệu **không là số**?",
    "options": [
      "Họ và tên của các thành viên trong gia đình",
      "Cân nặng của các bạn trong lớp",
      "Nhiệt độ các ngày trong tuần",
      "Số lượng bàn ghế trong mỗi phòng học"
    ],
    "correct_answer": "Họ và tên của các thành viên trong gia đình",
    "hints": [
      "Tên người được ghi bằng chữ cái, không phải số."
    ],
    "explanation_latex": "Họ và tên là dữ liệu dạng chữ (không là số)."
  },
  {
    "id": "Q09_b38_05",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một giáo viên ghi lại số học sinh vắng của lớp 6B trong 5 ngày tuần trước: $1; 0; 2; -1; 0$. Số liệu nào trong dãy là **không hợp lý**?",
    "options": [
      "$-1$",
      "$0$",
      "$1$",
      "$2$"
    ],
    "correct_answer": "$-1$",
    "hints": [
      "Số học sinh vắng mặt phải là số tự nhiên ($0, 1, 2, \\dots$), không thể là số âm."
    ],
    "explanation_latex": "Số học sinh vắng không thể là số âm ($-1$)."
  },
  {
    "id": "Q09_b38_06",
    "chapter_id": "ch-09",
    "topic_id": "b38",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Khảo sát về phương tiện đến trường của 40 học sinh lớp 6C, thu được kết quả: Xe đạp: 22 bạn, Đi bộ: 12 bạn, Xe buýt: 8 bạn, Bố mẹ đưa đón: 3 bạn. Dữ liệu này có điểm nào **chưa hợp lý**?",
    "options": [
      "Tổng số học sinh điều tra là $45 > 40$",
      "Số bạn đi xe đạp quá nhiều",
      "Số bạn đi xe buýt không là số chẵn",
      "Không có bạn nào đi xe máy"
    ],
    "correct_answer": "Tổng số học sinh điều tra là $45 > 40$",
    "hints": [
      "Cộng tổng số học sinh các nhóm: $22 + 12 + 8 + 3 = 45$ bạn, vượt quá sĩ số 40."
    ],
    "explanation_latex": "Tổng số học sinh các phương tiện là $22 + 12 + 8 + 3 = 45$, lớn hơn tổng sĩ số $40$ của cả lớp."
  },
  {
    "id": "Q09_b39_01",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong biểu đồ tranh, nếu mỗi biểu tượng $\\star$ đại diện cho $5$ học sinh, thì $4$ biểu tượng $\\star\\star\\star\\star$ đại diện cho bao nhiêu học sinh?",
    "options": [
      "$20\$ học sinh",
      "$15\$ học sinh",
      "$25\$ học sinh",
      "$4\$ học sinh"
    ],
    "correct_answer": "$20\$ học sinh",
    "hints": [
      "Lấy $4 \\times 5$."
    ],
    "explanation_latex": "$4 \\times 5 = 20$ học sinh."
  },
  {
    "id": "Q09_b39_02",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Biểu đồ tranh dùng hình ảnh hoặc biểu tượng để:",
    "options": [
      "Biểu diễn dữ liệu thống kê",
      "Vẽ hình học",
      "Giải phương trình",
      "Tính chu vi"
    ],
    "correct_answer": "Biểu diễn dữ liệu thống kê",
    "hints": [
      "Mục đích của biểu đồ tranh."
    ],
    "explanation_latex": "Biểu đồ tranh dùng biểu tượng để thể hiện dữ liệu trực quan."
  },
  {
    "id": "Q09_b39_03",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Số cây trồng được của lớp 6A được biểu diễn bằng $3$ biểu tượng cái cây và nửa biểu tượng cái cây. Biết mỗi biểu tượng cái cây đại diện cho $10$ cây. Tổng số cây lớp 6A trồng được là:",
    "options": [
      "$35\$ cây",
      "$30\$ cây",
      "$40\$ cây",
      "$25\$ cây"
    ],
    "correct_answer": "$35\$ cây",
    "hints": [
      "3 cây nguyên là 30 cây, nửa cây là 5 cây."
    ],
    "explanation_latex": "$3 \\times 10 + 5 = 35$ cây."
  },
  {
    "id": "Q09_b39_04",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một cửa hàng bán được $80$ chiếc xe đạp trong tháng. Nếu dùng biểu tượng chiếc xe đại diện cho $20$ xe đạp, thì cần bao nhiêu biểu tượng để vẽ biểu đồ tranh?",
    "options": [
      "$4$",
      "$5$",
      "$3$",
      "$8$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "$80 : 20 = 4$."
    ],
    "explanation_latex": "$80 : 20 = 4$ biểu tượng."
  },
  {
    "id": "Q09_b39_05",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Biểu đồ tranh thống kê số điểm 10 của các tổ: Tổ 1 có 4 mặt cười, Tổ 2 có 6 mặt cười, Tổ 3 có 5 mặt cười. Biết mỗi mặt cười đại diện cho $3$ điểm 10. Tổ 2 có nhiều hơn Tổ 1 bao nhiêu điểm 10?",
    "options": [
      "$6\$ điểm 10",
      "$2\$ điểm 10",
      "$18\$ điểm 10",
      "$12\$ điểm 10"
    ],
    "correct_answer": "$6\$ điểm 10",
    "hints": [
      "Tổ 2 hơn Tổ 1: $6 - 4 = 2$ mặt cười. Nhân với 3."
    ],
    "explanation_latex": "Chênh lệch: $(6 - 4) \\times 3 = 2 \\times 3 = 6$ điểm 10."
  },
  {
    "id": "Q09_b39_06",
    "chapter_id": "ch-09",
    "topic_id": "b39",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Thống kê số lượng sách quyên góp của khối 6: Lớp 6A có 6 biểu tượng, 6B có 5 biểu tượng, 6C có 7 biểu tượng. Biết tổng số sách quyên góp của cả 3 lớp là $360$ cuốn. Hỏi mỗi biểu tượng đại diện cho bao nhiêu cuốn sách?",
    "options": [
      "$20\$ cuốn",
      "$18\$ cuốn",
      "$25\$ cuốn",
      "$15\$ cuốn"
    ],
    "correct_answer": "$20\$ cuốn",
    "hints": [
      "Tổng số biểu tượng: $6 + 5 + 7 = 18$ biểu tượng."
    ],
    "explanation_latex": "Tổng số biểu tượng: $6 + 5 + 7 = 18$. Mỗi biểu tượng đại diện cho: $360 : 18 = 20$ cuốn sách."
  },
  {
    "id": "Q09_b40_01",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Trong biểu đồ cột, độ cao của mỗi cột biểu thị:",
    "options": [
      "Số liệu của đối tượng tương ứng",
      "Tên của đối tượng",
      "Độ rộng của cột",
      "Màu sắc của cột"
    ],
    "correct_answer": "Số liệu của đối tượng tương ứng",
    "hints": [
      "Độ cao của cột tương ứng với giá trị dữ liệu."
    ],
    "explanation_latex": "Chiều cao của cột biểu diễn số liệu của đối tượng đó."
  },
  {
    "id": "Q09_b40_02",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Các cột trong biểu đồ cột cần có đặc điểm nào sau đây?",
    "options": [
      "Chiều rộng các cột bằng nhau và khoảng cách giữa các cột bằng nhau",
      "Chiều rộng cột nào cao thì phải vẽ rộng hơn",
      "Các cột phải dính sát vào nhau không có khoảng cách",
      "Mỗi cột có chiều rộng tùy ý"
    ],
    "correct_answer": "Chiều rộng các cột bằng nhau và khoảng cách giữa các cột bằng nhau",
    "hints": [
      "Quy tắc vẽ biểu đồ cột chuẩn."
    ],
    "explanation_latex": "Tất cả các cột có cùng chiều rộng và được cách đều nhau."
  },
  {
    "id": "Q09_b40_03",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Quan sát biểu đồ cột biểu diễn số điểm tốt của 4 bạn: An (8 điểm), Bình (12 điểm), Cúc (15 điểm), Dũng (10 điểm). Bạn nào đạt được nhiều điểm tốt nhất?",
    "options": [
      "Cúc",
      "Bình",
      "Dũng",
      "An"
    ],
    "correct_answer": "Cúc",
    "hints": [
      "Cột của bạn nào cao nhất?"
    ],
    "explanation_latex": "Cúc có 15 điểm tốt (cột cao nhất)."
  },
  {
    "id": "Q09_b40_04",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột biểu diễn số học sinh tham gia các câu lạc bộ: Bóng đá: 25 em, Bóng rổ: 18 em, Cờ vua: 12 em, Bơi lội: 20 em. Tổng số học sinh tham gia cả 4 câu lạc bộ là:",
    "options": [
      "$75\$ em",
      "$70\$ em",
      "$80\$ em",
      "$65\$ em"
    ],
    "correct_answer": "$75\$ em",
    "hints": [
      "Cộng tổng số học sinh các cột: $25 + 18 + 12 + 20$."
    ],
    "explanation_latex": "$25 + 18 + 12 + 20 = 75$ em."
  },
  {
    "id": "Q09_b40_05",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một biểu đồ cột thể hiện sản lượng lúa của một xã qua các năm: Năm 2021: $120$ tấn; Năm 2022: $150$ tấn; Năm 2023: $180$ tấn. Hỏi sản lượng lúa năm 2023 tăng bao nhiêu phần trăm so với năm 2021?",
    "options": [
      "$50\\%$",
      "$60\\%$",
      "$40\\%$",
      "$30\\%$"
    ],
    "correct_answer": "$50\\%$",
    "hints": [
      "Số tấn tăng thêm: $180 - 120 = 60$ tấn. Tính tỉ số phần trăm so với năm 2021: $\\frac{60}{120} \\times 100\\%$."
    ],
    "explanation_latex": "Mức tăng: $180 - 120 = 60$ tấn. Tỉ số phần trăm tăng: $\\frac{60}{120} \\times 100\\% = 50\\%$."
  },
  {
    "id": "Q09_b40_06",
    "chapter_id": "ch-09",
    "topic_id": "b40",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột biểu diễn kết quả xếp loại học tập cuối năm của 200 học sinh khối 6: Giỏi: 50 em; Khá: 90 em; Đạt: 50 em; Chưa đạt: 10 em. Tỉ lệ phần trăm học sinh đạt loại Giỏi và Khá so với cả khối là:",
    "options": [
      "$70\\%$",
      "$65\\%$",
      "$75\\%$",
      "$80\\%$"
    ],
    "correct_answer": "$70\\%$",
    "hints": [
      "Số học sinh Giỏi và Khá: $50 + 90 = 140$ em. Tỉ lệ: $\\frac{140}{200} \\times 100\\%$."
    ],
    "explanation_latex": "Tổng số học sinh Giỏi và Khá là $50 + 90 = 140$ em. Tỉ lệ phần trăm: $\\frac{140}{200} \\times 100\\% = 70\\%$."
  },
  {
    "id": "Q09_b41_01",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột kép thường được sử dụng khi nào?",
    "options": [
      "Khi cần so sánh từng cặp số liệu của hai đối tượng theo cùng tiêu chí",
      "Khi chỉ có một đối tượng duy nhất",
      "Khi cần biểu diễn nhiệt độ trong ngày",
      "Khi tính diện tích hình tròn"
    ],
    "correct_answer": "Khi cần so sánh từng cặp số liệu của hai đối tượng theo cùng tiêu chí",
    "hints": [
      "Tác dụng chính của biểu đồ cột kép."
    ],
    "explanation_latex": "Biểu đồ cột kép dùng để so sánh hai nhóm đối tượng theo các tiêu chí chung."
  },
  {
    "id": "Q09_b41_02",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Để phân biệt hai đối tượng trong biểu đồ cột kép, người ta thường dùng:",
    "options": [
      "Màu sắc hoặc hoa văn khác nhau cho hai cột và bảng chú giải",
      "Vẽ hai cột có chiều rộng khác nhau",
      "Vẽ một cột cao một cột thấp",
      "Không cần chú giải"
    ],
    "correct_answer": "Màu sắc hoặc hoa văn khác nhau cho hai cột và bảng chú giải",
    "hints": [
      "Quy chuẩn vẽ biểu đồ cột kép."
    ],
    "explanation_latex": "Sử dụng hai màu khác nhau kèm bảng chú thích để phân biệt."
  },
  {
    "id": "Q09_b41_03",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột kép so sánh số huy chương Vàng và Bạc của đoàn thể thao qua 3 năm: Năm 1: 15 Vàng, 12 Bạc; Năm 2: 20 Vàng, 18 Bạc; Năm 3: 18 Vàng, 22 Bạc. Năm nào đoàn giành được nhiều huy chương Vàng nhất?",
    "options": [
      "Năm 2",
      "Năm 1",
      "Năm 3",
      "Cả 3 năm bằng nhau"
    ],
    "correct_answer": "Năm 2",
    "hints": [
      "Quan sát cột huy chương Vàng cao nhất."
    ],
    "explanation_latex": "Năm 2 có 20 huy chương Vàng (nhiều nhất)."
  },
  {
    "id": "Q09_b41_04",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột kép biểu diễn số học sinh Nam và Nữ tham gia thi bơi của 3 trường A, B, C: Trường A: 12 Nam, 10 Nữ; Trường B: 15 Nam, 15 Nữ; Trường C: 8 Nam, 14 Nữ. Tổng số học sinh tham gia thi bơi của cả 3 trường là:",
    "options": [
      "$74\$ học sinh",
      "$65\$ học sinh",
      "$70\$ học sinh",
      "$80\$ học sinh"
    ],
    "correct_answer": "$74\$ học sinh",
    "hints": [
      "Tổng: $(12 + 10) + (15 + 15) + (8 + 14)$."
    ],
    "explanation_latex": "$22 + 30 + 22 = 74$ học sinh."
  },
  {
    "id": "Q09_b41_05",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột kép biểu diễn số cây trồng của lớp 6A và 6B trong 4 ngày: Ngày 1 (6A: 15, 6B: 12); Ngày 2 (6A: 18, 6B: 20); Ngày 3 (6A: 22, 6B: 16); Ngày 4 (6A: 20, 6B: 25). Tính hiệu số cây trồng được của cả 4 ngày giữa lớp trồng nhiều hơn và lớp trồng ít hơn:",
    "options": [
      "$2\$ cây",
      "$5\$ cây",
      "$4\$ cây",
      "$0\$ cây"
    ],
    "correct_answer": "$2\$ cây",
    "hints": [
      "Tổng cây lớp 6A: $15 + 18 + 22 + 20 = 75$. Tổng cây 6B: $12 + 20 + 16 + 25 = 73$."
    ],
    "explanation_latex": "Tổng cây lớp 6A: $75$ cây. Tổng cây lớp 6B: $73$ cây. Hiệu: $75 - 73 = 2$ cây."
  },
  {
    "id": "Q09_b41_06",
    "chapter_id": "ch-09",
    "topic_id": "b41",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Biểu đồ cột kép thể hiện điểm số trung bình môn Toán và Tiếng Anh của 4 tổ. Chênh lệch điểm trung bình giữa môn Toán và Tiếng Anh lớn nhất ở tổ nào, biết: Tổ 1 (Toán 8, Anh 7{,}5); Tổ 2 (Toán 9, Anh 7); Tổ 3 (Toán 7{,}5, Anh 8); Tổ 4 (Toán 8{,}5, Anh 8)?",
    "options": [
      "Tổ 2",
      "Tổ 1",
      "Tổ 3",
      "Tổ 4"
    ],
    "correct_answer": "Tổ 2",
    "hints": [
      "Tính hiệu điểm giữa hai môn của từng tổ: Tổ 1: 0,5; Tổ 2: 2,0; Tổ 3: 0,5; Tổ 4: 0,5."
    ],
    "explanation_latex": "Tổ 2 có mức chênh lệch lớn nhất: $9 - 7 = 2$ điểm."
  },
  {
    "id": "Q09_b42_01",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Gieo một con xúc xắc $6$ mặt cân đối một lần. Có tất cả bao nhiêu kết quả có thể xảy ra?",
    "options": [
      "$6$",
      "$1$",
      "$12$",
      "$3$"
    ],
    "correct_answer": "$6$",
    "hints": [
      "Các mặt xuất hiện từ 1 đến 6 chấm."
    ],
    "explanation_latex": "Có 6 kết quả có thể: xuất hiện mặt 1, 2, 3, 4, 5 hoặc 6 chấm."
  },
  {
    "id": "Q09_b42_02",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tung một đồng xu cân đối một lần. Sự kiện nào sau đây là sự kiện **chắc chắn**?",
    "options": [
      "Xuất hiện mặt Sấp hoặc mặt Ngửa",
      "Chắc chắn xuất hiện mặt Sấp",
      "Chắc chắn xuất hiện mặt Ngửa",
      "Đồng xu đứng thăng bằng trên cạnh"
    ],
    "correct_answer": "Xuất hiện mặt Sấp hoặc mặt Ngửa",
    "hints": [
      "Đồng xu chỉ có 2 mặt Sấp hoặc Ngửa."
    ],
    "explanation_latex": "Khi tung đồng xu, việc xuất hiện mặt Sấp hoặc mặt Ngửa là sự kiện chắc chắn xảy ra."
  },
  {
    "id": "Q09_b42_03",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Trong hộp có 3 quả bóng: 1 đỏ, 1 xanh, 1 vàng. Lấy ngẫu nhiên ra 1 quả bóng. Sự kiện nào sau đây là sự kiện **không thể**?",
    "options": [
      "Lấy được quả bóng màu tím",
      "Lấy được quả bóng màu đỏ",
      "Lấy được quả bóng màu xanh",
      "Lấy được quả bóng màu vàng"
    ],
    "correct_answer": "Lấy được quả bóng màu tím",
    "hints": [
      "Trong hộp không có quả bóng màu tím."
    ],
    "explanation_latex": "Vì trong hộp không có bóng màu tím nên đây là sự kiện không thể xảy ra."
  },
  {
    "id": "Q09_b42_04",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Gieo một con xúc xắc 6 mặt một lần. Có bao nhiêu kết quả thuận lợi cho sự kiện \"Số chấm xuất hiện là số lẻ\"?",
    "options": [
      "$3$ (mặt 1, 3, 5 chấm)",
      "$2$ (mặt 1, 3 chấm)",
      "$4$ (mặt 1, 3, 5, 6 chấm)",
      "$6$"
    ],
    "correct_answer": "$3$ (mặt 1, 3, 5 chấm)",
    "hints": [
      "Các số lẻ từ 1 đến 6 là 1, 3, 5."
    ],
    "explanation_latex": "Có 3 mặt có số chấm lẻ là: 1, 3, 5."
  },
  {
    "id": "Q09_b42_05",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Rút ngẫu nhiên một chiếc thẻ từ hộp chứa 10 chiếc thẻ ghi các số từ $1$ đến $10$. Có bao nhiêu kết quả thuận lợi cho sự kiện \"Số trên thẻ là số nguyên tố\"?",
    "options": [
      "$4$",
      "$5$",
      "$3$",
      "$6$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Các số nguyên tố từ 1 đến 10 là: 2, 3, 5, 7."
    ],
    "explanation_latex": "Có 4 số nguyên tố là $\\{2; 3; 5; 7\\}$."
  },
  {
    "id": "Q09_b42_06",
    "chapter_id": "ch-09",
    "topic_id": "b42",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Tung đồng thời hai đồng xu cân đối một lần. Có bao nhiêu kết quả có thể xảy ra?",
    "options": [
      "$4$",
      "$2$",
      "$3$",
      "$6$"
    ],
    "correct_answer": "$4$",
    "hints": [
      "Các kết quả: (Sấp, Sấp), (Sấp, Ngửa), (Ngửa, Sấp), (Ngửa, Ngửa)."
    ],
    "explanation_latex": "Có 4 kết quả có thể: SS, SN, NS, NN."
  },
  {
    "id": "Q09_b43_01",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Tung một đồng xu $20$ lần, thấy có $11$ lần xuất hiện mặt Sấp. Xác suất thực nghiệm xuất hiện mặt Sấp là:",
    "options": [
      "$\\frac{11}{20}$",
      "$\\frac{9}{20}$",
      "$\\frac{1}{2}$",
      "$\\frac{11}{9}$"
    ],
    "correct_answer": "$\\frac{11}{20}$",
    "hints": [
      "Xác suất thực nghiệm = Số lần sự kiện xảy ra chia cho tổng số lần thử."
    ],
    "explanation_latex": "Xác suất thực nghiệm xuất hiện mặt Sấp là $\\frac{11}{20}$."
  },
  {
    "id": "Q09_b43_02",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "EASY",
    "difficulty_label": "Nhận biết",
    "type": "single_choice",
    "content_latex": "Gieo một con xúc xắc $50$ lần, mặt $2$ chấm xuất hiện $8$ lần. Xác suất thực nghiệm xuất hiện mặt $2$ chấm là:",
    "options": [
      "$\\frac{4}{25}$",
      "$\\frac{8}{25}$",
      "$\\frac{1}{6}$",
      "$\\frac{21}{25}$"
    ],
    "correct_answer": "$\\frac{4}{25}$",
    "hints": [
      "Rút gọn phân số $\\frac{8}{50} = \\frac{4}{25}$."
    ],
    "explanation_latex": "$\\frac{8}{50} = \\frac{4}{25}$."
  },
  {
    "id": "Q09_b43_03",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Một xạ thủ bắn $100$ viên đạn, trong đó có $85$ viên trúng bia. Xác suất thực nghiệm để xạ thủ bắn **trượt** bia là:",
    "options": [
      "$15\\%$",
      "$85\\%$",
      "$10\\%$",
      "$20\\%$"
    ],
    "correct_answer": "$15\\%$",
    "hints": [
      "Số viên trượt là $100 - 85 = 15$."
    ],
    "explanation_latex": "Số lần trượt: $100 - 85 = 15$. Xác suất: $\\frac{15}{100} = 15\\%$."
  },
  {
    "id": "Q09_b43_04",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "MEDIUM",
    "difficulty_label": "Thông hiểu",
    "type": "single_choice",
    "content_latex": "Quay vòng quay may mắn có 4 ô bằng nhau gồm các màu Đỏ, Xanh, Vàng, Trắng $40$ lần. Kết quả kim chỉ vào ô màu Đỏ là $12$ lần. Xác suất thực nghiệm kim chỉ vào ô màu Đỏ là:",
    "options": [
      "$30\\%$",
      "$25\\%$",
      "$35\\%$",
      "$40\\%$"
    ],
    "correct_answer": "$30\\%$",
    "hints": [
      "$\\frac{12}{40} \\times 100\\%$."
    ],
    "explanation_latex": "$\\frac{12}{40} \\times 100\\% = 0{,}3 \\times 100\\% = 30\\%$."
  },
  {
    "id": "Q09_b43_05",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "HARD",
    "difficulty_label": "Vận dụng",
    "type": "single_choice",
    "content_latex": "Một hộp đựng các quả bóng xanh và bóng đỏ. Bạn Nam lấy ngẫu nhiên một quả bóng, ghi lại màu rồi trả lại hộp. Sau $120$ lần lấy bóng, thấy có $48$ lần lấy được bóng xanh. Xác suất thực nghiệm lấy được quả bóng đỏ là:",
    "options": [
      "$\\frac{3}{5}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
      "$\\frac{4}{5}$"
    ],
    "correct_answer": "$\\frac{3}{5}$",
    "hints": [
      "Số lần lấy bóng đỏ: $120 - 48 = 72$. Xác suất: $\\frac{72}{120}$."
    ],
    "explanation_latex": "Số lần bóng đỏ: $120 - 48 = 72$. Xác suất thực nghiệm: $\\frac{72}{120} = \\frac{3}{5}$ ($60\\%$)."
  },
  {
    "id": "Q09_b43_06",
    "chapter_id": "ch-09",
    "topic_id": "b43",
    "difficulty": "ADVANCED",
    "difficulty_label": "Vận dụng cao",
    "type": "single_choice",
    "content_latex": "Gieo một con xúc xắc $200$ lần, kết quả xuất hiện các mặt có số chấm chẵn (2, 4, 6) là $108$ lần. Dự đoán nếu gieo con xúc xắc đó $500$ lần thì mặt có số chấm chẵn sẽ xuất hiện khoảng bao nhiêu lần?",
    "options": [
      "$270\$ lần",
      "$250\$ lần",
      "$260\$ lần",
      "$280\$ lần"
    ],
    "correct_answer": "$270\$ lần",
    "hints": [
      "Xác suất thực nghiệm là $\\frac{108}{200} = 0{,}54$. Nhân với 500."
    ],
    "explanation_latex": "Xác suất thực nghiệm xuất hiện mặt chẵn: $\\frac{108}{200} = 0{,}54$. Khi gieo $500$ lần, số lần xuất hiện mặt chẵn ước tính là: $500 \\times 0{,}54 = 270$ lần."
  }
];
