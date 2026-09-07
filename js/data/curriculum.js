/**
 * MỤC LỤC CHƯƠNG TRÌNH SGK TOÁN 6 - BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * (NXB Giáo Dục Việt Nam - Tham chiếu từ toan6_tap1.md và toan6_tap2.md)
 * Gồm đầy đủ 9 Chương: Tập 1 (Chương I -> V) & Tập 2 (Chương VI -> IX)
 */

export const CURRICULUM = [
  {
    volume: 1,
    volumeTitle: "Tập 1 - Toán 6 Kết Nối Tri Thức",
    chapters: [
      {
        id: "ch-01",
        number: "Chương I",
        title: "Tập hợp các số tự nhiên",
        description: "Khái niệm tập hợp, ghi số tự nhiên, các phép toán cộng trừ nhân chia, lũy thừa và thứ tự thực hiện phép tính.",
        icon: "hash",
        badgeColor: "#3b82f6",
        lessons: [
          { id: "b01", title: "Bài 1. Tập hợp", tag: "Tập hợp & Phần tử" },
          { id: "b02", title: "Bài 2. Cách ghi số tự nhiên", tag: "Số La Mã & Hệ thập phân" },
          { id: "b03", title: "Bài 3. Thứ tự trong tập hợp các số tự nhiên", tag: "So sánh & Thứ tự" },
          { id: "b04", title: "Bài 4. Phép cộng và phép trừ số tự nhiên", tag: "Cộng & Trừ số tự nhiên" },
          { id: "b05", title: "Bài 5. Phép nhân và phép chia số tự nhiên", tag: "Nhân & Chia số tự nhiên" },
          { id: "b06", title: "Bài 6. Lũy thừa với số mũ tự nhiên", tag: "Lũy thừa & Nhân chia cùng cơ số" },
          { id: "b07", title: "Bài 7. Thứ tự thực hiện các phép tính", tag: "Quy tắc ngoặc & Phép tính" },
          { id: "lt01", title: "Luyện tập cuối Chương I", tag: "Ôn tập tổng hợp Chương I", isReview: true }
        ]
      },
      {
        id: "ch-02",
        number: "Chương II",
        title: "Tính chia hết trong tập hợp các số tự nhiên",
        description: "Quan hệ chia hết, dấu hiệu chia hết cho 2, 3, 5, 9, số nguyên tố, hợp số, ƯCLN và BCNN.",
        icon: "divide",
        badgeColor: "#8b5cf6",
        lessons: [
          { id: "b08", title: "Bài 8. Quan hệ chia hết và tính chất", tag: "Tính chất chia hết của một tổng" },
          { id: "b09", title: "Bài 9. Dấu hiệu chia hết", tag: "Dấu hiệu chia hết 2, 3, 5, 9" },
          { id: "b10", title: "Bài 10. Số nguyên tố", tag: "Số nguyên tố, Phân tích ra thừa số" },
          { id: "b11", title: "Bài 11. Ước chung. Ước chung lớn nhất", tag: "Tìm ƯCLN & Rút gọn" },
          { id: "b12", title: "Bài 12. Bội chung. Bội chung nhỏ nhất", tag: "Tìm BCNN & Ứng dụng" },
          { id: "lt02", title: "Luyện tập cuối Chương II", tag: "Ôn tập tổng hợp Chương II", isReview: true }
        ]
      },
      {
        id: "ch-03",
        number: "Chương III",
        title: "Số nguyên",
        description: "Tập hợp số nguyên, trục số, số đối, phép cộng trừ nhân chia số nguyên, quy tắc dấu ngoặc.",
        icon: "move-horizontal",
        badgeColor: "#06b6d4",
        lessons: [
          { id: "b13", title: "Bài 13. Tập hợp các số nguyên", tag: "Số nguyên âm, Số đối, Trục số" },
          { id: "b14", title: "Bài 14. Phép cộng và phép trừ số nguyên", tag: "Cộng trừ cùng dấu, khác dấu" },
          { id: "b15", title: "Bài 15. Quy tắc dấu ngoặc", tag: "Bỏ dấu ngoặc, Đổi dấu" },
          { id: "b16", title: "Bài 16. Phép nhân số nguyên", tag: "Nhân cùng dấu, khác dấu" },
          { id: "b17", title: "Bài 17. Phép chia hết. Ước và bội của một số nguyên", tag: "Bội và ước số nguyên" },
          { id: "lt03", title: "Luyện tập cuối Chương III", tag: "Ôn tập tổng hợp Chương III", isReview: true }
        ]
      },
      {
        id: "ch-04",
        number: "Chương IV",
        title: "Một số hình phẳng trong thực tiễn",
        description: "Tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân và công thức chu vi diện tích.",
        icon: "shapes",
        badgeColor: "#10b981",
        lessons: [
          { id: "b18", title: "Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều", tag: "Hình phẳng đều" },
          { id: "b19", title: "Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân", tag: "Các tứ giác quen thuộc" },
          { id: "b20", title: "Bài 20. Chu vi và diện tích của một số tứ giác đã học", tag: "Công thức Chu vi & Diện tích" },
          { id: "lt04", title: "Luyện tập cuối Chương IV", tag: "Ôn tập tổng hợp Chương IV", isReview: true }
        ]
      },
      {
        id: "ch-05",
        number: "Chương V",
        title: "Tính đối xứng của hình phẳng trong tự nhiên",
        description: "Trục đối xứng, tâm đối xứng, hình có trục đối xứng và tâm đối xứng trong đời sống, nghệ thuật và tự nhiên.",
        icon: "sparkles",
        badgeColor: "#ec4899",
        lessons: [
          { id: "b21", title: "Bài 21. Hình có trục đối xứng", tag: "Trục đối xứng" },
          { id: "b22", title: "Bài 22. Hình có tâm đối xứng", tag: "Tâm đối xứng" },
          { id: "lt05", title: "Luyện tập cuối Chương V", tag: "Ôn tập tổng hợp Chương V", isReview: true }
        ]
      }
    ]
  },
  {
    volume: 2,
    volumeTitle: "Tập 2 - Toán 6 Kết Nối Tri Thức",
    chapters: [
      {
        id: "ch-06",
        number: "Chương VI",
        title: "Phân số",
        description: "Mở rộng phân số, phân số bằng nhau, so sánh phân số, các phép toán cộng trừ nhân chia phân số và hai bài toán về phân số.",
        icon: "percent",
        badgeColor: "#f59e0b",
        lessons: [
          { id: "b23", title: "Bài 23. Mở rộng khái niệm phân số. Phân số bằng nhau", tag: "Định nghĩa & Tính chất cơ bản" },
          { id: "b24", title: "Bài 24. So sánh phân số. Hỗn số dương", tag: "Quy đồng mẫu & So sánh" },
          { id: "b25", title: "Bài 25. Phép cộng và phép trừ phân số", tag: "Cộng & Trừ phân số" },
          { id: "b26", title: "Bài 26. Phép nhân và phép chia phân số", tag: "Nhân & Chia phân số" },
          { id: "b27", title: "Bài 27. Hai bài toán về phân số", tag: "Tìm giá trị & Tìm một số" },
          { id: "lt06", title: "Luyện tập cuối Chương VI", tag: "Ôn tập tổng hợp Chương VI", isReview: true }
        ]
      },
      {
        id: "ch-07",
        number: "Chương VII",
        title: "Số thập phân",
        description: "Khái niệm số thập phân, các phép tính cộng trừ nhân chia số thập phân, làm tròn, ước lượng và bài toán tỉ số phần trăm.",
        icon: "calculator",
        badgeColor: "#0ea5e9",
        lessons: [
          { id: "b28", title: "Bài 28. Số thập phân", tag: "Số thập phân âm & dương" },
          { id: "b29", title: "Bài 29. Tính toán với số thập phân", tag: "Cộng trừ nhân chia số thập phân" },
          { id: "b30", title: "Bài 30. Làm tròn và ước lượng", tag: "Quy tắc làm tròn số" },
          { id: "b31", title: "Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm", tag: "Tỉ số & Tỉ số phần trăm" },
          { id: "lt07", title: "Luyện tập cuối Chương VII", tag: "Ôn tập tổng hợp Chương VII", isReview: true }
        ]
      },
      {
        id: "ch-08",
        number: "Chương VIII",
        title: "Những hình hình học cơ bản",
        description: "Điểm, đường thẳng, tia, đoạn thẳng, độ dài đoạn thẳng, trung điểm, khái niệm góc và số đo góc.",
        icon: "compass",
        badgeColor: "#14b8a6",
        lessons: [
          { id: "b32", title: "Bài 32. Điểm và đường thẳng", tag: "Điểm thuộc/không thuộc đường thẳng" },
          { id: "b33", title: "Bài 33. Điểm nằm giữa hai điểm. Tia", tag: "Hai tia đối nhau, Tia trùng nhau" },
          { id: "b34", title: "Bài 34. Đoạn thẳng. Độ dài đoạn thẳng", tag: "Đoạn thẳng & So sánh độ dài" },
          { id: "b35", title: "Bài 35. Trung điểm của đoạn thẳng", tag: "Trung điểm" },
          { id: "b36", title: "Bài 36. Góc", tag: "Đỉnh và cạnh của góc, Điểm trong góc" },
          { id: "b37", title: "Bài 37. Số đo góc", tag: "Góc nhọn, vuông, tù, bẹt" },
          { id: "lt08", title: "Luyện tập cuối Chương VIII", tag: "Ôn tập tổng hợp Chương VIII", isReview: true }
        ]
      },
      {
        id: "ch-09",
        number: "Chương IX",
        title: "Dữ liệu và xác suất thực nghiệm",
        description: "Thu thập và phân loại dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép và xác suất thực nghiệm.",
        icon: "bar-chart-3",
        badgeColor: "#f43f5e",
        lessons: [
          { id: "b38", title: "Bài 38. Dữ liệu và thu thập dữ liệu", tag: "Thu thập & Phân loại dữ liệu" },
          { id: "b39", title: "Bài 39. Bảng thống kê và biểu đồ tranh", tag: "Đọc & Vẽ biểu đồ tranh" },
          { id: "b40", title: "Bài 40. Biểu đồ cột", tag: "Biểu đồ cột đơn" },
          { id: "b41", title: "Bài 41. Biểu đồ cột kép", tag: "Biểu đồ cột kép so sánh" },
          { id: "b42", title: "Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm", tag: "Sự kiện chắc chắn, không thể, có thể" },
          { id: "b43", title: "Bài 43. Xác suất thực nghiệm", tag: "Công thức xác suất thực nghiệm" },
          { id: "lt09", title: "Luyện tập cuối Chương IX", tag: "Ôn tập tổng hợp Chương IX", isReview: true }
        ]
      }
    ]
  }
];
