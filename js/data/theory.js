/**
 * KHO DỮ LIỆU LÝ THUYẾT TRỌNG TÂM TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Tham chiếu trích xuất từ toan6_tap1.md và toan6_tap2.md
 * Định dạng: Tổng hợp lý thuyết theo từng Chương (trình bày theo từng Tab Chương liền mạch, chuẩn khung vàng SGK KNTT)
 */

export const THEORY_DATA = [
  // =========================================================================
  // CHƯƠNG I: TẬP HỢP CÁC SỐ TỰ NHIÊN
  // =========================================================================
  {
    chapterId: "ch-01",
    volume: 1,
    chapterNumber: "Chương I",
    chapterTitle: "Tập hợp các số tự nhiên",
    badgeColor: "#3b82f6",
    sections: [
      {
        title: "1. Khái niệm tập hợp & phần tử của tập hợp",
        boxedRule: `1. Một tập hợp (gọi tắt là tập) bao gồm những đối tượng nhất định. Các đối tượng đó được gọi là những **phần tử** của tập hợp.
2. Kí hiệu $x \\in A$ đọc là "$x$ thuộc $A$" hoặc "$x$ là phần tử của $A$".
3. Kí hiệu $y \\notin A$ đọc là "$y$ không thuộc $A$" hoặc "$y$ không là phần tử của $A$".
4. Để cho một tập hợp, thường có hai cách: **Liệt kê các phần tử** hoặc **Chỉ ra tính chất đặc trưng** cho các phần tử của tập hợp.`,
        notes: [
          "Mỗi phần tử chỉ được liệt kê một lần, thứ tự liệt kê tùy ý.",
          "Các phần tử trong dấu ngoặc nhọn $\\{ \\}$ được ngăn cách bởi dấu chấm phẩy \";\"."
        ],
        example: {
          problem: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x < 5\\}$. Viết tập hợp $A$ bằng cách liệt kê phần tử.",
          solution: "Các số tự nhiên nhỏ hơn 5 là $0; 1; 2; 3; 4$. Do đó ta viết: $A = \\{0; 1; 2; 3; 4\\}$."
        }
      },
      {
        title: "2. Cách ghi số tự nhiên & Hệ số La Mã",
        boxedRule: `1. Trong hệ thập phân, mỗi chữ số có giá trị phụ thuộc vào vị trí của nó trong số đó (mỗi hàng gấp 10 lần hàng liền sau nó).
2. Các chữ số La Mã cơ bản: $\\text{I} = 1, \\text{V} = 5, \\text{X} = 10, \\text{L} = 50, \\text{C} = 100$.
3. Khi ghép các chữ số La Mã: Chữ số có giá trị nhỏ đứng trước chữ số có giá trị lớn hơn có nghĩa là trừ ($\\text{IV} = 4, \\text{IX} = 9$), đứng sau có nghĩa là cộng ($\\text{VI} = 6, \\text{XI} = 11$).`,
        notes: [
          "Các chữ số $\$ I, X không được lặp lại quá 3 lần liên tiếp."
        ],
        example: {
          problem: "Viết số 24 và số 29 dưới dạng số La Mã.",
          solution: "$24 = 20 + 4 = \$ XXIV; $29 = 20 + 9 = \$ XXIX."
        }
      },
      {
        title: "3. Lũy thừa với số mũ tự nhiên",
        boxedRule: `1. Lũy thừa bậc $n$ của $a$ là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $a$:
$$a^n = \\underbrace{a \\cdot a \\dots a}_{n \\text{ thừa số}} \\quad (n \\in \\mathbb{N}^*)$$
Trong đó $a$ là **cơ số**, $n$ là **số mũ**.
2. Khi nhân hai lũy thừa cùng cơ số: $a^m \\cdot a^n = a^{m+n}$.
3. Khi chia hai lũy thừa cùng cơ số ($a \\neq 0, m \\ge n$): $a^m : a^n = a^{m-n}$.
4. Quy ước: $a^1 = a$ và $a^0 = 1$ ($a \\neq 0$).`,
        notes: [
          "$a^2$ gọi là \"$a$ bình phương\" hay \"bình phương của $a$\".",
          "$a^3$ gọi là \"$a$ lập phương\" hay \"lập phương của $a$\"."
        ],
        example: {
          problem: "Viết tích sau dưới dạng lũy thừa: $2^3 \\cdot 2^4 \\cdot 16$",
          solution: "Vì $16 = 2^4$ nên: $2^3 \\cdot 2^4 \\cdot 2^4 = 2^{3 + 4 + 4} = 2^{11}$."
        }
      },
      {
        title: "4. Thứ tự thực hiện các phép tính",
        boxedRule: `1. Biểu thức **không có dấu ngoặc**:
- Nếu chỉ có cộng, trừ hoặc chỉ có nhân, chia: thực hiện từ **trái sang phải**.
- Nếu có cả cộng, trừ, nhân, chia, lũy thừa: thực hiện **Lũy thừa $\\to$ Nhân và chia $\\to$ Cộng và trừ**.
2. Biểu thức **có dấu ngoặc**:
Thực hiện theo thứ tự: **(ngoặc tròn) $\\to$ [ngoặc vuông] $\\to$ {ngoặc nhọn}**.`,
        notes: [
          "Tính toán cẩn thận từng ngoặc từ trong ra ngoài để tránh nhầm dấu."
        ],
        example: {
          problem: "Tính: $A = 120 - [ 30 - (4 - 1)^2 ] : 3$",
          solution: "Ta có: $A = 120 - [ 30 - 3^2 ] : 3 = 120 - [ 30 - 9 ] : 3 = 120 - 21 : 3 = 120 - 7 = 113$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG II: TÍNH CHIA HẾT TRONG TẬP HỢP CÁC SỐ TỰ NHIÊN
  // =========================================================================
  {
    chapterId: "ch-02",
    volume: 1,
    chapterNumber: "Chương II",
    chapterTitle: "Tính chia hết trong tập hợp các số tự nhiên",
    badgeColor: "#8b5cf6",
    sections: [
      {
        title: "1. Quan hệ chia hết & tính chất chia hết của một tổng",
        boxedRule: `1. Cho $a, b \\in \\mathbb{N}$ ($b \\neq 0$). Nếu có số tự nhiên $q$ sao cho $a = b \\cdot q$ thì ta nói **$a$ chia hết cho $b$** (kí hiệu $a \\; \\vdots \\; b$). Khi đó $a$ là **bội** của $b$, còn $b$ là **ước** của $a$.
2. **Tính chất 1**: Nếu tất cả các số hạng của một tổng đều chia hết cho cùng một số thì tổng đó chia hết cho số đó:
$$a \\; \\vdots \\; m \\quad \\text{và} \\quad b \\; \\vdots \\; m \\implies (a + b) \\; \\vdots \\; m$$
3. **Tính chất 2**: Nếu có đúng một số hạng của tổng không chia hết cho một số, các số hạng khác đều chia hết cho số đó thì tổng không chia hết cho số đó:
$$a \\; \\vdots \\; m \\quad \\text{và} \\quad b \\; \\not\\vdots \\; m \\implies (a + b) \\; \\not\\vdots \\; m$$`,
        notes: [
          "Các tính chất trên cũng đúng đối với một hiệu ($a \\ge b$)."
        ],
        example: {
          problem: "Tổng $A = 120 + 36 + 15$ có chia hết cho 3 không?",
          solution: "Vì $120 \\; \\vdots \\; 3$, $36 \\; \\vdots \\; 3$, $15 \\; \\vdots \\; 3$ nên $A \\; \\vdots \\; 3$ theo tính chất chia hết của một tổng."
        }
      },
      {
        title: "2. Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9",
        boxedRule: `1. **Chia hết cho 2**: Các số có chữ số tận cùng là chữ số chẵn: $0; 2; 4; 6; 8$.
2. **Chia hết cho 5**: Các số có chữ số tận cùng là $0$ hoặc $5$.
3. **Chia hết cho 3**: Các số có **tổng các chữ số** chia hết cho 3.
4. **Chia hết cho 9**: Các số có **tổng các chữ số** chia hết cho 9.`,
        notes: [
          "Một số chia hết cho 9 thì chắc chắn chia hết cho 3, nhưng chia hết cho 3 chưa chắc chia hết cho 9."
        ],
        example: {
          problem: "Trong các số: $214; 345; 540$, số nào chia hết cho cả 2, 3 và 5?",
          solution: "Số $540$ có tận cùng là 0 nên chia hết cho cả 2 và 5. Tổng các chữ số: $5 + 4 + 0 = 9 \\; \\vdots \\; 3$. Vậy 540 chia hết cho cả 2, 3 và 5."
        }
      },
      {
        title: "3. Số nguyên tố, hợp số & phân tích ra thừa số nguyên tố",
        boxedRule: `1. **Số nguyên tố** là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.
2. **Hợp số** là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.
3. Số 0 và số 1 **không** là số nguyên tố, cũng **không** là hợp số.
4. Mọi hợp số đều phân tích được thành tích các thừa số nguyên tố (dưới dạng lũy thừa).`,
        notes: [
          "Số 2 là số nguyên tố chẵn duy nhất và cũng là số nguyên tố nhỏ nhất."
        ],
        example: {
          problem: "Phân tích số 60 ra thừa số nguyên tố.",
          solution: "$60 = 4 \\times 15 = 2^2 \\cdot 3 \\cdot 5$."
        }
      },
      {
        title: "4. Ước chung lớn nhất (ƯCLN) & Bội chung nhỏ nhất (BCNN)",
        boxedRule: `1. **ƯCLN**: Lấy tích các thừa số nguyên tố **chung** với số mũ **nhỏ nhất**.
2. **BCNN**: Lấy tích các thừa số nguyên tố **chung và riêng** với số mũ **lớn nhất**.
3. **Mối liên hệ quan trọng**: Với hai số $a$ và $b$:
$$a \\cdot b = ƯCLN(a, b) \\cdot BCNN(a, b)$$`,
        notes: [
          "Nếu ƯCLN(a, b) = 1 thì $a$ và $b$ gọi là hai số nguyên tố cùng nhau."
        ],
        example: {
          problem: "Tìm ƯCLN và BCNN của 12 và 18.",
          solution: "Ta có: $12 = 2^2 \\cdot 3$; $18 = 2 \\cdot 3^2$. Do đó ƯCLN(12, 18) = 2 \\cdot 3 = 6 và $BCNN(12, 18) = 2^2 \\cdot 3^2 = 36$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG III: SỐ NGUYÊN
  // =========================================================================
  {
    chapterId: "ch-03",
    volume: 1,
    chapterNumber: "Chương III",
    chapterTitle: "Số nguyên",
    badgeColor: "#06b6d4",
    sections: [
      {
        title: "1. Tập hợp các số nguyên & biểu diễn trên trục số",
        boxedRule: `1. Tập hợp số nguyên $\\mathbb{Z} = \\{\\dots; -3; -2; -1; 0; 1; 2; 3; \\dots\\}$, bao gồm các số nguyên âm, số 0 và các số nguyên dương.
2. Trên trục số nằm ngang, chiều từ trái sang phải là chiều dương. Điểm 0 gọi là gốc trục số. Các số nguyên âm nằm bên trái gốc 0, các số nguyên dương nằm bên phải gốc 0.
3. Hai số nguyên đối xứng nhau qua gốc 0 gọi là **hai số đối nhau** (số đối của số nguyên $a$ là $-a$).`,
        notes: [
          "Số 0 không là số nguyên dương, cũng không là số nguyên âm.",
          "Điểm biểu diễn số bé luôn nằm bên trái điểm biểu diễn số lớn trên trục số."
        ],
        example: {
          problem: "Tìm số đối của $-8$ và $15$. So sánh $-8$ và $0$.",
          solution: "Số đối của $-8$ là $8$; số đối của $15$ là $-15$. Vì $-8$ là số nguyên âm nên $-8 < 0$."
        }
      },
      {
        title: "2. Phép cộng, phép trừ số nguyên & quy tắc dấu ngoặc",
        boxedRule: `1. **Cộng cùng dấu**: $(-a) + (-b) = -(a + b)$ với $a, b > 0$.
2. **Cộng khác dấu**: Lấy số có phần tự nhiên lớn hơn trừ đi số có phần tự nhiên bé hơn rồi đặt trước hiệu dấu của số có phần tự nhiên lớn hơn.
3. **Phép trừ**: Muốn trừ số nguyên $a$ cho số nguyên $b$, ta cộng $a$ với số đối của $b$: $a - b = a + (-b)$.
4. **Quy tắc dấu ngoặc**:
- Khi bỏ dấu ngoặc có dấu \"+\" đằng trước: Giữ nguyên dấu các số hạng: $+(a - b + c) = a - b + c$.
- Khi bỏ dấu ngoặc có dấu \"-\" đằng trước: Đổi dấu tất cả các số hạng: $-(a - b + c) = -a + b - c$.`,
        notes: [
          "Hai số đối nhau có tổng bằng 0: $a + (-a) = 0$."
        ],
        example: {
          problem: "Tính: $(-15) + 20$ và $A = -(25 - 10) + 5$.",
          solution: "$(-15) + 20 = 20 - 15 = 5$. $A = -25 + 10 + 5 = -25 + 15 = -10$."
        }
      },
      {
        title: "3. Phép nhân, phép chia hết & quan hệ chia hết trong tập số nguyên",
        boxedRule: `1. **Quy tắc nhân**:
- Cùng dấu $\\implies$ kết quả dương: $(+) \\cdot (+) = (+)$ và $(-) \\cdot (-) = (+)$.
- Khác dấu $\\implies$ kết quả âm: $(+) \\cdot (-) = (-)$ và $(-) \\cdot (+) = (-)$.
2. **Quan hệ chia hết**: Cho $a, b \\in \\mathbb{Z}$ ($b \\neq 0$). Nếu có $q \\in \\mathbb{Z}$ sao cho $a = b \\cdot q$ thì $a$ chia hết cho $b$. Khi đó $a$ là **bội** của $b$, còn $b$ là **ước** của $a$.`,
        notes: [
          "Các ước của một số nguyên gồm cả ước nguyên dương và ước nguyên âm. Ví dụ: Ước của 4 là $\\{\\pm 1; \\pm 2; \\pm 4\\}$."
        ],
        example: {
          problem: "Tính: $(-4) \\cdot (-25)$ và tìm các ước của $-6$.",
          solution: "$(-4) \\cdot (-25) = 100$. Các ước của $-6$ là: $\\{\\pm 1; \\pm 2; \\pm 3; \\pm 6\\}$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG IV: MỘT SỐ HÌNH PHẲNG TRONG THỰC TIỄN
  // =========================================================================
  {
    chapterId: "ch-04",
    volume: 1,
    chapterNumber: "Chương IV",
    chapterTitle: "Một số hình phẳng trong thực tiễn",
    badgeColor: "#10b981",
    sections: [
      {
        title: "1. Tam giác đều, hình vuông, lục giác đều",
        boxedRule: `1. **Tam giác đều**: 3 cạnh bằng nhau, 3 góc bằng nhau và bằng $60^\\circ$. Chu vi: $C = 3a$.
2. **Hình vuông**: 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau và vuông góc tại trung điểm. Chu vi: $C = 4a$, Diện tích: $S = a^2$.
3. **Lục giác đều**: 6 cạnh bằng nhau, 6 góc bằng nhau, 3 đường chéo chính bằng nhau và cắt nhau tại tâm $O$. Chu vi: $C = 6a$.`,
        notes: [
          "Lục giác đều được ghép từ 6 tam giác đều bằng nhau chung đỉnh tâm $O$."
        ],
        example: {
          problem: "Tính chu vi hình vuông có diện tích bằng $36\\text{ cm}^2$.",
          solution: "Vì $S = a^2 = 36$ nên cạnh $a = 6\$ cm. Chu vi là: $C = 4a = 4 \\times 6 = 24\$ cm."
        }
      },
      {
        title: "2. Hình chữ nhật, hình thoi, hình bình hành, hình thang cân",
        boxedRule: `1. **Hình chữ nhật**: Chu vi $C = 2(a + b)$, Diện tích $S = a \\cdot b$.
2. **Hình thoi**: 4 cạnh bằng nhau, 2 đường chéo vuông góc tại trung điểm. Chu vi: $C = 4a$, Diện tích: $S = \\frac{1}{2} m \\cdot n$ ($m, n$ là độ dài hai đường chéo).
3. **Hình bình hành**: Các cạnh đối song song và bằng nhau. Chu vi: $C = 2(a + b)$, Diện tích: $S = a \\cdot h$ ($h$ là chiều cao ứng với đáy $a$).
4. **Hình thang cân**: Hai cạnh bên bằng nhau, hai đường chéo bằng nhau. Chu vi: $C = a + b + 2c$, Diện tích: $S = \\frac{(a + b) \\cdot h}{2}$.`,
        notes: [
          "Khi tính chu vi và diện tích, luôn phải quy đổi tất cả các kích thước về cùng một đơn vị đo."
        ],
        example: {
          problem: "Hình thoi có hai đường chéo $m = 12\\text{ cm}, n = 16\$ cm. Tính diện tích của hình thoi.",
          solution: "Diện tích hình thoi là: $S = \\frac{1}{2} \\cdot 12 \\cdot 16 = 96\\text{ cm}^2$."
        }
      },
      {
        title: "3. Chu vi và diện tích các hình phẳng trong thực tiễn",
        boxedRule: `1. Để tính diện tích của một hình phức tạp trong thực tế, ta thường chia hình đó thành các hình cơ bản đã biết công thức (hình chữ nhật, hình vuông, hình thang, hình tam giác) rồi cộng các diện tích lại với nhau.
2. Hoặc tính diện tích của một hình lớn bao quanh rồi trừ đi diện tích các phần khuyết.`,
        notes: [
          "Chu vi là độ dài đường bao quanh hình, không tính các đường nét ngăn bên trong."
        ],
        example: {
          problem: "Một mảnh vườn hình chữ nhật dài 15 m, rộng 8 m. Người ta làm lối đi xung quanh rộng 1 m. Tính diện tích phần đất trồng hoa còn lại.",
          solution: "Chiều dài phần trồng hoa: $15 - 2 = 13\$ m. Chiều rộng phần trồng hoa: $8 - 2 = 6\$ m. Diện tích trồng hoa: $13 \\times 6 = 78\\text{ m}^2$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG V: TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG
  // =========================================================================
  {
    chapterId: "ch-05",
    volume: 1,
    chapterNumber: "Chương V",
    chapterTitle: "Tính đối xứng của hình phẳng trong tự nhiên",
    badgeColor: "#ec4899",
    sections: [
      {
        title: "1. Hình có trục đối xứng & hình có tâm đối xứng",
        boxedRule: `1. **Hình có trục đối xứng**: Đường thẳng $d$ là trục đối xứng của hình $H$ nếu khi gấp hình theo đường thẳng $d$, hai phần của hình trùng khít lên nhau.
2. **Hình có tâm đối xứng**: Điểm $O$ là tâm đối xứng của hình $H$ nếu khi quay hình $H$ nửa vòng quanh $O$ (quay $180^\\circ$), hình thu được trùng khít với hình ban đầu.`,
        notes: [
          "Hình tròn có vô số trục đối xứng và có tâm đối xứng chính là tâm của đường tròn.",
          "Tam giác đều có 3 trục đối xứng nhưng KHÔNG có tâm đối xứng.",
          "Hình chữ nhật, hình thoi, hình vuông vừa có trục đối xứng vừa có tâm đối xứng."
        ],
        example: {
          problem: "Trong các chữ cái H, O, A, N, chữ cái nào vừa có trục đối xứng vừa có tâm đối xứng?",
          solution: "Chữ cái H và chữ cái O vừa có trục đối xứng vừa có tâm đối xứng."
        }
      },
      {
        title: "2. Vai trò của tính đối xứng trong tự nhiên và thiết kế",
        boxedRule: `Tính đối xứng tạo nên vẻ đẹp cân đối, hài hòa, vững chắc và hoàn thiện trong thế giới tự nhiên (cánh hoa, cánh bướm, bông tuyết) cũng như trong các công trình kiến trúc, hội họa, công nghệ và đời sống hàng ngày.`,
        notes: [
          "Các biển báo giao thông thường áp dụng tính đối xứng để tăng khả năng nhận diện từ xa."
        ],
        example: {
          problem: "Hình bông tuyết 6 cánh là hình có trục đối xứng hay tâm đối xứng?",
          solution: "Hình bông tuyết 6 cánh vừa có 6 trục đối xứng vừa có tâm đối xứng tại chính tâm bông tuyết."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG VI: PHÂN SỐ
  // =========================================================================
  {
    chapterId: "ch-06",
    volume: 2,
    chapterNumber: "Chương VI",
    chapterTitle: "Phân số",
    badgeColor: "#f59e0b",
    sections: [
      {
        title: "1. Khái niệm phân số, phân số bằng nhau & rút gọn phân số",
        boxedRule: `1. Dạng tổng quát: $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$, $a$ là **tử số**, $b$ là **mẫu số**.
2. **Hai phân số bằng nhau**:
$$\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c$$
3. **Tính chất cơ bản**: Nhân hoặc chia cả tử và mẫu với cùng một số nguyên khác 0 ta được phân số mới bằng phân số đã cho.
4. **Rút gọn phân số**: Chia cả tử và mẫu cho một ước chung lớn hơn 1 (hoặc ƯCLN của chúng) để được phân số tối giản.`,
        notes: [
          "Phân số tối giản là phân số mà tử và mẫu chỉ có ước chung là 1 và -1.",
          "Mẫu số của phân số luôn có thể đổi thành số nguyên dương bằng cách nhân cả tử và mẫu với -1."
        ],
        example: {
          problem: "Rút gọn phân số $\\frac{18}{24}$ về tối giản.",
          solution: "Ta có ƯCLN(18, 24) = 6. Chia cả tử và mẫu cho 6: $\\frac{18 : 6}{24 : 6} = \\frac{3}{4}$."
        }
      },
      {
        title: "2. So sánh phân số & quy đồng mẫu nhiều phân số",
        boxedRule: `1. **Quy đồng mẫu**: Tìm mẫu chung (thường là BCNN của các mẫu dương), sau đó nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng.
2. **So sánh hai phân số**:
- Cùng mẫu dương: Phân số nào có tử lớn hơn thì phân số đó lớn hơn.
- Khác mẫu: Quy đồng về cùng một mẫu dương rồi so sánh các tử.
- Phân số có tử và mẫu cùng dấu thì lớn hơn 0; khác dấu thì nhỏ hơn 0.`,
        notes: [
          "Khi so sánh, có thể dùng số 0 hoặc số 1 làm số trung gian."
        ],
        example: {
          problem: "So sánh $\\frac{-3}{4}$ và $\\frac{-4}{5}$.",
          solution: "Mẫu chung là 20. Ta có: $\\frac{-3}{4} = \\frac{-15}{20}$; $\\frac{-4}{5} = \\frac{-16}{20}$. Vì $-15 > -16$ nên $\\frac{-3}{4} > \\frac{-4}{5}$."
        }
      },
      {
        title: "3. Các phép toán cộng, trừ, nhân, chia phân số",
        boxedRule: `1. **Cộng, trừ cùng mẫu**: $\\frac{a}{m} \\pm \\frac{b}{m} = \\frac{a \\pm b}{m}$. Khác mẫu: quy đồng rồi thực hiện.
2. **Phép nhân**: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$.
3. **Phép chia**: $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$ ($c \\neq 0$).`,
        notes: [
          "Số nghịch đảo của $\\frac{a}{b}$ ($a, b \\neq 0$) là $\\frac{b}{a}$. Tích của hai số nghịch đảo bằng 1.",
          "Áp dụng tính chất kết hợp, giao hoán và phân phối của phép nhân đối với phép cộng để tính nhanh."
        ],
        example: {
          problem: "Tính: $\\frac{-2}{5} + \\frac{3}{10}$ và $\\frac{4}{7} : \\frac{8}{21}$.",
          solution: "$\\frac{-2}{5} + \\frac{3}{10} = \\frac{-4 + 3}{10} = \\frac{-1}{10}$. $\\frac{4}{7} : \\frac{8}{21} = \\frac{4}{7} \\cdot \\frac{21}{8} = \\frac{1 \\cdot 3}{1 \\cdot 2} = \\frac{3}{2}$."
        }
      },
      {
        title: "4. Hai bài toán cơ bản về phân số",
        boxedRule: `1. **Bài toán 1 (Tìm giá trị phân số của một số)**:
Muốn tìm $\\frac{m}{n}$ của số $a$ cho trước, ta lấy $a$ nhân với $\\frac{m}{n}$:
$$b = a \\cdot \\frac{m}{n}$$
2. **Bài toán 2 (Tìm một số khi biết giá trị phân số)**:
Muốn tìm một số biết $\\frac{m}{n}$ của nó bằng $b$, ta lấy $b$ chia cho $\\frac{m}{n}$:
$$a = b : \\frac{m}{n}$$`,
        notes: [
          "Mẹo phân biệt: Đề bài cho \"của số...\" $\\implies$ làm phép nhân; đề bài cho \"biết... của nó là...\" $\\implies$ làm phép chia."
        ],
        example: {
          problem: "a) Tìm $\\frac{3}{4}$ của 60. b) Tìm một số biết $\\frac{2}{3}$ của nó bằng 20.",
          solution: "a) Giá trị là: $60 \\cdot \\frac{3}{4} = 45$. b) Số cần tìm là: $20 : \\frac{2}{3} = 20 \\cdot \\frac{3}{2} = 30$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG VII: SỐ THẬP PHÂN
  // =========================================================================
  {
    chapterId: "ch-07",
    volume: 2,
    chapterNumber: "Chương VII",
    chapterTitle: "Số thập phân",
    badgeColor: "#0ea5e9",
    sections: [
      {
        title: "1. Số thập phân, cấu tạo & so sánh số thập phân",
        boxedRule: `1. Phân số thập phân là phân số có mẫu là lũy thừa của 10 ($10, 100, 1000, \\dots$).
2. Số thập phân gồm hai phần: **phần nguyên** viết bên trái dấu phẩy và **phần thập phân** viết bên phải dấu phẩy.
3. **So sánh**:
- Số thập phân dương luôn lớn hơn 0 và lớn hơn số thập phân âm.
- Giữa hai số thập phân dương: so sánh phần nguyên trước; nếu phần nguyên bằng nhau thì so sánh lần lượt các hàng phần mười, phần trăm, phần nghìn...`,
        notes: [
          "Số đối của số thập phân $x$ là số thập phân $-x$."
        ],
        example: {
          problem: "Viết phân số $\\frac{-15}{100}$ dưới dạng số thập phân và so sánh $-0{,}15$ với $-0{,}2$.",
          solution: "$\\frac{-15}{100} = -0{,}15$. Vì $0{,}15 < 0{,}2$ nên $-0{,}15 > -0{,}2$."
        }
      },
      {
        title: "2. Các phép tính với số thập phân, làm tròn & ước lượng",
        boxedRule: `1. **Các phép tính**: Thực hiện tương tự như phép tính số nguyên, chú ý đặt dấu phẩy thẳng hàng khi cộng trừ, và đếm tổng số chữ số phần thập phân khi nhân.
2. **Quy tắc làm tròn**: Nhìn vào chữ số ngay sau hàng làm tròn:
- Nếu chữ số đó $< 5$: Giữ nguyên chữ số hàng làm tròn.
- Nếu chữ số đó $\\ge 5$: Tăng chữ số hàng làm tròn thêm 1 đơn vị.`,
        notes: [
          "Ước lượng kết quả bằng cách làm tròn các số hạng trước khi tính nhẩm."
        ],
        example: {
          problem: "Làm tròn số $78{,}463$ đến hàng phần trăm.",
          solution: "Chữ số hàng phần trăm là 6, chữ số ngay sau là 3 (< 5). Làm tròn thành: $78{,}46$."
        }
      },
      {
        title: "3. Tỉ số và tỉ số phần trăm",
        boxedRule: `1. **Tỉ số** của hai số $a$ và $b$ ($b \\neq 0$) là thương trong phép chia $a$ cho $b$, kí hiệu $\\frac{a}{b}$ hoặc $a : b$.
2. **Tỉ số phần trăm** của hai số $a$ và $b$:
$$\\frac{a \\cdot 100}{b}\\%$$
3. Để tìm $p\\%$ của số $a$, ta tính: $a \\cdot \\frac{p}{100}$.`,
        notes: [
          "Khi tính tỉ số của hai đại lượng, hai đại lượng đó phải cùng đơn vị đo."
        ],
        example: {
          problem: "Lớp 6A có 40 học sinh, trong đó có 24 học sinh nữ. Tính tỉ số phần trăm học sinh nữ của lớp.",
          solution: "Tỉ số phần trăm là: $\\frac{24 \\cdot 100}{40}\\% = 60\\%$."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG VIII: NHỮNG HÌNH HÌNH HỌC CƠ BẢN
  // =========================================================================
  {
    chapterId: "ch-08",
    volume: 2,
    chapterNumber: "Chương VIII",
    chapterTitle: "Những hình hình học cơ bản",
    badgeColor: "#14b8a6",
    sections: [
      {
        title: "1. Điểm, đường thẳng, tia, đoạn thẳng & trung điểm",
        boxedRule: `1. **Đường thẳng**: Không bị giới hạn về hai phía. Qua hai điểm phân biệt có một và chỉ một đường thẳng.
2. **Tia**: Hình gồm điểm $O$ và một phần đường thẳng bị chia ra bởi điểm $O$ gọi là tia gốc $O$. Hai tia chung gốc tạo thành đường thẳng gọi là hai tia đối nhau.
3. **Đoạn thẳng**: Đoạn thẳng $AB$ là hình gồm hai điểm $A, B$ và tất cả các điểm nằm giữa $A$ và $B$.
4. **Trung điểm**: Trung điểm $M$ của đoạn thẳng $AB$ là điểm nằm giữa $A, B$ và cách đều $A, B$:
$$AM = MB = \\frac{AB}{2}$$`,
        notes: [
          "Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì $AM + MB = AB$."
        ],
        example: {
          problem: "Cho đoạn thẳng $AB = 10\$ cm. Điểm $M$ là trung điểm của $AB$. Tính độ dài đoạn thẳng $AM$.",
          solution: "Vì $M$ là trung điểm của $AB$ nên: $AM = \\frac{AB}{2} = \\frac{10}{2} = 5\$ cm."
        }
      },
      {
        title: "2. Góc, các loại góc & số đo góc",
        boxedRule: `1. **Góc** là hình gồm hai tia chung gốc. Gốc chung là **đỉnh** của góc, hai tia là hai **cạnh** của góc.
2. **Phân loại góc theo số đo**:
- **Góc nhọn**: $0^\\circ < \\alpha < 90^\\circ$
- **Góc vuông**: $\\alpha = 90^\\circ$
- **Góc tù**: $90^\\circ < \\alpha < 180^\\circ$
- **Góc bẹt**: $\\alpha = 180^\\circ$ (hai cạnh của góc bẹt là hai tia đối nhau).`,
        notes: [
          "Góc vuông thường được kí hiệu bằng dấu vuông nhỏ ở đỉnh.",
          "Mỗi góc có một số đo, số đo của góc bẹt là $180^\\circ$."
        ],
        example: {
          problem: "Cho góc $\\widehat{xOy} = 135^\\circ$. Góc này thuộc loại góc nào?",
          solution: "Vì $90^\\circ < 135^\\circ < 180^\\circ$ nên $\\widehat{xOy}$ là góc tù."
        }
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG IX: DỮ LIỆU VÀ XÁC SUẤT THỰC NGHIỆM
  // =========================================================================
  {
    chapterId: "ch-09",
    volume: 2,
    chapterNumber: "Chương IX",
    chapterTitle: "Dữ liệu và xác suất thực nghiệm",
    badgeColor: "#f43f5e",
    sections: [
      {
        title: "1. Dữ liệu, biểu đồ tranh, biểu đồ cột & cột kép",
        boxedRule: `1. **Dữ liệu**: Là các thông tin thu thập được (số liệu hoặc danh sách phân loại). Dữ liệu là số gọi là số liệu.
2. **Biểu đồ tranh**: Dùng các biểu tượng hoặc hình ảnh để thể hiện số lượng dữ liệu. Mỗi biểu tượng ứng với một số lượng đơn vị cụ thể.
3. **Biểu đồ cột / cột kép**: Dùng các cột chữ nhật rời nhau có cùng chiều rộng để biểu diễn dữ liệu. Biểu đồ cột kép dùng để so sánh hai dãy dữ liệu cùng loại của các đối tượng.`,
        notes: [
          "Khi đọc biểu đồ tranh, bắt buộc phải nhìn vào chú giải ở dưới cùng để biết 1 hình tương ứng với bao nhiêu đối tượng."
        ],
        example: {
          problem: "Trong biểu đồ tranh, mỗi biểu tượng 🚗 đại diện cho 10 chiếc ô tô. Nếu một ngày bán được 4 biểu tượng 🚗 thì số ô tô bán được là bao nhiêu?",
          solution: "Số ô tô bán được là: $4 \\times 10 = 40$ chiếc ô tô."
        }
      },
      {
        title: "2. Kết quả có thể và xác suất thực nghiệm",
        boxedRule: `1. Khi thực hiện một phép thử (tung đồng xu, gieo xúc xắc), một kết quả có thể xảy ra gọi là một biến cố (sự kiện).
2. **Xác suất thực nghiệm** của một sự kiện $E$ khi thực hiện $n$ lần thử nghiệm là tỉ số giữa số lần sự kiện $E$ xảy ra ($k$) và tổng số lần thực hiện thử nghiệm ($n$):
$$P(E) = \\frac{k}{n}$$`,
        notes: [
          "Xác suất thực nghiệm luôn có giá trị từ 0 đến 1 (hoặc từ $0\\%$ đến $100\\%$).",
          "Số lần thử nghiệm càng lớn thì xác suất thực nghiệm càng tiến gần đến xác suất lý thuyết."
        ],
        example: {
          problem: "Gieo một con xúc xắc 6 mặt 30 lần, thấy có 6 lần xuất hiện mặt 5 chấm. Tính xác suất thực nghiệm xuất hiện mặt 5 chấm.",
          solution: "Xác suất thực nghiệm là: $P = \\frac{6}{30} = \\frac{1}{5} = 20\\%$."
        }
      }
    ]
  }
];
