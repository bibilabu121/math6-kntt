/**
 * THUẬT TOÁN XÁO TRỘN CÂU HỎI VÀ ĐÁO ĐÁP ÁN (ANTI-CRAMMING ENGINE)
 * Đảm bảo học sinh không thể học vẹt thứ tự A/B/C/D hay vị trí câu hỏi
 */

// Thuật toán Fisher-Yates shuffle ngẫu nhiên đều
export function fisherYatesShuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Đảo thứ tự các đáp án trắc nghiệm trong câu hỏi và ánh xạ lại chính xác correct_answer
 * @param {Object} question - Đối tượng câu hỏi Math6Question
 * @returns {Object} Câu hỏi mới với options đã được tráo ngẫu nhiên và correct_answer cập nhật
 */
export function shuffleQuestionOptions(question) {
  if (!question.options || question.options.length <= 1) {
    return { ...question };
  }

  // Clone shallow
  const cloned = { ...question };
  const originalOptions = [...question.options];
  const shuffledOptions = fisherYatesShuffle(originalOptions);
  cloned.options = shuffledOptions;

  // Nếu correct_answer là string (nội dung đáp án đúng)
  if (typeof question.correct_answer === "string") {
    // Giá trị đáp án dạng chuỗi không đổi, chỉ vị trí đổi
    cloned.correct_answer = question.correct_answer;
  } 
  // Nếu correct_answer là số (index của đáp án đúng ban đầu: 0, 1, 2, 3)
  else if (typeof question.correct_answer === "number" && Number.isInteger(question.correct_answer)) {
    const correctContent = originalOptions[question.correct_answer];
    const newIndex = shuffledOptions.indexOf(correctContent);
    cloned.correct_answer = newIndex >= 0 ? newIndex : question.correct_answer;
  }
  // Nếu correct_answer là mảng các chuỗi hoặc index (dành cho multiple_choice)
  else if (Array.isArray(question.correct_answer)) {
    if (typeof question.correct_answer[0] === "number") {
      const correctContents = question.correct_answer.map(idx => originalOptions[idx]);
      cloned.correct_answer = correctContents.map(c => shuffledOptions.indexOf(c)).filter(i => i >= 0);
    } else {
      cloned.correct_answer = [...question.correct_answer];
    }
  }

  return cloned;
}

/**
 * Chuẩn bị danh sách câu hỏi cho buổi thi / luyện tập:
 * - Lọc theo yêu cầu
 * - Đảo ngẫu nhiên thứ tự câu hỏi
 * - Đảo ngẫu nhiên các phương án lựa chọn trong từng câu
 */
export function prepareSessionQuestions(questions, { shuffleQuestions = true, shuffleOptions = true } = {}) {
  let list = questions.map(q => ({ ...q }));

  if (shuffleOptions) {
    list = list.map(q => shuffleQuestionOptions(q));
  }

  if (shuffleQuestions) {
    list = fisherYatesShuffle(list);
  }

  return list;
}
