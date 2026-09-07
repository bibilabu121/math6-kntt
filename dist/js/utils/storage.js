/**
 * QUẢN LÝ LỊCH SỬ HỌC TẬP, KẾT QUẢ THI & XẾP LOẠI 5 MỨC (LOCALSTORAGE)
 * Hỗ trợ tra cứu điểm cao nhất và lịch sử riêng biệt cho từng bài
 */

const STORAGE_KEY = "math6_learning_history";

/**
 * Phân loại xếp loại 5 mức theo yêu cầu:
 * Áp dụng cho bài có >= 20 câu (ôn cuối chương 20 câu, đề 30 câu, đề 40 câu):
 * - Không đạt: điểm < 5.0
 * - Trung bình: 5.0 <= điểm < 7.0
 * - Khá: 7.0 <= điểm < 8.0
 * - Giỏi: 8.0 <= điểm < 9.5
 * - Xuất sắc: 9.5 <= điểm <= 10.0
 * Bài < 20 câu: trả về null (không xếp loại danh hiệu này).
 */
export function calculateGradeStatus(score, totalQuestions) {
  if (!totalQuestions || totalQuestions < 20) return null;

  const s = parseFloat(score);
  if (isNaN(s)) return null;

  if (s < 5.0) {
    return {
      label: "Không đạt",
      gradeStatus: "Không đạt",
      badgeClass: "grade-failed",
      gradeClass: "grade-failed",
      color: "#ef4444",
      icon: "alert-circle"
    };
  }
  if (s < 7.0) {
    return {
      label: "Trung bình",
      gradeStatus: "Trung bình",
      badgeClass: "grade-average",
      gradeClass: "grade-average",
      color: "#f59e0b",
      icon: "help-circle"
    };
  }
  if (s < 8.0) {
    return {
      label: "Khá",
      gradeStatus: "Khá",
      badgeClass: "grade-good",
      gradeClass: "grade-good",
      color: "#3b82f6",
      icon: "award"
    };
  }
  if (s < 9.5) {
    return {
      label: "Giỏi",
      gradeStatus: "Giỏi",
      badgeClass: "grade-verygood",
      gradeClass: "grade-verygood",
      color: "#10b981",
      icon: "check-circle"
    };
  }
  return {
    label: "Xuất sắc",
    gradeStatus: "Xuất sắc",
    badgeClass: "grade-excellent",
    gradeClass: "grade-excellent",
    color: "#ec4899",
    icon: "sparkles"
  };
}

export function getLearningHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load learning history:", e);
    return [];
  }
}

export function saveLearningRecord(record) {
  try {
    const history = getLearningHistory();
    const grade = calculateGradeStatus(record.score, record.totalQuestions);

    const item = {
      id: "REC_" + Date.now(),
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString("vi-VN"),
      title: record.title || "Bài luyện tập",
      mode: record.mode || "practice", // 'practice' | 'exam'
      score: record.score || "0.00",
      correctCount: record.correctCount || 0,
      totalQuestions: record.totalQuestions || 0,
      durationSeconds: record.durationSeconds || 0,
      topicId: record.topicId || null,
      chapterId: record.chapterId || null,
      suiteId: record.suiteId || null,
      gradeStatus: grade ? grade.label : null,
      gradeClass: grade ? grade.badgeClass : null,
      bloomStats: record.bloomStats || null
    };

    history.unshift(item); // Thêm lên đầu danh sách
    // Giữ tối đa 80 bản ghi gần nhất
    if (history.length > 80) history.pop();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return item;
  } catch (e) {
    console.error("Failed to save learning record:", e);
    return null;
  }
}

/**
 * Lấy lịch sử riêng biệt cho một bài học, bài ôn chương hoặc đề thi
 * criteria: { topicId?: string, chapterId?: string, suiteId?: string, isChapter?: boolean }
 */
export function getTargetHistory(criteria = {}) {
  const history = getLearningHistory();
  return history.filter(item => {
    if (criteria.suiteId && criteria.suiteId !== 'null') {
      return item.suiteId === criteria.suiteId;
    }
    if (criteria.topicId && criteria.topicId !== 'null') {
      return item.topicId === criteria.topicId;
    }
    if (criteria.chapterId && criteria.chapterId !== 'null') {
      if (criteria.isChapter) {
        // Bài ôn cuối chương (không có topicId)
        return item.chapterId === criteria.chapterId && (!item.topicId || item.topicId === 'null');
      }
      return item.chapterId === criteria.chapterId;
    }
    return false;
  });
}

/**
 * Lấy điểm số cao nhất của một bài cụ thể
 * Trả về { score: number, formatted: string, gradeStatus?: string, attempts: number } hoặc null nếu chưa làm
 */
export function getTargetBestScore(criteria = {}) {
  const targetRecords = getTargetHistory(criteria);
  if (!targetRecords || targetRecords.length === 0) return null;

  let maxScore = -1;
  let bestRec = null;

  targetRecords.forEach(rec => {
    const s = parseFloat(rec.score) || 0;
    if (s > maxScore) {
      maxScore = s;
      bestRec = rec;
    }
  });

  if (!bestRec) return null;

  const grade = calculateGradeStatus(bestRec.score, bestRec.totalQuestions);

  return {
    score: maxScore,
    bestScore: maxScore.toFixed(1),
    formatted: maxScore.toFixed(maxScore % 1 === 0 ? 0 : 1),
    totalQuestions: bestRec.totalQuestions,
    grade: grade,
    gradeStatus: grade ? grade.label : null,
    gradeClass: grade ? grade.badgeClass : null,
    attempts: targetRecords.length,
    lastDate: bestRec.formattedDate
  };
}

export function clearLearningHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error("Failed to clear learning history:", e);
    return false;
  }
}

/**
 * Chỉ xóa lịch sử các bài thi thử (mode: 'exam'), bảo toàn lịch sử bài tập luyện tập
 */
export function clearExamHistoryOnly() {
  try {
    const history = getLearningHistory();
    const remaining = history.filter(item => item.mode !== 'exam');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
    return true;
  } catch (e) {
    console.error("Failed to clear exam history:", e);
    return false;
  }
}

