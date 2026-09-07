/**
 * BỘ ĐỀ THI CHUẨN TOÁN 6 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Danh mục đề thi bám sát ma trận Bộ GD&ĐT cho 34 Tỉnh Thành phố lớn trên toàn quốc
 * Hỗ trợ 2 Format chuẩn theo context.md:
 * - Format 1: 30 câu trắc nghiệm / 45 phút
 * - Format 2: 40 câu trắc nghiệm / 60 phút
 */

export const EXAM_FORMATS = {
  FORMAT_45MIN: {
    id: "f30_45",
    name: "30 câu / 45 phút",
    questionCount: 30,
    durationMinutes: 45,
    matrix: { EASY: 12, MEDIUM: 10, HARD: 6, ADVANCED: 2 }
  },
  FORMAT_60MIN: {
    id: "f40_60",
    name: "40 câu / 60 phút",
    questionCount: 40,
    durationMinutes: 60,
    matrix: { EASY: 16, MEDIUM: 14, HARD: 7, ADVANCED: 3 }
  }
};

export const PROVINCES = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "Nghệ An",
  "Thanh Hóa",
  "Nam Định",
  "Thái Bình",
  "Thừa Thiên Huế",
  "Quảng Ninh",
  "Bắc Ninh",
  "Hải Dương",
  "Hưng Yên",
  "Ninh Bình",
  "Vĩnh Phúc",
  "Phú Thọ",
  "Thái Nguyên",
  "Quảng Nam",
  "Quảng Ngãi",
  "Bình Định",
  "Khánh Hòa",
  "Lâm Đồng",
  "Đắk Lắk",
  "Gia Lai",
  "Bình Dương",
  "Đồng Nai",
  "Bà Rịa - Vũng Tàu",
  "Long An",
  "Tiền Giang",
  "Bến Tre",
  "An Giang",
  "Kiên Giang",
  "Cà Mau"
];

function createSlug(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Danh mục các kì thi chuẩn
const EXAM_PERIODS = [
  {
    period: "GK1",
    periodName: "GK1",
    scope: ["ch-01", "ch-02", "ch-04"],
    subtitle: "Phạm vi: Chương I, II & IV (Số tự nhiên, Chia hết & Hình thực tiễn)"
  },
  {
    period: "CK1",
    periodName: "CK1",
    scope: ["ch-01", "ch-02", "ch-03", "ch-04", "ch-05"],
    subtitle: "Phạm vi: Toàn bộ Học kì 1 (Chương I đến Chương V)"
  },
  {
    period: "GK2",
    periodName: "GK2",
    scope: ["ch-06", "ch-07", "ch-08"],
    subtitle: "Phạm vi: Chương VI, VII & VIII (Phân số, Số thập phân & Hình cơ bản)"
  },
  {
    period: "CK2",
    periodName: "CK2",
    scope: ["ch-06", "ch-07", "ch-08", "ch-09"],
    subtitle: "Phạm vi: Toàn bộ Học kì 2 & Trọng tâm cả năm (Chương VI - IX)"
  }
];

// Sinh danh mục đề thi thử cho 34 tỉnh thành
const generatedProvincialExams = [];

PROVINCES.forEach(province => {
  const pSlug = createSlug(province);
  EXAM_PERIODS.forEach(ep => {
    generatedProvincialExams.push({
      id: `exam-${pSlug}-${ep.period.toLowerCase()}`,
      title: `Đề thi thử ${ep.period} - ${province}`,
      subtitle: ep.subtitle,
      province: province,
      period: ep.period,
      periodName: ep.periodName,
      scope: ep.scope
    });
  });
});

// Các đề thi thử chuẩn quốc gia
const NATIONAL_EXAMS = [
  {
    id: "exam-national-gk1",
    title: "Đề thi thử GK1 - Toàn Quốc",
    subtitle: "Phạm vi: Chương I, II & IV (Số tự nhiên, Chia hết & Hình thực tiễn)",
    province: "Toàn quốc",
    period: "GK1",
    periodName: "GK1",
    scope: ["ch-01", "ch-02", "ch-04"]
  },
  {
    id: "exam-national-ck1",
    title: "Đề thi thử CK1 - Toàn Quốc",
    subtitle: "Phạm vi: Toàn bộ Học kì 1 (Chương I đến Chương V)",
    province: "Toàn quốc",
    period: "CK1",
    periodName: "CK1",
    scope: ["ch-01", "ch-02", "ch-03", "ch-04", "ch-05"]
  },
  {
    id: "exam-national-gk2",
    title: "Đề thi thử GK2 - Toàn Quốc",
    subtitle: "Phạm vi: Chương VI, VII & VIII (Phân số, Số thập phân & Hình cơ bản)",
    province: "Toàn quốc",
    period: "GK2",
    periodName: "GK2",
    scope: ["ch-06", "ch-07", "ch-08"]
  },
  {
    id: "exam-national-ck2",
    title: "Đề thi thử CK2 - Toàn Quốc",
    subtitle: "Phạm vi: Toàn bộ Học kì 2 & Trọng tâm cả năm (Chương VI - IX)",
    province: "Toàn quốc",
    period: "CK2",
    periodName: "CK2",
    scope: ["ch-06", "ch-07", "ch-08", "ch-09"]
  }
];

export const EXAM_SUITES = [
  ...NATIONAL_EXAMS,
  ...generatedProvincialExams
];
